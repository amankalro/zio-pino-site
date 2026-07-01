import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const OPENTABLE_SRC =
  '//www.opentable.com.au/widget/reservation/loader?rid=217094&type=standard&theme=standard&color=1&dark=false&iframe=true&domain=comau&lang=en-AU&newtab=false&ot_source=Restaurant%20website&cfe=true';

const RESERVATION_EVENT = 'open-reservation';

/** Opens the reservation modal from anywhere in the app. */
export function openReservation() {
  window.dispatchEvent(new Event(RESERVATION_EVENT));
}

export default function ReservationModal() {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Listen for open requests dispatched by the "Book a Table" buttons.
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(RESERVATION_EVENT, handler);
    return () => window.removeEventListener(RESERVATION_EVENT, handler);
  }, []);

  // Lock body scroll and allow Esc to close while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // (Re)load the OpenTable widget each time the modal opens.
  useEffect(() => {
    const container = widgetRef.current;
    if (!open || !container) return;
    container.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = OPENTABLE_SRC;
    script.async = true;
    container.appendChild(script);
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(13,12,11,0.82)', backdropFilter: 'blur(8px)' }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Reserve a table"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden"
            style={{ background: '#f9f1e4', borderRadius: 4 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ background: '#0d0c0b' }}
            >
              <span
                className="text-lg"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#f9f1e4',
                  letterSpacing: '0.01em',
                }}
              >
                Reserve a Table
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close reservation"
                className="p-1 transition-colors duration-200"
                style={{ color: 'rgba(249,241,228,0.7)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#2e8b57';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(249,241,228,0.7)';
                }}
              >
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>

            {/* OpenTable widget */}
            <div className="flex justify-center px-4 py-6">
              <div ref={widgetRef} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

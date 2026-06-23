import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UtensilsCrossed, ShoppingBag } from 'lucide-react';

export default function MenuLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="menus"
      className="relative overflow-hidden"
      style={{ background: '#0d0c0b', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div
        ref={ref}
        className="max-w-3xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4 mb-5"
        >
          <div className="h-px w-10 opacity-50" style={{ background: '#2e8b57' }} />
          <span
            className="text-xs tracking-[0.26em] uppercase font-medium"
            style={{ color: '#2e8b57', fontFamily: "'Inter', sans-serif" }}
          >
            Our Menus
          </span>
          <div className="h-px w-10 opacity-50" style={{ background: '#2e8b57' }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold leading-tight mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
            color: '#f9f1e4',
            letterSpacing: '-0.01em',
          }}
        >
          Dine In or{' '}
          <em style={{ color: '#2e8b57', fontStyle: 'italic' }}>Take Away</em>
        </motion.h2>

        {/* Menu buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/assets/dine-in-menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: '#a3242b',
              color: '#f9f1e4',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#861c22';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#a3242b';
            }}
          >
            <UtensilsCrossed size={15} strokeWidth={1.8} />
            Dine-In Menu
          </a>

          <a
            href="/assets/zio-pino-menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: 'transparent',
              border: '1px solid rgba(163,36,43,0.6)',
              color: '#e0888c',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#a3242b';
              el.style.color = '#f9f1e4';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.color = '#e0888c';
            }}
          >
            <ShoppingBag size={15} strokeWidth={1.8} />
            Take-Away Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}

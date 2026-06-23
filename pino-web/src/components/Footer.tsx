import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '11:00am – 2:00pm, 5:00pm – 9:00pm' },
  { day: 'Saturday', time: '5:00pm – 9:00pm' },
  { day: 'Sunday', time: '5:00pm – 9:00pm' },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <footer
      style={{ background: '#0d0c0b', borderTop: '1px solid rgba(249,241,228,0.07)' }}
    >
      {/* Top decorative line */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(190,47,53,0.35) 30%, rgba(190,47,53,0.35) 70%, transparent)',
        }}
      />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20"
        style={{ paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/assets/logo-light.svg"
                alt="Zio Pino Italian Pizzeria"
                className="h-20 w-auto"
              />
            </div>
            <p
              className="font-light leading-relaxed mb-6 text-sm"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(249,241,228,0.5)',
                lineHeight: 1.75,
              }}
            >
              Authentic Italian pizza and pasta,
              handcrafted with love in Mascot
              since 1982.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/zio.pino.mascot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zio Pino on Instagram"
                className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(249,241,228,0.06)',
                  border: '1px solid rgba(249,241,228,0.1)',
                  color: 'rgba(249,241,228,0.6)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(190,47,53,0.12)';
                  el.style.borderColor = 'rgba(190,47,53,0.4)';
                  el.style.color = '#be2f35';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(249,241,228,0.06)';
                  el.style.borderColor = 'rgba(249,241,228,0.1)';
                  el.style.color = 'rgba(249,241,228,0.6)';
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hours column */}
          <div>
            <h4
              className="text-xs tracking-[0.22em] uppercase font-medium mb-6"
              style={{ fontFamily: "'Inter', sans-serif", color: '#be2f35', letterSpacing: '0.2em' }}
            >
              Opening Hours
            </h4>
            <ul className="space-y-3">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex items-start gap-2">
                  <Clock size={12} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'rgba(190,47,53,0.55)' }} />
                  <div>
                    <span
                      className="block text-xs font-light"
                      style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.45)', letterSpacing: '0.04em' }}
                    >
                      {day}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.75)' }}
                    >
                      {time}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Location column */}
          <div>
            <h4
              className="text-xs tracking-[0.22em] uppercase font-medium mb-6"
              style={{ fontFamily: "'Inter', sans-serif", color: '#be2f35', letterSpacing: '0.2em' }}
            >
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'rgba(190,47,53,0.55)' }} />
                <address
                  className="not-italic text-sm font-light leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.65)' }}
                >
                  930 Botany Rd<br />
                  Mascot NSW 2020<br />
                  Australia
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} strokeWidth={1.5} style={{ color: 'rgba(190,47,53,0.55)' }} />
                <a
                  href="tel:+61296692675"
                  className="text-sm font-light transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.65)' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#be2f35'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(249,241,228,0.65)'; }}
                >
                  (02) 9669 2675
                </a>
              </div>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4
              className="text-xs tracking-[0.22em] uppercase font-medium mb-6"
              style={{ fontFamily: "'Inter', sans-serif", color: '#be2f35', letterSpacing: '0.2em' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Menu', href: '/assets/dine-in-menu.pdf', external: true },
                { label: 'Our Story', href: '#story', external: false },
                { label: 'Reviews', href: '#reviews', external: false },
                { label: 'Book a Table', href: 'https://www.quandoo.com.au/place/zio-pino-pizzeria-26405/menu?aid=63&rwg_token=AE37R_gTNbrX7ZtYOg0TnAsILzN3eDZPpwnDefXLdSgeF5ywmR4OMbtbzthSYacuqrKbViAVPzvTnIvWaUHY1YGH5X8MKYUXhg==', external: true },
                { label: 'Order Online', href: 'https://ziopinopizza.ktu.com.au/', external: true },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-sm font-light transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.5)' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#be2f35'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(249,241,228,0.5)'; }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(249,241,228,0.07)' }}
        >
          <p
            className="text-xs font-light text-center sm:text-left"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(249,241,228,0.28)',
              letterSpacing: '0.04em',
            }}
          >
            © {new Date().getFullYear()} Zio Pino Pizza. All rights reserved.
          </p>
          <p
            className="text-xs font-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(249,241,228,0.2)',
            }}
          >
            Mascot · Sydney · Est. 1982
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

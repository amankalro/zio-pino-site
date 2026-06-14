import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Groups', href: '#group-menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Atmosphere', href: '#atmosphere' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(13, 12, 11, 0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 168, 67, 0.12)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none group">
            <span
              className="text-2xl tracking-widest uppercase font-light"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#d4a843',
                letterSpacing: '0.22em',
              }}
            >
              ZIO
            </span>
            <span
              className="text-3xl -mt-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: '#f9f1e4',
                letterSpacing: '0.02em',
              }}
            >
              Pino
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-light tracking-widest uppercase transition-colors duration-200"
                  style={{
                    color: 'rgba(249, 241, 228, 0.7)',
                    letterSpacing: '0.14em',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#d4a843';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'rgba(249, 241, 228, 0.7)';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://ziopinopizza.ktu.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-300 rounded-sm"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.18em',
                background: 'rgba(212, 168, 67, 0.12)',
                border: '1px solid rgba(212, 168, 67, 0.4)',
                color: '#d4a843',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#d4a843';
                el.style.color = '#0d0c0b';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(212, 168, 67, 0.12)';
                el.style.color = '#d4a843';
              }}
            >
              <ExternalLink size={12} strokeWidth={2} />
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream-100 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#f9f1e4' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center md:hidden"
            style={{
              background: 'rgba(13, 12, 11, 0.97)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-light"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#f9f1e4',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.05 }}
              >
                <a
                  href="https://ziopinopizza.ktu.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-8 py-3 text-sm tracking-widest uppercase"
                  style={{
                    background: '#d4a843',
                    color: '#0d0c0b',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.18em',
                    fontWeight: 600,
                  }}
                >
                  Order Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

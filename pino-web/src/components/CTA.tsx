import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, ExternalLink, Flame } from 'lucide-react';

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      {/* Background: ingredients photo with heavy cinematic treatment */}
      <div className="absolute inset-0">
        <picture className="contents">
          <source srcSet="/assets/ingredients.webp" type="image/webp" />
          <img
            src="/assets/ingredients.jpg"
            alt="Italian ingredients"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </picture>
        {/* Multi-layer overlay for drama */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(13,12,11,0.97) 0%, rgba(13,12,11,0.88) 40%, rgba(13,12,11,0.82) 70%, rgba(13,12,11,0.92) 100%)',
          }}
        />
        {/* Warm center glow — ingredients catch warm light */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 50%, rgba(212,130,40,0.14) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center"
      >
        {/* Flame icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-7"
        >
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full"
            style={{
              background: 'rgba(212,168,67,0.12)',
              border: '1px solid rgba(212,168,67,0.3)',
            }}
          >
            <Flame size={26} strokeWidth={1.5} style={{ color: '#d4a843' }} />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-10 opacity-50" style={{ background: '#d4a843' }} />
          <span
            className="text-xs tracking-[0.26em] uppercase font-medium"
            style={{ color: '#d4a843', fontFamily: "'Inter', sans-serif" }}
          >
            Order Tonight
          </span>
          <div className="h-px w-10 opacity-50" style={{ background: '#d4a843' }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            color: '#f9f1e4',
            letterSpacing: '-0.01em',
          }}
        >
          Ready for Real
          <br />
          <em style={{ color: '#d4a843', fontStyle: 'italic' }}>
            Italian Food?
          </em>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="font-light leading-relaxed mb-10 max-w-xl mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.05rem',
            color: 'rgba(249,241,228,0.68)',
            lineHeight: 1.8,
          }}
        >
          Order online for pickup or delivery, or call us directly.
          We're open 7 days — come hungry.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://ziopinopizza.ktu.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-9 py-4 text-sm font-semibold tracking-widest uppercase overflow-hidden"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: '#d4a843',
              color: '#0d0c0b',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <ExternalLink size={14} strokeWidth={2} />
            Order Online
          </a>

          <a
            href="tel:+61296692675"
            className="flex items-center gap-3 px-9 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: 'transparent',
              border: '1px solid rgba(249,241,228,0.3)',
              color: '#f9f1e4',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(212,168,67,0.5)';
              el.style.color = '#d4a843';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(249,241,228,0.3)';
              el.style.color = '#f9f1e4';
            }}
          >
            <Phone size={14} strokeWidth={1.8} />
            (02) 9669 2675
          </a>
        </motion.div>

        {/* Hours strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-8 py-4"
          style={{
            background: 'rgba(28,26,23,0.6)',
            border: '1px solid rgba(249,241,228,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {[
            { label: 'Mon – Fri', hours: '11am – 2pm  ·  5pm – 9pm' },
            { label: 'Sat – Sun', hours: '5pm – 9pm' },
          ].map(({ label, hours }) => (
            <div key={label} className="flex items-center gap-3">
              <span
                className="text-xs tracking-wide uppercase font-light"
                style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.45)', letterSpacing: '0.1em' }}
              >
                {label}
              </span>
              <span
                className="text-xs font-medium"
                style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.75)' }}
              >
                {hours}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

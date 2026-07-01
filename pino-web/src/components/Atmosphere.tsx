import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { openReservation } from './ReservationModal';

export default function Atmosphere() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const inView = useInView(textRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const fadeIn = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <section
      id="atmosphere"
      ref={sectionRef}
      className="hidden relative overflow-hidden"
      style={{ minHeight: '80vh', background: '#0d0c0b' }}
    >
      {/* Full-bleed background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
          <picture className="contents">
            <source srcSet="/assets/atmosphere.webp" type="image/webp" />
            <img
              src="/assets/atmosphere.jpg"
              alt="Zio Pino warm restaurant atmosphere"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </picture>
        </motion.div>

        {/* Deep cinematic overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: fadeIn }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(13,12,11,0.96) 0%, rgba(13,12,11,0.7) 40%, rgba(13,12,11,0.3) 70%, rgba(13,12,11,0.55) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(13,12,11,0.5) 0%, transparent 30%, transparent 60%, rgba(13,12,11,0.85) 100%)',
            }}
          />
        </motion.div>

        {/* Warm amber vignette — mirroring restaurant lights */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 40%, rgba(212,140,40,0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center"
        style={{ minHeight: '80vh', paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div ref={textRef} className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-10 opacity-50" style={{ background: '#2e8b57' }} />
            <span
              className="text-xs tracking-[0.26em] uppercase font-medium"
              style={{ color: '#2e8b57', fontFamily: "'Inter', sans-serif" }}
            >
              The Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold leading-tight mb-7"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              color: '#f9f1e4',
              letterSpacing: '-0.01em',
            }}
          >
            Where Every Meal
            <br />
            Becomes a{' '}
            <em style={{ color: '#2e8b57', fontStyle: 'italic' }}>Memory</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-light leading-relaxed mb-10 max-w-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(249,241,228,0.72)',
              lineHeight: 1.8,
            }}
          >
            Step inside and feel Mascot disappear. Exposed brick, pendant light,
            the crackle of the stone oven — Zio Pino is where locals linger over wine
            and strangers become regulars.
          </motion.p>

          {/* Atmospheric pull-quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-6 mb-10"
            style={{ borderLeft: '2px solid rgba(46,139,87,0.5)' }}
          >
            <p
              className="font-light italic leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.35rem',
                color: 'rgba(249,241,228,0.82)',
                fontStyle: 'italic',
              }}
            >
              "The kind of place where you come for the food<br />
              and stay for the family."
            </p>
            <footer
              className="mt-3 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(46,139,87,0.7)', letterSpacing: '0.18em' }}
            >
              — A Happy Regular
            </footer>
          </motion.blockquote>

          <motion.button
            type="button"
            onClick={openReservation}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: 'rgba(46,139,87,0.12)',
              border: '1px solid rgba(46,139,87,0.35)',
              color: '#2e8b57',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#2e8b57';
              (e.currentTarget as HTMLElement).style.color = '#0d0c0b';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(46,139,87,0.12)';
              (e.currentTarget as HTMLElement).style.color = '#2e8b57';
            }}
          >
            Book a Table
          </motion.button>
        </div>
      </div>
    </section>
  );
}

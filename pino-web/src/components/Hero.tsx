import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Clock, Star } from 'lucide-react';

const STAGGER = 0.12;

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * STAGGER,
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const trustItems = [
  { icon: MapPin, label: 'Mascot, Sydney' },
  { icon: Clock, label: 'Open 7 Days' },
  { icon: Star, label: '4.8 Stars · 600+ Reviews' },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.35]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full overflow-hidden film-grain"
      style={{ height: '100svh', minHeight: 640 }}
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 scale-110 origin-center"
        style={{ y: imgY }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <picture className="block w-full h-full">
          <source media="(max-width: 767px)" srcSet="/assets/mobile-hero.webp" type="image/webp" />
          <source media="(max-width: 767px)" srcSet="/assets/mobile-hero.jpg" />
          <source srcSet="/assets/hero.webp" type="image/webp" />
          <img
            src="/assets/hero.jpg"
            alt="Wood-fired pizza at Zio Pino"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </motion.div>

      {/* Cinematic overlays — layered for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,12,11,0.35) 0%, rgba(13,12,11,0.12) 35%, rgba(13,12,11,0.52) 70%, rgba(13,12,11,0.92) 100%)',
        }}
      />
      {/* Side vignettes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(13,12,11,0.72) 100%)',
        }}
      />
      {/* Scroll-driven darkening */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: '#0d0c0b', opacity: overlayOpacity }}
      />

      {/* Warm golden glow from bottom-left — fire reflection */}
      <div
        className="absolute bottom-0 left-0 w-2/3 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 90%, rgba(234, 96, 16, 0.18) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto left-0 right-0">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="text-xs tracking-[0.28em] uppercase font-semibold"
            style={{ color: 'rgba(249,241,228,0.95)', fontFamily: "'Inter', sans-serif" }}
          >
            Since 1982 · Mascot, Sydney
          </span>
          <div className="h-px w-16 opacity-70" style={{ background: '#2e8b57' }} />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-bold leading-[0.92] mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 7vw, 5.8rem)',
            color: '#f9f1e4',
            letterSpacing: '-0.01em',
            maxWidth: '16ch',
          }}
        >
          At Zio Pino,
          <br />
          <em
            className="not-italic"
            style={{ color: '#f9f1e4', fontStyle: 'italic' }}
          >
            you're family
          </em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-light leading-relaxed mb-8 max-w-lg"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
            color: 'rgba(249, 241, 228, 0.78)',
            letterSpacing: '0.01em',
          }}
        >
          Serving authentic Italian food, generous portions and warm hospitality to the Mascot community since 1982.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-4 mb-0 sm:mb-12"
        >
          <a
            href="https://ziopinopizza.ktu.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 text-sm font-semibold tracking-widest uppercase overflow-hidden transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: '#a3242b',
              color: '#f9f1e4',
            }}
          >
            <span className="relative z-10">Order Online</span>
            <span
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style={{ background: '#861c22' }}
            />
          </a>

          <a
            href="/assets/zio-pino-menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: 'transparent',
              border: '1px solid rgba(249, 241, 228, 0.35)',
              color: '#f9f1e4',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(163,36,43, 0.6)';
              (e.currentTarget as HTMLElement).style.color = '#a3242b';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249, 241, 228, 0.35)';
              (e.currentTarget as HTMLElement).style.color = '#f9f1e4';
            }}
          >
            Take-Away Menu
          </a>

          <a
            href="/assets/dine-in-menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: 'transparent',
              border: '1px solid rgba(249, 241, 228, 0.35)',
              color: '#f9f1e4',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(163,36,43, 0.6)';
              (e.currentTarget as HTMLElement).style.color = '#a3242b';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249, 241, 228, 0.35)';
              (e.currentTarget as HTMLElement).style.color = '#f9f1e4';
            }}
          >
            Dine-In Menu
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="hidden sm:flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon
                size={13}
                strokeWidth={1.5}
                style={{ color: '#2e8b57' }}
              />
              <span
                className="text-xs font-light tracking-wide"
                style={{
                  color: 'rgba(249, 241, 228, 0.6)',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.06em',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} strokeWidth={1.5} style={{ color: 'rgba(46,139,87, 0.6)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

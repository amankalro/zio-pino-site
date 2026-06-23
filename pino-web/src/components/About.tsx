import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: '40+', label: 'Years Serving' },
  { value: '100%', label: 'Stone-fired Oven' },
  { value: 'Family', label: 'Run & Owned' },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const inView = useInView(textRef, { once: true, margin: '-80px' });
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0d0c0b 0%, #141311 40%, #1c1a17 100%)',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Warm left-edge ambient glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 50%, rgba(212,168,67,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -48 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image with parallax */}
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ aspectRatio: '4/5' }}
            >
              <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
                <img
                  src="/assets/real-interior.jpg"
                  alt="Zio Pino restaurant interior"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>

              {/* Warm overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom right, rgba(13,12,11,0.25) 0%, transparent 50%, rgba(13,12,11,0.4) 100%)',
                }}
              />
            </div>

            {/* Floating accent block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={imgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-4 md:-right-8 p-6"
              style={{
                background: '#1c1a17',
                border: '1px solid rgba(212,168,67,0.2)',
                maxWidth: 210,
              }}
            >
              <p
                className="leading-relaxed text-sm mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.15rem',
                  color: 'rgba(249,241,228,0.85)',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                }}
              >
                "Every pizza is a love letter to Italy."
              </p>
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#d4a843',
                  letterSpacing: '0.18em',
                  fontSize: '0.65rem',
                }}
              >
                — Pino, Founder
              </span>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <div ref={textRef} className="lg:pl-4">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-10 opacity-50" style={{ background: '#d4a843' }} />
              <span
                className="text-xs tracking-[0.26em] uppercase font-medium"
                style={{ color: '#d4a843', fontFamily: "'Inter', sans-serif" }}
              >
                Our Story
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp(0.08)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                color: '#f9f1e4',
                letterSpacing: '-0.01em',
              }}
            >
              A Family Table
              <br />
              <em style={{ color: '#d4a843', fontStyle: 'italic' }}>
                in the Heart of Mascot
              </em>
            </motion.h2>

            <motion.div
              variants={fadeUp(0.16)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-5 mb-10"
            >
              <p
                className="font-light leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.03rem',
                  color: 'rgba(249,241,228,0.68)',
                  lineHeight: 1.8,
                }}
              >
                For over four decades, Zio Pino has been a local favourite, bringing
                people together through authentic Italian food, generous hospitality
                and a welcoming family atmosphere. Since opening our doors in 1982,
                Pino has become a familiar face to generations of customers who have
                grown up sharing meals, celebrations and special moments around our
                tables.
              </p>
              <p
                className="font-light leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.03rem',
                  color: 'rgba(249,241,228,0.68)',
                  lineHeight: 1.8,
                }}
              >
                What started as a passion for good food and good company continues
                today with the same values at heart — generous servings, traditional
                Italian flavours and treating every guest like family. Whether it's
                your first visit or your fiftieth, we look forward to welcoming you to
                the Zio Pino family.
              </p>
              <p
                className="font-light leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.03rem',
                  color: 'rgba(249,241,228,0.68)',
                  lineHeight: 1.8,
                }}
              >
                Over 40 years later, the recipes are still authentic, the portions are
                still generous, and Pino is still greeting customers with the same
                smile that made Zio Pino a beloved part of the community.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  color: '#d4a843',
                  lineHeight: 1.6,
                }}
              >
                Grazie for being part of our story.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp(0.24)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: '1px solid rgba(249,241,228,0.1)' }}
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="font-bold leading-none mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                      color: '#d4a843',
                    }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-xs tracking-wide font-light"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: 'rgba(249,241,228,0.5)',
                      letterSpacing: '0.06em',
                      lineHeight: 1.4,
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

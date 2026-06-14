import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const dishes = [
  {
    name: 'Margherita Pizza',
    category: 'Pizza',
    description:
      'Tomato, cheese and oregano on our signature stone-baked base. Simple, honest, and perfect every time.',
    tag: 'Our Signature',
    tagColor: '#d4a843',
  },
  {
    name: 'Spaghetti Marinara',
    category: 'Pasta',
    description:
      'A generous combination of fresh seafood cooked in a rich Napoletana sauce. A Zio Pino classic.',
    tag: "Chef's Choice",
    tagColor: '#c2410c',
  },
  {
    name: 'Garlic Bread',
    category: 'Breads',
    description:
      'A serving of four golden pieces — crisp on the outside, soft within. The perfect way to start any meal.',
    tag: 'Most Loved',
    tagColor: '#5a6b3a',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function FeaturedDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' });

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#0d0c0b', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      {/* Subtle warm glow top-right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 10%, rgba(212,168,67,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? 'visible' : 'hidden'}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 opacity-50" style={{ background: '#d4a843' }} />
            <span
              className="text-xs tracking-[0.26em] uppercase font-medium"
              style={{ color: '#d4a843', fontFamily: "'Inter', sans-serif" }}
            >
              From Our Kitchen
            </span>
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
              color: '#f9f1e4',
              letterSpacing: '-0.01em',
              maxWidth: '18ch',
            }}
          >
            Handcrafted with
            <br />
            <em style={{ color: '#d4a843', fontStyle: 'italic' }}>
              Italian Soul
            </em>
          </h2>
          <p
            className="font-light max-w-xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(249,241,228,0.62)',
              lineHeight: 1.75,
            }}
          >
            Every dish begins with the finest fresh ingredients,
            prepared with decades of craft, and served with genuine warmth.
          </p>
        </motion.div>

        {/* Top row: real food spread + lasagna image card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mb-6 lg:mb-8">

          {/* Large real-restaurant food spread — 3 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-3 relative group overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src="/assets/real-spread.jpg"
              alt="Food spread at Zio Pino Pizza"
              className="w-full h-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(13,12,11,0.7) 0%, transparent 45%, rgba(13,12,11,0.15) 100%)',
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <p
                className="font-light italic leading-snug max-w-xs"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.15rem',
                  color: 'rgba(249,241,228,0.9)',
                  fontStyle: 'italic',
                }}
              >
                "Everything on the table, made fresh tonight."
              </p>
              <span
                className="text-xs tracking-[0.22em] uppercase font-medium px-3 py-1.5 shrink-0 ml-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: 'rgba(13,12,11,0.75)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212,168,67,0.3)',
                  color: '#d4a843',
                }}
              >
                Dine In
              </span>
            </div>
          </motion.div>

          {/* Lasagna image card — 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="lg:col-span-2 relative group overflow-hidden"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src="/assets/lasagna.jpg"
              alt="Lasagna at Zio Pino"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(13,12,11,0.85) 0%, rgba(13,12,11,0.1) 55%, transparent 100%)',
              }}
            />
            <div className="absolute bottom-6 left-6">
              <span
                className="block text-xs tracking-[0.22em] uppercase font-medium mb-1"
                style={{ fontFamily: "'Inter', sans-serif", color: '#d4a843' }}
              >
                Pasta
              </span>
              <h3
                className="font-bold leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  color: '#f9f1e4',
                }}
              >
                Lasagna
              </h3>
              <p
                className="mt-1 text-sm font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(249,241,228,0.65)',
                  fontSize: '0.82rem',
                }}
              >
                Napoletana sauce, mozzarella & béchamel
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: 3 text dish cards */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.name}
              variants={cardVariants}
              className="group relative p-6 cursor-pointer overflow-hidden"
              style={{
                background: 'rgba(28,26,23,0.8)',
                border: '1px solid rgba(249,241,228,0.08)',
                transition: 'border-color 0.3s ease, background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,67,0.3)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(39,36,31,0.95)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,241,228,0.08)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(28,26,23,0.8)';
              }}
            >
              {/* Warm hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 0% 100%, rgba(212,168,67,0.08) 0%, transparent 70%)',
                }}
              />

              <div className="flex items-start justify-between mb-3">
                <div>
                  <span
                    className="text-xs tracking-[0.22em] uppercase font-medium mb-1 block"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: 'rgba(249,241,228,0.4)',
                    }}
                  >
                    {dish.category}
                  </span>
                  <h3
                    className="font-semibold leading-tight"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.25rem',
                      color: '#f9f1e4',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {dish.name}
                  </h3>
                </div>
                <span
                  className="text-xs px-2.5 py-1 tracking-wide shrink-0 ml-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: `${dish.tagColor}18`,
                    border: `1px solid ${dish.tagColor}40`,
                    color: dish.tagColor,
                    fontSize: '0.7rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  {dish.tag}
                </span>
              </div>

              <p
                className="font-light leading-relaxed mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(249,241,228,0.56)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                }}
              >
                {dish.description}
              </p>

              <a
                href="https://ziopinopizza.ktu.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
              >
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#d4a843', letterSpacing: '0.16em' }}
                >
                  Order Now
                </span>
                <ArrowRight size={13} style={{ color: '#d4a843' }} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

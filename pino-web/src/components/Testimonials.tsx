import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Jaiden Walker',
    location: 'Google Review',
    rating: 5,
    text: "This restaurant is amazing. The quality of food is always 10/10 and just feels authentic. The owner is also extremely friendly and will remember you even if you don't visit too regularly. Great atmosphere that is cozy and welcoming. You feel extremely looked after!",
    date: 'Google Review',
  },
  {
    name: 'Keith Woods',
    location: 'Google Review',
    rating: 5,
    text: "I've had the pleasure to live close to Zio Pino for about 4 years now. What an excellent restaurant. Simple food done right. Your staff are legends as well, whenever I ask for extra cheese — they deliver and I mean really deliver. Talking about a full takeaway container filled with cheese. The food is reasonably priced. I really like this business.",
    date: 'Google Review',
  },
  {
    name: 'Stephen Claxton',
    location: 'Google Review',
    rating: 5,
    text: "Cosy, casual Italian. Food tasted great and arrived in good time. Staff were friendly and helpful. Felt like a suburban Italian restaurant from the 80s — with classic Italian comfort food. We certainly felt super comfortable after tasty entrees, rustic pizza and indulgent dessert!",
    date: 'Google Review',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const headInView = useInView(headRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-40px' });

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1c1a17 0%, #141311 100%)',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(190,47,53,0.06) 0%, transparent 55%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 opacity-50" style={{ background: '#be2f35' }} />
            <span
              className="text-xs tracking-[0.26em] uppercase font-medium"
              style={{ color: '#be2f35', fontFamily: "'Inter', sans-serif" }}
            >
              What Locals Say
            </span>
            <div className="h-px w-12 opacity-50" style={{ background: '#be2f35' }} />
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: '#f9f1e4',
              letterSpacing: '-0.01em',
            }}
          >
            Loved by the{' '}
            <em style={{ color: '#be2f35', fontStyle: 'italic' }}>
              Community
            </em>
          </h2>
          {/* Stars aggregate */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#be2f35" stroke="none" />
            ))}
            <span
              className="ml-3 text-sm font-medium"
              style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.6)' }}
            >
              5.0 · Google Reviews
            </span>
          </div>
        </motion.div>

        {/* Review cards grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              variants={cardVariants}
              className="group relative p-7 overflow-hidden"
              style={{
                background: 'rgba(28,26,23,0.7)',
                border: '1px solid rgba(249,241,228,0.07)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.35s ease, background 0.35s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(190,47,53,0.25)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(39,36,31,0.9)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,241,228,0.07)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(28,26,23,0.7)';
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    idx % 2 === 0
                      ? 'radial-gradient(ellipse at 0% 100%, rgba(190,47,53,0.07) 0%, transparent 60%)'
                      : 'radial-gradient(ellipse at 100% 0%, rgba(190,47,53,0.07) 0%, transparent 60%)',
                }}
              />

              {/* Quote icon */}
              <Quote
                size={28}
                strokeWidth={1.2}
                className="mb-4 opacity-30"
                style={{ color: '#be2f35' }}
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={13} fill="#be2f35" stroke="none" />
                ))}
              </div>

              {/* Review text */}
              <p
                className="font-light leading-relaxed mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.97rem',
                  color: 'rgba(249,241,228,0.75)',
                  lineHeight: 1.78,
                }}
              >
                "{review.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="font-medium text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", color: '#f9f1e4' }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.4)' }}
                  >
                    {review.location}
                  </p>
                </div>
                <span
                  className="text-xs tracking-wide"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'rgba(190,47,53,0.6)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.06em',
                  }}
                >
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Check, Download, Phone } from 'lucide-react';

const plans = [
  {
    name: 'The Famiglia',
    price: 45,
    unit: 'per person',
    description: 'A generous shared table for groups — everything you need for a perfect Italian feast.',
    includes: [
      'Garlic bread to share',
      'Fresh garden salad to share',
      'Pizza selection to share',
      'Pasta selection to share',
    ],
    highlight: false,
  },
  {
    name: 'The Grande',
    price: 55,
    unit: 'per person',
    description: 'The full Zio Pino experience — everything in The Famiglia, plus our signature calamari.',
    includes: [
      'Garlic bread to share',
      'Fresh garden salad to share',
      'Pizza selection to share',
      'Pasta selection to share',
      'Calamari platters to share',
    ],
    highlight: true,
  },
];

export default function GroupMenu() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="group-menu"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #141311 0%, #1c1a17 100%)',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(46,139,87,0.07) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 opacity-40" style={{ background: '#2e8b57' }} />
            <Users size={14} strokeWidth={1.5} style={{ color: '#2e8b57' }} />
            <span
              className="text-xs tracking-[0.26em] uppercase font-medium"
              style={{ color: '#2e8b57', fontFamily: "'Inter', sans-serif" }}
            >
              Groups & Functions
            </span>
            <Users size={14} strokeWidth={1.5} style={{ color: '#2e8b57' }} />
            <div className="h-px w-12 opacity-40" style={{ background: '#2e8b57' }} />
          </div>

          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: '#f9f1e4',
              letterSpacing: '-0.01em',
            }}
          >
            Set Menu for
            <br />
            <em style={{ color: '#2e8b57', fontStyle: 'italic' }}>
              Larger Groups
            </em>
          </h2>

          <p
            className="font-light leading-relaxed max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(249,241,228,0.62)',
              lineHeight: 1.8,
            }}
          >
            Celebrating something special? Bring your crew to Zio Pino.
            Our shared set menus are made for long tables, good wine, and even better company.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col p-8 overflow-hidden"
              style={{
                background: plan.highlight
                  ? 'rgba(39,36,31,0.95)'
                  : 'rgba(28,26,23,0.8)',
                border: plan.highlight
                  ? '1px solid rgba(46,139,87,0.35)'
                  : '1px solid rgba(249,241,228,0.08)',
              }}
            >
              {/* Highlight glow */}
              {plan.highlight && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 0%, rgba(46,139,87,0.09) 0%, transparent 65%)',
                  }}
                />
              )}

              {/* Name & price */}
              <h3
                className="font-bold mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.75rem',
                  color: '#f9f1e4',
                  letterSpacing: '0.01em',
                }}
              >
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span
                  className="font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '3rem',
                    color: '#2e8b57',
                    lineHeight: 1,
                  }}
                >
                  ${plan.price}
                </span>
                <span
                  className="font-light text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(249,241,228,0.45)' }}
                >
                  {plan.unit}
                </span>
              </div>

              <p
                className="font-light leading-relaxed mb-7 text-sm"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(249,241,228,0.58)',
                  lineHeight: 1.75,
                  fontSize: '0.9rem',
                }}
              >
                {plan.description}
              </p>

              {/* Divider */}
              <div
                className="mb-6 h-px w-full"
                style={{ background: 'rgba(249,241,228,0.08)' }}
              />

              {/* Includes */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      style={{ color: '#2e8b57', flexShrink: 0 }}
                    />
                    <span
                      className="text-sm font-light"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: 'rgba(249,241,228,0.75)',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="tel:+61296692675"
                className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-medium tracking-widest uppercase transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.16em',
                  background: plan.highlight ? '#a3242b' : 'transparent',
                  border: plan.highlight
                    ? '1px solid #a3242b'
                    : '1px solid rgba(249,241,228,0.2)',
                  color: plan.highlight ? '#f9f1e4' : 'rgba(249,241,228,0.8)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = '#a3242b';
                  el.style.borderColor = '#a3242b';
                  el.style.color = '#f9f1e4';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.highlight) {
                    el.style.background = '#a3242b';
                    el.style.borderColor = '#a3242b';
                    el.style.color = '#f9f1e4';
                  } else {
                    el.style.background = 'transparent';
                    el.style.borderColor = 'rgba(249,241,228,0.2)';
                    el.style.color = 'rgba(249,241,228,0.8)';
                  }
                }}
              >
                <Phone size={13} strokeWidth={1.8} />
                Enquire & Book
              </a>
            </motion.div>
          ))}
        </div>

        {/* Download menu + note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="/assets/dine-in-menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.18em',
              background: 'rgba(163,36,43,0.12)',
              border: '1px solid rgba(163,36,43,0.4)',
              color: '#e0888c',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(163,36,43,0.2)';
              el.style.borderColor = 'rgba(163,36,43,0.6)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(163,36,43,0.12)';
              el.style.borderColor = 'rgba(163,36,43,0.4)';
            }}
          >
            <Download size={13} strokeWidth={2} />
            Download Full Menu (PDF)
          </a>

          <p
            className="text-xs font-light text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(249,241,228,0.35)',
              letterSpacing: '0.04em',
            }}
          >
            Minimum 6 guests · Please call to arrange · (02) 9669 2675
          </p>
        </motion.div>
      </div>
    </section>
  );
}

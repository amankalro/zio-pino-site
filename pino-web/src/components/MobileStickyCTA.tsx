import { motion } from 'framer-motion';
import { Phone, CalendarDays, UtensilsCrossed } from 'lucide-react';

const actions = [
  {
    label: 'Call',
    icon: Phone,
    href: 'tel:+61296692675',
    primary: false,
  },
  {
    label: 'Book a Table',
    icon: CalendarDays,
    href: 'https://www.quandoo.com.au/place/zio-pino-pizzeria-26405/menu?aid=63&rwg_token=AE37R_gTNbrX7ZtYOg0TnAsILzN3eDZPpwnDefXLdSgeF5ywmR4OMbtbzthSYacuqrKbViAVPzvTnIvWaUHY1YGH5X8MKYUXhg==',
    primary: true,
  },
  {
    label: 'Menu',
    icon: UtensilsCrossed,
    href: '/assets/dine-in-menu.pdf',
    primary: false,
  },
];

export default function MobileStickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: 'rgba(13,12,11,0.95)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderTop: '1px solid rgba(46,139,87,0.2)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-stretch h-16">
        {actions.map(({ label, icon: Icon, href, primary }, i) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('tel:') ? undefined : '_blank'}
            rel={href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
            className="flex-1 flex flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-95"
            style={{
              background: primary ? '#a3242b' : 'transparent',
              borderRight: i < actions.length - 1 ? '1px solid rgba(249,241,228,0.08)' : 'none',
            }}
          >
            <Icon
              size={18}
              strokeWidth={1.6}
              style={{ color: primary ? '#f9f1e4' :'rgba(249,241,228,0.8)' }}
            />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.16em',
                color: primary ? '#f9f1e4' :'rgba(249,241,228,0.6)',
              }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];
export const ease = EASE;

/** Fades and lifts content into view once. */
export function Reveal({ as = 'div', children, delay = 0, y = 28, className, amount = 0.2, ...rest }) {
  const Cmp = motion[as] ?? motion.div;
  return (
    <Cmp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Cmp>
  );
}

/** Parent for staggered children. Pair with <StaggerItem>. */
export function Stagger({ as = 'div', children, className, stagger = 0.12, amount = 0.15, ...rest }) {
  const Cmp = motion[as] ?? motion.div;
  return (
    <Cmp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </Cmp>
  );
}

export function StaggerItem({ as = 'div', children, className, ...rest }) {
  const Cmp = motion[as] ?? motion.div;
  return (
    <Cmp
      className={className}
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Cmp>
  );
}

/** Clip-path reveal for images: a panel wipes upward and the image settles from a slight zoom. */
export function ImageReveal({ children, className = '', direction = 'up', delay = 0 }) {
  const reduce = useReducedMotion();
  const from = direction === 'left' ? 'inset(0 100% 0 0)' : 'inset(100% 0 0 0)';
  if (reduce) return <div className={`image-reveal ${className}`}>{children}</div>;
  return (
    <motion.div
      className={`image-reveal ${className}`}
      initial={{ clipPath: from }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.3, ease: EASE, delay }}
    >
      <motion.div
        className="image-reveal__inner"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.8, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Thin gold rule that draws itself in. */
export function AnimatedLine({ className = '', delay = 0, vertical = false }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`gold-line${vertical ? ' gold-line--v' : ''} ${className}`}
      style={{ originX: 0, originY: 0 }}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    />
  );
}

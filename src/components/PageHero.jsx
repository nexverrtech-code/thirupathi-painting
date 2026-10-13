import { motion, useReducedMotion } from 'motion/react';
import { ease } from './Motion';
import SmartImage from './SmartImage';
import { useLanguage } from '../hooks/useLanguage';

/** Editorial page header used by inner pages. */
export default function PageHero({ eyebrow, title, text, image, imageAlt = '', children }) {
  const reduce = useReducedMotion();
  const { lang } = useLanguage();
  const initial = (v) => (reduce ? false : v);
  return (
    <section className="page-hero texture-emerald" aria-labelledby="page-title">
      {image && (
        <motion.div
          className="page-hero__media"
          initial={initial({ clipPath: 'inset(0 0 0 100%)' })}
          animate={{ clipPath: 'inset(0 0 0 0%)' }}
          transition={{ duration: 1.4, ease, delay: 0.15 }}
        >
          <SmartImage image={image} alt={imageAlt} priority sizes="(min-width: 1024px) 40vw, 100vw" />
        </motion.div>
      )}
      <div className="container page-hero__inner">
        <motion.p
          className="eyebrow eyebrow--light"
          initial={initial({ opacity: 0, y: 12 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          <motion.span
            className="gold-line eyebrow__line"
            style={{ originX: 0 }}
            initial={initial({ scaleX: 0 })}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
          />
          <span>{eyebrow}</span>
        </motion.p>
        <h1 id="page-title" className="page-hero__title" key={lang}>
          <span className="hero__word-mask">
            <motion.span
              className="hero__word"
              initial={initial({ y: '105%' })}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              {title}
            </motion.span>
          </span>
        </h1>
        {text && (
          <motion.p
            className="page-hero__text"
            initial={initial({ opacity: 0, y: 14 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
          >
            {text}
          </motion.p>
        )}
        {children && (
          <motion.div
            className="page-hero__extra"
            initial={initial({ opacity: 0, y: 14 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

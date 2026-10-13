import { Fragment, useRef } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { IMAGES } from '../data/images';
import SmartImage from './SmartImage';
import { ease } from './Motion';

const STRIPS = 5;

export default function Hero() {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();
  const desktop = useMediaQuery('(min-width: 1024px)');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const parallax = desktop && !reduce;
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', parallax ? '18%' : '0%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', parallax ? '-12%' : '0%']);

  const words = t('hero.title').split(' ');

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <motion.div className="hero__media" style={{ y: imgY }}>
        <motion.div
          className="hero__media-inner"
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
        >
          <SmartImage image={IMAGES.hero} alt={t('hero.imageAlt')} priority sizes="100vw" />
        </motion.div>
      </motion.div>
      <div className="hero__shade" aria-hidden="true" />

      {/* Paint-reveal: emerald strokes sweep away to uncover the photograph. */}
      {!reduce && (
        <div className="hero__strips" aria-hidden="true">
          {Array.from({ length: STRIPS }).map((_, i) => (
            <motion.span
              key={i}
              className="hero__strip"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i }}
            />
          ))}
        </div>
      )}

      <motion.div className="hero__content container" style={{ y: contentY }}>
        <motion.p
          className="hero__eyebrow"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
        >
          <motion.span
            className="hero__eyebrow-line"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease }}
          />
          {t('hero.eyebrow')}
        </motion.p>

        <h1 id="hero-title" className="hero__title" key={lang}>
          {words.map((w, i) => (
            <Fragment key={`${w}-${i}`}>
              <span className="hero__word-mask">
                <motion.span
                  className="hero__word"
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1, ease, delay: 0.65 + i * 0.06 }}
                >
                  {w}
                </motion.span>
              </span>{' '}
            </Fragment>
          ))}
        </h1>

        <motion.div
          className="hero__rule"
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.1, ease }}
        />

        <motion.p
          className="hero__text"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease }}
        >
          {t('hero.text')}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease }}
        >
          <Link to="/contact#enquiry" className="btn btn--gold btn--lg">
            <span>{t('hero.primary')}</span>
            <ArrowRight className="btn__arrow" size={17} aria-hidden="true" />
          </Link>
          <Link to="/works" className="btn btn--outline-light btn--lg">
            <span>{t('hero.secondary')}</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__aside"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span>{t('hero.location')}</span>
      </motion.div>

      <motion.a
        href="#intro"
        className="hero__scroll"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span>{t('hero.scroll')}</span>
        <ArrowDown size={16} aria-hidden="true" />
      </motion.a>

      <p className="hero__sample">{t('common.sample')}</p>
    </section>
  );
}

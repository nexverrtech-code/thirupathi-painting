import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { Info } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { CATEGORIES, COMPARISONS, PROJECTS } from '../data/projects';
import { IMAGES } from '../data/images';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import SectionHeading from '../components/SectionHeading';
import CtaSection from '../components/CtaSection';
import { Reveal } from '../components/Motion';

export default function Works() {
  const { t, pick } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [index, setIndex] = useState(null);

  const visible = useMemo(
    () => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))),
    [filter]
  );
  const counts = useMemo(
    () => Object.fromEntries(CATEGORIES.map((c) => [c, c === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.categories.includes(c)).length])),
    []
  );
  const hasSamples = PROJECTS.some((p) => p.kind !== 'completed');

  return (
    <>
      <Seo page="works" path="/works" />
      <PageHero
        eyebrow={t('worksPage.eyebrow')}
        title={t('worksPage.title')}
        text={t('worksPage.text')}
        image={IMAGES.exteriorVilla}
        imageAlt=""
      />

      <section className="section works texture-ivory" aria-label={t('worksPage.eyebrow')}>
        <div className="container">
          {hasSamples && (
            <Reveal className="disclaimer" role="note">
              <Info size={20} aria-hidden="true" />
              <div>
                <p className="disclaimer__title">{t('worksPage.disclaimerTitle')}</p>
                <p>{t('worksPage.disclaimer')}</p>
              </div>
            </Reveal>
          )}

          <div className="works__toolbar">
            <LayoutGroup id="filters">
              <div className="filters" role="group" aria-label={t('worksPage.filterLabel')}>
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`filter${filter === c ? ' is-active' : ''}`}
                    aria-pressed={filter === c}
                    onClick={() => setFilter(c)}
                  >
                    {filter === c && <motion.span layoutId="filter-pill" className="filter__pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                    <span className="filter__label">{t(`worksPage.filters.${c}`)}</span>
                    <span className="filter__count">{counts[c]}</span>
                  </button>
                ))}
              </div>
            </LayoutGroup>
            <p className="works__count" aria-live="polite">
              {t('worksPage.count', visible.length)}
            </p>
          </div>

          {visible.length === 0 ? (
            <p className="works__empty">{t('worksPage.empty')}</p>
          ) : (
            <motion.ul className="gallery" layout>
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((p, i) => (
                  <ProjectCard key={p.id} project={p} onOpen={() => setIndex(i)} />
                ))}
              </AnimatePresence>
            </motion.ul>
          )}
        </div>
      </section>

      <section id="compare" className="section compare" aria-labelledby="compare-title">
        <div className="container">
          <SectionHeading eyebrow={t('showcase.eyebrow')} title={t('worksPage.compareTitle')} text={t('worksPage.compareText')} id="compare-title" />
          <div className="compare__grid">
            {COMPARISONS.map((c, i) => (
              <Reveal as="figure" key={c.id} className="compare__item" delay={i * 0.12}>
                <BeforeAfterSlider after={c.after} before={c.before} alt={pick(c.alt)} sizes="(min-width: 1024px) 50vw, 100vw" />
                <figcaption>
                  <span className="compare__title">{pick(c.title)}</span>
                  {!c.before && <span className="note">{t('showcase.note')}</span>}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Lightbox items={visible} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </>
  );
}

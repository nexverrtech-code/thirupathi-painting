import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { BUSINESS } from '../data/business';
import { IMAGES } from '../data/images';
import { SERVICES } from '../data/services';
import { COMPARISONS, PROJECTS } from '../data/projects';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import SmartImage from '../components/SmartImage';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Lightbox from '../components/Lightbox';
import FAQ from '../components/FAQ';
import ColourStudio from '../components/ColourStudio';
import CtaSection from '../components/CtaSection';
import { AnimatedLine, ImageReveal, Reveal, Stagger, StaggerItem } from '../components/Motion';

const SELECTED_IDS = ['gallery-living', 'lilac-facade', 'green-dining', 'open-office', 'white-villa'];

function Intro() {
  const { t, pick } = useLanguage();
  const pillars = t('intro.pillars');
  return (
    <section id="intro" className="section intro texture-ivory" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <div className="intro__visual">
          <ImageReveal className="intro__arch">
            <SmartImage image={IMAGES.roller} alt={t('intro.imageAlt')} sizes="(min-width: 1024px) 40vw, 90vw" />
          </ImageReveal>
          <Reveal className="intro__inset" delay={0.3}>
            <SmartImage image={IMAGES.swatches} alt="" sizes="240px" />
          </Reveal>
          <Reveal className="intro__badge" delay={0.5}>
            <span className="intro__badge-name">{BUSINESS.owner}</span>
            <span className="intro__badge-role">{t('common.owner')}</span>
          </Reveal>
        </div>
        <div className="intro__content">
          <SectionHeading eyebrow={t('intro.eyebrow')} title={t('intro.title')} id="intro-title" />
          <Reveal delay={0.1}>
            <p className="lead">{t('intro.text')}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p>{t('intro.text2')}</p>
          </Reveal>
          <Stagger as="ul" className="pillars">
            {pillars.map((p, i) => (
              <StaggerItem as="li" key={p.title} className="pillar">
                <span className="pillar__num">0{i + 1}</span>
                <span className="pillar__title">{p.title}</span>
                <span className="pillar__text">{p.text}</span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="intro__sig">
              <AnimatedLine />
              <span>{pick({ en: BUSINESS.name, ta: BUSINESS.nameTa })}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const { t } = useLanguage();
  return (
    <section className="section featured texture-emerald" aria-labelledby="featured-title">
      <div className="container">
        <div className="split-head">
          <SectionHeading eyebrow={t('featured.eyebrow')} title={t('featured.title')} id="featured-title" tone="light" />
          <Reveal className="split-head__aside" delay={0.15}>
            <p>{t('featured.text')}</p>
            <Link to="/services" className="text-link text-link--light">
              <span>{t('common.viewAllServices')}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <Stagger as="ul" className="service-grid">
          {SERVICES.map((s) => (
            <StaggerItem as="li" key={s.id}>
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Showcase() {
  const { t, pick } = useLanguage();
  const item = COMPARISONS[0];
  return (
    <section className="section showcase" aria-labelledby="showcase-title">
      <div className="container showcase__grid">
        <div className="showcase__copy">
          <SectionHeading eyebrow={t('showcase.eyebrow')} title={t('showcase.title')} text={t('showcase.text')} id="showcase-title" />
          <Reveal delay={0.2} className="showcase__actions">
            <Link to="/works#compare" className="btn btn--emerald">
              <span>{t('common.exploreWorks')}</span>
              <ArrowRight className="btn__arrow" size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="note">{t('showcase.note')}</p>
          </Reveal>
        </div>
        <Reveal className="showcase__slider" delay={0.1}>
          <BeforeAfterSlider after={item.after} before={item.before} alt={pick(item.alt)} />
        </Reveal>
      </div>
    </section>
  );
}

function Selected() {
  const { t, pick } = useLanguage();
  const items = SELECTED_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
  const [index, setIndex] = useState(null);
  return (
    <section className="section selected texture-ivory" aria-labelledby="selected-title">
      <div className="container">
        <div className="split-head">
          <SectionHeading eyebrow={t('selected.eyebrow')} title={t('selected.title')} id="selected-title" />
          <Reveal className="split-head__aside" delay={0.15}>
            <p>{t('selected.text')}</p>
            <Link to="/works" className="text-link">
              <span>{t('selected.cta')}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <ul className="selected__grid">
          {items.map((p, i) => (
            <li key={p.id} className={`selected__item selected__item--${i + 1}`}>
              <ImageReveal delay={(i % 3) * 0.12}>
                <button type="button" className="selected__btn" onClick={() => setIndex(i)} aria-label={`${t('worksPage.open')}: ${pick(p.title)}`}>
                  <SmartImage image={p.image} alt={`${pick(p.title)} — ${pick(p.caption)}`} sizes="(min-width: 1024px) 45vw, 100vw" />
                  <span className="badge badge--float">{t('common.sample')}</span>
                  <span className="selected__caption">
                    <span className="selected__cats">{p.categories.map((c) => t(`worksPage.filters.${c}`)).join(' · ')}</span>
                    <span className="selected__title">{pick(p.title)}</span>
                  </span>
                  <span className="selected__icon" aria-hidden="true"><ArrowUpRight size={18} /></span>
                </button>
              </ImageReveal>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </section>
  );
}

function Process() {
  const { t } = useLanguage();
  const steps = t('process.steps');
  return (
    <section className="section process texture-emerald" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading eyebrow={t('process.eyebrow')} title={t('process.title')} text={t('process.text')} id="process-title" align="center" tone="light" />
        <div className="process__track">
          <AnimatedLine className="process__line" />
          <Stagger as="ol" className="process__steps" stagger={0.14}>
            {steps.map((s, i) => (
              <StaggerItem as="li" key={s.title} className="step">
                <span className="step__dot" aria-hidden="true">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function Inspiration() {
  const { t } = useLanguage();
  return (
    <section className="section inspiration texture-ivory" aria-labelledby="inspiration-title">
      <div className="container">
        <SectionHeading eyebrow={t('inspiration.eyebrow')} title={t('inspiration.title')} text={t('inspiration.text')} id="inspiration-title" />
        <ColourStudio />
      </div>
    </section>
  );
}

function HomeFaq() {
  const { t } = useLanguage();
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-section__grid">
        <div className="faq-section__head">
          <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')} id="faq-title" />
          <Reveal delay={0.2}>
            <Link to="/contact" className="text-link">
              <span>{t('nav.contact')}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <FAQ />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo page="home" path="/" />
      <Hero />
      <Intro />
      <Featured />
      <Showcase />
      <Selected />
      <Process />
      <Inspiration />
      <HomeFaq />
      <CtaSection />
    </>
  );
}

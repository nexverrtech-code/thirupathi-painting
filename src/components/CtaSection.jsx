import { CalendarCheck, Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { primaryPhone, waLink } from '../data/business';
import WhatsAppButton from './WhatsAppButton';
import { AnimatedLine, Reveal } from './Motion';

export default function CtaSection({ title, text }) {
  const { t } = useLanguage();
  return (
    <section className="cta texture-emerald" aria-labelledby="cta-title">
      <svg className="cta__ornament" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="198" />
        <circle cx="200" cy="200" r="150" />
        <path d="M60 400V200a140 140 0 0 1 280 0v200" />
      </svg>
      <div className="container cta__inner">
        <Reveal className="eyebrow eyebrow--center" y={12}>
          <AnimatedLine className="eyebrow__line" />
          <span>{t('cta.eyebrow')}</span>
          <AnimatedLine className="eyebrow__line" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="cta-title" className="cta__title">{title ?? t('cta.title')}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="cta__text">{text ?? t('cta.text')}</p>
        </Reveal>
        <Reveal delay={0.24} className="cta__actions">
          <WhatsAppButton topic="general" label={t('cta.primary')} size="lg" />
          <a className="btn btn--outline-light btn--lg" href={`tel:${primaryPhone.tel}`}>
            <Phone size={17} aria-hidden="true" />
            <span>
              {t('cta.secondary')} <span className="nowrap">{primaryPhone.display}</span>
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          <a className="text-link text-link--light" href={waLink(t('wa.siteVisit'))} target="_blank" rel="noopener noreferrer">
            <CalendarCheck size={16} aria-hidden="true" />
            <span>{t('cta.siteVisit')}</span>
            <span className="visually-hidden"> {t('common.opensNewTab')}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

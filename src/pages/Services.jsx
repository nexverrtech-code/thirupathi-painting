import { Check, Info } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { OPTIONAL_SERVICES, SERVICES } from '../data/services';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import SmartImage from '../components/SmartImage';
import WhatsAppButton from '../components/WhatsAppButton';
import CtaSection from '../components/CtaSection';
import { ServiceIcon } from '../components/Icons';
import { AnimatedLine, ImageReveal, Reveal, Stagger, StaggerItem } from '../components/Motion';
import { IMAGES } from '../data/images';

function ServiceSection({ service, index }) {
  const { t, pick } = useLanguage();
  const reverse = index % 2 === 1;
  const headingId = `${service.id}-title`;
  return (
    <section id={service.id} className={`service-block${reverse ? ' service-block--reverse' : ''}`} aria-labelledby={headingId}>
      <div className="container service-block__grid">
        <div className="service-block__media">
          <ImageReveal direction={reverse ? 'left' : 'up'}>
            <SmartImage image={service.image} alt={pick(service.imageAlt)} sizes="(min-width: 1024px) 50vw, 100vw" />
          </ImageReveal>
          <span className="badge badge--float">{t('common.sample')}</span>
          <span className="service-block__num" aria-hidden="true">{service.number}</span>
        </div>
        <div className="service-block__content">
          <Reveal className="service-block__icon" y={12}>
            <ServiceIcon name={service.icon} size={26} strokeWidth={1.3} />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id={headingId} className="service-block__title">{pick(service.title)}</h2>
          </Reveal>
          <AnimatedLine className="service-block__rule" delay={0.1} />
          <Reveal delay={0.12}>
            <p className="lead">{pick(service.description)}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <h3 className="service-block__subtitle">{t('servicesPage.includes')}</h3>
          </Reveal>
          <Stagger as="ul" className="checklist" stagger={0.07}>
            {pick(service.items).map((item) => (
              <StaggerItem as="li" key={item}>
                <Check size={16} aria-hidden="true" />
                <span>{item}</span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <WhatsAppButton topic={service.waKey} variant="emerald" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const { t, pick } = useLanguage();
  const pending = OPTIONAL_SERVICES.filter((s) => !s.approved);
  const approved = OPTIONAL_SERVICES.filter((s) => s.approved);

  return (
    <>
      <Seo page="services" path="/services" />
      <PageHero
        eyebrow={t('servicesPage.eyebrow')}
        title={t('servicesPage.title')}
        text={t('servicesPage.text')}
        image={IMAGES.livingCalm}
        imageAlt=""
      >
        <nav className="jump-nav" aria-label={t('servicesPage.jumpTo')}>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span className="jump-nav__num">{s.number}</span>
                  {pick(s.title)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="services-list texture-ivory">
        {SERVICES.map((s, i) => (
          <ServiceSection key={s.id} service={s} index={i} />
        ))}

        {approved.length > 0 && (
          <section className="container optional" aria-labelledby="optional-title">
            <h2 id="optional-title" className="optional__title">{t('servicesPage.optionalTitle')}</h2>
            <ul className="optional__list">
              {approved.map((s) => (
                <li key={s.id}>{pick(s.title)}</li>
              ))}
            </ul>
          </section>
        )}

        {import.meta.env.DEV && pending.length > 0 && (
          <aside className="container optional optional--pending" aria-label={t('servicesPage.optionalTitle')}>
            <p className="badge badge--warn">{t('servicesPage.optionalBadge')}</p>
            <h2 className="optional__title">{t('servicesPage.optionalTitle')}</h2>
            <p>{t('servicesPage.optionalText')}</p>
            <ul className="optional__list">
              {pending.map((s) => (
                <li key={s.id}>{pick(s.title)}</li>
              ))}
            </ul>
          </aside>
        )}

        <div className="container">
          <Reveal className="pricing-note">
            <Info size={18} aria-hidden="true" />
            <p>{t('servicesPage.pricingNote')}</p>
          </Reveal>
        </div>
      </div>

      <CtaSection />
    </>
  );
}

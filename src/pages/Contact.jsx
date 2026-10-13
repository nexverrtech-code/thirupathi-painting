import { Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { BUSINESS, primaryPhone } from '../data/business';
import { IMAGES } from '../data/images';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ContactCards from '../components/ContactCards';
import EnquiryForm from '../components/EnquiryForm';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';
import WhatsAppButton from '../components/WhatsAppButton';
import { Reveal } from '../components/Motion';

export default function Contact() {
  const { t, pick } = useLanguage();
  return (
    <>
      <Seo page="contact" path="/contact" />
      <PageHero
        eyebrow={t('contactPage.eyebrow')}
        title={t('contactPage.title')}
        text={t('contactPage.text')}
        image={IMAGES.livingDark}
        imageAlt=""
      />

      <section className="section contact-reach texture-ivory" aria-labelledby="reach-title">
        <div className="container">
          <h2 id="reach-title" className="visually-hidden">{t('contactPage.reach')}</h2>
          <ContactCards />
          {BUSINESS.hours && (
            <p className="contact-hours">{pick(BUSINESS.hours)}</p>
          )}
        </div>
      </section>

      <section id="enquiry" className="section enquiry-section" aria-labelledby="enquiry-title">
        <div className="container enquiry-section__grid">
          <div className="enquiry-section__head">
            <SectionHeading eyebrow={t('nav.quote')} title={t('contactPage.formTitle')} text={t('contactPage.formText')} id="enquiry-title" />
          </div>
          <Reveal delay={0.1} className="enquiry-section__form">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="section faq-section texture-ivory" aria-labelledby="contact-faq-title">
        <div className="container faq-section__grid">
          <div className="faq-section__head">
            <SectionHeading eyebrow={t('faq.eyebrow')} title={t('contactPage.faqTitle')} id="contact-faq-title" />
          </div>
          <Reveal delay={0.1}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      <section className="closing texture-emerald" aria-labelledby="closing-title">
        <div className="container closing__inner">
          <Reveal>
            <h2 id="closing-title" className="closing__title">{t('contactPage.closingTitle')}</h2>
            <p className="closing__text">{t('contactPage.closingText')}</p>
          </Reveal>
          <Reveal delay={0.12} className="closing__actions">
            <a className="btn btn--gold btn--lg" href={`tel:${primaryPhone.tel}`}>
              <Phone size={17} aria-hidden="true" />
              <span>{primaryPhone.display}</span>
            </a>
            <WhatsAppButton topic="siteVisit" label={t('cta.siteVisit')} variant="outline-light" size="lg" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { BUSINESS, waLink } from '../data/business';
import { WhatsAppIcon } from './Icons';
import { Stagger, StaggerItem } from './Motion';

export default function ContactCards() {
  const { t, pick } = useLanguage();
  return (
    <Stagger as="ul" className="contact-cards">
      <StaggerItem as="li" className="contact-card">
        <span className="contact-card__icon"><Phone size={20} aria-hidden="true" /></span>
        <h3 className="contact-card__label">{t('contactPage.callLabel')}</h3>
        <div className="contact-card__phones">
          {BUSINESS.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="contact-card__big">
              {p.display}
            </a>
          ))}
        </div>
        <p className="contact-card__meta">{BUSINESS.owner} · {t('common.owner')}</p>
      </StaggerItem>

      <StaggerItem as="li" className="contact-card contact-card--emerald">
        <span className="contact-card__icon"><WhatsAppIcon size={20} /></span>
        <h3 className="contact-card__label">{t('contactPage.whatsappLabel')}</h3>
        <a className="contact-card__big" href={waLink(t('wa.general'))} target="_blank" rel="noopener noreferrer">
          {t('contactPage.whatsappText')}
          <ArrowUpRight size={20} aria-hidden="true" />
          <span className="visually-hidden"> {t('common.opensNewTab')}</span>
        </a>
        <p className="contact-card__meta">{BUSINESS.phones.find((p) => p.primary)?.display}</p>
      </StaggerItem>

      <StaggerItem as="li" className="contact-card">
        <span className="contact-card__icon"><MapPin size={20} aria-hidden="true" /></span>
        <h3 className="contact-card__label">{t('contactPage.visitLabel')}</h3>
        <address className="contact-card__address">{pick(BUSINESS.address)}</address>
        <a className="text-link" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
          <span>{t('common.openMaps')}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="visually-hidden"> {t('common.opensNewTab')}</span>
        </a>
      </StaggerItem>
    </Stagger>
  );
}

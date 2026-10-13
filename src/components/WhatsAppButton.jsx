import { ArrowUpRight } from 'lucide-react';
import { waLink } from '../data/business';
import { useLanguage } from '../hooks/useLanguage';
import { WhatsAppIcon } from './Icons';

/**
 * Opens WhatsApp with a contextual, translated prefilled message.
 * `topic` is a key under `wa.*` in translations (general, interior, exterior, putty, polish, siteVisit).
 */
export default function WhatsAppButton({ topic = 'general', message, label, variant = 'gold', className = '', size }) {
  const { t } = useLanguage();
  const text = message ?? t(`wa.${topic}`);
  return (
    <a
      className={`btn btn--${variant}${size ? ` btn--${size}` : ''} ${className}`}
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon size={18} />
      <span>{label ?? t('common.enquireWhatsApp')}</span>
      <span className="visually-hidden"> {t('common.opensNewTab')}</span>
      <ArrowUpRight className="btn__arrow" size={16} aria-hidden="true" />
    </a>
  );
}

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  return (
    <a
      className="fab-wa"
      href={waLink(t('wa.general'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t('common.chatWhatsApp')} ${t('common.opensNewTab')}`}
    >
      <WhatsAppIcon size={26} />
      <span className="fab-wa__label" aria-hidden="true">{t('common.whatsapp')}</span>
    </a>
  );
}

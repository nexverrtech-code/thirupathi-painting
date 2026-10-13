import { Link } from 'react-router';
import { ArrowUp, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { BUSINESS, waLink } from '../data/business';
import { SERVICES } from '../data/services';
import { Monogram } from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import PhoneLink from './PhoneLink';
import { WhatsAppIcon } from './Icons';
import { NAV_ITEMS } from './Header';

export default function Footer() {
  const { t, pick, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer texture-emerald">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" className="footer-wordmark" aria-label={t('brand.homeLink')}>
              <Monogram size={56} />
              <span aria-hidden="true">
                <span className="footer-wordmark__l1">Thirupathi</span>
                <span className="footer-wordmark__l2">Painting Contractors</span>
              </span>
            </Link>
            {lang === 'ta' && <p className="site-footer__name-ta">{BUSINESS.nameTa}</p>}
            <p className="site-footer__desc">{t('footer.description')}</p>
            <LanguageSwitcher className="lang-switch--light" />
          </div>

          <nav className="site-footer__col" aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="site-footer__heading">{t('footer.explore')}</h2>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{t(`nav.${item.key}`)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-labelledby="footer-services">
            <h2 id="footer-services" className="site-footer__heading">{t('footer.services')}</h2>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{pick(s.title)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">{t('footer.contact')}</h2>
            <ul className="site-footer__contact">
              {BUSINESS.phones.map((p) => (
                <li key={p.tel}>
                  <PhoneLink phone={p} />
                </li>
              ))}
              <li>
                <a className="phone-link" href={waLink(t('wa.general'))} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={16} />
                  <span>{t('common.enquireWhatsApp')}</span>
                  <span className="visually-hidden"> {t('common.opensNewTab')}</span>
                </a>
              </li>
              <li>
                <address className="site-footer__address">
                  <MapPin size={16} aria-hidden="true" />
                  <span>{pick(BUSINESS.address)}</span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {BUSINESS.name}. {t('footer.rights')}
          </p>
          <p className="site-footer__note">{t('footer.sampleNote')}</p>
          <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp size={16} aria-hidden="true" />
            <span>{t('footer.backToTop')}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

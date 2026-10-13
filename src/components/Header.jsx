import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { BUSINESS } from '../data/business';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import PhoneLink from './PhoneLink';
import { ease } from './Motion';

export const NAV_ITEMS = [
  { to: '/', key: 'home', end: true },
  { to: '/services', key: 'services' },
  { to: '/works', key: 'works' },
  { to: '/contact', key: 'contact' },
];

export default function Header() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  // Every page opens on a dark hero, so the header starts transparent everywhere.
  const overlay = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll, handle Escape and keep focus inside the open menu.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const first = panelRef.current?.querySelector('a, button');
    first?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab' && panelRef.current) {
        const nodes = [toggleRef.current, ...panelRef.current.querySelectorAll('a, button')].filter(Boolean);
        const firstEl = nodes[0];
        const lastEl = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${overlay ? ' is-overlay' : ''}${open ? ' is-open' : ''}`}>
      <div className="site-header__inner container">
        <Logo onClick={() => setOpen(false)} />

        <nav className="site-nav" aria-label={t('nav.primary')}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className="site-nav__link">
                  <span>{t(`nav.${item.key}`)}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher className="hide-mobile" />
          <Link to="/contact#enquiry" className="btn btn--gold btn--sm hide-mobile">
            <span>{t('nav.quote')}</span>
            <ArrowRight className="btn__arrow" size={15} aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}
          >
            <nav aria-label={t('nav.primary')}>
              <ul className="mobile-menu__list">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease }}
                  >
                    <NavLink to={item.to} end={item.end} className="mobile-menu__link">
                      <span className="mobile-menu__num">0{i + 1}</span>
                      <span>{t(`nav.${item.key}`)}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="mobile-menu__footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Link to="/contact#enquiry" className="btn btn--gold">
                <span>{t('nav.quote')}</span>
                <ArrowRight className="btn__arrow" size={16} aria-hidden="true" />
              </Link>
              <div className="mobile-menu__contact">
                {BUSINESS.phones.map((p) => (
                  <PhoneLink key={p.tel} phone={p} />
                ))}
              </div>
              <LanguageSwitcher className="lang-switch--light" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

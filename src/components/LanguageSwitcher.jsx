import { LANGUAGES } from '../data/translations';
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t('lang.label')}>
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          lang={l.code}
          className={`lang-switch__btn${lang === l.code ? ' is-active' : ''}`}
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}
        >
          {l.code === 'en' ? 'English' : l.label}
        </button>
      ))}
    </div>
  );
}

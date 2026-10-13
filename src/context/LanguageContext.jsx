import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations';

const STORAGE_KEY = 'tpc-lang';
const SUPPORTED = ['en', 'ta'];

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(stored)) return stored;
  } catch {
    /* storage unavailable — fall through */
  }
  return 'en';
}

function lookup(dict, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), dict);
}

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'ta' ? 'ta-IN' : 'en-IN';
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const t = (path, ...args) => {
      let v = lookup(translations[lang], path);
      if (v === undefined) v = lookup(translations.en, path);
      if (v === undefined) {
        if (import.meta.env.DEV) console.warn(`[i18n] Missing key: ${path}`);
        return path;
      }
      return typeof v === 'function' ? v(...args) : v;
    };
    /** Pick the current language from a { en, ta } object. */
    const pick = (obj) => (obj == null ? '' : obj[lang] ?? obj.en);
    return { lang, setLang, t, pick };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

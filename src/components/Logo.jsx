import { Link } from 'react-router';
import { useLanguage } from '../hooks/useLanguage';

export function Monogram({ size = 44 }) {
  return (
    <svg className="monogram" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M7 45V22.5a17 17 0 0 1 34 0V45" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11 45V23a13 13 0 0 1 26 0v22" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <path d="M15.5 18.2h17v1.6h-0.9c-.4-1-.9-1.5-1.9-1.5h-3.6v15.4c0 1.3.5 1.7 1.8 1.8v.9h-7.8v-.9c1.3-.1 1.8-.5 1.8-1.8V18.3h-3.6c-1 0-1.5.5-1.9 1.5h-.9z" fill="currentColor" />
      <path d="M4 45h40" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Logo({ onClick }) {
  const { t } = useLanguage();
  return (
    <Link to="/" className="logo" aria-label={t('brand.homeLink')} onClick={onClick}>
      <Monogram />
      <span className="logo__text" aria-hidden="true">
        <span className="logo__line1">Thirupathi</span>
        <span className="logo__line2">Painting Contractors</span>
      </span>
    </Link>
  );
}

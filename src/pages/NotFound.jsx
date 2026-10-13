import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Seo from '../components/Seo';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <>
      <Seo page="notFound" path="/404" noindex />
      <section className="not-found texture-emerald" aria-labelledby="nf-title">
        <div className="container not-found__inner">
          <p className="not-found__code" aria-hidden="true">404</p>
          <h1 id="nf-title" className="not-found__title">{t('notFound.title')}</h1>
          <p>{t('notFound.text')}</p>
          <Link to="/" className="btn btn--gold">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>{t('notFound.back')}</span>
          </Link>
        </div>
      </section>
    </>
  );
}

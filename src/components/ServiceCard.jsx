import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SmartImage from './SmartImage';
import { ServiceIcon } from './Icons';

export default function ServiceCard({ service }) {
  const { pick, t } = useLanguage();
  return (
    <Link to={`/services#${service.id}`} className="service-card">
      <span className="service-card__media">
        <SmartImage image={service.image} alt={pick(service.imageAlt)} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
      </span>
      <span className="service-card__body">
        <span className="service-card__top">
          <span className="service-card__num">{service.number}</span>
          <ServiceIcon name={service.icon} size={22} strokeWidth={1.4} className="service-card__icon" />
        </span>
        <span className="service-card__title">{pick(service.title)}</span>
        <span className="service-card__text">{pick(service.short)}</span>
        <span className="service-card__more">
          <span>{t('common.discover')}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}

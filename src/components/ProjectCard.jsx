import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { Expand } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SmartImage from './SmartImage';
import { ease } from './Motion';

const ProjectCard = forwardRef(function ProjectCard({ project, onOpen, sizes, as = 'li', className = '' }, ref) {
  const { t, pick } = useLanguage();
  const Cmp = motion[as];
  const title = pick(project.title);
  return (
    <Cmp
      ref={ref}
      layout
      className={`project-card${project.size ? ` project-card--${project.size}` : ''} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease }}
    >
      <button type="button" className="project-card__btn" onClick={onOpen} aria-label={`${t('worksPage.open')}: ${title}`}>
        <span className="project-card__media">
          <SmartImage
            image={project.image}
            alt={`${title} — ${pick(project.caption)}`}
            sizes={sizes ?? '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
          />
        </span>
        <span className="project-card__shade" aria-hidden="true" />
        {project.kind !== 'completed' && <span className="badge badge--float">{t('common.sample')}</span>}
        <span className="project-card__expand" aria-hidden="true">
          <Expand size={18} />
        </span>
        <span className="project-card__meta">
          <span className="project-card__cats">
            {project.categories.map((c) => t(`worksPage.filters.${c}`)).join(' · ')}
          </span>
          <span className="project-card__title">{title}</span>
        </span>
      </button>
    </Cmp>
  );
});

export default ProjectCard;

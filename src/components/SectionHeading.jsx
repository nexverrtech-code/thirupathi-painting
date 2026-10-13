import { Reveal, AnimatedLine } from './Motion';

export default function SectionHeading({ eyebrow, title, text, align = 'left', as: H = 'h2', tone, id, className = '' }) {
  return (
    <header className={`section-heading section-heading--${align}${tone ? ` section-heading--${tone}` : ''} ${className}`}>
      {eyebrow && (
        <Reveal className="eyebrow" y={12}>
          <AnimatedLine className="eyebrow__line" />
          <span>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <H className="section-heading__title" id={id}>
          {title}
        </H>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <p className="section-heading__text">{text}</p>
        </Reveal>
      )}
    </header>
  );
}

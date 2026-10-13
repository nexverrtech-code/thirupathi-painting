import { useCallback, useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SmartImage from './SmartImage';

const clamp = (v) => Math.min(100, Math.max(0, v));

/**
 * Before/after comparison. If `before` is not supplied, the "before" state is
 * simulated from the `after` image (dulled and aged) and a note marks it as illustrative.
 */
export default function BeforeAfterSlider({ before, after, alt, className = '', sizes = '(min-width: 1024px) 60vw, 100vw' }) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  // A gentle one-time hint that the image can be dragged.
  useEffect(() => {
    if (!inView || reduce) return undefined;
    const controls = animate(50, [30, 68, 50], {
      duration: 2.2,
      ease: 'easeInOut',
      delay: 0.3,
      onUpdate: (v) => !dragging.current && setPos(v),
    });
    return () => controls.stop();
  }, [inView, reduce]);

  const updateFromX = useCallback((clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateFromX(e.clientX);
  };
  const onPointerMove = (e) => dragging.current && updateFromX(e.clientX);
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    const steps = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -15, PageUp: 15 };
    if (e.key in steps) {
      e.preventDefault();
      setPos((p) => clamp(p + steps[e.key]));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPos(100);
    }
  };

  const simulated = !before;

  return (
    <div
      ref={ref}
      className={`ba${simulated ? ' ba--simulated' : ''} ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ '--pos': `${pos}%` }}
    >
      <div className="ba__layer ba__after">
        <SmartImage image={after} alt={`${t('showcase.after')}: ${alt}`} sizes={sizes} />
      </div>
      <div className="ba__layer ba__before" aria-hidden="true">
        <SmartImage image={before ?? after} alt="" sizes={sizes} />
        {simulated && <span className="ba__grime" />}
      </div>

      <span className="ba__label ba__label--before" aria-hidden="true">{t('showcase.before')}</span>
      <span className="ba__label ba__label--after" aria-hidden="true">{t('showcase.after')}</span>

      <div
        className="ba__handle"
        role="slider"
        tabIndex={0}
        aria-label={t('showcase.handle')}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${t('showcase.before')} ${Math.round(pos)}%`}
        onKeyDown={onKeyDown}
      >
        <span className="ba__knob">
          <MoveHorizontal size={18} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

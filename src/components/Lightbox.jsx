import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SmartImage from './SmartImage';
import { ease } from './Motion';

/** Full-screen, keyboard- and touch-friendly image viewer. */
export default function Lightbox({ items, index, onClose, onIndexChange }) {
  const { t, pick } = useLanguage();
  const open = index != null && index >= 0 && index < items.length;
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const returnFocus = useRef(null);
  const touchX = useRef(null);

  const go = (dir) => onIndexChange((index + dir + items.length) % items.length);

  useEffect(() => {
    if (!open) return undefined;
    returnFocus.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      returnFocus.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab') {
        const nodes = dialogRef.current?.querySelectorAll('button');
        if (!nodes?.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  const item = open ? items[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('worksPage.lightbox.label')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label={t('worksPage.lightbox.close')}>
            <X size={24} aria-hidden="true" />
          </button>

          {items.length > 1 && (
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label={t('worksPage.lightbox.prev')}>
              <ChevronLeft size={28} aria-hidden="true" />
            </button>
          )}

          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={item.id}
              className="lightbox__figure"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease }}
            >
              <div className="lightbox__media">
                <SmartImage image={item.image} alt={pick(item.title)} sizes="100vw" priority />
              </div>
              <figcaption className="lightbox__caption">
                <div>
                  <span className={`badge ${item.kind === 'completed' ? 'badge--real' : ''}`}>
                    {item.kind === 'completed' ? t('worksPage.completed') : t('common.sample')}
                  </span>
                  <h2 className="lightbox__title">{pick(item.title)}</h2>
                  <p>{pick(item.caption)}</p>
                </div>
                <p className="lightbox__count" aria-live="polite">
                  {t('worksPage.lightbox.position', index + 1, items.length)}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {items.length > 1 && (
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label={t('worksPage.lightbox.next')}>
              <ChevronRight size={28} aria-hidden="true" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

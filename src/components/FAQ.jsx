import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { ease } from './Motion';

export default function FAQ({ items: itemsProp, limit }) {
  const { t } = useLanguage();
  const base = useId();
  const all = itemsProp ?? t('faq.items');
  const items = limit ? all.slice(0, limit) : all;
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div key={i} className={`faq__item${isOpen ? ' is-open' : ''}`}>
            <h3 className="faq__q">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="faq__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq__qtext">{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  <Plus size={20} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="faq__a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

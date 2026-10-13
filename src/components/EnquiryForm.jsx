import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Info, PencilLine } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { waLink } from '../data/business';
import { WhatsAppIcon } from './Icons';
import { ease } from './Motion';

const EMPTY = { name: '', phone: '', propertyType: '', service: '', location: '', contactLanguage: '', details: '' };

export function normalisePhone(raw) {
  let d = String(raw).replace(/[^\d+]/g, '');
  if (d.startsWith('+91')) d = d.slice(3);
  else if (d.startsWith('91') && d.length === 12) d = d.slice(2);
  else if (d.startsWith('0') && d.length === 11) d = d.slice(1);
  return d.replace(/\D/g, '');
}

function validate(v) {
  const e = {};
  const name = v.name.trim();
  if (!name) e.name = 'nameRequired';
  else if (name.length < 2) e.name = 'nameShort';
  if (!v.phone.trim()) e.phone = 'phoneRequired';
  else if (!/^[6-9]\d{9}$/.test(normalisePhone(v.phone))) e.phone = 'phoneInvalid';
  if (v.propertyType === '') e.propertyType = 'propertyRequired';
  if (v.service === '') e.service = 'serviceRequired';
  if (!v.location.trim()) e.location = 'locationRequired';
  if (v.contactLanguage === '') e.contactLanguage = 'languageRequired';
  if (v.details.length > 800) e.details = 'detailsLong';
  return e;
}

const ORDER = ['name', 'phone', 'propertyType', 'service', 'location', 'contactLanguage', 'details'];

export default function EnquiryForm({ defaultService }) {
  const { t, lang } = useLanguage();
  const uid = useId();
  const formRef = useRef(null);
  const [values, setValues] = useState(() => ({
    ...EMPTY,
    contactLanguage: lang === 'ta' ? '1' : '0',
    service: defaultService != null ? String(defaultService) : '',
  }));
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [ready, setReady] = useState(false);
  const readyRef = useRef(null);

  const errors = validate(values);
  const showError = (f) => (touched[f] || submitted) && errors[f];

  useEffect(() => {
    if (ready) readyRef.current?.focus();
  }, [ready]);

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  const blur = (field) => () => setTouched((tch) => ({ ...tch, [field]: true }));

  const message = () => {
    const L = t('wa.formLabels');
    const opts = (key, idx) => (idx === '' ? '' : t(`form.${key}`)[Number(idx)]);
    const lines = [
      t('wa.formIntro'),
      '',
      `${L.name}: ${values.name.trim()}`,
      `${L.phone}: ${values.phone.trim()}`,
      `${L.propertyType}: ${opts('propertyTypes', values.propertyType)}`,
      `${L.service}: ${opts('services', values.service)}`,
      `${L.location}: ${values.location.trim()}`,
      `${L.contactLanguage}: ${opts('languages', values.contactLanguage)}`,
    ];
    if (values.details.trim()) lines.push(`${L.details}: ${values.details.trim()}`);
    return lines.join('\n');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate(values);
    const first = ORDER.find((f) => errs[f]);
    if (first) {
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    setReady(true);
  };

  const fieldProps = (f, hint) => ({
    id: `${uid}-${f}`,
    name: f,
    value: values[f],
    onChange: set(f),
    onBlur: blur(f),
    'aria-invalid': showError(f) ? true : undefined,
    'aria-describedby': [hint ? `${uid}-${f}-hint` : null, showError(f) ? `${uid}-${f}-err` : null].filter(Boolean).join(' ') || undefined,
  });

  const Err = ({ f }) =>
    showError(f) ? (
      <p className="field__error" id={`${uid}-${f}-err`}>
        {t(`form.errors.${errors[f]}`)}
      </p>
    ) : null;

  const Select = ({ f, optionsKey, labelKey }) => (
    <div className={`field${showError(f) ? ' has-error' : ''}`}>
      <label htmlFor={`${uid}-${f}`}>{t(`form.${labelKey}`)}</label>
      <div className="field__select">
        <select {...fieldProps(f)} required>
          <option value="" disabled>
            {t('form.select')}
          </option>
          {t(`form.${optionsKey}`).map((o, i) => (
            <option key={i} value={String(i)}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <Err f={f} />
    </div>
  );

  return (
    <div className="enquiry">
      <AnimatePresence mode="wait" initial={false}>
        {!ready ? (
          <motion.form
            key="form"
            ref={formRef}
            className="enquiry__form"
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
          >
            {submitted && Object.keys(errors).length > 0 && (
              <p className="enquiry__summary" role="alert">
                {t('form.errorsSummary')}
              </p>
            )}
            <div className="enquiry__grid">
              <div className={`field${showError('name') ? ' has-error' : ''}`}>
                <label htmlFor={`${uid}-name`}>{t('form.name')}</label>
                <input type="text" autoComplete="name" required {...fieldProps('name')} />
                <Err f="name" />
              </div>
              <div className={`field${showError('phone') ? ' has-error' : ''}`}>
                <label htmlFor={`${uid}-phone`}>{t('form.phone')}</label>
                <input type="tel" inputMode="tel" autoComplete="tel" required {...fieldProps('phone', true)} />
                <p className="field__hint" id={`${uid}-phone-hint`}>{t('form.phoneHint')}</p>
                <Err f="phone" />
              </div>
              {Select({ f: 'propertyType', optionsKey: 'propertyTypes', labelKey: 'propertyType' })}
              {Select({ f: 'service', optionsKey: 'services', labelKey: 'service' })}
              <div className={`field${showError('location') ? ' has-error' : ''}`}>
                <label htmlFor={`${uid}-location`}>{t('form.location')}</label>
                <input type="text" autoComplete="address-level2" required {...fieldProps('location', true)} />
                <p className="field__hint" id={`${uid}-location-hint`}>{t('form.locationHint')}</p>
                <Err f="location" />
              </div>
              {Select({ f: 'contactLanguage', optionsKey: 'languages', labelKey: 'contactLanguage' })}
              <div className={`field field--full${showError('details') ? ' has-error' : ''}`}>
                <label htmlFor={`${uid}-details`}>
                  {t('form.details')} <span className="field__optional">({t('form.optional')})</span>
                </label>
                <textarea rows={4} maxLength={1000} {...fieldProps('details', true)} />
                <p className="field__hint" id={`${uid}-details-hint`}>{t('form.detailsHint')}</p>
                <Err f="details" />
              </div>
            </div>
            <div className="enquiry__footer">
              <p className="enquiry__privacy">
                <Info size={16} aria-hidden="true" />
                <span>{t('form.privacy')}</span>
              </p>
              <button type="submit" className="btn btn--emerald btn--lg">
                <WhatsAppIcon size={18} />
                <span>{t('form.submit')}</span>
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="ready"
            className="enquiry__ready"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
          >
            <h3 className="enquiry__ready-title" tabIndex={-1} ref={readyRef}>
              {t('form.readyTitle')}
            </h3>
            <p>{t('form.readyText')}</p>
            <p className="enquiry__preview-label">{t('form.preview')}</p>
            <pre className="enquiry__preview" lang={lang}>{message()}</pre>
            <div className="enquiry__ready-actions">
              <a className="btn btn--gold btn--lg" href={waLink(message())} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} />
                <span>{t('form.openWhatsApp')}</span>
                <span className="visually-hidden"> {t('common.opensNewTab')}</span>
                <ArrowUpRight className="btn__arrow" size={16} aria-hidden="true" />
              </a>
              <button type="button" className="btn btn--ghost" onClick={() => setReady(false)}>
                <PencilLine size={16} aria-hidden="true" />
                <span>{t('form.edit')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

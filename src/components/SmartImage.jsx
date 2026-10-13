import { useEffect, useRef, useState } from 'react';
import { ImageOff } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

/**
 * Responsive, lazy-loaded image with a graceful fallback.
 * Expects an image object from data/images.js: { src, srcSet? }.
 * The parent controls dimensions (aspect-ratio) so there is no layout shift.
 */
export default function SmartImage({ image, alt, sizes = '100vw', priority = false, className = '', style }) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const [status, setStatus] = useState('loading');

  // Reset when the source changes; if the browser already has it cached, show it immediately.
  // Errors are reported only through onError (complete + naturalWidth 0 can be transient).
  useEffect(() => {
    const img = ref.current;
    setStatus(img && img.complete && img.naturalWidth > 0 ? 'loaded' : 'loading');
  }, [image?.src]);

  if (!image?.src || status === 'error') {
    return (
      <div className={`smart-img smart-img--fallback ${className}`} role="img" aria-label={alt} style={style}>
        <ImageOff size={22} aria-hidden="true" />
        <span>{t('common.imageUnavailable')}</span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      className={`smart-img${status === 'loaded' ? ' is-loaded' : ''} ${className}`}
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      onLoad={() => setStatus('loaded')}
      onError={() => setStatus('error')}
      style={style}
      draggable="false"
    />
  );
}

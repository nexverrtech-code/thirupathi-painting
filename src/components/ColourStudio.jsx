import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Reveal, Stagger, StaggerItem } from './Motion';

const COLOURS = ['#EDE4D3', '#A9B3A0', '#C0704F', '#1F4A3D', '#8FA5B5', '#3E3F3C', '#D9C29A', '#D8A99A'];
const FINISH_CLASSES = ['matt', 'satin', 'gloss', 'wood'];

function isDark(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 140;
}

function Room({ colour, label }) {
  return (
    <svg className="room" viewBox="0 0 600 420" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="roomLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="roomSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7EFE0" />
          <stop offset="1" stopColor="#E3D3B4" />
        </linearGradient>
        <linearGradient id="roomFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A87C55" />
          <stop offset="1" stopColor="#7E5A3C" />
        </linearGradient>
      </defs>
      <rect className="room__wall" x="0" y="0" width="600" height="312" style={{ fill: colour }} />
      <rect x="0" y="0" width="600" height="312" fill="url(#roomLight)" />
      {/* arched window */}
      <path d="M402 250V120a54 54 0 0 1 108 0v130z" fill="url(#roomSky)" />
      <path d="M402 250V120a54 54 0 0 1 108 0v130z" fill="none" stroke="#F5F0E7" strokeWidth="7" />
      <path d="M456 66v184M402 160h108" stroke="#F5F0E7" strokeWidth="4" />
      <rect x="392" y="250" width="128" height="9" fill="#F5F0E7" />
      {/* framed art */}
      <rect x="96" y="70" width="128" height="92" fill="#F5F0E7" stroke="#D5B779" strokeWidth="5" />
      <circle cx="140" cy="112" r="20" fill="#D5B779" opacity="0.85" />
      <path d="M104 154c26-30 48-34 70-18s30 6 42-6v24z" fill="#203B32" opacity="0.85" />
      {/* skirting + floor */}
      <rect x="0" y="304" width="600" height="10" fill="#F5F0E7" />
      <rect x="0" y="314" width="600" height="106" fill="url(#roomFloor)" />
      <path d="M0 346h600M0 382h600" stroke="#5E432C" strokeOpacity="0.35" strokeWidth="1.5" />
      <ellipse cx="200" cy="322" rx="190" ry="10" fill="#000" opacity="0.18" />
      {/* sofa */}
      <rect x="40" y="208" width="320" height="64" rx="18" fill="#E9E1D2" />
      <rect x="30" y="236" width="340" height="62" rx="16" fill="#F1EADD" />
      <rect x="22" y="222" width="40" height="78" rx="14" fill="#E2D8C6" />
      <rect x="338" y="222" width="40" height="78" rx="14" fill="#E2D8C6" />
      <rect x="84" y="196" width="72" height="52" rx="12" fill="#D5B779" transform="rotate(-6 120 222)" />
      <rect x="250" y="198" width="66" height="50" rx="12" fill="#142A25" transform="rotate(5 283 223)" />
      <rect x="54" y="298" width="8" height="18" fill="#3A2B1E" />
      <rect x="338" y="298" width="8" height="18" fill="#3A2B1E" />
      {/* lamp + side table */}
      <rect x="512" y="250" width="56" height="8" fill="#292927" />
      <rect x="536" y="258" width="6" height="56" fill="#292927" />
      <path d="M520 190h40l10 40h-60z" fill="#F5F0E7" />
      <rect x="537" y="230" width="4" height="20" fill="#292927" />
      {/* plant */}
      <g fill="#203B32">
        <ellipse cx="572" cy="262" rx="7" ry="26" transform="rotate(-24 572 262)" />
        <ellipse cx="586" cy="256" rx="7" ry="30" transform="rotate(8 586 256)" />
        <ellipse cx="594" cy="272" rx="6" ry="22" transform="rotate(34 594 272)" />
        <ellipse cx="566" cy="282" rx="6" ry="18" transform="rotate(-52 566 282)" />
      </g>
      <path d="M568 296h30l-5 20h-20z" fill="#C0704F" />
    </svg>
  );
}

export default function ColourStudio() {
  const { t } = useLanguage();
  const names = t('inspiration.colours');
  const finishes = t('inspiration.finishes');
  const [active, setActive] = useState(3);
  const colour = COLOURS[active];

  return (
    <div className="studio">
      <Reveal className="studio__preview">
        <Room colour={colour} label={`${t('inspiration.previewLabel')}: ${names[active]}`} />
        <div className={`studio__chip${isDark(colour) ? ' is-dark' : ''}`} aria-live="polite">
          <span className="studio__chip-dot" style={{ background: colour }} />
          <span>{names[active]}</span>
        </div>
      </Reveal>

      <div className="studio__controls">
        <p className="studio__label" id="palette-label">{t('inspiration.paletteLabel')}</p>
        <div className="swatches" role="group" aria-labelledby="palette-label">
          {COLOURS.map((c, i) => (
            <button
              key={c}
              type="button"
              className={`swatch${i === active ? ' is-active' : ''}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <span className="swatch__colour" style={{ background: c }}>
                {i === active && <Check size={16} color={isDark(c) ? '#fff' : '#142A25'} aria-hidden="true" />}
              </span>
              <span className="swatch__name">{names[i]}</span>
            </button>
          ))}
        </div>

        <h3 className="studio__finishes-title">{t('inspiration.finishesTitle')}</h3>
        <Stagger as="ul" className="finishes" stagger={0.08}>
          {finishes.map((f, i) => (
            <StaggerItem as="li" key={f.name} className="finish">
              <span className={`finish__sample finish__sample--${FINISH_CLASSES[i]}`} style={{ '--c': colour }} aria-hidden="true" />
              <span>
                <span className="finish__name">{f.name}</span>
                <span className="finish__text">{f.text}</span>
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="studio__note">{t('inspiration.note')}</p>
      </div>
    </div>
  );
}

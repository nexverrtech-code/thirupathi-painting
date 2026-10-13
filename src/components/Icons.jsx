import { House, Layers, PaintRoller, Sparkles } from 'lucide-react';

const MAP = { PaintRoller, House, Layers, Sparkles };

export function ServiceIcon({ name, ...props }) {
  const Cmp = MAP[name] ?? PaintRoller;
  return <Cmp aria-hidden="true" {...props} />;
}

export function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M3.6 20.4l1.25-4.1a8.4 8.4 0 1 1 3.2 3.05L3.6 20.4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 8.5c.18-.42.44-.55.74-.55h.46c.2 0 .4.08.5.36l.66 1.55c.1.26.04.48-.1.66l-.46.56c-.12.16-.13.36-.03.56.6 1.06 1.46 1.88 2.52 2.44.2.1.4.1.56-.06l.58-.6c.18-.18.4-.22.66-.12l1.54.66c.27.12.37.3.37.5v.45c0 .3-.17.66-.55.88-.68.38-1.55.48-2.4.18-2.2-.78-4.02-2.5-4.88-4.68-.3-.86-.28-1.73.17-2.79z"
        fill="currentColor"
      />
    </svg>
  );
}

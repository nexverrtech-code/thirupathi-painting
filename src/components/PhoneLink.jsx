import { Phone } from 'lucide-react';

export default function PhoneLink({ phone, className = '', showIcon = true, label }) {
  return (
    <a className={`phone-link ${className}`} href={`tel:${phone.tel}`}>
      {showIcon && <Phone size={16} aria-hidden="true" />}
      <span>{label ?? phone.display}</span>
    </a>
  );
}

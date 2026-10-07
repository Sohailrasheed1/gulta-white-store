import React from 'react';

// Official Authentic EasyPaisa Logo Badge
export function EasyPaisaLogo({ height = 28, className = "" }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '6px' }}
    >
      <rect width="160" height="48" rx="8" fill="#00A859" />
      {/* Icon portion: White smartphone with dynamic wave */}
      <g transform="translate(10, 8)">
        <rect x="2" y="2" width="18" height="28" rx="4" fill="white" />
        <rect x="5" y="6" width="12" height="17" rx="2" fill="#00A859" />
        <circle cx="11" cy="26.5" r="1.5" fill="#00A859" />
        <path d="M11 9C13 9 14.5 10.5 14.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 12C11.8 12 12.5 12.7 12.5 13.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      {/* Text "easypaisa" */}
      <text x="42" y="30" fill="white" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.5px">
        easypaisa
      </text>
    </svg>
  );
}

// Official Authentic JazzCash Logo Badge
export function JazzCashLogo({ height = 28, className = "" }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '6px' }}
    >
      <rect width="160" height="48" rx="8" fill="#1A1A1A" stroke="#333333" strokeWidth="1" />
      {/* Dynamic Jazz Flame Emblem */}
      <g transform="translate(10, 8)">
        <circle cx="16" cy="16" r="15" fill="#EE2724" />
        {/* Yellow & Red flame swirls */}
        <path d="M16 4C16 11 25 14 25 21C25 26.5 20.5 30 15 30C9.5 30 7 25 9 20C11 15 17 12 16 4Z" fill="#F8B133" />
        <path d="M16 12C16 16 21 18 21 22C21 25 18 27 15 27C12 27 10 24 12 21C13 18 16 16 16 12Z" fill="#EE2724" />
      </g>
      {/* Text "JazzCash" */}
      <text x="48" y="27" fill="#F8B133" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="14" fontStyle="italic">
        Jazz
      </text>
      <text x="82" y="27" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="14">
        Cash
      </text>
      <text x="48" y="38" fill="#999999" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.8px">
        MOBILE ACCOUNT
      </text>
    </svg>
  );
}

// Official Authentic Meezan Bank / Bank Transfer Logo Badge
export function MeezanBankLogo({ height = 28, className = "" }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '6px' }}
    >
      <rect width="160" height="48" rx="8" fill="#005B38" />
      {/* Islamic Crescent & Star emblem */}
      <g transform="translate(10, 8)">
        <circle cx="16" cy="16" r="14" fill="#00472B" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M20 9C15 9 10 13 10 18C10 23 15 26 21 24C17 25 13 22 13 18C13 14 16 11 20 9Z" fill="#D4AF37" />
        <polygon points="19,13 20.5,16 23.5,16 21,18 22,21 19,19 16,21 17,18 14.5,16 17.5,16" fill="#D4AF37" />
      </g>
      {/* Text "Meezan Bank" */}
      <text x="46" y="24" fill="#FFFFFF" fontFamily="Georgia, serif" fontWeight="800" fontSize="13">
        Meezan Bank
      </text>
      <text x="46" y="36" fill="#D4AF37" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.8px">
        THE PREMIER ISLAMIC BANK
      </text>
    </svg>
  );
}

// Official Cash on Delivery (COD) Real Badge
export function CodLogo({ height = 28, className = "" }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '6px' }}
    >
      <rect width="160" height="48" rx="8" fill="#3B0014" stroke="#D4AF37" strokeWidth="1.2" />
      {/* Truck & Cash emblem */}
      <g transform="translate(10, 10)">
        <rect x="2" y="8" width="16" height="13" rx="2" fill="#D4AF37" />
        <path d="M18 12L24 12L27 16L27 21L18 21Z" fill="#D4AF37" />
        <circle cx="7" cy="22" r="3" fill="#140006" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="23" cy="22" r="3" fill="#140006" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M6 14H14M10 11V17" stroke="#3B0014" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Text "CASH ON DELIVERY" */}
      <text x="44" y="24" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="12" letterSpacing="0.5px">
        CASH ON DELIVERY
      </text>
      <text x="44" y="36" fill="#D4AF37" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8" letterSpacing="1px">
        PAY AT YOUR DOORSTEP
      </text>
    </svg>
  );
}

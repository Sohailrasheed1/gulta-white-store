import React from 'react';

export default function BrandLogo({ size = 42, showText = true, textTheme = 'dark', subtitle = 'DERMATOLOGICAL LUXURY' }) {
  const isLightText = textTheme === 'light';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', userSelect: 'none' }}>
      {/* Circular Emblem */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          position: 'relative',
          flexShrink: 0,
          boxShadow: '0 4px 14px rgba(59, 0, 20, 0.25)',
          transition: 'transform 0.3s ease'
        }}
      >
        <svg
          viewBox="0 0 120 120"
          width={size}
          height={size}
          style={{ display: 'block', width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id={`goldGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bf953f" />
              <stop offset="25%" stopColor="#fcf6ba" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="75%" stopColor="#fbf5b7" />
              <stop offset="100%" stopColor="#aa771c" />
            </linearGradient>

            <radialGradient id={`velvetBg-${size}`} cx="40%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#3b0014" />
              <stop offset="55%" stopColor="#26000c" />
              <stop offset="100%" stopColor="#140006" />
            </radialGradient>

            <filter id={`goldGlow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#d4af37" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Outer Ring & Velvet Base */}
          <circle cx="60" cy="60" r="57" fill={`url(#velvetBg-${size})`} stroke={`url(#goldGrad-${size})`} strokeWidth="3" />
          <circle cx="60" cy="60" r="51.5" fill="none" stroke={`url(#goldGrad-${size})`} strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
          <circle cx="60" cy="60" r="48" fill="none" stroke={`url(#goldGrad-${size})`} strokeWidth="0.75" opacity="0.6" />

          {/* Crown Crest */}
          <g transform="translate(60, 28) scale(0.85)" filter={`url(#goldGlow-${size})`}>
            <path d="M-16,8 L-14,0 L-6,5 L0,-8 L6,5 L14,0 L16,8 Z" fill={`url(#goldGrad-${size})`} />
            <circle cx="-14" cy="-1" r="1.5" fill="#ffffff" />
            <circle cx="0" cy="-9" r="2.2" fill="#ffffff" />
            <circle cx="14" cy="-1" r="1.5" fill="#ffffff" />
            <path d="M0,-15 L1.5,-11 L6,-11 L2.5,-8 L4,-4 L0,-6 L-4,-4 L-2.5,-8 L-6,-11 L-1.5,-11 Z" fill={`url(#goldGrad-${size})`} />
          </g>

          {/* Monogram "GW" */}
          <g filter={`url(#goldGlow-${size})`}>
            <text
              x="47"
              y="66"
              fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
              fontSize="28"
              fontWeight="900"
              fill={`url(#goldGrad-${size})`}
              textAnchor="middle"
              letterSpacing="-1"
            >
              G
            </text>
            <text
              x="73"
              y="66"
              fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
              fontSize="26"
              fontWeight="900"
              fill={`url(#goldGrad-${size})`}
              textAnchor="middle"
              letterSpacing="-1"
            >
              W
            </text>
          </g>

          {/* Gold Divider Ribbon & Star */}
          <line x1="28" y1="73" x2="44" y2="73" stroke={`url(#goldGrad-${size})`} strokeWidth="1" />
          <polygon points="60,70 61.5,72.5 64.5,73 62,75 63,78 60,76.5 57,78 58,75 55.5,73 58.5,72.5" fill={`url(#goldGrad-${size})`} />
          <line x1="76" y1="73" x2="92" y2="73" stroke={`url(#goldGrad-${size})`} strokeWidth="1" />

          {/* Subtitle Text "GULTA WHITE" */}
          <text
            x="60"
            y="86"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="8"
            fontWeight="800"
            fill="#fef08a"
            textAnchor="middle"
            letterSpacing="2.6"
          >
            GULTA WHITE
          </text>

          {/* Luxury Sub-caption */}
          <text
            x="60"
            y="97"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="5.5"
            fontWeight="700"
            fill={`url(#goldGrad-${size})`}
            textAnchor="middle"
            letterSpacing="1.8"
          >
            DERMA LUXURY
          </text>
        </svg>
      </div>

      {/* Typography Label */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', lineHeight: 1 }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: size >= 48 ? '1.5rem' : size >= 42 ? '1.25rem' : '1.1rem',
                fontWeight: '900',
                color: isLightText ? '#ffffff' : '#26000c',
                letterSpacing: '-0.4px',
                whiteSpace: 'nowrap'
              }}
            >
              GultaWhite
            </span>
            <span
              className="gold-shimmer-text"
              style={{
                fontSize: '0.82rem',
                fontWeight: '900'
              }}
            >
              ™
            </span>
          </div>
          {subtitle && (
            <span
              style={{
                fontSize: '0.58rem',
                fontWeight: '800',
                letterSpacing: '1.8px',
                color: isLightText ? '#d4af37' : '#7e5260',
                textTransform: 'uppercase',
                marginTop: '3px',
                whiteSpace: 'nowrap',
                lineHeight: 1
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

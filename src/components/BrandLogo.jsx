import React from 'react';

export default function BrandLogo({ size = 42, showText = true, textTheme = 'dark', subtitle = 'DERMATOLOGICAL LUXURY' }) {
  const isLightText = textTheme === 'light';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', userSelect: 'none' }}>
      {/* Refined Brand Emblem */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          position: 'relative',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(35, 1, 11, 0.25)',
          transition: 'transform 0.2s ease'
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
              <stop offset="0%" stopColor="#d8b467" />
              <stop offset="50%" stopColor="#c5a059" />
              <stop offset="100%" stopColor="#a37b31" />
            </linearGradient>

            <radialGradient id={`velvetBg-${size}`} cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#380113" />
              <stop offset="60%" stopColor="#23010b" />
              <stop offset="100%" stopColor="#150006" />
            </radialGradient>
          </defs>

          {/* Clean Outer Ring & Base */}
          <circle cx="60" cy="60" r="57" fill={`url(#velvetBg-${size})`} stroke={`url(#goldGrad-${size})`} strokeWidth="2.5" />
          <circle cx="60" cy="60" r="51" fill="none" stroke={`url(#goldGrad-${size})`} strokeWidth="0.8" opacity="0.6" strokeDasharray="3 2" />

          {/* Minimal Crown Accent */}
          <g transform="translate(60, 31) scale(0.75)">
            <path d="M-14,7 L-12,0 L-5,4 L0,-6 L5,4 L12,0 L14,7 Z" fill={`url(#goldGrad-${size})`} />
            <circle cx="-12" cy="-1" r="1.3" fill="#ffffff" />
            <circle cx="0" cy="-7" r="1.8" fill="#ffffff" />
            <circle cx="12" cy="-1" r="1.3" fill="#ffffff" />
          </g>

          {/* Monogram "GW" */}
          <text
            x="48"
            y="67"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="26"
            fontWeight="800"
            fill={`url(#goldGrad-${size})`}
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            G
          </text>
          <text
            x="74"
            y="67"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="24"
            fontWeight="800"
            fill={`url(#goldGrad-${size})`}
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            W
          </text>

          {/* Elegant Horizontal Rule */}
          <line x1="30" y1="74" x2="90" y2="74" stroke={`url(#goldGrad-${size})`} strokeWidth="0.8" opacity="0.8" />

          {/* Brand Name Text */}
          <text
            x="60"
            y="87"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="8.5"
            fontWeight="800"
            fill="#f7eed9"
            textAnchor="middle"
            letterSpacing="2.2"
          >
            GULTA WHITE
          </text>

          {/* Subtitle */}
          <text
            x="60"
            y="98"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="5.5"
            fontWeight="700"
            fill={`url(#goldGrad-${size})`}
            textAnchor="middle"
            letterSpacing="1.8"
          >
            CLINICAL LUXURY
          </text>
        </svg>
      </div>

      {/* Typography Label */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', lineHeight: 1 }}>
            <span
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: size >= 48 ? '1.45rem' : size >= 40 ? '1.22rem' : '1.05rem',
                fontWeight: '900',
                color: isLightText ? '#ffffff' : '#23010b',
                letterSpacing: '-0.03em',
                whiteSpace: 'nowrap'
              }}
            >
              Gulta White
            </span>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: '800',
                color: 'var(--gold-primary)'
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
                letterSpacing: '1.6px',
                color: isLightText ? '#c5a059' : '#826670',
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

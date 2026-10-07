import React, { useState } from 'react';
import { Sun, Moon, Crown, CheckCircle2 } from 'lucide-react';

export default function SkinCareTips() {
  const [activeTab, setActiveTab] = useState('day');

  const dayRoutine = [
    { step: 'Step 1', title: 'Deep Cleanse', desc: 'Use Gulta White Deep Glow Face Wash with lukewarm water to remove overnight sebum & impurities.' },
    { step: 'Step 2', title: 'Hydrate & Protect', desc: 'Apply a pea-sized amount of Gulta White Day Cream across face and neck in gentle upward circular motion.' },
    { step: 'Step 3', title: 'Solar Barrier', desc: 'Seal with Gulta White SPF 50+ Sunscreen for broad spectrum UVA/UVB protection.' }
  ];

  const nightRoutine = [
    { step: 'Step 1', title: 'Purify', desc: 'Wash away daily dust, pollutants, and environmental toxins with Face Wash.' },
    { step: 'Step 2', title: 'Intensive Cellular Repair', desc: 'Apply Gulta White Night Cream generously before sleeping. Let Retinol & Glutathione renew cells overnight.' },
    { step: 'Step 3', title: 'Overnight Regeneration', desc: 'Allow 7-8 hours rest for active dermatological cell turnover.' }
  ];

  const steps = activeTab === 'day' ? dayRoutine : nightRoutine;

  return (
    <section
      id="routine"
      style={{
        padding: 'clamp(2.5rem, 5vw, 5rem) 0',
        backgroundColor: '#fdf2f5',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem auto', padding: '0 0.5rem' }}>
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: '800',
              color: '#d4af37',
              textTransform: 'uppercase',
              letterSpacing: '1.8px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '6px'
            }}
          >
            <Crown size={15} /> Daily Dermatological Protocol
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
              fontWeight: '800',
              color: '#1e050c',
              lineHeight: 1.25,
              wordBreak: 'break-word'
            }}
          >
            Recommended <span className="gold-shimmer-text">Gulta White™</span> Routine
          </h2>
          <p style={{ fontSize: '0.86rem', color: '#7e5260', marginTop: '6px', lineHeight: 1.5 }}>
            Simple 3-step protocols designed by skincare specialists for fast visible results.
          </p>
        </div>

        {/* Tab Switcher - Fully Responsive Segmented Pill */}
        <div style={{ maxWidth: '380px', width: '100%', margin: '0 auto 2.2rem auto', padding: '0 0.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              backgroundColor: '#ffffff',
              padding: '5px',
              borderRadius: '9999px',
              border: '1.5px solid rgba(212, 175, 55, 0.35)',
              boxShadow: '0 4px 15px rgba(59, 0, 20, 0.05)'
            }}
          >
            <button
              onClick={() => setActiveTab('day')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: '9999px',
                fontSize: '0.86rem',
                fontWeight: '800',
                background: activeTab === 'day' ? 'linear-gradient(135deg, #bf953f 0%, #d4af37 100%)' : 'transparent',
                color: activeTab === 'day' ? '#140006' : '#4a1c29',
                border: 'none',
                boxShadow: activeTab === 'day' ? '0 4px 14px rgba(212, 175, 55, 0.35)' : 'none',
                transition: 'all 0.25s ease',
                cursor: 'pointer'
              }}
            >
              <Sun size={17} /> Morning Protocol
            </button>

            <button
              onClick={() => setActiveTab('night')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: '9999px',
                fontSize: '0.86rem',
                fontWeight: '800',
                background: activeTab === 'night' ? 'linear-gradient(135deg, #3b0014 0%, #140006 100%)' : 'transparent',
                color: activeTab === 'night' ? '#fef08a' : '#4a1c29',
                border: 'none',
                boxShadow: activeTab === 'night' ? '0 4px 14px rgba(59, 0, 20, 0.35)' : 'none',
                transition: 'all 0.25s ease',
                cursor: 'pointer'
              }}
            >
              <Moon size={17} /> Evening Repair
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1.25rem'
          }}
        >
          {steps.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '1.4rem 1.25rem',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 8px 24px rgba(59, 0, 20, 0.05)',
                transition: 'transform 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: '900',
                    color: '#d4af37',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    padding: '3px 10px',
                    borderRadius: '9999px'
                  }}
                >
                  {item.step}
                </span>
                <CheckCircle2 size={16} color="#d4af37" />
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  fontWeight: '800',
                  color: '#1e050c',
                  marginBottom: '8px'
                }}
              >
                {item.title}
              </h4>

              <p style={{ fontSize: '0.88rem', color: '#7e5260', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Sun, Moon, CheckCircle2 } from 'lucide-react';

export default function SkinCareTips() {
  const [activeTab, setActiveTab] = useState('day');

  const dayRoutine = [
    {
      step: 'Step 01',
      title: 'Deep Cleanse',
      desc: 'Use Gulta White Deep Glow Face Wash with lukewarm water to remove overnight sebum and environmental impurities without stripping moisture.'
    },
    {
      step: 'Step 02',
      title: 'Moisturize & Brighten',
      desc: 'Apply a pea-sized amount of Gulta White Day Cream across face and neck in gentle upward circular motions to infuse Glutathione and Vitamin C.'
    },
    {
      step: 'Step 03',
      title: 'Broad-Spectrum Shield',
      desc: 'Seal with Gulta White SPF 50+ Sunscreen. Non-greasy, zero white cast matte barrier against intense UVA/UVB rays.'
    }
  ];

  const nightRoutine = [
    {
      step: 'Step 01',
      title: 'Purify & Clarify',
      desc: 'Wash away daily dust, pollutants, and residue with the gentle Deep Glow Face Wash.'
    },
    {
      step: 'Step 02',
      title: 'Cellular Repair Complex',
      desc: 'Apply Gulta White Intensive Overnight Cream generously before sleep. Niacinamide and Glutathione work with nocturnal cell renewal.'
    },
    {
      step: 'Step 03',
      title: 'Overnight Rejuvenation',
      desc: 'Allow active peptides and vitamins 7 to 8 hours to restore elasticity, diminish dark spots, and hydrate deep skin layers.'
    }
  ];

  const steps = activeTab === 'day' ? dayRoutine : nightRoutine;

  return (
    <section
      id="routine"
      style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-card)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem auto', padding: '0 0.5rem' }}>
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: '800',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              display: 'inline-block',
              marginBottom: '6px'
            }}
          >
            Dermatological Protocol
          </span>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)',
              fontWeight: '900',
              color: 'var(--text-main)',
              lineHeight: 1.25,
              marginBottom: '8px'
            }}
          >
            Recommended Skincare Regimen
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            Simple, high-efficacy 3-step protocols designed for visible results in Pakistani climate.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ maxWidth: '360px', width: '100%', margin: '0 auto 2rem auto', padding: '0 0.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              backgroundColor: 'var(--bg-page)',
              padding: '4px',
              borderRadius: '9999px',
              border: '1px solid var(--border-card)'
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
                fontWeight: '700',
                backgroundColor: activeTab === 'day' ? 'var(--brand-burgundy)' : 'transparent',
                color: activeTab === 'day' ? '#fbeec8' : 'var(--text-main)',
                border: 'none',
                boxShadow: activeTab === 'day' ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <Sun size={16} /> Morning Protocol
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
                fontWeight: '700',
                backgroundColor: activeTab === 'night' ? 'var(--brand-burgundy)' : 'transparent',
                color: activeTab === 'night' ? '#fbeec8' : 'var(--text-main)',
                border: 'none',
                boxShadow: activeTab === 'night' ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <Moon size={16} /> Evening Protocol
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem'
          }}
        >
          {steps.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-page)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                border: '1px solid var(--border-card)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: '800',
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-card)',
                    padding: '3px 10px',
                    borderRadius: '9999px'
                  }}
                >
                  {item.step}
                </span>
                <CheckCircle2 size={16} color="var(--gold-primary)" />
              </div>

              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: 'var(--text-main)',
                  marginBottom: '8px'
                }}
              >
                {item.title}
              </h4>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

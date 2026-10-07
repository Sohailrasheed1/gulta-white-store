import React from 'react';
import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: 'Free Express Shipping',
      subtitle: 'Dispatched in 24 hours across all cities in Pakistan.'
    },
    {
      icon: CreditCard,
      title: 'COD & Mobile Wallets',
      subtitle: 'Pay Cash at doorstep or via EasyPaisa, JazzCash & Bank.'
    },
    {
      icon: ShieldCheck,
      title: '100% Original Glutathione',
      subtitle: 'Certified steroid-free & safe for all skin types.'
    },
    {
      icon: Headphones,
      title: 'Skincare Consultation',
      subtitle: 'Instant guidance and routine tips via WhatsApp.'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-card)',
        padding: 'clamp(1.5rem, 3vw, 2.5rem) 0'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '1.25rem'
          }}
        >
          {badges.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-card)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--brand-burgundy)',
                    color: '#c5a059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: '800',
                      color: 'var(--text-main)',
                      marginBottom: '2px',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                      margin: 0
                    }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

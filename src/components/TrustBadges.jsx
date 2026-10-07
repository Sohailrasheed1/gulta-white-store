import React from 'react';
import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: 'Free Express Shipping',
      subtitle: 'Nationwide fast delivery in 2-4 working days.'
    },
    {
      icon: CreditCard,
      title: 'COD & EasyPaisa / JazzCash',
      subtitle: 'Pay Cash at doorstep or via EasyPaisa, JazzCash & Bank.'
    },
    {
      icon: ShieldCheck,
      title: '100% Original Glutathione',
      subtitle: 'Authentic formulas direct from Gulta White Laboratories.'
    },
    {
      icon: Headphones,
      title: '24/7 Skin Consultation',
      subtitle: 'Instant WhatsApp assistance from skin specialists.'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        padding: 'clamp(1.8rem, 3.5vw, 2.8rem) 0',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1rem'
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
                  padding: '14px 16px',
                  borderRadius: '16px',
                  backgroundColor: '#fdf2f5',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#d4af37';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(59, 0, 20, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #3b0014 0%, #140006 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: '#d4af37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(59, 0, 20, 0.2)'
                  }}
                >
                  <IconComponent size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#1e050c', marginBottom: '2px', lineHeight: 1.25 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: '#7e5260', lineHeight: 1.4 }}>
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

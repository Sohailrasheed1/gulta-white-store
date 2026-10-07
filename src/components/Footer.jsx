import React from 'react';
import { ShieldCheck, Lock, ChevronRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { EasyPaisaLogo, JazzCashLogo, MeezanBankLogo, CodLogo } from './PaymentLogos';

export default function Footer() {
  const quickLinks = [
    { name: 'Collection', href: '#products' },
    { name: 'Skincare Regimen', href: '#routine' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'FAQ & Shipping Policy', href: '#faq' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#180007',
        color: '#d8c2cb',
        padding: 'clamp(2.5rem, 5vw, 4rem) 0 clamp(5.5rem, 8vw, 3rem) 0',
        borderTop: '1px solid rgba(197, 160, 89, 0.25)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(1.8rem, 3.5vw, 3rem)',
            marginBottom: '2.5rem'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <BrandLogo size={46} showText={true} textTheme="light" subtitle="CLINICAL DERMA CARE" />
            </div>

            <p style={{ fontSize: '0.86rem', color: '#e4d3db', lineHeight: 1.65, marginBottom: '1.2rem' }}>
              Pakistan's premier dermatological Glutathione skincare brand. 100% original, steroid-free formulas crafted for radiant, healthy skin.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: '#c5a059', fontWeight: '600' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={14} /> 256-Bit SSL Encrypted Checkout
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} /> Authentic Glutathione Guarantee
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4
              style={{
                color: '#c5a059',
                fontSize: '0.96rem',
                fontWeight: '800',
                marginBottom: '1rem',
                letterSpacing: '0.5px'
              }}
            >
              Quick Navigation
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: '#e4d3db',
                      fontSize: '0.86rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c5a059')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#e4d3db')}
                  >
                    <ChevronRight size={14} color="#c5a059" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Payment Gateways */}
          <div>
            <h4
              style={{
                color: '#c5a059',
                fontSize: '0.96rem',
                fontWeight: '800',
                marginBottom: '1rem',
                letterSpacing: '0.5px'
              }}
            >
              Payment Methods
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
                marginBottom: '1rem'
              }}
            >
              <div>
                <CodLogo height={30} />
              </div>
              <div>
                <EasyPaisaLogo height={30} />
              </div>
              <div>
                <JazzCashLogo height={30} />
              </div>
              <div>
                <MeezanBankLogo height={30} />
              </div>
            </div>

            <p style={{ fontSize: '0.78rem', color: '#d8c2cb', lineHeight: 1.5 }}>
              Free Cash on Delivery (COD) available nationwide across Pakistan.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(197, 160, 89, 0.2)',
            paddingTop: '1.5rem',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#d8c2cb',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            alignItems: 'center'
          }}
        >
          <div style={{ fontWeight: '600', color: '#ffffff' }}>
            © {new Date().getFullYear()} Gulta White™ Luxury Skincare. All Rights Reserved.
          </div>
          <div style={{ fontSize: '0.72rem', color: '#c5a059' }}>
            Formulated Specially for Pakistani Skin & Climate • Certified Steroid-Free
          </div>
        </div>
      </div>
    </footer>
  );
}

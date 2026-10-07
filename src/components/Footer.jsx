import React from 'react';
import { ShieldCheck, Lock, ChevronRight, PhoneCall, Mail, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { EasyPaisaLogo, JazzCashLogo, MeezanBankLogo, CodLogo } from './PaymentLogos';

export default function Footer() {
  const quickLinks = [
    { name: 'Home Showcase', href: '#hero' },
    { name: 'Luxury Skincare Collection', href: '#products' },
    { name: 'Dermatological Routine Guide', href: '#routine' },
    { name: 'Verified Customer Reviews', href: '#reviews' },
    { name: 'FAQ & Order Support', href: '#faq' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#140006',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, #26000c 0%, #140006 85%)',
        color: '#ebd390',
        padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(6rem, 10vw, 3.5rem) 0', // Extra bottom clearance for mobile bottom nav!
        borderTop: '2px solid rgba(212, 175, 55, 0.35)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '1.2rem' }}>
              <BrandLogo size={52} showText={true} textTheme="light" subtitle="ORIGINAL DERMA CARE" />
            </div>

            <p style={{ fontSize: '0.88rem', color: '#f5e4bd', lineHeight: 1.7, marginBottom: '1.4rem' }}>
              Pakistan's premier luxury dermatological Glutathione skincare brand. 100% original, certified organic formulas crafted to deliver radiant, spot-free glass skin.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#d4af37', fontWeight: '700' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={15} /> 256-Bit SSL Encrypted & Secure Checkout
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={15} /> 100% Authentic Glutathione Guarantee
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4
              style={{
                color: '#d4af37',
                fontSize: '1.05rem',
                fontWeight: '800',
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.5px',
                borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
                paddingBottom: '8px',
                display: 'inline-block'
              }}
            >
              Quick Navigation
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: '#f5e4bd',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d4af37';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#f5e4bd';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ChevronRight size={15} color="#d4af37" />
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
                color: '#d4af37',
                fontSize: '1.05rem',
                fontWeight: '800',
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.5px',
                borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
                paddingBottom: '8px',
                display: 'inline-block'
              }}
            >
              Official Payment Methods
            </h4>

            {/* Official Logos */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                gap: '10px',
                marginBottom: '1.2rem'
              }}
            >
              <div style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))' }}>
                <CodLogo height={34} />
              </div>
              <div style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))' }}>
                <EasyPaisaLogo height={34} />
              </div>
              <div style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))' }}>
                <JazzCashLogo height={34} />
              </div>
              <div style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))' }}>
                <MeezanBankLogo height={34} />
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#ebd390', opacity: 0.9, lineHeight: 1.55 }}>
              Cash on Delivery (COD) available nationwide across Pakistan. Fast dispatch within 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom Bar: All Rights Reserved Line */}
        <div
          style={{
            borderTop: '1px solid rgba(212, 175, 55, 0.25)',
            paddingTop: '1.8rem',
            textAlign: 'center',
            fontSize: '0.84rem',
            color: '#f5e4bd',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            alignItems: 'center'
          }}
        >
          <div style={{ fontWeight: '700', color: '#ffffff' }}>
            © {new Date().getFullYear()} Gulta White™ Luxury Skincare Collection. All Rights Reserved.
          </div>
          <div style={{ fontSize: '0.74rem', color: '#d4af37' }}>
            Formulated Specially for Pakistani Skin & Climate • Certified Safe & Steroid-Free
          </div>
        </div>
      </div>
    </footer>
  );
}

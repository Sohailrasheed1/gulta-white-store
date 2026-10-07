import React from 'react';
import { 
  X, Grid, Sparkles, Star, HelpCircle, 
  PhoneCall, ShieldCheck, Truck, Lock, ChevronRight 
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function MobileAppDrawer({
  isOpen,
  onClose,
  activeCategory,
  setActiveCategory,
  searchFilter,
  setSearchFilter,
  whatsappNumber,
  onOpenAdmin
}) {
  if (!isOpen) return null;

  const categories = [
    { id: 'all', name: 'All Formulas' },
    { id: 'cream', name: 'Creams' },
    { id: 'wash', name: 'Cleansers' },
    { id: 'sun', name: 'Sunscreen' },
    { id: 'set', name: 'Bundles & Kits' }
  ];

  const handleWhatsAppHelp = () => {
    const cleanNum = (whatsappNumber || '923001234567').replace(/[^0-9]/g, '');
    const text = encodeURIComponent('Hi Gulta White™! I need assistance with product selection & placing an order.');
    window.open(`https://wa.me/${cleanNum}?text=${text}`, '_blank');
    onClose();
  };

  const handleNavClick = (href, category = null) => {
    if (category && setActiveCategory) setActiveCategory(category);
    onClose();
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        display: 'flex',
        animation: 'fadeInModal 0.2s ease-out'
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(24, 0, 7, 0.7)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)'
        }}
      />

      {/* Drawer Panel */}
      <aside
        className="animate-slide-right"
        style={{
          position: 'relative',
          width: '85%',
          maxWidth: '320px',
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2501,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem 1.25rem',
            backgroundColor: 'var(--brand-burgundy)',
            borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}
        >
          <BrandLogo size={38} showText={true} textTheme="light" subtitle="MENU" />

          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#c5a059',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Close menu drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          
          {/* Main Navigation Links */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: '800',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}
            >
              Explore Store
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <button
                onClick={() => handleNavClick('#products', 'all')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-main)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Grid size={17} color="var(--gold-primary)" /> All Formulas
                </span>
                <ChevronRight size={15} color="var(--text-muted)" />
              </button>

              <button
                onClick={() => handleNavClick('#routine')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-main)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={17} color="var(--gold-primary)" /> Daily Skincare Routine
                </span>
                <ChevronRight size={15} color="var(--text-muted)" />
              </button>

              <button
                onClick={() => handleNavClick('#reviews')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-main)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Star size={17} color="var(--gold-primary)" /> Customer Reviews
                </span>
                <ChevronRight size={15} color="var(--text-muted)" />
              </button>

              <button
                onClick={() => handleNavClick('#faq')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-main)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={17} color="var(--gold-primary)" /> FAQs & Shipping
                </span>
                <ChevronRight size={15} color="var(--text-muted)" />
              </button>
            </nav>
          </div>

          {/* Quick Categories */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: '800',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}
            >
              Categories
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleNavClick('#products', c.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    border: activeCategory === c.id ? '1px solid var(--brand-burgundy)' : '1px solid var(--border-card)',
                    backgroundColor: activeCategory === c.id ? 'var(--brand-burgundy)' : 'var(--bg-page)',
                    color: activeCategory === c.id ? '#fbeec8' : 'var(--text-main)',
                    cursor: 'pointer'
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Specialist Assistance */}
          <div
            style={{
              backgroundColor: 'var(--color-success-bg)',
              borderRadius: 'var(--radius-md)',
              padding: '12px',
              border: '1px solid rgba(37, 211, 102, 0.3)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-whatsapp)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <PhoneCall size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: '800', color: '#135e2c' }}>Need Assistance?</div>
                <div style={{ fontSize: '0.72rem', color: '#1c773a' }}>Skincare Specialist Online</div>
              </div>
            </div>
            <button
              onClick={handleWhatsAppHelp}
              className="btn-whatsapp-action"
              style={{
                width: '100%',
                padding: '9px 12px',
                fontSize: '0.82rem'
              }}
            >
              Chat on WhatsApp
            </button>
          </div>

          {/* Assurances */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Truck size={14} color="var(--gold-primary)" /> <strong>Free Delivery</strong> All Over Pakistan
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={14} color="var(--gold-primary)" /> <strong>100% Original</strong> Organic Formula
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={14} color="var(--gold-primary)" /> <strong>256-Bit SSL</strong> Encrypted Checkout
            </div>
          </div>

          {/* Admin Config Button */}
          {onOpenAdmin && (
            <button
              onClick={() => {
                onClose();
                onOpenAdmin();
              }}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-page)',
                border: '1px dashed var(--border-subtle)',
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Admin WhatsApp Settings
            </button>
          )}

        </div>

        {/* Minimal Footer */}
        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--brand-burgundy)',
            color: '#d8c2cb',
            fontSize: '0.7rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(197, 160, 89, 0.2)'
          }}
        >
          <div style={{ fontWeight: '700', color: '#ffffff' }}>Gulta White™ Skincare</div>
          <div>© {new Date().getFullYear()} All Rights Reserved.</div>
        </div>
      </aside>
    </div>
  );
}

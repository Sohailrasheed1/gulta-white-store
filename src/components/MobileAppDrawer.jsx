import React from 'react';
import { 
  X, Home, Grid, Sparkles, Star, HelpCircle, 
  PhoneCall, ShieldCheck, Truck, Lock, ChevronRight, Search 
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { EasyPaisaLogo, JazzCashLogo, MeezanBankLogo, CodLogo } from './PaymentLogos';

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
    { id: 'all', name: 'All Products' },
    { id: 'cream', name: 'Creams' },
    { id: 'wash', name: 'Cleansers' },
    { id: 'sun', name: 'Sunscreen' },
    { id: 'set', name: 'Bundles & Kits' }
  ];

  const handleWhatsAppHelp = () => {
    const cleanNum = whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent('Hi Gulta White™! I need assistance with product selection & placing an order.');
    window.open(`https://wa.me/${cleanNum}?text=${text}`, '_blank');
    onClose();
  };

  const handleNavClick = (href, category = null) => {
    if (category) setActiveCategory(category);
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
        animation: 'fadeIn 0.25s ease'
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(20, 0, 6, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      />

      {/* Slide-over Drawer Panel */}
      <aside
        style={{
          position: 'relative',
          width: '85%',
          maxWidth: '340px',
          height: '100%',
          backgroundColor: '#ffffff',
          backgroundImage: 'radial-gradient(ellipse at 0% 0%, #fdf2f5 0%, #ffffff 80%)',
          boxShadow: '10px 0 40px rgba(0, 0, 0, 0.45)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2501,
          animation: 'slideFromLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.2rem 1.25rem',
            background: 'linear-gradient(135deg, #26000c 0%, #140006 100%)',
            borderBottom: '2px solid rgba(212, 175, 55, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}
        >
          <BrandLogo size={42} showText={true} textTheme="light" subtitle="MOBILE APP MENU" />

          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: '#d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Bar Inside Drawer */}
        <div style={{ padding: '1rem 1.25rem 0.6rem 1.25rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fdf2f5',
              borderRadius: '9999px',
              padding: '8px 14px',
              border: '1px solid rgba(212, 175, 55, 0.35)'
            }}
          >
            <Search size={16} color="#7e5260" style={{ marginRight: '8px', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search products, ingredients..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: '0.86rem',
                width: '100%',
                color: '#1e050c',
                fontWeight: '500'
              }}
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                style={{ background: 'none', border: 'none', color: '#7e5260', padding: 0, cursor: 'pointer' }}
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Drawer Content */}
        <div style={{ padding: '0.8rem 1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          
          {/* Main Navigation Items */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
              Navigation
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <button
                onClick={() => handleNavClick('#hero')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  color: '#26000c',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  textAlign: 'left'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Home size={18} color="#d4af37" /> Home Showcase
                </span>
                <ChevronRight size={16} color="#7e5260" />
              </button>

              <button
                onClick={() => handleNavClick('#products', 'all')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  color: '#26000c',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  textAlign: 'left'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Grid size={18} color="#d4af37" /> Shop All Products
                </span>
                <ChevronRight size={16} color="#7e5260" />
              </button>

              <button
                onClick={() => handleNavClick('#routine')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  color: '#26000c',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  textAlign: 'left'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={18} color="#d4af37" /> Skin Routine Guide
                </span>
                <ChevronRight size={16} color="#7e5260" />
              </button>

              <button
                onClick={() => handleNavClick('#reviews')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  color: '#26000c',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  textAlign: 'left'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Star size={18} color="#d4af37" /> Verified Customer Reviews
                </span>
                <ChevronRight size={16} color="#7e5260" />
              </button>

              <button
                onClick={() => handleNavClick('#faq')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  color: '#26000c',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  textAlign: 'left'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={18} color="#d4af37" /> FAQs & Shipping Info
                </span>
                <ChevronRight size={16} color="#7e5260" />
              </button>
            </nav>
          </div>

          {/* Quick Category Jump */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
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
                    border: activeCategory === c.id ? 'none' : '1px solid rgba(212, 175, 55, 0.3)',
                    background: activeCategory === c.id ? 'linear-gradient(135deg, #3b0014 0%, #140006 100%)' : '#fdf2f5',
                    color: activeCategory === c.id ? '#fef08a' : '#4a1c29'
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Instant Support CTA */}
          <div
            style={{
              backgroundColor: '#eefaf2',
              borderRadius: '16px',
              padding: '12px',
              border: '1px solid rgba(37, 211, 102, 0.35)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <PhoneCall size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#135e2c' }}>Need Fast Assistance?</div>
                <div style={{ fontSize: '0.72rem', color: '#1c773a' }}>Skin Specialist 24/7 Available</div>
              </div>
            </div>
            <button
              onClick={handleWhatsAppHelp}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: '10px',
                backgroundColor: '#25d366',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '0.82rem',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
              }}
            >
              Order / Chat on WhatsApp
            </button>
          </div>

          {/* Trust Guarantees */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem', color: '#4a1c29' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Truck size={14} color="#d4af37" /> <strong>Free Delivery</strong> All Over Pakistan (2-4 Days)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={14} color="#d4af37" /> <strong>100% Original</strong> Organic Glutathione Formula
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={14} color="#d4af37" /> <strong>256-Bit SSL</strong> Encrypted & Secure Checkout
            </div>
          </div>

          {/* Payment Gateways (COD, EasyPaisa, JazzCash, Meezan) */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
              Accepted Payment Gateways
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))' }}>
                <CodLogo height={32} />
              </div>
              <div style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))' }}>
                <EasyPaisaLogo height={32} />
              </div>
              <div style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))' }}>
                <JazzCashLogo height={32} />
              </div>
              <div style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))' }}>
                <MeezanBankLogo height={32} />
              </div>
            </div>
          </div>

          {/* Admin Config Button (Convenient for User) */}
          {onOpenAdmin && (
            <button
              onClick={() => {
                onClose();
                onOpenAdmin();
              }}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#fdf2f5',
                border: '1px dashed rgba(212, 175, 55, 0.4)',
                color: '#7e5260',
                fontSize: '0.76rem',
                fontWeight: '700',
                textAlign: 'center'
              }}
            >
              ⚙️ WhatsApp Admin Configuration
            </button>
          )}

        </div>

        {/* Drawer Mobile Footer: All Rights Reserved Line */}
        <div
          style={{
            padding: '1rem 1.25rem',
            backgroundColor: '#140006',
            color: '#ebd390',
            borderTop: '1px solid rgba(212, 175, 55, 0.3)',
            fontSize: '0.72rem',
            textAlign: 'center',
            lineHeight: 1.5
          }}
        >
          <div style={{ fontWeight: '800', color: '#ffffff', marginBottom: '2px' }}>
            Gulta White™ Luxury Skincare
          </div>
          <div style={{ color: '#d4af37' }}>
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
          <div style={{ fontSize: '0.66rem', color: '#a37c88', marginTop: '4px' }}>
            Formulated Specially for Pakistani Skin & Climate.
          </div>
        </div>

      </aside>
    </div>
  );
}

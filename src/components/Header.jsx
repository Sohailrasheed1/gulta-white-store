import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, PhoneCall, Truck, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Header({
  cartCount,
  onOpenCart,
  onOpenAdmin,
  searchFilter,
  setSearchFilter,
  activeCategory,
  setActiveCategory,
  onOpenMobileDrawer,
  whatsappNumber
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppQuick = () => {
    const cleanNum = (whatsappNumber || '923001234567').replace(/[^0-9]/g, '');
    const text = encodeURIComponent('Hi Gulta White™! I want to inquire about products and place an order.');
    window.open(`https://wa.me/${cleanNum}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Top Announcement Bar - Pure Royal Velvet & Gold */}
      <div
        style={{
          background: 'linear-gradient(90deg, #140006 0%, #22000b 35%, #2a000e 50%, #22000b 65%, #140006 100%)',
          color: '#fef08a',
          fontSize: '0.74rem',
          padding: '7px 1rem',
          borderBottom: '1px solid rgba(212, 175, 55, 0.22)',
          position: 'relative',
          zIndex: 100
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'nowrap'
          }}
        >
          {/* Left Announcement */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: '700',
                color: '#fef08a',
                fontSize: '0.72rem'
              }}
            >
              <Truck size={13} color="#d4af37" style={{ flexShrink: 0 }} />
              <strong>FREE EXPRESS SHIPPING</strong> Across Pakistan
            </span>
            <span style={{ color: 'rgba(212, 175, 55, 0.4)' }} className="desktop-only-bullet">•</span>
            <span style={{ color: '#ebd390', fontWeight: '500', fontSize: '0.72rem' }} className="desktop-only-announcement">
              Cash on Delivery (COD) Available • 2-4 Days
            </span>
          </div>

          {/* Right Links (Helpline & Admin) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={handleWhatsAppQuick}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: '#ffffff',
                background: 'rgba(37, 211, 102, 0.16)',
                border: '1px solid rgba(37, 211, 102, 0.4)',
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title="Click to chat on WhatsApp"
            >
              <PhoneCall size={11} color="#25d366" />
              <span className="desktop-only-announcement">WhatsApp:</span> 0300-1234567
            </button>

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="desktop-only-announcement"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#ebd390',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
                title="Configure WhatsApp order recipient"
              >
                Config
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Luxury Sticky Header - STRICT BRAND THEME (Royal Velvet Burgundy & Gold) */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          background: isScrolled
            ? 'rgba(38, 0, 12, 0.96)'
            : 'linear-gradient(135deg, #26000c 0%, #3b0014 50%, #1e0009 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 30px rgba(20, 0, 6, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.35)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '10px 1rem' : '12px 1rem',
            transition: 'padding 0.3s ease'
          }}
        >
          {/* Left: Mobile Hamburger & Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Mobile Hamburger Menu Button - Styled in Royal Velvet & Gold Theme */}
            <button
              onClick={onOpenMobileDrawer}
              className="mobile-burger-btn"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid rgba(212, 175, 55, 0.45)',
                color: '#d4af37',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.2s ease'
              }}
              aria-label="Open App Menu"
            >
              <Menu size={20} color="#d4af37" />
            </button>

            {/* Brand Logo with Circular Emblem & Light/Gold Typography */}
            <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <BrandLogo size={isScrolled ? 40 : 44} showText={true} textTheme="light" subtitle="DERMATOLOGICAL LUXURY" />
            </a>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
            <a
              href="#hero"
              style={{
                fontWeight: '700',
                color: '#ffffff',
                fontSize: '0.92rem',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
            >
              Home
            </a>

            <a
              href="#products"
              onClick={() => setActiveCategory && setActiveCategory('all')}
              style={{
                fontWeight: '600',
                color: '#ebd390',
                fontSize: '0.92rem',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ebd390')}
            >
              Signature Collection
            </a>

            <a
              href="#routine"
              style={{
                fontWeight: '600',
                color: '#ebd390',
                fontSize: '0.92rem',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ebd390')}
            >
              Regimen Guide
            </a>

            <a
              href="#reviews"
              style={{
                fontWeight: '600',
                color: '#ebd390',
                fontSize: '0.92rem',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ebd390')}
            >
              Real Reviews
            </a>

            <a
              href="#faq"
              style={{
                fontWeight: '600',
                color: '#ebd390',
                fontSize: '0.92rem',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ebd390')}
            >
              Support & FAQ
            </a>
          </nav>

          {/* Right Group: Search Box & Gold Foil Cart Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            
            {/* Desktop Search Box in Dark Glass Theme */}
            <div
              className="desktop-search-box"
              style={{
                position: 'relative',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                padding: '7px 16px',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                width: '200px',
                transition: 'all 0.3s ease'
              }}
            >
              <Search size={14} color="#d4af37" style={{ marginRight: '8px', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search formulas..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '0.84rem',
                  width: '100%',
                  color: '#ffffff',
                  fontWeight: '500'
                }}
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ebd390',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Shopping Cart Button - Gold Foil with Deep Velvet Accents */}
            <button
              onClick={onOpenCart}
              className="header-cart-btn"
              style={{
                position: 'relative',
                height: '40px',
                padding: '0 15px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #bf953f 0%, #d4af37 50%, #aa771c 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                color: '#140006',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(212, 175, 55, 0.35)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(212, 175, 55, 0.35)';
              }}
              aria-label="Shopping Cart"
            >
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <ShoppingBag size={18} color="#140006" />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-10px',
                      background: '#140006',
                      color: '#fef08a',
                      fontSize: '0.66rem',
                      fontWeight: '900',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #d4af37',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.4)'
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="desktop-cart-label" style={{ fontSize: '0.82rem', fontWeight: '900', color: '#140006' }}>
                Cart {cartCount > 0 ? `(${cartCount})` : ''}
              </span>
            </button>

          </div>
        </div>
      </header>
    </>
  );
}

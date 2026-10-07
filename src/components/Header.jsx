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
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppQuick = () => {
    const cleanNum = (whatsappNumber || '923001234567').replace(/[^0-9]/g, '');
    const text = encodeURIComponent('Hi Gulta White™! I want to inquire about products and place an order.');
    window.open(`https://wa.me/${cleanNum}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        style={{
          backgroundColor: '#180007',
          color: '#fbeec8',
          fontSize: '0.74rem',
          padding: '6px 1rem',
          borderBottom: '1px solid rgba(197, 160, 89, 0.2)',
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
            gap: '12px'
          }}
        >
          {/* Left Announcement */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: '700',
                color: '#fbeec8',
                fontSize: '0.73rem'
              }}
            >
              <Truck size={13} color="#c5a059" style={{ flexShrink: 0 }} />
              <strong>FREE EXPRESS SHIPPING</strong> All Across Pakistan
            </span>
            <span style={{ color: 'rgba(197, 160, 89, 0.4)' }} className="desktop-only-announcement">•</span>
            <span style={{ color: '#d8c2cb', fontWeight: '500', fontSize: '0.72rem' }} className="desktop-only-announcement">
              Cash on Delivery (COD) Available • 2-4 Days Delivery
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
                background: 'rgba(37, 211, 102, 0.15)',
                border: '1px solid rgba(37, 211, 102, 0.35)',
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
              title="Click to chat on WhatsApp"
              aria-label="Direct WhatsApp Contact"
            >
              <PhoneCall size={11} color="#25d366" />
              <span className="desktop-only-announcement">Helpline:</span> 0300-1234567
            </button>

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="desktop-only-announcement"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#c5a059',
                  background: 'transparent',
                  border: '1px solid rgba(197, 160, 89, 0.25)',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  fontSize: '0.68rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                title="Configure WhatsApp order recipient"
                aria-label="Admin settings"
              >
                Config
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Luxury Sticky Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          backgroundColor: isScrolled ? 'rgba(35, 1, 11, 0.98)' : '#23010b',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: isScrolled ? '0 4px 20px rgba(24, 0, 7, 0.35)' : 'none',
          transition: 'all 0.25s ease',
          borderBottom: '1px solid rgba(197, 160, 89, 0.25)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '10px 1rem' : '14px 1rem',
            transition: 'padding 0.25s ease'
          }}
        >
          {/* Left Group: Mobile Menu & Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onOpenMobileDrawer}
              className="mobile-burger-btn"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                color: '#c5a059',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}
              aria-label="Open Navigation Menu"
            >
              <Menu size={20} color="#c5a059" />
            </button>

            <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <BrandLogo size={isScrolled ? 38 : 42} showText={true} textTheme="light" subtitle="DERMATOLOGICAL LUXURY" />
            </a>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <a
              href="#products"
              onClick={() => setActiveCategory && setActiveCategory('all')}
              style={{
                fontWeight: '600',
                color: '#fbeec8',
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fbeec8')}
            >
              Collection
            </a>

            <a
              href="#routine"
              style={{
                fontWeight: '600',
                color: '#d8c2cb',
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d8c2cb')}
            >
              Skincare Routine
            </a>

            <a
              href="#reviews"
              style={{
                fontWeight: '600',
                color: '#d8c2cb',
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d8c2cb')}
            >
              Reviews
            </a>

            <a
              href="#faq"
              style={{
                fontWeight: '600',
                color: '#d8c2cb',
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d8c2cb')}
            >
              FAQ & Shipping
            </a>
          </nav>

          {/* Right Group: Search Box & Bag Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {/* Desktop Search Box */}
            <div
              className="desktop-search-box"
              style={{
                position: 'relative',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                padding: '7px 14px',
                border: '1px solid rgba(197, 160, 89, 0.28)',
                width: '210px',
                transition: 'border-color 0.2s ease'
              }}
            >
              <Search size={14} color="#c5a059" style={{ marginRight: '8px', flexShrink: 0 }} />
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
                    color: '#c5a059',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Mobile Search Toggle Button */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="mobile-burger-btn"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                color: '#c5a059',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Search"
            >
              <Search size={18} color="#c5a059" />
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="header-cart-btn"
              style={{
                position: 'relative',
                height: '40px',
                padding: '0 16px',
                borderRadius: '9999px',
                backgroundColor: 'var(--gold-primary)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'var(--brand-velvet)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(197, 160, 89, 0.3)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-hover)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <ShoppingBag size={18} color="#180007" />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-10px',
                      backgroundColor: '#180007',
                      color: '#fbeec8',
                      fontSize: '0.66rem',
                      fontWeight: '800',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1.5px solid #c5a059'
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="desktop-cart-label" style={{ fontSize: '0.84rem', fontWeight: '800', color: '#180007' }}>
                Bag {cartCount > 0 ? `(${cartCount})` : ''}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Expandable Bar */}
        {isMobileSearchOpen && (
          <div
            style={{
              padding: '8px 1rem 12px 1rem',
              backgroundColor: '#180007',
              borderTop: '1px solid rgba(197, 160, 89, 0.2)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '8px 12px',
                border: '1px solid rgba(197, 160, 89, 0.3)'
              }}
            >
              <Search size={16} color="#c5a059" style={{ marginRight: '8px', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search formulas or ingredients..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                autoFocus
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '0.9rem',
                  width: '100%',
                  color: '#ffffff'
                }}
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  style={{ background: 'none', border: 'none', color: '#c5a059', padding: 0, cursor: 'pointer' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

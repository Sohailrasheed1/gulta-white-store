import React from 'react';
import { Home, Grid, ShoppingBag, MessageCircle, Menu } from 'lucide-react';

export default function MobileBottomNav({
  activeCategory,
  setActiveCategory,
  cartCount,
  onOpenCart,
  onOpenMobileDrawer,
  whatsappNumber
}) {
  const handleWhatsAppClick = () => {
    const cleanNum = (whatsappNumber || '923001234567').replace(/[^0-9]/g, '');
    const text = encodeURIComponent('Hi Gulta White™! I want to inquire about products and special offers.');
    window.open(`https://wa.me/${cleanNum}?text=${text}`, '_blank');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="mobile-only-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1900,
        backgroundColor: '#180007',
        borderTop: '1px solid rgba(197, 160, 89, 0.3)',
        padding: '6px 6px calc(6px + env(safe-area-inset-bottom)) 6px',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.35)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}
      aria-label="Mobile application navigation"
    >
      {/* Home Tab */}
      <button
        onClick={() => scrollToSection('hero')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#d8c2cb',
          fontSize: '0.68rem',
          fontWeight: '700',
          background: 'none',
          border: 'none',
          padding: '6px 4px',
          flex: '1 1 0px',
          cursor: 'pointer'
        }}
        aria-label="Navigate to Home"
      >
        <Home size={18} color="#c5a059" />
        <span>Home</span>
      </button>

      {/* Shop Collection Tab */}
      <button
        onClick={() => {
          if (setActiveCategory) setActiveCategory('all');
          scrollToSection('products');
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#d8c2cb',
          fontSize: '0.68rem',
          fontWeight: '700',
          background: 'none',
          border: 'none',
          padding: '6px 4px',
          flex: '1 1 0px',
          cursor: 'pointer'
        }}
        aria-label="Navigate to Products"
      >
        <Grid size={18} color="#c5a059" />
        <span>Shop</span>
      </button>

      {/* Bag / Cart Tab */}
      <button
        onClick={onOpenCart}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#fbeec8',
          fontSize: '0.68rem',
          fontWeight: '800',
          background: 'none',
          border: 'none',
          padding: '6px 4px',
          flex: '1 1 0px',
          cursor: 'pointer',
          position: 'relative'
        }}
        aria-label={`Open shopping bag with ${cartCount} items`}
      >
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={18} color="#c5a059" />
          {cartCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-8px',
                backgroundColor: 'var(--gold-primary)',
                color: '#180007',
                fontSize: '0.62rem',
                fontWeight: '900',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
        <span>Bag</span>
      </button>

      {/* WhatsApp Direct Help Tab */}
      <button
        onClick={handleWhatsAppClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#d8c2cb',
          fontSize: '0.68rem',
          fontWeight: '700',
          background: 'none',
          border: 'none',
          padding: '6px 4px',
          flex: '1 1 0px',
          cursor: 'pointer'
        }}
        aria-label="Contact WhatsApp Support"
      >
        <MessageCircle size={18} color="#25d366" />
        <span>Help</span>
      </button>

      {/* Secondary Menu Tab */}
      <button
        onClick={onOpenMobileDrawer}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#d8c2cb',
          fontSize: '0.68rem',
          fontWeight: '700',
          background: 'none',
          border: 'none',
          padding: '6px 4px',
          flex: '1 1 0px',
          cursor: 'pointer'
        }}
        aria-label="Open More Options Menu"
      >
        <Menu size={18} color="#c5a059" />
        <span>More</span>
      </button>
    </nav>
  );
}

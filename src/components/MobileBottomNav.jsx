import React from 'react';
import { Home, Grid, ShoppingBag, Sparkles, Menu, MessageCircle } from 'lucide-react';

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

  return (
    <div
      className="mobile-only-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1900,
        backgroundColor: '#140006',
        backgroundImage: 'linear-gradient(180deg, #26000c 0%, #140006 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.35)',
        padding: '6px 4px calc(8px + env(safe-area-inset-bottom)) 4px',
        boxShadow: '0 -8px 25px rgba(0, 0, 0, 0.45)',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Home Tab */}
      <a
        href="#hero"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#ebd390',
          fontSize: '0.66rem',
          fontWeight: '700',
          textDecoration: 'none',
          background: 'none',
          border: 'none',
          padding: '4px',
          flex: '1 1 0px',
          textAlign: 'center'
        }}
      >
        <Home size={18} color="#d4af37" />
        <span>Home</span>
      </a>

      {/* Collection Tab */}
      <a
        href="#products"
        onClick={() => setActiveCategory && setActiveCategory('all')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#ebd390',
          fontSize: '0.66rem',
          fontWeight: '700',
          textDecoration: 'none',
          background: 'none',
          border: 'none',
          padding: '4px',
          flex: '1 1 0px',
          textAlign: 'center'
        }}
      >
        <Grid size={18} color="#d4af37" />
        <span>Shop</span>
      </a>

      {/* Center Floating Cart Button */}
      <div style={{ flex: '1 1 0px', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={onOpenCart}
          style={{
            position: 'relative',
            top: '-12px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #bf953f 0%, #d4af37 100%)',
            color: '#140006',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(212, 175, 55, 0.55)',
            border: '3px solid #140006',
            padding: 0,
            cursor: 'pointer',
            flexShrink: 0
          }}
          aria-label="Open Shopping Cart"
        >
          <ShoppingBag size={22} color="#140006" />
          {cartCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-3px',
                right: '-3px',
                background: '#ffffff',
                color: '#3b0014',
                fontSize: '0.68rem',
                fontWeight: '900',
                width: '19px',
                height: '19px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #3b0014'
              }}
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Routine Tab */}
      <a
        href="#routine"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#ebd390',
          fontSize: '0.66rem',
          fontWeight: '700',
          textDecoration: 'none',
          background: 'none',
          border: 'none',
          padding: '4px',
          flex: '1 1 0px',
          textAlign: 'center'
        }}
      >
        <Sparkles size={18} color="#d4af37" />
        <span>Routine</span>
      </a>

      {/* App Drawer / Burger Menu Tab */}
      <button
        onClick={onOpenMobileDrawer}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#ebd390',
          fontSize: '0.66rem',
          fontWeight: '700',
          background: 'none',
          border: 'none',
          padding: '4px',
          flex: '1 1 0px',
          cursor: 'pointer',
          textAlign: 'center'
        }}
        aria-label="Open App Menu Drawer"
      >
        <Menu size={18} color="#d4af37" />
        <span>Menu</span>
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Check, Tag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  onProceedToCheckout,
  onDirectWhatsAppOrder
}) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 3000;
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingPercentage = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const finalTotal = subtotal - discountAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'GLOW10') {
      setDiscountPercent(10);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid code. Use GLOW10 for 10% off');
    }
  };

  return (
    <div className="drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="animate-slide-right"
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2100
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: 'var(--brand-burgundy)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(197, 160, 89, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ShoppingBag size={18} color="#c5a059" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>
                Your Shopping Bag
              </h3>
              <span style={{ fontSize: '0.74rem', color: '#d8c2cb' }}>
                {cart.reduce((a, b) => a + b.quantity, 0)} Items Selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              color: '#c5a059',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div
          style={{
            backgroundColor: 'var(--bg-page)',
            padding: '12px 1.5rem',
            borderBottom: '1px solid var(--border-card)'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '6px',
              fontSize: '0.8rem',
              fontWeight: '700',
              color: 'var(--text-main)'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Truck size={15} color="var(--gold-primary)" />
              {amountForFreeShipping > 0
                ? `Add Rs. ${amountForFreeShipping.toLocaleString()} more for FREE Express Delivery`
                : 'FREE Express Delivery Unlocked!'}
            </span>
            <span style={{ color: 'var(--gold-primary)', fontWeight: '800' }}>
              {Math.round(freeShippingPercentage)}%
            </span>
          </div>

          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'var(--border-subtle)',
              borderRadius: '9999px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${freeShippingPercentage}%`,
                height: '100%',
                backgroundColor: 'var(--gold-primary)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.25rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-page)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <ShoppingBag size={32} color="var(--gold-primary)" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '6px' }}>
                Your bag is empty
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Discover our signature dermatological formulas for glowing skin.
              </p>
              <button
                onClick={onClose}
                className="btn-gold-action"
                style={{
                  padding: '11px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem'
                }}
              >
                Explore Products
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-card)',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'assets/images/day-cream.jpg';
                    }}
                    style={{
                      width: '68px',
                      height: '68px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-page)',
                      flexShrink: 0
                    }}
                  />

                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <h5
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '800',
                        color: 'var(--text-main)',
                        marginBottom: '3px',
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {item.title}
                    </h5>

                    <span style={{ fontSize: '0.82rem', color: 'var(--gold-primary)', fontWeight: '800' }}>
                      Rs. {item.price.toLocaleString()}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid var(--border-card)',
                          borderRadius: 'var(--radius-xs)',
                          overflow: 'hidden',
                          height: '28px'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '26px',
                            height: '100%',
                            fontWeight: '800',
                            backgroundColor: 'var(--bg-page)',
                            border: 'none',
                            color: 'var(--text-main)',
                            cursor: 'pointer'
                          }}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span
                          style={{
                            padding: '0 8px',
                            fontSize: '0.82rem',
                            fontWeight: '800',
                            color: 'var(--text-main)'
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '26px',
                            height: '100%',
                            fontWeight: '800',
                            backgroundColor: 'var(--bg-page)',
                            border: 'none',
                            color: 'var(--text-main)',
                            cursor: 'pointer'
                          }}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: '900',
                        color: 'var(--brand-burgundy)',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        color: 'var(--text-muted)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px'
                      }}
                      title="Remove item"
                      aria-label="Remove item from bag"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout Actions */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: '#ffffff',
              borderTop: '1px solid var(--border-card)',
              boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
              <div
                style={{
                  position: 'relative',
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0 10px'
                }}
              >
                <Tag size={14} color="var(--text-muted)" style={{ marginRight: '6px' }} />
                <input
                  type="text"
                  placeholder="Promo Code (e.g. GLOW10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={couponApplied}
                  style={{
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: '0.84rem',
                    width: '100%',
                    textTransform: 'uppercase',
                    fontWeight: '600'
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={couponApplied}
                style={{
                  backgroundColor: couponApplied ? 'var(--color-success)' : 'var(--brand-burgundy)',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {couponApplied ? 'Applied' : 'Apply'}
              </button>
            </form>

            {couponError && (
              <p style={{ color: 'var(--color-error)', fontSize: '0.76rem', marginBottom: '8px', fontWeight: '600' }}>
                {couponError}
              </p>
            )}
            {couponApplied && (
              <p
                style={{
                  color: 'var(--color-success)',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Check size={14} /> 10% Discount Applied!
              </p>
            )}

            {/* Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: '700' }}>Rs. {subtotal.toLocaleString()}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-success)', fontWeight: '700' }}>
                  <span>Discount (10%)</span>
                  <span>- Rs. {discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Express Delivery</span>
                <span style={{ color: 'var(--color-success)', fontWeight: '700' }}>
                  {amountForFreeShipping === 0 ? 'FREE' : 'Rs. 150'}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.25rem',
                  fontWeight: '900',
                  color: 'var(--text-main)',
                  borderTop: '1px solid var(--border-card)',
                  paddingTop: '8px',
                  marginTop: '4px'
                }}
              >
                <span>Total</span>
                <span style={{ color: 'var(--brand-burgundy)' }}>
                  Rs. {(finalTotal + (amountForFreeShipping === 0 ? 0 : 150)).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout({ cart, subtotal, discountAmount, finalTotal });
                }}
                className="btn-primary-action"
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.98rem'
                }}
              >
                Proceed to Checkout <ArrowRight size={17} color="#c5a059" />
              </button>

              <button
                onClick={() => onDirectWhatsAppOrder({ cart, finalTotal })}
                className="btn-whatsapp-action"
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem'
                }}
              >
                Direct Order via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

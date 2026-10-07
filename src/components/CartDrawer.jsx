import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles, Truck, Check, Crown } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeFromCart, onProceedToCheckout, onDirectWhatsAppOrder }) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
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
      setCouponError('Invalid promo code. Use GLOW10 for 10% off!');
    }
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div
        className="animate-slide-left"
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '-15px 0 40px rgba(20, 0, 6, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2100
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '1.4rem 1.6rem',
          background: 'linear-gradient(135deg, #3b0014 0%, #140006 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShoppingBag size={20} color="#d4af37" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>
                Your Luxury Cart
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#ebd390' }}>
                {cart.reduce((a, b) => a + b.quantity, 0)} Items Selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              color: '#d4af37',
              background: 'rgba(255,255,255,0.1)',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div style={{
          backgroundColor: '#fdf2f5',
          padding: '14px 1.6rem',
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', fontSize: '0.82rem', fontWeight: '800', color: '#3b0014' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Truck size={16} color="#d4af37" />
              {amountForFreeShipping > 0 ? `Add Rs. ${amountForFreeShipping.toLocaleString()} more for FREE Express Delivery` : '🎉 FREE Express Shipping Unlocked!'}
            </span>
            <span style={{ color: '#d4af37' }}>{Math.round(freeShippingPercentage)}%</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#fae6ec',
            borderRadius: '9999px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${freeShippingPercentage}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #bf953f 0%, #d4af37 50%, #25d366 100%)',
              transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }} />
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.4rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#fdf2f5',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                color: '#3b0014',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                boxShadow: '0 8px 25px rgba(59, 0, 20, 0.1)'
              }}>
                <ShoppingBag size={36} color="#d4af37" />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e050c', marginBottom: '8px' }}>
                Your cart is currently empty
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#7e5260', marginBottom: '1.8rem', lineHeight: 1.5 }}>
                Explore our signature Glutathione skincare collection and treat your skin today.
              </p>
              <button
                onClick={onClose}
                className="btn-gold-foil"
                style={{
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem'
                }}
              >
                Explore Products
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '14px',
                    borderRadius: '18px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    boxShadow: '0 6px 16px rgba(59, 0, 20, 0.04)',
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
                      width: '70px',
                      height: '70px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      backgroundColor: '#fdf2f5'
                    }}
                  />

                  <div style={{ flexGrow: 1 }}>
                    <h5 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#1e050c', marginBottom: '4px', lineHeight: 1.3 }}>
                      {item.title}
                    </h5>
                    <span style={{ fontSize: '0.8rem', color: '#d4af37', fontWeight: '800' }}>
                      Rs. {item.price.toLocaleString()}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '8px',
                        overflow: 'hidden'
                      }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{ padding: '3px 10px', fontWeight: '800', background: '#fdf2f5', color: '#3b0014' }}
                        >
                          -
                        </button>
                        <span style={{ padding: '0 10px', fontSize: '0.85rem', fontWeight: '800' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{ padding: '3px 10px', fontWeight: '800', background: '#fdf2f5', color: '#3b0014' }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.98rem', fontWeight: '900', color: '#3b0014', display: 'block', marginBottom: '10px' }}>
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ color: '#7e5260', transition: 'color 0.2s ease' }}
                      title="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div style={{
            padding: '1.4rem 1.6rem',
            backgroundColor: '#ffffff',
            borderTop: '1px solid rgba(212, 175, 55, 0.25)',
            boxShadow: '0 -8px 25px rgba(0,0,0,0.04)'
          }}>
            {/* Promo Form */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
              <div style={{
                position: 'relative',
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                background: '#fdf2f5',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '0 12px'
              }}>
                <Tag size={15} color="#7e5260" style={{ marginRight: '6px' }} />
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
                    fontSize: '0.85rem',
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
                  background: couponApplied ? '#25d366' : 'linear-gradient(135deg, #3b0014 0%, #140006 100%)',
                  color: couponApplied ? '#ffffff' : '#fef08a',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontWeight: '800',
                  fontSize: '0.82rem',
                  border: 'none'
                }}
              >
                {couponApplied ? 'Applied' : 'Apply'}
              </button>
            </form>

            {couponError && (
              <p style={{ color: '#e53e3e', fontSize: '0.78rem', marginBottom: '8px', fontWeight: '600' }}>{couponError}</p>
            )}
            {couponApplied && (
              <p style={{ color: '#25d366', fontSize: '0.8rem', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={15} /> 10% Promo Discount Applied!
              </p>
            )}

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#7e5260' }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: '700' }}>Rs. {subtotal.toLocaleString()}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#25d366', fontWeight: '800' }}>
                  <span>Discount (10%)</span>
                  <span>- Rs. {discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#7e5260' }}>
                <span>Express Delivery</span>
                <span style={{ color: '#25d366', fontWeight: '800' }}>
                  {amountForFreeShipping === 0 ? 'FREE' : 'Rs. 150'}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.3rem',
                fontWeight: '900',
                color: '#1e050c',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                paddingTop: '10px',
                marginTop: '4px'
              }}>
                <span>Total Amount</span>
                <span style={{ color: '#3b0014' }}>
                  Rs. {(finalTotal + (amountForFreeShipping === 0 ? 0 : 150)).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout({ cart, subtotal, discountAmount, finalTotal });
                }}
                className="btn-royal-maroon"
                style={{
                  width: '100%',
                  padding: '15px',
                  borderRadius: '14px',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                Proceed to Checkout <ArrowRight size={18} color="#d4af37" />
              </button>

              <button
                onClick={() => onDirectWhatsAppOrder({ cart, finalTotal })}
                style={{
                  width: '100%',
                  background: '#25d366',
                  color: '#ffffff',
                  padding: '12px',
                  borderRadius: '14px',
                  fontWeight: '800',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 18px rgba(37, 211, 102, 0.3)'
                }}
              >
                <Sparkles size={16} /> Quick Order via WhatsApp
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

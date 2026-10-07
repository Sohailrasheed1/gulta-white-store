import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Check, Zap, Sparkles, Crown } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart, onBuyNow }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="luxury-glass-light animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '880px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          padding: '0',
          position: 'relative',
          boxShadow: '0 25px 70px rgba(20, 0, 6, 0.4)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Sheet Handle */}
        <div className="mobile-sheet-drag-handle" />

        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#fdf2f5',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            color: '#3b0014',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}>
          {/* Image */}
          <div style={{
            backgroundColor: '#fdf2f5',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderRight: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <img
              src={product.image}
              alt={product.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'assets/images/day-cream.jpg';
              }}
              style={{
                maxWidth: '100%',
                maxHeight: '380px',
                objectFit: 'contain',
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(59, 0, 20, 0.15)'
              }}
            />

            {product.badge && (
              <span style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'linear-gradient(135deg, #3b0014 0%, #140006 100%)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                color: '#fef08a',
                fontSize: '0.8rem',
                fontWeight: '800',
                padding: '6px 16px',
                borderRadius: '9999px'
              }}>
                ✨ {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '900', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
                  {product.volume} • Original Formula
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#3b0014', fontWeight: '800', fontSize: '0.9rem' }}>
                  <Star size={16} fill="#d4af37" color="#d4af37" />
                  <span>{product.rating}</span>
                  <span style={{ color: '#7e5260', fontWeight: '500' }}>({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: '800',
                color: '#1e050c',
                marginBottom: '10px',
                lineHeight: 1.25
              }}>
                {product.title}
              </h2>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.65rem', fontWeight: '900', color: '#3b0014' }}>
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span style={{ fontSize: '1.05rem', color: '#7e5260', textDecoration: 'line-through' }}>
                    Rs. {product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.92rem', color: '#4a1c29', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                {product.details}
              </p>

              {product.ingredients && (
                <div style={{
                  backgroundColor: '#fdf2f5',
                  borderRadius: '16px',
                  padding: '14px',
                  marginBottom: '1.2rem',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: '900', color: '#3b0014', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.5px' }}>
                    <Sparkles size={14} color="#d4af37" /> Key Active Ingredients
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {Array.isArray(product.ingredients) ? product.ingredients.map((ing, idx) => (
                      <li key={idx} style={{
                        background: '#ffffff',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '9999px',
                        padding: '3px 10px',
                        fontSize: '0.78rem',
                        color: '#3b0014',
                        fontWeight: '700'
                      }}>
                        {ing}
                      </li>
                    )) : (
                      <li style={{ fontSize: '0.82rem', color: '#4a1c29' }}>{product.ingredients}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions */}
            <div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#ffffff'
                }}>
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    style={{ padding: '10px 14px', fontWeight: '900', color: '#3b0014', background: '#fdf2f5' }}
                  >
                    -
                  </button>
                  <span style={{ padding: '0 14px', fontWeight: '800', fontSize: '0.95rem' }}>{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    style={{ padding: '10px 14px', fontWeight: '900', color: '#3b0014', background: '#fdf2f5' }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  style={{
                    flexGrow: 1,
                    background: added ? '#25d366' : 'linear-gradient(135deg, #3b0014 0%, #140006 100%)',
                    color: '#ffffff',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    padding: '14px',
                    borderRadius: '12px',
                    fontWeight: '800',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 6px 18px rgba(59, 0, 20, 0.25)'
                  }}
                >
                  {added ? <Check size={18} /> : <ShoppingBag size={18} color="#d4af37" />}
                  {added ? 'Added to Cart!' : `Add to Cart • Rs. ${(product.price * qty).toLocaleString()}`}
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBuyNow(product, qty);
                }}
                className="btn-gold-foil"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Zap size={16} /> Instant Checkout Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

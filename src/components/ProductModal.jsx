import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, Zap } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart, onBuyNow }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discountPercent = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="animate-slide-bottom"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          padding: 0,
          position: 'relative',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-card)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Sheet Handle */}
        <div className="mobile-sheet-drag-handle" />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-page)',
            border: '1px solid var(--border-card)',
            color: 'var(--brand-burgundy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.2s ease'
          }}
          aria-label="Close product details"
        >
          <X size={18} />
        </button>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}
        >
          {/* Left: Product Image */}
          <div
            style={{
              backgroundColor: '#fbf4f6',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              borderRight: '1px solid var(--border-card)'
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'assets/images/day-cream.jpg';
              }}
              style={{
                maxWidth: '100%',
                maxHeight: '360px',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)'
              }}
            />

            {product.badge && (
              <span
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18px',
                  backgroundColor: 'var(--brand-burgundy)',
                  color: '#fbeec8',
                  fontSize: '0.74rem',
                  fontWeight: '800',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-xs)'
                }}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Product Details */}
          <div
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Overline & Rating */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}
              >
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: '800',
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  {product.volume} • Original Formula
                </span>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--text-main)',
                    fontWeight: '700',
                    fontSize: '0.84rem'
                  }}
                >
                  <Star size={14} fill="#c5a059" color="#c5a059" />
                  <span>{product.rating}</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
                    ({product.reviewsCount} reviews)
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: '1.45rem',
                  fontWeight: '900',
                  color: 'var(--text-main)',
                  marginBottom: '10px',
                  lineHeight: 1.25
                }}
              >
                {product.title}
              </h2>

              {/* Pricing */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  marginBottom: '1.2rem'
                }}
              >
                <span
                  style={{
                    fontSize: '1.55rem',
                    fontWeight: '900',
                    color: 'var(--brand-burgundy)'
                  }}
                >
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                      textDecoration: 'line-through'
                    }}
                  >
                    Rs. {product.oldPrice.toLocaleString()}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: '800',
                      color: 'var(--brand-burgundy)',
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-xs)'
                    }}
                  >
                    Save {discountPercent}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.2rem'
                }}
              >
                {product.details}
              </p>

              {/* Active Ingredients */}
              {product.ingredients && (
                <div
                  style={{
                    backgroundColor: 'var(--bg-page)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 14px',
                    marginBottom: '1.4rem',
                    border: '1px solid var(--border-card)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: '800',
                      color: 'var(--text-main)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '6px'
                    }}
                  >
                    Key Active Ingredients
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {Array.isArray(product.ingredients) ? (
                      product.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid var(--border-card)',
                            borderRadius: '9999px',
                            padding: '3px 10px',
                            fontSize: '0.75rem',
                            color: 'var(--text-main)',
                            fontWeight: '600'
                          }}
                        >
                          {ing}
                        </span>
                      ))
                    ) : (
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        {product.ingredients}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Actions & Quantity */}
            <div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.8rem' }}>
                {/* Quantity Controls */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1.5px solid var(--border-card)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    height: '46px'
                  }}
                >
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    style={{
                      width: '40px',
                      height: '100%',
                      fontWeight: '800',
                      color: 'var(--text-main)',
                      backgroundColor: 'var(--bg-page)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span
                    style={{
                      padding: '0 14px',
                      fontWeight: '800',
                      fontSize: '0.92rem',
                      color: 'var(--text-main)'
                    }}
                  >
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    style={{
                      width: '40px',
                      height: '100%',
                      fontWeight: '800',
                      color: 'var(--text-main)',
                      backgroundColor: 'var(--bg-page)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAdd}
                  style={{
                    flexGrow: 1,
                    height: '46px',
                    backgroundColor: added ? 'var(--color-success)' : 'var(--brand-burgundy)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: '800',
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: added ? '0 2px 8px rgba(21, 128, 61, 0.3)' : 'var(--shadow-sm)'
                  }}
                >
                  {added ? <Check size={18} /> : <ShoppingBag size={18} color="#c5a059" />}
                  {added ? 'Added to Bag!' : `Add to Bag • Rs. ${(product.price * qty).toLocaleString()}`}
                </button>
              </div>

              {/* Instant Buy Now Button */}
              <button
                onClick={() => {
                  onClose();
                  onBuyNow(product, qty);
                }}
                className="btn-gold-action"
                style={{
                  width: '100%',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.92rem'
                }}
              >
                <Zap size={16} /> Instant Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

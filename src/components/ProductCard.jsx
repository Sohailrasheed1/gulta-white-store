import React, { useState } from 'react';
import { Star, ShoppingBag, Check, Zap } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView, onBuyNow }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleDirectBuy = (e) => {
    e.stopPropagation();
    onBuyNow(product);
  };

  const discountPercent = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <article
      className="product-card-surface"
      onClick={() => onQuickView(product)}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Product Image Frame */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '92%',
          backgroundColor: '#fbf4f6',
          overflow: 'hidden'
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'assets/images/day-cream.jpg';
          }}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 2
          }}
        >
          {product.badge && (
            <span
              style={{
                backgroundColor: 'var(--brand-burgundy)',
                color: '#fbeec8',
                fontSize: '0.7rem',
                fontWeight: '800',
                padding: '4px 10px',
                borderRadius: 'var(--radius-xs)',
                letterSpacing: '0.3px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
              }}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Discount Pill */}
        {discountPercent > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 2
            }}
          >
            <span
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--brand-burgundy)',
                border: '1px solid var(--border-card)',
                fontSize: '0.72rem',
                fontWeight: '800',
                padding: '4px 9px',
                borderRadius: 'var(--radius-xs)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
              }}
            >
              {discountPercent}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          {/* Metadata Row: Volume & Rating */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '6px'
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: '800',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.8px'
              }}
            >
              {product.volume}
            </span>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                fontSize: '0.8rem',
                fontWeight: '700',
                color: 'var(--text-main)'
              }}
            >
              <Star size={13} fill="#c5a059" color="#c5a059" />
              <span>{product.rating}</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
                ({product.reviewsCount})
              </span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: '800',
              color: 'var(--text-main)',
              marginBottom: '6px',
              lineHeight: 1.35
            }}
          >
            {product.title}
          </h3>

          {/* Concise Benefit Tagline */}
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.45,
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {product.tagline}
          </p>
        </div>

        <div>
          {/* Pricing Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px',
              marginBottom: '1rem'
            }}
          >
            <span
              style={{
                fontSize: '1.28rem',
                fontWeight: '900',
                color: 'var(--brand-burgundy)',
                letterSpacing: '-0.02em'
              }}
            >
              Rs. {product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'line-through'
                }}
              >
                Rs. {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Action Buttons: Clean 2-action or primary Add to Bag */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
            <button
              onClick={handleAdd}
              style={{
                backgroundColor: added ? 'var(--color-success)' : 'var(--brand-burgundy)',
                color: '#ffffff',
                border: 'none',
                padding: '11px 16px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: '700',
                fontSize: '0.88rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: added ? '0 2px 8px rgba(21, 128, 61, 0.3)' : 'var(--shadow-xs)'
              }}
              aria-label={`Add ${product.title} to bag`}
            >
              {added ? (
                <>
                  <Check size={16} /> Added!
                </>
              ) : (
                <>
                  <ShoppingBag size={15} color="#c5a059" /> Add to Bag
                </>
              )}
            </button>

            <button
              onClick={handleDirectBuy}
              className="btn-gold-action"
              style={{
                padding: '11px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.84rem'
              }}
              title="Instant Checkout"
              aria-label={`Instant buy ${product.title}`}
            >
              <Zap size={14} /> Buy
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

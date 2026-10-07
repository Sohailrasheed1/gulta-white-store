import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Zap, Check, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView, onBuyNow }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(59, 0, 20, 0.06)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.borderColor = '#d4af37';
        e.currentTarget.style.boxShadow = '0 20px 45px rgba(59, 0, 20, 0.16)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 0, 20, 0.06)';
      }}
    >
      {/* Product Image Frame */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '280px',
        backgroundColor: '#fdf2f5',
        overflow: 'hidden',
        cursor: 'pointer'
      }} onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'assets/images/day-cream.jpg';
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          {product.badge && (
            <span style={{
              background: 'linear-gradient(135deg, #3b0014 0%, #140006 100%)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: '#fef08a',
              fontSize: '0.72rem',
              fontWeight: '800',
              padding: '5px 14px',
              borderRadius: '9999px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
            }}>
              ✨ {product.badge}
            </span>
          )}
        </div>

        {/* Discount Pill */}
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #bf953f 0%, #d4af37 100%)',
            color: '#140006',
            fontSize: '0.75rem',
            fontWeight: '900',
            padding: '5px 12px',
            borderRadius: '9999px',
            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
          }}>
            SAVE {discountPercent}%
          </span>
        </div>

        {/* Quick View Floating Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '14px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            color: '#3b0014',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s ease'
          }}
          title="Quick View Details"
        >
          <Eye size={18} />
        </button>
      </div>

      {/* Card Content Body */}
      <div style={{
        padding: '1.4rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between'
      }}>
        <div>
          {/* Header Row: Volume & Rating */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {product.volume}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', fontWeight: '800', color: '#3b0014' }}>
              <Star size={14} fill="#d4af37" color="#d4af37" />
              <span>{product.rating}</span>
              <span style={{ color: '#7e5260', fontWeight: '500' }}>({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            fontWeight: '800',
            color: '#1e050c',
            marginBottom: '6px',
            lineHeight: 1.3,
            cursor: 'pointer'
          }} onClick={() => onQuickView(product)}>
            {product.title}
          </h3>

          {/* Tagline */}
          <p style={{
            fontSize: '0.85rem',
            color: '#7e5260',
            lineHeight: 1.5,
            marginBottom: '1.2rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {product.tagline}
          </p>
        </div>

        <div>
          {/* Price Tag */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#3b0014' }}>
              Rs. {product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span style={{ fontSize: '0.92rem', color: '#7e5260', textDecoration: 'line-through' }}>
                Rs. {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px' }}>
            <button
              onClick={handleAdd}
              style={{
                background: added ? '#25d366' : 'linear-gradient(135deg, #3b0014 0%, #140006 100%)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#ffffff',
                padding: '12px 18px',
                borderRadius: '14px',
                fontWeight: '700',
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: added ? '0 4px 14px rgba(37, 211, 102, 0.3)' : '0 6px 18px rgba(59, 0, 20, 0.25)'
              }}
            >
              {added ? (
                <>
                  <Check size={16} /> Added!
                </>
              ) : (
                <>
                  <ShoppingBag size={16} color="#d4af37" /> Add to Cart
                </>
              )}
            </button>

            <button
              onClick={() => onBuyNow(product)}
              className="btn-gold-foil"
              style={{
                padding: '12px 16px',
                borderRadius: '14px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
              title="Instant Checkout"
            >
              <Zap size={16} /> Buy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

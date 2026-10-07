import React from 'react';
import ProductCard from './ProductCard';
import { Layers, Crown } from 'lucide-react';

export default function ProductGrid({ products, activeCategory, setActiveCategory, onAddToCart, onQuickView, onBuyNow, searchFilter }) {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cream', name: 'Creams & Moisturizers' },
    { id: 'wash', name: 'Cleansers & Wash' },
    { id: 'sun', name: 'Sunscreen Shield' },
    { id: 'set', name: 'Bundles & Kits' }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          p.tagline.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          p.details.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="products"
      style={{
        padding: 'clamp(2.5rem, 5vw, 5rem) 0',
        backgroundColor: '#fcf8f9',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, #fdf2f5 0%, #fcf8f9 70%)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.2rem auto', padding: '0 0.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#d4af37',
              fontWeight: '800',
              fontSize: '0.74rem',
              textTransform: 'uppercase',
              letterSpacing: '1.8px',
              marginBottom: '6px'
            }}
          >
            <Crown size={15} /> Certified Skincare Science
          </div>
          
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
              fontWeight: '800',
              color: '#1e050c',
              marginBottom: '0.6rem',
              lineHeight: 1.25,
              wordBreak: 'break-word'
            }}
          >
            Signature <span className="gold-shimmer-text">Gulta White™</span> Range
          </h2>
          
          <p style={{ fontSize: '0.88rem', color: '#7e5260', lineHeight: 1.55 }}>
            Formulated specifically for Pakistani climate & skin types. Enriched with medical-grade L-Glutathione, Niacinamide & Vitamin C.
          </p>
        </div>

        {/* Scrollable Category Filter Pills for Mobile */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '8px',
            marginBottom: '2rem',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: '800',
                  border: isActive ? 'none' : '1px solid rgba(212, 175, 55, 0.3)',
                  background: isActive ? 'linear-gradient(135deg, #3b0014 0%, #140006 100%)' : '#ffffff',
                  color: isActive ? '#fef08a' : '#4a1c29',
                  boxShadow: isActive ? '0 6px 18px rgba(59, 0, 20, 0.25)' : '0 2px 6px rgba(0,0,0,0.02)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  cursor: 'pointer'
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        {filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '2.5rem 1rem',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <Layers size={44} color="#7e5260" style={{ marginBottom: '0.8rem' }} />
            <h3 style={{ fontSize: '1.15rem', color: '#3b0014', marginBottom: '4px' }}>No products matching your query</h3>
            <p style={{ color: '#7e5260', fontSize: '0.85rem' }}>Try searching another term or reset the category.</p>
            <button
              onClick={() => { setActiveCategory('all'); }}
              className="btn-royal-maroon"
              style={{
                marginTop: '1rem',
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className="responsive-grid-products"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onBuyNow={onBuyNow}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

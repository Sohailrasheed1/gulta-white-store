import React from 'react';
import ProductCard from './ProductCard';
import { Layers } from 'lucide-react';

export default function ProductGrid({
  products,
  activeCategory,
  setActiveCategory,
  onAddToCart,
  onQuickView,
  onBuyNow,
  searchFilter
}) {
  const categories = [
    { id: 'all', name: 'All Formulas' },
    { id: 'cream', name: 'Creams & Moisturizers' },
    { id: 'wash', name: 'Cleansers' },
    { id: 'sun', name: 'Sunscreen Protection' },
    { id: 'set', name: 'Bundles & Complete Sets' }
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const query = (searchFilter || '').toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.details.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="products"
      style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        backgroundColor: 'var(--bg-page)',
        borderBottom: '1px solid var(--border-card)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem auto', padding: '0 0.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              color: 'var(--gold-primary)',
              fontWeight: '800',
              fontSize: '0.74rem',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '6px'
            }}
          >
            Clinical Formulations
          </span>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)',
              fontWeight: '900',
              color: 'var(--text-main)',
              marginBottom: '0.6rem',
              lineHeight: 1.25
            }}
          >
            Signature Skincare Collection
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            Medical-grade L-Glutathione, Vitamin C & Niacinamide formulas crafted specifically for radiant, even-toned skin.
          </p>
        </div>

        {/* Category Filter Pills (Horizontal Scrollable on Mobile) */}
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
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: '700',
                  border: isActive ? '1px solid var(--brand-burgundy)' : '1px solid var(--border-card)',
                  backgroundColor: isActive ? 'var(--brand-burgundy)' : '#ffffff',
                  color: isActive ? '#fbeec8' : 'var(--text-main)',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-card)'
            }}
          >
            <Layers size={40} color="var(--text-muted)" style={{ marginBottom: '0.8rem' }} />
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '4px' }}>
              No formulas matching your search
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
              Try searching a different ingredient or reset the category filter.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-primary-action"
              style={{
                marginTop: '1.2rem',
                padding: '9px 20px',
                borderRadius: '9999px',
                fontSize: '0.84rem'
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Products Grid */
          <div
            className="responsive-grid-products"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
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

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Star, Crown, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection({ onShopClick, onQuickBuyKit }) {
  const slides = [
    {
      img: 'assets/images/gulta_hero_banner_1790882624087.jpg',
      badge: 'FLAT 25% OFF • Complete Regimen',
      title: 'Complete 4-Step Radiance Kit',
      subtitle: 'Face Wash + Day Cream + Night Cream + Sunscreen'
    },
    {
      img: 'assets/images/complete-set.jpg',
      badge: 'Certified Glutathione Formula',
      title: 'Glass Skin Radiance',
      subtitle: 'Visible glow & dark spot removal within 14 days'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      background: 'radial-gradient(ellipse at 70% 30%, #3b0014 0%, #26000c 55%, #140006 100%)',
      color: '#ffffff',
      padding: 'clamp(1.5rem, 4vw, 4rem) 0',
      overflow: 'hidden',
      borderBottom: '2px solid rgba(212, 175, 55, 0.3)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, boxSizing: 'border-box' }}>
        <div className="responsive-grid-2col" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(1.2rem, 3vw, 3rem)',
          alignItems: 'center'
        }}>

          {/* Left Column Text Content */}
          <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
            
            {/* Rating Pill Bar (Strict 100% Width Fit) */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              padding: '4px 10px',
              borderRadius: '9999px',
              marginBottom: '1rem',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}>
              <Crown size={13} color="#d4af37" style={{ flexShrink: 0 }} />
              <div style={{ display: 'flex', color: '#d4af37', gap: '1px', flexShrink: 0 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#d4af37" color="#d4af37" />
                ))}
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#fef08a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                4.9/5 (2,500+ Verified Reviews)
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 5.5vw, 3.6rem)',
              fontWeight: '800',
              lineHeight: 1.18,
              marginBottom: '0.85rem',
              color: '#ffffff',
              letterSpacing: '-0.5px',
              wordBreak: 'break-word'
            }}>
              Unveil Your Natural <br />
              <span className="gold-shimmer-text" style={{ fontStyle: 'italic', fontWeight: '800' }}>
                Radiant Glass Skin
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-subtext" style={{
              fontSize: 'clamp(0.85rem, 3.2vw, 1.05rem)',
              color: '#ebd390',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              maxWidth: '540px',
              opacity: 0.95,
              wordBreak: 'break-word'
            }}>
              Formulated with medical-grade <strong>Pure L-Glutathione, Niacinamide 5% & Vitamin C</strong>. Diminish dark spots & hyperpigmentation safely.
            </p>

            {/* Buttons Container */}
            <div className="hero-action-buttons" style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '1.8rem',
              width: '100%'
            }}>
              <button
                onClick={onShopClick}
                className="btn-gold-foil"
                style={{
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxSizing: 'border-box'
                }}
              >
                Shop Collection <ArrowRight size={16} />
              </button>

              <button
                onClick={onQuickBuyKit}
                className="btn-royal-maroon"
                style={{
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxSizing: 'border-box'
                }}
              >
                <Sparkles size={15} color="#d4af37" /> Buy Kit (Save 25%)
              </button>
            </div>

            {/* Trust Bullets Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
              gap: '8px',
              borderTop: '1px solid rgba(212, 175, 55, 0.2)',
              paddingTop: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#ffffff', fontWeight: '700' }}>
                <CheckCircle2 size={13} color="#d4af37" style={{ flexShrink: 0 }} /> Free Delivery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#ffffff', fontWeight: '700' }}>
                <CheckCircle2 size={13} color="#d4af37" style={{ flexShrink: 0 }} /> COD / EasyPaisa
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#ffffff', fontWeight: '700' }}>
                <CheckCircle2 size={13} color="#d4af37" style={{ flexShrink: 0 }} /> 100% Organic
              </div>
            </div>

          </div>

          {/* Right Column Showcase Slider */}
          <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden' }}>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              padding: '6px',
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.6) 0%, rgba(86, 0, 29, 0.4) 100%)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#140006'
              }}>
                <img
                  src={slides[currentSlide].img}
                  alt={slides[currentSlide].title}
                  className="responsive-hero-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'assets/images/day-cream.jpg';
                  }}
                  style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(20, 0, 6, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  color: '#d4af37',
                  fontSize: '0.68rem',
                  fontWeight: '800'
                }}>
                  ✨ {slides[currentSlide].badge}
                </div>

                {/* Bottom Title Bar */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  insetX: '0',
                  background: 'linear-gradient(to top, rgba(20, 0, 6, 0.95) 0%, transparent 100%)',
                  padding: '12px',
                  color: '#ffffff'
                }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: '800', color: '#ffffff', marginBottom: '2px' }}>
                    {slides[currentSlide].title}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: '#ebd390' }}>
                    {slides[currentSlide].subtitle}
                  </p>
                </div>

                {/* Slider Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '6px',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(20, 0, 6, 0.7)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: '#d4af37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '6px',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(20, 0, 6, 0.7)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: '#d4af37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ChevronRight size={18} />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

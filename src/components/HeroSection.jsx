import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export default function HeroSection({ onShopClick, onQuickBuyKit }) {
  const slides = [
    {
      img: 'assets/images/gulta_hero_banner_1790882624087.jpg',
      badge: 'Signature Regimen',
      title: 'Complete 4-Step Radiance Kit',
      subtitle: 'Face Wash + Day Cream + Night Cream + Matte Sunscreen'
    },
    {
      img: 'assets/images/complete-set.jpg',
      badge: 'Medical-Grade Actives',
      title: 'Pure L-Glutathione Formula',
      subtitle: 'Visible radiance & dark spot reduction within 14 days'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        backgroundColor: '#23010b',
        backgroundImage: 'radial-gradient(circle at 75% 25%, #380113 0%, #23010b 70%)',
        color: '#ffffff',
        padding: 'clamp(2rem, 5vw, 4.5rem) 0',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(197, 160, 89, 0.25)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="responsive-grid-2col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(1.5rem, 4vw, 3.5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column Content */}
          <div>
            {/* Top Quality Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                padding: '5px 12px',
                borderRadius: '9999px',
                marginBottom: '1.2rem'
              }}
            >
              <div style={{ display: 'flex', color: '#c5a059', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#c5a059" color="#c5a059" />
                ))}
              </div>
              <span style={{ fontSize: '0.74rem', fontWeight: '700', color: '#fbeec8' }}>
                4.9 / 5.0 Rating • 2,500+ Verified Buyers
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="hero-headline"
              style={{
                fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
                fontWeight: '900',
                lineHeight: 1.15,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.03em'
              }}
            >
              Clinical Radiance. <br />
              <span style={{ color: '#c5a059' }}>
                Dermatological Skincare.
              </span>
            </h1>

            {/* Value Subtitle */}
            <p
              style={{
                fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
                color: '#e4d3db',
                lineHeight: 1.6,
                marginBottom: '1.8rem',
                maxWidth: '520px'
              }}
            >
              Enriched with medical-grade <strong>Pure L-Glutathione, 5% Niacinamide & Vitamin C</strong>. Engineered specifically to tackle hyperpigmentation, sun damage, and uneven tone in Pakistani climate.
            </p>

            {/* Direct CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '2rem'
              }}
            >
              <button
                onClick={onShopClick}
                className="btn-gold-action"
                style={{
                  padding: '13px 26px',
                  borderRadius: '9999px',
                  fontSize: '0.94rem'
                }}
              >
                Shop Collection <ArrowRight size={17} />
              </button>

              <button
                onClick={onQuickBuyKit}
                className="btn-primary-action"
                style={{
                  padding: '13px 22px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem'
                }}
              >
                Buy Complete Radiance Kit
              </button>
            </div>

            {/* Genuine Trust Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '10px',
                borderTop: '1px solid rgba(197, 160, 89, 0.2)',
                paddingTop: '1.2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#ffffff', fontWeight: '600' }}>
                <CheckCircle2 size={15} color="#c5a059" style={{ flexShrink: 0 }} /> Free Delivery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#ffffff', fontWeight: '600' }}>
                <CheckCircle2 size={15} color="#c5a059" style={{ flexShrink: 0 }} /> Cash on Delivery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#ffffff', fontWeight: '600' }}>
                <ShieldCheck size={15} color="#c5a059" style={{ flexShrink: 0 }} /> Steroid-Free Formula
              </div>
            </div>
          </div>

          {/* Right Column Showcase Slider */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '18px',
                padding: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  backgroundColor: '#180007'
                }}
              >
                <img
                  src={slides[currentSlide].img}
                  alt={slides[currentSlide].title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'assets/images/day-cream.jpg';
                  }}
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(24, 0, 7, 0.85)',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    color: '#c5a059',
                    fontSize: '0.72rem',
                    fontWeight: '800'
                  }}
                >
                  {slides[currentSlide].badge}
                </div>

                {/* Bottom Title Bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    insetX: 0,
                    background: 'linear-gradient(to top, rgba(24, 0, 7, 0.95) 0%, rgba(24, 0, 7, 0.6) 60%, transparent 100%)',
                    padding: '16px',
                    color: '#ffffff'
                  }}
                >
                  <h3 style={{ fontSize: '1.12rem', fontWeight: '800', color: '#ffffff', marginBottom: '2px' }}>
                    {slides[currentSlide].title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#d8c2cb' }}>
                    {slides[currentSlide].subtitle}
                  </p>
                </div>

                {/* Slider Navigation Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '8px',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(24, 0, 7, 0.75)',
                    border: '1px solid rgba(197, 160, 89, 0.35)',
                    color: '#c5a059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '8px',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(24, 0, 7, 0.75)',
                    border: '1px solid rgba(197, 160, 89, 0.35)',
                    color: '#c5a059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  aria-label="Next Slide"
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

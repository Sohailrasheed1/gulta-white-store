import React from 'react';
import { Star, CheckCircle2, Crown, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Sobia Tariq',
      city: 'Lahore',
      rating: 5,
      date: '2 days ago',
      title: 'Remarkable glow within 10 days!',
      text: 'Main Gulta White 4-step kit use kar rahi hun. Dark spots visible fade ho chuke hain aur skin boht soft & hydrated mehsoos hoti hai. Delivery and packing was super fast!'
    },
    {
      name: 'Fatima Zubair',
      city: 'Karachi',
      rating: 5,
      date: '1 week ago',
      title: 'Best Glutathione formula in Pakistan',
      text: 'Non-greasy cream hai, particularly iska sunscreen amazing hai zero white cast k sath. EasyPaisa se payment ki thi 2 din mein parcel mil gaya.'
    },
    {
      name: 'Hina Maryam',
      city: 'Islamabad',
      rating: 5,
      date: '2 weeks ago',
      title: 'Original product 100% recommended',
      text: 'Face wash aur Night cream combination is outstanding. Fine lines aur dullness boht had tak kam ho gayi hai. Guaranteed original result.'
    }
  ];

  return (
    <section
      id="reviews"
      style={{
        padding: 'clamp(2.5rem, 5vw, 5rem) 0',
        backgroundColor: '#ffffff',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.2rem auto', padding: '0 0.5rem' }}>
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: '800',
              color: '#d4af37',
              textTransform: 'uppercase',
              letterSpacing: '1.8px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '6px'
            }}
          >
            <Crown size={15} /> Verified Customer Stories
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
              fontWeight: '800',
              color: '#1e050c',
              lineHeight: 1.25,
              wordBreak: 'break-word'
            }}
          >
            Loved By 2,500+ <span className="gold-shimmer-text">Pakistani Women</span>
          </h2>
          <p style={{ fontSize: '0.86rem', color: '#7e5260', marginTop: '6px' }}>
            Real experiences from authentic buyers across Lahore, Karachi & Islamabad.
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem'
          }}
        >
          {reviews.map((rev, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fdf2f5',
                borderRadius: '20px',
                padding: '1.4rem 1.25rem',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 25px rgba(59, 0, 20, 0.04)',
                boxSizing: 'border-box'
              }}
            >
              <div>
                {/* Stars Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '3px', color: '#d4af37' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#d4af37" color="#d4af37" />
                    ))}
                  </div>
                  <Quote size={18} color="#d4af37" style={{ opacity: 0.6 }} />
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    fontWeight: '800',
                    color: '#1e050c',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}
                >
                  "{rev.title}"
                </h4>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#4a1c29',
                    lineHeight: 1.6,
                    marginBottom: '1.4rem',
                    fontStyle: 'italic'
                  }}
                >
                  {rev.text}
                </p>
              </div>

              {/* Reviewer Details */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                  paddingTop: '1rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.9rem', fontWeight: '900', color: '#3b0014', display: 'block' }}>
                    {rev.name}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: '#7e5260' }}>
                    {rev.city} • {rev.date}
                  </span>
                </div>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    color: '#25d366',
                    fontWeight: '800',
                    backgroundColor: 'rgba(37, 211, 102, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '9999px'
                  }}
                >
                  <CheckCircle2 size={13} /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

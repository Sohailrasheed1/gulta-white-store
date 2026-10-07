import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Sobia Tariq',
      city: 'Lahore',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Visible results within 10 days',
      text: 'Gulta White 4-step kit use kar rahi hun. Dark spots boht had tak fade ho chuke hain aur skin hydrated rehti hai. Delivery packaging was very neat and reached in 2 days.'
    },
    {
      name: 'Fatima Zubair',
      city: 'Karachi',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Best Glutathione formula in Pakistan',
      text: 'Non-greasy cream hai, particularly iska sunscreen amazing hai zero white cast k sath. EasyPaisa se order place kiya tha, smooth experience.'
    },
    {
      name: 'Hina Maryam',
      city: 'Islamabad',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Original and authentic product',
      text: 'Face wash aur Night cream combination is outstanding. Fine lines aur dullness significantly improve hui hai. 100% recommended for sensitive skin.'
    }
  ];

  return (
    <section
      id="reviews"
      style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        backgroundColor: 'var(--bg-page)',
        borderBottom: '1px solid var(--border-card)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.2rem auto', padding: '0 0.5rem' }}>
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: '800',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              display: 'inline-block',
              marginBottom: '6px'
            }}
          >
            Verified Customer Feedback
          </span>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)',
              fontWeight: '900',
              color: 'var(--text-main)',
              lineHeight: 1.25,
              marginBottom: '8px'
            }}
          >
            Real Results from Real Buyers
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Authentic experiences from verified customers across Pakistan.
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
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                border: '1px solid var(--border-card)',
                boxShadow: 'var(--shadow-xs)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Rating & Quote */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '3px', color: 'var(--gold-primary)' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#c5a059" color="#c5a059" />
                    ))}
                  </div>
                  <Quote size={18} color="var(--gold-primary)" style={{ opacity: 0.5 }} />
                </div>

                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    color: 'var(--text-main)',
                    marginBottom: '8px',
                    lineHeight: 1.35
                  }}
                >
                  "{rev.title}"
                </h4>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.4rem'
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
                  borderTop: '1px solid var(--border-card)',
                  paddingTop: '1rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--text-main)', display: 'block' }}>
                    {rev.name}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {rev.city}
                  </span>
                </div>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    color: 'var(--color-success)',
                    fontWeight: '700',
                    backgroundColor: 'var(--color-success-bg)',
                    padding: '3px 8px',
                    borderRadius: '9999px'
                  }}
                >
                  <CheckCircle2 size={12} /> {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

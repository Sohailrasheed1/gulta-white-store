import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Are Gulta White™ products 100% original & safe for all skin types?',
      a: 'Yes, 100%! Gulta White formulas are dermatologically tested and enriched with pure medical-grade L-Glutathione, Niacinamide, and organic botanical extracts. They are free from harmful chemicals, mercury, or steroids.'
    },
    {
      q: 'How long does delivery take across Pakistan?',
      a: 'Orders are dispatched within 24 hours via trusted couriers (TCS, Leopard, M&P). Standard delivery takes 2 to 4 working days. Express shipping is completely FREE on all orders nationwide!'
    },
    {
      q: 'What payment options can I use?',
      a: 'We accept Cash on Delivery (COD) at your doorstep, EasyPaisa Mobile Account, JazzCash Transfer, and direct Bank Transfers (Meezan Bank, HBL, etc.).'
    },
    {
      q: 'Can I place my order directly on WhatsApp?',
      a: 'Absolutely! Click any "Order via WhatsApp" button, and your cart items with order details will automatically load into WhatsApp for instant 1-tap confirmation.'
    }
  ];

  return (
    <section
      id="faq"
      style={{
        padding: 'clamp(2.5rem, 5vw, 5rem) 0',
        backgroundColor: '#fdf2f5',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.2rem', padding: '0 0.5rem' }}>
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
            <HelpCircle size={15} /> Support Center
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
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '0.86rem', color: '#7e5260', marginTop: '6px' }}>
            Quick answers to your shipping, payment, and product queries.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: isOpen ? '1.5px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.25)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 8px 25px rgba(59, 0, 20, 0.06)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: 'clamp(1rem, 2.5vw, 1.3rem) clamp(1rem, 3vw, 1.6rem)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'left',
                    fontSize: 'clamp(0.9rem, 2vw, 1.02rem)',
                    fontWeight: '800',
                    color: '#3b0014',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ lineHeight: 1.35 }}>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    color="#d4af37"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 clamp(1rem, 3vw, 1.6rem) clamp(1rem, 2.5vw, 1.3rem) clamp(1rem, 3vw, 1.6rem)',
                      fontSize: '0.88rem',
                      color: '#7e5260',
                      lineHeight: 1.65,
                      borderTop: '1px solid #fdf2f5'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

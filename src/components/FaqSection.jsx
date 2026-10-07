import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Are Gulta White™ formulas 100% steroid-free and safe for daily use?',
      a: 'Yes, 100%. Gulta White formulas are dermatologically tested and strictly free from harmful bleaches, mercury, and steroids. They are formulated with medical-grade Pure L-Glutathione, Niacinamide, Vitamin C, and soothing botanicals.'
    },
    {
      q: 'How long does delivery take across Pakistan?',
      a: 'All orders are dispatched within 24 hours via reliable express couriers (TCS, Leopard, Trax). Delivery typically takes 2 to 4 working days. Express shipping is completely FREE on all orders nationwide.'
    },
    {
      q: 'What payment options can I use?',
      a: 'We accept Cash on Delivery (COD) at your doorstep, EasyPaisa Mobile Account, JazzCash Transfer, and direct Bank Transfers (Meezan Bank, HBL, etc.).'
    },
    {
      q: 'Can I place my order directly via WhatsApp?',
      a: 'Yes! Simply click "Direct Order via WhatsApp" in the cart or product page, and your complete order with item details will load into WhatsApp for instant 1-tap confirmation.'
    }
  ];

  return (
    <section
      id="faq"
      style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-card)'
      }}
    >
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '0 0.5rem' }}>
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
            Help & Information
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
            Frequently Asked Questions
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Transparent details regarding delivery, authenticity, and ordering.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-page)',
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1px solid var(--gold-primary)' : '1px solid var(--border-card)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'left',
                    fontSize: 'clamp(0.92rem, 2vw, 1rem)',
                    fontWeight: '800',
                    color: 'var(--text-main)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ lineHeight: 1.35 }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    color="var(--gold-primary)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 clamp(1rem, 3vw, 1.5rem) clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-card)'
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

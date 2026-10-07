import React, { useState } from 'react';
import { X, CheckCircle2, Truck, ShieldCheck, ArrowRight, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PAYMENT_METHODS } from '../data/paymentMethods';
import { EasyPaisaLogo, JazzCashLogo, MeezanBankLogo, CodLogo } from './PaymentLogos';

export default function CheckoutModal({ isOpen, onClose, cartData, targetWhatsApp }) {
  const [step, setStep] = useState('checkout');
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const [copiedId, setCopiedId] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    transactionId: ''
  });

  const [orderSummary, setOrderSummary] = useState(null);

  if (!isOpen) return null;

  const { cart = [], finalTotal = 0 } = cartData || {};

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim() || !formData.city.trim()) {
      alert('Please fill in your name, phone number, address, and city.');
      return;
    }

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const newOrderId = 'GW-' + Math.floor(100000 + Math.random() * 900000);
    const summary = {
      orderId: newOrderId,
      items: cart,
      total: finalTotal,
      paymentMethod: selectedPayment,
      customer: formData
    };

    setOrderSummary(summary);
    setStep('success');
  };

  const formatWhatsAppText = () => {
    if (!orderSummary) return '';
    const itemsList = orderSummary.items
      .map((item) => `• ${item.title} (x${item.quantity}) - Rs. ${(item.price * item.quantity).toLocaleString()}`)
      .join('\n');
    const payMethodName =
      PAYMENT_METHODS.find((p) => p.id === orderSummary.paymentMethod)?.name || orderSummary.paymentMethod;

    return (
      `🛍️ *NEW ORDER - GULTA WHITE™ LUXURY STORE*\n` +
      `--------------------------------\n` +
      `📌 *Order ID*: ${orderSummary.orderId}\n` +
      `👤 *Name*: ${orderSummary.customer.fullName}\n` +
      `📞 *Phone*: ${orderSummary.customer.phone}\n` +
      `📍 *Address*: ${orderSummary.customer.address}, ${orderSummary.customer.city}\n\n` +
      `📦 *Items Ordered*:\n${itemsList}\n\n` +
      `💳 *Payment Method*: ${payMethodName}\n` +
      (orderSummary.customer.transactionId ? `🔢 *Transaction ID*: ${orderSummary.customer.transactionId}\n` : '') +
      `--------------------------------\n` +
      `💰 *TOTAL AMOUNT*: Rs. ${orderSummary.total.toLocaleString()}\n` +
      `🚚 *Delivery*: Free Express Shipping Nationwide`
    );
  };

  const handleDispatchWhatsApp = () => {
    const text = formatWhatsAppText();
    const cleanNumber = (targetWhatsApp || '923001234567').replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="animate-slide-bottom"
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          padding: 0,
          position: 'relative',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-card)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Sheet Handle */}
        <div className="mobile-sheet-drag-handle" />

        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            backgroundColor: 'var(--brand-burgundy)',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(197, 160, 89, 0.25)'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>
              {step === 'checkout' ? 'Complete Your Order' : 'Order Confirmed!'}
            </h3>
            <span style={{ fontSize: '0.78rem', color: '#d8c2cb' }}>
              {step === 'checkout' ? '256-Bit SSL Encrypted Secure Checkout' : 'Thank you for choosing Gulta White™'}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              color: '#c5a059',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label="Close checkout"
          >
            <X size={18} />
          </button>
        </div>

        {step === 'checkout' ? (
          <form onSubmit={handlePlaceOrder} style={{ padding: '1.5rem 1.75rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {/* Left Column: Shipping Form */}
              <div>
                <h4
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: '800',
                    color: 'var(--text-main)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Truck size={18} color="var(--gold-primary)" /> Shipping Address
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <label
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Ayesha Khan"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 13px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        backgroundColor: 'var(--bg-page)',
                        fontWeight: '500'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 0300 1234567"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 13px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        backgroundColor: 'var(--bg-page)',
                        fontWeight: '500'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      Complete Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="House / Flat / Street, Area or Sector"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 13px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        backgroundColor: 'var(--bg-page)',
                        fontWeight: '500'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Lahore, Karachi, Rawalpindi"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 13px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        backgroundColor: 'var(--bg-page)',
                        fontWeight: '500'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Payment Method */}
              <div>
                <h4
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: '800',
                    color: 'var(--text-main)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <ShieldCheck size={18} color="var(--gold-primary)" /> Payment Method
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.2rem' }}>
                  {PAYMENT_METHODS.map((method) => {
                    const isSelected = selectedPayment === method.id;
                    return (
                      <div
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-md)',
                          border: isSelected ? '2px solid var(--brand-burgundy)' : '1px solid var(--border-card)',
                          backgroundColor: isSelected ? 'var(--bg-page)' : '#ffffff',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              border: isSelected ? '5px solid var(--brand-burgundy)' : '2px solid var(--border-subtle)',
                              backgroundColor: '#ffffff'
                            }}
                          />
                          <div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-main)', display: 'block' }}>
                              {method.name}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {method.description}
                            </span>
                          </div>
                        </div>

                        <div style={{ flexShrink: 0 }}>
                          {method.id === 'cod' && <CodLogo height={26} />}
                          {method.id === 'easypaisa' && <EasyPaisaLogo height={26} />}
                          {method.id === 'jazzcash' && <JazzCashLogo height={26} />}
                          {method.id === 'bank' && <MeezanBankLogo height={26} />}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Online Account Guidance Box */}
                {selectedPayment !== 'cod' && (
                  <div
                    style={{
                      backgroundColor: 'var(--bg-page)',
                      border: '1px dashed var(--gold-primary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '14px',
                      marginBottom: '1.2rem'
                    }}
                  >
                    <h5 style={{ fontSize: '0.84rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '6px' }}>
                      Official Transfer Account Details:
                    </h5>

                    {selectedPayment === 'easypaisa' && (
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                        <p><strong>Title:</strong> Gulta White Official</p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong>EasyPaisa Number:</strong> 0300 1234567
                          <button
                            type="button"
                            onClick={() => handleCopy('03001234567', 'ep')}
                            style={{
                              color: 'var(--brand-burgundy)',
                              fontSize: '0.74rem',
                              fontWeight: '800',
                              border: 'none',
                              background: 'none',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '3px'
                            }}
                          >
                            {copiedId === 'ep' ? <Check size={12} color="#15803d" /> : <Copy size={12} />} Copy
                          </button>
                        </p>
                      </div>
                    )}

                    {selectedPayment === 'jazzcash' && (
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                        <p><strong>Title:</strong> Gulta White Official</p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong>JazzCash Number:</strong> 0300 1234567
                          <button
                            type="button"
                            onClick={() => handleCopy('03001234567', 'jc')}
                            style={{
                              color: 'var(--brand-burgundy)',
                              fontSize: '0.74rem',
                              fontWeight: '800',
                              border: 'none',
                              background: 'none',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '3px'
                            }}
                          >
                            {copiedId === 'jc' ? <Check size={12} color="#15803d" /> : <Copy size={12} />} Copy
                          </button>
                        </p>
                      </div>
                    )}

                    {selectedPayment === 'bank' && (
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                        <p><strong>Bank:</strong> Meezan Bank Limited</p>
                        <p><strong>Account Title:</strong> Gulta White Skincare</p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong>IBAN:</strong> PK36 MEZN 0001 0203 0405 0607
                          <button
                            type="button"
                            onClick={() => handleCopy('PK36 MEZN 0001 0203 0405 0607', 'bank')}
                            style={{
                              color: 'var(--brand-burgundy)',
                              fontSize: '0.74rem',
                              fontWeight: '800',
                              border: 'none',
                              background: 'none',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '3px'
                            }}
                          >
                            {copiedId === 'bank' ? <Check size={12} color="#15803d" /> : <Copy size={12} />} Copy
                          </button>
                        </p>
                      </div>
                    )}

                    <div style={{ marginTop: '10px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-main)', display: 'block', marginBottom: '3px' }}>
                        Transaction TID / Ref (Optional):
                      </label>
                      <input
                        type="text"
                        name="transactionId"
                        placeholder="e.g. 9847192847"
                        value={formData.transactionId}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '7px 10px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-subtle)',
                          fontSize: '0.84rem',
                          outline: 'none',
                          backgroundColor: '#ffffff'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Payable Summary */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-page)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px',
                    border: '1px solid var(--border-card)',
                    marginBottom: '1.2rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: '900', color: 'var(--text-main)' }}>
                    <span>Amount Payable:</span>
                    <span style={{ color: 'var(--brand-burgundy)' }}>Rs. {finalTotal.toLocaleString()}</span>
                  </div>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>
                    Includes Free Express Shipping Nationwide
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-primary-action"
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem'
                  }}
                >
                  Confirm & Place Order <ArrowRight size={18} color="#c5a059" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Confirmation Success Screen */
          <div style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success-bg)',
                border: '2px solid var(--color-success)',
                color: 'var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={44} />
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '8px' }}>
              Thank You, {orderSummary?.customer.fullName}!
            </h3>

            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem auto', lineHeight: 1.55 }}>
              Your order <strong style={{ color: 'var(--brand-burgundy)' }}>#{orderSummary?.orderId}</strong> has been received. Click below to instantly forward your receipt to our dispatch team on WhatsApp.
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-page)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                maxWidth: '520px',
                margin: '0 auto 1.8rem auto',
                textAlign: 'left',
                border: '1px solid var(--border-card)'
              }}
            >
              <h5 style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                Order Receipt Summary:
              </h5>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '3px' }}>
                <strong>Deliver to:</strong> {orderSummary?.customer.address}, {orderSummary?.customer.city}
              </p>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '3px' }}>
                <strong>WhatsApp Contact:</strong> {orderSummary?.customer.phone}
              </p>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <strong>Total Amount:</strong> Rs. {orderSummary?.total.toLocaleString()}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={handleDispatchWhatsApp}
                className="btn-whatsapp-action"
                style={{
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.95rem'
                }}
              >
                <MessageSquare size={18} /> Send Receipt to WhatsApp
              </button>

              <button
                onClick={onClose}
                className="btn-outline-action"
                style={{
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem'
                }}
              >
                Return to Store
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

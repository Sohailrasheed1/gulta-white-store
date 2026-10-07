import React, { useState } from 'react';
import { X, CheckCircle2, Truck, ShieldCheck, ArrowRight, Copy, Check, MessageSquare, Crown } from 'lucide-react';
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
    if (!formData.fullName || !formData.phone || !formData.address || !formData.city) {
      alert('Please fill in your name, phone number, address, and city.');
      return;
    }

    try {
      confetti({
        particleCount: 120,
        spread: 80,
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
    const itemsList = orderSummary.items.map(item => `• ${item.title} (x${item.quantity}) - Rs. ${(item.price * item.quantity).toLocaleString()}`).join('\n');
    const payMethodName = PAYMENT_METHODS.find(p => p.id === orderSummary.paymentMethod)?.name || orderSummary.paymentMethod;

    return `🛍️ *NEW ORDER - GULTA WHITE™ LUXURY STORE*\n` +
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
      `🚚 *Delivery*: Free Express Shipping Nationwide`;
  };

  const handleDispatchWhatsApp = () => {
    const text = formatWhatsAppText();
    const cleanNumber = targetWhatsApp.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="luxury-glass-light animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          padding: '0',
          position: 'relative',
          boxShadow: '0 25px 70px rgba(20, 0, 6, 0.4)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '1.4rem 1.8rem',
          background: 'linear-gradient(135deg, #3b0014 0%, #140006 100%)',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '800', color: '#ffffff' }}>
              {step === 'checkout' ? 'Complete Your Order' : '🎉 Order Confirmed!'}
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#ebd390' }}>
              {step === 'checkout' ? 'Safe 256-Bit SSL Encrypted Checkout' : 'Thank you for choosing Gulta White™'}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{ color: '#d4af37', background: 'rgba(255,255,255,0.1)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={20} />
          </button>
        </div>

        {step === 'checkout' ? (
          <form onSubmit={handlePlaceOrder} style={{ padding: '1.8rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.8rem' }}>
              
              {/* Left Column Shipping Form */}
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#3b0014', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Truck size={20} color="#d4af37" /> Delivery Information
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: '800', color: '#3b0014', display: 'block', marginBottom: '5px' }}>
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
                        padding: '12px 14px',
                        borderRadius: '12px',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        background: '#fdf2f5',
                        fontWeight: '500'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: '800', color: '#3b0014', display: 'block', marginBottom: '5px' }}>
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
                        padding: '12px 14px',
                        borderRadius: '12px',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        background: '#fdf2f5',
                        fontWeight: '500'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: '800', color: '#3b0014', display: 'block', marginBottom: '5px' }}>
                      Complete Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="House/Street #, Colony/Sector"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        background: '#fdf2f5',
                        fontWeight: '500'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: '800', color: '#3b0014', display: 'block', marginBottom: '5px' }}>
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Lahore, Karachi, Islamabad"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        background: '#fdf2f5',
                        fontWeight: '500'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column Payment Method */}
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#3b0014', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={20} color="#d4af37" /> Select Payment Method
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '1.4rem' }}>
                  {PAYMENT_METHODS.map((method) => {
                    const isSelected = selectedPayment === method.id;
                    return (
                      <div
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        style={{
                          padding: '14px 18px',
                          borderRadius: '16px',
                          border: isSelected ? '2px solid #3b0014' : '1px solid rgba(212, 175, 55, 0.3)',
                          backgroundColor: isSelected ? '#fdf2f5' : '#ffffff',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <div style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            border: isSelected ? '7px solid #3b0014' : '2px solid #7e5260',
                            backgroundColor: '#ffffff'
                          }} />
                          <div>
                            <span style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e050c', display: 'block' }}>
                              {method.name}
                            </span>
                            <span style={{ fontSize: '0.78rem', color: '#7e5260' }}>
                              {method.description}
                            </span>
                          </div>
                        </div>

                        <div style={{ flexShrink: 0 }}>
                          {method.id === 'cod' && <CodLogo height={30} />}
                          {method.id === 'easypaisa' && <EasyPaisaLogo height={30} />}
                          {method.id === 'jazzcash' && <JazzCashLogo height={30} />}
                          {method.id === 'bank' && <MeezanBankLogo height={30} />}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Online Payment Guidance */}
                {selectedPayment !== 'cod' && (
                  <div style={{
                    backgroundColor: '#fffaf0',
                    border: '1px dashed #d4af37',
                    borderRadius: '16px',
                    padding: '16px',
                    marginBottom: '1.2rem'
                  }}>
                    <h5 style={{ fontSize: '0.88rem', fontWeight: '800', color: '#3b0014', marginBottom: '8px' }}>
                      Online Account Details:
                    </h5>

                    {selectedPayment === 'easypaisa' && (
                      <div style={{ fontSize: '0.85rem', color: '#1e050c', lineHeight: 1.5 }}>
                        <p><strong>Title:</strong> Gulta White Official</p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong>EasyPaisa Number:</strong> 0300 1234567
                          <button
                            type="button"
                            onClick={() => handleCopy('03001234567', 'ep')}
                            style={{ color: '#3b0014', fontSize: '0.75rem', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                          >
                            {copiedId === 'ep' ? <Check size={13} color="#25d366" /> : <Copy size={13} />} Copy
                          </button>
                        </p>
                      </div>
                    )}

                    {selectedPayment === 'jazzcash' && (
                      <div style={{ fontSize: '0.85rem', color: '#1e050c', lineHeight: 1.5 }}>
                        <p><strong>Title:</strong> Gulta White Official</p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong>JazzCash Number:</strong> 0300 1234567
                          <button
                            type="button"
                            onClick={() => handleCopy('03001234567', 'jc')}
                            style={{ color: '#3b0014', fontSize: '0.75rem', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                          >
                            {copiedId === 'jc' ? <Check size={13} color="#25d366" /> : <Copy size={13} />} Copy
                          </button>
                        </p>
                      </div>
                    )}

                    {selectedPayment === 'bank' && (
                      <div style={{ fontSize: '0.85rem', color: '#1e050c', lineHeight: 1.5 }}>
                        <p><strong>Bank:</strong> Meezan Bank Limited</p>
                        <p><strong>Account Title:</strong> Gulta White Skincare</p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong>IBAN:</strong> PK36 MEZN 0001 0203 0405 0607
                          <button
                            type="button"
                            onClick={() => handleCopy('PK36 MEZN 0001 0203 0405 0607', 'bank')}
                            style={{ color: '#3b0014', fontSize: '0.75rem', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                          >
                            {copiedId === 'bank' ? <Check size={13} color="#25d366" /> : <Copy size={13} />} Copy
                          </button>
                        </p>
                      </div>
                    )}

                    <div style={{ marginTop: '12px' }}>
                      <label style={{ fontSize: '0.78rem', fontWeight: '800', color: '#3b0014', display: 'block', marginBottom: '3px' }}>
                        Transaction Ref / TID (Optional):
                      </label>
                      <input
                        type="text"
                        name="transactionId"
                        placeholder="e.g. 9847192847"
                        value={formData.transactionId}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: '10px',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          fontSize: '0.85rem',
                          outline: 'none',
                          background: '#ffffff'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Payable Summary Box */}
                <div style={{
                  backgroundColor: '#fdf2f5',
                  borderRadius: '16px',
                  padding: '16px',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  marginBottom: '1.4rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '900', color: '#3b0014' }}>
                    <span>Amount Payable:</span>
                    <span>Rs. {finalTotal.toLocaleString()}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#7e5260', display: 'block', marginTop: '3px' }}>
                    Includes Free Express Shipping Nationwide
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-royal-maroon"
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '14px',
                    fontSize: '1.05rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  Confirm & Place Order <ArrowRight size={20} color="#d4af37" />
                </button>
              </div>

            </div>
          </form>
        ) : (
          /* Confirmation Screen */
          <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{
              width: '86px',
              height: '86px',
              borderRadius: '50%',
              backgroundColor: '#e6f9ed',
              border: '2px solid #25d366',
              color: '#25d366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.8rem auto',
              boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)'
            }}>
              <CheckCircle2 size={52} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: '800', color: '#1e050c', marginBottom: '10px' }}>
              Thank You, {orderSummary?.customer.fullName}!
            </h3>

            <p style={{ fontSize: '1rem', color: '#4a1c29', maxWidth: '540px', margin: '0 auto 1.8rem auto', lineHeight: 1.6 }}>
              Your order <strong style={{ color: '#3b0014' }}>#{orderSummary?.orderId}</strong> has been created. Click below to instantly send your receipt to our WhatsApp team.
            </p>

            <div style={{
              backgroundColor: '#fdf2f5',
              borderRadius: '20px',
              padding: '1.5rem',
              maxWidth: '560px',
              margin: '0 auto 2.2rem auto',
              textAlign: 'left',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <h5 style={{ fontSize: '0.88rem', fontWeight: '900', color: '#3b0014', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>
                Order Receipt Summary:
              </h5>
              <p style={{ fontSize: '0.88rem', color: '#4a1c29', marginBottom: '4px' }}>
                <strong>Deliver to:</strong> {orderSummary?.customer.address}, {orderSummary?.customer.city}
              </p>
              <p style={{ fontSize: '0.88rem', color: '#4a1c29', marginBottom: '4px' }}>
                <strong>WhatsApp Contact:</strong> {orderSummary?.customer.phone}
              </p>
              <p style={{ fontSize: '0.88rem', color: '#4a1c29' }}>
                <strong>Total Amount Payable:</strong> Rs. {orderSummary?.total.toLocaleString()}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={handleDispatchWhatsApp}
                style={{
                  background: '#25d366',
                  color: '#ffffff',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontWeight: '800',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 30px rgba(37, 211, 102, 0.35)'
                }}
              >
                <MessageSquare size={20} /> Send Order Details to WhatsApp
              </button>

              <button
                onClick={onClose}
                className="btn-royal-maroon"
                style={{
                  padding: '16px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.95rem'
                }}
              >
                Done / Return to Store
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

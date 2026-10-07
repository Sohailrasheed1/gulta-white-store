import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ whatsappNumber }) {
  const handleClick = () => {
    const cleanNumber = (whatsappNumber || '923001234567').replace(/[^0-9]/g, '');
    const text = encodeURIComponent('Hi Gulta White™! I need information regarding your Glutathione products and active discounts.');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="floating-whatsapp-desktop"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 1000,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#25d366',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 18px rgba(37, 211, 102, 0.4)',
        border: 'none',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.06)';
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 211, 102, 0.55)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(37, 211, 102, 0.4)';
      }}
      title="Instant WhatsApp Consultation"
      aria-label="Contact Gulta White on WhatsApp"
    >
      <MessageCircle size={28} fill="#ffffff" color="#25d366" />
    </button>
  );
}

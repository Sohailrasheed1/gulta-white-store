import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ whatsappNumber }) {
  const handleClick = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent('Hi Gulta White™! I need information regarding your Glutathione products and active discounts.');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="pulse-whatsapp floating-whatsapp-desktop"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 1000,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25d366',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        transition: 'transform 0.25s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      title="Instant WhatsApp Support"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} fill="#ffffff" color="#25d366" />
    </button>
  );
}

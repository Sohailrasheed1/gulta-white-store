import React, { useState } from 'react';
import { X, PhoneCall, Check } from 'lucide-react';

export default function WhatsAppAdminModal({ isOpen, onClose, currentNumber, onSaveNumber }) {
  const [numInput, setNumInput] = useState(currentNumber);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSaveNumber(numInput);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '450px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '1.75rem',
          boxShadow: '0 20px 50px rgba(86, 0, 29, 0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', color: '#7d6068' }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: '#25d366',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <PhoneCall size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1a0108' }}>
              Store WhatsApp Config
            </h3>
            <span style={{ fontSize: '0.78rem', color: '#7d6068' }}>
              Configure target number for WhatsApp order dispatches.
            </span>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: '700', color: '#56001d', display: 'block', marginBottom: '6px' }}>
              WhatsApp Phone Number (with country code):
            </label>
            <input
              type="text"
              placeholder="e.g. 923001234567"
              value={numInput}
              onChange={(e) => setNumInput(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid #f3d8de',
                fontSize: '0.95rem',
                outline: 'none',
                background: '#fdf4f6',
                fontWeight: '600'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              background: saved ? '#25d366' : 'linear-gradient(135deg, #56001d 0%, #3d0214 100%)',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '10px',
              fontWeight: '700',
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            {saved ? <Check size={18} /> : null}
            {saved ? 'Saved Successfully!' : 'Save Target WhatsApp Number'}
          </button>
        </form>
      </div>
    </div>
  );
}

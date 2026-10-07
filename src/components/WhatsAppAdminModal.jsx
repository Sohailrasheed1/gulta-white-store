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
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="animate-slide-bottom"
        style={{
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          border: '1px solid var(--border-card)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: 'var(--text-muted)',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Close admin modal"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-whatsapp)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <PhoneCall size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-main)' }}>
              Store WhatsApp Settings
            </h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Target number for customer orders & dispatch.
            </span>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: 'var(--text-main)',
                display: 'block',
                marginBottom: '6px'
              }}
            >
              WhatsApp Phone Number (with Country Code):
            </label>
            <input
              type="text"
              placeholder="e.g. 923001234567"
              value={numInput}
              onChange={(e) => setNumInput(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '11px 13px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.94rem',
                outline: 'none',
                backgroundColor: 'var(--bg-page)',
                fontWeight: '600',
                color: 'var(--text-main)'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: saved ? 'var(--color-success)' : 'var(--brand-burgundy)',
              color: '#ffffff',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: '700',
              fontSize: '0.9rem',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            {saved ? <Check size={18} /> : null}
            {saved ? 'Saved Successfully!' : 'Save WhatsApp Number'}
          </button>
        </form>
      </div>
    </div>
  );
}

'use client';
import React, { useState } from 'react';

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ItineraryModal: React.FC<ItineraryModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 400);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`modal-backdrop ${isOpen ? 'open' : ''} fixed inset-0 z-50 flex items-center justify-center px-6`}
        style={{ background: 'rgba(17,26,36,0.8)', backdropFilter: 'blur(6px)' }}
        onClick={handleClose}
      >
        {/* Modal */}
        <div
          className={`modal-content ${isOpen ? 'open' : ''} w-full max-w-md rounded-3xl overflow-hidden`}
          style={{
            background: 'var(--color-slate-deep)',
            border: '1px solid rgba(250,245,239,0.1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top image */}
          <div
            className="relative h-40 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, var(--color-slate-main) 0%, #2D3E52 100%)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="font-display text-5xl font-light mb-1"
                  style={{ color: 'var(--color-gold)', fontFamily: 'Fraunces, Georgia, serif' }}
                >
                  10
                </div>
                <div
                  className="text-[10px] uppercase tracking-ultra font-bold"
                  style={{ color: 'rgba(250,245,239,0.5)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Days · 40+ Locations · 1 Country
                </div>
              </div>
            </div>
            {/* Decorative lines */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px"
                  style={{
                    left: `${(i + 1) * 12.5}%`,
                    background: 'var(--color-whitewash)',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            {submitted ? (
              <div className="text-center py-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(196,98,58,0.12)', border: '1px solid rgba(196,98,58,0.25)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-terracotta)" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3
                  className="font-display text-xl font-light mb-2"
                  style={{ color: 'var(--color-whitewash)', fontFamily: 'Fraunces, Georgia, serif' }}
                >
                  Check your inbox.
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'rgba(250,245,239,0.55)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  The full 10-day itinerary with location maps and packing list is on its way to {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3
                    className="font-display text-2xl font-light mb-2"
                    style={{ color: 'var(--color-whitewash)', fontFamily: 'Fraunces, Georgia, serif' }}
                  >
                    The Full Itinerary
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(250,245,239,0.55)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    40+ locations, daily schedules, gear recommendations, and the fixer's personal notes on each site. Enter your email to receive the PDF.
                  </p>
                </div>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl px-4 py-3.5 text-sm transition-colors"
                  style={{
                    background: 'rgba(250,245,239,0.05)',
                    border: '1px solid rgba(250,245,239,0.12)',
                    color: 'var(--color-whitewash)',
                    fontFamily: 'DM Sans, sans-serif',
                    outline: 'none',
                  }}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(196,98,58,0.5)')}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(250,245,239,0.12)')}
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white transition-all duration-300"
                  style={{ background: 'var(--color-terracotta)', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-gold)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-slate)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-terracotta)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'white';
                  }}
                >
                  Send Me the Itinerary
                </button>

                <p
                  className="text-xs text-center"
                  style={{ color: 'rgba(250,245,239,0.25)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  No spam. One email. Unsubscribe any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItineraryModal;
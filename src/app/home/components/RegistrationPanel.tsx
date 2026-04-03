'use client';
import React, { useState } from 'react';

interface RegistrationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2;
type ExperienceLevel = 'Enthusiast' | 'Advanced' | 'Professional';

const RegistrationPanel: React.FC<RegistrationPanelProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>(1);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [departure, setDeparture] = useState('');
  const [experience, setExperience] = useState<ExperienceLevel | ''>('');
  const [gear, setGear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && email) setStep(2);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (departure && experience) setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setFirstName('');
      setEmail('');
      setDeparture('');
      setExperience('');
      setGear('');
    }, 500);
  };

  const experienceLevels: { value: ExperienceLevel; desc: string; icon: string }[] = [
    { value: 'Enthusiast', desc: 'Shooting 1–3 years, serious about learning', icon: '📷' },
    { value: 'Advanced', desc: 'Own L-series / G-master glass, shot for 5+ years', icon: '🔭' },
    { value: 'Professional', desc: 'Published work, commercial experience', icon: '🏆' },
  ];

  const departures = [
    '12 Oct 2026 — Autumn Light',
    '18 Mar 2027 — Spring Bloom',
    '05 Jun 2027 — Summer Solstice',
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(250,245,239,0.05)',
    border: '1px solid rgba(250,245,239,0.12)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: 'var(--color-whitewash)',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: 700,
    color: 'rgba(250,245,239,0.45)',
    marginBottom: '8px',
    fontFamily: 'DM Sans, sans-serif',
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`panel-overlay ${isOpen ? 'open' : ''} fixed inset-0 z-50`}
        style={{ background: 'rgba(17,26,36,0.75)', backdropFilter: 'blur(4px)' }}
        onClick={handleClose}
      />

      {/* Sliding panel */}
      <div
        className={`sliding-panel ${isOpen ? 'open' : ''} fixed top-0 right-0 h-full w-full max-w-lg z-50 overflow-y-auto`}
        style={{
          background: 'var(--color-slate-deep)',
          borderLeft: '1px solid rgba(250,245,239,0.08)',
        }}
      >
        {/* Panel header */}
        <div
          className="sticky top-0 flex items-center justify-between px-8 py-6"
          style={{
            background: 'rgba(17,26,36,0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(250,245,239,0.06)',
            zIndex: 10,
          }}
        >
          <div>
            <p
              className="text-[10px] uppercase tracking-ultra font-bold mb-0.5"
              style={{ color: 'var(--color-terracotta)', fontFamily: 'DM Sans, sans-serif' }}
            >
              {submitted ? 'Confirmed' : `Step ${step} of 2`}
            </p>
            <h3
              className="font-display text-xl font-light"
              style={{ color: 'var(--color-whitewash)', fontFamily: 'Fraunces, Georgia, serif' }}
            >
              {submitted ? 'You\'re on the list.' : step === 1 ? 'Reserve Your Spot' : 'Your Preferences'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{
              background: 'rgba(250,245,239,0.05)',
              border: '1px solid rgba(250,245,239,0.1)',
              color: 'rgba(250,245,239,0.6)',
            }}
            aria-label="Close panel"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="h-0.5 w-full" style={{ background: 'rgba(250,245,239,0.06)' }}>
            <div
              className="h-full transition-all duration-500"
              style={{
                width: step === 1 ? '50%' : '100%',
                background: 'linear-gradient(90deg, var(--color-terracotta), var(--color-gold))',
              }}
            />
          </div>
        )}

        <div className="px-8 py-8">
          {/* Submitted state */}
          {submitted && (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(196,98,58,0.15)', border: '1px solid rgba(196,98,58,0.3)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-terracotta)" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3
                className="font-display text-2xl font-light mb-3"
                style={{ color: 'var(--color-whitewash)', fontFamily: 'Fraunces, Georgia, serif' }}
              >
                Spot reserved, {firstName}.
              </h3>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: 'rgba(250,245,239,0.6)', fontFamily: 'DM Sans, sans-serif' }}
              >
                We'll reach out to {email} within 24 hours with your confirmation and next steps.
                No payment is taken until you confirm.
              </p>
              <div
                className="p-4 rounded-xl text-left"
                style={{ background: 'rgba(232,168,72,0.06)', border: '1px solid rgba(232,168,72,0.15)' }}
              >
                <p
                  className="text-xs uppercase tracking-widest font-bold mb-2"
                  style={{ color: 'var(--color-gold)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Your selection
                </p>
                <p className="text-sm text-white/80" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {departure} · {experience}
                </p>
              </div>
            </div>
          )}

          {/* Step 1 */}
          {!submitted && step === 1 && (
            <form onSubmit={handleStep1} className="flex flex-col gap-6">
              <div
                className="p-4 rounded-xl"
                style={{ background: 'rgba(232,168,72,0.06)', border: '1px solid rgba(232,168,72,0.12)' }}
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'rgba(250,245,239,0.6)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  No payment required. We'll contact you within 24 hours to confirm your spot and answer any questions.
                </p>
              </div>

              <div>
                <label style={labelStyle}>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  required
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(196,98,58,0.5)')}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(250,245,239,0.12)')}
                />
              </div>

              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(196,98,58,0.5)')}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(250,245,239,0.12)')}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 flex items-center justify-center gap-3 group"
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
                Continue
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </form>
          )}

          {/* Step 2 */}
          {!submitted && step === 2 && (
            <form onSubmit={handleStep2} className="flex flex-col gap-7">
              <div>
                <label style={labelStyle}>Preferred Departure</label>
                <select
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  required
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => ((e.target as HTMLSelectElement).style.borderColor = 'rgba(196,98,58,0.5)')}
                  onBlur={(e) => ((e.target as HTMLSelectElement).style.borderColor = 'rgba(250,245,239,0.12)')}
                >
                  <option value="" style={{ background: 'var(--color-slate-deep)' }}>Select a departure</option>
                  {departures.map((d) => (
                    <option key={d} value={d} style={{ background: 'var(--color-slate-deep)' }}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Experience Level</label>
                <div className="flex flex-col gap-3">
                  {experienceLevels.map((level) => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => setExperience(level.value)}
                      className="text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-4"
                      style={{
                        background: experience === level.value ? 'rgba(196,98,58,0.12)' : 'rgba(250,245,239,0.03)',
                        border: `1px solid ${experience === level.value ? 'rgba(196,98,58,0.4)' : 'rgba(250,245,239,0.08)'}`,
                      }}
                    >
                      <span className="text-2xl">{level.icon}</span>
                      <div>
                        <div
                          className="text-sm font-bold"
                          style={{ color: experience === level.value ? 'var(--color-terracotta)' : 'var(--color-whitewash)', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {level.value}
                        </div>
                        <div
                          className="text-xs mt-0.5"
                          style={{ color: 'rgba(250,245,239,0.45)', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {level.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Gear Summary <span style={{ color: 'rgba(250,245,239,0.25)' }}>(Optional)</span></label>
                <textarea
                  value={gear}
                  onChange={(e) => setGear(e.target.value)}
                  placeholder="e.g. Canon R5, 24-70mm f/2.8L, ND filters, tripod..."
                  rows={3}
                  style={{
                    ...inputStyle,
                    resize: 'none',
                  }}
                  onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'rgba(196,98,58,0.5)')}
                  onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'rgba(250,245,239,0.12)')}
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-colors"
                  style={{
                    border: '1px solid rgba(250,245,239,0.12)',
                    color: 'rgba(250,245,239,0.5)',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white transition-all duration-300"
                  style={{
                    background: departure && experience ? 'var(--color-terracotta)' : 'rgba(250,245,239,0.1)',
                    color: departure && experience ? 'white' : 'rgba(250,245,239,0.3)',
                    fontFamily: 'DM Sans, sans-serif',
                    cursor: departure && experience ? 'pointer' : 'not-allowed',
                  }}
                  onMouseEnter={(e) => {
                    if (departure && experience) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-gold)';
                      (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-slate)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (departure && experience) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-terracotta)';
                      (e.currentTarget as HTMLButtonElement).style.color = 'white';
                    }
                  }}
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default RegistrationPanel;
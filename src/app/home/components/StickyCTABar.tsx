'use client';
import React, { useEffect, useState } from 'react';

interface StickyCTABarProps {
  onJoin: () => void;
}

const StickyCTABar: React.FC<StickyCTABarProps> = ({ onJoin }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 90vh)
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 sticky-cta ${visible ? 'visible' : ''}`}
      style={{
        background: 'rgba(15,23,42,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(20,184,166,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'var(--color-coral)' }}
          />
          <span
            className="text-sm font-medium text-white/80"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="hidden sm:inline">June session — </span>
            <span style={{ color: 'var(--color-teal)' }}>8 spots remaining</span>
          </span>
        </div>
        <button
          onClick={onJoin}
          className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
          style={{
            background: 'var(--color-coral)',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-teal)';
            (e.currentTarget as HTMLButtonElement).style.color = 'white';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-coral)';
            (e.currentTarget as HTMLButtonElement).style.color = 'white';
          }}
        >
          Claim Your Spot
        </button>
      </div>
    </div>
  );
};

export default StickyCTABar;
'use client';
import React, { useEffect, useRef } from 'react';

interface RegistrationSectionProps {
  onJoin: () => void;
  onDetails: () => void;
}

const departures = [
  { date: '15 Jun 2026', label: 'Summer Creative — 8 spots', spots: 8 },
  { date: '28 Sep 2026', label: 'Autumn Harvest — 10 spots', spots: 10 },
  { date: '12 Apr 2027', label: 'Spring Awakening — 6 spots', spots: 6 },
];

const RegistrationSection: React.FC<RegistrationSectionProps> = ({ onJoin, onDetails }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'var(--color-slate-deep)' }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(20,184,166,0.08) 0%, transparent 70%)' }}
      />

      <div
        ref={sectionRef}
        className="stagger-children max-w-4xl mx-auto relative z-10 text-center"
      >
        <div
          className="inline-block text-[10px] uppercase tracking-ultra font-bold mb-4"
          style={{ color: 'var(--color-coral)', fontFamily: 'Inter, sans-serif' }}
        >
          Limited Availability
        </div>

        <h2
          className="font-display text-4xl md:text-6xl font-light leading-tight mb-6"
          style={{ color: 'var(--color-pearl)', fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Claim Your Spot.
          <br />
          <em style={{ color: 'var(--color-teal)' }}>8 Remaining.</em>
        </h2>

        <p
          className="text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ color: 'rgba(248,250,252,0.65)', fontFamily: 'Inter, sans-serif' }}
        >
          Three workshops in 2026–2027. Twelve participants maximum per session.
          Each group is designed to foster deep creative connection and collaboration.
        </p>

        {/* Departure cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {departures.map((dep, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-left cursor-pointer transition-all duration-300 group"
              style={{
                background: 'rgba(248,250,252,0.04)',
                border: '1px solid rgba(248,250,252,0.1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(249,115,22,0.4)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(249,115,22,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(248,250,252,0.1)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(248,250,252,0.04)';
              }}
            >
              <div
                className="text-xs uppercase tracking-widest font-bold mb-1"
                style={{ color: 'var(--color-teal)', fontFamily: 'Inter, sans-serif' }}
              >
                {dep.date}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: 'var(--color-pearl)', fontFamily: 'Inter, sans-serif' }}
              >
                {dep.label}
              </div>
              <div className="flex gap-1 mt-3">
                {Array.from({ length: 8 }).map((_, j) => (
                  <div
                    key={j}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: j < dep.spots
                        ? 'var(--color-coral)'
                        : 'rgba(248,250,252,0.1)',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onJoin}
            className="group px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest text-white flex items-center justify-center gap-3 transition-all duration-300"
            style={{
              background: 'var(--color-coral)',
              boxShadow: '0 8px 40px rgba(249,115,22,0.35)',
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>

          <button
            onClick={onDetails}
            className="px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border"
            style={{
              borderColor: 'rgba(20,184,166,0.3)',
              color: 'var(--color-teal)',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-teal)';
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(20,184,166,0.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(20,184,166,0.3)';
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            }}
          >
            View Workshop Details
          </button>
        </div>

        <p
          className="text-xs mt-6"
          style={{ color: 'rgba(248,250,252,0.3)', fontFamily: 'Inter, sans-serif' }}
        >
          No payment required to join. We'll contact you within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default RegistrationSection;
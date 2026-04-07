'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  onJoin: () => void;
}

const HEADLINE = 'Seven Days. One Coast. Infinite Creation.';

const HeroSection: React.FC<HeroSectionProps> = ({ onJoin }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Start hero reveal
    const revealTimer = setTimeout(() => setHeroVisible(true), 300);

    // Typewriter after delay
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current < HEADLINE.length) {
          setDisplayedText(HEADLINE.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 65);
      return () => clearInterval(interval);
    }, 1800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(startTimer);
    };
  }, [mounted]);

  const stats = [
  { label: 'Workshop Duration', value: '7 Days', sub: 'Barcelona → Provence → Amalfi' },
  { label: 'Group Size', value: '12 Max', sub: 'Collaborative. Inspiring.' },
  { label: 'Next Session', value: 'Jun 15', sub: '8 spots remaining' }];


  return (
    <header className="relative w-full min-h-screen flex items-end overflow-hidden">
      {/* Background image layers */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1920&q=80"
          alt="Mediterranean coastline at golden hour with creative workspace overlooking the sea"
          fill
          className="object-cover"
          priority />
        
        {/* Multi-layer gradient for cinematic depth */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.7) 0%, rgba(30,41,59,0.35) 40%, rgba(15,23,42,0.85) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.8) 0%, transparent 60%)' }} />
        {/* Atmospheric color wash */}
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 70% 60%, rgba(20,184,166,0.4) 0%, transparent 60%)' }} />
      </div>

      {/* Rotating badge */}
      <div className="absolute top-32 right-8 md:right-16 z-20 hidden md:block">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="animate-rotate-badge w-full h-full" viewBox="0 0 100 100">
            <path id="heroBadgePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text fontSize="9" fontFamily="Inter" fontWeight="700" letterSpacing="3px" fill="rgba(20,184,166,0.9)">
              <textPath href="#heroBadgePath" startOffset="0%">
                MEDITERRANEAN • 2026 • CREATIVITY •
              </textPath>
            </text>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(20,184,166,0.9)" strokeWidth="1.5" className="absolute">
            <circle cx="12" cy="12" r="3" /><path d="M3 9a9 9 0 0 1 9-6 9 9 0 0 1 6 2.34" /><path d="M21 15a9 9 0 0 1-9 6 9 9 0 0 1-6-2.34" />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 scroll-indicator flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-ultra text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
        style={{ 
          opacity: (mounted && heroVisible) ? 1 : 0, 
          transition: 'opacity 1.2s ease',
          ...(mounted && { minHeight: '400px' })
        }}>
        
        {/* Left — headline */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] uppercase tracking-widest font-bold w-fit"
            style={{
              borderColor: 'rgba(20,184,166,0.3)',
              background: 'rgba(20,184,166,0.08)',
              color: 'var(--color-teal)',
              fontFamily: 'Inter, sans-serif'
            }}>
            
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--color-coral)' }} />
            Creative Workshop · Mediterranean · 2026
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', minHeight: '4em' }}>
            
            {mounted ? displayedText : HEADLINE}
            {!typingDone && mounted && <span className="typewriter-cursor" />}
          </h1>

          <p
            className="text-base md:text-lg text-white/75 max-w-xl font-light leading-relaxed border-l-2 pl-5"
            style={{ borderColor: 'var(--color-coral)', fontFamily: 'Inter, sans-serif' }}>
            
            Sun-drenched terraces, azure coastlines, ancient villages.
            A curated journey where creativity meets the Mediterranean spirit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={onJoin}
              className="group px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-3 transition-all duration-300 shadow-2xl"
              style={{
                background: 'var(--color-coral)',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 8px 32px rgba(249,115,22,0.4)'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-teal)';
                (e.currentTarget as HTMLButtonElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-coral)';
                (e.currentTarget as HTMLButtonElement).style.color = 'white';
              }}>
              
              Claim Your Spot — 8 Remaining
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <a
              href="#journey"
              className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors border"
              style={{ borderColor: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>
              
              Explore the Experience
            </a>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
          {stats.map((stat, i) =>
          <div
            key={stat.label}
            className="glass rounded-2xl p-5 w-full max-w-xs animate-float"
            style={{
              animationDelay: `${i * 0.8}s`,
              fontFamily: 'Inter, sans-serif'
            }}>
            
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">{stat.label}</div>
              <div
              className="text-2xl font-light text-white mb-0.5"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              
                {stat.value}
              </div>
              <div className="text-xs text-white/60">{stat.sub}</div>
            </div>
          )}
        </div>
      </div>
    </header>);

};

export default HeroSection;
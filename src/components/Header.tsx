'use client';
import React, { useState, useEffect } from 'react';


interface HeaderProps {
  onJoin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onJoin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const navLinks = [
    { label: 'The Experience', href: '#journey' },
    { label: 'Showcase', href: '#gallery' },
    { label: 'Stories', href: '#stories' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled && mounted
          ? 'bg-slate-deep/90 backdrop-blur-xl border-b border-white/10 py-4' :'py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex flex-col gap-[3px]">
            <div className="w-5 h-[1.5px] bg-white rounded-full group-hover:w-7 transition-all duration-500" />
            <div className="w-3 h-[1.5px] bg-white/60 rounded-full group-hover:w-7 transition-all duration-500 delay-75" />
            <div className="w-7 h-[1.5px] bg-white rounded-full group-hover:w-7 transition-all duration-500 delay-100" />
          </div>
          <span
            className="font-display text-white text-xl font-light tracking-[0.18em] uppercase"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Lumina
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-body uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onJoin}
            className="px-6 py-2.5 rounded-full text-xs font-body font-bold uppercase tracking-widest transition-all duration-300"
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
            Join Workshop — 8 Left
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 group w-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'}`}
          />
          <div
            className={`h-0.5 bg-white/60 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-2/3'}`}
          />
          <div
            className={`h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-full -rotate-45 -translate-y-2' : 'w-full'}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-deep/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-body uppercase tracking-widest text-white/80 hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onJoin(); }}
            className="mt-2 px-6 py-3 rounded-full text-sm font-body font-bold uppercase tracking-widest text-white"
            style={{ background: 'var(--color-coral)', fontFamily: 'Inter, sans-serif' }}
          >
            Claim Your Spot
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
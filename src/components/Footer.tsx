import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="border-t py-16 px-6"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        background: 'var(--color-slate-deep)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left — brand */}
        <div className="flex flex-col gap-3 max-w-xs">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-[3px]">
              <div className="w-4 h-[1.5px] rounded-full" style={{ background: 'var(--color-teal)' }} />
              <div className="w-2.5 h-[1.5px] rounded-full" style={{ background: 'rgba(20,184,166,0.5)' }} />
              <div className="w-5 h-[1.5px] rounded-full" style={{ background: 'var(--color-teal)' }} />
            </div>
            <span
              className="font-display text-lg font-light tracking-[0.18em] uppercase"
              style={{ color: 'var(--color-pearl)', fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Lumina
            </span>
          </div>
          <p
            className="text-sm font-light leading-relaxed"
            style={{ color: 'rgba(248,250,252,0.45)', fontFamily: 'Inter, sans-serif' }}
          >
            Nurturing creative souls across the Mediterranean — seven days, one coast, infinite inspiration.
          </p>
        </div>

        {/* Right — links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="flex flex-col gap-3">
            {['The Experience', 'Showcase', 'Creator Stories'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium transition-colors duration-300"
                style={{
                  color: 'rgba(248,250,252,0.5)',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--color-teal)')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(248,250,252,0.5)')}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium transition-colors duration-300"
                style={{
                  color: 'rgba(248,250,252,0.5)',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--color-teal)')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(248,250,252,0.5)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(248,250,252,0.3)', fontFamily: 'Inter, sans-serif' }}
      >
        <span>© 2026 Lumina. All rights reserved.</span>
        <span>Mediterranean · 7 days · Creative flow</span>
      </div>
    </footer>
  );
};

export default Footer;
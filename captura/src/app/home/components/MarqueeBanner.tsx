import React from 'react';

const items = [
  'Creative Flow',
  'Azure Coast',
  'Sunset Sessions',
  'Art Markets',
  'Hilltop Villages',
  'Morning Workshops',
  'Local Culture',
  'Inspiration',
  'Coastal Trails',
  'Creative Community',
];

const MarqueeBanner: React.FC = () => {
  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden border-y py-4"
      style={{
        borderColor: 'rgba(249,115,22,0.2)',
        background: 'var(--color-slate-main)',
      }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: 'rgba(248,250,252,0.45)', fontFamily: 'Inter, sans-serif' }}
            >
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'var(--color-coral)' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
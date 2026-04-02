/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-deep': '#0F172A',
        'slate-main': '#1E293B',
        'slate-mid': '#334155',
        'teal': '#14B8A6',
        'teal-light': '#2DD4BF',
        'coral': '#F97316',
        'coral-light': '#FB923C',
        'pearl': '#F8FAFC',
        'pearl-warm': '#F1F5F9',
        'mist': '#E2E8F0',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.85' }],
        '9xl': ['8rem', { lineHeight: '0.88' }],
      },
      letterSpacing: {
        'ultra': '0.3em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'rotate-badge': 'rotate-badge 18s linear infinite',
        'float': 'float-gentle 4s ease-in-out infinite',
        'float-delayed': 'float-gentle 4s ease-in-out 1.5s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
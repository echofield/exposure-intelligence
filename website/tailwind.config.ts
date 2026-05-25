import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1d19',
        'ink-soft': '#3c4039',
        paper: '#f4f1ea',
        'paper-deep': '#e6dfd1',
        stone: '#b5ab9c',
        // Dark palette - deep navy / steel
        // Register: Bloomberg terminal + legal memo + intelligence advisory
        navy: '#16243a',
        'navy-mid': '#1c2e46',
        'navy-light': '#253752',
        steel: '#4a6878',  // single cold accent - links, focus states, signals
        slate: '#1e2830',  // secondary dark ground - advisory partners section
        copper: '#9a6b45', // warm - eyebrow labels only
        oxblood: '#6e3832',
        // Severity - reserved exclusively, never decorative
        critical: '#b23a38',
        high: '#c05b30',
        medium: '#7a6b40',
        low: '#3d5445',
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', '"Segoe UI"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Fira Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['11px', { letterSpacing: '0.1em' }],
      },
      maxWidth: {
        site: '1180px',
      },
      backgroundImage: {
        'grid-paper': `
          linear-gradient(90deg, rgba(30,33,29,0.04) 1px, transparent 1px),
          linear-gradient(180deg, rgba(30,33,29,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-44': '44px 44px',
      },
      keyframes: {
        'cell-pulse': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.45' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'cell-pulse': 'cell-pulse 2.8s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease both',
        'reveal': 'reveal 0.5s ease both',
      },
    },
  },
  plugins: [],
} satisfies Config

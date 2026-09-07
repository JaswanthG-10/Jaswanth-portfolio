/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0C',
          card: 'rgba(18, 18, 22, 0.85)',
          panel: '#121216',
          border: 'rgba(255, 255, 255, 0.12)',
          textLight: '#F1F5F9',
          textMuted: '#94A3B8',
        },
        cinematic: {
          red: '#E11D48',
          crimson: '#F43F5E',
          cyan: '#06B6D4',
          violet: '#6366F1',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cinematic-red': '0 0 30px rgba(225, 29, 72, 0.35)',
        'cinematic-cyan': '0 0 30px rgba(6, 182, 212, 0.35)',
        'cinematic-card': '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 20px rgba(225, 29, 72, 0.12)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 25s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        spinReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.85', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.25)' },
        },
      }
    },
  },
  plugins: [],
}

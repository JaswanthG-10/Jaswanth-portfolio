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
      '3xl': '1920px',
    },
    extend: {
      colors: {
        pastel: {
          bg: '#F8FAFC',
          sky: '#E8F1FF',
          lavender: '#F1EEFC',
          mint: '#EAFBF3',
          card: 'rgba(255, 255, 255, 0.65)',
          border: 'rgba(255, 255, 255, 0.8)',
          textDark: '#0F172A',
          textMuted: '#475569',
        },
        brand: {
          periwinkle: '#6366F1',
          violet: '#8B5CF6',
          aqua: '#0EA5E9',
          mint: '#10B981',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px 3px rgba(148, 163, 184, 0.1)',
        'xs': '0 2px 6px rgba(148, 163, 184, 0.12)',
        'glass-sm': '0 8px 24px -4px rgba(148, 163, 184, 0.15), 0 4px 12px -2px rgba(99, 102, 241, 0.08)',
        'glass': '0 20px 40px -15px rgba(148, 163, 184, 0.18), 0 10px 20px -10px rgba(139, 92, 246, 0.12)',
        'glass-hover': '0 30px 60px -12px rgba(99, 102, 241, 0.22), 0 18px 36px -18px rgba(14, 165, 233, 0.18)',
        'glow-violet': '0 0 25px rgba(139, 92, 246, 0.35)',
        'glow-aqua': '0 0 25px rgba(14, 165, 233, 0.35)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -8px, 0) rotate(1.2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

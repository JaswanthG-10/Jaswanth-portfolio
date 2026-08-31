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
        soft: {
          bg: '#E2E8F0',
          bgSecondary: '#D9E1ED',
          card: 'rgba(240, 244, 252, 0.82)',
          border: 'rgba(100, 110, 150, 0.2)',
          textDark: '#1E293B',
          textMuted: '#475569',
        },
        brand: {
          violet: '#6366F1',
          blue: '#3B82F6',
          periwinkle: '#818CF8',
          cyan: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px 3px rgba(100, 110, 150, 0.1)',
        'xs': '0 2px 6px rgba(100, 110, 150, 0.14)',
        'glass-sm': '0 8px 24px -4px rgba(100, 110, 150, 0.15), 0 4px 12px -2px rgba(99, 102, 241, 0.1)',
        'glass': '0 20px 45px -15px rgba(100, 110, 150, 0.2), 0 10px 22px -10px rgba(99, 102, 241, 0.14)',
        'glass-hover': '0 30px 60px -12px rgba(99, 102, 241, 0.28), 0 18px 36px -18px rgba(59, 130, 246, 0.22)',
        'glow-violet': '0 0 25px rgba(99, 102, 241, 0.35)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.35)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -8px, 0) rotate(1.2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

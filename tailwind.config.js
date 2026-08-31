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
          bg: '#EEF1F7',
          bgSecondary: '#E6EAF3',
          card: 'rgba(240, 243, 250, 0.75)',
          border: 'rgba(100, 110, 150, 0.15)',
          textDark: '#172033',
          textMuted: '#58647A',
        },
        brand: {
          violet: '#6C5CE7',
          blue: '#4C8DFF',
          periwinkle: '#8B7CFF',
          cyan: '#67C6E3',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px 3px rgba(100, 110, 150, 0.08)',
        'xs': '0 2px 6px rgba(100, 110, 150, 0.12)',
        'glass-sm': '0 8px 24px -4px rgba(100, 110, 150, 0.12), 0 4px 12px -2px rgba(108, 92, 231, 0.08)',
        'glass': '0 20px 45px -15px rgba(100, 110, 150, 0.18), 0 10px 22px -10px rgba(108, 92, 231, 0.12)',
        'glass-hover': '0 30px 60px -12px rgba(108, 92, 231, 0.25), 0 18px 36px -18px rgba(76, 141, 255, 0.2)',
        'glow-violet': '0 0 25px rgba(108, 92, 231, 0.35)',
        'glow-cyan': '0 0 25px rgba(103, 198, 227, 0.35)',
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

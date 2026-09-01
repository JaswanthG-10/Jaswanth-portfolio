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
        soft: {
          bg: '#F5F3EE',
          bgSecondary: '#EDEBE6',
          card: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(100, 110, 140, 0.16)',
          textDark: '#1E293B',
          textMuted: '#475569',
        },
        brand: {
          violet: '#6366F1',
          blue: '#3B82F6',
          periwinkle: '#818CF8',
          cyan: '#0EA5E9',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px 3px rgba(100, 110, 140, 0.08)',
        'xs': '0 2px 6px rgba(100, 110, 140, 0.1)',
        'glass-sm': '0 8px 24px -4px rgba(100, 110, 140, 0.12), 0 4px 12px -2px rgba(99, 102, 241, 0.08)',
        'glass': '0 20px 45px -15px rgba(100, 110, 140, 0.15), 0 10px 22px -10px rgba(99, 102, 241, 0.12)',
        'glass-hover': '0 30px 60px -12px rgba(99, 102, 241, 0.22), 0 18px 36px -18px rgba(59, 130, 246, 0.18)',
        'glow-violet': '0 0 25px rgba(99, 102, 241, 0.25)',
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 3.5s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      }
    },
  },
  plugins: [],
}

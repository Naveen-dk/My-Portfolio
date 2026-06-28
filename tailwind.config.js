/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#030712',
          card: '#090d16',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(6, 182, 212, 0.15)',
        },
        accent: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%': { opacity: '0.3', filter: 'blur(40px)' },
          '100%': { opacity: '0.6', filter: 'blur(60px)' },
        }
      }
    },
  },
  plugins: [],
}

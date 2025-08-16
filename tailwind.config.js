/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'crimean': ['e-Ukraine', 'system-ui', 'sans-serif'],
        'crimean-head': ['e-Ukraine Head', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Crimean Tatar cultural colors based on Ornek patterns
        'crimean': {
          50: '#fdf8f4',
          100: '#f7e9d9',
          200: '#ead0b3',
          300: '#dbb383',
          400: '#cd965b',
          500: '#b8743e',
          600: '#a05d32',
          700: '#86492b',
          800: '#6d3c28',
          900: '#593224',
          950: '#311812',
        },
        // Cultural accent colors
        'heritage': {
          'gold': '#d4af37',
          'crimson': '#dc2626', 
          'forest': '#059669',
          'sky': '#0284c7',
          'earth': '#92400e',
        },
        // Better contrast alternatives
        'accent': {
          'gold': '#b8860b', // Dark golden rod - better contrast
          'amber': '#d97706', // Amber-600 - good contrast
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


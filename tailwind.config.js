/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        neon: {
          cyan: '#00FFD5',
          pink: '#FF6EC7',
          purple: '#A855F7',
        },
        brand: {
          light: '#F8F9FA',
          dark: '#111111',
          accent: '#00FFD5',
          secondary: '#FF6EC7',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'rotate-y': 'rotate-y 10s linear infinite',
        'bounce': 'bounce 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a17',
          900: '#0a1128',
          850: '#0e1838',
          800: '#13214c',
          700: '#1d326f',
          600: '#2c4794',
        },
        civic: {
          saffron: {
            DEFAULT: '#ff851b',
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
          },
          teal: {
            DEFAULT: '#0d9488',
            50: '#f0fdfa',
            100: '#ccfbf1',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
          },
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
          },
          emerald: {
            50: '#ecfdf5',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
          },
          amber: {
            50: '#fffbeb',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
          },
          rose: {
            50: '#fff1f2',
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-saffron': '0 0 25px -5px rgba(249, 115, 22, 0.3)',
        'glow-teal': '0 0 25px -5px rgba(20, 184, 166, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.35)',
        'civic-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

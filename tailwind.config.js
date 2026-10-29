/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#F7F1E8', // Warm cream primary
          200: '#EFE7DA',
          300: '#E8DCCB', // Soft beige
          400: '#D9C8B1',
        },
        espresso: {
          800: '#3D2F28',
          900: '#2B211C', // Espresso brown primary
          950: '#1D1612',
        },
        coffee: {
          400: '#9C7256',
          500: '#865E47',
          600: '#75513C', // Coffee brown primary
          700: '#5F4130',
        },
        terracotta: {
          400: '#C98263',
          500: '#B86F50', // Muted terracotta primary
          600: '#A35D40',
        },
        beige: {
          DEFAULT: '#E8DCCB',
          light: '#F3ECE1',
          dark: '#D7C7B2',
        },
        cobalt: {
          DEFAULT: '#1E40AF',
          light: '#2563EB',
          dark: '#1E3A8A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0a1521',
        ink: {
          DEFAULT: '#e4edf5',
          soft: '#a3b6c7',
          faint: '#71869a',
        },
        azure: {
          50: '#eef6fb',
          100: '#d6e6f2',
          200: '#b4d0e4',
          300: '#8fb8d2',
          400: '#6b9cbb',
          500: '#4f819f',
          600: '#3a6780',
          700: '#2b5065',
        },
      },
    },
  },
  plugins: [],
};

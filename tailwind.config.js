/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        clash: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#EEF1FF',
          100: '#E0E5FF',
          200: '#C2CBFF',
          500: '#3B4EF8',
          primary: '#2438D8',
          dark: '#1726A8',
          navy: '#0F172A',
        },
      },
    },
  },
  plugins: [],
}
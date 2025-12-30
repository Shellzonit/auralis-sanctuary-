/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sanctuary: {
          bg: "#111111",
          text: "#F5F2EB",
          accent: "#D4A857",
          muted: "#C7C2B8",
          border: "#2A2A2A",
        },
        peach: {
          50:  '#FFF6F0',
          100: '#FFE5D0',
          200: '#FFD1B3',
          300: '#FFB795',
          400: '#FFA07A',
          500: '#FF8C69',
          600: '#FF7A59',
          700: '#FF6A4D',
          800: '#E65C43',
          900: '#CC513A',
        },
        lavender: {
          50:  '#F7F6FB',
          100: '#EDE9F7',
          200: '#D6CFF0',
          300: '#BFA6E0',
          400: '#A480D6',
          500: '#8C5FCB',
          600: '#7A4DB3',
          700: '#6A4199',
          800: '#5A367F',
          900: '#4B2D66',
        },
      },
    },
  },
  plugins: [],
};

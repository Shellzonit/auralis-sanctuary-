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
      },
    },
  },
  plugins: [],
};

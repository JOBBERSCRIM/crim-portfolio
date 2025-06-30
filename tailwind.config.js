/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // or 'media'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "10%": { transform: "translateX(0)", opacity: 1 },
          "90%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
      },
      animation: {
        slide: "slide 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
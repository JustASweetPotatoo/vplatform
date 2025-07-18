// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // tương đương 20rem
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};

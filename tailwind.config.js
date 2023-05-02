/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#784cfb",
          200: "#6b44b0",
        },
        second: "#222222",
      },
    },
  },
  plugins: [],
};

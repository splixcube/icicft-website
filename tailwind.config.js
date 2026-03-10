/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        accent: "#d4af37",
      }
    },
  },
  plugins: [],
}
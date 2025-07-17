/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2380c5",
        light: "#ffffff",
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl') // ✅ add this
  ],
}

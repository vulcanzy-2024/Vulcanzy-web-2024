/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cdb:["cdbold","sans-serif"],
        cdr:["cdregular","sans-serif"],
      }
    },
  },
  plugins: [],
}
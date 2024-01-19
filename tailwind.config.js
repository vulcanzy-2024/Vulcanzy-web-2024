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
      },
      backgroundImage:{
        "right_wave": "url('../src/images/home/right wave.svg')",
        "left_wave": "url('../src/images/home/left wave.svg')",
        "pink_drop":"url('../src/images/home/Pink drop.svg')",
        "purple_drop":"url('../src/images/home/Purple drop.svg')",
        "blue_drop":"url('../src/images/home/Blue drop.svg')"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "lg":"1060px",
        "md":"815px",
        "ran":"828px"
      },
      fontFamily:{
        cdb:["cdbold","sans-serif"],
        cdr:["cdregular","sans-serif"],
        lazy:["lazy","sans-serif"],
      },
      backgroundImage:{
        "right_wave": "url('../src/assets/images/home/right wave.svg')",
        "left_wave": "url('../src/assets/images/home/left wave.svg')",
        "pink_drop":"url('../src/assets/images/home/Pink drop.svg')",
        "purple_drop":"url('../src/assets/images/home/Purple drop.svg')",
        "blue_drop":"url('../src/assets/images/home/Blue drop.svg')",
        "pastle":"url('../src/assets/images/home/Pastle bubbles.svg')",
        "blue_bubbles":"url('../src/assets/images/home/blue bubbles.svg')"
      }
    },
  },
  plugins: [],
}
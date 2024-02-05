/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1060px",
        md: "815px",
        ran: "853px",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-4rem)" },
          "50%": { transform: "translateX(3rem)" },
          "100%": { transform: "translateX(0)" },
        },
        pop: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      },
      animation: {
        slide: "slide 3s ease-in-out ",
        pop: "pop 1s ease-in-out ",
      },
      fontFamily: {
        cdb: ["cdbold", "sans-serif"],
        cdr: ["cdregular", "sans-serif"],
        lazy: ["lazy", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      cyan: {
        900: "hsl(180, 14%, 20%)",
        700: "hsl(180, 8%, 52%)",
        500: "hsl(180, 29%, 50%)",
        100: "hsl(180, 52%, 96%)",
        50: "hsl(180, 31%, 95%)",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    backgroundImage: {
      "header-lg": "url(./images/bg-header-desktop.svg)",
      "header-sm": "url(./images/bg-header-mobile.svg)",
    },
    screens: {
      sm: "640px",
      md: "928px",
    },
    extend: {},
  },
  plugins: [],
};

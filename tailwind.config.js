/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      amatic: ["Amatic SC", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        BlueMoreDark: "#171f34",
        colorYellow: "#e8ca2c",
        darkBlue: "#324377",
        blueLight: "#7992ca",
        complementWhite: "#f8f2f2",
      },
    },
  },
  plugins: [],
};

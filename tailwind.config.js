/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryLight: "#F5F5F5",
        primary: "#A6A677",
        textDark: "#2c2c1f",
        primaryDark: "#59593e",
        secondary: "#14453D",
        secondaryDark: "#313120",
      },
      fontFamily: {
        quicksand: ["Quicksand", "serif"],
        poppins: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}
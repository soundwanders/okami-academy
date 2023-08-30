const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: { 
        slate: {
          850: "#151d2a",
        },
        violet: {
          250: '#d5cbfd' 
        },
        zinc: {
          850: "#232325",
          950: "#131315",
        },
      },
    },
  },
  plugins: [],
}

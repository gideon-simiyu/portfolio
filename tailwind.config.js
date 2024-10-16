/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        appprimary: {
          ...colors.blue
        }
      }
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

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
      },
      fontFamily : {
        afacad: "Afacad Flux"
      }
    },
  },

  flyonui: {
    themes: [
      {
        mytheme: {
          primary: colors.emerald["600"],
          secondary: colors.amber["600"],
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": colors.slate["800"],
        }
      },
      "dark",
      "gourmet"
    ]
  },

  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}
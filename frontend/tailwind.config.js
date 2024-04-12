/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryClr: "#0067FF",
        yellowClr: "#FEB60D",
        purpleClr: "#9771FF",
        irisBLueClr: "#01B5C5",
        headingClr: "#181A1E",
        textClr: "#4E545F",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 40px 100px 0px", 
      }
    },
  },
  plugins: [],
}


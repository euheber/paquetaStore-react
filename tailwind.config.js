/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { 
      "orange":"#CF5D00",     
      "oranger":"#F57002",     
      "yellowish":"#FFCD29",
      "white":"#FFF",
      "shadeblack":"#383838",
      "light-gray":"#e6dddc",
      "grandientOne":" #F99500",
      "success":" #65C239",
      "transparent":"rgba(0, 0, 0, 0.38)",
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}


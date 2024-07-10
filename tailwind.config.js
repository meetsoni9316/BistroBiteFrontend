/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        'blue':'#A79277',
        'sb':'#F6F5F2',
        "bl":"#31363F",
        "fs":"#FFE8C5",
        "vg":"#481E14",
        "mt":"#191919",
        "ft":"#957777",
        "yel":"#FFDB00",
        "fp":"#3E3232",
        "cho":"#503C3C",
        "re":"#820300"


      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

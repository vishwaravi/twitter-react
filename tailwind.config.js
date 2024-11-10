import daisyUIThemes, { black } from 'daisyui/src/theming/themes';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        body : ['Poppins'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      {
        black : {
          ...daisyUIThemes['black'],
          primary : "rgb(29,155,240)",
          secondary : "rgb(24,24,24)",
        }
      }
    ],
  },
}


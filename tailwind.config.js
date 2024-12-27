import daisyUIThemes, { black } from 'daisyui/src/theming/themes';
import { TbKeyframes } from 'react-icons/tb';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        body : ['Poppins'],
      },
      animation:{
        pop : "pop 0.4s ease-out"
      },
      keyframes: {
        pop: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
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
          secondary : "rgb(62, 65, 68)",
        }
      }
    ],
  },
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'light':'#FCFFE7',
        'lightBlue':'#11698E',
        'darkBlue':'#19456B',
        'green':'#16C79A',
        'logoName':'#147AC9'
      },
      fontFamily:{
        'Poppins':'Poppins'
      }
    },
  },
  plugins: [],
}


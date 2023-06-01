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
        'logoName':'#147AC9',
        'editColor':'#FF731D',
        'deleteColor':'#EB455F'
      },
      fontFamily:{
        'Poppins':'Poppins'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '36px'
      },
      lineHeight: {
        '1.5': 1.5
      },
      boxShadow: {
        'el': '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)'
      },
      colors: {
        'dark': '#0a2540',
        bright: '#adbdcc',
        secondary: '#00d4ff'
      },
      fontSize: {
        '4.1xl': '38px',
        '1sm': 'calc(1rem - 1px)'
      },
      width: {
        '9/10': '90%'
      },
      height: {
        '1.5screen': '150vh',
        '1.2screen': '120vh',
        '1.1screen': '110vh',
      }
    },
    clipPath: {
      mypg: 'polygon(0 0, 100% 0, 100% 50%, 0% 100%)',
      half:"polygon(0 17%, 100% 2%, 100% 100%, 0% 100%)"
    }
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

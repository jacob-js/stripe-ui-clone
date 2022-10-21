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
        secondary: '#00d4ff',
        "gradient-color-one": "#a960ee",
        "gradient-color-two": "#ff333d",
        "gradient-color-three": "#90e0ff",
        "gradient-color-four": "#ffcb57",
      },
      fontSize: {
        '4.1xl': '38px',
        '1sm': 'calc(1rem - 1px)'
      },
      fontFamily: {
        'raleway': "'Raleway', sans-serif"
      },
      width: {
        '9/10': '90%',
        '66': '264px',
        '133': '533px',
        '1.7/4': '45%',
        '125': '31.3rem'
      },
      maxWidth: {
        '125': '31.3rem'
      },
      height: {
        '1.6screen': '160vh',
        '1.5screen': '150vh',
        '1.2screen': '120vh',
        '1.1screen': '110vh',
        '162.5': '650px',
        '133': '533px'
      },
      spacing: {
        '35': '142px',
        '34': '132px',
        '18': '72px',
        '16.5': '66px'
      },
      rotate: {
        '25': '25deg',
        '19': '19deg',
        '7': '7deg',
        '6': '6deg',
        '5': '5deg',
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

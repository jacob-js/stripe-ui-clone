/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {},
    clipPath: {
      mypg: 'polygon(0 0, 100% 0, 100% 50%, 0% 100%)'
    }
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

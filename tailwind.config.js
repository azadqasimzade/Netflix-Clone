/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        inputColor: '#8c8c8c',
        btnColor: '#e50914',
        bordercolor: '#333',
        borderB: '#282c2d',
        wrongText: '#e87c03'
      },
      backgroundColor: {
        inputBg: '#333',
        inputFocus: '#454545',
        buttonColor: 'rgba(51,51,51,0.5)',
        wrongBg: '#e87c03'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

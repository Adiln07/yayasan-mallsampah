/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kanit:['kanit'],
        roboto:['roboto']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


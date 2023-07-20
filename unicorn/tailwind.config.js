/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6A00',
        'menuSection': "#EFEFEF",
        'textGray': "#343434"

      },
      backgroundImage: {
        'banner': "url('/public/images/Banner.png')",
      },
      fontSize: {
        'menuTitle': '12.5px',
        "price": "11px"
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}


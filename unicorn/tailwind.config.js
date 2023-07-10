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

      },
      backgroundImage: {
        'banner': "url('/public/images/Banner.png')",
      }
    },
  },
  plugins: [],
}


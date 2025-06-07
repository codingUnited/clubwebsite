const colors = require('tailwindcss/colors')

module.exports = {
  content: [
  './core/templates/**/*.html',
  './core/templates/core/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        teal: colors.teal,
      },
    },
  },
  plugins: [],
}
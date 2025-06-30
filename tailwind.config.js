const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./templates/**/*.html",
    "./**/templates/**/*.html",
    "./core/**/*.html",
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
};

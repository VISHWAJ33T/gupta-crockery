/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: false, // Disable PurgeCSS entirely
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "xs": "475px",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        xs: "475px",
      },
      aspectRatio: {
        '720/400': '720 / 400',
        '1440/345': '1440 / 345',
      },
      display: ["group-hover"],
    },
  },
  plugins: [
    require('tailwindcss'),
  require('autoprefixer'),],
};

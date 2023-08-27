// tailwind.config.js
module.exports = {
  content: [
    ".//**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        xs: "475px",
      },
    },
  },
  plugins: [],
};

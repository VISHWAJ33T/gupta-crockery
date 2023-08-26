// tailwind.config.js
module.exports = {
  content: [
    ".//**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
    "./app/**/*.{js,ts,jsx,tsx,html}",
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

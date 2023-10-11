// tailwind.config.js
module.exports = {
  content: [
    // ".//**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
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

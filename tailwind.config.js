/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    // safelist: [
    // "sticky",
    // "w-full",
    // "top-0",
    // "z-[100]",
    // "justify-between",
    // "space-x-1",
    // "ml-4",
    // "mr-3",
    // ],
  },
  theme: {
    extend: {
      // screens: {
      //   "3xl": "1600px",
      //   xs: "475px",
      // },
    },
  },
  plugins: [],
};

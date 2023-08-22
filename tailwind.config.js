/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '3xl': '1600px',
        'xs': '475px',
      },
      content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        "./app/**/*.{js,ts,jsx,tsx}",
        './components/**/*.{js,ts,jsx,tsx}'
      ],
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        palette: {
          '100': '#f5f5f5',
          '200': '#e9f2ef',
          '300': '#c4c4c4',
          '500': '#d2f34c',
          '700': '#31795a',
          '800': '#254135',
          '900': '#0f1620',
        },
      },
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        gordita: ['Gordita', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

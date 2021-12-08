module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#454545'
        },
        green:{
          500: '#52B95E'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

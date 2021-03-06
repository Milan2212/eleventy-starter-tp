// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        body: ['Oswald'],
      },
      colors: {
        'regal-blue': '#243c5a',
        'bo-range': '#ff7f00',
        'background': '#788376',
        'background-other': '#A8B09D',
        'liens': '#ffc434',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

/* eslint no-unused-vars: 0*/
module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        gilroy: ['gilroy', 'Arial', 'ui-sans-serif', 'system-ui'],
        'open-sans': ['Open Sans', 'Arial', 'ui-sans-serif', 'system-ui']
      },
      transitionProperty: {
        top: 'top'
      },
      textColor: (theme) => ({
        ...theme('colors'),
        primary: '#0af584',
        secondary: '#474782',
        lightPurple: '#a597e5ff'
      }),
      backgroundImage: (theme) => ({
        train: "url('public/bg-train.jpg')",
        laptop: "url('public/bg-laptop.jpg')",
        pyramid: "url('public/bg-pyramid.jpg')"
      }),
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#0af584',
        secondary: '#474782',
        dark: '#333266',
        light: '#504796ff'
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        dGreen: '#00aa93',
        lGreen: '#00fb99',
        mGreen: '#00d495'
       }),
      gridTemplateColumns: {
        'sm-330': 'repeat(1, minmax(0, 330px))',
        'md-330': 'repeat(2, minmax(0, 330px))',
        'lg-330': 'repeat(3, minmax(0, 330px))'
      },
      gridTemplateRows: {
        'sm-330': 'repeat(1, minmax(0, 1fr))',
        'md-330': 'repeat(2, minmax(0, 1fr))',
        'lg-330': 'repeat(3, minmax(0, 1fr))'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}

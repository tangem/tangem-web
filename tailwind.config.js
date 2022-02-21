module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // screens: {
    //   'sm': '576px',
    //   'md': '768px',
    //   'lg': '992px',
    //   'xl': '1200px',
    //   '2xl': '1400px',
    // },
    extend: {
      fontSize: {
        '32px': '2rem',
        '120px': '7.5rem',
      },
      lineHeight: {
        '60px': '3.75rem',
        '85': '85%',
        '95': '95%',
        '120': '120%',
        '140': '140%',
      },
      margin: {
        '5px': '0.313rem',
        '32px': '2rem',
      },
      padding: {
        '5px': '0.313rem',
        '13px': '0.813rem',
      },
      borderRadius: {
        '18px': '1.125rem',
        '20px': '1.25rem',
      },
      maxWidth: {
        '580px': '36.438rem',
      },
    },
  },
  variants: {},
  // corePlugins: {
  //   container: false
  // },
  // plugins: [
  //   function ({ addComponents }) {
  //     addComponents({
  //       '.container': {
  //         maxWidth: '100%',
  //         '@screen sm': {
  //           maxWidth: '540px',
  //         },
  //         '@screen md': {
  //           maxWidth: '720px',
  //         },
  //         '@screen lg': {
  //           maxWidth: '960px',
  //         },
  //         '@screen xl': {
  //           maxWidth: '1140px',
  //         },
  //         '@screen 2xl': {
  //           maxWidth: '1300px',
  //         },
  //       }
  //     })
  //   }
  // ]
}

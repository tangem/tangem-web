module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1300px',
      '2xl': '1400px',
      '3xl': '1680px'
      
    //   'xs': {'min': '479px'},
    //   // => @media (min-width: 0px and max-width: 479px) { ... }

    //   'sm': {'min': '480px', 'max': '767px'},
    //   // => @media (min-width: 480px and max-width: 767px) { ... }

    //   'md': {'min': '768px', 'max': '1023px'},
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   '2xl': {'min': '1536px'},
    //   // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      colors: {
        'foreground': '#f8f9f9',
        'primary': '#090e13',
        'secondary': '#a6aaad',
      },
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '750px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1300px',
          },
          '@screen 2xl': {
            maxWidth: '1300px',
          },
          '@screen 3xl': {
            maxWidth: '1600px',
          },
        }
      })
    }
  ]
}

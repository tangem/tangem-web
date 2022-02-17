module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '120px': '7.5rem'
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
      },
      padding: {
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
  plugins: [],
}

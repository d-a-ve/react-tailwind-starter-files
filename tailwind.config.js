module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '479px' },
      xs: { max: '319px' },
    },
    extend: {},
  },
  plugins: [],
};

const fontSize = require('./assets/tailwind/fontSize')
const fontWeight = require('./assets/tailwind/fontWeight')
const sizing = require('./assets/tailwind/sizing')
const spacing = require('./assets/tailwind/spacing')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
      },
    },
    fontSize,
    fontWeight,
    height: sizing,
    width: sizing,
    maxHeight: sizing,
    maxWidth: sizing,
    minHeight: sizing,
    minWidth: sizing,
    padding: spacing,
    margin: spacing,
    negativeMargin: spacing,
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
}

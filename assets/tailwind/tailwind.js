const fontSize = require('./config/fontSize')
const fontWeight = require('./config/fontWeight')
const sizing = require('./config/sizing')
const spacing = require('./config/spacing')

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

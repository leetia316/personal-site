const rem = require('./assets/rem')
const sizing = require('./assets/sizing')
const spacing = require('./assets/spacing')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    fontSize: {
      14: rem(14),
      16: rem(16),
      18: rem(18),
      20: rem(20),
      24: rem(24),
      30: rem(30),
      36: rem(36),
      48: rem(48),
      60: rem(60),
      72: rem(72),
      96: rem(96),
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
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

const rem = value => `${value / 16}rem`

const fontSizes = [14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96]
const fontSize = {}
fontSizes.forEach((font) => {
  fontSize[font] = rem(font)
})

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const fontWeight = {}
fontWeights.forEach((font) => {
  fontWeight[font] = font
})

const percentSizes = [20, 25, 33, 40, 50, 60, 66, 75, 80, 100]
const percentSize = {}
percentSizes.forEach((percent) => {
  percentSize[`${percent}%`] = `${percent}%`
})

const remSizes = [16, 24, 32, 48, 64, 96, 128, 256, 320, 480, 640, 768, 960, 1280, 1440, 1600]
const remSize = {}
remSizes.forEach((size) => {
  remSize[size] = rem(size)
})

const remSpacings = [4, 8, 12, 16, 18, 20, 24, 32, 40, 48, 56, 64, 80, 96]
const remSpacing = {}
remSpacings.forEach((spacing) => {
  remSpacing[spacing] = rem(spacing)
})

const remSpacingsNegatives = remSpacings.map(spacing => `-${spacing}`)
const remSpacingNegative = {}
remSpacingsNegatives.forEach((spacing) => {
  remSpacingNegative[spacing] = rem(spacing)
})

const screenSizes = [320, 480, 640, 768, 960, 1024, 1280, 1366]
const screens = {}
screenSizes.forEach((screen) => {
  screens[screen] = screen
})

const viewportSizes = [25, 50, 75, 100]
const viewportSize = {}
viewportSizes.forEach((size) => {
  viewportSize[`${size}vw`] = `${size}vw`
  viewportSize[`${size}vh`] = `${size}vh`
})

const sizing = {
  ...percentSize,
  ...remSize,
  ...viewportSize,
}

const spacing = {
  0: '0',
  auto: 'auto',
  ...remSpacing,
}

const margin = {
  ...spacing,
  ...remSpacingNegative,
}

const config = {
  corePlugins: {
    container: false,
  },
  important: false,
  plugins: [],
  prefix: '',
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
    margin,
    maxHeight: sizing,
    maxWidth: sizing,
    minHeight: sizing,
    minWidth: sizing,
    padding: spacing,
    screens,
    width: sizing,
  },
}

module.exports = config

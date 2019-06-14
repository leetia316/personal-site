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

const remSizes = [16, 24, 32, 48, 64, 96, 128, 256, 320, 480, 640, 768, 960, 1280, 1440, 1600]
const remSize = {}
remSizes.forEach((size) => {
  remSize[size] = rem(size)
})

const percentSizes = [20, 25, 33, 40, 50, 60, 66, 75, 80, 100]
const percentSize = {}
percentSizes.forEach((percent) => {
  const toPercent = `${percent}%`
  percentSize[toPercent] = toPercent
})

const viewportSizes = [25, 50, 75, 100]
const viewportSize = {}
viewportSizes.forEach((size) => {
  viewportSize[`${size}vw`] = `${size}vw`
  viewportSize[`${size}vh`] = `${size}vh`
})

const sizing = {
  ...remSize,
  ...percentSize,
  ...viewportSize,
}

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

const spacing = {
  auto: 'auto',
  0: '0',
  ...remSpacing,
}

const margin = {
  ...spacing,
  ...remSpacingNegative,
}

const config = {
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
    margin,
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
}

module.exports = config

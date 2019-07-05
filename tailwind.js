// Colors
const colors = {
  'deep-blue': '#0068A7',
}
// Font Stuff
const fontSizes = [14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96]
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const percentSizes = [20, 25, 40, 50, 60, 75, 80, 100]
const percentSizesCalc = {
  '12%': 'calc(100% * (1/8))',
  '16%': 'calc(100% * (1/6))',
  '17%': 'calc(100% * (1/7))',
  '33%': 'calc(100% * (1/3))',
  '66%': 'calc(100% * (2/3))',
}
const remSizes = [16, 24, 32, 48, 64, 96, 128, 256, 320, 480, 640, 768, 960, 1080, 1280, 1440, 1600]
const remSpacings = [4, 8, 12, 16, 18, 20, 24, 32, 40, 48, 56, 64, 80, 96]
const viewportSizes = [25, 50, 75, 100]
const screenSizes = [320, 480, 640, 768, 960, 1024, 1280, 1366]

const rem = value => `${value / 16}rem`

const fontSize = {}
fontSizes.forEach((font) => {
  fontSize[font] = rem(font)
})

const fontWeight = {}
fontWeights.forEach((font) => {
  fontWeight[font] = font
})

const percentSize = {
  ...percentSizesCalc,
}
percentSizes.forEach((percent) => {
  percentSize[`${percent}%`] = `${percent}%`
})

const remSize = {}
remSizes.forEach((size) => {
  remSize[size] = rem(size)
})

const remSpacing = {}
remSpacings.forEach((spacing) => {
  remSpacing[spacing] = rem(spacing)
})

const remSpacingsNegatives = remSpacings.map(spacing => `-${spacing}`)
const remSpacingNegative = {}
remSpacingsNegatives.forEach((spacing) => {
  remSpacingNegative[spacing] = rem(spacing)
})

const screens = {}
screenSizes.forEach((screen) => {
  screens[`${screen}`] = `${screen}px`
})

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
        roboto: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      },
      colors: {
        ...colors,
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

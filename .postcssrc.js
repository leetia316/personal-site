const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './**/*.html',
    './**/*.vue',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})
const { MODE } = process.env
const isProd = MODE === 'prod'

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss')('./tailwind.js'),
    require('postcss-easy-media-query'),
    require('postcss-nested'),
    require('autoprefixer'),
    ...isProd
    ? [purgecss, require('postcss-clean')]
    : [],
  ],
}

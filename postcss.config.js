const autoprefixer = require('autoprefixer')
const clean = require('postcss-clean')
const easyimport = require('postcss-easy-import')
const easyMediaQuery = require('postcss-easy-media-query')
const nested = require('postcss-nested')
const purgeCSS = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const purgeConfig = {
  content: ['**/*.vue'],
  extractors: [
    {
      extractor: class TailwindExtractor {
        static extract(content) {
          return content.match(/[A-z0-9-:%/]+/g) || [];
        }
      },
      extensions: ['vue'],
    },
  ],
}

module.exports = ({ env }) => ({
  plugins: [
    easyimport(),
    tailwind('tailwind.js'),
    easyMediaQuery(),
    nested(),
    autoprefixer(),
    env === 'production' ? purgeCSS(purgeConfig) : false,
    env === 'production' ? clean() : false,
  ],
})

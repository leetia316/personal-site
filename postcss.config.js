const autoprefixer = require('autoprefixer')
const easyimport = require('postcss-easy-import')
const tailwind = require('tailwindcss')
const clean = require('postcss-clean')
const purgeCSS = require('@fullhuman/postcss-purgecss')

const purgeConfig = {
  content: ['**/*.vue'],
  extractors: [
    {
      extractor: class TailwindExtractor {
        static extract(content) {
          return content.match(/[A-z0-9-:%\/]+/g) || [];
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
    autoprefixer(),
    env === 'production' ? clean() : false,
    env === 'production' ? purgeCSS(purgeConfig) : false,
  ],
})

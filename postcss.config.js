const purgeConfig = {
  content: ['**/*.vue'],
  extractors: [
    {
      extractor: value => value.match(/[A-z0-9-:%/]+/g) || [],
      extensions: ['vue'],
    },
  ],
}

module.exports = ({ env }) => ({
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss')('tailwind.js'),
    require('postcss-easy-media-query'),
    require('postcss-nested'),
    require('autoprefixer'),
    env === 'production' ? require('@fullhuman/postcss-purgecss')(purgeConfig) : false,
    env === 'production' ? require('postcss-clean') : false,
  ],
})

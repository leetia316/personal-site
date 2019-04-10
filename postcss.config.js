const purge = {
  content: ['**/*.vue', '**/*.html'],
  extractors: [{
    extractor: value => value.match(/[A-z0-9-:%/]+/g) || [],
    extensions: ['vue', 'html'],
  }],
}

module.exports = ({ env }) => ({
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss')('tailwind.js'),
    require('postcss-easy-media-query'),
    require('postcss-nested'),
    require('autoprefixer'),
    env === 'production' ? require('@fullhuman/postcss-purgecss')(purge) : false,
    env === 'production' ? require('postcss-clean') : false,
  ],
})

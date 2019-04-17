require('dotenv').config()
const head = require('./head.config')

module.exports = {
  build: {
    extractCSS: true,
  },
  css: ['~/assets/main.css'],
  generate: { dir: '.build' },
  head,
  loading: false,
  mode: 'universal',
  modules: ['@nuxtjs/dotenv', 'nuxt-svg-loader'],
  plugins: ['~/plugins/globalComponents'],
}

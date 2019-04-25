require('dotenv').config()
const head = require('./head.config')

module.exports = {
  env: {
    API: process.env.WP_API,
  },
  build: {
    extractCSS: true,
  },
  css: ['~/assets/main.css'],
  generate: { dir: '.build' },
  head,
  loading: false,
  mode: 'universal',
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', 'nuxt-svg-loader'],
  plugins: ['~/plugins/globalComponents'],
}

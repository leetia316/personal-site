require('dotenv').config()

const apollo = require('./apollo')
const head = require('./head')

module.exports = {
  apollo,
  build: {
    extractCSS: true,
  },
  css: ['~/assets/main.css'],
  generate: { dir: '.build' },
  head,
  loading: false,
  mode: 'universal',
  modules: ['@nuxtjs/apollo', '@nuxtjs/dotenv', '@nuxtjs/pwa', 'nuxt-svg-loader'],
  plugins: ['~/plugins/globalComponents'],
}

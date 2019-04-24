require('dotenv').config()
const head = require('./head.config')

module.exports = {
  axios: {
    baseURL: process.env.API,
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

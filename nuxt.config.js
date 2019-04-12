require('dotenv').config()
const head = require('./head.config')

module.exports = {
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.ENDPOINT,
        httpLinkOptions: {
          headers: {
            'content-type': 'application/json',
          },
        },
      },
    },
  },
  build: {
    extractCSS: true,
  },
  css: ['~/assets/main.css'],
  generate: { dir: '.build' },
  head,
  loading: false,
  mode: 'universal',
  modules: ['@nuxtjs/apollo', '@nuxtjs/dotenv', 'nuxt-svg-loader'],
  plugins: ['~/plugins/globalComponents'],
}

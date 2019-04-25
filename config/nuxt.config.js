require('dotenv').config()
const head = require('./head.config')

module.exports = {
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GQL_ENDPOINT,
        httpLinkOptions: {
          headers: {
            token: process.env.GQL_TOKEN,
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
  modules: ['@nuxtjs/apollo', '@nuxtjs/dotenv', '@nuxtjs/pwa', 'nuxt-svg-loader'],
  plugins: ['~/plugins/globalComponents'],
}

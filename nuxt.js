import head from './head'

export default {
  build: {
    extractCSS: true,
  },
  css: ['~/assets/tailwind.css'],
  env: {
    API: process.env.API,
  },
  generate: {
    dir: '.build',
  },
  head,
  loading: false,
  mode: 'universal',
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
  ],
  plugins: [
    '~/plugins/globalComponents',
  ],
}

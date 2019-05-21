import head from './assets/config/head'

export default {
  build: {
    extractCSS: true,
  },
  css: ['~/assets/tailwind/tailwind.css'],
  env: {
    API: process.env.API,
  },
  generate: { dir: '.build' },
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

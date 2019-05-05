import head from './head.config'

export default {
  build: {
    extractCSS: true,
  },
  css: ['~/assets/main.css'],
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

import dotenv from 'dotenv'
import resolveConfig from 'tailwindcss/resolveConfig'
import head from './head'
import tailwindConfig from './tailwind'

dotenv.config()
const { API, TOKEN } = process.env
const tailwind = resolveConfig(tailwindConfig)

export default {
  build: {
    extractCSS: true,
  },
  css: ['~/assets/tailwind.css'],
  env: {
    API,
    tailwind,
    TOKEN,
  },
  generate: {
    dir: '.build',
  },
  head,
  loading: false,
  manifest: {
    theme_color: '#333333',
  },
  mode: 'universal',
  modules: [
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
  ],
  plugins: [
    '~/plugins/functionApi',
    '~/plugins/globalComponents',
  ],
}

import resolveConfig from 'tailwindcss/resolveConfig'

import head from './head'
import tailwind from './tailwind'

const config = resolveConfig(tailwind)

const { API, TOKEN } = process.env

export default {
  build: {
    extractCSS: true,
  },
  css: ['~/assets/tailwind.css'],
  env: {
    API,
    tailwind: config,
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
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
  ],
  plugins: [
    '~/plugins/functionApi',
    '~/plugins/globalComponents',
  ],
}

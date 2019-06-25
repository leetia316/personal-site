import resolveConfig from 'tailwindcss/resolveConfig'

import head from './head'
import tailwind from './tailwind'

const config = resolveConfig(tailwind)

export default {
  build: {
    extractCSS: true,
  },
  css: ['~/assets/tailwind.css'],
  env: {
    API: process.env.API,
    tailwind: config,
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
    '~/plugins/globalComponents',
  ],
}

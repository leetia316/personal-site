import resolveConfig from 'tailwindcss/resolveConfig'

import head from './head'
import tailwindConfig from './tailwind'
import postcss from './postcss'

const tailwind = resolveConfig(tailwindConfig)

export default {
  build: {
    extractCSS: true,
    postcss,
  },
  css: ['~/assets/tailwind.css'],
  env: {
    tailwind,
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
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
  ],
  plugins: [
    '~/plugins/functionApi',
    '~/plugins/globalComponents',
  ],
}

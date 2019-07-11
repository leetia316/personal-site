import dotenv from 'dotenv'
import resolveConfig from 'tailwindcss/resolveConfig'
import purge from '@fullhuman/postcss-purgecss'
import head from './head'
import tailwindConfig from './tailwind'

dotenv.config()
const { API, TOKEN } = process.env
const tailwind = resolveConfig(tailwindConfig)
const MODE = process.env.NODE_ENV === 'production'

purge({
  content: [
    './**/*.html',
    './**/*.vue',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/%]+/g) || [],
})

export default {
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-easy-import': true,
        tailwindcss: './tailwind.js',
        'postcss-nested': true,
        autoprefixer: true,
        ...MODE
          ? [purge, 'postcss-clean']
          : [],
      },
    },
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

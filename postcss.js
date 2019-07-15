import autoprefixer from 'autoprefixer'
import clean from 'postcss-clean'
import dotenv from 'dotenv'
import easyImport from 'postcss-easy-import'
import nested from 'postcss-nested'
import purge from '@fullhuman/postcss-purgecss'
import tailwind from 'tailwindcss'

dotenv.config()
const MODE = process.env.NODE_ENV === 'production'

const purgeCSS = purge({
  content: [
    './**/*.vue',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/%]+/g) || [],
})

const postcss = {
  plugins: [
    easyImport(),
    tailwind('./tailwind.js'),
    nested(),
    autoprefixer(),
    ...MODE ? [purgeCSS, clean()] : [],
  ],
}

export default postcss

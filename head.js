const appleIconSizes = [57, 60, 72, 76, 114, 120, 144, 152]
let appleIcons = []
appleIconSizes.forEach((size) => {
  appleIcons = [
    ...appleIcons,
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: `${size}x${size}`,
      href: `icons/apple-touch-icon-${size}x${size}.png`,
    },
  ]
})

const faviconSizes = [16, 32, 96, 128, 196]
let favicons = []
faviconSizes.forEach((size) => {
  favicons = [
    ...favicons,
    {
      rel: 'icon',
      sizes: `${size}x${size}`,
      href: `icons/favicon-${size}x${size}.png`,
    },
  ]
})

export default {
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,700i&display=swap',
    },
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
    ...favicons,
    ...appleIcons,
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'I am a Frontend Developer that builds highly pragmatic and performant websites.' },
    { name: 'application-name', content: 'Matt Waler\'s Portfolio Site.' },
    { name: 'msapplication-TileColor', content: '#FFFFFF' },
    { name: 'msapplication-config', content: '/browserconfig.xml' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
  ],
  script: [
    { crossorigin: 'anonymous', src: 'https://polyfill.io/v3/polyfill.js' },
    { src: '/scripts/cssua.js' },
  ],
  title: 'Hello!',
}

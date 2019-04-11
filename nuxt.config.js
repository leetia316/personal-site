require('dotenv').config()

module.exports = {
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.ENDPOINT,
        httpLinkOptions: {
          headers: {
            'content-type': 'application/json',
          },
        },
      },
    },
  },
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      });
    },
    extractCSS: true,
  },
  css: ['~/assets/main.css'],
  generate: { dir: '.build' },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: 'icons/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: 'icons/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: 'icons/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: 'icons/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: 'icons/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: 'icons/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: 'icons/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: 'icons/apple-touch-icon-152x152.png' },
      { rel: 'icon', href: 'icons/favicon-196x196.png', sizes: '196x196' },
      { rel: 'icon', href: 'icons/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', href: 'icons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', href: 'icons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', href: 'icons/favicon-128.png', sizes: '128x128' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:400,700' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'I am a Frontend Developer from Ohio. I build highly pragmatic and performant websites.',
      },
      { name: 'application-name', content: 'Matt Waler\'s Portfolio Site.' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
    title: 'Hello!',
  },
  loading: false,
  mode: 'universal',
  modules: ['@nuxtjs/apollo'],
  plugins: ['~/plugins/globalComponents'],
}

module.exports = {
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      })
    },
  },
  css: ['~/assets/main.css'],
  generate: {
    dir: '.build',
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An amazing site.' },
    ],
    title: 'Hello!',
  },
  loading: { color: '#fff' },
  mode: 'universal',
}

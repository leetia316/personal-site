const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  components: './components/**/[A-Z]*.vue',
  getExampleFilename(componentPath) {
    const newPath = componentPath.replace(/components/, 'styleguide')
    const newFile = newPath.replace(/vue/, 'md')
    return newFile
  },
  require: [
    path.join(__dirname, 'assets/main.css'),
  ],
  title: 'mattwaler.com styleguidist',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  },
}

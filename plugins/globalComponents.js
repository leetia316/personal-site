import Vue from 'vue'
import forEach from 'lodash/forEach'

const icons = require.context('~/components/icons', false, /[A-Z]\w+\.(svg)$/)
forEach(icons.keys(), (fileName) => {
  const iconConfig = icons(fileName)
  const iconName = fileName.split('/').pop().split('.')[0]
  Vue.component(iconName, iconConfig.default || iconConfig)
})

import Vue from 'vue'
import forEach from 'lodash/forEach'

const components = require.context('~/components', false, /[A-Z]\w+\.(vue)$/)
forEach(components.keys(), (fileName) => {
  const componentConfig = components(fileName)
  const componentName = fileName.split('/').pop().split('.')[0]
  Vue.component(componentName, componentConfig.default || componentConfig)
})

const icons = require.context('~/assets/icons', false, /[A-Z]\w+\.(svg)$/)
forEach(icons.keys(), (fileName) => {
  const iconConfig = icons(fileName)
  const iconName = fileName.split('/').pop().split('.')[0]
  Vue.component(iconName, iconConfig.default || iconConfig)
})

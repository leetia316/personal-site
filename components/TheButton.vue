<template>
  <component
    :is="element"
    :class="[defaultClasses, setColors, classes]"
    :target="newtab ? '_blank' : false"
    :to="element == 'nuxt-link' ? link : false"
    :href="element == 'a' ? link : false"
    :type="element == 'button' ? 'submit' : false">
    {{ text }}
  </component>
</template>

<script>
  import { computed } from 'vue-function-api'

  const defaultClasses = 'uppercase font-700 py-16 px-32 rounded tracking-wide trans whitespace-no-wrap'

  export default {
    name: 'TheButton',
    props: {
      classes: { type: String, default: '' },
      element: { type: String, default: 'nuxt-link' },
      link: { type: String, default: '' },
      newtab: { type: Boolean, default: false },
      secondary: { type: Boolean, default: false },
      text: { type: String, default: '' },
    },
    setup(props) {
      const isNewTab = computed(() => (props.newtab ? '_blank' : '_self'))
      const setColors = computed(() => (props.secondary
        ? 'bg-gray-200 hover:bg-gray-400'
        : 'bg-deep-blue text-white hover:bg-sea-green'
      ))
      return {
        defaultClasses,
        setColors,
        isNewTab,
      }
    },
  }
</script>

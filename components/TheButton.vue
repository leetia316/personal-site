<template>
  <nuxt-link
    class="inline-block uppercase font-700 py-16 px-32 rounded tracking-wide trans"
    :target="isNewTab"
    :class="[setColors, classes]"
    :to="link">
    {{ text }}
  </nuxt-link>
</template>

<script>
  import { computed } from 'vue-function-api'

  export default {
    name: 'TheButton',
    props: {
      classes: { type: String, default: '' },
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
        isNewTab,
        setColors,
      }
    },
  }
</script>

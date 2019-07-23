<template>
  <button
    v-if="isButton"
    type="submit"
    :class="[defaultClasses, setColors, classes]">
    {{ text }}
  </button>
  <nuxt-link
    v-else
    class="inline-block uppercase font-700 py-16 px-32 rounded tracking-wide trans"
    :target="isNewTab"
    :class="[defaultClasses, setColors, classes]"
    :to="link">
    {{ text }}
  </nuxt-link>
</template>

<script>
  import { computed } from 'vue-function-api'

  const defaultClasses = 'inline-block uppercase font-700 py-16 px-32 rounded tracking-wide trans'

  export default {
    name: 'TheButton',
    props: {
      classes: { type: String, default: '' },
      isButton: { type: Boolean, default: false },
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
        isNewTab,
        setColors,
      }
    },
  }
</script>

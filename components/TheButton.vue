<template>
  <button
    v-if="isButton"
    type="submit"
    :class="allColors">
    {{ text }}
  </button>
  <nuxt-link
    v-else
    :target="isNewTab"
    :class="allColors"
    :to="link">
    {{ text }}
  </nuxt-link>
</template>

<script>
  import { computed, value } from 'vue-function-api'

  const defaultClasses = 'uppercase font-700 py-16 px-32 rounded tracking-wide trans whitespace-no-wrap'

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
      const allColors = value([defaultClasses, setColors, props.classes])
      return {
        allColors,
        defaultClasses,
        setColors,
        isNewTab,
      }
    },
  }
</script>

<template>
  <nuxt-link
    class="inline-block uppercase font-700 py-16 px-32 rounded"
    :target="isNewTab"
    :class="[setColors, classes]"
    :to="link">
    {{ text }}
  </nuxt-link>
</template>

<script>
  export default {
    name: 'TheButton',
    props: {
      classes: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
      newtab: {
        type: Boolean,
        default: false,
      },
      secondary: {
        type: Boolean,
        default: false,
      },
      text: {
        type: String,
        default: '',
      },
    },
    computed: {
      isNewTab() {
        return this.newtab ? '_blank' : '_self'
      },
      setColors() {
        if (this.secondary) {
          return 'bg-gray-200'
        }
        return 'bg-deep-blue text-white'
      },
    },
  }
</script>

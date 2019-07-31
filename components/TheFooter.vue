<template>
  <footer>
    <TheWaves classes="text-black" />
    <div class="h-32 bg-black" />
  </footer>
</template>

<script>
  import { value } from 'vue-function-api'
  import TheWaves from '~/components/TheWaves.vue'

  export default {
    name: 'Header',
    components: { TheWaves },
    setup() {
      const links = value([
        { text: 'Contact', link: '/contact', newTab: false },
        { text: 'Github', link: 'https://github.com/mattwaler', newTab: true },
        { text: 'LinkedIn', link: 'https://www.linkedin.com/in/matthewwaler/', newTab: true },
        { text: 'Resume', link: '/MattWaler.pdf', newTab: true },
      ])
      return {
        links,
      }
    },
  }
</script>

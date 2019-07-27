<template>
  <footer>
    <div
      class="w-100% h-0 relative text-black"
      style="padding-bottom: calc(100% * 83/1366);">
      <Waves class="absolute w-100% h-100% top-0 left-0" />
      <div class="w-100% absolute bottom-0 bg-text-black h-2" />
    </div>
    <div class="h-32 bg-black" />
  </footer>
</template>

<script>
  import { value } from 'vue-function-api'

  export default {
    name: 'Header',
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

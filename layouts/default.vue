<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
  import TheHeader from '~/components/TheHeader.vue'

  export default {
    name: 'DefaultLayout',
    components: {
      TheHeader,
    },
    mounted: () => {
      const divs = Array.from(document.querySelectorAll('div'))
      divs.forEach(div => div.setAttribute('role', 'presentation'))
      document.querySelector('body').setAttribute('title', 'Page content')
    },
  }
</script>

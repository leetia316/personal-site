<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
  import { onMounted } from 'vue-function-api'
  import TheHeader from '~/components/TheHeader.vue'

  export default {
    name: 'DefaultLayout',
    components: {
      TheHeader,
    },
    setup() {
      onMounted(() => {
        const divs = Array.from(document.querySelectorAll('div'))
        divs.forEach(div => div.setAttribute('role', 'presentation'))
        document.querySelector('body').setAttribute('title', 'Page content')
      })
    },
  }
</script>

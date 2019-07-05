<template>
  <div
    role="presentation"
    class="text-gray-900 font-roboto">
    <TheHeader />
    <nuxt role="presentation" />
  </div>
</template>

<script>
  import TheHeader from '~/components/TheHeader.vue'

  export default {
    components: {
      TheHeader,
    },
    mounted: () => {
      const divs = [
        document.querySelector('#__nuxt'),
        document.querySelector('#__layout'),
      ]
      divs.forEach(div => div.setAttribute('role', 'presentation'))
      document.querySelector('body').setAttribute('title', 'Page content')
    },
  }
</script>

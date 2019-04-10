<template>
  <nuxt role="presentation" />
</template>

<script>
  export default {
    mounted() {
      const divs = [
        document.querySelector('#__nuxt'),
        document.querySelector('#__layout'),
      ]
      divs.forEach(div => div.setAttribute('role', 'presentation'))
    },
  }
</script>

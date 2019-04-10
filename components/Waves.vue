<template>
  <div
    class="inset-0 absolute z-0"
    aria-hidden="true">
    <div class="wrapper inset-0 absolute z-50" />
    <svg
      class="z-0 inset-0 absolute"
      width="100%"
      height="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="waves"
        d="" />
    </svg>
  </div>
</template>

<script>
  export default {
    mounted() {
      wavify(document.querySelector('#waves'), {
        height: 100,
        bones: 6,
        amplitude: 40,
        color: '#2C5282',
        speed: 0.25,
      })
    },
  }
</script>

<style lang="postcss" scoped>
   .wrapper {
    background: linear-gradient(to top, black, transparent 60%)
  }
</style>

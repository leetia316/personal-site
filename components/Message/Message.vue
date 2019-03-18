<script>
  export default {
    name: 'Message',
    props: {
      text: {
        type: String,
        default: 'world',
      },
    },
  }
</script>

<style lang="postcss" scoped src="./Message.pcss"></style>

<template>
  <div>
    <p class="scoped">
      Hello {{ text }}
    </p>
  </div>
</template>

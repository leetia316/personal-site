<template>
  <div>
    <p class="scoped">
      Hello {{ text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      text: {
        type: String,
        default: 'world',
        required: true,
      },
    },
  }
</script>

<style scoped src="./Message.css"></style>

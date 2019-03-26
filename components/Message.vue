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
      },
    },
  }
</script>

<style lang="postcss" scoped>
  .scoped {
    @screen sm {
      font-size: 28px;
    }
    @screen md {
      font-size: 56px;
    }
  }
</style>

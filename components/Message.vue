<template>
  <div>
    <p class="px-16">
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
        default: 'world.',

        required: false,
      },
    },
  }
</script>

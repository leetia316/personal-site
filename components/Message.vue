<template>
  <div>
    <p class="p-16 bg-black text-white inline-block">
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

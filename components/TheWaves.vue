<template>
  <div
    :class="['w-100% h-0 relative', classes]"
    style="padding-bottom: calc(100% * 83/1366);">
    <Waves class="absolute w-100% h-100% top-0 left-0" />
    <div class="w-100% absolute bottom-0 bg-text-black h-2" />
  </div>
</template>

<script>
  export default {
    name: 'TheWaves',
    props: {
      classes: { type: String, default: '' },
    },
  }
</script>

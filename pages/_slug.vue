<template>
  <div>
    <p>{{ fm.title }}</p>
    <div v-html="html" />
  </div>
</template>

<script>
  export default {
    name: 'Markdown',
    async asyncData ({ params }) {
      const md = await import(`~/content/${params.slug}.md`)
      return {
        fm: md.default.attributes,
        html: md.default.html,
      }
    },
  }
</script>

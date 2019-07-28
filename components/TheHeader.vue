<template>
  <div>
    <div class="w-100% h-16 bg-deep-blue" />
    <header class="flex flex-wrap justify-center items-center max-w-1080 mx-auto pt-48 px-24 768:justify-between">
      <a
        href="/"
        class="flex items-center">
        <Logo class="w-48 fill-current" />
        <div class="text-24 flex pl-8">
          <span>matt</span>
          <span class="font-700">waler</span>
        </div>
      </a>
      <nav class="text-gray-600 w-100% flex justify-around pt-32 768:pt-0 768:w-auto">
        <component
          :is="item.element"
          v-for="(item, index) in links"
          :key="index"
          :to="item.element == 'nuxt-link' ? item.link : false"
          :href="item.element == 'a' ? item.link : false"
          :target="item.element == 'a' ? '_blank' : false"
          class="font-700 uppercase tracking-wide trans hover:text-black 768:ml-32">
          {{ item.text }}
        </component>
      </nav>
    </header>
  </div>
</template>

<script>
  import { value } from 'vue-function-api'

  export default {
    name: 'Header',
    setup() {
      const links = value([
        { text: 'Contact', link: '/contact', element: 'nuxt-link' },
        { text: 'Github', link: 'https://github.com/mattwaler', element: 'a' },
        { text: 'LinkedIn', link: 'https://www.linkedin.com/in/matthewwaler/', element: 'a' },
        { text: 'Resume', link: '/MattWaler.pdf', element: 'a' },
      ])
      return {
        links,
      }
    },
  }
</script>

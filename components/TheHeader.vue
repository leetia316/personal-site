<template>
  <div role="presentation">
    <div
      role="presentation"
      class="w-100% h-16 bg-deep-blue" />
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
        <div
          v-for="(item, index) in links"
          :key="index"
          class="font-700 uppercase tracking-wide trans hover:text-black 768:ml-32">
          <a
            v-if="item.newTab"
            target="_blank"
            :href="item.link">
            {{ item.text }}
          </a>
          <nuxt-link
            v-else
            :to="item.link">
            {{ item.text }}
          </nuxt-link>
        </div>
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
        { text: 'Contact', link: '/contact', newTab: false },
        { text: 'Github', link: 'https://github.com/mattwaler', newTab: true },
        { text: 'LinkedIn', link: 'https://www.linkedin.com/in/matthewwaler/', newTab: true },
        { text: 'Resume', link: '/MattWaler.pdf', newTab: true },
      ])
      return {
        links,
      }
    },
  }
</script>

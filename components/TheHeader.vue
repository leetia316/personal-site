<template>
  <div role="presentation">
    <div
      role="presentation"
      class="w-100% h-16 bg-blue-700" />
    <header class="flex justify-between items-center max-w-1080 mx-auto pt-48 px-24">
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center">
        <Logo class="w-48 fill-current" />
        <div class="text-24 flex pl-8">
          <span class="">matt</span>
          <span class="font-700">waler</span>
        </div>
      </a>
      <!-- Nav Items -->
      <nav class="text-20 text-gray-600">
        <a
          v-for="item in links"
          :key="item.text"
          class="ml-48 hover:text-black"
          target="_blank"
          :href="item.link">{{ item.text }}</a>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        links: [
          { text: 'Github', link: 'https://github.com/mattwaler' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/in/matthewwaler/' },
          { text: 'Resume', link: '/MattWaler.pdf' },
        ],
      }
    },
  }
</script>

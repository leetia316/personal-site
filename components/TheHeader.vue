<template>
  <div role="presentation">
    <div
      role="presentation"
      class="w-100% h-16 bg-blue-700" />
    <header class="flex justify-between items-center max-w-1080 mx-auto py-48 px-16">
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
          class="px-12"
          target="_blank"
          href="https://github.com/mattwaler">github</a>
        <a
          class="px-12"
          target="_blank"
          href="https://www.linkedin.com/in/matthewwaler/">linkedin</a>
        <a
          class="px-12"
          target="_blank"
          href="/MattWaler.pdf">resume</a>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

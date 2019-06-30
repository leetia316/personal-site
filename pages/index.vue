<template>
  <div role="presentation">
    <div
      role="presentation"
      class="w-100% h-16 bg-blue-700" />
    <header class="flex justify-between items-center max-w-1080 mx-auto py-64">
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center">
        <Logo class="w-48" />
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
          href="https://github.com/mattwaler">Github</a>
        <a
          class="px-12"
          target="_blank"
          href="https://www.linkedin.com/in/matthewwaler/">LinkedIn</a>
        <a
          class="px-12"
          target="_blank"
          href="/MattWaler.pdf">Resume</a>
      </nav>
    </header>

    <!-- Hero -->
    <div class="flex items-center max-w-1080 mx-auto py-64">
      <div class="w-66% pr-24">
        <h1 class="text-48 leading-none pb-8">
          I'm a <b>pragmatic web developer</b> that wears many hats.
        </h1>
        <p class="pb-32">
          ... metaphorically. I look <span class="uppercase font-700 italic">really</span> bad in hats.
        </p>
        <a
          class="inline-block bg-blue-700 uppercase font-700 text-white py-16 px-32 rounded"
          href="">Contact Me</a>
        <a
          class="ml-24 inline-block bg-gray-200 uppercase font-700 py-16 px-32 rounded"
          href="">View my Resume</a>
        <div class="flex items-center pt-64">
          <Checked class="w-32 text-green-400 fill-current" />
          <p class="uppercase text-20 text-gray-600 tracking-wide pl-12">
            Currently available for freelance & consulting
          </p>
        </div>
      </div>
      <div class="w-33% pl-24">
        <img
          src="~/assets/HannahAndEmily.jpg"
          alt="My sisters, Hannah and Emily.">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    asyncData: async () => {
      console.log(process.client)
    },
    head: () => ({
      title: 'Matt Waler | Frontend Developer',
    }),
  }
</script>

<template>
  <div class="flex flex-col min-h-100vh justify-center items-center text-center">
    <img
      class="max-w-256 rounded-lg shadow-lg mb-24"
      src="~/assets/me.jpg"
      alt="A picture of my massive nose, and the rest of my face sorta."
    >
    <p class="text-36 font-headline font-700">
      Welcome to my website!
    </p>
    <p class="max-w-640 leading-tight">
      I am currently working on a rebuilding this website, as well as learning other technologies.
      Check out these links to see what's going on in my life.
    </p>
    <div class="">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/matthewwaler/"
      >
        <linkedin class="w-32 m-16 trans" />
      </a>
      <a
        target="_blank"
        href="https://github.com/mattwaler"
      >
        <github class="w-32 m-16 trans" />
      </a>
      <a
        target="_blank"
        href="https://dev.to/mattwaler"
      >
        <dev class="w-32 m-16 trans" />
      </a>
    </div>
  </div>
</template>

<script>
  import dev from '~/assets/icons/dev.svg'
  import github from '~/assets/icons/github.svg'
  import linkedin from '~/assets/icons/linkedin.svg'

  export default {
    name: 'Index',
    components: { dev, github, linkedin },
  }
</script>

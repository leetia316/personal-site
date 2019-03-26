<template>
  <div class="flex flex-col min-h-100vh justify-center sm:items-center sm:text-center p-24">
    <transition
      name="fade"
      mode="out-in">
      <p
        v-if="hero == 1"
        class="text-96 h-96 mb-24">
        👨🏻‍💻
      </p>
      <logo
        v-else
        class="w-96 h-96 fill-current mb-24" />
    </transition>
    <h1 class="text-36 font-headline font-700 mb-24">
      I design, develop, and deploy websites.
    </h1>
    <h2 class="max-w-640 leading-normal mb-24 text-16 font-400">
      I am a highly eager, competent, and pragmatic Frontend Developer that will never stop learning new technologies.
      Right now, I'm highly invested in Vue.js, PostCSS, and JAMstack methodologies.
      Take a look at my social profiles to see what I'm up to!
    </h2>
    <h3 class="pb-8 font-600">
      I am currently available for business opportunities!
    </h3>
    <a
      class="mb-24 underline"
      href="mailto:contact@mattwaler.com">
      Shoot me an email!
    </a>
    <div class="flex items-center">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/matthewwaler/">
        <linkedin class="w-32 mr-16 sm:m-16 trans" />
      </a>
      <a
        target="_blank"
        href="https://github.com/mattwaler">
        <github class="w-32 mr-16 sm:m-16 trans" />
      </a>
      <a
        target="_blank"
        href="https://dev.to/mattwaler">
        <dev class="w-32 mr-16 sm:m-16 trans" />
      </a>
    </div>
  </div>
</template>

<script>
  import dev from '~/assets/icons/dev.svg'
  import github from '~/assets/icons/github.svg'
  import linkedin from '~/assets/icons/linkedin.svg'
  import logo from '~/assets/icons/logo.svg'

  export default {
    name: 'Index',
    components: {
      dev, github, linkedin, logo,
    },
    head() {
      return {
        title: 'Matt Waler | Frontend Developer',
      }
    },
    data() {
      return {
        hero: 1,
      }
    },
    created() {
      this.swapHero()
    },
    methods: {
      swapHero() {
        if (this.hero === 1) {
          this.hero = 2
        } else {
          this.hero = 1
        }
        setTimeout(this.swapHero, 5000)
      },
    },
  }
</script>

<template>
  <div>
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="isLoaded"
        class="flex flex-col min-h-100vh justify-center sm:items-center sm:text-center p-24">
        <nuxt-link to="/contact">
          <logo class="w-96 h-96 fill-current mb-24" />
        </nuxt-link>
        <h1 class="text-36 font-headline font-700 mb-24">
          {{ data.headline }}
        </h1>
        <h2 class="max-w-640 leading-normal mb-24 text-16 font-400">
          {{ data.content }}
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
    </transition>
  </div>
</template>

<script>
  import dev from '~/assets/icons/dev.svg'
  import github from '~/assets/icons/github.svg'
  import linkedin from '~/assets/icons/linkedin.svg'
  import logo from '~/assets/icons/logo.svg'
  import axios from '~/plugins/axios'

  export default {
    name: 'Index',
    components: {
      dev, github, linkedin, logo,
    },
    data() {
      return {
        isLoaded: false,
      }
    },
    asyncData() {
      return axios({
        method: 'get',
        url: '/singletons',
        params: {
          slug: 'homepage',
        },
      })
        .then(res => ({ data: res.data[0].acf }))
    },
    head() {
      return {
        title: 'Matt Waler | Frontend Developer',
      }
    },
    mounted() {
      setTimeout(() => {
        this.isLoaded = true
      }, 250)
    },
  }
</script>

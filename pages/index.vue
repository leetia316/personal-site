<template>
  <div class="flex flex-col min-h-100vh md:h-100vh justify-center sm:items-center sm:text-center px-24">
    <Logo
      aria-hidden="true"
      class="w-96 h-96 fill-current mb-24" />
    <h1 class="text-36 font-headline font-700 mb-24">
      {{ headline }}
    </h1>
    <h2 class="max-w-640 leading-normal mb-24 text-16 font-400">
      {{ content }}
    </h2>
    <h3 class="pb-8 font-600">
      I am currently available for business opportunities!
    </h3>
    <a
      class="mb-24 underline"
      href="mailto:contact@mattwaler.com">
      Shoot me an email!
    </a>
    <div
      class="flex items-center"
      role="presentation">
      <a
        title="LinkedIn"
        target="_blank"
        href="https://www.linkedin.com/in/matthewwaler/">
        <LinkedIn class="w-32 mr-16 sm:m-16 trans" />
      </a>
      <a
        title="GitHub"
        target="_blank"
        href="https://github.com/mattwaler">
        <GitHub class="w-32 mr-16 sm:m-16 trans" />
      </a>
      <a
        title="Dev.to"
        target="_blank"
        href="https://dev.to/mattwaler">
        <Dev class="w-32 mr-16 sm:m-16 trans" />
      </a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Index',
    data() {
      return {
        headline: null,
        content: null,
      }
    },
    asyncData() {
      return axios.get('http://localhost:9000/fauna')
        .then(res => ({
          headline: res.data.headline,
          content: res.data.content,
        }))
    },
    head() {
      return {
        title: 'Matt Waler | Frontend Developer',
      }
    },
  }
</script>

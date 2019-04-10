<template>
  <div class="text-white flex flex-col min-h-100vh md:h-100vh justify-center sm:items-center sm:text-center px-24">
    <Logo
      aria-hidden="true"
      class="w-96 h-96 fill-current mb-24" />
    <h1
      class="text-36 font-headline font-700 mb-24">
      {{ res.headline }}
    </h1>
    <h2
      class="max-w-640 leading-normal mb-24 text-16 font-400">
      {{ res.content }}
    </h2>
    <h3
      class="pb-8 font-600">
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
        <LinkedIn
          class="w-32 mr-16 sm:m-16 trans" />
      </a>
      <a
        title="GitHub"
        target="_blank"
        href="https://github.com/mattwaler">
        <GitHub
          class="w-32 mr-16 sm:m-16 trans" />
      </a>
      <a
        title="Dev.to"
        target="_blank"
        href="https://dev.to/mattwaler">
        <Dev
          class="w-32 mr-16 sm:m-16 trans" />
      </a>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'Index',
    apollo: {
      res: {
        query: gql`{
          testing(where: { id: { _eq: 1 } }) {
            content
            headline
          }
        }`,
        update: res => res.testing[0],
      },
    },
    head() {
      return {
        title: 'Matt Waler | Frontend Developer',
      }
    },
  }
</script>

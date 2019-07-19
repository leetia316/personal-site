<template>
  <main class="flex flex-col">
    <!-- Hero Section -->
    <div class="flex flex-wrap-reverse items-center flex-grow max-w-1080 mx-auto py-48 px-24 768:py-96">
      <div class="w-100% 768:w-66% 768:pr-32">
        <h1
          class="text-36 768:text-48 leading-none pb-8 pt-24 768:pt-0"
          v-html="content.hero.headline" />
        <p
          class="pb-32"
          v-html="content.hero.subheadline" />
        <TheButton
          newtab
          link="/MattWaler.pdf"
          text="View my Resume" />
        <div class="flex items-center pt-64">
          <Checked class="w-32 text-sea-green fill-current" />
          <p class="uppercase text-20 text-gray-600 pl-12">
            Currently available for freelance & consulting
          </p>
        </div>
      </div>
      <div class="w-100% 768:w-33% 768:pl-32">
        <img
          class="w-66% mx-auto rounded-lg shadow-lg 768:w-100%"
          src="~/assets/sisters.jpg"
          alt="My sisters, Hannah and Emily.">
      </div>
    </div>

    <!-- Waves/Features Section -->
    <div class="w-100% relative">
      <Waves class="w-100%" />
      <div class="w-100% absolute bottom-0 bg-deep-blue h-2" />
    </div>
    <div class="bg-deep-blue w-100% text-white">
      <div class="max-w-1280 mx-auto py-36 px-24 flex flex-wrap">
        <article
          v-for="(item, index) in content.skills"
          :key="index"
          class="w-100% 960:w-33% p-24 flex">
          <component
            :is="item.icon"
            class="text-sea-green fill-current w-32 h-32 flex-none" />
          <div class="flex-1 pl-16">
            <h2 class="uppercase font-700 text-24 leading-none pb-16 pt-4">
              {{ item.headline }}
            </h2>
            <div v-html="item.paragraph" />
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
  import axios from 'axios'
  import TheButton from '~/components/TheButton.vue'

  const { API } = process.env
  const query = `
    query {
      homepageBy(id: "aG9tZXBhZ2U6NDU=") {
        homepageACFs {
          hero {
            headline,
            subheadline
          },
          skills {
            headline,
            icon,
            paragraph
          }
        }
      }
    }`

  export default {
    name: 'Index',
    components: { TheButton },
    async asyncData() {
      const { data } = await axios.post(API, { query })
      const content = data.data.homepageBy.homepageACFs
      return { content }
    },
    head: () => ({
      title: 'Matt Waler | Frontend Developer',
    }),
  }
</script>

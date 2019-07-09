<template>
  <main>
    <div class="flex flex-wrap-reverse items-center max-w-1080 mx-auto py-48 768:py-96 px-24">
      <div class="w-100% 768:w-66% 768:pr-24">
        <h1 class="text-36 768:text-48 leading-none pb-8 pt-24 768:pt-0">
          I'm a <b>pragmatic web developer</b> that wears many hats.
        </h1>
        <p class="pb-32">
          ...metaphorically. I look <span class="uppercase font-700 italic">really</span> bad in hats.
        </p>
        <TheButton
          link="/contact"
          text="Contact Me" />
        <TheButton
          secondary
          newtab
          link="/MattWaler.pdf"
          classes="ml-12"
          text="View my Resume" />
        <div class="flex items-center pt-64">
          <Checked class="w-32 text-sea-green fill-current" />
          <p class="uppercase text-20 text-gray-600 tracking-wide pl-12">
            Currently available for freelance & consulting
          </p>
        </div>
      </div>
      <div class="w-100% 768:w-33% pl-24">
        <img
          class="w-50% mx-auto 768:w-100% rounded-lg shadow-lg"
          src="~/assets/HannahAndEmily.jpg"
          alt="My sisters, Hannah and Emily.">
      </div>
    </div>
    <Waves class="w-100%" />
    <div class="bg-deep-blue w-100% text-white">
      <div class="max-w-1280 mx-auto py-36 px-24 flex flex-wrap">
        <div
          v-for="(item, index) in content"
          :key="index"
          class="w-100% 960:w-33% p-24 flex">
          <component
            :is="item.icon"
            class="text-sea-green fill-current w-32 h-32 flex-none" />
          <div class="flex-1 pl-16">
            <h2 class="uppercase tracking-wide font-700 text-24 leading-none pb-16">
              {{ item.headline }}
            </h2>
            <p class="font-300">
              {{ item.paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { value } from 'vue-function-api'
  import TheButton from '~/components/TheButton.vue'

  export default {
    name: 'Index',
    components: { TheButton },
    setup() {
      const content = value([
        {
          icon: 'Frontend',
          headline: 'Frontend Development',
          paragraph: 'I can turn any design into a web app. I prefer Vue.js and PostCSS, but know my way around Node, ES6, and plenty of other modern frontend tooling.',
        },
        {
          icon: 'Backend',
          headline: 'Backend Development',
          paragraph: 'I use modern backend solutions like Headless CMSs and Static Site Generation to deploy lean and secure builds to Global CDNs.',
        },
        {
          icon: 'Design',
          headline: 'Responsive Design & UX',
          paragraph: 'While it is not my primary focus, I can whip up  low-fidelity wireframes, and iterate them into full-fledged designs. I designed this very site!',
        },
      ])
      return {
        content,
      }
    },
    asyncData: async () => {
      console.log(process.client)
    },
    head: () => ({
      title: 'Matt Waler | Frontend Developer',
    }),
  }
</script>

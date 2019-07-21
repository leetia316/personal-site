<template>
  <main class="flex flex-col">
    <!-- Hero Section -->
    <div class="flex flex-wrap-reverse items-center flex-grow max-w-1080 mx-auto py-48 px-24 768:py-96">
      <div class="w-100% 768:w-66% 768:pr-32">
        <h1
          class="text-36 768:text-48 leading-none pb-8 pt-24 768:pt-0"
          v-html="hero.headline" />
        <p
          class="pb-32"
          v-html="hero.subheadline" />
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
          :src="hero.image"
          alt="My sisters, Hannah and Emily.">
      </div>
    </div>

    <!-- Waves -->
    <div class="w-100% relative">
      <Waves class="w-100%" />
      <div class="w-100% absolute bottom-0 bg-deep-blue h-2" />
    </div>

    <!-- Skills -->
    <div class="bg-deep-blue w-100% text-white pb-32 960:pb-48">
      <div class="max-w-1280 mx-auto py-36 px-24 flex flex-wrap">
        <article
          v-for="(item, index) in skills"
          :key="index"
          class="w-100% py-24 flex 960:px-24 960:w-33%">
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

    <!-- Hobbies Section -->
    <div class="w-100% px-24 py-48 960:py-96">
      <div class="max-w-1280 mx-auto text-center">
        <h2 class="leading-none text-36 960:text-48">
          "Is that <b><i>all</i></b> you do?"
        </h2>
        <p class="text-18 960:pb-96">
          Funny you should ask, I was just about to tell you.
        </p>
        <div class="flex flex-wrap 960:-mx-16">
          <article
            v-for="(item, index) in hobbies"
            :key="index"
            class="w-100% pt-96 960:w-33% 960:pt-0 960:px-16">
            <component
              :is="item.icon"
              class="960:h-128 1280:h-175 w-75% 960:w-auto m-auto" />
            <p class="pt-48 text-18">
              {{ item.text }}
            </p>
          </article>
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
    head: () => ({
      title: 'Matt Waler | Frontend Developer',
    }),
    setup() {
      const hero = value({
        headline: 'I\'m a <b>pragmatic web developer</b> who wears many hats.',
        subheadline: '... metaphorically speaking. I look <b><i>REALLY</b></i> bad in hats.',
        image: '/images/sisters.jpg',
      })
      const skills = value([
        { icon: 'Frontend', headline: 'Frontend Development', paragraph: 'I can turn any design into a web app. I prefer Vue.js and PostCSS, but know my way around Node, ES6, and plenty of other modern frontend tooling.' },
        { icon: 'Backend', headline: 'Backend Development', paragraph: 'I use modern backend solutions like Headless CMSs and Static Site Generation to deploy lean and secure builds to Global CDNs.' },
        { icon: 'Design', headline: 'Design & UX', paragraph: 'While it is not my primary focus, I can whip up low-fidelity wireframes, and iterate them into full-fledged designs. I designed this very site!' },
      ])
      const hobbies = value([
        { icon: 'Exercise', text: 'I repeatedly pick up and then lower down heavy objects to make my muscles slightly bigger.' },
        { icon: 'Party', text: 'I have been known to drink a brew or two, but I am far past my Ohio University glory days.' },
        { icon: 'Gaming', text: 'I have been playing competitive video games for as long as I can remember. I am currently hooked on Apex Legends.' },
      ])
      return {
        hero,
        skills,
        hobbies,
      }
    },
  }
</script>

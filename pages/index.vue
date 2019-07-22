<template>
  <main>
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
          <Checked class="w-32 h-32 flex-shrink-0 text-sea-green fill-current" />
          <p class="uppercase leading-snug text-20 text-gray-600 pl-12">
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
    <div
      class="w-100% h-0 relative"
      style="padding-bottom: calc(100% * 83/1366);">
      <Waves class="absolute w-100% h-100% top-0 left-0" />
      <div class="w-100% absolute bottom-0 bg-deep-blue h-2" />
    </div>

    <!-- Skills -->
    <div class="bg-deep-blue w-100% text-white pb-24 pt-16 960:pb-48">
      <div class="max-w-1280 mx-auto py-36 px-16 flex flex-wrap 960-mx-16">
        <article
          v-for="(item, index) in skills"
          :key="index"
          class="w-100% py-24 flex 960:px-16 960:w-33%">
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
            <p
              class="pt-48 text-18"
              v-html="item.text" />
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import TheButton from '~/components/TheButton.vue'
  import { hero, skills, hobbies } from '~/content/index'

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
        { icon: 'Frontend', headline: 'Frontend Development', paragraph: 'I can turn any design into a web app. I prefer <b>Vue.js</b> and <b>PostCSS</b>, but know my way around <b>Node</b>, <b>Webpack</b>, and plenty of other modern frontend tooling.' },
        { icon: 'Backend', headline: 'Backend Development', paragraph: 'I use modern backend solutions like <b>Headless CMSs</b> and <b>Static Site Generation</b> to deploy lean and secure builds to Global CDNs.' },
        { icon: 'Design', headline: 'Design & UX', paragraph: 'While it is not my primary focus, I can whip up low-fidelity <b>wireframes</b>, and iterate them into full-fledged <b>designs</b>. I designed this very site!' },
      ])
      const hobbies = value([
        { icon: 'Exercise', text: 'I repeatedly pick up and put down heavy objects to make my muscles <b>slightly</b> bigger.' },
        { icon: 'Party', text: 'I have been known to drink a brew or two, but I am far past my <b>Ohio University</b> glory days.' },
        { icon: 'Gaming', text: 'I have been a competitive gamer since birth. I am currently hooked on <b>Apex Legends</b>.' },
      ])
      return {
        hero, skills, hobbies,
      }
    },
  }
</script>

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
          classes="ml-24"
          text="View my Resume" />
        <div class="flex items-center pt-64">
          <Checked class="w-32 text-green-400 fill-current" />
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
  </main>
</template>

<script>
  import TheButton from '~/components/TheButton.vue'

  export default {
    name: 'Index',
    components: { TheButton },
    asyncData: async () => {
      console.log(process.client)
    },
    head: () => ({
      title: 'Matt Waler | Frontend Developer',
    }),
  }
</script>

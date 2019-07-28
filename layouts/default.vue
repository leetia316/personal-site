<template>
  <div class="flex flex-col min-h-100vh">
    <TheHeader />
    <nuxt class="flex-grow" />
    <TheFooter />
  </div>
</template>

<script>
  import { onMounted } from 'vue-function-api'
  import { mapMutations, mapState } from 'vuex'

  import TheHeader from '~/components/TheHeader.vue'
  import TheFooter from '~/components/TheFooter.vue'

  export default {
    name: 'DefaultLayout',
    components: {
      TheHeader, TheFooter,
    },
    computed: mapState({
      isOpen: state => state.mobileMenu.isOpen,
    }),
    methods: {
      ...mapMutations({
        toggleMenu: 'mobileMenu/toggle',
      }),
    },
    setup() {
      onMounted(() => {
        const divs = Array.from(document.querySelectorAll('div'))
        divs.forEach(div => div.setAttribute('role', 'presentation'))
        document.querySelector('body').setAttribute('title', 'Page content')
      })
    },
  }
</script>

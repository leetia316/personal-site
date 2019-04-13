<template>
  <div class="w-100% h-100vh flex flex-col justify-center items-center">
    <input
      v-model="input"
      placeholder="Enter password"
      class="border px-24 py-8 text-center"
      type="text"
      @keyup.enter="submit">
    <button
      class="border px-24 py-8 bg-white mt-32"
      @click="submit">
      Send
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        input: null,
      }
    },
    methods: {
      redirect() {
        if (this.$store.state.auth.config.auth) {
          return this.$router.push('/cms')
        } return null
      },
      submit() {
        axios.get(`${process.env.AUTH}/auth`, {
          params: {
            pw: this.input,
          },
        })
          .then(res => this.authenticate(res.data))
          .then(() => this.redirect())
      },
      ...mapMutations({
        authenticate: 'auth/authenticate',
      }),
    },
  }
</script>

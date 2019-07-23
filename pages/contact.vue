<template>
  <div class="max-w-1280 mx-auto w-100% px-24 py-48 flex flex-col justify-center items-center">
    <img
      class="rounded-full shadow max-w-256"
      src="/images/me.jpg"
      alt="">
    <h1 class="text-36 font-700 pt-16">
      Let's get in touch.
    </h1>
    <form
      class="flex flex-wrap justify-center"
      name="contact"
      method="POST"
      data-netlify="true">
      <label class="hidden">Don’t fill this out if you're human!
        <input name="bot-field">
      </label>
      <label class="w-100% 640:w-50% p-16">Name
        <input
          class="w-100% border rounded px-12 py-8"
          type="text"
          name="name">
      </label>
      <label class="w-100% 640:w-50% p-16">Email
        <input
          class="w-100% border rounded px-12 py-8"
          type="email"
          name="email">
      </label>
      <label class="w-100% p-16">Message
        <textarea
          class="w-100% border rounded px-12 py-8 h-128"
          name="message" />
      </label>
      <TheButton
        isButton
        text="Send" />
    </form>
  </div>
</template>

<script>
  import TheButton from '~/components/TheButton.vue'

  export default {
    name: 'About',
    components: { TheButton },
  }
</script>

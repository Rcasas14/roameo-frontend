<template>
  <section class="underconstruction py-16 lg:py-24 font-plus-jakarta overflow-hidden ">
    <div class="flex flex-col lg:flex-row justify-center items-center max-w-6xl mx-auto px-6 gap-10 text-center lg:text-left lg:my-10">
      <div class="understuction-image w-full lg:w-1/2">
        <img
          :src="underconstuctionImage"
          alt="Under Construction"
          class="w-full h-auto rounded-2xl"
        />
      </div>
      <div class="content w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
        <h1 class="underconstruction-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
          Coming Soon!
        </h1>
        <p class="underconstruction-text text-gray-600 text-base sm:text-lg max-w-md mb-6">
          We're working hard to bring you something amazing. Please check back soon!
        </p>
        <router-link
          to="/"
          class="inline-block bg-[#0088FF] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#0088FF]/80 transition-all duration-300"
        >
          Home
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'UnderConstruction',
  mixins: [useMotion],
  data() {
    return {
      underconstuctionImage: new URL('@/assets/under-construction.jpg', import.meta.url).href,
    }
  },
}
</script>

<style scoped>
</style>

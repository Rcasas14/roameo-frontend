<template>
  <section class="go-next-section relative bg-cover bg-center py-16 lg:py-24 font-plus-jakarta overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Content -->
    <div class="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center max-h-[37.5rem]">
        <div v-motion="getScrollFadeInMotion(900)" class="bg-white/55 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 max-w-7xl w-full mx-auto text-center shadow-2xl">
          <!-- Heading -->
          <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Not Sure Where to Go Next? Let Our AI Curate Your Adventure.
          </h2>

          <!-- Subtitle -->
          <p class="text-lg sm:text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover personalized travel picks based on your vibe, preferences, and dream experiences.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              @click="getAIRecommendations"
              class="bg-[#1A94FF] hover:bg-[#1580e6] text-white font-semibold py-4 px-14 rounded-[20px] transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#1A94FF] focus:ring-offset-2 shadow-lg min-w-[200px] cursor-pointer"
            >
              Get AI Recommendations
            </button>

            <button
              @click="viewAllDestinations"
              class="bg-white/70 hover:bg-white/10 text-[#1580e6] hover:text-white font-semibold py-4 px-14 rounded-[20px] border-2 border-white/70 hover:border-[#1580e6] transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 min-w-[200px] cursor-pointer"
            >
              View All Destinations
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'GoNextSection',
  mixins: [ useMotion ],
  data() {
    return {
      backgroundImage: new URL('@/assets/gonext-image-bg.jpg', import.meta.url).href,
    }
  },
  methods: {
    getAIRecommendations() {
      console.log('Getting AI recommendations...');
      // Add AI recommendations logic here
    },
    viewAllDestinations() {
      console.log('Viewing all destinations...');
      // Add view all destinations logic here
    }
  }
}
</script>

<style scoped>
.go-next-section {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;
}

/* Mobile optimizations */
@media (max-width: 639px) {
  .go-next-section {
    padding: 3rem 0;
  }

  .go-next-section .bg-white\/90 {
    margin: 1rem;
    padding: 2rem;
  }

  .go-next-section h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  .go-next-section p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}

/* SM devices and up */
@media (min-width: 640px) {
  .go-next-section .bg-white\/90 {
    margin: 2rem;
  }
}

/* MD devices and up */
@media (min-width: 768px) {
  .go-next-section {
    min-height: 600px;
  }
}

/* LG devices and up */
@media (min-width: 1024px) {
  .go-next-section {
    min-height: 700px;
  }

  .go-next-section .bg-white\/90:hover {
    background-color: rgba(255, 255, 255, 0.95);
  }
}

/* Touch-friendly buttons on mobile */
@media (max-width: 1023px) {
  .go-next-section button {
    min-height: 48px;
    width: 100%;
    max-width: 280px;
  }
}

/* Desktop button hover effects */
@media (min-width: 1024px) {
  .go-next-section button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}
</style>
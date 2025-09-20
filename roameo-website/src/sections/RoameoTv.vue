<template>
  <section class="roameo-tv-section relative bg-cover bg-center py-16 lg:py-24 font-plus-jakarta overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-start lg:justify-start items-center min-h-[500px] lg:min-h-[600px]">
        <!-- Content Card -->
        <div v-motion="getScrollFadeInMotion(900)" class="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 max-w-lg lg:max-w-2xl shadow-2xl transition-all duration-300 hover:bg-white/90">
          <!-- Logo and Title -->
          <div class="flex items-center gap-3 mb-6">
            <div class="flex-shrink-0">
              <img
                :src="roameoLogo"
                alt="Roameo Logo"
                class="md:w-full md:h-full w-46"
              >
            </div>
            <h2 class="text-[16px] sm:text-2xl lg:text-4xl font-bold text-[#FF3897]">TV</h2>
          </div>

          <!-- Tagline -->
          <p class="text-base sm:text-lg font-semibold text-gray-900 mb-4">
            From vlogs to visual deep dives, we've got the travel tea on tape.
          </p>

          <!-- Description -->
          <p class="text-sm sm:text-base text-gray-700 mb-8 leading-relaxed">
            Whether you're scouting your next destination or just living vicariously, Roameo TV brings the vibes — real stories, real travelers, and ridiculously good B-roll. Think travel channel, but with better taste and more glitter.
          </p>

          <!-- CTA Button -->
          <button
            @click="watchNow"
            class="bg-[#0088FF] hover:bg-[#1580e6] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0088FF] focus:ring-offset-2 cursor-pointer w-full sm:w-auto"
          >
            Watch now!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'RoameoTv',
  mixins: [ useMotion ],
  data() {
    return {
      backgroundImage: new URL('@/assets/roameo-tv-bg.jpg', import.meta.url).href,
      roameoLogo: new URL('@/assets/roameo-logo-custom.svg', import.meta.url).href,
    }
  },
  methods: {
    watchNow() {
      console.log('Opening Roameo TV...');
      // Add watch now logic here - could open modal, navigate to TV section, etc.
    }
  }
}
</script>

<style scoped>
.roameo-tv-section {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;
}

/* Mobile optimizations */
@media (max-width: 639px) {
  .roameo-tv-section {
    padding: 3rem 0;
    min-height: 450px;
  }

  .roameo-tv-section .bg-white\/90 {
    margin: 1rem;
    padding: 1.5rem;
  }

  .roameo-tv-section h2 {
    font-size: 1.75rem;
    line-height: 1.2;
  }

  .roameo-tv-section .flex.items-center.gap-3 {
    gap: 0.5rem;
  }

  .roameo-tv-section button {
    width: 100%;
    min-height: 48px;
    padding: 0.875rem 1.5rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  .roameo-tv-section {
    min-height: 500px;
  }

  .roameo-tv-section .bg-white\/90 {
    margin: 1.5rem;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .roameo-tv-section {
    padding: 4rem 0;
    min-height: 550px;
  }

  .roameo-tv-section .bg-white\/90 {
    margin: 2rem;
    max-width: 32rem;
  }

  .roameo-tv-section button {
    width: auto;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .roameo-tv-section {
    min-height: 600px;
  }

  .roameo-tv-section .bg-white\/90 {
    max-width: 36rem;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .roameo-tv-section {
    min-height: 650px;
    background-attachment: fixed;
  }

  .roameo-tv-section .bg-white\/90:hover {
    background-color: rgba(255, 255, 255, 0.98);
    transform: translateY(-4px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  .roameo-tv-section button:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 25px rgba(26, 148, 255, 0.4);
  }
}

/* XL devices - 1280px+ */
@media (min-width: 1280px) {
  .roameo-tv-section {
    min-height: 700px;
  }

  .roameo-tv-section .bg-white\/90 {
    max-width: 42rem;
  }
}

/* 2XL devices - 1536px+ */
@media (min-width: 1536px) {
  .roameo-tv-section {
    min-height: 750px;
  }
}

/* Touch-friendly interactions on mobile */
@media (max-width: 1023px) {
  .roameo-tv-section .bg-white\/90 {
    touch-action: manipulation;
  }

  .roameo-tv-section button {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
}

/* Ensure proper spacing and responsive text */
.roameo-tv-section .flex.items-center.gap-3 img {
  transition: transform 0.3s ease;
}

@media (min-width: 1024px) {
  .roameo-tv-section .flex.items-center.gap-3:hover img {
    transform: rotate(5deg) scale(1.1);
  }
}

/* Background positioning for different screen sizes */
@media (max-width: 767px) {
  .roameo-tv-section {
    background-position: center right;
  }
}

@media (min-width: 768px) {
  .roameo-tv-section {
    background-position: center center;
  }
}

@media (min-width: 1024px) {
  .roameo-tv-section {
    background-position: center center;
    background-attachment: fixed;
  }
}

/* Content card positioning */
@media (max-width: 1023px) {
  .roameo-tv-section .flex.justify-start {
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .roameo-tv-section .flex.justify-start {
    justify-content: flex-start;
  }
}
</style>

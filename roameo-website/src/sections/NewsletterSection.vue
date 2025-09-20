<template>
  <section class="newsletter-section relative bg-cover bg-center py-16 lg:py-24 font-plus-jakarta overflow-hidden m-2 md:m-10 lg:m-16 rounded-[20px]">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover "
      :style="{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'right bottom 26%' }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-start lg:justify-start items-center min-h-[600px] lg:min-h-[700px]">
        <!-- Content Card -->
        <div class="bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 max-w-lg lg:max-w-2xl shadow-2xl transition-all duration-300 hover:bg-white/90">
          <!-- Main Heading -->
          <h2 v-motion="getScrollSlideUpMotionBounce(330, 60)" class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Join Our Newsletter!
          </h2>

          <!-- Description -->
          <p v-motion="getScrollSlideUpMotionBounce(330, 60)" class="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
            From unforgettable stays to smooth bookings, discover why Roameo is the top choice for curious, confident explorers around the world.
          </p>

          <!-- Social Proof Badge -->
          <div v-motion="getScrollSlideUpMotionBounce(330, 60)" class="bg-white/40 backdrop-blur-sm rounded-full px-3 py-1.5 mb-6 inline-flex items-center gap-2 w-full">
            <div class="flex -space-x-1.5">
              <img
                  v-for="avatar in 3"
                  :key="avatar"
                  :src="avatarIcon"
                  alt="People"
                  class="w-6 h-6 ">
            </div>
            <span class="text-xs text-gray-700 font-medium">247 people joined today!</span>
          </div>

          <!-- Email Subscription Form -->
          <div v-motion="getScrollSlideUpMotionBounce(330, 60)" class="space-y-4 mb-6">
            <div class="flex flex-col sm:flex-row gap-3">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0088FF] focus:border-transparent bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500"
              >
              <button
                @click="subscribe"
                :disabled="!isValidEmail"
                class="bg-[#0088FF] hover:bg-[#1580e6] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0088FF] focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>

          <!-- Newsletter Benefits -->
          <div v-motion="getScrollSlideUpMotionBounce(330, 60)" class="space-y-4">
            <!-- Stay in the Know -->
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <img :src="documentIcon" alt="Stay in the Know" class="w-5 h-5" :style="{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(90%) saturate(3493%) hue-rotate(328deg) brightness(94%) contrast(102%)' }">
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Stay in the Know</h4>
                <p class="text-gray-900 text-xs sm:text-sm leading-relaxed">
                  Get the latest travel guides, destination tips, and insider stories — delivered straight to your inbox.
                </p>
              </div>
            </div>

            <!-- Exclusive Deals -->
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <img :src="heartIcon" alt="Exclusive Deals" class="w-5 h-5" :style="{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(90%) saturate(3493%) hue-rotate(328deg) brightness(94%) contrast(102%)' }">
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Exclusive Deals</h4>
                <p class="text-gray-900 text-xs sm:text-sm leading-relaxed">
                  Be the first to access flight promos, hotel discounts, and curated experiences you won't find anywhere else.
                </p>
              </div>
            </div>

            <!-- Travel with Pride & Purpose -->
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <img :src="planeIcon" alt="Travel with Pride & Purpose" class="w-5 h-5" :style="{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(90%) saturate(3493%) hue-rotate(328deg) brightness(94%) contrast(102%)' }">
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Travel with Pride & Purpose</h4>
                <p class="text-gray-900 text-xs sm:text-sm leading-relaxed">
                  Discover inclusive destinations, community picks, and stories that celebrate every kind of traveler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'NewsletterSection',
  mixins: [ useMotion ],
  data() {
    return {
      backgroundImage: new URL('@/assets/newsletter-bg.jpg', import.meta.url).href,
      heartIcon: new URL('@/assets/heart-icon.svg', import.meta.url).href,
      documentIcon: new URL('@/assets/document-icon.svg', import.meta.url).href,
      planeIcon: new URL('@/assets/plane-icon-custom.svg', import.meta.url).href,
      avatarIcon: new URL('@/assets/avatar-icon.svg', import.meta.url).href,
      email: ''
    }
  },
  computed: {
    isValidEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(this.email)
    }
  },
  methods: {
    subscribe() {
      if (this.isValidEmail) {
        console.log('Subscribing email:', this.email)
        // Add newsletter subscription logic here
        // Could integrate with email service like Mailchimp, ConvertKit, etc.

        // Reset form after successful subscription
        this.email = ''

        // You could show a success message here
        alert('Thank you for subscribing!')
      }
    }
  }
}
</script>

<style scoped>
.newsletter-section {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
}

/* Mobile optimizations */
@media (max-width: 639px) {
  .newsletter-section {
    padding: 3rem 0;
    min-height: 450px;
  }

  .newsletter-section .bg-white\/85 {
    margin: 1rem;
    padding: 1.5rem;
  }

  .newsletter-section h2 {
    font-size: 1.75rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .newsletter-section .space-y-4 > * + * {
    margin-top: 0.75rem;
  }

  .newsletter-section input {
    width: 100%;
    min-height: 48px;
  }

  .newsletter-section button {
    width: 100%;
    min-height: 48px;
    padding: 0.875rem 1.5rem;
  }

  .newsletter-section .flex.items-start.gap-3 {
    gap: 0.5rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  .newsletter-section {
    min-height: 500px;
  }

  .newsletter-section .bg-white\/85 {
    margin: 1.5rem;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .newsletter-section {
    padding: 4rem 0;
    min-height: 550px;
  }

  .newsletter-section .bg-white\/85 {
    margin: 2rem;
    max-width: 32rem;
  }

  .newsletter-section .flex-col.sm\\:flex-row {
    flex-direction: row;
  }

  .newsletter-section button {
    width: auto;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .newsletter-section {
    min-height: 600px;
  }

  .newsletter-section .bg-white\/85 {
    max-width: 36rem;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .newsletter-section {
    min-height: 650px;
    background-attachment: fixed;
  }

  .newsletter-section .bg-white\/85:hover {
    background-color: rgba(255, 255, 255, 0.95);
    transform: translateY(-4px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  .newsletter-section button:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 25px rgba(26, 148, 255, 0.4);
  }
}

/* XL devices - 1280px+ */
@media (min-width: 1280px) {
  .newsletter-section {
    min-height: 700px;

  }

  .newsletter-section .bg-white\/85 {
    max-width: 42rem;
  }
}

/* 2XL devices - 1536px+ */
@media (min-width: 1536px) {
  .newsletter-section {
    min-height: 750px;
  }
}

/* Touch-friendly interactions on mobile */
@media (max-width: 1023px) {
  .newsletter-section .bg-white\/85 {
    touch-action: manipulation;
  }

  .newsletter-section button {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }

  .newsletter-section input {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
}

/* Background positioning for different screen sizes */
@media (max-width: 767px) {
  .newsletter-section {
    background-position: center right;
  }
}

@media (min-width: 768px) {
  .newsletter-section {
    background-position: center center;
  }
}

@media (min-width: 1024px) {
  .newsletter-section {
    background-position: center center;
    background-attachment: fixed;
  }
}

/* Content card positioning */
@media (max-width: 1023px) {
  .newsletter-section .flex.justify-start {
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .newsletter-section .flex.justify-start {
    justify-content: flex-start;
  }
}

/* Email input focus styles */
.newsletter-section input:focus {
  box-shadow: 0 0 0 3px rgba(26, 148, 255, 0.1);
}

/* Social proof badge styling */
.newsletter-section .bg-white\/60 {
  backdrop-filter: blur(8px);
}

/* Benefit icons styling */
.newsletter-section .bg-pink-100 {
  background: linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%);
}

/* Form validation styles */
.newsletter-section input:invalid {
  border-color: #ef4444;
}

/* .newsletter-section input:valid {
  border-color: #22c55e;
} */

/* Disabled button styles */
.newsletter-section button:disabled {
  opacity: 0.6;
  transform: none;
}

.newsletter-section button:disabled:hover {
  transform: none;
  box-shadow: none;
}
</style>

<template>
  <section class="travel-journey-section relative bg-white py-16 lg:py-24 font-plus-jakarta overflow-hidden">
    <!-- Content -->
    <div class=" max-w-[1660px] 2xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="content lg:grid lg:grid-cols-3 gap-8 lg:gap-16 flex items-start justify-center">

        <!-- Left Side - Vertical Image Carousel -->
        <div class="order-2 lg:order-1 hidden lg:flex lg:items-center lg:justify-end">
          <div class="max-w-[350px] h-[1000px] overflow-hidden">
            <swiper
              :modules="swiperModules"
              :direction="'vertical'"
              :slides-per-view="4"
              :space-between="20"
              :autoplay="{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
              }"
              :speed="6000"
              :loop="true"
              :allow-touch-move="false"
              class="gallery-swiper h-full"
            >
              <swiper-slide
                v-for="(image, index) in galleryImages"
                :key="index"
              >
                <div class="rounded-2xl overflow-hidden h-58 w-auto shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-xl group">
                  <img
                    class="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                    :src="image.src"
                    :alt="image.alt"
                  >
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <!-- Right Side - Content -->
        <div class="main-bg order-1 lg:order-2 text-center lg:text-left lg:col-span-2 p-4 md:p-10 rounded-[20px] md:max-w-[720px] lg:max-w-full" :style="{backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed'}">
          <!-- Badge -->
          <div v-motion="getScrollSlideUpMotion(200)" class="flex flex-col items-center justify-center mb-6">
            <span class="bg-[#FFE759] text-black text-sm font-semibold px-4 py-2 rounded-full">
              How Our Process Works
            </span>
          </div>

          <!-- Main Heading -->
          <h2 v-motion="getScrollSlideUpMotionBounce(200)" class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-12 leading-tight text-center">
            <span class="text-[#E91E63]">Top Travel Journey</span><br>
            <span class="text-gray-900">in 3 Simple Steps</span>
          </h2>

          <!-- Journey Steps -->
          <div v-motion="getScrollSlideUpMotionBounce(150)" class="space-y-8 ">
            <!-- Step 1 -->
            <div
              v-for="(step, index) in journeySteps"
              :key="index"
              class="flex flex-row rounded-3xl overflow-hidden shadow-xl h-auto lg:h-[260px]"

            >
              <div class="travel-text bg-white/60 backdrop-blur-sm flex items-start gap-6 lg:p-4 xl:p-6 flex-1 transition-all duration-300 ">
                <!-- Step Number -->
                <div class="flex-shrink-0 w-11 h-11 xl:w-14 xl:h-14 bg-[#FFE759] rounded-full flex items-center justify-center shadow-lg my-auto hidden lg:flex">
                  <span class="text-black font-bold text-lg xl:text-xl">{{ index + 1 }}</span>
                </div>

                <!-- Step Content-->
                <div class="flex">
                  <!-- Desktop -->
                  <div class="flex items-start justify-between gap-4 hidden lg:block">
                    <div class="flex-1 ">
                      <h3 class="text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-3">{{ step.title }}</h3>
                      <p class="text-gray-600 text-base lg:text-[16px] xl:text-lg leading-relaxed mb-6 pr-4">
                        {{ step.description }}
                      </p>

                      <!-- CTA Button -->
                      <button
                        @click="step.action"
                        class="bg-[#0088FF] hover:bg-[#1580e6] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0088FF] focus:ring-offset-2 cursor-pointer"
                      >
                        {{ step.buttonText }}
                      </button>
                    </div>
                  </div>

                  <!-- Mobile Content -->
                  <div class=" gap-y-4 lg:hidden">
                    <div class="flex flex-col flex-wrap p-3">
                      <div class="flex items-center justify-center gap-2 mb-3">
                        <div class="flex-shrink-0 w-8 h-8 lg:w-14 lg:h-14 bg-[#FFE759] rounded-full flex items-center justify-center shadow-lg lg:my-auto ">
                          <span class="text-black font-bold text-[16px] lg:text-xl">{{ index + 1 }}</span>
                        </div>
                        <h3 class="text-xl lg:text-2xl font-bold text-gray-900 ">{{ step.title }}</h3>

                      </div>
                      <p class="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 pr-4">
                        {{ step.description }}
                      </p>

                      <!-- CTA Button -->
                      <button
                        @click="step.action"
                        class="bg-[#0088FF] hover:bg-[#1580e6] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0088FF] focus:ring-offset-2 cursor-pointer"
                      >
                        {{ step.buttonText }}
                      </button>
                    </div>

                  </div>

                </div>
              </div>
              <div class="icons bg-white flex-shrink-0 h-full flex items-center justify-center rounded-tr-[20px] rounded-br-[20px] my-auto lg:w-[90px] xl:w-[200px] hidden lg:flex">
                <div class="w-14 h-14 bg-[#E91E63] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <img :src="index === 0 ? compassIcon : index === 1 ? airBalloonIcon : mapIcon" alt="" class="w-6 h-6 filter brightness-0 invert">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Simple icon components
// const CompassIcon = {
//   template: `
//     <svg fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1.5-13.5l-4 2 2 4 4-2-2-4z"/>
//     </svg>
//   `
// };

// const CalendarIcon = {
//   template: `
//     <svg fill="currentColor" viewBox="0 0 24 24">
//       <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
//     </svg>
//   `
// };

// const ShareIcon = {
//   template: `
//     <svg fill="currentColor" viewBox="0 0 24 24">
//       <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
//     </svg>
//   `
// };

import { useMotion } from '@/mixins/useMotion.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default {
  name: 'TravelJourney',
  mixins: [ useMotion ],
  components: {
    Swiper,
    SwiperSlide
  },
  // components: {
  //   CompassIcon,
  //   CalendarIcon,
  //   ShareIcon
  // },
  data() {
    return {
      swiperModules: [Autoplay],
      compassIcon: new URL('@/assets/compass-icon.svg', import.meta.url).href,
      airBalloonIcon: new URL('@/assets/air-balloon-icon.svg', import.meta.url).href,
      mapIcon: new URL('@/assets/map-icon.svg', import.meta.url).href,
      backgroundImage: new URL('@/assets/travel-journey-bg-image.jpg', import.meta.url).href,
      destinationImageOne: new URL('@/assets/destination-image-1.jpg', import.meta.url).href,
      destinationImageTwo: new URL('@/assets/destination-image-2.jpg', import.meta.url).href,
      destinationImageThree: new URL('@/assets/destination-image-3.jpg', import.meta.url).href,
      coconutBeachImage: new URL('@/assets/coconut-beach-image.jpg', import.meta.url).href,

      galleryImages: [
        {
          src: new URL('@/assets/destination-image-1.jpg', import.meta.url).href,
          alt: 'Travel destination 1'
        },
        {
          src: new URL('@/assets/coconut-beach-image.jpg', import.meta.url).href,
          alt: 'Coconut beach'
        },
        {
          src: new URL('@/assets/destination-image-2.jpg', import.meta.url).href,
          alt: 'Travel destination 2'
        },
        {
          src: new URL('@/assets/destination-image-3.jpg', import.meta.url).href,
          alt: 'Travel destination 3'
        },
        {
          src: new URL('@/assets/destination-image-1.jpg', import.meta.url).href,
          alt: 'Travel destination 1'
        },
        {
          src: new URL('@/assets/coconut-beach-image.jpg', import.meta.url).href,
          alt: 'Coconut beach'
        }
      ],

      journeySteps: [
        {
          title: 'Discover Your Next Escape',
          description: 'Dive into stories, guides, and videos from real travelers to find destinations that match your vibe — whether you\'re chasing sunsets or city lights.',
          buttonText: 'Explore Now',
          icon: 'CompassIcon',
          action: this.exploreDestinations
        },
        {
          title: 'Plan & Book with Ease',
          description: 'Compare flights, stays, and experiences — all in one place. We make it easy (and fun!) to go from dreaming to booking, with trusted partners and smooth tools.',
          buttonText: 'Start Booking',
          icon: 'CalendarIcon',
          action: this.startBooking
        },
        {
          title: 'Travel Proudly, Share Freely',
          description: 'Make memories and share your journey with a community that values authenticity and inclusion. Roam boldly — and help inspire someone else\'s adventure.',
          buttonText: 'Join the Community',
          icon: 'ShareIcon',
          action: this.joinCommunity
        }
      ]
    }
  },
  methods: {
    exploreDestinations() {
      console.log('Exploring destinations...');
      // Add explore destinations logic here
    },
    startBooking() {
      console.log('Starting booking process...');
      // Add booking logic here
    },
    joinCommunity() {
      console.log('Joining community...');
      // Add community logic here
    }
  }
}
</script>

<style scoped>

.main-bg{
  background-position: center;
  background-size: cover;
}

/* Mobile optimizations */
@media (max-width: 639px) {

}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .travel-journey-section {
    padding: 4rem 0;
  }

  .travel-journey-section h2 {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  .travel-journey-section .grid-cols-2 .rounded-2xl {
    height: 14rem;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .travel-journey-section h2 {
    font-size: 3rem;
    line-height: 1.2;
  }

  .travel-journey-section .grid-cols-2 .rounded-2xl {
    height: 16rem;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .gallery-swiper {
    overflow: visible;
  }

  .gallery-swiper .swiper-slide {
    height: auto;
  }

  .travel-journey-section .grid-cols-2 .rounded-2xl {
    height: 16rem;
  }
}

/* Image gallery hover effects on desktop */
@media (min-width: 1024px) {
  .travel-journey-section .grid-cols-2 > div {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }


}

/* Touch-friendly interactions on mobile */
@media (max-width: 1023px) {
  .travel-journey-section .rounded-3xl {
    touch-action: manipulation;
  }

  .travel-journey-section button {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
}

/* Ensure proper spacing and layout */
.travel-journey-section .space-y-8 > * + * {
  margin-top: 2rem;
}

@media (max-width: 639px) {
  .travel-journey-section .space-y-8 > * + * {
    margin-top: 1.5rem;
  }
}


.travel-journey-section .shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

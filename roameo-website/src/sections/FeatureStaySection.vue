<template>
  <section class="feature-stay-section bg-gray-50 py-16 lg:py-24 font-plus-jakarta">
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-auto">
        <!-- Left Content Area -->
        <div class="w-full lg:w-2/5 flex-shrink-0 flex flex-col flex-1 items-start justify-center my-auto">
          <!-- Badge -->
          <div v-motion="getScrollSlideUpMotionBounce(230)" class="inline-block mb-6">
            <span class="bg-[#FFE759] text-black text-sm font-medium px-4 py-2 rounded-full">
              Featured Stays for Every Kind of Traveler
            </span>
          </div>

          <!-- Heading -->
          <h2 v-motion="getScrollSlideUpMotionBounce(200)" class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="text-[#4A9DB1]">Top Stays</span> That Slay
          </h2>

          <!-- Description -->
          <p v-motion="getScrollSlideUpMotionBounce(250)" class="text-gray-600 text-lg mb-8 leading-relaxed">
            From cozy boutique charm to big-city luxe,
            these hotels are giving main character energy
            with room service.
          </p>

          <!-- See More Button -->
          <button v-motion-slide-visible-once-bottom
            @click="seeMore"
            class="bg-[#1A94FF] hover:bg-[#1580e6] text-white font-semibold py-4 px-8 rounded-[20px] max-w-md w-full transition-all duration-200 transform hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-[#1A94FF] focus:ring-offset-2 flex items-center justify-between gap-3 mb-8 cursor-pointer"
          >
            See More
            <img :src="topRightArrowIcon" alt="Arrow" class="w-4 h-4">
          </button>

          <!-- Navigation Arrows -->
          <div class="flex gap-4">
            <button
              @click="slidePrev"
              class="w-12 h-12 rounded-full border-2 border-[#1A94FF] flex items-center justify-center hover:bg-[#1A94FF]/10 transition-all duration-200 cursor-pointer group"
            >
              <img :src="arrowLeftIcon" alt="Previous" class="w-5 h-5 group-hover:brightness-0 group-hover:invert">
            </button>
            <button
              @click="slideNext"
              class="w-12 h-12 rounded-full border-2 border-[#1A94FF] flex items-center justify-center hover:bg-[#1A94FF]/10 transition-all duration-200 cursor-pointer group"
            >
              <img :src="arrowRightIcon" alt="Next" class="w-5 h-5 group-hover:brightness-0 group-hover:invert">
            </button>
          </div>
        </div>

        <!-- Right Carousel Area with Swiper -->
        <div
          class="feature-stay-carousel w-full lg:w-[900px] overflow-hidden flex-2"
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
        >
          <swiper
            :modules="modules"
            :slides-per-view="2"
            :space-between="0"
            :breakpoints="{
              375: {
                slidesPerView: 1,
                spaceBetween: 24
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24
              },
            }"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }"
            :navigation="false"
            :pagination="false"
            :loop="true"
            class="hotel-swiper"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
          >
            <swiper-slide
              v-for="(hotel, index) in hotels"
              :key="index"
            >
              <div  class="hotel-card relative rounded-[1.5rem] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl lg:h-[600px] xs:h-auto w-auto md:mr-5">

                <!-- Lazy loaded background image -->
                <div
                  class="absolute inset-0 bg-gray-200 bg-cover bg-center transition-opacity duration-300"
                  v-lazy:background-image="getHotelImage(index)"
                ></div>

                <!-- Loading placeholder (optional) -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                  v-show="!imageLoaded[index]"
                >
                  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4A9DB1]"></div>
                </div>

                <!-- Overlay Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <!-- Popular Badge -->
                <div class="absolute top-4 left-4 z-10">
                  <span class="bg-[#E91E63] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    Popular
                  </span>
                </div>

                <!-- Price Badge -->
                <div class="absolute top-4 right-4 z-10">
                  <span class="bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-full">
                    from {{ hotel.price }}
                  </span>
                </div>

                <!-- Bottom Overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-6 text-black z-10 bg-white/50 backdrop-blur-sm m-4 rounded-[20px] border-white border">
                  <h3 class="text-black font-bold text-xl mb-1">{{ hotel.name }}</h3>
                  <p class="text-black/90 text-sm">{{ hotel.location }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'FeatureStaySection',
  mixins: [ useMotion ],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperInstance: null,
      modules: [Navigation, Pagination, Autoplay],
      imageLoaded: reactive({}), // Track loaded images with reactive

      topRightArrowIcon: new URL('@/assets/top-right-arrow.svg', import.meta.url).href,
      arrowLeftIcon: new URL('@/assets/arrow-left.svg', import.meta.url).href,
      arrowRightIcon: new URL('@/assets/arrow-right.svg', import.meta.url).href,
      featuredImageOne: new URL('@/assets/featured-carousel-image1.jpg', import.meta.url).href,
      featuredImageTwo: new URL('@/assets/featured-carousel-image2.jpg', import.meta.url).href,
      hotels: [
        {
          name: 'The Ritz Paris',
          location: 'France',
          price: '$399'
        },
        {
          name: 'Burj Al Arab Jumeirah',
          location: 'Dubai',
          price: '$799'
        },
        {
          name: 'Hotel Plaza Athénée',
          location: 'Paris, France',
          price: '$599'
        },
        {
          name: 'Emirates Palace',
          location: 'Abu Dhabi',
          price: '$899'
        }
      ]
    }
  },
  methods: {
    seeMore() {
      console.log('See more hotels...')
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper
    },
    onSlideChange() {
      // Handle slide change if needed
    },
    pauseAutoplay() {
      if (this.swiperInstance?.autoplay) {
        this.swiperInstance.autoplay.stop()
      }
    },
    resumeAutoplay() {
      if (this.swiperInstance?.autoplay) {
        this.swiperInstance.autoplay.start()
      }
    },
    slideNext() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext()
      }
    },
    slidePrev() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev()
      }
    },
    getHotelImage(index) {
      return index % 2 === 0 ? this.featuredImageOne : this.featuredImageTwo
    }
  },
  mounted() {
    // Listen for lazy load events
    if (this.$Lazyload) {
      this.$Lazyload.$on('loaded', ({ el }) => {
        // Find the hotel card index by traversing the DOM
        const swiperSlide = el.closest('.swiper-slide')
        if (swiperSlide) {
          const slides = Array.from(swiperSlide.parentElement.children)
          const index = slides.indexOf(swiperSlide)
          this.imageLoaded[index] = true
        }
      })

      this.$Lazyload.$on('error', ({ src }) => {
        console.warn('Failed to load image:', src)
        // Optionally set a fallback image or show error state
      })
    }
  }
}
</script>

<style scoped>
.hotel-swiper {
  overflow: visible;
}

.hotel-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 320px;
}

/* Lazy load specific styles */
.hotel-card [lazy=loading] {
  background-color: #f0f0f0;
}

.hotel-card [lazy=loaded] {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Custom styling for swiper slides */
.swiper-slide {
  height: auto;
}

/* Mobile optimizations */
@media (max-width: 374px) {
  .hotel-card {
    min-height: 300px;
  }

  .hotel-card .absolute.bottom-0 {
    padding: 1rem;
  }

  .hotel-card h3 {
    font-size: 1.125rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  .hotel-card {
    min-height: 320px;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .hotel-card {
    min-height: 350px;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .hotel-card {
    min-height: 380px;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .hotel-card {
    min-height: 400px;
  }

  .hotel-card:hover {
    transform: translateY(-4px);
  }
}

/* Enhanced button hover effects */
@media (min-width: 1024px) {
  .feature-stay-section button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

/* Touch-friendly buttons on mobile */
@media (max-width: 1023px) {
  .feature-stay-section button {
    min-height: 48px;
  }

  .hotel-swiper {
    touch-action: pan-x;
  }
}

/* Remove default swiper button styles since we're using custom */
.swiper-button-prev,
.swiper-button-next {
  display: none;
}
</style>

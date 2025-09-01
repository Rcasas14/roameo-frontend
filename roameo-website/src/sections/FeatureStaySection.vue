<template>
  <section class="feature-stay-section bg-gray-50 py-16 lg:py-24 font-plus-jakarta">
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-auto">
        <!-- Left Content Area -->
        <div class="w-full lg:w-2/5 flex-shrink-0 flex flex-col flex-1 items-start justify-center my-auto">
          <!-- Badge -->
          <div class="inline-block mb-6">
            <span class="bg-[#FFE759] text-black text-sm font-medium px-4 py-2 rounded-full">
              Featured Stays for Every Kind of Traveler
            </span>
          </div>

          <!-- Heading -->
          <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="text-[#4A9DB1]">Top Stays</span> That Slay
          </h2>

          <!-- Description -->
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            From cozy boutique charm to big-city luxe,
            these hotels are giving main character energy
            with room service.
          </p>

          <!-- See More Button -->
          <button
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
              class="w-12 h-12 rounded-full border-2 border-[#1A94FF] flex items-center justify-center hover:bg-[#1A94FF]/10 transition-all duration-200 cursor-pointer"
              :class="{ 'opacity-50 cursor-not-allowed': !canSlidePrev }"
            >
              <img :src="arrowLeftIcon" alt="Previous" class="w-5 h-5">
            </button>
            <button
              @click="slideNext"
              class="w-12 h-12 rounded-full border-2 border-[#1A94FF] flex items-center justify-center hover:bg-[#1A94FF]/10 transition-all duration-200 cursor-pointer"
              :class="{ 'opacity-50 cursor-not-allowed': !canSlideNext }"
            >
              <img :src="arrowRightIcon" alt="Next" class="w-5 h-5">
            </button>
          </div>
        </div>

        <!-- Right Carousel Area with Swiper -->
        <div class="w-full lg:w-[900px] overflow-hidden flex-2">
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
            :navigation="false"
            :pagination="false"
            :loop="true"
            class="hotel-swiper"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
            @reach-beginning="onReachBeginning"
            @reach-end="onReachEnd"
          >
            <swiper-slide
              v-for="(hotel, index) in hotels"
              :key="index"
            >
              <div class="hotel-card relative rounded-[1.5rem] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-cover bg-center lg:h-[600px] xs:h-auto w-auto md:mr-5"
                :style="{ backgroundImage: `url(${getHotelImage(index)})` }"
              >
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'FeatureStaySection',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperInstance: null,
      canSlidePrev: true,
      canSlideNext: true,
      modules: [Navigation, Pagination],
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
      this.updateNavigationState()
    },
    onSlideChange() {
      this.updateNavigationState()
    },
    onReachBeginning() {
      // With infinite loop, we always allow navigation
      this.canSlidePrev = true
    },
    onReachEnd() {
      // With infinite loop, we always allow navigation
      this.canSlideNext = true
    },
    updateNavigationState() {
      // With infinite loop enabled, navigation buttons are always active
      this.canSlidePrev = true
      this.canSlideNext = true
    },
    slideNext() {
      if (this.swiperInstance && this.canSlideNext) {
        this.swiperInstance.slideNext()
      }
    },
    slidePrev() {
      if (this.swiperInstance && this.canSlidePrev) {
        this.swiperInstance.slidePrev()
      }
    },
    getHotelImage(index) {
      return index % 2 === 0 ? this.featuredImageOne : this.featuredImageTwo
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

/* Hover effects for desktop */
@media (min-width: 1024px) {
  .hotel-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .hotel-card:hover::before {
    opacity: 1;
  }

  .hotel-card:hover .absolute.bottom-0 {
    z-index: 2;
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

/* Desktop button hover effects */
@media (min-width: 1024px) {
  .feature-stay-section button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

/* Remove default swiper button styles since we're using custom */
.swiper-button-prev,
.swiper-button-next {
  display: none;
}
</style>

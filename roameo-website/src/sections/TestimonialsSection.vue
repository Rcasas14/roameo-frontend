<template>
  <section class="testimonials-section bg-white py-16 lg:py-24 font-plus-jakarta">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12 lg:mb-16">
        <!-- Badge -->
        <div class="inline-flex items-center justify-center mb-6">
          <span class="bg-[#FFE759] text-black text-sm font-medium px-4 py-2 rounded-full">
            Testimonials
          </span>
        </div>

        <!-- Main Heading -->
        <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
          <span class="text-[#1A94FF]">Top Raves</span> from the Roam Fam
        </h2>

        <!-- Description -->
        <p class="text-gray-600 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          They came, they slayed, they shared. Hear what fellow travelers (and low-key icons) loved most about Roameo.
        </p>

      </div>

      <!-- Testimonials Carousel -->
      <div class="testimonials-carousel overflow-hidden">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :breakpoints="{
            375: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            },
          }"
          :navigation="false"
          :pagination="false"
          :loop="true"
          :centered-slides="false"
          class="testimonials-swiper"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
          @reach-beginning="onReachBeginning"
          @reach-end="onReachEnd"
        >
          <swiper-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="testimonial-card bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <!-- Star Rating -->
              <div class="flex gap-1 mb-4">
                <img 
                  v-for="star in 5" 
                  :key="star"
                  :src="starIcon" 
                  alt="Star" 
                  class="w-5 h-5 text-yellow-400"
                  :style="{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(58%) saturate(348%) hue-rotate(8deg) brightness(108%) contrast(104%)' }"
                >
              </div>

              <!-- Testimonial Text -->
              <blockquote class="text-gray-900 font-semibold text-base sm:text-lg leading-relaxed mb-6">
                "{{ testimonial.text }}"
              </blockquote>

              <!-- User Info -->
              <div class="flex items-center gap-3">
                <!-- Avatar -->
                <div class="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    v-if="testimonial.avatar" 
                    :src="testimonial.avatar" 
                    :alt="testimonial.name"
                    class="w-full h-full object-cover"
                  >
                  <img 
                    v-else
                    :src="avatarIcon" 
                    alt="User Avatar" 
                    class="w-6 h-6 text-gray-500"
                  >
                </div>

                <!-- User Details -->
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <h4 class="font-bold text-gray-900 text-sm sm:text-base">{{ testimonial.name }}</h4>
                    <img 
                      v-if="testimonial.verified"
                      :src="verifiedIcon" 
                      alt="Verified" 
                      class="w-4 h-4"
                      :style="{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(58%) saturate(348%) hue-rotate(8deg) brightness(108%) contrast(104%)' }"
                    >
                  </div>
                  <p class="text-gray-500 text-xs sm:text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Navigation Arrows - All Devices (Bottom) -->
      <div class="flex justify-center gap-4 mt-8">
        <button
          @click="slidePrev"
          class="w-12 h-12 rounded-full border-2 border-[#1A94FF] flex items-center justify-center hover:bg-[#1A94FF] hover:text-white  lg:hover:text-gray-900 transition-all duration-200 cursor-pointer"
          :class="{ 'opacity-50 cursor-not-allowed': !canSlidePrev }"
        >
          <img :src="arrowLeftIcon" alt="Previous" class="w-5 h-5">
        </button>
        <button
          @click="slideNext"
          class="w-12 h-12 rounded-full border-2 border-[#1A94FF] flex items-center justify-center hover:bg-[#1A94FF] hover:text-white lg:hover:text-gray-900 transition-all duration-200 cursor-pointer"
          :class="{ 'opacity-50 cursor-not-allowed': !canSlideNext }"
        >
          <img :src="arrowRightIcon" alt="Next" class="w-5 h-5">
        </button>
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
  name: 'TestimonialsSection',
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
      
      // Icons
      arrowLeftIcon: new URL('@/assets/arrow-left.svg', import.meta.url).href,
      arrowRightIcon: new URL('@/assets/arrow-right.svg', import.meta.url).href,
      starIcon: new URL('@/assets/star-icon.svg', import.meta.url).href,
      avatarIcon: new URL('@/assets/avatar-icon.svg', import.meta.url).href,
      verifiedIcon: new URL('@/assets/verified-icon.svg', import.meta.url).href,
      
      // Testimonials data
      testimonials: [
        {
          text: "Booking hotels and flights was so smooth. I found the perfect travels just by browsing the stories and reviews.",
          name: "Alice Smith",
          role: "Travel Vlogger",
          verified: true,
          avatar: null
        },
        {
          text: "Roameo highlights destinations where I feel safe and welcome, without making a big deal out of it. It's subtle, thoughtful, and so refreshing.",
          name: "Michael Johnson",
          role: "Freelance Model",
          verified: true,
          avatar: null
        },
        {
          text: "The guides were super helpful and honest. I loved that I could watch videos and get a feel for the vibe, then look in my plans right there.",
          name: "Emily Davis",
          role: "Marketing Associate",
          verified: true,
          avatar: null
        },
        {
          text: "Finally, a travel platform that gets it. The community vibes are immaculate and the recommendations are always on point.",
          name: "Jordan Taylor",
          role: "Content Creator",
          verified: true,
          avatar: null
        },
        {
          text: "The booking process is seamless and the destination insights are pure gold. Roameo knows exactly what travelers need.",
          name: "Sarah Wilson",
          role: "Digital Nomad",
          verified: true,
          avatar: null
        }
      ]
    }
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
.testimonials-swiper {
  overflow: visible;
  padding-bottom: 2rem;
}

.testimonial-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-card blockquote {
  flex-grow: 1;
}

/* Custom styling for swiper slides */
.swiper-slide {
  height: auto;
}

/* Mobile optimizations */
@media (max-width: 374px) {
  .testimonial-card {
    padding: 1.25rem;
    min-height: 280px;
  }

  .testimonial-card blockquote {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .testimonials-section h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  .testimonial-card {
    min-height: 300px;
    padding: 1.5rem;
  }

  .testimonials-section h2 {
    font-size: 1.75rem;
    line-height: 1.2;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .testimonial-card {
    min-height: 320px;
  }

  .testimonials-section h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .testimonial-card {
    min-height: 340px;
  }

  .testimonials-section h2 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .testimonial-card {
    min-height: 360px;
  }

  .testimonial-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .testimonials-section h2 {
    font-size: 3rem;
    line-height: 1.1;
  }
}

/* XL devices and above - 1280px+ */
@media (min-width: 1280px) {
  .testimonial-card {
    min-height: 380px;
  }

  .testimonials-section h2 {
    font-size: 3.5rem;
  }
}

/* Touch-friendly buttons on mobile */
@media (max-width: 1023px) {
  .testimonials-section button {
    min-height: 48px;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }

  .testimonials-swiper {
    touch-action: pan-x;
  }
}

/* Desktop button hover effects */
@media (min-width: 1024px) {
  .testimonials-section button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(26, 148, 255, 0.2);
  }

  .testimonials-section button:hover img {
    filter: brightness(0) invert(1);
  }
}

/* Ensure equal card heights in each row */
.swiper-slide {
  display: flex;
  flex-direction: column;
}

.testimonial-card {
  flex: 1;
}

/* Star rating styling */
.testimonial-card .flex.gap-1 img {
  flex-shrink: 0;
}

/* User avatar styling */
.testimonial-card .w-12.h-12.bg-gray-200 {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
}

/* Remove default swiper styles */
.swiper-button-prev,
.swiper-button-next {
  display: none;
}

/* Custom scrollbar for horizontal scroll on mobile */
@media (max-width: 1023px) {
  .testimonials-carousel::-webkit-scrollbar {
    display: none;
  }
}
</style>
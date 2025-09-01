<template>
  <section class="top-travel-sea-section bg-white py-16 lg:py-24 font-plus-jakarta">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12 lg:mb-16 relative">
        <!-- Badge -->
        <div class="inline-flex items-center justify-center mb-6">
          <span class="bg-[#FFE759] text-black text-sm font-medium px-4 py-2 rounded-full">
            Trending Now
          </span>
        </div>

        <!-- Main Heading -->
        <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
          <span class="text-[#1A94FF]">Top Travel Tea,</span> Spilled Weekly
        </h2>

        <!-- Description -->
        <p class="text-gray-600 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Real stories, hot takes, and all the inspo you need to pack your bags and book that flight. No gatekeeping here.
        </p>

        <!-- Navigation Arrows - Desktop Only -->
        <div class="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-0 gap-4">
          <button
            @click="slidePrev"
            class="w-12 h-12 rounded-full bg-[#1A94FF] text-white flex items-center justify-center hover:bg-[#1580e6] transition-all duration-200 cursor-pointer shadow-lg"
            :class="{ 'opacity-50 cursor-not-allowed': !canSlidePrev }"
          >
            <img :src="arrowLeftIcon" alt="Previous" class="w-5 h-5 filter brightness-0 invert">
          </button>
          <button
            @click="slideNext"
            class="w-12 h-12 rounded-full bg-[#1A94FF] text-white flex items-center justify-center hover:bg-[#1580e6] transition-all duration-200 cursor-pointer shadow-lg"
            :class="{ 'opacity-50 cursor-not-allowed': !canSlideNext }"
          >
            <img :src="arrowRightIcon" alt="Next" class="w-5 h-5 filter brightness-0 invert">
          </button>
        </div>
      </div>

      <!-- Stories Carousel -->
      <div class="stories-carousel overflow-hidden">
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
          class="stories-swiper"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
          @reach-beginning="onReachBeginning"
          @reach-end="onReachEnd"
        >
          <swiper-slide
            v-for="(story, index) in stories"
            :key="index"
          >
            <div class="story-card relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-cover bg-center h-[520px] sm:h-[550px] lg:h-[580px]"
              :style="{ backgroundImage: `url(${getStoryImage(index)})` }"
            >
              <!-- Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <!-- Content Container -->
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <!-- Story Info Card -->
                <div class="bg-white/40 backdrop-blur-sm p-3 rounded-2xl shadow-lg mb-3">
                  <!-- Title and Meta Info -->
                  <div class="mb-2">
                    <h3 class="text-lg font-bold text-gray-900 mb-2">{{ story.title }}</h3>
                    <div class="flex items-center gap-2 text-xs">
                      <span class="bg-gray-100 text-gray-900 font-medium px-2 py-1 rounded-full">
                        {{ story.duration }}
                      </span>
                      <span class="bg-gray-100 text-gray-900 font-medium px-2 py-1 rounded-full">
                        Travel for {{ story.travelFor }}
                      </span>
                      <div class="flex items-center gap-1">
                        <span class="text-yellow-500 text-sm">★</span>
                        <span class="text-gray-900 font-medium">({{ story.rating }})</span>
                      </div>
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="text-gray-900 text-sm leading-relaxed mb-2">
                    {{ story.description }}
                  </p>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-1 mb-4">
                    <span
                      v-for="tag in story.tags.slice(0, 4)"
                      :key="tag"
                      class="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-md"
                    >
                      {{ tag }}
                    </span>
                  </div>

                </div>
                <!-- Read More Button -->
                <button
                  @click="readStory(story)"
                  class="w-full bg-[#1A94FF] hover:bg-[#1580e6] text-white font-semibold py-2 px-6 rounded-[20px] transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#1A94FF] focus:ring-offset-2 cursor-pointer"
                >
                  Read More
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Navigation Arrows - Mobile -->
      <div class="flex lg:hidden justify-center gap-4 mt-8">
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
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'TopTravelSea',
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
      storyImageOne: new URL('@/assets/top-travel-sea-card-image1.jpg', import.meta.url).href,
      storyImageTwo: new URL('@/assets/top-travel-sea-card-image2.jpg', import.meta.url).href,
      storyImageThree: new URL('@/assets/top-travel-sea-card-image3.jpg', import.meta.url).href,

      stories: [
        {
          title: 'Bali: Spiritual, Sweaty, and So Worth It',
          duration: '4 days',
          travelFor: '2',
          rating: '5.0',
          description: 'From sunrise yoga in Ubud to late-night beach in Seminyak, our 6-day Bali trip gave everything it needed to give — zen, chaos, and a monkey that stole our banana chips.',
          tags: ['Beach', 'Wellness', 'Budget-Friendly', 'Adventure', 'LGBTQ+ Friendly', 'Southeast Asia']
        },
        {
          title: 'Berlin: Clubbing, Culture, and Currywurst',
          duration: '4 days',
          travelFor: '1',
          rating: '5.0',
          description: 'We came for the Berghain fantasy, stayed for the queer history, street art, and bratwurst. Berlin\'s 4 days is chaos with purpose — being comfy shoes and eyeliner.',
          tags: ['LGBTQ+ Friendly', 'Urban', 'Nightlife', 'Culture', 'Europe', 'Offbeat']
        },
        {
          title: 'Queenstown: Where Adrenaline Meets Aesthetic',
          duration: '5 days',
          travelFor: '3',
          rating: '4.7',
          description: 'Jetboats, bungie jumps, snow-capped peaks, and wine tastings? Queenstown said "why not both." Our 5-day trip was a full adrenaline scenic chaos — and we\'re obsessed.',
          tags: ['Nature', 'Adventure', 'Group Travel', 'Luxury Vibes', 'Oceania', 'Mountains']
        },
        {
          title: 'Tokyo: Neon Lights and Ramen Nights',
          duration: '6 days',
          travelFor: '2',
          rating: '4.9',
          description: 'From Shibuya crossing to hidden izakayas, Tokyo delivered every anime fantasy we didn\'t know we had. 6 days of sensory overload in the best possible way.',
          tags: ['Urban', 'Culture', 'Food', 'Technology', 'Asia', 'Couple Travel']
        }
      ]
    }
  },
  methods: {
    readStory(story) {
      console.log('Reading story:', story.title)
      // Add story reading logic here
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
    getStoryImage(index) {
      const imageIndex = index % 3;
        if (imageIndex === 0) return this.storyImageOne;
        if (imageIndex === 1) return this.storyImageTwo;
        return this.storyImageThree;
    }
  }
}
</script>

<style scoped>
.story-swiper {
  overflow: visible;
}

.story-card {
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
  .story-card {
    min-height: 300px;
  }

  .story-card .absolute.bottom-0 {
    padding: 1rem;
  }

  .story-card h3 {
    font-size: 1rem;
  }

  .story-card p {
    font-size: 0.75rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  .story-card {
    min-height: 320px;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .story-card {
    min-height: 350px;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .story-card {
    min-height: 380px;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .story-card {
    min-height: 400px;
  }

  .story-card:hover {
    transform: translateY(-4px);
  }
}

/* Hover effects for desktop */
@media (min-width: 1024px) {
  .story-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .story-card:hover::before {
    opacity: 1;
  }

  .story-card:hover .absolute.bottom-0 {
    z-index: 2;
  }
}

/* Touch-friendly buttons on mobile */
@media (max-width: 1023px) {
  .top-travel-sea-section button {
    min-height: 48px;
  }

  .story-swiper {
    touch-action: pan-x;
  }
}

/* Desktop button hover effects */
@media (min-width: 1024px) {
  .top-travel-sea-section button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

/* Remove default swiper button styles since we're using custom */
.swiper-button-prev,
.swiper-button-next {
  display: none;
}

/* Story card content styling */
.story-card .bg-white\/90 {
  backdrop-filter: blur(8px);
}

/* Tag styling */
.story-card .bg-blue-50 {
  background-color: rgba(239, 246, 255, 0.8);
}

/* Rating star styling */
.story-card .text-yellow-500 {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Content card responsive adjustments */
@media (max-width: 639px) {
  .story-card .bg-white\/90 {
    padding: 1rem;
    margin: 0.5rem;
  }

  .story-card .flex.items-center.justify-between {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .story-card .flex.flex-wrap.gap-2 {
    gap: 0.25rem;
  }
}

/* Ensure proper text contrast */
.story-card .text-gray-900 {
  color: #111827;
}

.story-card .text-gray-600 {
  color: #4b5563;
}


</style>

<template>
  <section class="destination-section bg-white py-16 lg:py-24 font-plus-jakarta">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center justify-center">
          <span v-motion="getScrollSlideUpMotion(100)" class="bg-[#FFE759] text-black text-sm font-medium px-4 py-2 rounded-full mb-4">
            Trending Now
          </span>
        </div>
        <h2 v-motion="getScrollSlideUpMotion(150)" class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto leading-tight">
          <span class="text-[#0088FF]">Top Destinations</span> That Totally Eat (And Leave No Crumbs)
        </h2>
      </div>

      <!-- Destinations Grid -->
    <div v-motion="getScrollSlideUpMotion(220)"
      class="destinations-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center">
        <div
          v-for="(destination, index) in destinations"
          :key="index"
          class="destination-card group relative rounded-[1.5rem] overflow-hidden h-full h-[320px] xs:h-[350px] sm:h-[380px] md:h-[400px] lg:h-[430px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <!-- Lazy loaded background image -->
          <div
            class="absolute inset-0 bg-gray-200 bg-cover bg-center transition-opacity duration-300"
            v-lazy:background-image="getDestinationImage(index)"
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
              From {{ destination.price }}
            </span>
          </div>

          <!-- Content -->
          <div class="absolute bottom-0 left-0 right-0 p-6 text-black z-10">
            <!-- Destination Info -->
            <div class="mb-4 bg-slate-50/40 backdrop-blur-sm p-4 rounded-[20px] transition-all duration-300 lg:translate-y-8 lg:group-hover:translate-y-0">
              <h3 class="text-xl sm:text-2xl font-bold mb-2">{{ destination.name }}</h3>
              <p class="text-sm text-gray-200 mb-3">{{ destination.country }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  v-for="tag in destination.tags"
                  :key="tag"
                  class="bg-white/20 bg-slate-50/70 text-black text-xs font-medium px-2 py-1 rounded-md"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Rating -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <span class="text-sm font-semibold">{{ destination.rating }}/10</span>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              @click="bookFlight(destination)"
              class="w-full bg-[#1A94FF] hover:bg-[#1580e6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300
                      transform group-hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#1A94FF] focus:ring-offset-2 cursor-pointer
                      lg:opacity-0 lg:translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
            >
              Book Your Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'DestinationSection',
  mixins: [ useMotion ],
  data() {
    return {
      destinationImageOne: new URL('@/assets/destination-image-1.jpg', import.meta.url).href,
      destinationImageTwo: new URL('@/assets/destination-image-2.jpg', import.meta.url).href,
      destinationImageThree: new URL('@/assets/destination-image-3.jpg', import.meta.url).href,
      imageLoaded: reactive({}), // Track loaded images with reactive
      destinations: [
        {
          name: 'Florence Cathedral',
          country: 'Italy',
          price: '$2199',
          rating: '9.9',
          tags: ['Historical', 'Cultural', 'Sightseeing']
        },
        {
          name: "Siargao's Enchanting River",
          country: 'Philippines',
          price: '$2199',
          rating: '9.9',
          tags: ['Adventure', "Nature's Oasis", 'Tranquil']
        },
        {
          name: 'Machu Picchu',
          country: 'Peru',
          price: '$2199',
          rating: '9.9',
          tags: ['Adventure', 'Historical', 'Hiking']
        },
        {
          name: "Siargao's Enchanting River",
          country: 'Philippines',
          price: '$2199',
          rating: '9.9',
          tags: ['Adventure', "Nature's Oasis", 'Tranquil']
        },
        {
          name: 'Machu Picchu',
          country: 'Peru',
          price: '$2199',
          rating: '9.9',
          tags: ['Adventure', 'Historical', 'Hiking']
        },
        {
          name: 'Florence Cathedral',
          country: 'Italy',
          price: '$2199',
          rating: '9.9',
          tags: ['Historical', 'Cultural', 'Sightseeing']
        }
      ]
    }
  },
  methods: {
    bookFlight(destination) {
      console.log('Booking flight to:', destination.name);
      // Add booking logic here
    },
    getDestinationImage(index) {
      const imageMap = {
        0: this.destinationImageOne,
        1: this.destinationImageTwo,
        2: this.destinationImageThree,
        3: this.destinationImageTwo,
        4: this.destinationImageThree,
        5: this.destinationImageOne
      };
      return imageMap[index] || this.destinationImageOne;
    }
  },
  mounted() {
    // Listen for lazy load events
    this.$Lazyload.$on('loaded', ({ el }) => {
      // Mark image as loaded using direct assignment (Vue 3 way)
      const index = Array.from(el.parentElement.parentElement.children).indexOf(el.parentElement);
      this.imageLoaded[index] = true;
    });
  }
}
</script>

<style scoped>
.destination-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Lazy load specific styles */
.destination-card [lazy=loading] {
  background-color: #f0f0f0;
}

.destination-card [lazy=loaded] {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Mobile optimizations */
@media (max-width: 374px) {
  .destination-card {
    width: 100%;
    max-width: 300px;
    height: 320px;
    margin: 0 auto;
  }

  .destination-card .absolute.bottom-0 {
    padding: 1rem;
  }

  .destination-card h3 {
    font-size: 1.125rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  .destination-card {
    width: 100%;
    max-width: 350px;
    height: 350px;
    margin: 0 auto;
  }

  .destinations-grid {
    gap: 1rem;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .destination-card {
    width: 100%;
    max-width: 400px;
    height: 380px;
  }

  .destinations-grid {
    gap: 1.5rem;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .destination-card {
    width: 100%;
    max-width: 450px;
    height: 400px;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .destination-card {
    width: 100%;
    max-width: 550px;
    height: 430px;
  }

  .destinations-grid {
    gap: 2rem;
  }

  .destination-card:hover {
    transform: translateY(-4px);
  }
}

/* Hover effects for desktop */
@media (min-width: 1024px) {
  .destination-card::before {
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

  .destination-card:hover::before {
    opacity: 1;
  }

  .destination-card:hover .absolute.bottom-0 {
    z-index: 2;
  }
}

/* Touch-friendly buttons on mobile */
@media (max-width: 1023px) {
  .destination-card button {
    min-height: 48px;
  }
}
</style>

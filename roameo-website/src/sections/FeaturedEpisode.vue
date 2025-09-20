<template>
  <section class="featured-episode-section bg-white py-16 lg:py-24 font-plus-jakarta">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-12 lg:mb-16">
        <div v-motion="getScrollSlideUpMotionBounce(230)" class="inline-flex items-center justify-center mb-6">
          <span class="bg-[#FFE759] text-black text-sm font-medium px-4 py-2 rounded-full">
            New
          </span>
        </div>
        <h2 v-motion="getScrollSlideUpMotionBounce(330)" class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <span class="text-[#0088FF]">Featured</span> Episodes
        </h2>
        <p v-motion="getScrollSlideUpMotionBounce(360)" class="text-gray-600 text-lg leading-relaxed">
          Latest travel stories from around the world!
        </p>
      </div>

      <!-- Episodes Grid -->
      <div v-motion="getScrollSlideUpMotionBounce(400)" class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <!-- Main Featured Episode (Large) -->
        <div class="lg:col-span-8">
          <div
            class="episode-card group relative bg-cover bg-center rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-[400px] sm:h-[450px] lg:h-[500px]"
            :style="{ backgroundImage: `url(${featuredEpisodeImg1})` }"
            @click="playEpisode(episodes[0])"
          >
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <!-- Play Button -->
            <div class="absolute inset-0 flex items-center justify-center z-20">
              <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <img :src="playButtonIcon" alt="Play" class="w-8 h-8 lg:w-10 lg:h-10 ml-1" />
              </div>
            </div>

            <!-- Duration Badge -->
            <div class="absolute top-6 right-6 z-10">
              <span class="bg-black/50 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-lg">
                {{ episodes[0].duration }}
              </span>
            </div>

            <!-- Bottom Content -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <div class="bg-black/40 backdrop-blur-sm p-6 rounded-[20px] border border-white/10">
                <h3 class="text-white font-bold text-xl lg:text-2xl mb-2">{{ episodes[0].title }}</h3>
                <div class="flex items-center gap-4 text-white/80 text-sm">
                  <span>{{ episodes[0].location }}</span>
                  <span>{{ episodes[0].views }} Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Side Episodes (Small) -->
        <div class="lg:col-span-4 space-y-6">
          <!-- Episode 2 -->
          <div
            class="episode-card group relative bg-cover bg-center rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-[240px]"
            :style="{ backgroundImage: `url(${featuredEpisodeImg2})` }"
            @click="playEpisode(episodes[1])"
          >
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <!-- Play Button -->
            <div class="absolute inset-0 flex items-center justify-center z-20">
              <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <img :src="playButtonIcon" alt="Play" class="w-6 h-6 ml-1" />
              </div>
            </div>

            <!-- Duration Badge -->
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded">
                {{ episodes[1].duration }}
              </span>
            </div>

            <!-- Bottom Content -->
            <div class="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
              <div class="bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <h3 class="text-white font-bold text-lg mb-1">{{ episodes[1].title }}</h3>
                <div class="flex items-center gap-3 text-white/80 text-xs">
                  <span>{{ episodes[1].location }}</span>
                  <span>{{ episodes[1].views }} Views</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Episode 3 -->
          <div
            class="episode-card group relative bg-cover bg-center rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-[240px]"
            :style="{ backgroundImage: `url(${featuredCarouselImage3})` }"
            @click="playEpisode(episodes[2])"
          >
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <!-- Play Button -->
            <div class="absolute inset-0 flex items-center justify-center z-20">
              <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <img :src="playButtonIcon" alt="Play" class="w-6 h-6 ml-1" />
              </div>
            </div>

            <!-- Duration Badge -->
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded">
                {{ episodes[2].duration }}
              </span>
            </div>

            <!-- Bottom Content -->
            <div class="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
              <div class="bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <h3 class="text-white font-bold text-lg mb-1">{{ episodes[2].title }}</h3>
                <div class="flex items-center gap-3 text-white/80 text-xs">
                  <span>{{ episodes[2].location }}</span>
                  <span>{{ episodes[2].views }} Views</span>
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
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'FeaturedEpisode',
  mixins: [ useMotion ],
  data() {
    return {
      playButtonIcon: new URL('@/assets/play-button-icon.svg', import.meta.url).href,
      featuredEpisodeImg1: new URL('@/assets/featured-episode-img1.jpg', import.meta.url).href,
      featuredEpisodeImg2: new URL('@/assets/featured-episode-img2.jpg', import.meta.url).href,
      featuredCarouselImage3: new URL('@/assets/featured-carousel-image3.jpg', import.meta.url).href,
      episodes: [
        {
          title: '24 Hours in Tokyo: A Neon Dream',
          location: 'Tokyo, Japan',
          duration: '12:24',
          views: '300K'
        },
        {
          title: '24 Hours in Tokyo: A Neon Dream',
          location: 'Tokyo, Japan',
          duration: '12:32',
          views: '12K'
        },
        {
          title: 'Digital Nomad Life in Bali',
          location: 'Bali, Indonesia',
          duration: '15:14',
          views: '5K'
        }
      ]
    }
  },
  methods: {
    playEpisode(episode) {
      console.log('Playing episode:', episode.title);
      // Add play episode logic here
    }
  }
}
</script>

<style scoped>
.episode-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Mobile optimizations */
@media (max-width: 374px) {
  .episode-card {
    height: 280px;
  }

  .episode-card .absolute.bottom-0 {
    padding: 1rem;
  }

  .episode-card h3 {
    font-size: 1rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  .episode-card {
    height: 320px;
  }

  .lg\:col-span-4 .episode-card {
    height: 200px;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .episode-card {
    height: 350px;
  }

  .lg\:col-span-4 .episode-card {
    height: 220px;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .episode-card {
    height: 380px;
  }

  .lg\:col-span-4 .episode-card {
    height: 240px;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .lg\:col-span-8 .episode-card {
    height: 500px;
  }

  .lg\:col-span-4 .episode-card {
    height: 240px;
  }

  .episode-card:hover {
    transform: translateY(-4px);
  }
}

/* Hover effects for desktop */
@media (min-width: 1024px) {
  .episode-card::before {
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

  .episode-card:hover::before {
    opacity: 1;
  }

  .episode-card:hover .absolute.bottom-0 {
    z-index: 2;
  }

  .episode-card:hover .play-button {
    transform: scale(1.1);
  }
}

/* Touch-friendly buttons on mobile */
@media (max-width: 1023px) {
  .episode-card {
    min-height: 200px;
  }
}

/* Play button animations */
.episode-card .play-button {
  transition: all 0.3s ease;
}

@media (min-width: 1024px) {
  .episode-card:hover .play-button {
    transform: scale(1.1);
  }
}
</style>

<template>
  <nav class="fixed top-0 left-0 right-0 font-plus-jakarta z-50 lg:py-5 transition-all duration-300 ease-in-out" :class="shouldApplyScrolledEffect ? 'bg-white shadow-lg' : (isMainPage ? 'bg-transparent' : 'bg-white shadow-lg')">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 md:p-0 xs:p-0">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 pl-4">
          <a href="/"><img class="h-8 w-auto" :src="shouldApplyScrolledEffect ? roameoLogoBlack : (isMainPage ? roameoLogo : roameoLogoBlack)" alt="Roameo" /></a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden lg:block">
          <div class="ml-10 flex items-baseline space-x-8 pr-4">
            <a href="/flights" class="px-3 py-2 text-sm font-medium transition-colors" :class="shouldApplyScrolledEffect ? 'text-gray-900 hover:text-gray-600' : (isMainPage ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-600')">
              Flights
            </a>
            <a href="/hotels" class="px-3 py-2 text-sm font-medium transition-colors" :class="shouldApplyScrolledEffect ? 'text-gray-900 hover:text-gray-600' : (isMainPage ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-600')">
              Hotels
            </a>
            <a href="/blog" class="px-3 py-2 text-sm font-medium transition-colors" :class="shouldApplyScrolledEffect ? 'text-gray-900 hover:text-gray-600' : (isMainPage ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-600')">
              Blog
            </a>
            <a href="/roameo-tv" class="px-3 py-2 text-sm font-medium transition-colors" :class="shouldApplyScrolledEffect ? 'text-gray-900 hover:text-gray-600' : (isMainPage ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-600')">
              Roameo TV
            </a>
            <a href="/essential" class="px-3 py-2 text-sm font-medium transition-colors" :class="shouldApplyScrolledEffect ? 'text-gray-900 hover:text-gray-600' : (isMainPage ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-600')">
              Essential
            </a>
          </div>
        </div>

        <!-- Log In Button -->
        <div class="hidden lg:block">
          <button class="px-8 py-2 rounded-full text-sm font-extrabold transition-colors cursor-pointer" :class="shouldApplyScrolledEffect ? 'bg-[#1A94FF] text-white hover:bg-[#1580e6]' : (isMainPage ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-[#1A94FF] text-white hover:bg-[#1580e6]')">
            Log In
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click.stop="toggleMobileMenu" class=" hover:text-gray-200 p-2" :class="shouldApplyScrolledEffect ? 'text-black': (isMainPage ? 'text-white' : 'text-black')">
            <svg v-show="mobileMenuOpen === false" v-motion-pop-visible class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-show="mobileMenuOpen === true" v-motion-pop-visible class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
       <transition name="slide">
        <div v-if="mobileMenuOpen" class="lg:hidden overflow-hidden" @click.stop>
          <div class="px-2 pt-2 pb-3 space-y-1 bg-[#4A9DB1]">
            <a href="/flights" class="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium">
              Flights
            </a>
            <a href="/hotels" class="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium">
              Hotels
            </a>
            <a href="/blog" class="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium">
              Blog
            </a>
            <a href="/roameo-tv" class="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium">
              Roameo TV
            </a>
            <a href="/essential" class="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium">
              Essential
            </a>
            <button class="bg-white text-gray-900 hover:bg-gray-100 w-full text-center px-6 py-2 mt-4 rounded-full text-sm font-medium transition-colors">
              Log In
            </button>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      mobileMenuOpen: false,
      scrolled: false,
      roameoLogo: new URL('@/assets/roameo-logo.svg', import.meta.url).href,
      roameoLogoBlack: new URL('@/assets/roameo-logo-black.svg', import.meta.url).href,
    };
  },
  computed: {
    isMainPage() {
      return this.$route.path === '/' || this.$route.path === '/home'
    },
    shouldApplyScrolledEffect() {
      return this.isMainPage && this.scrolled
    }
  },
  watch: {
    '$route'() {
      if (!this.isMainPage) {
        this.scrolled = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods : {
    toggleMobileMenu(){
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    handleScroll() {
      if (this.isMainPage) {
        this.scrolled = window.scrollY > 100;
      }
    }
  }
};
</script>

<style scoped>

.slide-enter-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: top;
}
.slide-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19);
  transform-origin: top;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to, .slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

</style>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-transparent font-plus-jakarta z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img class="h-8 w-auto" :src=roameoLogo alt="Roameo" />
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="/flights" class="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
              Flights
            </a>
            <a href="/hotels" class="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
              Hotels
            </a>
            <a href="/blog" class="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="/roameo-tv" class="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
              Roameo TV
            </a>
            <a href="/essential" class="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
              Essential
            </a>
          </div>
        </div>

        <!-- Log In Button -->
        <div class="hidden md:block">
          <button class="bg-white text-gray-900 hover:bg-gray-100 px-8 py-2 rounded-full text-sm font-extrabold transition-colors cursor-pointer">
            Log In
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white hover:text-gray-200 p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
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
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      mobileMenuOpen: false,

      roameoLogo: new URL('@/assets/roameo-logo.svg', import.meta.url).href,
    };
  },
};
</script>
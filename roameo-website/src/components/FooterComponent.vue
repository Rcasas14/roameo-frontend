<template>
  <footer class="bg-gradient-to-r from-[#1A94FF] to-[#0B7CE6] text-white font-plus-jakarta">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">

        <!-- Logo and Tagline Section -->
        <div class="lg:col-span-2 mb-8 lg:mb-0">
          <div class="flex items-center mb-4">
            <a href="/"><img :src="roameoLogo" alt="Roameo" class="h-8 w-auto mr-3" /></a>
            <span class="text-2xl font-bold"></span>
          </div>
          <p class="text-lg font-medium text-white/90">
            Travel Boldly, Explore Proudly
          </p>
        </div>

        <!-- Top Destinations -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-bold mb-4">Top Destinations</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Paris</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Tokyo</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Bali</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">New York City</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Cape Town</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Rome</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Sydney</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-bold mb-4">Support</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Payment & Refunds</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Travel Safety Tips</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <!-- Locations -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-bold mb-4">Locations</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Asia</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Europe</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">North America</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">South America</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Oceania</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Africa</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-bold mb-4">Company</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">About Roameo</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Press & Media</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Partner With Us</a></li>
            <li><a href="#" class="text-white/80 hover:text-white transition-colors">Community Guidelines</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-white/20 mt-12 pt-8">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

          <!-- Copyright -->
          <div class="text-sm text-white/80">
            © 2024 Roameo.net. All rights reserved
          </div>

          <!-- Social Media Icons -->
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-white/90 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
              <img :src="facebookIcon" alt="Facebook" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-white/90 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
              <img :src="instagramIcon" alt="Instagram" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-white/90 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
              <img :src="youtubeIcon" alt="YouTube" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-white/90 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
              <img :src="twitterIcon" alt="Twitter" class="w-5 h-5" />
            </a>
          </div>

          <!-- Legal Links -->
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-white/80 hover:text-white transition-colors">Privacy & Policy</a>
            <a href="#" class="text-white/80 hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      roameoLogo: new URL('@/assets/roameo-logo.svg', import.meta.url).href,
      facebookIcon: new URL('@/assets/facebook-icon.svg', import.meta.url).href,
      instagramIcon: new URL('@/assets/instagram-icon.svg', import.meta.url).href,
      youtubeIcon: new URL('@/assets/youtube-icon.svg', import.meta.url).href,
      twitterIcon: new URL('@/assets/X-icon.svg', import.meta.url).href,
    }
  }
}
</script>

<style scoped>
/* Mobile optimizations */
@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Tablet optimizations */
@media (min-width: 768px) and (max-width: 1023px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Hover effects for desktop */
@media (min-width: 1024px) {
  footer a:hover {
    transform: translateX(2px);
  }

  footer .social-icon:hover {
    transform: translateY(-2px);
  }
}
</style>
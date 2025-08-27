<template>
  <section class="partner-section bg-gray-50 py-16 lg:py-24 font-plus-jakarta">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
          Partnered and Trusted By
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          Backed by brands that share our passion for inclusive, unforgettable travel.
        </p>
      </div>
      
      <div class="partner-logos grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
        <div class="partner-logo-container flex flex-col items-center justify-center">
          <img 
            :src="tripcmLogo" 
            alt="Trip.com" 
            class="h-[51px] sm:h-[67px] lg:h-[83px] w-auto object-contain transition-all duration-300 hover:scale-105 hover:filter hover:grayscale"
          >
          <p class="text-sm font-medium text-gray-700 mt-3">Trip.com</p>
        </div>
        
        <div class="partner-logo-container flex flex-col items-center justify-center">
          <img 
            :src="agodaLogo" 
            alt="Agoda" 
            class="h-[51px] sm:h-[67px] lg:h-[83px] w-auto object-contain transition-all duration-300 hover:scale-105 hover:filter hover:grayscale"
          >
          <p class="text-sm font-medium text-gray-700 mt-3">Agoda</p>
        </div>
        
        <div class="partner-logo-container flex flex-col items-center justify-center">
          <img 
            :src="flightNetworkLogo" 
            alt="Flight Network" 
            class="h-[51px] sm:h-[67px] lg:h-[83px] w-auto object-contain transition-all duration-300 hover:scale-105 hover:filter hover:grayscale"
          >
          <p class="text-sm font-medium text-gray-700 mt-3">Flight Network</p>
        </div>
        
        <div class="partner-logo-container flex flex-col items-center justify-center">
          <img 
            :src="zenHotelsLogo" 
            alt="Zenhotels" 
            class="h-[51px] sm:h-[67px] lg:h-[83px] w-auto object-contain transition-all duration-300 hover:scale-105 hover:filter hover:grayscale"
          >
          <p class="text-sm font-medium text-gray-700 mt-3">Zenhotels</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnerSection',
  data() {
    return {
      tripcmLogo: new URL('@/assets/tripcom-logo.png', import.meta.url).href,
      agodaLogo: new URL('@/assets/agoda-logo.png', import.meta.url).href,
      flightNetworkLogo: new URL('@/assets/flight-network-logo.png', import.meta.url).href,
      zenHotelsLogo: new URL('@/assets/zen-hotels-logo.png', import.meta.url).href,
    }
  }
}
</script>

<style scoped>
.partner-section {
  min-height: 400px;
}

.partner-logo-container {
  min-height: 80px;
}

.partner-logo-container img {
  max-width: 140px;
  opacity: 0.7;
}

.partner-logo-container img:hover {
  opacity: 1;
}

/* Mobile optimizations */
@media (max-width: 374px) {
  .partner-section {
    padding: 3rem 0;
  }
  
  .partner-logos {
    gap: 1.5rem;
  }
  
  .partner-logo-container img {
    height: 2.5rem;
    max-width: 100px;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  .partner-section {
    padding: 4rem 0;
  }
  
  .partner-logos {
    gap: 2rem;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  .partner-logos {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  .partner-logos {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  .partner-logos {
    gap: 3rem;
  }
  
  .partner-logo-container img {
    max-width: 160px;
  }
}
</style>
<template>
  <div
    id="home"
    class="h-full bg-cover bg-center bg-no-repeat relative min-h-screen"
    :style="{
      backgroundImage: `url(${heroImage})`,
      backgroundAttachment: 'fixed'
    }"
  >
    <!-- Decorative Elements -->
    <!-- Top Left Asterisk -->
    <div class="absolute top-35 left-36 z-10 opacity-90 hidden lg:block">
      <img :src="unionAsset" alt="decorative asterisk" class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
    </div>

    <!-- Top Right Grid Dots -->
    <div class="absolute top-35 right-60 z-10 opacity-90 hidden lg:block">
      <img :src="gridDots" alt="decorative dots" class="w-20 h-12 md:w-24 md:h-16 lg:w-34 lg:h-25">
    </div>

    <!-- Bottom Left Grid Dots -->
    <div class="absolute bottom-32 left-28 z-10 opacity-90 hidden lg:block">
      <img :src="gridDots" alt="decorative dots" class="w-16 h-10 md:w-20 md:h-12 lg:w-30 lg:h-30">
    </div>

    <section class="hero-section min-h-screen font-plus-jakarta grid place-items-center relative">
      <div
        id="main"
        class="hero-container px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center w-full max-w-7xl py-20"
      >
        <h1 class="hero-title text-white font-semibold text-3xl xs:text-[40px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[86px] leading-tight drop-shadow-lg">
          Travel Boldly, Explore Proudly
        </h1>
        <div class="w-full max-w-6xl mt-8">
          <flight-booking-form></flight-booking-form>
        </div>
      </div>
      <div class="fixed-btn absolute bottom-19 right-15 z-15 hidden lg:block">
        <!-- Bottom Right Asterisk -->
        <a href="#" class="px-2 py-4 bg-[#FFE759] uppercase rounded-xl w-[7.25rem] h-[36px] text-[.625rem] cursor-pointer font-bold flex items-center justify-center gap-x-2 z-15">
          <span class="text-[#000]">explore</span>
          <img :src="downArrow" alt="" class="w-3 h-3">
        </a>
        <div class="z-[-1] absolute bottom-0 top-[-53px]">
          <img :src="unionAsset" alt="decorative asterisk" class="w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24">
        </div>
      </div>
    </section>
  </div>

  <partner-section></partner-section>
</template>

<script>
import FlightBookingForm from '@/components/FlightBookingForm.vue';
import PartnerSection from '@/sections/PartnerSection.vue';

export default {
  name: 'MainPage',
  components: {
    FlightBookingForm,
    PartnerSection,
  },
  data() {
    return {
      heroImage: new URL('@/assets/roameo-hero-image.jpg', import.meta.url).href,
      downArrow: new URL('@/assets/down-arrow.svg', import.meta.url).href,
      unionAsset: new URL('@/assets/union-asset.svg', import.meta.url).href,
      gridDots: new URL('@/assets/grid-dots.svg', import.meta.url).href,
      //heroImage: new URL('@/assets/hero-image-2.jpg', import.meta.url).href,
    }
  }
}
</script>

<style scoped>
/* Additional responsive background handling */
#home {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

/* Decorative elements responsive positioning */

@media (min-width: 641px) and (max-width: 768px) {
  /* Adjust positioning for tablet sizes */
  .absolute:nth-of-type(1) { /* Top Left Asterisk */
    top: 1rem;
    left: 1rem;
  }

  .absolute:nth-of-type(2) { /* Top Right Grid Dots */
    top: 1rem;
    right: 1rem;
  }

  .absolute:nth-of-type(3) { /* Bottom Left Grid Dots */
    bottom: 8rem;
    left: 1rem;
  }

  .absolute:nth-of-type(4) { /* Bottom Right Asterisk */
    bottom: 1rem;
    right: 1rem;
  }
}

/* Extra small devices (mobile) */
@media (max-width: 374px) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center 35%;
  }

  .hero-container {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  #home {
    background-attachment: scroll; /* Better performance on mobile */
    background-size: cover;
    background-position: center 25%;
  }

  .hero-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .hero-title{
    font-size: 2.5rem;
    margin: .625rem 0;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center 20%;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
  }
  .hero-title{
    margin: 2.125rem 0;
  }

}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  #home {
    background-attachment: fixed; /* Parallax effect for larger screens */
    background-size: cover;
    background-position: center center;
  }
  .hero-title{
    margin: 2.875rem 0;
  }
}

/* XL devices - 1280px+ */
@media (min-width: 1280px) {
  #home {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}

/* Ensure content doesn't get cut off on short screens */
@media (max-height: 600px) {
  .hero-section {
    min-height: 100vh;
    padding: 2rem 0;
  }
}

/* Ultra-wide screens - 4xl+ */
@media (min-width: 1920px) {
  #home {
    background-position: center center;
    background-size: cover;
  }
}

/* Fixed button hover effect */
.fixed-btn a:hover {
  background-color: #f5d943;
  transition: all 0.3s ease;
}

/* Add subtle animations to decorative elements */
.absolute img[alt*="decorative"] {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.absolute img[alt*="decorative"]:hover {
  transform: scale(1.05);
}
</style>

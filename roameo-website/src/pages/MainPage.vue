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
    <div v-motion="getSlideUpMotion(120)" class="el-absolute absolute top-35 left-36 z-10 opacity-90 hidden lg:block">
      <img :src="unionAsset" alt="decorative asterisk" class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
    </div>

    <!-- Top Right Grid Dots -->
    <div v-motion="getSlideUpMotion(120)" class="el-absolute absolute top-35 right-60 z-10 opacity-90 hidden lg:block">
      <img :src="gridDots" alt="decorative dots" class="w-20 h-12 md:w-24 md:h-16 lg:w-34 lg:h-25">
    </div>

    <!-- Bottom Left Grid Dots -->
    <!-- <div v-motion="getSlideUpMotion(120)" class="el-absolute absolute bottom-32 left-28 z-10 opacity-90 hidden lg:block">
      <img :src="gridDots" alt="decorative dots" class="w-16 h-10 md:w-20 md:h-12 lg:w-30 lg:h-30">
    </div> -->

    <section class="hero-section min-h-screen font-plus-jakarta grid place-items-center relative">
      <div
        id="main"
        class="hero-container px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center w-full max-w-7xl py-20"
      >
        <h1 v-motion="getSlideUpMotion(200)"
            class="hero-title text-white font-semibold text-[30px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[5.375rem] leading-tight drop-shadow-lg mt-[60px]">
          Travel Boldly, Explore Proudly
        </h1>
        <div class="w-full max-w-6xl mt-4 sm:mt-8">
          <flight-booking-form></flight-booking-form>
           <!-- <flight-search-widget></flight-search-widget> -->

        </div>
      </div>
      <div class="fixed-btn el-absolute absolute bottom-19 right-15 z-15 hidden lg:block">
        <!-- Bottom Right Asterisk -->
        <a href="#partner-section" class="px-2 py-4 bg-[#FFE759] uppercase rounded-xl w-[116px] h-[2.25rem] text-[10px] cursor-pointer font-bold flex items-center justify-center gap-x-2 z-15">
          <span class="text-[#000]">explore</span>
          <img :src="downArrow" alt="" class="w-3 h-3">
        </a>
        <div v-motion="getSlideUpMotion(200)" class="z-[-1] el-absolute lg:absolute bottom-0 top-[-3.3125rem] hidden">
          <img :src="unionAsset" alt="decorative asterisk" class="w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24">
        </div>
      </div>
      <div class=" el-absolute absolute bottom-[-4.25rem] hidden lg:block">
        <img :src="unionPng" alt="" class="h-auto w-[135px]">
      </div>
    </section>
  </div>

  <partner-section></partner-section>
  <destination-section></destination-section>
  <go-next-section></go-next-section>
  <feature-stay-section></feature-stay-section>
  <travel-journey></travel-journey>
  <top-travel-tea></top-travel-tea>
  <roameo-tv></roameo-tv>
  <featured-episode></featured-episode>
  <testimonials-section></testimonials-section>
  <newsletter-section></newsletter-section>
  <faq-section></faq-section>

</template>

<script>
import FlightBookingForm from '@/components/FlightBookingForm.vue';
//import FlightSearchWidget from '@/components/FlightSearchWidget.vue';

import PartnerSection from '@/sections/PartnerSection.vue';
import DestinationSection from '@/sections/DestinationSection.vue';
import GoNextSection from '@/sections/GoNextSection.vue';
import FeatureStaySection from '@/sections/FeatureStaySection.vue';
import TravelJourney from '@/sections/TravelJourney.vue';
import RoameoTv from '@/sections/RoameoTv.vue';
import TestimonialsSection from '@/sections/TestimonialsSection.vue';
import NewsletterSection from '@/sections/NewsletterSection.vue';
import TopTravelTea from '@/sections/TopTravelTea.vue';
import FaqSection from '@/sections/FaqSection.vue';
import FeaturedEpisode from '@/sections/FeaturedEpisode.vue';

import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'MainPage',
  mixins: [ useMotion ],

  components: {
    FlightBookingForm,
    //FlightSearchWidget,

    PartnerSection,
    DestinationSection,
    GoNextSection,
    FeatureStaySection,
    TravelJourney,
    RoameoTv,
    TestimonialsSection,
    NewsletterSection,
    TopTravelTea,
    FaqSection,
    FeaturedEpisode,
  },
  data() {
    return {
      //heroImage: new URL('@/assets/roameo-hero-image.jpg', import.meta.url).href,
      downArrow: new URL('@/assets/down-arrow.svg', import.meta.url).href,
      unionAsset: new URL('@/assets/union-asset.svg', import.meta.url).href,
      gridDots: new URL('@/assets/grid-dots.svg', import.meta.url).href,
      heroImage: new URL('@/assets/hero-image-2.jpg', import.meta.url).href,
      unionPng: new URL('@/assets/union-png.png', import.meta.url).href,
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

@media (min-width: 40.0625rem) and (max-width: 48rem) {
  /* Adjust positioning for tablet sizes */
  .el-absolute:nth-of-type(1) { /* Top Left Asterisk */
    top: 16px;
    left: 16px;
  }

  .el-absolute:nth-of-type(2) { /* Top Right Grid Dots */
    top: 16px;
    right: 16px;
  }

  .el-absolute:nth-of-type(3) { /* Bottom Left Grid Dots */
    bottom: 128px;
    left: 16px;
  }

  .el-absolute:nth-of-type(4) { /* Bottom Right Asterisk */
    bottom: 16px;
    right: 16px;
  }
}

/* Extra small devices (mobile) */
@media (max-width: 23.375rem) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center 35%;
  }

  .hero-container {
    padding-top: 24px;
    padding-bottom: 24px;
  }
}

/* XS devices - 23.4375rem+ */
@media (min-width: 23.4375rem) and (max-width: 39.9375rem) {
  #home {
    background-attachment: scroll; /* Better performance on mobile */
    background-size: cover;
    background-position: center 25%;
  }

  .hero-container {
    padding-top: 32px;
    padding-bottom: 32px;
  }

}

/* SM devices - 40rem+ */
@media (min-width: 40rem) and (max-width: 47.9375rem) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center 20%;
  }
}

/* MD devices - 48rem+ */
@media (min-width: 48rem) and (max-width: 63.9375rem) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
  }
  .hero-title{
    margin: 34px 0;
  }

}

/* LG devices and above - 64rem+ */
@media (min-width: 64rem) {
  #home {
    background-attachment: fixed; /* Parallax effect for larger screens */
    background-size: cover;
    background-position: center center;
  }
  .hero-title{
    margin: 46px 0;
  }
}

/* XL devices - 80rem+ */
@media (min-width: 80rem) {
  #home {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}

/* Ensure content doesn't get cut off on short screens */
@media (max-height: 37.5rem) {
  .hero-section {
    min-height: 100vh;
    padding: 32px 0;
  }
}

/* Ultra-wide screens - 4xl+ */
@media (min-width: 120rem) {
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
.el-absolute img[alt*="decorative"] {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.el-absolute img[alt*="decorative"]:hover {
  transform: scale(1.05);
}
</style>

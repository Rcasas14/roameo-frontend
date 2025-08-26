<template>
  <div
    id="home"
    class="h-full bg-cover bg-center bg-no-repeat relative min-h-screen"
    :style="{
      backgroundImage: `url(${heroImage})`,
      backgroundAttachment: 'fixed'
    }"
  >
    <section class="hero-section min-h-screen font-plus-jakarta grid place-items-center">
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
    </section>
  </div>
</template>

<script>
import FlightBookingForm from '@/components/FlightBookingForm.vue';

export default {
  name: 'MainPage',
  components: {
    FlightBookingForm,
  },
  data() {
    return {
      heroImage: new URL('@/assets/roameo-hero-image.jpg', import.meta.url).href,
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
</style>

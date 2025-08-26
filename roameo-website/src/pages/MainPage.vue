<template>
  <div
    id="home"
    class=" h-full bg-cover bg-center bg-no-repeat relative"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <section class="hero-section h-screen font-plus-jakarta grid place-items-center">
      <div id="main" class="hero-container px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center w-full max-w-7xl ">
        <h1 class="hero-title text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[86px] my-14 leading-tight">
          Travel Boldly, Explore Proudly
        </h1>
        <div class="w-full max-w-6xl mt-10">
          <flight-booking-form></flight-booking-form>
        </div>
      </div>
    </section>
  </div>
</template>

  <script>
  import FlightBookingForm from '@/components/FlightBookingForm.vue';
  //import TempComponent from '@/components/TempComponent.vue';

  export default {
    name: 'MainPage',
    components:{
      FlightBookingForm,
      //TempComponent,
    },
    data(){
      return{
        heroImage: new URL('@/assets/roameo-hero-image.jpg', import.meta.url).href,
      }
    }
  }
</script>
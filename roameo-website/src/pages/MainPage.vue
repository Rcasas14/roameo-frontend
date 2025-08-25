<template>

  <flight-booking-form></flight-booking-form>
  <temp-component></temp-component>

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

      }
    }
  }
</script>
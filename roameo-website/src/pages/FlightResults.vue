<template>
<div class="h-full min-h-screen bg-gray-50 font-plus-jakarta">
  <!-- Flight Booking Section -->
  <section class="font-plus-jakarta relative bg-[#0088FF]">
    <div class="flight-booking-container flex flex-col justify-center items-center xl:pt-[10rem] xl:pb-[4rem] py-8">
      <flight-booking-form></flight-booking-form>
    </div>
  </section>

  <!-- Date Navigation -->
  <section class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-4 overflow-x-auto">
        <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <div class="flex space-x-2 sm:space-x-4 mx-4">
          <div v-for="date in dateOptions" :key="date.range" 
               :class="[
                 'flex flex-col items-center px-3 sm:px-4 py-3 rounded-lg cursor-pointer transition-colors whitespace-nowrap',
                 date.active ? 'bg-blue-100 border-2 border-blue-500' : 'hover:bg-gray-100'
               ]">
            <span class="text-xs sm:text-sm font-medium text-gray-900">{{ date.range }}</span>
            <span class="text-xs text-gray-500 mt-1">{{ date.price }}</span>
          </div>
        </div>
        
        <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Filters Sidebar -->
      <aside class="w-full lg:w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
        <!-- Tickets Filter -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Tickets</h3>
          <div class="space-y-3">
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="tickets" value="all" checked class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">All Tickets</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="tickets" value="best" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">Best Tickets</span>
            </label>
          </div>
        </div>

        <!-- Baggage Type Filter -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Baggage Type</h3>
          <div class="space-y-3">
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="baggage" value="all" checked class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">All</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="baggage" value="without" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">Without Baggage</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="baggage" value="with" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">Luggage and Carry-on Included</span>
            </label>
          </div>
        </div>

        <!-- Stops Filter -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Stops</h3>
          <div class="space-y-3">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">All</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">Direct</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">1 Stop</span>
            </label>
          </div>
        </div>

        <!-- Duration Filter -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Duration</h3>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Airlines Filter -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Airlines</h3>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
          </div>
          <div class="space-y-3">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">All</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">Cebu Pacific</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" checked class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              <span class="ml-3 text-sm text-gray-700">Philippine Airlines</span>
            </label>
          </div>
        </div>
      </aside>

      <!-- Flight Results -->
      <main class="flex-1">
        <div class="space-y-4">
          <!-- Flight Result Card -->
          <div v-for="flight in flights" :key="flight.id" 
               class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <!-- Flight Info -->
              <div class="flex items-center space-x-4 flex-1">
                <!-- Airline Logo -->
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <img :src="flight.logo" :alt="flight.airline" class="w-6 h-6">
                  </div>
                </div>
                
                <!-- Route Info -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center space-x-2 mb-1">
                    <span :class="[
                      'px-2 py-1 text-xs font-medium rounded',
                      flight.badge === 'Cheapest' ? 'bg-blue-100 text-blue-800' : 'bg-cyan-100 text-cyan-800'
                    ]">{{ flight.badge }}</span>
                    <span v-if="flight.carryOnIncluded" class="px-2 py-1 text-xs font-medium rounded bg-cyan-100 text-cyan-800">
                      Carry-on included
                    </span>
                  </div>
                  
                  <div class="flex items-center space-x-4">
                    <div class="text-center">
                      <div class="text-lg font-semibold text-gray-900">{{ flight.departTime }}</div>
                      <div class="text-sm text-gray-500">{{ flight.departCode }}</div>
                    </div>
                    
                    <div class="flex-1 flex items-center justify-center">
                      <div class="w-full h-px bg-gray-300 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                          <span class="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">Direct</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="text-center">
                      <div class="text-lg font-semibold text-gray-900">{{ flight.arriveTime }}</div>
                      <div class="text-sm text-gray-500">{{ flight.arriveCode }}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Price and Select -->
              <div class="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <div class="text-right">
                  <div class="text-2xl font-bold text-blue-600">₱{{ flight.price.toLocaleString() }}</div>
                  <div class="text-sm text-gray-500">{{ flight.priceType }}</div>
                </div>
                <button class="w-full sm:w-auto bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 px-6 rounded-lg border border-blue-200 transition-colors">
                  SELECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>

  <!-- FAQ Section -->
  <faq-section></faq-section>
</div>
</template>

<script>
import FlightBookingForm from '@/components/FlightBookingForm.vue';
import FaqSection from '@/sections/FaqSection.vue';

export default{
  name: 'FlightResults',

  components:{
    FlightBookingForm,
    FaqSection,
  },

  data(){
    return {
      dateOptions: [
        { range: 'Sep 1-7', price: '₱12,345', active: false },
        { range: 'Sep 8-14', price: '₱11,890', active: true },
        { range: 'Sep 15-21', price: '₱13,200', active: false },
        { range: 'Sep 22-28', price: '₱12,750', active: false },
        { range: 'Sep 29-Oct 5', price: '₱14,100', active: false }
      ],
      flights: [
        {
          id: 1,
          airline: 'Cebu Pacific',
          logo: new URL('@/assets/cebu-pacific-logo.svg', import.meta.url).href,
          badge: 'Cheapest',
          carryOnIncluded: true,
          departTime: '06:00',
          departCode: 'MNL',
          arriveTime: '07:30',
          arriveCode: 'CEB',
          price: 4567,
          priceType: 'per person'
        },
        {
          id: 2,
          airline: 'Philippine Airlines',
          logo: new URL('@/assets/pal-logo.svg', import.meta.url).href,
          badge: 'Fastest',
          carryOnIncluded: false,
          departTime: '08:15',
          departCode: 'MNL',
          arriveTime: '09:45',
          arriveCode: 'CEB',
          price: 5890,
          priceType: 'per person'
        },
        {
          id: 3,
          airline: 'Cebu Pacific',
          logo: new URL('@/assets/cebu-pacific-logo.svg', import.meta.url).href,
          badge: 'Best Value',
          carryOnIncluded: true,
          departTime: '10:30',
          departCode: 'MNL',
          arriveTime: '12:00',
          arriveCode: 'CEB',
          price: 4890,
          priceType: 'per person'
        },
        {
          id: 4,
          airline: 'Philippine Airlines',
          logo: new URL('@/assets/pal-logo.svg', import.meta.url).href,
          badge: 'Premium',
          carryOnIncluded: true,
          departTime: '14:20',
          departCode: 'MNL',
          arriveTime: '15:50',
          arriveCode: 'CEB',
          price: 6750,
          priceType: 'per person'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>

<template>
<div class="h-full min-h-screen bg-gray-50 font-plus-jakarta">
  <!-- Flight Booking Section -->
  <section class="font-plus-jakarta relative bg-[#0088FF]">
    <!-- Currency Converter -->
    <div class="absolute top-4 right-4 sm:top-[160px] sm:right-[50px] z-10">
      <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 cursor-pointer hover:bg-white/20 transition-colors">
        <img :src="phFlag" alt="Philippines" class="w-4 h-3 sm:w-5 sm:h-4 mr-1 sm:mr-2">
        <span class="text-white text-xs sm:text-sm font-medium mr-1">PHP</span>
        <svg class="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>

    <div class="flight-booking-container  xl:pt-[10rem] xl:pb-[4rem] py-8 w-full pt-[9rem] ">
      <flight-booking-form></flight-booking-form>
    </div>
  </section>

  <!-- Date Navigation -->
  <section class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-4 overflow-x-auto">
        <button class="p-2 hover:bg-gray-100 rounded-[16px] transition-colors border bg-[#fcfcfc] border-gray-200 px-5 py-7 cursor-pointer">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div class="flex space-x-2 sm:space-x-3 mx-4">
          <div v-for="date in dateOptions" :key="date.range"
                  :class="['grid grid-cols-1 place-items-center px-3 sm:px-4 py-3 rounded-lg cursor-pointer transition-colors whitespace-nowrap border bg-[#fcfcfc] border-gray-300',
                  date.active ? 'bg-cyan-100 border border-sky-500' : 'hover:bg-cyan-100'
                ]"
               class="lg:w-[200px] lg:h-[80px]">
            <span class="text-xs sm:text-sm font-medium text-gray-900">{{ date.range }}</span>
            <span class="text-xs text-gray-500 mt-1">{{ `from ${date.price}` }}</span>
          </div>
        </div>

        <button class="p-2 hover:bg-gray-100 rounded-[16px] transition-colors border bg-[#fcfcfc] border-gray-200 px-5 py-7 cursor-pointer">
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
               class="bg-white rounded-lg shadow-sm border border-gray-200 lg:border-l-3 lg:border-l-[#FF3897] p-4 hover:shadow-md transition-shadow">
            <!-- Mobile Grid Layout -->
            <div class="grid grid-cols-1 gap-4 sm:hidden">
              <!-- Header Row: Airline Logo + Badges + Price -->
              <div class="grid grid-cols-12 gap-2 items-center">
                <div class="col-span-3">
                  <img :src="flight.logo" :alt="flight.airline" class="w-16 h-10 object-contain">
                </div>
                <div class="col-span-6 flex flex-wrap gap-1">
                  <span :class="[
                    'px-2 py-1 text-xs font-medium rounded whitespace-nowrap',
                    flight.badge === 'Cheapest' ? 'bg-blue-100 text-blue-800' : 'bg-cyan-100 text-cyan-800'
                  ]">{{ flight.badge }}</span>
                  <span v-if="flight.carryOnIncluded" class="px-2 py-1 text-xs font-medium rounded bg-cyan-100 text-cyan-800 whitespace-nowrap">
                    Carry-on included
                  </span>
                </div>
                <div class="col-span-3 text-right">
                  <div class="text-lg font-bold text-blue-600">₱{{ flight.price.toLocaleString() }}</div>
                  <div class="text-xs text-gray-500">{{ flight.priceType }}</div>
                </div>
              </div>

              <!-- Flight Route Row -->
              <div class="grid grid-cols-7 gap-2 items-center">
                <div class="col-span-2 text-center">
                  <div class="text-lg font-semibold text-gray-900">{{ flight.departTime }}</div>
                  <div class="text-sm text-gray-500">{{ flight.departCode }}</div>
                </div>

                <div class="col-span-3 flex items-center justify-center px-2">
                  <div class="w-full h-px bg-gray-300 relative">
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span class="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded whitespace-nowrap">Direct</span>
                    </div>
                  </div>
                </div>

                <div class="col-span-2 text-center">
                  <div class="text-lg font-semibold text-gray-900">{{ flight.arriveTime }}</div>
                  <div class="text-sm text-gray-500">{{ flight.arriveCode }}</div>
                </div>
              </div>

              <!-- Select Button Row -->
              <div class="grid grid-cols-1 ">
                <button class="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-200 transition-colors cursor-pointer">
                  SELECT
                </button>
              </div>
            </div>

            <!-- Desktop Layout (unchanged) -->
            <div class="hidden sm:flex items-center justify-between gap-4 px-2 py-4 relative">
              <!-- Flight Info -->
              <div class="flex items-center space-x-4 flex-1">
                <!-- Airline Logo -->
                <div class="flex-shrink-0">
                  <div class="w-20 h-12 flex flex-col items-center justify-center">
                    <img :src="flight.logo" :alt="flight.airline" class="w-full h-full object-contain">
                    <p class="text-gray-500 text-nowrap py-1">{{ flight.label }}</p>
                  </div>
                </div>

                <!-- Route Info -->
                <div class="flex-1 min-w-0 px-5">
                  <div class="flex items-center space-x-2 mb-2">
                    <span :class="[
                      'px-2 py-1 text-xs font-medium rounded',
                      flight.badge === 'Cheapest' ? 'bg-[#0088FF] text-white absolute top-0 left-0' : 'bg-cyan-100 text-cyan-800'
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
              <div class="flex flex-col items-center space-y-3 w-auto min-w-[140px]">
                <div class="text-right">
                  <div class="text-xl font-bold text-blue-600">₱{{ flight.price.toLocaleString() }}</div>
                  <div class="text-sm text-gray-500">{{ flight.priceType }}</div>
                </div>
                <button class="bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold py-2 px-6 rounded-[20px] border border-blue-200 transition-colors text-[10px] w-full">
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
      phFlag: new URL('@/assets/ph-flag.svg', import.meta.url).href,
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
          priceType: 'Round Trip',
          label: 'Cebu Pacific'
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
          arriveCode: 'PAL',
          price: 5890,
          priceType: 'Round Trip',
          label: 'PAL'
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
          priceType: 'Round Trip',
          label: 'Cebu Pacific'
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
          arriveCode: 'PAL',
          price: 6750,
          priceType: 'Round Trip',
          label: 'PAL'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>

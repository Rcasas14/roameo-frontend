<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-6xl mx-auto font-plus-jakarta">
    <!-- Tab Navigation -->
    <div class="flex mb-6 flex-row justify-center items-center">
      <button
        @click="activeTab = 'flights'"
        :class="[
          'flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200',
          activeTab === 'flights'
            ? 'bg-yellow-400 text-black shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        ]"
      >
        <img :src="planeIcon" alt="Flight" class="w-4 h-4 mr-2" />
        Flights
      </button>
      <button
        @click="activeTab = 'hotels'"
        :class="[
          'flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ml-2',
          activeTab === 'hotels'
            ? 'bg-yellow-400 text-black shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        ]"
      >
        <img :src="hotelIcon" alt="Hotel" class="w-4 h-4 mr-2" />
        Hotels
      </button>
    </div>

    <!-- Flight Booking Form -->
    <!-- Flights -->
    <div v-if="activeTab === 'flights'" class="space-y-4">
      <!-- origin-and-destination -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          <!-- From -->
          <div class="md:col-span-1">
            <div class="flex flex-col">
              <div class="flex flex-row justify-start items-center gap-x-1 pl-2">
                <img :src="locationIcon" alt="location" class=" w-4 h-4 text-gray-400">
                <label class="block text-sm text-gray-600">From</label>
              </div>
              <input
                v-model="fromLocation"
                placeholder="use current location api"
                class="w-full pl-2 pr-2 py-1 border border-gray-200 rounded-lg border-0 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                >
            </div>
          </div>

          <!-- To -->
          <div class="md:col-span-1 ">
            <div class="flex flex-col">
              <div class="flex flex-row justify-start items-center gap-x-1 pl-2">
                <img :src="locationIcon" alt="location" class=" w-4 h-4 text-gray-400">
                <label class="block text-sm text-gray-600">To</label>
              </div>
              <input
                v-model="toLocation"
                placeholder="use current location api"
                class="w-full pl-2 pr-2 py-1 border border-gray-200 rounded-lg border-0 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                >
            </div>
          </div>

          <!-- Depart -->
          <div class="md:col-span-1">
            <div class="flex flex-col">
              <div class="flex flex-row justify-start items-center gap-x-1 pl-2">
                <img :src="dateIcon" alt="location" class=" w-4 h-4 text-gray-400">
                <label class="block text-sm text-gray-600">Depart</label>
              </div>
              <input
                v-model="departDate"
                placeholder="use current location api"
                class="w-full pl-2 pr-2 py-1 border border-gray-200 rounded-lg border-0 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="date"
                >
            </div>

          </div>

          <!-- Return -->
          <div class="md:col-span-1">
            <div class="flex flex-col">
              <div class="flex flex-row justify-start items-center gap-x-1 pl-2">
                <img :src="dateIcon" alt="location" class=" w-4 h-4 text-gray-400">
                <label class="block text-sm text-gray-600">Return</label>
              </div>
              <input
                v-model="returnDate"
                placeholder="use current location api"
                class="w-full pl-2 pr-2 py-1 border border-gray-200 rounded-lg border-0 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="date"
                >
            </div>

          </div>

          <!-- Search Button -->
          <div class="md:col-span-1">
            <div class="flex justify-end ">
              <button
                @click="searchHotels"
                class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>

        </div>
    </div>

    <!-- Swap Button -->
    <div class="flex justify-center">
          <button @click="swapLocations" class="p-2 bg-[#0088FF] rounded-full transition-colors">
            <img :src="arrowsIcon" alt="Swap" class="w-6 h-6" />
          </button>
    </div>




    <!-- Hotel Booking Form -->
    <div v-if="activeTab === 'hotels'" class="space-y-4">
      <!-- Location -->
      <div>
        <label class="block text-sm text-gray-600 mb-2">Location</label>
        <div class="relative">
          <img :src="locationIcon" alt="Location" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            v-model="hotelLocation"
            type="text"
            placeholder="Where are you going?"
            class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Check-in and Check-out -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Check-in -->
        <div>
          <label class="block text-sm text-gray-600 mb-2">Check-in</label>
          <div class="relative">
            <img :src="dateIcon" alt="Date" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              v-model="checkinDate"
              type="date"
              class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <!-- Check-out -->
        <div>
          <label class="block text-sm text-gray-600 mb-2">Check-out</label>
          <div class="relative">
            <img :src="dateIcon" alt="Date" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              v-model="checkoutDate"
              type="date"
              class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <!-- Search Button -->
      <div class="flex justify-end mt-6">
        <button
          @click="searchHotels"
          class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightBookingForm',
  data() {
    return {
      activeTab: 'flights',

      // Flight data
      fromLocation: 'Manila, Philippines (PH)',
      toLocation: 'Bali, Indonesia (ID)',
      departDate: '2025-01-01',
      returnDate: '2025-01-05',

      // Hotel data
      hotelLocation: '',
      checkinDate: '',
      checkoutDate: '',

      // Icons
      dateIcon: new URL('@/assets/date-icon.svg', import.meta.url).href,
      arrowsIcon: new URL('@/assets/arrows-icon.svg', import.meta.url).href,
      locationIcon: new URL('@/assets/location-icon.svg', import.meta.url).href,
      planeIcon: new URL('@/assets/plane-icon.svg', import.meta.url).href,
      hotelIcon: new URL('@/assets/hotel-icon.svg', import.meta.url).href,
    };
  },
  methods: {
    swapLocations() {
      const temp = this.fromLocation;
      this.fromLocation = this.toLocation;
      this.toLocation = temp;
    },
    searchFlights() {
      console.log('Searching flights:', {
        from: this.fromLocation,
        to: this.toLocation,
        depart: this.departDate,
        return: this.returnDate,
      });
    },
    searchHotels() {
      console.log('Searching hotels:', {
        location: this.hotelLocation,
        checkin: this.checkinDate,
        checkout: this.checkoutDate,
      });
    },
  },
};
</script>
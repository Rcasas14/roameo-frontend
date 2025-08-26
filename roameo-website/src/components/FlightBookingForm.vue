<template>
  <div class="">
    <div class="bg-white/40 backdrop-blur-sm rounded-[1.25rem] lg:rounded-[3.75rem] p-4 md:p-8 shadow-lg w-full max-w-6xl font-plus-jakarta border border-slate-50 relative h-auto">
      <!-- Tab Navigation -->
      <div class="flex flex-row justify-center items-center mb-6 md:mb-10 md:absolute md:top-[-37px] md:left-0 md:right-0">
        <div class="bg-slate-50 flex flex-row rounded-[60px] p-2">
        <button
          @click="activeTab = 'flights'"
          :class="[
            'flex items-center px-4 md:px-6 py-3 rounded-full text-sm font-medium transition-all duration-200',
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
            'flex items-center px-4 md:px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ml-2',
            activeTab === 'hotels'
              ? 'bg-yellow-400 text-black shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          <img :src="hotelIcon" alt="Hotel" class="w-4 h-4 mr-2" />
          Hotels
        </button>
        </div>
      </div>

      <!-- Flight Booking Form -->
      <div v-if="activeTab === 'flights'" class="space-y-4">
        <!-- Desktop Layout -->
        <div class="hidden lg:block m-0">
          <div class="flex rounded-[20px] bg-white py-4 md:mt-4">
            <!-- From -->
            <div class="flex-1">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">From</label>
                </div>
                <input
                  v-model="fromLocation"
                  placeholder="Where from?"
                  class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0"
                  type="text"
                  name="flight-from"
                >
              </div>
            </div>

            <!-- Swap Button -->
            <div class="flex items-center justify-center px-2">
              <button @click="swapLocations" class="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors cursor-pointer">
                <img :src="arrowsIcon" alt="Swap" class="w-4 h-4 text-white" />
              </button>
            </div>

            <!-- To -->
            <div class="flex-1 border-l border-gray-200">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">To</label>
                </div>
                <input
                  v-model="toLocation"
                  placeholder="Where to?"
                  class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0"
                  type="text"
                  name="flight-to"
                >
              </div>
            </div>

            <!-- Depart -->
            <div class="flex-1 border-l border-gray-200">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">Depart</label>
                </div>
                <input
                  v-model="departDate"
                  class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0"
                  type="date"
                  name="flight-depart"
                >
              </div>
            </div>

            <!-- Return -->
            <div class="flex-1 border-l border-gray-200">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">Return</label>
                </div>
                <input
                  v-model="returnDate"
                  class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0"
                  type="date"
                  name="flight-return"
                >
              </div>
            </div>

            <!-- Search Button -->
            <div class="flex items-center pl-4 pr-4">
              <button
                @click="searchFlights"
                class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Layout -->
        <div class="lg:hidden space-y-4">
          <!-- Location Row with Swap -->
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <!-- From -->
              <div class="border border-gray-200 rounded-lg bg-white">
                <div class="flex flex-col p-3">
                  <div class="flex flex-row justify-start items-center gap-x-1 mb-2">
                    <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                    <label class="block text-xs text-gray-600">From</label>
                  </div>
                  <input
                    v-model="fromLocation"
                    placeholder="Where from?"
                    class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0"
                    type="text"
                    name="flight-from-mobile"
                  >
                </div>
              </div>

              <!-- To -->
              <div class="border border-gray-200 rounded-lg bg-white">
                <div class="flex flex-col p-3">
                  <div class="flex flex-row justify-start items-center gap-x-1 mb-2">
                    <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                    <label class="block text-xs text-gray-600">To</label>
                  </div>
                  <input
                    v-model="toLocation"
                    placeholder="Where to?"
                    class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0"
                    type="text"
                    name="flight-to-mobile"
                  >
                </div>
              </div>
            </div>

            <!-- Mobile Swap Button -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <button @click="swapLocations" class="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors cursor-pointer shadow-lg">
                <img :src="arrowsIcon" alt="Swap" class="w-3 h-3 text-white" />
              </button>
            </div>
          </div>

          <!-- Date Row -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Depart -->
            <div class="border border-gray-200 rounded-lg bg-white">
              <div class="flex flex-col p-3">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-2">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-xs text-gray-600">Depart</label>
                </div>
                <input
                  v-model="departDate"
                  class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0"
                  type="date"
                  name="flight-depart-mobile"
                >
              </div>
            </div>

            <!-- Return -->
            <div class="border border-gray-200 rounded-lg bg-white">
              <div class="flex flex-col p-3">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-2">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-xs text-gray-600">Return</label>
                </div>
                <input
                  v-model="returnDate"
                  class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0"
                  type="date"
                  name="flight-return-mobile"
                >
              </div>
            </div>
          </div>

          <!-- Mobile Search Button -->
          <div class="pt-2">
            <button
              @click="searchFlights"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            >
              Search Flights
            </button>
          </div>
        </div>
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
              class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>

        <!-- Search Button -->
        <div class="flex justify-end mt-6">
          <button
            @click="searchHotels"
            class="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search Hotels
          </button>
        </div>
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
      fromLocation: '', //should be dynamic
      toLocation: '',
      departDate: '2025-01-01',
      returnDate: '2025-01-05',

      // Hotel data
      hotelLocation: '',
      checkinDate: '',
      checkoutDate: '',

      // Icons (you'll need to replace these with your actual icon paths)
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

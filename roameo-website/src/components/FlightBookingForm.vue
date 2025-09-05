<template>
  <div v-motion="getSlideUpMotion(310)"
    class="">
    <div class="bg-white/40 backdrop-blur-sm rounded-[20px] lg:rounded-[60px] p-4 md:p-8 shadow-lg w-full max-w-6xl font-plus-jakarta border border-slate-50 relative h-auto">
      <!-- Tab Navigation -->
      <div class="flex flex-row justify-center items-center mb-6 md:mb-10 md:absolute md:top-[-2.3125rem] md:left-0 md:right-0">
        <div class="bg-slate-50 flex flex-row rounded-[3.75rem] p-2">
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
          <div class="flex rounded-[1.25rem] bg-white py-2 md:mt-4">
            <!-- From -->
            <div class="flex-1">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">From</label>
                </div>

                <Combobox v-model="selectedFromLocation" @update:modelValue="onFromLocationSelect">
                  <div class="relative">
                    <ComboboxInput
                      :displayValue="(location) => location ? `${location.name}, ${location.country}` : ''"
                      @change="searchFromLocations($event.target.value)"
                      placeholder="Where from?"
                      class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 bg-transparent"
                    />

                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div v-if="fromLocationLoading" class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                    </ComboboxButton>

                    <ComboboxOptions class="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <ComboboxOption
                        v-for="location in fromLocationOptions"
                        :key="location.id"
                        :value="location"
                        v-slot="{ active }"
                      >
                        <li :class="[
                          'relative cursor-pointer select-none py-2 pl-3 pr-9',
                          active ? 'bg-blue-600 text-white' : 'text-gray-900'
                        ]">
                          <div class="flex items-center">
                            <img :src="getLocationIcon(location)" alt="" class="w-4 h-4 mr-3" />
                            <div>
                              <div class="font-medium text-sm">{{ location.name }}</div>
                              <div :class="['text-xs', active ? 'text-blue-200' : 'text-gray-500']">{{ location.country }}</div>
                            </div>
                          </div>
                        </li>
                      </ComboboxOption>
                    </ComboboxOptions>
                  </div>
                </Combobox>
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

                <Combobox v-model="selectedToLocation" @update:modelValue="onToLocationSelect">
                  <div class="relative">
                    <ComboboxInput
                      :displayValue="(location) => location ? `${location.name}, ${location.country}` : ''"
                      @change="searchToLocations($event.target.value)"
                      placeholder="Where to?"
                      class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 bg-transparent"
                    />

                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div v-if="toLocationLoading" class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                    </ComboboxButton>

                    <ComboboxOptions class="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <ComboboxOption
                        v-for="location in toLocationOptions"
                        :key="location.id"
                        :value="location"
                        v-slot="{ active }"
                      >
                        <li :class="[
                          'relative cursor-pointer select-none py-2 pl-3 pr-9',
                          active ? 'bg-blue-600 text-white' : 'text-gray-900'
                        ]">
                          <div class="flex items-center">
                            <img :src="getLocationIcon(location)" alt="" class="w-4 h-4 mr-3" />
                            <div>
                              <div class="font-medium text-sm">{{ location.name }}</div>
                              <div :class="['text-xs', active ? 'text-blue-200' : 'text-gray-500']">{{ location.country }}</div>
                            </div>
                          </div>
                        </li>
                      </ComboboxOption>
                    </ComboboxOptions>
                  </div>
                </Combobox>
              </div>
            </div>

            <!-- Depart -->
            <div class="flex-1 border-l border-gray-200">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">Depart</label>
                </div>
                <VueDatePicker
                  v-model="departDate"
                  :min-date="new Date()"
                  :enable-time-picker="false"
                  :clearable="false"
                  :calendar-icon="null"
                  :action-row="{ showSelect: true, showCancel: true }"
                  select-text="Select"
                  cancel-text="Cancel"
                  id="depart-date-input"
                  placeholder="Select departure"
                  class="date-picker-input"
                  input-class-name="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer"
                />
              </div>
            </div>

            <!-- Return -->
            <div class="flex-1 border-l border-gray-200">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">Return</label>
                </div>
                <VueDatePicker
                  v-model="returnDate"
                  :min-date="departDate || new Date()"
                  :enable-time-picker="false"
                  :clearable="false"
                  :calendar-icon="null"
                  :action-row="{ showSelect: true, showCancel: true }"
                  select-text="Select"
                  cancel-text="Cancel"
                  id="return-date-input"
                  placeholder="Select return (optional)"
                  class="date-picker-input"
                  input-class-name="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer"
                />
              </div>
            </div>

            <!-- Search Button -->
            <div class="flex items-center pl-4 pr-4">
              <button
                @click="searchFlights"
                :disabled="!canSearchFlights"
                :class="[
                  'font-medium px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
                  canSearchFlights
                    ? 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500 cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                ]"
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
            <div class="flex flex-col items-center justify-center gap-2">
              <!-- From -->
              <div class="border border-gray-200 bg-white w-full rounded-[1.5625rem]">
                <div class="flex flex-col py-2 px-4">
                  <div class="flex flex-row justify-start items-center gap-x-1">
                    <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                    <label class="block text-xs text-gray-600">From</label>
                  </div>

                  <Combobox v-model="selectedFromLocation" @update:modelValue="onFromLocationSelect">
                    <div class="relative">
                      <ComboboxInput
                        :displayValue="(location) => location ? `${location.name}, ${location.country}` : ''"
                        @change="searchFromLocations($event.target.value)"
                        placeholder="Where from?"
                        class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 pl-1 bg-transparent"
                      />

                      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <div v-if="fromLocationLoading" class="animate-spin h-3 w-3 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                      </ComboboxButton>

                      <ComboboxOptions class="absolute z-50 mt-2 max-h-48 w-full overflow-auto rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <ComboboxOption
                          v-for="location in fromLocationOptions"
                          :key="location.id"
                          :value="location"
                          v-slot="{ active }"
                        >
                          <li :class="[
                            'relative cursor-pointer select-none py-2 pl-3 pr-9',
                            active ? 'bg-blue-600 text-white' : 'text-gray-900'
                          ]">
                            <div class="flex items-center">
                              <img :src="getLocationIcon(location)" alt="" class="w-3 h-3 mr-2" />
                              <div>
                                <div class="font-medium text-sm">{{ `${location.name }` }}</div>
                                <div :class="['text-xs', active ? 'text-blue-200' : 'text-gray-500']">{{ location.country }}</div>
                              </div>
                            </div>
                          </li>
                        </ComboboxOption>
                      </ComboboxOptions>
                    </div>
                  </Combobox>
                </div>
              </div>

              <!-- To -->
              <div class="border border-gray-200 bg-white w-full rounded-[1.5625rem]">
                <div class="flex flex-col py-2 px-4">
                  <div class="flex flex-row justify-start items-center gap-x-1">
                    <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                    <label class="block text-xs text-gray-600">To</label>
                  </div>

                  <Combobox v-model="selectedToLocation" @update:modelValue="onToLocationSelect">
                    <div class="relative">
                      <ComboboxInput
                        :displayValue="(location) => location ? `${location.name}, ${location.country}` : ''"
                        @change="searchToLocations($event.target.value)"
                        placeholder="Where to?"
                        class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 pl-1 bg-transparent"
                      />

                      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <div v-if="toLocationLoading" class="animate-spin h-3 w-3 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                      </ComboboxButton>

                      <ComboboxOptions class="absolute z-50 mt-2 max-h-48 w-full overflow-auto rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <ComboboxOption
                          v-for="location in toLocationOptions"
                          :key="location.id"
                          :value="location"
                          v-slot="{ active }"
                        >
                          <li :class="[
                            'relative cursor-pointer select-none py-2 pl-3 pr-9',
                            active ? 'bg-blue-600 text-white' : 'text-gray-900'
                          ]">
                            <div class="flex items-center">
                              <img :src="getLocationIcon(location)" alt="" class="w-3 h-3 mr-2" />
                              <div>
                                <div class="font-medium text-sm">{{ location.name }}</div>
                                <div :class="['text-xs', active ? 'text-blue-200' : 'text-gray-500']">{{ location.country }}</div>
                              </div>
                            </div>
                          </li>
                        </ComboboxOption>
                      </ComboboxOptions>
                    </div>
                  </Combobox>
                </div>
              </div>
            </div>

            <!-- Mobile Swap Button -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <button @click="swapLocations" class="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors cursor-pointer shadow-lg">
                <img :src="arrowsIcon" alt="Swap" class="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <!-- Date Row -->
          <div class="flex flex-col sm:flex-row gap-2">
            <!-- Depart -->
            <div class="border border-gray-200 rounded-[1.5625rem] bg-white sm:flex-1">
              <div class="depart-cont flex flex-col py-2 px-4">
                <div class="flex flex-row justify-start items-center gap-x-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-xs text-gray-600">Depart</label>
                </div>
                <VueDatePicker
                  v-model="departDate"
                  :min-date="new Date()"
                  :enable-time-picker="false"
                  :clearable="false"
                  :calendar-icon="null"
                  :action-row="{ showSelect: true, showCancel: true }"
                  select-text="Select"
                  cancel-text="Cancel"
                  placeholder="Select departure"
                  class="date-picker-mobile"
                  input-class-name="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer pl-1"
                />

              </div>
            </div>

            <!-- Return -->
            <div class="border border-gray-200 rounded-[1.5625rem] bg-white sm:flex-1">
              <div class="return-cont flex flex-col py-2 px-4">
                <div class="flex flex-row justify-start items-center gap-x-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-xs text-gray-600">Return</label>
                </div>
                <VueDatePicker
                  v-model="returnDate"
                  :min-date="departDate || new Date()"
                  :enable-time-picker="false"
                  :clearable="false"
                  :calendar-icon="null"
                  :action-row="{ showSelect: true, showCancel: true }"
                  select-text="Select"
                  cancel-text="Cancel"
                  placeholder="Select return (optional)"
                  class="date-picker-mobile"
                  input-class-name="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer pl-1"
                />
              </div>
            </div>
          </div>

          <!-- Mobile Search Button -->
          <div class="pt-2">
            <button
              @click="searchFlights"
              :disabled="!canSearchFlights"
              :class="[
                'w-full font-medium py-3 rounded-[1.5625rem] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
                canSearchFlights
                  ? 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500 cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              {{ isOneWay ? 'Search One-way Flights' : 'Search Flights' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Hotel Booking Form -->
      <div v-if="activeTab === 'hotels'" class="space-y-4">
        <!-- Desktop Layout -->
        <div class="hidden lg:block m-0">
          <div class="flex rounded-[1.25rem] bg-white py-2 md:mt-4">
            <!-- Location -->
            <div class="flex-1">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">Location</label>
                </div>

                <Combobox v-model="selectedHotelLocation" @update:modelValue="onHotelLocationSelect">
                  <div class="relative">
                    <ComboboxInput
                      :displayValue="(location) => location ? `${location.name}, ${location.country}` : ''"
                      @change="searchHotelLocations($event.target.value)"
                      placeholder="Where are you going?"
                      class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 bg-transparent"
                    />

                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div v-if="hotelLocationLoading" class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                    </ComboboxButton>

                    <ComboboxOptions class="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <ComboboxOption
                        v-for="location in hotelLocationOptions"
                        :key="location.id"
                        :value="location"
                        v-slot="{ active }"
                      >
                        <li :class="[
                          'relative cursor-pointer select-none py-2 pl-3 pr-9',
                          active ? 'bg-blue-600 text-white' : 'text-gray-900'
                        ]">
                          <div class="flex items-center">
                            <img :src="getLocationIcon(location)" alt="" class="w-4 h-4 mr-3" />
                            <div>
                              <div class="font-medium text-sm">{{ location.name }}</div>
                              <div :class="['text-xs', active ? 'text-blue-200' : 'text-gray-500']">{{ location.country }}</div>
                            </div>
                          </div>
                        </li>
                      </ComboboxOption>
                    </ComboboxOptions>
                  </div>
                </Combobox>
              </div>
            </div>

            <!-- Check-in -->
            <div class="flex-1 border-l border-gray-200">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">Check-in</label>
                </div>
                <VueDatePicker
                  v-model="checkinDate"
                  :min-date="new Date()"
                  :enable-time-picker="false"
                  :clearable="false"
                  :calendar-icon="null"
                  :action-row="{ showSelect: true, showCancel: true }"
                  select-text="Select"
                  cancel-text="Cancel"
                  id="checkin-date-input"
                  placeholder="Select check-in"
                  class="hotel-date-picker"
                  input-class-name="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer"
                />
              </div>
            </div>

            <!-- Check-out -->
            <div class="flex-1 border-l border-gray-200">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">Check-out</label>
                </div>
                <VueDatePicker
                  v-model="checkoutDate"
                  :min-date="checkinDate || new Date()"
                  :enable-time-picker="false"
                  :clearable="false"
                  :calendar-icon="null"
                  :action-row="{ showSelect: true, showCancel: true }"
                  select-text="Select"
                  cancel-text="Cancel"
                  id="checkout-date-input"
                  placeholder="Select check-out"
                  class="hotel-date-picker"
                  input-class-name="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer"
                />
              </div>
            </div>

            <!-- Guests -->
            <div class="flex-1 border-l border-gray-200">
              <div class="flex flex-col p-4">
                <div class="flex flex-row justify-start items-center gap-x-1 mb-1">
                  <img :src="userIcon" alt="guests" class="w-4 h-4 text-gray-400">
                  <label class="block text-sm text-gray-600">Guests</label>
                </div>
                <input
                  type="text"
                  placeholder="2 Adults, 1 Room"
                  readonly
                  class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer bg-transparent"
                />
              </div>
            </div>

            <!-- Search Button -->
            <div class="flex items-center pl-4 pr-4">
              <button
                @click="searchHotels"
                class="font-medium px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Layout -->
        <div class="lg:hidden space-y-4">
          <!-- Location -->
          <div class="border border-gray-200 bg-white w-full rounded-[1.5625rem]">
            <div class="flex flex-col py-2 px-4">
              <div class="flex flex-row justify-start items-center gap-x-1">
                <img :src="locationIcon" alt="location" class="w-4 h-4 text-gray-400">
                <label class="block text-xs text-gray-600">Location</label>
              </div>

              <Combobox v-model="selectedHotelLocation" @update:modelValue="onHotelLocationSelect">
                <div class="relative">
                  <ComboboxInput
                    :displayValue="(location) => location ? `${location.name}, ${location.country}` : ''"
                    @change="searchHotelLocations($event.target.value)"
                    placeholder="Where are you going?"
                    class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 pl-1 bg-transparent"
                  />

                  <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                    <div v-if="hotelLocationLoading" class="animate-spin h-3 w-3 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                  </ComboboxButton>

                  <ComboboxOptions class="absolute z-50 mt-2 max-h-48 w-full overflow-auto rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ComboboxOption
                      v-for="location in hotelLocationOptions"
                      :key="location.id"
                      :value="location"
                      v-slot="{ active }"
                    >
                      <li :class="[
                        'relative cursor-pointer select-none py-2 pl-3 pr-9',
                        active ? 'bg-blue-600 text-white' : 'text-gray-900'
                      ]">
                        <div class="flex items-center">
                          <img :src="getLocationIcon(location)" alt="" class="w-3 h-3 mr-2" />
                          <div>
                            <div class="font-medium text-sm">{{ location.name }}</div>
                            <div :class="['text-xs', active ? 'text-blue-200' : 'text-gray-500']">{{ location.country }}</div>
                          </div>
                        </div>
                      </li>
                    </ComboboxOption>
                  </ComboboxOptions>
                </div>
              </Combobox>
            </div>
          </div>

          <!-- Date Row -->
          <div class="flex flex-col sm:flex-row gap-2">
            <!-- Check-in -->
            <div class="border border-gray-200 rounded-[1.5625rem] bg-white sm:flex-1">
              <div class="checkin-cont flex flex-col py-2 px-4">
                <div class="flex flex-row justify-start items-center gap-x-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-xs text-gray-600">Check-in</label>
                </div>
                <VueDatePicker
                  v-model="checkinDate"
                  :min-date="new Date()"
                  :enable-time-picker="false"
                  :clearable="false"
                  :calendar-icon="null"
                  :action-row="{ showSelect: true, showCancel: true }"
                  select-text="Select"
                  cancel-text="Cancel"
                  placeholder="Select check-in"
                  class="hotel-date-picker"
                  input-class-name="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer pl-1"
                />
              </div>
            </div>

            <!-- Check-out -->
            <div class="border border-gray-200 rounded-[1.5625rem] bg-white sm:flex-1">
              <div class="checkout-cont flex flex-col py-2 px-4">
                <div class="flex flex-row justify-start items-center gap-x-1">
                  <img :src="dateIcon" alt="date" class="w-4 h-4 text-gray-400">
                  <label class="block text-xs text-gray-600">Check-out</label>
                </div>
                <VueDatePicker
                  v-model="checkoutDate"
                  :min-date="checkinDate || new Date()"
                  :enable-time-picker="false"
                  :clearable="false"
                  :calendar-icon="null"
                  :action-row="{ showSelect: true, showCancel: true }"
                  select-text="Select"
                  cancel-text="Cancel"
                  placeholder="Select check-out"
                  class="hotel-date-picker"
                  input-class-name="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer pl-1"
                />
              </div>
            </div>
          </div>

          <!-- Guests -->
          <div class="border border-gray-200 rounded-[1.5625rem] bg-white">
            <div class="guests-cont flex flex-col py-2 px-4">
              <div class="flex flex-row justify-start items-center gap-x-1">
                <img :src="userIcon" alt="guests" class="w-4 h-4 text-gray-400">
                <label class="block text-xs text-gray-600">Guests</label>
              </div>
              <input
                type="text"
                placeholder="2 Adults, 1 Room"
                readonly
                class="w-full text-sm font-medium outline-none border-0 p-0 focus:ring-0 cursor-pointer pl-1 bg-transparent"
              />
            </div>
          </div>

          <!-- Mobile Search Button -->
          <div class="pt-2">
            <button
              @click="searchHotels"
              class="w-full font-medium py-3 rounded-[1.5625rem] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500 cursor-pointer"
            >
              Search Hotels
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption } from '@headlessui/vue'
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'FlightBookingForm',
  mixins: [ useMotion ],
  components: {
    VueDatePicker,
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption
  },
  data() {
    return {
      activeTab: 'flights',

      // Flight Location data
      selectedFromLocation: null,
      selectedToLocation: null,
      fromLocationOptions: [],
      toLocationOptions: [],
      fromLocationLoading: false,
      toLocationLoading: false,

      // Hotel Location data
      selectedHotelLocation: null,
      hotelLocationOptions: [],
      hotelLocationLoading: false,

      // Debounce timers for API calls
      fromSearchTimeout: null,
      toSearchTimeout: null,
      hotelSearchTimeout: null,

      // Flight date data (separate inputs)
      departDate: null,
      returnDate: null,

      // Hotel date data
      checkinDate: null,
      checkoutDate: null,

      // Icons
      dateIcon: new URL('@/assets/date-icon.svg', import.meta.url).href,
      arrowsIcon: new URL('@/assets/arrows-icon.svg', import.meta.url).href,
      locationIcon: new URL('@/assets/location-icon.svg', import.meta.url).href,
      planeIcon: new URL('@/assets/plane-icon.svg', import.meta.url).href,
      hotelIcon: new URL('@/assets/hotel-icon.svg', import.meta.url).href,
      airportIcon: new URL('@/assets/airport-icon.svg', import.meta.url).href,
      cityIcon: new URL('@/assets/city-icon.svg', import.meta.url).href,
      userIcon: new URL('@/assets/user-icon.svg', import.meta.url).href,
    };
  },
  computed: {
    isOneWay() {
      return this.departDate && !this.returnDate
    },
    canSearchFlights() {
      return this.selectedFromLocation &&
             this.selectedToLocation &&
             this.departDate
    }
  },
  beforeMount(){
    this.$nextTick(()=>{
      const dpInputs = document.querySelectorAll('.dp__input');

      dpInputs.forEach(input =>{
        input.classList.add('custom-datepicker-input')
      })
    })
  },
  methods: {
    // Flight location search methods
    searchFromLocations(query) {
      this.debouncedLocationSearch(query, 'from')
    },

    searchToLocations(query) {
      this.debouncedLocationSearch(query, 'to')
    },

    // Hotel location search
    searchHotelLocations(query) {
      this.debouncedLocationSearch(query, 'hotel')
    },

    debouncedLocationSearch(query, type) {
      const timeoutKey = `${type}SearchTimeout`
      if (this[timeoutKey]) {
        clearTimeout(this[timeoutKey])
      }

      if (!query || query.length < 2) {
        return
      }

      this[timeoutKey] = setTimeout(() => {
        this.performLocationSearch(query, type)
      }, 300)
    },

    async performLocationSearch(query, type) {
      const loadingKey = `${type}LocationLoading`
      const optionsKey = `${type}LocationOptions`

      try {
        this[loadingKey] = true

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?` +
          `q=${encodeURIComponent(query)}&` +
          `format=json&` +
          `addressdetails=1&` +
          `limit=8&` +
          `class=place&` +
          `type=city,town,village,airport`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch locations')
        }

        const data = await response.json()

        this[optionsKey] = data.map(location => ({
          id: location.place_id,
          name: this.extractLocationName(location),
          display_name: location.display_name,
          country: location.address?.country || '',
          type: this.determineLocationType(location),
          lat: parseFloat(location.lat),
          lon: parseFloat(location.lon),
          raw: location
        }))

      } catch (error) {
        console.error(`Error searching ${type} locations:`, error)
        this[optionsKey] = []
      } finally {
        this[loadingKey] = false
      }
    },

    extractLocationName(location) {
      const address = location.address || {}
      return address.city ||
             address.town ||
             address.village ||
             address.state ||
             location.name ||
             location.display_name.split(',')[0]
    },

    determineLocationType(location) {
      const address = location.address || {}
      if (address.aeroway || location.class === 'aeroway') {
        return 'airport'
      }
      return 'city'
    },

    getLocationIcon(location) {
      if (!location) return this.locationIcon
      return location.type === 'airport' ? this.airportIcon : this.cityIcon
    },

    // Selection handlers
    onFromLocationSelect(location) {
      console.log('From location selected:', location)
      this.selectedFromLocation = location
    },

    onToLocationSelect(location) {
      console.log('To location selected:', location)
      this.selectedToLocation = location
    },

    onHotelLocationSelect(location) {
      console.log('Hotel location selected:', location)
      this.selectedHotelLocation = location
    },

    swapLocations() {
      const tempLocation = this.selectedFromLocation
      this.selectedFromLocation = this.selectedToLocation
      this.selectedToLocation = tempLocation

      // Also swap the options to maintain search results
      const tempOptions = this.fromLocationOptions
      this.fromLocationOptions = this.toLocationOptions
      this.toLocationOptions = tempOptions
    },

    // Search functionality
    searchFlights() {
      if (!this.canSearchFlights) {
        console.warn('Cannot search: missing required fields')
        return
      }

      const searchData = {
        from: {
          name: this.selectedFromLocation.name,
          coordinates: {
            lat: this.selectedFromLocation.lat,
            lon: this.selectedFromLocation.lon
          },
          type: this.selectedFromLocation.type
        },
        to: {
          name: this.selectedToLocation.name,
          coordinates: {
            lat: this.selectedToLocation.lat,
            lon: this.selectedToLocation.lon
          },
          type: this.selectedToLocation.type
        },
        dates: {
          departure: this.departDate,
          return: this.returnDate  // null for one-way
        },
        tripType: this.isOneWay ? 'one-way' : 'round-trip'
      }

      console.log('Searching flights with data:', searchData)

      // Here you would make your API call to your backend
      // await flightSearchService.search(searchData)
    },

    searchHotels() {
      const searchData = {
        location: this.selectedHotelLocation,
        dates: {
          checkin: this.checkinDate,
          checkout: this.checkoutDate
        }
      }

      console.log('Searching hotels with data:', searchData)

      // Here you would make your API call to your backend
      // await hotelSearchService.search(searchData)
    }
  },


  // Cleanup timers when component is destroyed
  beforeUnmount() {
    if (this.fromSearchTimeout) {
      clearTimeout(this.fromSearchTimeout)
    }
    if (this.toSearchTimeout) {
      clearTimeout(this.toSearchTimeout)
    }
    if (this.hotelSearchTimeout) {
      clearTimeout(this.hotelSearchTimeout)
    }
  }
};
</script>

<style scoped>
/* Component-specific styles (scoped) */
.depart-cont,
.return-cont {
  /* These can stay scoped */
}
</style>

<style>
/* GLOBAL STYLES - Vue DatePicker overrides (NOT scoped) */

/* Hide ALL DatePicker SVG icons globally */
.dp__input_icon,
.dp__icon,
.dp__calendar_icon,
.dp__clear_icon {
  display: none !important;
  visibility: hidden !important;
}

/* Hide SVG elements within DatePicker */
.dp__input_wrap svg,
.dp__input_wrap .dp__input_icon,
.dp__action_buttons svg {
  display: none !important;
  visibility: hidden !important;
}

/* Custom DatePicker input styling */
.dp__input {
  border: none !important;
  padding: 0 !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  outline: none !important;
  background: transparent !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
}

.dp__input_wrap {
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
}

/* DatePicker main container */
.dp__main {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
}

/* Remove default focus styles */
.dp__input:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* Target specific DatePicker classes in your component */
.date-picker-input .dp__input,
.date-picker-mobile .dp__input,
.hotel-date-picker .dp__input {
  border: none !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #374151 !important;
}

/* Style action buttons to match website design */
.dp__action_buttons {
  display: flex !important;
  justify-content: space-between !important;
  gap: 12px !important;
  padding: 16px !important;
  border-top: .0625rem solid #E5E7EB !important;
  background: #F9FAFB !important;
}

.dp__action_button {
  flex: 1 !important;
  padding: 12px 24px !important;
  border-radius: 12px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  transition: all 0.2s ease-in-out !important;
  cursor: pointer !important;
  border: none !important;
}

/* Select button - Primary blue */
.dp__action_button.dp__action_select {
  background: #1A94FF !important;
  color: white !important;
}

.dp__action_button.dp__action_select:hover {
  background: #1580e6 !important;
  transform: translateY(-0.0625rem) !important;
}

/* Cancel button - Secondary gray */
.dp__action_button.dp__action_cancel {
  background: #F3F4F6 !important;
  color: #374151 !important;
  border: .0625rem solid #D1D5DB !important;
}

.dp__action_button.dp__action_cancel:hover {
  background: #E5E7EB !important;
  color: #111827 !important;
  transform: translateY(-0.0625rem) !important;
}

/* Calendar popup styling */
.dp__menu {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  border-radius: 16px !important;
  box-shadow: 0 1.5625rem 3.125rem -0.75rem rgba(0, 0, 0, 0.25) !important;
}

/* Mobile responsive calendar */
@media (max-width: 48rem) {
  .dp__menu {
    max-width: 20rem !important;
  }
}

/* Extra small devices (mobile) */
@media (max-width: 23.375rem) {
  .depart-cont,
  .return-cont,
  .checkin-cont,
  .checkout-cont,
  .guests-cont {
    padding: 6px 14px;
  }
}

/* XS devices - 23.4375rem+ */
@media (min-width: 23.4375rem) and (max-width: 39.9375rem) {
  .depart-cont,
  .return-cont,
  .checkin-cont,
  .checkout-cont,
  .guests-cont {
    padding: 8px 16px;
  }
}
</style>

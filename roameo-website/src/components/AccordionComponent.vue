<template>
  <div class="w-full max-w-4xl mx-auto font-plus-jakarta">
    <div v-motion="getScrollSlideUpMotionBounce(330, 90)" class="space-y-4">
      <!-- Accordion Item 1 -->
      <div class="rounded-lg shadow-sm border transition-all duration-200"
           :class="activeItems.includes(0) ? 'bg-[#0088FF] border-[#0088FF]' : 'bg-white border-gray-200'">
        <button
          @click="toggleItem(0)"
          class="w-full px-6 py-4 flex items-center justify-between text-left transition-colors"
          :class="activeItems.includes(0) ? 'hover:bg-[#1580e6] text-white' : 'hover:bg-gray-50 text-gray-900'"
        >
          <span class="text-lg font-medium"
                :class="activeItems.includes(0) ? 'text-white' : 'text-gray-900'">
            01  Do I need to create an account?
          </span>
          <img
            :src="plusIcon"
            alt="Toggle"
            class="w-6 h-6 transform transition-transform duration-200"
            :class="{ 'rotate-45': activeItems.includes(0) }"
          />
        </button>
        <transition name="accordion" @enter="enter" @leave="leave">
          <div v-if="activeItems.includes(0)" class="px-6 pb-4">
            <p class="leading-relaxed"
               :class="activeItems.includes(0) ? 'text-white/90' : 'text-gray-600'">
              Absolutely, We with trusted global booking platform to ensure a smooth, secure experience. You'll always be redirected to verified sites when it's time to confirm your plans.
            </p>
          </div>
        </transition>
      </div>

      <!-- Accordion Item 2 -->
      <div class="rounded-lg shadow-sm border transition-all duration-200"
           :class="activeItems.includes(1) ? 'bg-[#0088FF] border-[#0088FF]' : 'bg-white border-gray-200'">
        <button
          @click="toggleItem(1)"
          class="w-full px-6 py-4 flex items-center justify-between text-left transition-colors"
          :class="activeItems.includes(1) ? 'hover:bg-[#1580e6] text-white' : 'hover:bg-gray-50 text-gray-900'"
        >
          <span class="text-lg font-medium"
                :class="activeItems.includes(1) ? 'text-white' : 'text-gray-900'">
            02  Can I trust the bookings made through Roameo?
          </span>
          <img
            :src="plusIcon"
            alt="Toggle"
            class="w-6 h-6 transform transition-transform duration-200"
            :class="{ 'rotate-45': activeItems.includes(1) }"
          />
        </button>
        <transition name="accordion" @enter="enter" @leave="leave">
          <div v-if="activeItems.includes(1)" class="px-6 pb-4">
            <p class="leading-relaxed mb-4"
               :class="activeItems.includes(1) ? 'text-white/90' : 'text-gray-600'">
              Absolutely. We partner with trusted global booking platforms to ensure a smooth, secure experience. You'll always be redirected to verified sites when it's time to confirm your plans.
            </p>
          </div>
        </transition>
      </div>

      <!-- Accordion Item 3 -->
      <div class="rounded-lg shadow-sm border transition-all duration-200"
           :class="activeItems.includes(2) ? 'bg-[#0088FF] border-[#0088FF]' : 'bg-white border-gray-200'">
        <button
          @click="toggleItem(2)"
          class="w-full px-6 py-4 flex items-center justify-between text-left transition-colors"
          :class="activeItems.includes(2) ? 'hover:bg-[#1580e6] text-white' : 'hover:bg-gray-50 text-gray-900'"
        >
          <span class="text-lg font-medium"
                :class="activeItems.includes(2) ? 'text-white' : 'text-gray-900'">
            03 How often is your content updated?
          </span>
          <img
            :src="plusIcon"
            alt="Toggle"
            class="w-6 h-6 transform transition-transform duration-200"
            :class="{ 'rotate-45': activeItems.includes(2) }"
          />
        </button>
        <transition name="accordion" @enter="enter" @leave="leave">
          <div v-if="activeItems.includes(2)" class="px-6 pb-4">
            <p class="leading-relaxed"
               :class="activeItems.includes(2) ? 'text-white/90' : 'text-gray-600'">
              Absolutely, We with trusted global booking platform to ensure a smooth, secure experience. You'll always be redirected to verified sites when it's time to confirm your plans.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { useMotion } from '@/mixins/useMotion.js';

export default {
  name: 'AccordionComponent',
  mixins: [ useMotion ],
  data() {
    return {
      activeItems: [], // No items open by default
      plusIcon: new URL('@/assets/plus-accordion.svg', import.meta.url).href,
      minusIcon: new URL('@/assets/plus-accordion.svg', import.meta.url).href,
    }
  },
  methods: {
    toggleItem(index) {
      const itemIndex = this.activeItems.indexOf(index);
      if (itemIndex > -1) {
        this.activeItems.splice(itemIndex, 1);
      } else {
        this.activeItems.push(index);
      }
    },
    enter(el) {
      el.style.height = '0px';
      el.offsetHeight; // trigger reflow
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.offsetHeight; // trigger reflow
      el.style.height = '0px';
    }
  }
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .accordion-container {
    padding: 0 1rem;
  }

  .accordion-item button {
    padding: 1rem;
  }

  .accordion-item button span {
    font-size: 1rem;
  }

  .accordion-content {
    padding: 1rem;
    padding-top: 0;
  }
}

/* Extra small screens */
@media (max-width: 375px) {
  .accordion-item button {
    padding: 0.75rem;
  }

  .accordion-item button span {
    font-size: 0.875rem;
  }
}
</style>

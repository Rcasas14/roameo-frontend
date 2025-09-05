<template>
  <section class="faq-section bg-gray-50 py-16 lg:py-24 font-plus-jakarta">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left Content Area -->
        <div class="w-full flex flex-col items-center justify-center lg:justify-start lg:items-start order-1 lg:order-1">
          <!-- Heading -->
            <h2 v-motion="getScrollSlideUpMotionBounce=(330)" class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Got Questions?
              <br />
              We've Got You.
            </h2>

          <!-- Description -->
          <p v-motion="getScrollSlideUpMotionBounce=(360)" class="text-gray-600 text-lg leading-relaxed max-w-md">
            Whether you're planning your next big escape or just
            curious about how Roameo works, we've answered
            the most common questions to help you roam with
            confidence.
          </p>
        </div>

        <!-- Right Accordion Area -->
        <div class="w-full order-2 lg:order-2">
          <AccordionComponent />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AccordionComponent from '@/components/AccordionComponent.vue'
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'FaqSection',
  mixins: [ useMotion ],
  components: {
    AccordionComponent
  }
}
</script>

<style scoped>
/* Mobile optimizations */
@media (max-width: 767px) {
  .faq-section {
    padding: 3rem 0;
  }

  .faq-section h2 {
    font-size: 2rem;
    line-height: 1.2;
  }

  .faq-section p {
    font-size: 1rem;
  }
}

/* Tablet optimizations */
@media (min-width: 768px) and (max-width: 1023px) {
  .faq-section h2 {
    font-size: 2.5rem;
  }
}

/* Desktop optimizations */
@media (min-width: 1024px) {
  .grid {
    align-items: flex-start;
  }

  .faq-section h2 {
    font-size: 3rem;
  }

  /* Ensure left content stays at top */
  .w-full.flex.flex-col {
    position: sticky;
    top: 2rem;
  }
}

/* Extra large screens */
@media (min-width: 1280px) {
  .faq-section h2 {
    font-size: 3.5rem;
  }
}
</style>

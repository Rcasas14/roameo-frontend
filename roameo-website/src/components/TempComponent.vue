<template>
  <div class="flight-search-page">
    <!-- Your Custom Header/Branding -->
    <div class="search-header">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Search Flights</h1>
      <p class="text-gray-600">Find and compare the best flight deals</p>
    </div>

    <!-- Widget Container -->
    <div class="widget-container font-plus-jakarta">
      <div ref="widgetWrapper" class="widget-wrapper">
        <!-- Travelpayouts widget will load here -->
      </div>
    </div>

    <!-- Optional: Additional Content Below Widget -->
    <div class="additional-content">
      <!-- Your custom content, tips, etc. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightSearch',
  data() {
    return {
      widgetLoaded: false,
      scriptId: 'travelpayouts-widget-script'
    }
  },
  mounted() {
    this.loadTravelPayoutsWidget();
  },
  beforeUnmount() {
    this.cleanupWidget();
  },
  methods: {
    loadTravelPayoutsWidget() {
      // Check if script already exists
      if (document.getElementById(this.scriptId)) {
        console.log('Travelpayouts widget script already loaded');
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.id = this.scriptId;
      script.async = true;
      script.src = 'https://tpwdg.com/content?currency=usd&trs=348884&shmarker=571116&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=20&no_labels=&plain=true&promo_id=7879&campaign_id=100';

      // Add load event listener
      script.onload = () => {
        console.log('Travelpayouts widget loaded successfully');
        this.widgetLoaded = true;
      };

      // Add error event listener
      script.onerror = () => {
        console.error('Failed to load Travelpayouts widget');
      };

      // Append script to widget wrapper
      this.$refs.widgetWrapper.appendChild(script);
    },

    cleanupWidget() {
      // Remove script when component is destroyed
      const script = document.getElementById(this.scriptId);
      if (script) {
        script.remove();
      }
    }
  }
}
</script>

<style scoped>
/* Container Styling */
.flight-search-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.search-header {
  text-align: center;
  margin-bottom: 3rem;
}

/* Widget Container */


.widget-wrapper {
  min-height: auto; /* Prevent layout shift while loading */
}


/* Additional Content */
.additional-content {
  margin-top: 3rem;
}

/* Widget Style Overrides - Use ::v-deep or :deep() for Vue 3 */
.widget-container :deep(.tp-form),
.widget-container :deep([class*="avia"]) {
  font-family: inherit;
}

/* Override widget input styles */
.widget-container :deep(input) {
  transition: all 0.2s ease;
}

.widget-container :deep(input:focus) {
  box-shadow: 0 0 0 3px rgba(50, 168, 221, 0.1);
}

/* Override button styles */
.widget-container :deep(button[type="submit"]),
.widget-container :deep(.search-button) {
  transition: all 0.2s ease;
  font-weight: 600;
}

.widget-container :deep(button[type="submit"]:hover),
.widget-container :deep(.search-button:hover) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(50, 168, 221, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .flight-search-page {
    padding: 1rem 0.5rem;
  }

  .widget-container {
    padding: 1rem;
    border-radius: 8px;
  }

  .search-header {
    margin-bottom: 2rem;
  }

  .search-header h1 {
    font-size: 1.5rem;
  }
}
</style>
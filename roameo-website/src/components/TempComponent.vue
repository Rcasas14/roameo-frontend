<template>
  <div class="flight-results-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Flight Results Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Flight Results</h1>
    </div>
    
    <!-- Your existing flight results content -->
    <div class="mb-8">
      <!-- Add your existing flight results here -->
      <p class="text-gray-600">Your flight search results would appear here...</p>
    </div>
    
    <!-- Roameo Widget Container -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Book Your Flight</h2>
        
        <!-- This is where the widget will appear -->
        <div class="widget-wrapper border border-gray-200 rounded-lg p-4 bg-gray-50">
          <!-- Loading state -->
          <div v-if="!scriptLoaded" class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p class="text-gray-600 mt-2">Loading flight search widget...</p>
          </div>
          
          <!-- Script container - the widget will appear right here -->
          <div ref="scriptContainer" class="widget-content">
            <!-- The Roameo iframe/widget will be inserted here by the script -->
          </div>
          
          <!-- Error state -->
          <div v-if="scriptError" class="text-center py-8">
            <div class="text-red-600">
              <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <p class="text-red-600">Failed to load flight search widget</p>
              <button @click="retryLoadScript" class="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightResults',
  data() {
    return {
      scriptLoaded: false,
      scriptError: false
    }
  },
  mounted() {
    this.loadRoameoScript();
  },
  beforeUnmount() {
    this.cleanupScript();
  },
  methods: {
    loadRoameoScript() {
      // Reset states
      this.scriptLoaded = false;
      this.scriptError = false;
      
      // Check if script is already loaded globally
      if (document.querySelector('script[src*="roameo.net/iframe.js"]')) {
        console.log('Roameo script already exists');
        this.scriptLoaded = true;
        return;
      }
      
      try {
        // Create the script element
        const script = document.createElement('script');
        script.src = '//flight.roameo.net/iframe.js';
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        script.async = true;
        
        // Add success handler
        script.onload = () => {
          console.log('Roameo script loaded successfully');
          this.scriptLoaded = true;
          this.scriptError = false;
          
          // Optional: Check if widget appeared after a delay
          setTimeout(() => {
            this.checkWidgetLoaded();
          }, 2000);
        };
        
        // Add error handler
        script.onerror = (error) => {
          console.error('Failed to load Roameo script:', error);
          this.scriptLoaded = false;
          this.scriptError = true;
        };
        
        // IMPORTANT: Append the script to the container
        // The widget will appear right where this script is placed
        if (this.$refs.scriptContainer) {
          this.$refs.scriptContainer.appendChild(script);
          console.log('Roameo script appended to container');
        } else {
          console.error('Script container ref not found');
          this.scriptError = true;
        }
        
      } catch (error) {
        console.error('Error creating Roameo script:', error);
        this.scriptError = true;
      }
    },
    
    checkWidgetLoaded() {
      // Check if an iframe or widget content was added
      const container = this.$refs.scriptContainer;
      if (container) {
        const iframes = container.querySelectorAll('iframe');
        const widgets = container.querySelectorAll('[class*="widget"], [class*="roameo"], [id*="widget"]');
        
        if (iframes.length > 0 || widgets.length > 0) {
          console.log('Widget detected:', { iframes: iframes.length, widgets: widgets.length });
        } else {
          console.log('No widget detected yet');
        }
      }
    },
    
    retryLoadScript() {
      // Clean up and retry
      this.cleanupScript();
      this.$nextTick(() => {
        this.loadRoameoScript();
      });
    },
    
    cleanupScript() {
      // Remove the script from the container
      if (this.$refs.scriptContainer) {
        const scripts = this.$refs.scriptContainer.querySelectorAll('script');
        scripts.forEach(script => script.remove());
      }
      
      // Note: We don't remove global scripts as they might be used by other components
      this.scriptLoaded = false;
      this.scriptError = false;
    }
  }
}
</script>

<style scoped>
/* Add any custom styles for your widget container */
.widget-wrapper {
  min-height: 400px; /* Ensure enough space for the widget */
}

.widget-content {
  min-height: 300px; /* Minimum height for widget content */
}

/* Style any iframe that gets inserted */
.widget-content iframe {
  width: 100%;
  border: none;
  border-radius: 8px;
}
</style>
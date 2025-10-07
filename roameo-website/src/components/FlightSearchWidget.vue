<template>
    <div class="w-full flex justify-center items-center">
        <div class="flight-search-page bg-white/40  rounded-[20px] p-4 md:p-8 shadow-lg w-full max-w-6xl font-plus-jakarta border border-slate-50 relative h-auto">
        <!-- Your Custom Header/Branding -->
        <!-- Widget Container -->
        <div class="widget-container font-plus-jakarta ">
            <div ref="widgetWrapper" class="widget-wrapper flex justify-center items-center">
            <!-- Travelpayouts widget will load here -->
            </div>
        </div>
    
        <!-- Optional: Additional Content Below Widget -->
        <div class="additional-content">
            <!-- Your custom content, tips, etc. -->
        </div>
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
        script.src = 'https://tpwdg.com/content?currency=usd&trs=360683&shmarker=571116&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%230088FF&color_button=%230088FF&color_icons=%230088FF&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF00&special=%23C4C4C400&color_focused=%2332a8dd&border_radius=20&no_labels=&plain=true&promo_id=7879&campaign_id=100';
  
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
  
 
  /* Widget Container */
  
  
  .widget-wrapper {
    min-height: 150px;
    border-radius: 20px;
    background-color:#EDFBFF; /* Prevent layout shift while loading */
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
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 5050)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint` (uses ESLint with auto-fix)
- **Format code**: `npm run format` (uses Prettier on src/ directory)

## Architecture Overview

This is a Vue 3 SPA (Single Page Application) for Roameo, a travel booking platform, built with Vite and TailwindCSS.

### Key Technologies
- **Vue 3** with Options API and Composition API support
- **Vue Router 4** for client-side routing
- **Vite** as build tool and dev server
- **TailwindCSS 4.x** for styling with custom breakpoints
- **Vuex 4** for state management with persistence
- **@vueuse/motion** for scroll-based animations with custom mixins
- **vue-lazyload-next** for image optimization with background image support
- **Swiper.js** for carousel/slider functionality with infinite loop, autoplay and custom navigation
- **@vuepic/vue-datepicker** for advanced date picker functionality with custom styling
- **@headlessui/vue** for accessible UI components (Combobox, etc.)
- **vue-select** for enhanced select components

### Project Structure
- `src/views/` - Top-level view components (MainView, ErrorView)
- `src/pages/` - Page components rendered within views (MainPage)
- `src/components/` - Reusable UI components (NavbarComponent, FooterComponent, FlightBookingForm, AccordionComponent)
- `src/sections/` - Page section components (PartnerSection, DestinationSection, GoNextSection, FeatureStaySection, TravelJourney, TopTravelTea, RoameoTv, FeaturedEpisode, TestimonialsSection, NewsletterSection, FaqSection)
- `src/mixins/` - Reusable Vue mixins (useMotion.js for consistent animation patterns)
- `src/router/` - Vue Router configuration with nested routing
- `src/assets/` - Static assets including SVG icons, images, and video thumbnails

### Routing Architecture
- Uses nested routing with MainView as the parent component
- Home route (`/`) aliases to `/home` and renders MainPage
- 404 handling via catch-all route that renders ErrorView
- Router configured with history mode and `/app` base URL
- Auto-scroll to top on route changes

### Styling Setup
- TailwindCSS with custom screen breakpoints (xs: 375px, 2xl: 1440px, 3xl: 1536px, 4xl: 1920px)
- Custom font family: Plus Jakarta Sans
- Global styles in `src/style.css`

### Build Configuration
- Vite with Vue plugin and development tools
- Path alias `@` points to `src/` directory
- Development server runs on host `0.0.0.0:5050`
- Vercel deployment configuration for SPA routing

### State Management
- Vuex store with persistence using vuex-persistedstate
- Encrypted storage capabilities via encrypt-storage package

### Animation & Motion System

#### Custom Motion Mixin (`src/mixins/useMotion.js`)
All section components implement a unified animation system via the `useMotion` mixin, providing:

- **getSlideUpMotion(delay, distance, mass)**: Basic slide-up animation with spring physics
  - Uses `visibleOnce` trigger for scroll-based activation
  - Default: 160px distance, moderate spring settings
  - Customizable delay for staggered animations

- **getScrollSlideUpMotion(delay, distance, mass)**: Enhanced scroll-triggered slide-up
  - Optimized for scroll interactions with refined spring physics
  - Variable mass parameter for different animation feels
  - Default: 160px distance with balanced spring/damping

- **getScrollSlideUpMotionBounce(delay, distance)**: Bouncy variant for emphasis
  - Higher stiffness (400) and mass (1) for pronounced bounce effect
  - Perfect for headers, badges, and attention-drawing elements
  - Enhanced visual impact with spring overshoot

- **getScrollFadeInMotion(delay)**: Simple opacity-only animation
  - Smooth fade-in effect without movement
  - Ideal for backgrounds, overlays, and subtle reveals
  - High stiffness (300) for crisp fade transitions

#### Motion Implementation Pattern
```vue
<!-- All section components follow this pattern -->
<template>
  <div v-motion="getScrollSlideUpMotion(200)">Content</div>
</template>

<script>
import { useMotion } from '@/mixins/useMotion.js'

export default {
  mixins: [ useMotion ],
  // ... component logic
}
</script>
```

#### Animation Timing Strategy
- **Staggered Delays**: Elements animate in sequence (100ms, 150ms, 200ms, etc.)
- **Section Coordination**: Each section has coordinated animation timing
- **Performance**: Uses `visibleOnce` to prevent re-animations on scroll
- **Accessibility**: Respects user motion preferences

### Component Architecture

#### Interactive Components
- **AccordionComponent**: Reusable accordion with dynamic highlighting
  - Supports multiple simultaneous open items
  - Blue (#1A94FF) highlighting for active/expanded items with white text
  - Smooth height animations using Vue transition system
  - Mobile responsive with proper touch targets (48px minimum)
  - Uses plus-accordion.svg icon with 45° rotation animation
  - Integrated with useMotion mixin for scroll-triggered entrance animations

- **FlightBookingForm**: Advanced travel booking interface with dual-tab functionality
  - **Tab System**: Switch between Flights and Hotels with visual feedback
    - Yellow highlight (#FFE759) for active tabs with icons (plane/hotel)
    - Smooth transitions and hover states
  - **Flight Search**: Location-based flight booking with real-time search
    - Dual location inputs (From/To) with Headless UI Combobox
    - Real-time location search using OpenStreetMap Nominatim API
    - Debounced search (300ms) with loading indicators
    - Location type detection (airport vs city) with appropriate icons
    - Swap functionality for reversing From/To locations
    - Date pickers with Vue DatePicker for departure/return dates
  - **Hotel Search**: Location and date-based hotel booking
    - Single location input with same search functionality
    - Check-in/Check-out date selection with validation
    - Guest selection placeholder (expandable for future implementation)
  - **Responsive Design**: 
    - Desktop: Horizontal form layout with inline fields
    - Mobile: Vertical stacked layout with full-width inputs
  - **Date Picker Integration**:
    - Custom styling matching website design system
    - Hidden default SVG icons, custom styling for inputs
    - Action buttons (Select/Cancel) styled with brand colors
    - Global CSS overrides for Vue DatePicker consistency

#### Section Components
All section components implement the `useMotion` mixin for consistent scroll-based animations:

- **PartnerSection**: Partner logo showcase with staggered animations
  - Grid layout with 4 partner logos (Trip.com, Agoda, Flight Network, Zenhotels)
  - Scroll-triggered staggered animations with increasing delays (210ms, 260ms, 310ms, 360ms)
  - Hover effects with scale and grayscale transformations
  - Mobile-responsive grid with proper logo sizing

- **DestinationSection**: Travel destination cards with lazy loading
  - Grid layout (1-2-3 columns responsive) with destination cards
  - Lazy-loaded background images with loading states
  - Price badges, ratings, tags, and booking functionality
  - Coordinated scroll animations for header and grid

- **GoNextSection**: AI travel recommendations with glass morphism
  - Full-width background with overlay and glass morphism card
  - Fade-in animation with significant delay (900ms) for dramatic effect
  - CTA button for AI-powered travel suggestions
  - Mobile-responsive with proper aspect ratios

- **FeatureStaySection**: Hotel carousel with advanced Swiper configuration
  - Infinite loop Swiper with autoplay (4s delay)
  - Pause autoplay on mouse hover for enhanced UX
  - Custom navigation arrows with hover state transitions
  - Glass morphism bottom overlays for hotel information
  - Staggered animations for left content area (badge, heading, description)

- **TravelJourney**: Multi-step travel process with vertical image carousel
  - **Left Side**: Vertical Swiper carousel with continuous marquee effect
    - 4 visible images with 20px spacing, vertical direction
    - Ultra-fast autoplay (1ms delay, 6000ms speed) for continuous motion
    - Loop enabled with touch interaction disabled for uninterrupted flow
    - 1000px height container showcasing destination images
  - **Right Side**: Fixed background with step-by-step journey cards
    - Glass morphism cards with numbered steps and icons (compass, air balloon, map)
    - Bounce animations for enhanced visual impact
    - Mobile-responsive layout with proper content flow

- **TopTravelTea**: Travel stories carousel with navigation
  - 3-slide Swiper with infinite loop and autoplay
  - Custom navigation arrows positioned in header area
  - Travel duration, group size, ratings, and story tags
  - Coordinated animations with bounce effects for emphasis

- **RoameoTv**: Brand showcase with custom logo styling
  - Background image with glass morphism content card
  - Custom SVG logo coloring (#FF3897 pink branding)
  - Simple fade-in animation for brand presentation

- **FeaturedEpisode**: Video gallery with asymmetric grid
  - Large featured video + 2 smaller side videos
  - Play button overlays with hover animations
  - Duration badges and video metadata
  - Gradient overlays with backdrop blur effects
  - Mobile-first responsive design

- **TestimonialsSection**: Continuous auto-scrolling testimonials
  - Infinite loop Swiper with ultra-fast continuous scrolling
  - 1ms delay with 6s speed for smooth continuous motion
  - Touch interaction disabled for uninterrupted auto-scroll
  - Free mode enabled for fluid motion without snapping
  - Responsive layout (1-2-3 slides) with star ratings and user verification

- **NewsletterSection**: Email subscription with benefits showcase
  - Background image with glass morphism subscription card
  - Three benefit cards with heart icons and descriptions
  - Email validation and subscription functionality
  - Social proof elements with avatar icons

- **FaqSection**: Two-column responsive FAQ layout
  - Left column: Heading and description text
  - Right column: Integrated AccordionComponent
  - Sticky positioning on desktop, stacked on mobile

### Design System
- **Primary Color**: #1A94FF (Roameo blue)
- **Secondary Colors**: #4A9DB1 (teal), #E91E63 (pink), #FFE759 (yellow badges)
- **Brand Colors**: #FF3897 (RoameoTV pink branding)
- **Typography**: Plus Jakarta Sans font family throughout
- **Components**: 
  - Rounded corners (1.5rem standard, up to 3.75rem for tabs)
  - Glass morphism effects (backdrop-blur-sm with white/transparency)
  - Consistent spacing and padding patterns
- **Animations**: 
  - Scroll-triggered animations with spring physics
  - Staggered element reveals with coordinated timing
  - Smooth transitions, hover effects, transform animations
  - Bounce effects for emphasis elements
- **Interactive Elements**: 
  - Button hover effects with scale (1.02-1.05) and shadow transforms
  - Icon transitions (brightness/invert on hover)
  - Autoplay carousels with pause-on-hover functionality
  - Infinite loop carousels with smooth continuous motion
- **Visual Effects**:
  - Glass morphism cards (white/40 backdrop-blur-sm)
  - Gradient overlays (black/30, black/70 variants)
  - Fixed background attachments for parallax effects
  - Loading states with spinning indicators
- **Responsive**: Mobile-first with custom TailwindCSS breakpoints
- **Accessibility**: Touch-friendly buttons (min 48px), proper focus states, motion preferences

### Recent Major Updates

#### Motion Animation System Stabilization (Latest)
- **Fixed useMotion Import Path Issues**: Resolved cascade failures causing motion animations to break across all components
- **AccordionComponent Path Correction**: Fixed incorrect import path that was breaking the entire animation system
- **Empty v-motion Attribute Fix**: Corrected syntax error in FeatureStaySection.vue that prevented animations from loading
- **Animation System Validation**: All components now properly inherit from useMotion mixin with consistent behavior

#### Component Architecture Enhancements
- **TravelJourney Vertical Carousel**: Transformed static image gallery into dynamic vertical Swiper
  - Continuous marquee effect with 1ms delay and 6000ms speed
  - 4 visible images in vertical layout with seamless infinite loop
  - Touch interaction disabled for uninterrupted auto-scroll experience
- **FlightBookingForm Icon Cleanup**: Fixed missing SVG references
  - Removed non-existent airport-icon.svg and city-icon.svg references
  - Updated getLocationIcon() method to use existing plane-icon.svg and hotel-icon.svg
  - Eliminated build warnings and console errors

#### New Component Additions
- **AccordionComponent**: Fully interactive accordion with blue highlighting system
- **FaqSection**: Two-column layout integrating AccordionComponent
- **FeaturedEpisode**: Video gallery with asymmetric grid and play button overlays

### Current Development Focus
The application now features a comprehensive landing page with 12+ distinct sections, each implementing consistent scroll-based animations through the unified and stabilized `useMotion` mixin system. Key achievements include:

- **Stable Motion System**: Fixed all import path issues and syntax errors affecting animations
- **Complete Section Architecture**: All major landing page sections implemented with responsive design
- **Advanced Interactive Components**: Accordion, booking form, and video gallery components
- **Unified Animation System**: Custom motion mixin providing 4 distinct animation types with spring physics
- **Advanced Carousel Implementation**: Multiple Swiper configurations including vertical marquee, infinite loops, and pause-on-hover
- **Glass Morphism Design**: Consistent backdrop-blur effects across multiple sections for modern aesthetic
- **Enhanced User Experience**: Coordinated animations, staggered reveals, and interactive feedback throughout
- **Mobile-First Responsive**: All sections optimized for mobile with proper touch interactions and breakpoints

The project emphasizes performance with `visibleOnce` animations, accessibility with motion preferences, and maintainability through the mixin pattern for consistent behavior across all section components.

### Best Practices

#### Animation Implementation
- **Always use useMotion mixin**: Import and apply to all section components for consistency
- **Staggered timing**: Use incremental delays (50ms increments) for related elements
- **Animation types**: Choose appropriate motion type based on element importance
  - `getScrollSlideUpMotion()` for standard elements
  - `getScrollSlideUpMotionBounce()` for emphasis/headers
  - `getScrollFadeInMotion()` for backgrounds/subtle elements
- **Performance**: Use `visibleOnce` to prevent re-animations on scroll

#### Carousel Implementation
- **Infinite loops**: Enable `loop: true` for seamless cycling experience
- **Pause on hover**: Always implement `pauseOnMouseEnter: true` for better UX (except for marquee effects)
- **Custom navigation**: Position navigation arrows contextually within each section
- **Responsive slides**: Configure breakpoints for different screen sizes
- **Auto-scroll variations**: Use appropriate speeds
  - **Continuous marquee**: 1ms delay with 6000ms speed for uninterrupted motion
  - **Standard autoplay**: 3500-4000ms for user-friendly auto-progression
  - **Fast autoplay**: 1000ms for quick content cycling
- **Marquee Effects**: For continuous vertical/horizontal scrolling
  - Disable touch interaction (`allow-touch-move="false"`)
  - Use minimal delay (1ms) with longer speed duration
  - Perfect for background animations and content showcases

#### Visual Design
- **Glass morphism**: Use `bg-white/40 backdrop-blur-sm` for consistent card effects
- **Color consistency**: Stick to defined color palette (#1A94FF primary, #FFE759 accents)
- **Rounded corners**: Use 1.5rem standard, larger for special elements
- **Hover effects**: Implement scale (1.02-1.05) and shadow transforms consistently

#### Responsive Design
- **Mobile-first**: Design for mobile, enhance for desktop
- **Touch targets**: Minimum 48px for interactive elements
- **Breakpoint strategy**: Use custom TailwindCSS breakpoints (xs, sm, md, lg, xl, 2xl)
- **Content flow**: Ensure logical content order on all screen sizes

#### Component Architecture
- **Mixin pattern**: Use mixins for shared functionality across components
- **Import path validation**: Always verify mixin import paths to prevent cascade failures
- **Section isolation**: Each section should be self-contained with minimal dependencies
- **Lazy loading**: Implement for images and heavy content using vue-lazyload-next
- **Icon management**: Use existing SVG assets, clean up unused references to prevent build warnings
- **Accessibility**: Include proper ARIA labels, focus states, and motion preferences

### Troubleshooting

#### Motion Animation Issues
- **Symptoms**: Animations not working across multiple components
- **Common causes**: 
  1. Incorrect import paths in useMotion mixin or components
  2. Empty v-motion attributes (`v-motion=""`)
  3. Missing mixin registration in component
- **Debug approach**:
  1. Check browser console for JavaScript module errors
  2. Verify import paths are correct and files exist
  3. Ensure all v-motion attributes have valid function calls
  4. Validate that useMotion is properly imported and mixed in

#### Build Warnings
- **Missing SVG assets**: Update icon references to use existing files
- **Public directory warnings**: Use correct paths for public assets (remove `/public/` prefix)
- **Unused imports**: Remove unused icon references from component data
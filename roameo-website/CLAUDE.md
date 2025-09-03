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
- **Vue 3** with Composition API support
- **Vue Router 4** for client-side routing
- **Vite** as build tool and dev server
- **TailwindCSS 4.x** for styling with custom breakpoints
- **Vuex 4** for state management with persistence
- **@vueuse/motion** for animations
- **vue-lazyload-next** for image optimization
- **Swiper.js** for carousel/slider functionality with autoplay and navigation

### Project Structure
- `src/views/` - Top-level view components (MainView, ErrorView)
- `src/pages/` - Page components rendered within views (MainPage)
- `src/components/` - Reusable UI components (NavbarComponent, FooterComponent, FlightBookingForm, AccordionComponent)
- `src/sections/` - Page section components (DestinationSection, FeatureStaySection, FaqSection, FeaturedEpisode)
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

### Component Architecture

#### Interactive Components
- **AccordionComponent**: Reusable accordion with dynamic highlighting
  - Supports multiple simultaneous open items
  - Blue (#1A94FF) highlighting for active/expanded items
  - Smooth animations with height transitions
  - Mobile responsive with proper touch targets
  - Uses plus-accordion.svg icon with 45° rotation

#### Section Components
- **FaqSection**: Two-column responsive FAQ layout
  - Left column: Heading and description text
  - Right column: Integrated AccordionComponent
  - Sticky positioning on desktop, stacked on mobile
  
- **FeaturedEpisode**: Video gallery with asymmetric grid
  - Large featured video + 2 smaller side videos
  - Play button overlays with hover animations
  - Duration badges and video metadata
  - Gradient overlays with backdrop blur effects
  - Mobile-first responsive design

- **FeatureStaySection**: Hotel carousel with enhanced interactivity
  - Swiper.js integration with autoplay functionality (4s delay)
  - Custom navigation arrows with hover effects
  - Pause autoplay on mouse hover for better UX
  - Responsive breakpoints for different screen sizes
  - Enhanced button animations and visual feedback

### Design System
- **Primary Color**: #1A94FF (Roameo blue)
- **Accent Color**: #FFE759 (Yellow badges)
- **Typography**: Plus Jakarta Sans font family
- **Components**: Rounded corners (1.5rem), consistent spacing
- **Animations**: Smooth transitions, hover effects, transform animations
- **Interactive Elements**: 
  - Button hover effects with scale and shadow transforms
  - Icon transitions (brightness/invert on hover)
  - Autoplay carousels with pause-on-hover functionality
- **Responsive**: Mobile-first with custom TailwindCSS breakpoints
- **Accessibility**: Touch-friendly buttons (min 48px), proper focus states

### Current Development Focus
Recent additions include FAQ functionality with interactive accordions, video gallery sections for featured travel episodes, and enhanced carousel functionality with autoplay features. The project emphasizes user experience with pause-on-hover interactions, smooth animations, and mobile-responsive layouts throughout all components.

### Best Practices
- **Carousel Implementation**: Use Swiper.js with autoplay, pause-on-hover, and custom navigation
- **Interactive States**: Implement hover effects with visual feedback (scale, shadow, color changes)
- **Mobile Optimization**: Ensure touch-friendly interactions and responsive breakpoints
- **Animation Guidelines**: Use consistent transition durations (200-300ms) and easing functions
- **Component Reusability**: Create modular components that can be integrated across sections
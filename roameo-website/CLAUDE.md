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

### Project Structure
- `src/views/` - Top-level view components (MainView, ErrorView)
- `src/pages/` - Page components rendered within views (MainPage)
- `src/components/` - Reusable UI components (NavbarComponent, FooterComponent, FlightBookingForm)
- `src/router/` - Vue Router configuration with nested routing
- `src/assets/` - Static assets including SVG icons and images

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

### Current Development Focus
The project appears to be in active development of a flight booking form component, with recent work on hero sections and main page layout.
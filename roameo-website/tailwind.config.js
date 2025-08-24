/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      // => @media (min-width: 375px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '1920px',
      // => @media (min-width: 1936px) { ... }
    },
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        base: '#1F2937', //main bg-color
      }
    },
  },
  plugins: [],
};

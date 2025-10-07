import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import ErrorView from '@/views/ErrorView.vue';
import MainPage from '@/pages/MainPage.vue';
import FlightResults from '@/pages/FlightResults.vue'

import TempComponent from '@/components/TempComponent.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';


const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '/home',
        alias: '/',
        component: MainPage,
      },
      {
        path: '/flight-results',
        component: FlightResults,
      },
      {
        path:'/temporary',
        component: TempComponent,
      },

      {
        path: '/flights',
        component: UnderConstruction,
      },
      {
        path: '/hotels',
        component: UnderConstruction,
      },
      {
        path: '/blog',
        component: UnderConstruction,
      },
      {
        path: '/roameo-tv',
        component: UnderConstruction,
      },
      {
        path: '/essential',
        component: UnderConstruction,
      },



      {
        path:'/under-construction',
        component: UnderConstruction,
      }

    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorView',
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL, '/app'),
  routes,

  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

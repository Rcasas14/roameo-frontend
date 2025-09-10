import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import ErrorView from '@/views/ErrorView.vue';
import MainPage from '@/pages/MainPage.vue';
import FlightResults from '@/pages/FlightResults.vue'


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

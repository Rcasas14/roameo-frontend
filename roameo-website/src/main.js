import './style.css';

import { createApp } from 'vue';
import App from './App.vue';
import VueLazyLoad from 'vue-lazyload'
import router from './router';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);

app.use(MotionPlugin).use(router).use(VueLazyLoad, {
    preLoad: 1.3,
    attempt: 3,
    throttleWait: 500
});

app.mount('#app')

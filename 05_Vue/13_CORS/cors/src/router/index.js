import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    // lazy
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue'),
    },
    {
      path: '/dynamic/:mood',
      name: 'dynamic',
      component: () => import('@/pages/DynamicPage.vue'),
    },
    {
      path: '/userinfo/:username',
      name: 'userinfo',
      component: () => import('@/pages/UserInfo.vue'),
    },
    {
      path: '/cors',
      name: 'cors',
      component: () => import('../pages/CorsPage.vue'),
    },
    {
      path: '/ex-cors',
      name: 'ex-cors',
      component: () => import('../pages/CorsExPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
});

export default router;

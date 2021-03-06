import Vue from 'vue';
import Router from 'vue-router';
import Avengers from './views/Avengers.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'avengers',
      component: Avengers,
    },
    {
      path: '/card-game',
      name: 'card',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

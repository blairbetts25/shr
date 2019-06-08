import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import PlayerSignUp from '@/views/PlayerSignup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/playersignup/',
      name: 'playersignup',
      component: () => import('./views/PlayerSignup.vue')
    }
  ]
});

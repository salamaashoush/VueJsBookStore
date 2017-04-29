import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/Profile/Login';
import Register from '@/components/Profile/Register';
import Books from '@/components/Books/List';
import Categories from '@/components/Categories/List';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
    },
  ],
});

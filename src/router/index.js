import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/Profile/Login';
import Register from '@/components/Profile/Register';
import Books from '@/components/Books/List';
import BookDetail from '@/components/Books/Detail';
import CategoryDetail from '@/components/Categories/Detail';
import Authors from '@/components/Authors/List';
import AuthorDetail from '@/components/Authors/Detail';
import Api from '../api/api';

Vue.use(Router);

const router = new Router({
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
      path: '/books/:id',
      name: 'Book Details',
      component: BookDetail,
    },
    {
      path: '/categories/:id',
      name: 'Category Detail',
      component: CategoryDetail,
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors,
    },
    {
      path: '/authors/:id',
      name: 'Categories',
      component: AuthorDetail,
    },
  ],
});
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register' || to.path === '/' || Api.checkLogin()) {
    return next();
  }
  next('/login');
});
export default router;

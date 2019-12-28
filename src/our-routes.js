import Home from './components/Home.vue'
import About from './components/About.vue';
import FreeQuote from './components/FreeQuote'
import Products from '/components/Products'


export default [
  // Redirects to /route-one as the default route.
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/freequote',
    component: FreeQuote
  },
  {
    path: '/products',
    component: Products
  }
];
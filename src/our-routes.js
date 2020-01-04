import Home from './components/Home.vue'
import About from './components/About.vue';
import FreeQuote from './components/FreeQuote'
import Products from './components/Products'
import Accordion from './components/Accordion'
import Panels from './components/Panels'
import Rolldown from './components/Rolldown'
import HowToMeasure from './components/HowToMeasure'


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
    path: '/free quote',
    component: FreeQuote
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/accordion',
    component: Accordion
  },
  {
    path: '/panels',
    component: Panels
  },
  {
    path: '/rolldown',
    component: Rolldown
  },
  {
    path: '/how to measure',
    component: HowToMeasure
  },

];
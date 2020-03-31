import Home from './components/Home.vue'
import About from './components/About.vue'
import FreeQuote from './components/FreeQuote.vue'
import Products from './components/Products.vue'
import Accordion from './components/Accordion.vue'
import Panels from './components/Panels.vue'
import Rolldown from './components/Rolldown.vue'
import HowToMeasure from './components/HowToMeasure.vue'
import SubmissionSuccess from './components/SubmissionSuccess.vue'
import SubmissionFail from './components/SubmissionFail.vue'


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
  {
    path: '/thanks',
    name: 'success',
    component: SubmissionSuccess
  },
  {
    path: '/404',
    name: 'fail',
    component: SubmissionFail
  }

];
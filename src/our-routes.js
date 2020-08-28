const Home = () => import( /* webpackPrefetch: true */ './components/Home.vue')
const About = () => import(/* webpackPrefetch: true */ './components/About.vue')
const FreeQuote = () => import(/* webpackPrefetch: true */ './components/FreeQuote.vue')
const Accordion = () => import(/* webpackPrefetch: true */ './components/Accordion.vue')
const Panels = () => import(/* webpackPrefetch: true */ './components/Panels.vue')
const Rolldown = () => import(/* webpackPrefetch: true */ './components/Rolldown.vue')
const Garage = () => import(/* webpackPrefetch: true */ './components/Garage.vue')
const Ygrene = () => import(/* webpackPrefetch: true */ './components/Ygrene.vue')
const HowToMeasure = () => import(/* webpackPrefetch: true */ './components/HowToMeasure.vue')
const SubmissionSuccess = () => import(/* webpackPrefetch: true */ './components/SubmissionSuccess.vue')
const SubmissionFail = () => import(/* webpackPrefetch: true */ './components/SubmissionFail.vue')



export default [
  // Redirects to /route-one as the default route.
  {  
    path: '/ygrene',
    component: Ygrene,
  },
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
    path: '/garage',
    component: Garage
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
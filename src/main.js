import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import ourRoutes from './our-routes.js';

Vue.use(VueRouter);

// We create the router instance here.
const router = new VueRouter({
  routes: ourRoutes
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

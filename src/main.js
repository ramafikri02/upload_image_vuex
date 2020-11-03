import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Routes from './routes'

library.add(faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

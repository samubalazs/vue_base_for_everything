import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import store from '../store';
import router from './routes';

Vue.use(BootstrapVue);

new Vue({// eslint-disable-line no-new
  el: '#app',
  store,
  router,
  render: h => h(App),
});

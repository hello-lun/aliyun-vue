import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//master回滚
let master = 'master/commit-01';
master = 'master/commit-04';


import './assets/css/global.css';
import './assets/css/normalize.css';

import './errorMonitor';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

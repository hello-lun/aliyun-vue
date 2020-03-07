import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//cherry-pick/master
let master = 'master/commit-01';

master = 'master/commit-02';

master = 'master/commit-03';


import './assets/css/global.css';
import './assets/css/normalize.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

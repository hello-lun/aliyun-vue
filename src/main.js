import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let test1 = 'commit-0001';
test1 = 'commit-002';

//合并commit测试
let commit = test1; // commit-1
commit = '2'; // commit-2
commit = '3'; // commit-3



import './assets/css/global.css';
import './assets/css/normalize.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

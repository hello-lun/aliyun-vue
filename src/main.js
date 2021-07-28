import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

<<<<<<< Updated upstream
//cherry-pick/master
let master = 'master/commit-01';
=======
import VueErrorReport from './plugins/index'

Vue.use(VueErrorReport,{
	isReport: true,
	reportUrl: 'http://dev.sqm.wiiqq.com/api/fe/save',
  appId: '86805a7139a2b8000'
});

>>>>>>> Stashed changes

import './assets/css/global.css';
import './assets/css/normalize.css';

<<<<<<< Updated upstream
=======
// import './errorMonitor';

>>>>>>> Stashed changes
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

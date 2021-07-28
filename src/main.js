/*
 * @Author: your name
 * @Date: 2021-07-27 21:39:44
 * @LastEditTime: 2021-07-28 22:08:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aliyun-vue/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueErrorReport from "./plugins/index";

Vue.use(VueErrorReport, {
  isReport: true,
  reportUrl: "http://dev.sqm.wiiqq.com/api/fe/save",
  appId: "86805a7139a2b8000"
});

import "./assets/css/global.css";
import "./assets/css/normalize.css";

// import './errorMonitor';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

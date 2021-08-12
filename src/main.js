/*
 * @Author: your name
 * @Date: 2021-07-27 21:39:44
 * @LastEditTime: 2021-08-12 23:12:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aliyun-vue/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";

// import './errorMonitor';

import './errorMonitor';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

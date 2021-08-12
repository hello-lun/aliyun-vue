/*
 * @Author: your name
 * @Date: 2021-07-27 21:39:44
 * @LastEditTime: 2021-08-12 22:59:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aliyun-vue/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";

// import './errorMonitor';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

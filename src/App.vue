<!--
 * @Author: your name
 * @Date: 2021-07-27 21:37:07
 * @LastEditTime: 2021-08-12 23:08:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aliyun-vue/src/App.vue
-->
<template>
  <div class="app">
    <h1>library测试</h1>
    <library />
  </div>
</template>

<script>
import library from "../dist/myLib.common.js";
import "../dist/myLib.css";

export default {
  name: "a",
  components: {
    library
  }
};
</script>
<style>
.app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

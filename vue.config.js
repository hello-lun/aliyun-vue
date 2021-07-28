/*
 * @Author: your name
 * @Date: 2021-07-27 21:37:07
 * @LastEditTime: 2021-07-28 22:06:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /aliyun-vue/vue.config.js
 */
const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/aliyun-vue/" : "/",
  assetsDir: "./assets",
  devServer: {
    proxy: "http://172.27.50.26:3389"
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  }
};

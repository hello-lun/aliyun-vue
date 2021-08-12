/*
 * @Author: your name
 * @Date: 2021-07-27 21:37:07
 * @LastEditTime: 2021-08-12 23:09:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aliyun-vue/vue.config.js
 */
const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/aliyun-vue/" : "/",
  assetsDir: "./assets",
  lintOnSave: false,
  devServer: {
    // proxy: "http://172.27.50.26:3389"
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

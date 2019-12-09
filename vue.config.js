const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/aliyun-vue/'
    : '/',
  assetsDir: './assets',
  devServer: {
    proxy: 'http://47.105.191.28'
  },
  lintOnSave: false,
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
}
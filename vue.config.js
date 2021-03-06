const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/aliyun-vue/'
    : '/',
  assetsDir: './assets',
  devServer: {
    proxy: 'http://172.27.50.26:3389'
  },
  configureWebpack: config => {
    config.devtool = "source-map";
  },
  lintOnSave: false,
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
}
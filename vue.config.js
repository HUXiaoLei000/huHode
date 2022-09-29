const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 处理白屏
  publicPath: "./",
  // 端口号更改
  host: 8889,
  // 主机名
  host: "localhost",
  // 启动自动打开浏览器
  open: true,
  // 本地跨域处理
  proxy: {
    // 代理名称
    [process.env.VUE_APP_BASE_API]: {
      // 代理地址
      target: process.env.VUE_APP_SERVICE_URL,
      // 开启跨域
      changOrigin: true,
      // 重写路径
      pathRewrite: {
        ["^" + process.env.VUE_APP_BASE_API]: ""
      }
    }
  },

  // 关闭格式检查
  lintOnSave: false,
  // 打包不会生成  .map  文件
  productionSourceMap: false




})
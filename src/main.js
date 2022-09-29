import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配置axios
import axios from "axios"
// 挂载原型
Vue.prototype.axios = axios
// 配置ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
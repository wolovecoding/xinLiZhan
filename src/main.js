import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue,IconsPlugin} from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
//我认为这两个文件应该是上面两个插件要用到，所以才这样导入
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

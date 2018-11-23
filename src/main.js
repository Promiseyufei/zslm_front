 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入jquery
import $ from 'jquery'

//引入font-awesome4.7.0
import 'font-awesome/css/font-awesome.min.css'

//引入vuex
import store from './config/store'

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


//引入图片插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

//引入axios
import axios from 'axios'
window.axios = axios
// axios.defaults.withCredentials = true

//引入exif
import Exif from 'exif-js'
window.Exif = Exif

//使用wangeditor
import WangEditor from 'wangeditor'
window.WangEditor = WangEditor

//使用mock
import Mock from 'mockjs'
window.Mock = Mock
require('../util/mock/xuhong_mock.js')
require('../util/mock/youqiqin_mock.js')
require('../util/mock/sunjifeng.js')
Vue.config.productionTip = false


//加载公共组件
import components from './components/'
Object.keys(components).forEach((key)=>{
  Vue.component(key,components[key]);
})

//挂靠公共过滤器
import filters from './config/filters.js'
Object.keys(filters).forEach((key)=>{
  Vue.filter(key,filters[key]);
})

//挂靠公共方法
import methods from './config/methods.js'
Object.keys(methods).forEach((key)=>{
  Vue.prototype[key]=methods[key];
})

//二次封装axios
// import httpServer from './config/providers/http-service.js'
// Object.keys(httpServer).forEach((key) => {
//   Vue.prototype[key] = httpServer[key];
// })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


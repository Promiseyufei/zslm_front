// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入jquery
import $ from 'jquery'


//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


//使用mock
import Mock from 'mockjs'
window.Mock = Mock


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


// //二次封装axios
// import httpServer from './config/providers/http-service'
// Object.keys(httpServer).forEach((key) => {
//   Vue.prototype[key] = httpServer[key];
// })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

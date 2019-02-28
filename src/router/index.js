import Vue from 'vue'
import Router from 'vue-router'
import admin from './admin'
import front from './front'


Vue.use(Router)

let all_router = {}

all_router.routes = admin.routes.concat(front.routes)
export default new Router(all_router)

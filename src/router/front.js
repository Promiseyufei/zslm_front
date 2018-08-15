let front_router = {
    routes: [
        {
            path: '/front',
            name: '首页',
            component: resolve =>void(require(['@/views/front/index'], resolve))
        }
    ]
}



export default front_router;
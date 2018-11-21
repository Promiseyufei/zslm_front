let front_router = {
    routes: [
        {
            path: '/front',
            name: '首页',
            component: resolve =>void(require(['@/views/front/index'], resolve))
        },
        {
            path: '/front/usercore',
            name: 'usercore_major',
            component: resolve =>void(require(['@/views/front/usercore'], resolve))
        },
    ]
}



export default front_router;
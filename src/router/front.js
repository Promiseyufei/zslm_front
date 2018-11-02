let front_router = {
    routes: [
        {
            path: '/front',
            name: '首页',
            component: resolve =>void(require(['@/front'], resolve)),
            children: [
                
            ]
        }
    ]
}



export default front_router;
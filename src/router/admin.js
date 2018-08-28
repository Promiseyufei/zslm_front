let admin_router = {
    routes: [
        {
            path: '/admin',
            name: '首页',
            component: resolve =>void(require(['@/views/admin/news'], resolve))
        },
        {
            path: '/accounts',
            name: '导航',
            component: resolve =>void(require(['@/views/admin/accounts'], resolve))
        },
        {
            path: '/information',
            name: '小块',
            component: resolve =>void(require(['@/views/admin/information'], resolve))
        },
        {
<<<<<<< HEAD
            path: '/files',
            name: '文件管理',
            component: resolve =>void(require(['@/views/admin/files'], resolve))
=======
            path: '/operate',
            name: '运营管理',
            component: resolve =>void(require(['@/views/admin/operate'], resolve))
>>>>>>> 786c23532cfba51ad4c0c1211745b6d3bca71d36
        }
    ]
}



export default admin_router;
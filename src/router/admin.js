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

            path: '/files',
            name: '文件管理',
            component: resolve =>void(require(['@/views/admin/files'], resolve))
        },
        {
            path: '/operate',
            name: '运营管理',
            component: resolve =>void(require(['@/views/admin/operate'], resolve))

        },
        {
            path: '/data',
            name: '分享数据',
            component: resolve =>void(require(['@/views/admin/data'], resolve))

        }
    ]
}



export default admin_router;
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
        // {
        //     path: '/information',
        //     name: '小块',
        //     component: resolve =>void(require(['@/views/admin/information'], resolve))
        // },

        // 文件管理
        {
            path: '/files',
            name: '文件管理',
            component: resolve =>void(require(['@/views/admin/files'], resolve))
        },
        {
            path: '/selectUnivers',
            name: '选择院校专业',
            component: resolve =>void(require(['@/views/admin/SelectUnivers'], resolve))
        },
        {
            path: '/files/fileup',
            name: '文件管理——上传文件',
            component: resolve =>void(require(['@/views/admin/filesManage/FileUp'], resolve))
        },
        // 运营管理
        {
            path: '/operate',
            name: '运营管理',
            component: resolve =>void(require(['@/views/admin/operate'], resolve))
        },
        {
            path: '/operate/advise',
            name: '运营管理——资讯频道首页推荐',
            component: resolve =>void(require(['@/views/admin/operat/OperateAdvise'], resolve))
        },
        {
            path: '/operate/addAdvise/:id',
            name: '运营管理——资讯频道首页推荐——添加',
            component: resolve =>void(require(['@/views/admin/operat/AddAdvise'], resolve))
        },
        {
            path: '/operate/ad',
            name: '运营管理——广告位管理',
            component: resolve =>void(require(['@/views/admin/operat/Ad'], resolve))
        },
        {
            path: '/operate/data',
            name: '分享数据',
            component: resolve =>void(require(['@/views/admin/operat/data'], resolve))

        },
        // 信息发布
        {
            path: '/universMajorList',
            name: '院校专业列表',
            component: resolve =>void(require(['@/views/admin/UniversMajorList'], resolve))
        },
        {
            path: '/message/messageHome',
            name: '编辑-院校专业',
            component: resolve =>void(require(['@/views/admin/message/MessageHome'], resolve))
        },
        {
            path: '/message/universityMessage',
            name: '编辑-招生项目',
            component: resolve =>void(require(['@/views/admin/message/UniversityMessage'], resolve))
        },
        {
            path: '/message/activity',
            name: '编辑-活动信息',
            component: resolve =>void(require(['@/views/admin/message/Activity'], resolve))
        },
        {
            path: '/message/advise',
            name: '编辑-推荐信息',
            component: resolve =>void(require(['@/views/admin/message/Advise'], resolve))
        },
        {
            path: '/message/hostuniversmajor',
            name: '活动-设置主办院校专业',
            component: resolve =>void(require(['@/views/admin/message/hostuniversmajor'], resolve))
        },
        {
            path: '/activityList',
            name: '活动-列表',
            component: resolve =>void(require(['@/views/admin/message/activityList'], resolve))
        },
        {
            path: '/test',
            name: 'WangEditor test',
            component: resolve =>void(require(['@/views/admin/test'], resolve))
        },
        
    ]
}



export default admin_router;
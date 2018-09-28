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
            path: '/operate/sharedata',
            name: '分享数据',
            component: resolve =>void(require(['@/views/admin/operat/sharedata'], resolve))

        },
        // 信息发布
        {
            path: '/message/universMajorList',
            name: '院校专业列表',
            component: resolve =>void(require(['@/views/admin/UniversMajorList'], resolve))
        },
        {
            path: '/message/messageHome',
            name: '编辑-院校专业',
            component: resolve =>void(require(['@/views/admin/message/collegeInformation/MessageHome'], resolve))
        },
        {
            path: '/message/universityMessage',
            name: '编辑-招生项目',
            component: resolve =>void(require(['@/views/admin/message/collegeInformation/UniversityMessage'], resolve))
        },
        {
            path: '/message/activity',
            name: '活动——编辑-活动信息',
            component: resolve =>void(require(['@/views/admin/message/activityInformation/Activity'], resolve))
        },
        {
            path: '/message/notice/:id',
            name: '消息通知',
            component: resolve =>void(require(['@/views/admin/message/activityInformation/messageNotice'], resolve))
        },
        {
            path: '/message/advise/:id',
            name: '活动——编辑-推荐信息',
            component: resolve =>void(require(['@/views/admin/message/activityInformation/Advise'], resolve))
        },
        {
            path: '/message/hostuniversmajor',
            name: '活动-设置主办院校专业',
            component: resolve =>void(require(['@/views/admin/message/hostuniversmajor'], resolve))
        },
        {
            path: '/message/activityList',
            name: '活动-列表',
            component: resolve =>void(require(['@/views/admin/message/activityInformation/activityList'], resolve))
        },
        {
            path: '/message/coachList',
            name: '辅导-列表',
            component: resolve =>void(require(['@/views/admin/message/counselling/coachList'], resolve))
        },
        {
            path: '/message/changeMessage',
            name: '辅导-新建/编辑——基本信息',
            component: resolve =>void(require(['@/views/admin/message/counselling/changeMessage'], resolve))
        },
        {
            path: '/message/coupon/:id',
            name: '辅导-新建/编辑——优惠卷设置',
            component: resolve =>void(require(['@/views/admin/message/counselling/coupon'], resolve))
        },
        {
            path: '/message/aboutActivity/:id',
            name: '辅导-新建/编辑——相关活动设置',
            component: resolve =>void(require(['@/views/admin/message/counselling/aboutActivity'], resolve))
        },
        {
            path: '/message/choiceactivity',
            name: '信息管理-辅导-相关活动-添加活动',
            component: resolve =>void(require(['@/views/admin/message/counselling/choiceactivity'], resolve))
        },
        {
            path: '/message/informationList',
            name: '信息管理-资讯发布-资讯-列表',
            component: resolve =>void(require(['@/views/admin/message/informationRelease/informationList'], resolve))
        },
        {
            path: '/test',
            name: 'WangEditor test',
            component: resolve =>void(require(['@/views/admin/test'], resolve))
        },
        // 账户管理
        {
            path: '/usermanagement/userfocusmajor',
            name: '用户管理-关注院校',
            component: resolve =>void(require(['@/views/admin/usermanagement/userfocusmajor'], resolve))
        },
        
    ]
}



export default admin_router;
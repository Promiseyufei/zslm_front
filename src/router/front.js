let front_router = {
    routes: [

        {
            path: '/front',
            name: '前台',
            component: resolve => void(require(['@/front'], resolve)),
            children: [
                {
                    path: 'test',
                    name: '这是测试在组件样式用的',
                    component: resolve => void(require(['@/views/front/logoInto/search'], resolve))
                },
                {
                    path: 'testtwo',
                    name: '这！也是！测试在组件样式用的',
                    component: resolve => void(require(['@/views/front/firstMenu/test'], resolve))
                },

                //登录
                {
                    path: 'Login/loginRoute',
                    name: '用户登录',
                    component: resolve => void(require(['@/views/front/Login/loginRoute'], resolve)),
                    children: [
                        {
                            path: 'accountNumber',
                            name: '账号登录',
                            component: resolve => void(require(['@/views/front/Login/accountNumber'], resolve))
                        },
                        {
                            path: 'shortMessage',
                            name: '短信登录',
                            component: resolve => void(require(['@/views/front/Login/shortMessage'], resolve))
                        },
                    ]
                },
                {
                    path: 'Login/resetPassword',
                    name: '重置密码',
                    component: resolve => void(require(['@/views/front/Login/resetPassword'], resolve))
                },
                {
                    path: 'Login/register',
                    name: '注册会员',
                    component: resolve => void(require(['@/views/front/Login/register'], resolve))
                },
                //一级导航,主页面，包括选院校、找活动、找资讯、搜辅导以及其详情页
                {
                    path: 'firstMenuRouter',
                    name: '一级导航',
                    component: resolve => void(require(['@/views/front/firstMenu/firstMenuRouter'], resolve)),
                    children: [
                        {
                            path: 'selectCollege',
                            name: '选院校',
                            component: resolve => void(require(['@/views/front/firstMenu/selectCollege'], resolve))
                        },
                        {
                            path: 'singleCollage',
                            name: '选院校——单个院校，招生项目',
                            component: resolve => void(require(['@/views/front/detailPage/singleCollage'], resolve))
                        },
                        {
                            path: 'lookActivity',
                            name: '找活动',
                            component: resolve => void(require(['@/views/front/firstMenu/lookActivity'], resolve))
                        },
                        {
                            path: 'viewInformation',
                            name: '找资讯',
                            component: resolve => void(require(['@/views/front/firstMenu/viewInformation'], resolve))
                        },
                        {
                            path: 'searchCoach',
                            name: '搜辅导',
                            component: resolve => void(require(['@/views/front/firstMenu/searchCoach'], resolve))
                        },
                        {
                            path: 'usercore',
                            name: 'usercore_major',
                            component: resolve =>void(require(['@/views/front/usercore/usercore'], resolve))
                        },
                    ]
                },
                // 首页
                {
                    path: 'index',
                    name: '首页',
                    component: resolve => void(require(['@/views/front/index'], resolve))
                },
                {
                    path: 'search',
                    name: '搜索页面',
                    component: resolve => void(require(['@/views/front/search/search'], resolve)),
                    children: [
                        {
                            path:'major/:keyword?',
                            name:'搜索页面的院校专业详情',
                            component: resolve => void(require(['@/views/front/search/searchMajor'], resolve)),
                        },
                        {
                            path: 'activity/:keyword?',
                            name: '搜索页面的活动详情',
                            component: resolve => void(require(['@/views/front/search/searchActivity'], resolve)),
                        },
                        {
                            path: 'info/:keyword?',
                            name: '搜索页面的咨询详情',
                            component: resolve => void(require(['@/views/front/search/searchInfo'], resolve)),
                        },
                        {
                            path: 'coach/:keyword?',
                            name: '搜索页面的辅导机构详情',
                            component: resolve => void(require(['@/views/front/search/searchCoach'], resolve)),
                        }
                    ]
                },



                //小分页
                {
                    path: 'singleCollage/:id?',
                    name: '首页-单个院校',
                    component: resolve => void(require(['@/views/front/detailPage/singleCollage'], resolve))
                },
                {
                    path: 'singleCoach/:id?',
                    name: '单个辅导机构',
                    component: resolve => void(require(['@/views/front/detailPage/singleCoach'], resolve))
                },

            ]
        }
    ]
}


export default front_router;
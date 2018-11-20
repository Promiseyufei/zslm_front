let front_router = {
    routes: [
        {
            path: '/front',
            name: '前台',
            component: resolve =>void(require(['@/front'],resolve)),
            children: [

                //登录
                {	
                	path:'Login/loginRoute',
                	name:'用户登录',
                	component:resolve =>void(require(['@/views/front/Login/loginRoute'],resolve)),
                	children: [
                		{
                			path:'accountNumber',
                			name: '账号登录',
                			// name: 'accountNumber',
                			component:resolve =>void(require(['@/views/front/Login/accountNumber'],resolve))
                		},
                		{
                			path:'shortMessage',
                			name: '短信登录',
                			component:resolve =>void(require(['@/views/front/Login/shortMessage'],resolve))
                		},
                	]
                },
                {
                	path: 'resetPassword',
            		name: '重置密码',
            		component: resolve =>void(require(['@/views/front/Login/resetPassword'], resolve))
            	},
            	{
                	path: 'register',
            		name: '注册会员',
            		component: resolve =>void(require(['@/views/front/Login/register'], resolve))
            	},
            	//一级导航,主页面，包括选院校、找活动、找资讯、搜辅导
            	{
                    path: 'firstMenuRouter',
                    name: '一级导航',
                    component: resolve =>void(require(['@/views/front/firstMenu/firstMenuRouter'], resolve)),
                    children: [
                    	{
		                    path: 'selectCollege',
		                    name: '选院校',
		                    component: resolve =>void(require(['@/views/front/firstMenu/selectCollege'], resolve))
		                },
		                {
		                    path: 'lookActivity',
		                    name: '找活动',
		                    component: resolve =>void(require(['@/views/front/firstMenu/lookActivity'], resolve))
		                },
		                {
		                    path: 'viewInformation',
		                    name: '找资讯',
		                    component: resolve =>void(require(['@/views/front/firstMenu/viewInformation'], resolve))
		                },
		                {
		                    path: 'searchCoach',
		                    name: '搜辅导',
		                    component: resolve =>void(require(['@/views/front/firstMenu/searchCoach'], resolve))
		                },
                    ]
                },
                // 首页
                {
                    path: 'index',
                    name: '首页',
                    component: resolve =>void(require(['@/views/front/index'], resolve))
                },
                
                
                //小分页
                {
                    path: 'singleCollage/:id?',
                    name: '首页-单个院校',
                    component: resolve =>void(require(['@/views/front/detailPage/singleCollage'], resolve))
                },
            ]
        }
    ]
}



export default front_router;
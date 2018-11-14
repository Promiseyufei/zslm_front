let front_router = {
    routes: [
        {
            path: '/front',
            name: '首页',
            component: resolve =>void(require(['@/front'], resolve)),
            children: [
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
                	path: '/resetPassword',
            		name: '首页',
            		component: resolve =>void(require(['@/views/front/Login/resetPassword'], resolve)),
                },
            ]
        }
    ]
}



export default front_router;
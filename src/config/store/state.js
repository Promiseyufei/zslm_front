export const state = {
	//存变量
	loginStatus: {
		activeKey:'1'
	},

	//用户信息
	userInfo: {
		userPhone:'',
		userPassword:'',
		smsCode:'',
	},
	search: {
		keyword:'',
		nowUrl:'/front/search/major'
	},

	//发消息时设置消息对象选择活动和专业数组的共存
	sendnewObj: {
		activityArr:[],
		majorArr: []
	}
}
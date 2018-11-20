export const mutations= {
	//修改变量
	setPassword(state, p) {
		state.setPassword = p;
		// console.log(state.setPassword);
	},
	setTestcode(state, t) {
		state.setTestcode = t;
		// console.log(state.setTestCode);
	},
	setPhoneNumber(state, h) {
		state.setPhoneNumber = h;
	},
	//修改state中的loginStatus
	changeLoginStatus(state, param) {
		state.loginStatus[param.name] = param.val;
	},
	changeUserInfo(state, param) {
		state.userInfo[param.name] = param.val;
	}
    
}
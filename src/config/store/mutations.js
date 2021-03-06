import { stat } from "fs";

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
	setActive(state, a) {
		state.setPhoneNumber = a;
	},
	//修改state中的loginStatus
	changeLoginStatus(state, param) {
		state.loginStatus[param.name] = param.val;
	},
	
	changeUserInfo(state, param) {
		state.userInfo[param.name] = param.val;
	},
	changeSearch(state, param) {
		state.search[param.name] = param.val;
	},

	// 发消息时设置消息对象选择活动和专业数组的共存
	changeSendnewObj(state, param) {
		state.sendnewObj[param.name] = param.val;
	}
    
}
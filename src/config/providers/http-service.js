import axios from 'axios';




axios.defaults.timeout = 5000;


axios.defaults.baseURL = 'http://www.mbahelper.cn:8889';
// axios.defaults.baseURL = 'http://localhost:81/zslm_back/public';

var that = this
axios.interceptors.request.use(
	config => {
		var arr, reg = new RegExp("(^| )" + 'UUID' + "=([^;]*)(;|$)");
		var uuid = ''
		if (arr = document.cookie.match(reg)) {
			uuid = arr[2] == '0' ? '' : arr[2];
		}
		config.headers = {
			'UUID': uuid,
			'Content-Type': 'application/json',

		}
		return config;
	},
	error => {
		return Promise.reject(err);
	}
);


axios.interceptors.response.use(response => {
	return response;
}, err => {
	if (err && err.response) {
		switch (err.response.status) {
			case 400:
				console.log('请求错误');
			case 401:
				console.log('未授权，请重新登录');
			case 403:
				console.log('拒绝访问');
			case 404:
				console.log('请求错误，未找到该资源');
			case 405:
				console.log('请求方法未允许');
			case 408:
				console.log('请求超时');
			case 500:
				console.log('服务器端出错');
			case 501:
				console.log('网络未实现');
			case 502:
				console.log('网络错误');
			case 503:
				console.log('服务不可用');
			case 504:
				console.log('网络超时');
			case 505:
				console.log('http版本不支持该请求');
			default:
				console.log(`连接错误${err.response.status}`)
		}
	} else {
		console.log('连接到服务器失败');
	}

	return Promise.resolve(err.response);
})

export default {
	//get
	vue: null,


	getUUID: function() {
		/**
		 * 读取在cookie中的用户uuid
		 */
		 var arr, reg = new RegExp("(^| )" + 'UUID' + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) {
			return arr[2] == '0' ? '' : arr[2];
		}else{
			return ''
		}
	},

	fetch: function(url, params = {}) {

		return new Promise((resolve, reject) => {
			axios.get(url, {
					params: params
				})
				.then(response => {
					resolve(response.data);
				}).catch(err => {
					reject(err);
				})
		})
	},

	//post
	post: function(url, data, config) {

		typeof config !== 'undefined' ? config : {};


		return new Promise((resolve, reject) => {
			axios.post(url, data, config)
				.then(response => {
					resolve(response.data);
				}, err => {
					reject(err);
				})
		})
	},

	//patch
	patch: function(url, data = {}) {
		return new Promise((resolve, reject) => {
			axios.patch(url, data)
				.then(response => {
					resolve(response.data);
				}, err => {
					reject(err);
				})
		})
	},

	//put
	put: function(url, data = {}) {
		return new Promise((resolve, reject) => {
			axios.put(url, data)
				.then(response => {
					resolve(response.data);
				}, err => {
					reject(err);
				})
		})
	}
}

import {
	Loading
} from 'element-ui';

export default {
	callDialog: function() {
		alert('公共方法成功啦～');
	},
	// 消息提示框
	/**
	 *
	 * @param judge 默认为true
	 * @param msg   警示信息
	 * @param type string 提示框类型 success info warning error
	 * @return {ElMessageComponent | *}
	 */
	message: function(judge, msg, type) {
		return this.$message({
			showClose: judge,
			message: msg,
			type: type
		});
	},

	spliceArr(arr, start) {
		let returnArr = [];
		if (arr.length >= (start + 1)) {
			for (let i = 0; i <= start; i++) {
				returnArr.push(arr.shift());
			}
			return [returnArr, arr];
		} else {
			return arr;
		}
	},
	/**
	 * 搜索页用于获得去掉参数的路由
	 * @param {string} url
	 */
	getChangeUrl(url) {
		var arr = url.split("/");
		arr.shift();
		if (arr.length !== 3)
			arr.pop();
		var str = '/';
		arr.forEach((item => {
			str += (item + '/');
		}));
		return str;
	},

	/**
	 * 登录成功后本地保存用户的状态
	 */
	saveUserState(userName, userPhone) {
		userName = typeof userName == 'undefined' ? 'user' : userName;
		userPhone = typeof userPhone == 'undefined' ? '0' : userPhone;
		var d = new Date();
		d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = userName + "=" + userPhone + "; " + expires;
	},

	/**
	 * 获得本地用户登录状态
	 * @param {String} userName
	 */
	getUserState(userName) {
		typeof userName == 'undefined' ? 'user' : userName;
		var arr, reg = new RegExp("(^| )" + userName + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) {
			return arr[2] == '0' ? null : arr[2];
		} else
			return null;
	},

	getUserStatePro(userName) {
		typeof userName == 'undefined' ? 'user' : userName;
		var arr, reg = new RegExp("(^| )" + userName + "=([^;]*)(;|$)");
		arr = document.cookie.match(reg)
		if (arr != null) {
			return arr[2] == '0' ? null : arr[2];
		} else
			return null;
	},

	/**
	 *
	 * @param {String} phoneNumber 手机号码
	 */
	sendSmsCode(phoneNumber) {
		this.time = 60;
		this.disabled = true;
		var _this = this;

		var times = setInterval(function(){
      if (_this.time > 0) {
        _this.time--;
        _this.btntxt = _this.time;
      }else{
        _this.time = 0;
        _this.btntxt = "重新发送";
        _this.disabled = false;
        clearInterval(times);
      }
    } , 1000);

		this.fetch('/login/front/sendSmsCode', {
			userPhone: phoneNumber
		}).then((response) => {
			if (response.code == 0) {
				this.$message('验证码已发送，请注意查收');
			} else {
				this.message(true, response.msg, 'info');
			}
		})
	},

	/**
	 * 发送短信时进行倒计时
	 */
	timer: function() {
		if (this.time > 0) {
			this.time--;
			this.btntxt = this.time;
			setTimeout(this.timer, 800);
		} else {
			this.time = 0;
			this.btntxt = "重新发送";
			this.disabled = false;
		}
	},


	/**
	 * 时间戳转换为时间
	 * @param timestamp 10位时间戳
	 * @return {string} YYYY-MM-DD时间格式
	 */
	timestampToTime: function(timestamp) {
		var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		var D = date.getDate() + ' ';
		return Y + M + D;
	},

	/**
	 * 对话框
	 * @param callBack 确定执行的回调函数
	 * @param catchBack 取消执行的回调函数
	 * @param msg 对话框的内容
	 * @param type 对话框类型
	 * @param data 对话框按钮和种类属性等对象
	 */
	confirm: function(callBack, catchBack, msg, type, data) {
		msg = typeof msg !== 'undefined' ? msg : '是否取消操作？';
		type = typeof type !== 'undefined' ? type : '提示';
		data = typeof data !== 'undefined' ? data : {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		};
		typeof callBack !== 'function' ?
			this.$confirm(msg, type, data) :
			(typeof catchBack !== 'function' ?
				this.$confirm(msg, type, data).then(callBack) :
				this.$confirm(msg, type, data).then(callBack).catch(catchBack));

	},

	/**
	 * 对post/get的三次封装
	 * @param {String} request 请求方式：post/get
	 * @param {String} url 请求路由
	 * @param {Object} parameter 请求参数
	 * @param {callback} callback 请求返回成功时的回调函数
	 * @param {callback} failCallback 请求返回失败时的回调函数
	 */
	getMajorPageOptions(request, url, parameter, callback, failCallback) {
		if (request == 'post' || request == 'POST') {
			this.post(url, parameter).then((response) => {
				if (response.code == 0) {
					callback(response);
				} else {
					failCallback(response);
				}
			})
		} else if (request == 'get' || request == 'GET') {
			this.fetch(url, parameter).then((response) => {
				response.code == 0 ? callback() : failCallback();
			})
		}
	},

	/**
	 * 截取数组，且原数组的值不会改变
	 * @param array　目标数
	 * @param index 初始截取下标
	 * @param length 截取长度
	 *
	 */
	interceptArray(array, index, length) {
		if (array instanceof Array) {
			let newArray = [];
			if (index + length <= array.length) {
				for (let i = index; i < length; i++)
					newArray.push(array[i]);
			} else {
				for (let i = index; i < array.length; i++)
					newArray.push(array[i]);
			}

			return newArray;
		} else
			console.log("不是一个数组");
	},


	// 得到省份字典
	getProvince: function() {
		let self = this;
		this.post('/admin/information/getMajorProvincesAndCities', {})
			.then(function(response) {
				// console.log(response);
				if (response.code == 0) {
					return response.result;
				} else
					return [];
			})
			.catch(function(error) {});
	},

	// 改变表格第一行的背景颜色
	getRowClass: function({
		row,
		column,
		rowIndex,
		columnIndex
	}) {
		if (rowIndex == 0) {
			return 'background:#EFEFEF;text-align:center'
		} else {
			return ''
		}
	},

	// 删除单个banner
	deleteSingle: function(res, row) {
		this.$emit('del', res, row);
	},

	// 得到专业字典
	getMajor: function() {
		let self = this;
		this.post('/admin/information/getMajorType', {})
			.then(function(response) {
				if (response.code == 0) {
					this.major = response.result;
				};
			})
			.catch(function(error) {});
	},

	//加载是否显示
	// openFullScreen2() {
	//     return Loading.service({
	//         lock: true,
	//         text: 'Loading',
	//         spinner: 'el-icon-loading',
	//         background: 'rgba(0, 0, 0, 0.7)'
	//     });
	// },

	// 删除所给id序列的banner
	deleteBanner: function(arrayTableId) {
		var self = this;
		console.log(arrayTableId);
		this.confirm(() => {
			this.post('/admin/operate/deleteBannerAd', {
				btId: arrayTableId
			}).then((response) => {
				if (response.code == 0) {
					this.tableData3.splice(this.tableData3.indexOf(row), 1);
					this.message(true, response.msg, 'success');
				} else {
					this.message(true, response.msg, 'error');
				}
			})
		}, () => {
			this.message(true, '已取消修改', 'info');
		})
	},

	// 判断是否为链接
	validateImage: function(url) {
		var xmlHttp;
		if (window.ActiveXObject) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			xmlHttp = new XMLHttpRequest();
		}
		xmlHttp.open("Get", url, false);
		xmlHttp.send();
		if (xmlHttp.status == 404)
			return false;
		else
			return true;
	},

	// 判断是否是图片
	beforeAvatarUpload: function(file) {
		const isjpeg = file.type === 'image/jpeg';
		const isPNG = file.type === 'image/png';
		const isLt2M = file.size / 1024 / 1024 < 200;

		if (!isjpeg && !isPNG) {
			this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
		}
		if (!isLt2M) {
			this.$message.error('上传头像图片大小不能超过 200MB!');
		}
		return isjpeg || isPNG && isLt2M;
	},

	date: function(date, pattern) {
		if (date == undefined) {
			date = new Date();
		} else {
			date = new Date(date * 1000)
		}
		if (pattern == undefined) {
			// pattern = "yyyy-MM-dd hh:mm:ss";
			pattern = "yyyy-MM-dd hh:mm";
		}
		var o = {
			"M+": date.getMonth() + 1,
			"d+": date.getDate(),
			"h+": date.getHours(),
			"m+": date.getMinutes(),
			"s+": date.getSeconds(),
			"q+": Math.floor((date.getMonth() + 3) / 3),
			"S": date.getMilliseconds()
		}
		if (/(y+)/.test(pattern)) {
			pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(pattern)) {
				pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return pattern;
	},

	// 将时间戳 转换为 X天X小时X分钟
	formatDuring: function(mss) {
		var days = parseInt(mss / (60 * 60 * 24));
		var hours = parseInt((mss % (60 * 60 * 24)) / (60 * 60));
		var minutes = parseInt((mss % (60 * 60)) / 60);
		var seconds = mss % 60;
		return days + " 天 " + hours + " 小时 " + minutes + " 分钟 ";
	},

	//js计算时间为刚刚、几分钟前、几小时前、几天前
	timeago: function(dateTimeStamp) { //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
		var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
		var hour = minute * 60;
		var day = hour * 24;
		var week = day * 7;
		var halfamonth = day * 15;
		var month = day * 30;
		var now = new Date().getTime(); //获取当前时间毫秒
		var result;
		// console.log(now)
		var diffValue = now - dateTimeStamp; //时间差

		if (diffValue < 0) {
			diffValue = Math.floor(Math.abs(diffValue) / 1000);
			// console.log(diffValue);
			var tempDay = Math.floor(diffValue / 24 / 60 / 60);
			var tempHour = Math.floor((diffValue % (24 * 60 * 60)) / 60 / 60);
			var tempMin = Math.floor((((diffValue % (24 * 60 * 60)) % (60 * 60)) / 60));
			var tempStr = "";
			if (tempDay > 0) {
				tempStr += tempDay + "天";
			}
			if (tempHour > 0) {
				tempStr += tempHour + "小时";
			}
			if (tempMin > 0) {
				tempStr += tempMin + "分钟后";
			}
			// console.log(tempDay,tempHour,tempMin)
			return tempStr;
		}
		var minC = diffValue / minute; //计算时间差的分，时，天，周，月
		var hourC = diffValue / hour;
		var dayC = diffValue / day;
		var weekC = diffValue / week;
		var monthC = diffValue / month;
		if (monthC >= 1 && monthC <= 3) {
			result = " " + parseInt(monthC) + "月前"
		} else if (weekC >= 1 && weekC <= 3) {
			result = " " + parseInt(weekC) + "周前"
		} else if (dayC >= 1 && dayC <= 6) {
			result = " " + parseInt(dayC) + "天前"
		} else if (hourC >= 1 && hourC <= 23) {
			result = " " + parseInt(hourC) + "小时前"
		} else if (minC >= 1 && minC <= 59) {
			result = " " + parseInt(minC) + "分钟前"
		} else if (diffValue >= 0 && diffValue <= minute) {
			result = "刚刚"
		} else {
			var datetime = new Date();
			datetime.setTime(dateTimeStamp);
			var Nyear = datetime.getFullYear();
			var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
			var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
			var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
			var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
			var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
			result = Nyear + "-" + Nmonth + "-" + Ndate
		}
		return result;
	},
	RemoveCookie: function(cookieName) {
		var cookies = document.cookie.split(";"); //将所有cookie键值对通过分号分割为数组

		for (var i = 0; i < cookies.length; i++) {
			if (cookies[i].indexOf(" ") == 0) {
				cookies[i] = cookies[i].substring(1);
			}

			//比较每个cookie的名称，找到要删除的那个cookie键值对
			if (cookies[i].indexOf(cookieName) == 0) {
				var exp = new Date(); //获取客户端本地当前系统时间
				exp.setTime(exp.getTime() - 60 * 1000); //将exp设置为客户端本地时间1分钟以前，将exp赋值给cookie作为过期时间后，就表示该cookie已经过期了, 那么浏览器就会将其立刻删除掉

				document.cookie = cookies[i] + ";expires=" + exp.toUTCString(); //设置要删除的cookie的过期时间，即在该cookie的键值对后面再添加一个expires键值对，并将上面的exp赋给expires作为值(注意expires的值必须为UTC或者GMT时间，不能用本地时间），那么浏览器就会将该cookie立刻删除掉
				//注意document.cookie的用法很巧妙，在对其进行赋值的时候是设置单个cookie的信息，但是获取document.cookie的值的时候是返回所有cookie的信息

				break; //要删除的cookie已经在客户端被删除掉，跳出循环
			}
		}
	},
	/**
	 * @author Rui.Zhang
	 * @description 判断是否为银行卡号
	 * @param {String} str_cardNo 待校验的数据
	 * @returns {Boolean}, true:是银行卡号
	 **/
	isBankCard: function(str_cardNo) {
		str_cardNo = str_cardNo || String(this);
		if ("" == str_cardNo.trim() || undefined == str_cardNo) {
			return false;
		}
		var lastNum = str_cardNo.substr(str_cardNo.length - 1, 1); //取出最后一位（与luhm进行比较）

		var first15Num = str_cardNo.substr(0, str_cardNo.length - 1); //前15或18位
		var newArr = new Array();
		for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
			newArr.push(first15Num.substr(i, 1));
		}
		var arrJiShu = new Array(); //奇数位*2的积 <9
		var arrJiShu2 = new Array(); //奇数位*2的积 >9

		var arrOuShu = new Array(); //偶数位数组
		for (var j = 0; j < newArr.length; j++) {
			if ((j + 1) % 2 == 1) { //奇数位
				if (parseInt(newArr[j]) * 2 < 9)
					arrJiShu.push(parseInt(newArr[j]) * 2);
				else
					arrJiShu2.push(parseInt(newArr[j]) * 2);
			} else //偶数位
				arrOuShu.push(newArr[j]);
		}

		var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
		var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
		for (var h = 0; h < arrJiShu2.length; h++) {
			jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
			jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
		}

		var sumJiShu = 0; //奇数位*2 < 9 的数组之和
		var sumOuShu = 0; //偶数位数组之和
		var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
		var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
		var sumTotal = 0;
		for (var m = 0; m < arrJiShu.length; m++) {
			sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
		}

		for (var n = 0; n < arrOuShu.length; n++) {
			sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
		}

		for (var p = 0; p < jishu_child1.length; p++) {
			sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
			sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
		}
		//计算总和
		sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

		//计算Luhm值
		var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
		var luhm = 10 - k;

		if (lastNum == luhm) {
			return true;
		} else {
			return false;
		}
	},
	/**
	 * @author Rui.Zhang
	 * @description 判断是否为身份证号码
	 * @param {String} str_idCard 待校验的数据
	 * @param {String} [sex] 可选参数,传入时同时校验性别,不传则不校验性别,此值只可能 constant.WOMAN(0) 或者 constant.MAN(1)
	 * @returns {Boolean}, true:是身份证
	 **/
	isIdCard: function(str_idCard, sex) {
		str_idCard = str_idCard || String(this);
		var check = function() {
			var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
			var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
			var varArray = new Array();
			var lngProduct = 0;
			var intCheckDigit;
			var intStrLen = str_idCard.length;
			var idNumber = str_idCard;
			// initialize
			if ((intStrLen != 15) && (intStrLen != 18)) {
				return false;
			}
			// check and set value
			for (i = 0; i < intStrLen; i++) {
				varArray[i] = idNumber.charAt(i);
				if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
					return false;
				} else if (i < 17) {
					varArray[i] = varArray[i] * factorArr[i];
				}
			}

			if (intStrLen == 18) {
				//check date
				var date8 = idNumber.substring(6, 14);

				if (!/^[0-9]{8}$/.test(date8)) {
					return false;
				}
				var year, month, day;
				year = date8.substring(0, 4);
				month = date8.substring(4, 6);
				day = date8.substring(6, 8);
				var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
				if (year < 1700 || year > 2500) return false;
				if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
				if (month < 1 || month > 12) return false;
				if (day < 1 || day > iaMonthDays[month - 1]) return false;

				// calculate the sum of the products
				for (i = 0; i < 17; i++) {
					lngProduct = lngProduct + varArray[i];
				}
				// calculate the check digit
				intCheckDigit = parityBit[lngProduct % 11];
				// check last digit
				if (varArray[17] != intCheckDigit) {
					return false;
				}
			}
			//length is 15
			else {
				//check date
				var date6 = idNumber.substring(6, 12);

				if (!/^[0-9]{6}$/.test(date6)) {
					return false;
				}
				var month, day, year;
				year = date6.substring(0, 2);
				month = date6.substring(2, 4);
				day = date6.substring(4, 6);
				if (!/^\d{2}$/.test(year)) return false;
				if (month < 1 || month > 12) return false;
				if (day < 1 || day > 31) return false;
			}
			return true;
		}
		if (str_idCard && check(str_idCard)) {
			if (undefined != sex) {
				var sexStr = undefined,
					tmp = 0;
				if (15 == str_idCard.length) {
					tmp = str_idCard.substring(str_idCard.length - 1, str_idCard.length);
				} else if (18 == str_idCard.length) {
					tmp = str_idCard.substr(str_idCard.length - 2, 1);
				}
				if (0 == tmp % 2) {
					sexStr = 0;
				} else {
					sexStr = 1;
				}

				if (sex != sexStr) return false;
			}
			return true;
		}
		return false;
	},
	/**
	 * @author Rui.Zhang
	 * @description 判断变量是否为日期, 该函数已扩展到Mtils对象中
	 * @param {varName} varName  待判断数据类型的变量
	 * @returns {boolean}, true/false
	 **/
	isDate: function(varName) {
		return Object.prototype.toString.call(varName) === '[object Date]';
	},

	changeTile(title) {
		let oldtitle = 'MBA Helper';
		document.title = (title == '' || title == null) ? oldtitle : title;
	}
}

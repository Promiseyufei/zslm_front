<!-- 登录总部 -->
<template>
    	<div>
    		<div class="loginRouterCenter" v-show="computer">
    			<div class="loginPicture"><img src="../../../assets/img/login.png"></div>
				<el-card class="boxCard">
    				<el-menu :default-active="active" class="el-menu-demo" 
    					mode="horizontal" @select="handleSelect" v-model="active"
    					text-color="#333" active-text-color="#009fa0">
    					<el-menu-item index="1">账号登录</el-menu-item>
    					<el-menu-item index="2">短信登录</el-menu-item>
    				</el-menu>
    				<div class="phoneInput">
    					<el-input placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone" v-model="phoneNumber">
						</el-input>
    				</div>
    				<router-view/>
    				<div class="login">
    					<el-button type="primary" @click="loginTest">登录</el-button>
    				</div>
    				<div class="other">
    					<div><el-checkbox v-model="checked">自动登录</el-checkbox></div>
    					<div><span @click="resetPass">忘记密码</span> | <span class="register" @click="register">注册</span></div>
    				</div>
    				<div class="threeLogin" style="text-align: center;">
    					<div class="fastIn">快捷登录</div>
    					<div class="logonIn">
    						<div class="xinlang"></div>
    						<div class="diviLine"></div>
    						<div class="weixin" @click="thirdLogin"></div>
    					</div>
    				</div>
    			</el-card>
    		</div>
    		<div class="phoneLogin" v-show="phone">
    			<div class="Close">
    				<div class="close" @click="close"><img src="../../../assets/img/Close.png"></div>
    			</div>
    			<div class="MBA"><img src="../../../assets/img/logoGreen.png"></div>
    			<div class="loginText">登录</div>
    			<div class="userInform">
    				<div class="mobileCode"><el-input v-model="phoneNumber" placeholder="手机号"></el-input></div>
    				<div class="mobileNumber">
    					<el-input v-model="smsCode" placeholder="验证码"></el-input>
    					<el-button type="success" :disabled="disabled" @click="sendcode">{{btntxt}}</el-button>
    				</div>
    				<div class="mobileLogin"><el-button type="success" @click="loginTest">登录</el-button></div>
    			</div>
    		</div>
    	</div>
</template>

<script>
	export default {
		data() {
			return {
				smsCode:'',
				btntxt:"获取验证码",
		        disabled:false,
				computer:true,
				phone:false,
				active:'1',
				phoneNumber:'',
				checked:'',
				password:''
			};
		},
		watch: {
			phoneNumber(phone,oldPhone) {
				this.$store.commit('changeUserInfo', {name:'userPhone', val:phone});
			},
			smsCode(smscode, oldcode) {
				this.$store.commit('changeUserInfo', {name: 'smsCode', val: smscode});
			}
		},
		methods:{
			//获取验证码方法
			sendcode:function(){
            	if(this.$store.state.userInfo['userPhone'] == ''){
            		this.$message('手机号不能为空！');
                	return;
            	} else if(!(/^1[3|4|5|8][0-9]\d{8,11}$/.test(this.$store.state.userInfo['userPhone']))){
					this.$message('请输入正确的手机号！');
					return;
            	} else {
					this.sendSmsCode(this.$store.state.userInfo['userPhone']);
            	}
            	console.log(123)
        	},
            //组件自带——菜单当前ID(active)
			handleSelect(key, keyPath) {
				this.active = key;
				this.active == '1' ? this.$router.push('/front/Login/loginRoute/accountNumber') : this.$router.push('/front/Login/loginRoute/shortMessage');
				//存变量
				// sessionStorage.setItem("active",key);
		    },
		    //刷新登录不变
		    accountNumber:function() {
		    	let path = this.$route.matched[2].path;
	    		//当前输入的路由包括()中路由时，显示当前高亮
	    		if (path.indexOf('/Login/loginRoute/shortMessage') != -1) {
	    			this.active = '2';
	    		} else if(path.indexOf('/front/Login/loginRoute/accountNumber') != -1) {
		    		this.active = '1';
	    		} 
	    		// else if(path.indexOf('/front/firstMenuRouter/viewInformation') != -1) {
		    	// 	this.activeIndex = '3';
		    	// } else if(path.indexOf('/front/firstMenuRouter/searchCoach') != -1) {
		    	// 	this.activeIndex = '4';
		    	// }
		    	// if (sessionStorage.getItem("active")) {
		    	// 	//取变量
		    	// 	this.active=sessionStorage.getItem("active")
		    	// 	if (this.active==1) {
		    	// 		this.$router.push('/front/Login/loginRoute/accountNumber');
		    	// 	} else{
		    	// 		this.$router.push('/front/Login/loginRoute/shortMessage');
		    	// 	}
		    	// } else{
		    	// 	if (this.active==1) {
		    	// 		this.$router.push('/front/Login/loginRoute/accountNumber');
		    	// 	} else{
		    	// 		this.$router.push('/front/Login/loginRoute/shortMessage');
		    	// 	}
		    	// }
		    	
		    },
		    //跳转到重置密码页面
		    resetPass:function() {
		    	this.$router.push('/front/Login/resetPassword');
		    },
		    //跳转到注册页面
		    register:function() {
		    	this.$router.push('/front/Login/register');
		    },
		    //登录按钮
		    loginTest: function() {
		    	if (this.active==1) { //账号登录
		    		if(this.phoneNumber==''){
            			this.$message('手机号不能为空！');
	            	} else if(!(/^1[3|4|5|8][0-9]\d{8,11}$/.test(this.phoneNumber))){
	            		this.$message('请输入正确的手机号！');
	            	} else if(this.$store.state.userInfo['userPassword'] == ''){
	            		this.$message('请输入密码！');
	            	} else {
	            		this.login(this.returnParams(0));
	            	}
		    	} else if(this.active==2) { //短信登录
		    		if(this.phoneNumber==''){
            			this.$message('手机号不能为空！');
	            	} else if(!(/^1[3|4|5|8][0-9]\d{8,11}$/.test(this.phoneNumber))){
	            		this.$message('请输入正确的手机号！');
	            	} else if(this.$store.state.userInfo['smsCode'] == ''){
	            		this.$message('请输入验证码！');
	            	} else {
	            		this.login(this.returnParams(0));
	            	}
		    	}
		    },
			login(params) {
				this.post('/login/front/login', params).then((response) => {
					if(response.code == 0) {
						this.saveUserState('user', this.phoneNumber);
						this.saveUserState('userId', response.result.user_account_id);
						this.saveUserState('userName', response.result.user_name);
						this.saveUserState('userHead', response.result.head_portrait);
						this.message(true, response.msg, 'success');
						this.$router.push('/front/index');
					}
					else if(response.code == 1) this.message(true, response.msg, 'info');
					else if(response.code == 3) {
						this.confirm(() => {
							this.login(this.returnParams(1));
						}, () => {
							this.message(true, '取消成功', 'info');
						}, '是否同意自动注册?');
					}
				})
			},
			returnParams(agree) {
				return this.active == '1' ? {
					userPhone: this.phoneNumber,
					userPassword: this.$store.state.userInfo['userPassword'],
					type: 0,
					agree: agree
				} : {
					userPhone: this.phoneNumber,
					smsCode: this.$store.state.userInfo['smsCode'],
					type: 1,
					agree: agree
				}
			},
			thirdLogin() {
				this.fetch('/auth/weixin', {}).then((response) => {
					console.log(response);
				})
			},
			//不登录——跳到院校列表页
			close:function(){
				this.$router.push('/front/firstMenuRouter/selectCollege');
			}
			
		},
		mounted() {
			this.accountNumber();
			let w = document.documentElement.offsetWidth || document.body.offsetWidth;
			if(w < 992){ //手机端不显示一级菜单和右侧图标，右侧显示list图标
				this.phone = true;
				this.computer = false;
			}
		}
	}
</script>


<!-- 全局样式 -->
<style>
	.phoneLogin .el-button--success {
		background-color: #ffb957;
    	border-color: #ffb957;
	}
	.mobileLogin .el-button {
		width: 100%;
	}
	.mobileNumber .el-button {
		margin-left: 10px;
		padding:12px 15px;
	}
	.loginRouterCenter .el-menu-item {
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
	}
	.loginRouterCenter .el-menu--horizontal {
		margin: 37px 0 0 37px;
		width: 340px;
		display: flex;
		justify-content: space-between;
	}
	.loginRouterCenter .el-card__body {
		padding: 0;
	}
	.phoneInput .el-input__inner {
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
	}
	.boxCard .el-tabs__nav-scroll {
	    overflow: hidden;
	    display: flex;
	    justify-content: center;
	}
	.boxCard .el-menu-item a {
	    text-decoration: none;
	}
	.router-link-active {
	    text-decoration: none;
	}
	.boxCard .el-input__icon {
		color: #ffb957;
	}
	.boxCard .el-input {
		margin: 30px 0 0 37px;
	}
	.login .el-button--primary {
		margin: 30px 0 0 31px;
		width: 345px;
		height: 44px;
		background-color:  #ffb957;
		border-color:  #ffb957;
		font-size: 14px;
	}
	.login .el-button--primary:hover {
		background-color:  #009fa0;
		border-color:  #009fa0;
	}
	.mobileLogin .el-button:hover {
		background-color:  #009fa0;
		border-color:  #009fa0;
	}
</style>


<!-- 局部样式 -->
<style scoped>
	.phoneLogin {
		width: 100%;
	}
	.login {
		width: 345px;
	}
	.phoneInput {
		width: 340px;
	}
	.weixin {
		cursor: pointer;
		width: 21px;
		height: 19px;
		margin: 0 0 0 14px;
		background: url(../../../assets/img/weixin.png) no-repeat;
		background-size: 100% 100%;
	}
	.diviLine {
		width: 1px;
		height: 13px;
		margin-top: 3px;
		background-color: #c7c7c7;
	}
	.xinlang {
		cursor: pointer;
		width: 23px;
		height: 19px;
		margin: 0 9px 0 0;
		background: url(../../../assets/img/xinlang.png) no-repeat;
		background-size: 100% 100%;
	}
	.fastIn {
		margin-bottom: 15px;
		font-size: 14px;
	}
	.threeLogin {
		width: 412px;
		height: 100px;
		background-color: #fcfcfc;
		border-radius: 0px 0px 5px 5px;
		display: flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.logonIn {
		display: flex;
		justify-content:center;
	}
	.register {
		color: #009fa0;
	}
	.register:hover {
		color: #6e6e6e;
	}
	.other {
		width: 345px;
		display: flex;
		justify-content:space-between;
		margin: 10px 0 35px 31px;
		font-size: 14px;
		color: #6e6e6e;
		cursor: pointer;
	}
	.boxCard {
		height: 488px;
	}
	.loginPicture {
		width: 966px;
	}
	.loginRouterCenter {
		display: flex;
		justify-content:center;
		margin: 100px 0;
		overflow:hidden;
	}
	
	/** iPhone + ipad**/
	@media only screen and (min-width: 320px) and (max-width: 1024px) {
		.mobileCode,.mobileLogin {
			width: 90%;
			margin: 15px auto;
		}
		.mobileNumber {
			display: flex;
			width: 90%;
			margin: 0 auto;
		}
		.loginText {
			color: #333;
			font-size: 23px;
			letter-spacing:10px;
			margin: 20px 0 40px 10px;
		}
		.close {
			margin: 10px 10px 20px 0;
		}
		.close img{
			width: 30px;
		}
		.MBA {
			/*width:371px;*/
			/*margin: 0 auto;*/
		}
		.Close {
			width: 100%;
			text-align: right;
		}
		.userInform {
			width: 100%;
		}
		.phoneLogin {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items:center;
			justify-content:center;
		}
	}
</style>

<!-- 登录总部 -->
<template>
    	<div>
    		<div class="loginRouterCenter">
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
    						<div class="weixin"></div>
    					</div>
    				</div>
    			</el-card>
    		</div>
    	</div>
</template>

<script>
	export default {
		data() {
			return {
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
		},
		methods:{
            //组件自带——菜单当前ID(active)
			handleSelect(key, keyPath) {
				this.active = key;
				this.active == '1' ? this.$router.push('/front/Login/loginRoute/accountNumber') : this.$router.push('/front/Login/loginRoute/shortMessage');
		    },
		    //短信登录页面
		    accountNumber:function() {
		    	if (sessionStorage.getItem("active")) {
		    		this.active=sessionStorage.getItem("active")
		    		if (this.active==1) {
		    			this.$router.push('/front/Login/loginRoute/accountNumber');
		    		} else{
		    			this.$router.push('/front/Login/loginRoute/shortMessage');
		    		}
		    	} else{
		    		if (this.active==1) {
		    			this.$router.push('/front/Login/loginRoute/accountNumber');
		    		} else{
		    			this.$router.push('/front/Login/loginRoute/shortMessage');
		    		}
		    	}
		    	
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
						this.message(true, response.msg, 'success');
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
			}
		},
		mounted() {
		}
	}
</script>


<!-- 全局样式 -->
<style>
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
		background-color:  #000;
		border-color:  #000;
	}
</style>


<!-- 局部样式 -->
<style scoped>
	.login {
		width: 345px;
		/*margin: 0 auto;*/
	}
	.phoneInput {
		width: 340px;
		/*margin: 0 auto;*/
	}
	.weixin {
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
		/*width: 412px;*/
		height: 488px;
		/*margin-right: 100px;*/
	}
	.loginPicture {
		width: 966px;
		/*height: 543px;*/
		/*margin-left: 50px;*/
		/*background: url(../../../assets/img/login.png) no-repeat;*/
        /*background-size: 100% 100%;*/
	}
	.loginRouterCenter {
		/*width: 1903px;*/
		display: flex;
		justify-content:center;
		margin: 100px 0;
		overflow-x:hidden;
	}
</style>

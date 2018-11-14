<!-- 登录总部 -->
<template>
    	<div>
    		<div class="center">
    			<div class="loginPicture"></div>
    				<el-card class="box-card">
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
	    					<el-button type="primary" @click="login">登录</el-button>
	    				</div>
	    				<div class="other">
	    					<div><el-checkbox v-model="checked">自动登录</el-checkbox></div>
	    					<div><span>忘记密码</span> | <span class="register">注册</span></div>
	    				</div>
	    				<div style="text-align: center;">
	    					<div class="fastIn">快捷登录</div>
	    					<div class="logonIn">
	    						<i class="el-icon-search"></i>
	    						<div> | </div>
	    						<i class="el-icon-search"></i>
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
		methods:{
			// parentLisen(data) {    
                //data 是子组件传过来的值
            // },
			handleSelect(key, keyPath) {
		    	// console.log(keyPath);
		    	let active = key;
		    	if (active == 2) {	//到短信登录
					// this.parentLisen();
		    		this.$router.push({
		    			path:'/front/Login/loginRoute/shortMessage',
		    			name:'短信登录',
		    			params:{
		    				name:'用户手机号',
		    				dataObj:this.phoneNumber
		    			},
		    		});
		    	} else {	//到账号登录
		    		this.$router.push('/front/Login/loginRoute/accountNumber');
		    	}
		    },
		    //到短信登录
		    shortMessage:function() {
		    	// console.log(this.$route.params.phoneNumber)
		    	// this.$router.push({
		    	// 	path:'/front/Login/loginRoute/shortMessage',
		    	// 	name:'短信登录',
		    	// 	params:{
		    	// 		name:'用户手机号',
		    	// 		dataObj:this.phoneNumber
		    	// 	},
		    	// });
		    	// console.log(this.$route.params.phoneNumber)
		    },
		    //到账号登录页面
		    accountNumber:function() {
		    	this.$router.push('/front/Login/loginRoute/accountNumber');
                // console.log(this.$refs.demo.value)
		    },
		    //登录按钮
		    login: function() {
				// console.log(this.$refs.demo)
		    }
		},
		watch:{
			// active:function(val,oldVal) {
			// 	console.log(12)
			// }
		},
		mounted() {
			//默认显示账号登录
			this.accountNumber();
		}
	}
</script>


<!-- 全局样式 -->
<style>
	.phoneInput .el-input__inner {
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
	}
	.box-card .el-tabs__nav-scroll {
	    overflow: hidden;
	    display: flex;
	    justify-content: center;
	}
	.box-card .el-menu-item a {
	    text-decoration: none;
	}
	.router-link-active {
	    text-decoration: none;
	}
	.box-card .el-input__icon {
		color: #ffb957;
	}
	.box-card .el-input {
		margin: 30px 0 0;
	}
	.login .el-button--primary {
		margin-top: 110px;
		width: 372px;
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
	.fastIn {
		margin-bottom: 15px;
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
		display: flex;
		justify-content:space-between;
		margin: 10px 0 35px;
		font-size: 14px;
		color: #6e6e6e;
		cursor: pointer;
	}
	.box-card {
		width: 412px;
		height: 460px;
		/*margin-right: 100px;*/
	}
	.loginPicture {
		width: 966px;
		height: 543px;
		/*margin-left: 50px;*/
		background: url(../../../assets/img/login.png) no-repeat;
        background-size: 100% 100%;
	}
	.center {
		width: 1903px;
		display: flex;
		justify-content:center;
		margin: 100px 0;
	}
</style>

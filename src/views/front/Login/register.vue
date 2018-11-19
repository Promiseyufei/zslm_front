<!-- 注册页面 -->
<template>
    	<div>
    		<div class="center">
    			<div class="loginPicture"></div>
    				<el-card class="box-card">
	    				<el-menu :default-active="active" class="el-menu-demo" 
	    				mode="horizontal" @select="handleSelect" v-model="active"
	    				text-color="#333" active-text-color="#009fa0">
	    					<el-menu-item index="1">免费成为会员</el-menu-item>
	    				</el-menu>
	    				<div class="phoneInput">
	    					<el-input placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone" v-model="phoneNumber">
							</el-input>
	    				</div>
	    				<div class="registerCodeinput">
					      	<el-input placeholder="请输入验证码" 
						      prefix-icon="el-icon-message" v-model="testCode">
							</el-input>
							<el-button type="primary"  :disabled="disabled" @click="sendcode">
							    {{btntxt}}
							</el-button>
				      	</div>
	    				<div class="registerLogin">
	    					<el-button type="primary" @click="register">成为会员</el-button>
	    				</div>
	    				<div class="greeUser">
	    					<el-checkbox v-model="checked">同意用户协议</el-checkbox>
	    				</div>
	    				<div class="registerThreeLogin">
	    					<div class="registerFastIn">快捷账号登录</div>
	    					<div class="registerLogonIn">
	    						<div class="xinlang"></div>
	    						<div class="registerDiviLine">|</div>
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
				testCode:'',
				checked:'',
				btntxt:"获取验证码",
		        disabled:false,
		        time:0,
			};
		},
		methods:{
			handleSelect(key, keyPath) {
		    	let active = key;
		    	
		    },
		    //获取验证码方法
			sendcode:function(){
            	//手机号正则判断
            	if(this.phoneNumber==''){
            		this.$message('手机号不能为空！');
            	} else if(!(/^1[3|4|5|8][0-9]\d{8,11}$/.test(this.phoneNumber))){
            		this.$message('请输入正确的手机号！');
            	} else {
            		this.$message('验证码已发送，请注意查收~');
            		this.time=60;
	            	this.disabled=true;
	            	this.timer();
            	}
            	
        	},
        	//倒计时方法
        	timer:function () {
            	if (this.time > 0) {
                	this.time--;
                 	this.btntxt=this.time;
                 	setTimeout(this.timer, 800);
             	} else{
                	this.time=0;
                	this.btntxt="获取验证码";
                	this.disabled=false;
             }
        	},
		    
		    //注册按钮
		    register: function() {
				// console.log(this.$refs.demo)
				if(this.phoneNumber==''){
					this.$message('手机号不能为空！');
            		// this.message(true,'手机号不能为空！','warning');
                	return;
            	} else if(!(/^1[3|4|5|8][0-9]\d{8,11}$/.test(this.phoneNumber))){
            		this.$message('请输入正确的手机号！');
            		// this.message(true,'请输入正确的手机号！','warning');
            	} else if(this.testCode=='') {
            		this.$message('验证码不能为空！');
            		// this.message(true,'验证码不能为空！','warning');
            	}
		    }
		},
		watch:{
			// }
		},
		mounted() {
		}
	}
</script>


<!-- 全局样式 -->
<style>
	.center .el-card__body {
		padding: 0;
	}
	.registerCodeinput .el-button--primary {
		width: 108px;
		height: 44px;
		margin-top: 25px;
		background-color:  #ffb957;
		border-color:  #ffb957;
	}
	.registerCodeinput .el-input__inner {
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
		width: 219px;
	}
	.registerCodeinput .el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
		background-color:  #ffb957;
		border-color:  #ffb957;
	}
	.phoneInput .el-input__inner {
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
		/*margin-left: 37px;*/
	}
	.box-card .el-menu--horizontal {
		display: flex;
	    justify-content: center;
	    width: 340px;
	    margin: 37px auto 0;
	}
	.box-card .el-menu-item {
		font-family: MicrosoftYaHei-Bold;
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
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
	.registerLogin .el-button--primary {
		margin-top: 35px;
		width: 345px;
		height: 44px;
		background-color:  #ffb957;
		border-color:  #ffb957;
		font-size: 14px;
	}
	.registerLogin .el-button--primary:hover {
		background-color:  #000;
		border-color:  #000;
	}
</style>


<!-- 局部样式 -->
<style scoped>
	
	.phoneInput,.registerLogin {
		width: 340px;
		margin: 0 auto;
	}
	.registerCodeinput {
		width: 340px;
		margin: 0 auto;
		display: flex;
		justify-content:space-between;
	}
	.registerFastIn {
		margin-bottom: 15px;
	}
	.registerLogonIn div {
		width: 21px;
		height: 19px;
	}
	.registerLogonIn {
		display: flex;
	}
	.greeUser {
		display: flex;
		justify-content:space-between;
		width: 340px;
		margin: 25px auto 35px;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		color: #6e6e6e;
		cursor: pointer;
	}
	.box-card {
		width: 412px;
		height: 490px;
	}
	.weixin {
		width: 21px;
		height: 19px;
		background: url(../../../assets/img/weixin.png) no-repeat;
		background-size: 100% 100%;
	}
	.registerDiviLine {
		width: 1px;
		height: 10px;
		color: #c7c7c7;
	}
	.xinlang {
		width: 23px;
		height: 19px;
		margin: 0 9px 0 0;
		background: url(../../../assets/img/xinlang.png) no-repeat;
		background-size: 100% 100%;
	}
	.loginPicture {
		width: 966px;
		height: 543px;
		background: url(../../../assets/img/login.png) no-repeat;
        background-size: 100% 100%;
	}
	.center {
		width: 1903px;
		display: flex;
		justify-content:center;
		margin: 100px 0;
	}
	.registerThreeLogin {
		display: flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		width: 412px;
		height: 100px;
		font-size: 14px;
		background-color: #fcfcfc;
		border-radius: 0px 0px 5px 5px;
	}
</style>

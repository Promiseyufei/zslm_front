<!-- 账号登录 -->
<template>
    <div>
		<!-- <div class="phoneInput">
	    	<el-input placeholder="请输入您的账号" 
	    	prefix-icon="el-icon-mobile-phone" v-model="accountNumber">
			</el-input>
	    </div> -->
    	<div class="passwordInput">
      		<el-input type="password" id="password" placeholder="请输入密码" 
	      	prefix-icon="el-icon-message" v-model="password" ref="demo">
			</el-input>
	  		<i class="el-icon-view" @click="showOr"></i>
      </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				password:13,
			}
		},
		methods:{
			//将数据存到vuex中
			store:function() {
				this.$store.commit('setPassword', this.password);			
			},
			//密码是否可见
			showOr:function() {
				let showOr = document.getElementById("password")
				if (showOr.type=="password") {
					showOr.type = "text";
				} else{
					showOr.type = "password";
				}
			}
		},
		mounted() {
			this.store();
		}
	}
</script>


<!-- 全局样式 -->
<style>
	/*.phoneInput .el-input__inner {
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
	}*/
	.passwordInput .el-input {
		width: 372px;
	}
	.passwordInput .el-input__icon {
		color: #ffb957;
	}
	.passwordInput .el-input__inner {
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
	}
</style>


<!-- 局部样式 -->
<style scoped>
	.passwordInput {
		position: absolute;
	}
	.passwordInput i {
		position: relative;
		top: 5px;
		right: 23px;
		color: #ffb957;
		cursor: pointer;
	}
</style>

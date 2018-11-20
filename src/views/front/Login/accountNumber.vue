<!-- 账号登录 -->
<template>
    <div>
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
				password:'',
			}
		},
		watch: {
			password(pass, oldpass) {
				this.$store.commit('setPassword', pass);
			}
		},
		methods:{
			//密码是否可见
			showOr:function() {
				let showOr = document.getElementById("password")
				if (showOr.type=="password") {
					showOr.type = "text";
				} else{
					showOr.type = "password";
				}
			}
		}
	}
</script>


<!-- 全局样式 -->
<style>
	.passwordInput .el-input {
		width: 340px;
		margin-left: 37px;
	}
	.passwordInput .el-input__icon {
		color: #ffb957;
	}
	.passwordInput .el-input__inner {
		position: absolute;
		width: 340px;
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
	}
</style>


<!-- 局部样式 -->
<style scoped>
	.passwordInput {
		/*position: absolute;*/
	}
	.passwordInput i {
		height: 62px;
		position: relative;
		top: 30px;
		right: 40px;
		color: #ffb957;
		cursor: pointer;
	}
</style>

<!-- 账号登录 -->
<template>
    <div>
		<!-- <div class="phoneInput">
	    	<el-input placeholder="请输入您的账号" 
	    	prefix-icon="el-icon-mobile-phone" v-model="accountNumber">
			</el-input>
	    </div> -->
    	<div class="passwordInput">
      		<el-input placeholder="请输入密码" 
	      	prefix-icon="el-icon-message" v-model="password" ref="demo">
			</el-input>
	  		<i class="el-icon-view"></i>
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
			test:function() {
				// console.log(this.$refs.demo.value)
			}
		},
		mounted() {
			this.test()
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
	}
</style>

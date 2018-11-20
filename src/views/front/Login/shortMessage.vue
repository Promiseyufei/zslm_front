<!-- 短信登录 -->
<template>
    <div>
    	<div class="codeInput">
	      	<el-input placeholder="请输入验证码" 
		      prefix-icon="el-icon-message" v-model="smsCode">
			</el-input>
			<el-button  type="primary"  :disabled="disabled" @click="sendcode">
			    {{btntxt}}
			</el-button>
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
		        time:0,
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
        	},
		},
		watch: {
			smsCode(smscode, oldcode) {
				this.$store.commit('changeUserInfo', {name: 'smsCode', val: smscode});
			}
		},
	}
</script>


<!-- 全局样式 -->
<style>
	.codeInput .el-button--primary {
		width: 105px;
		height: 44px;
		position: relative;
		left: 270px;
    	bottom: 10px;
		background-color:  #ffb957;
		border-color:  #ffb957;
	}
	.codeInput .el-input__inner {
		width: 219px;
		position: absolute;
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
	}
	.codeInput .el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
		background-color:  #ffb957;
		border-color:  #ffb957;
	}
</style>


<!-- 局部样式 -->
<style scoped>
	.codeInput {
		width: 340px;
		/*display: flex;*/
		/*justify-content:space-between;*/
		/*margin-left: 37px;*/
	}
	
</style>

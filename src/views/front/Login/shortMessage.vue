<!-- 短信登录 -->
<template>
    <div>
    	<!-- <div class="phoneInput">
	    	<el-input placeholder="请输入手机号" 
	    	prefix-icon="el-icon-mobile-phone" v-model="phoneNumber">
			</el-input>
	    </div> -->
    	<div class="codeInput">
	      	<el-input placeholder="请输入验证码" 
		      prefix-icon="el-icon-message" v-model="testCode">
			</el-input>
			<el-button type="primary"  :disabled="disabled" @click="sendcode">
			    {{btntxt}}
			</el-button>
      	</div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:'',
				testCode:'',
				btntxt:"获取验证码",
		        disabled:false,
		        time:0,
			}
		},
		methods:{
			//子组件向父组件传参
			// chilCall:function() {
			// 	let data = this.testCode;
			// 	console.log(data);
   //              this.$emit('parentLisen', data);
   //          },
			//存储父路由传过来的参数
			getParams: function() {
				let routeParams = this.$route.params.dataObj;
				this.phoneNumber = routeParams;
				// console.log(this.phoneNumber)
				// console.log(123)
			},
			//获取验证码方法
			sendcode:function(){
				//调用父路由传参数方法
				this.getParams();
				// console.log(this.phoneNumber)
				// console.log(this.$route.params.dataObj)
            	//手机号正则判断
            	if(this.phoneNumber==''){
                	alert("手机号不能为空！");
                	return;
            	} if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phoneNumber))){
            		alert("请输入正确的手机号！");
            	} else {
            		alert("验证码已发送，请注意查收")
            	}
            	this.time=60;
            	this.disabled=true;
            	this.timer();
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
        	}
		},
		watch: {
			// '$route':'getParams'
		},
		mounted() {
			// this.chilCall
			// this.getParams()
		}
	}
</script>


<!-- 全局样式 -->
<style>
	.codeInput .el-button--primary {
		width: 105px;
		height: 44px;
		position: relative;
		left: 268px;
    	bottom: 40px;
		background-color:  #ffb957;
		border-color:  #ffb957;
	}
	.codeInput .el-input__inner {
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
		width: 250px;
	}
	.codeInput .el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
		background-color:  #ffb957;
		border-color:  #ffb957;
	}
	/*.phoneInput .el-input__inner {
		border: 0;
		border-bottom: solid 1px #e6e6e6;
		border-radius: 0;
	}*/
</style>


<!-- 局部样式 -->
<style scoped>
	.codeInput {
		position: absolute;
	}
	
</style>

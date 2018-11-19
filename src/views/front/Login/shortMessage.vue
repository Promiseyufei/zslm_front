<!-- 短信登录 -->
<template>
    <div>
    	<div class="codeInput">
	      	<el-input placeholder="请输入验证码" 
		      prefix-icon="el-icon-message" v-model="testCode">
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
				// phoneNumber:'',
				testCode:'',
				btntxt:"获取验证码",
		        disabled:false,
		        time:0,
			}
		},
		methods:{
			//将数据存到vuex中
			store:function() {
				this.$store.commit('setTestcode', this.testCode);			
			},
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
				// this.getParams();
				// console.log(this.phoneNumber)
				// console.log(this.$route.params.dataObj)
            	//手机号正则判断
            	if(this.$store.state.setPhoneNumber==''){
            		this.$message('手机号不能为空！');
                	// alert("手机号不能为空！");
                	return;
            	} else if(!(/^1[3|4|5|8][0-9]\d{8,11}$/.test(this.phoneNumber))){
            		this.$message('请输入正确的手机号！');
            		// alert("请输入正确的手机号！");
            	} else {
            		this.$message('验证码已发送，请注意查收');
            		// alert("验证码已发送，请注意查收");
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
        	}
		},
		watch: {
			// '$route':'getParams'
		},
		mounted() {
			this.store();
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

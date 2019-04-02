<!-- 密码重置 -->
<template>
  <div>
    <div class="bac">
      <div class="updataPass">
        <div class="header">账号安全</div>
        <el-form :model="resetPass" status-icon
        ref="resetPass" class="demo-ruleForm">
          <div class="content">
            <el-form-item prop="phoneNumber">
              <el-input v-model="resetPass.phoneNumber" placeholder="账号"></el-input>
            </el-form-item>
            <div class="codeNumber">
              <el-form-item prop="codeNumber">
                <el-input v-model="resetPass.codeNumber" placeholder="验证码"></el-input>
              </el-form-item>
              <el-button type="primary" @click="getCodenumber">{{btntxt}}</el-button>
            </div>
            <el-form-item prop="pass">
              <el-input type="password" v-model="resetPass.pass"
              placeholder="新密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input type="password" v-model="resetPass.checkPass"
              placeholder="再次输入" autocomplete="off"></el-input>
            </el-form-item>
            <div class="button">
              <el-button type="primary" @click="submission">确定</el-button>
              <!--<el-button @click="$router.push('/front/Login/loginRoute/accountNumber')">返回</el-button>-->
              <el-button @click="$router.go(-1)">返回</el-button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data(){
			return{
				//输入框
				resetPass: {
					phoneNumber:'',
					codeNumber:'',
					pass:'',
					checkPass:'',
				},
				//验证码
				btntxt:"获取验证码",
		        disabled:false,
		        time:0,
			}
		},
		methods:{
			//确定修改按钮
			submission:function(){
				if(this.resetPass.phoneNumber=='') {
            		this.$message('手机号不能为空！');
	            } else if(!(/^1[3|4|5|8][0-9]\d{8,11}$/.test(this.resetPass.phoneNumber))){
	            	this.$message('请输入正确的手机号！');
	            } else if(this.resetPass.codeNumber=='') {
            		this.$message('请输入验证码');
            	} else if(this.resetPass.pass=='') {
            		this.$message('请输入密码');
            	} else if(this.resetPass.checkPass=='') {
            		this.$message('请确认密码');
            	} else if (this.resetPass.checkPass!=this.resetPass.pass) {
            		this.$message('密码不一致！');
            	} else {
					this.confirm(() => {
						this.post('/login/front/resetUserPassWord', {
							userPhone: 		this.resetPass.phoneNumber,
							smsCode: 		this.resetPass.codeNumber,
							newPass: 		this.resetPass.pass,
							againNewPass: 	this.resetPass.checkPass
						}).then((response) => {
							if(response.code == 0) {
								this.message(true, '保存成功', 'success');
								this.$router.push('/front/Login/loginRoute/accountNumber');
							}
							else {
								this.message(true, response.msg, 'info');
							}
						});
					}, () => {
						this.message(true, '取消保存', 'info');
					}, '确定保存密码吗？');

            	}
			},

			//获取验证码方法
			getCodenumber:function(){
            	//手机号正则判断
            	if(this.resetPass.phoneNumber=='') {
            		this.$message('手机号不能为空！');
	            } else if(!(/^1[3|4|5|8][0-9]\d{8,11}$/.test(this.resetPass.phoneNumber))){
	            	this.$message('请输入正确的手机号！');
	            } else {
            		this.sendSmsCode(this.resetPass.phoneNumber);
            	}
        	},
		},
		created() {
			this.changeTile('专硕联盟-忘记密码')
		}
	}
</script>


<!-- 全局样式 -->
<style>
  .bac{
    background-color: #f5f5f5;
    padding: 100px 0px;
  }
	.updataPass .el-input__inner {
		background-color: #f5f5f5;
		font-size: 14px;
		color: #6e6e6e;
	}
	.content .el-button--primary {
		  height: 40px;
    	width: 50% !important;
    	background-color: #009fa0;
    	border-color: #009fa0;
      border-radius: 5px !important;
	}
	.button .el-button--primary[data-v-056c4480] {
		height: 36px;
		line-height: 13px;
	}
	.button .el-button+.el-button {
		width: 160px;
		height: 40px;
		line-height: 13px;
	}
	.content .el-input {
		width: 341px;
	}
	.codeNumber .el-input {
		width: 160px;
	}

  @media (max-width: 760px) {
    .codeNumber .el-input__inner{
      width: 90%;
    }
  }

</style>


<!-- 局部样式 -->
<style scoped>
	.codeNumber,.button {
		display: flex;
		justify-content:space-between;
	}
	.content {
		width: 341px;
		margin: 40px auto;
	}
	.header {
		background: #009fa0;
		color: #fff;
		text-align: center;
		height: 70px;
		line-height: 70px;
		font-size: 22px;
		/*#ffb957 黄色按钮*/
	}
	.updataPass {
		width: 955px;
		margin:0px auto;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
	}

  @media (max-width: 760px) {
    .updataPass{
      width: 90%;
    }

    .content{
      width: 100%;
      padding: 40px 10px;
      box-sizing: border-box;
      margin-top: 0px;
    }

    .content .el-input{
      width: 100%;
    }
  }

</style>

<template>
	<div>
		<el-container class="loginPage">
			<div class="behind">
				<div class="cover">
					<div class="comLogo">
						<img src="../../assets/img/shortlogo.png" alt="" style="display: block;">
					</div>

					<p>MBA Helper</p>
					<p>后台业务管理系统</p>
				</div>
				<el-container class="above">
					<el-form class="loginForm" :model="ruleForm" :rules="rules" ref="ruleForm">
						<el-form-item prop="name">
							<el-input placeholder="请输入用户名称" v-model="ruleForm.name" class="loginInput" type="text" prefix-icon="fa fa-user self-fa-lg"
							 adijos>
							</el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input placeholder="请输入登录密码" v-model="ruleForm.password" class="loginInput" type="password" prefix-icon="fa fa-lock self-fa-lg"></el-input>
						</el-form-item>
						<el-form-item prop="verification">
							<div class="logincode">
								<el-input placeholder="请输入验证码" v-model="ruleForm.verification" class="loginInput verification" type="text"
								 prefix-icon="fa fa-key self-fa-lg"></el-input>
								<img @click="change" :src="response" alt="aa" height="40">
							</div>
							<!-- <div class="verification"><img alt="" width="158" height="76"></div> -->
						</el-form-item>
						<el-form-item>
							<el-button class="loginBtn" @click="submitForm('ruleForm')">登录</el-button>
						</el-form-item>
					</el-form>
				</el-container>
			</div>
		</el-container>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				response: '',
				ruleForm: {
					name: '',
					password: '',
					verification: ''
				},
				UUID: '',
				rules: {
					name: [{
							required: true,
							message: '请输入用户名称',
							trigger: 'blur'
						},
						// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					password: [{
							required: true,
							message: '请输入登录密码',
							trigger: 'blur'
						},
						// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					verification: [{
							required: true,
							message: '请输入验证码',
							trigger: 'blur'
						},
						// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					]
				}
			};
		},
		methods: {

			change() {
				this.response = this.globals.excelUrl + '/login/admin/captcha/' + Math.random() + '?UUID=' + this.UUID;
			},
			submitForm(formName) {
				var that = this
				this.$refs[formName].validate((valid) => {
					if (valid) {

						// this.message(true,'submit!','success');
						this.post("/admin/login", {
							account: that.ruleForm.name,
							password: that.ruleForm.password,
							captcha: that.ruleForm.verification
						}).then(res => {
							if (res.code == 0) {
								that.message(true, '登录成功', 'success')
								that.saveUserState('admin_account', that.ruleForm.name)

								that.$router.push('/admin');
							} else {
								that.message(true, res.msg, 'error')
							}
						})
					} else {
						this.message(true, 'submit error', 'error');
						return false;
					}
				});
			},
			getUUID() {
				var that = this
				console.log('cccccccc');
				this.fetch('/admin/createuuid').then(res => {
					console.log('ddddd');
					that.UUID = res.result
					that.saveUserState('UUID', res.result)
					that.change();


				})
			},
		},
		mounted: function() {
			console.log("aaaaaaaaaa");
			var loginjudge = this.getUserStatePro('admin_account')
			console.log(loginjudge);
			if (loginjudge == null) {
				this.getUUID();
			}
			else
				this.$router.push('/admin');
		}
	}
</script>
<style>
	.logincode {
		display: flex !important;
		justify-content: space-between;
		align-items: center;
	}
</style>
<style scope>
	.loginPage {
		height: 768px;
		background: url("../../assets/img/loginBackground.jpg") no-repeat;
		background-size: 100% 100%;
	}

	.behind {
		position: relative;
		top: 14%;
		margin: 0 auto;
		height: 538px;
		/*70 vh   60 vh*/
		width: 461px;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0px 0px 6px #656565;
	}

	.cover {
		text-align: center;
		background: #2abb9c;
		width: 100%;
		height: 40%;
	}

	.above {
		position: absolute;
		left: 10%;
		top: 35%;
		margin: 0 auto;
		width: 80%;
		height: 55%;
		background: #fff;
		box-shadow: 2px 1px 10px 0px #999999;
		border-radius: 10px;

	}

	.loginForm {
		width: 80%;
		margin: 0 auto;
		margin-top: 40px;
	}

	.loginBtn {
		background: #2abb9c;
		color: #fff;
		width: 100%;
	}

	.loginInput {
		font-size: 15px;
	}

	.self-fa-lg {
		font-size: 1.33333333em;
		line-height: 1em;
		vertical-align: -15%;
	}

	.verification {
		margin-right: 10px;
	}


	p {
		margin: 0 auto;
		/* color: #fff; */
		font-weight: bold;
		font-size: 1.8em;
	}

	.comLogo {
		/* background: #fff; */
		margin-top: 20px;
		height: 80px;
		width: 170px;
		display: inline-block;
	}

	.comLogo img {
		width: 70%;
		margin: 0 auto;
	}
</style>

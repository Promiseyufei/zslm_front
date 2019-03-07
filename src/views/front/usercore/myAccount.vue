<template>
	<div>
		<!-- 账户信息 -->
		<div class="c-div div_v60iAm xiangqingye" v-loading="user_loading">
			<div class="c-div div_Vpd4yi biaoti">
				<div class="c-div div_gv5puJ">
					<h1 class="c-heading heading_LkNL2E">帐户信息</h1>
				</div>
				<div class="c-div div_ZlvBVf xian"></div>
			</div>
			<div class="row c-row row_nR81Ef">
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_0l18QF">
					<div class="c-div div_xRicHO">
						<h1 class="c-heading heading_m2C6Qu">昵称</h1>
						<input type="text" :disabled="userNameDis" v-model="userInfo.user_name" class="c-heading heading_m2C6Qu mingcheng input"
						 placeholder="用户名称">
						<h1 class="c-heading heading_m2C6Qu bianji" @click="updateUserName">{{ userNameText }}</h1>
					</div>
					<div class="c-div div_xRicHO">
						<h1 class="c-heading heading_m2C6Qu">注册手机号</h1>
						<h1 type="text" class="c-heading heading_m2C6Qu mingcheng input">{{ userInfo.phone }}</h1>
						<h1 class="c-heading heading_m2C6Qu bianji"></h1>
					</div>
					<div class="c-div div_xRicHO">
						<h1 class="c-heading heading_m2C6Qu">注册时间</h1>
						<h1 class="c-heading heading_m2C6Qu mingcheng">{{ userInfo.create_time }}</h1>
						<h1 class="c-heading heading_m2C6Qu bianji"></h1>
					</div>
					<a class="btn c-button button_LsM2yn123 quguan quxiao mima" type="button" @click="$router.push('/front/Login/resetPassword')">修改密码</a>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_wODSnC">
					<div class="c-div div_c1UVgP" style="">
						<el-upload class="c-inlineblock c-imageblock imageblock_JtO0xa yuan shezhi" style="border: 1px dashed #d9d9d9;"
						 :auto-upload="false" action="" :show-file-list="false" :on-change="changeCoverMapUpload" :multiple="false">
							<img v-if="userHeadUrl" :src="userHeadUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
						<h1 class="c-heading heading_m2C6Qu bianji touxiang" @click="updateUserHead">{{ updateUserHeadText }}</h1>
					</div>
				</div>
			</div>
		</div>

		<!-- 会员信息 -->
		<div class="c-div div_v60iAm xiangqingye" v-loading="info_loading">
			<div class="c-div div_Vpd4yi biaoti">
				<div class="c-div div_gv5puJ">
					<h1 class="c-heading heading_LkNL2E">会员信息</h1>
				</div>
				<div class="c-div div_ZlvBVf xian"></div>
			</div>
			<div class="c-div div_xRicHO">
				<h1 class="c-heading heading_m2C6Qu huiyuan mingcheng">姓名</h1>
				<input type="text" class="c-heading heading_m2C6Qu huiyuan mingcheng input" style="padding-bottom: 14px;" :disabled="realNameDis"
				 v-model="userInfo.real_name" placeholder="用户名称">
				<h1 class="c-heading heading_m2C6Qu bianji huiyuan" @click="() => {realNameDis = false;}">修改</h1>
				<h1 class="c-heading heading_m2C6Qu huiyuan mingcheng">仅自己可见</h1>
			</div>
			<div class="c-div div_xRicHO biaodan">
				<h1 class="c-heading heading_m2C6Qu huiyuan mingcheng">性别</h1>
				<div class="row c-row row_myRz0h df123">
					<el-radio v-model="userInfo.sex" :label=0>男</el-radio>
					<el-radio v-model="userInfo.sex" :label=1>女</el-radio>
				</div>
			</div>
			<div class="c-div div_xRicHO biaodan">
				<h1 class="c-heading heading_m2C6Qu huiyuan mingcheng">常住地</h1>
				<el-cascader :props="props" :options="provinces" v-model="userInfo.address" @change="handleChange"></el-cascader>
			</div>
			<div class="c-div div_xRicHO biaodan">
				<h1 class="c-heading heading_m2C6Qu huiyuan mingcheng">最高学历</h1>
				<el-select placeholder="请选择" v-model="userInfo.schooling_id">
					<el-option v-for="item in dictionaries.education" :key="item.id" :label="item.name" :value="item.id"></el-option>
				</el-select>
			</div>
			<div class="c-div div_xRicHO biaodan major">
				<h1 class="c-heading heading_m2C6Qu huiyuan mingcheng">毕业院校</h1>
				<el-input class="c-input select_1BZvOz" v-model="userInfo.graduate_school" placeholder="请输入内容"></el-input>
			</div>
			<div class="c-div div_xRicHO biaodan">
				<h1 class="c-heading heading_m2C6Qu huiyuan mingcheng">所属行业</h1>
				<el-select v-model="userInfo.industry" placeholder="请选择" class="c-select select_1BZvOz kuan">
					<el-option v-for="item in dictionaries.industry" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</div>
			<div class="c-div div_xRicHO biaodan">
				<h1 class="c-heading heading_m2C6Qu huiyuan mingcheng">工作年限</h1>
				<el-select v-model="userInfo.worked_year" placeholder="请选择" class="c-select select_1BZvOz kuan">
					<el-option v-for="item in dictionaries.workYears" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</div>
			<a class="btn c-button button_LsM2yn123 quguan quxiao mima baocun" type="button" @click="updateUserInfo">保 存</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userHeadUrl: '',
				userHeadUrlFile: {},
				userNameText: '编辑昵称',
				updateUserHeadText: '修改头像',
				userNameDis: true,
				realNameDis: true,
				imageUrl: 'http://qty83k.creatby.com/materials/2771/origin/dfcbeb92f5c5e039d67f280a7bd3b330_origin.png',
				radio: '1',
				input: '',
				value: '',
				userInfo: {},
				optionsTpw: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				selectedOptions: [],
				dictionaries: {},
				props: {
					value: 'id',
					label: 'name',
					children: 'citys',
				},
				options: [{
						value: 1,
						label: '河南',
						children: [{
								value: 5,
								label: '新乡'
							},
							{
								value: 6,
								label: '鹤壁'
							}
						]
					},
					{
						value: 2,
						label: '山东',
						children: [{
								value: 7,
								label: '新乡'
							},
							{
								value: 8,
								label: '鹤壁'
							}
						]
					}
				],
				provinces: [],
				user_loading: false,
				info_loading: false,

			}
		},
		methods: {
			changeCoverMapUpload(file, fileList) {
				if (this.beforeAvatarUpload(file)) {
					// console.log(file.url);
					this.userHeadUrl = file.url;
					this.userHeadUrlFile = file.raw;
					this.updateUserHeadText = '确认上传';
				}
			},
			//上传图片判断
			beforeAvatarUpload(file) {
				const isJPG = file.raw.type === 'image/jpeg' || file.raw.type === 'image/png';
				const isLt2M = file.raw.size / 1024 / 1024 < 4;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 4MB!');
				}
				return isJPG && isLt2M;
			},
			//上传用户头像
			updateUserHead() {
				if (this.updateUserHeadText == '确认上传' && JSON.stringify(this.userHeadUrlFile) != '{}' && this.userHeadUrlFile.size >
					0) {
					let _this = this;
					let formdata = new FormData();
					formdata.append('userHeadImg', this.userHeadUrlFile);
					formdata.append('phone', this.userInfo.phone)
					formdata.append('type', 1)
					this.user_loading = true;
					this.post('/front/usercore/changeName', formdata, this.globals.config).then((response) => {
						if (response.code == 0) {
							this.message(true, '更改头像成功!', 'success')
							// console.log(response);
						} else
							this.message(true, '出了一点小问题，更改头像失败。', 'info');
						this.user_loading = false;
						this.updateUserHeadText = '修改头像';
					})
				} else
					this.message(true, '请先选择上传的头像', 'info');
			},
			//修改用户昵称
			updateUserName() {
				this.userNameDis = !this.userNameDis;
				if (this.userNameDis == false) this.userNameText = '确认修改';
				if (this.userNameDis == true && this.userNameText == '确认修改') {
					let _this = this;
					this.user_loading = true;
					this.post('/front/usercore/changeName', {
						phone: _this.userInfo.phone,
						type: 0,
						newName: _this.userInfo.user_name
					}).then((response) => {
						if (response.code == 0) {
							this.message(true, '修改成功', 'success');
						} else
							this.message(true, response.msg, 'info');
						this.user_loading = false;
						this.userNameDis = true;
						this.userNameText = '编辑昵称';
					})
				}
				// if(this)


			},
			updateUserInfo() {
				let addressText = '';
				if (this.userInfo.real_name == '') {
					this.message(true, '姓名不能为空', 'info');
					return;
				}
				if (this.userInfo.address.length != 0 || this.userInfo.address !== undefined) {
					addressText = this.userInfo.address.join(',');
				}
				let formdata = new FormData();
				formdata.append('phone', this.userInfo.phone);
				formdata.append('userRealName', this.userInfo.real_name);
				formdata.append('userSex', this.userInfo.sex);
				formdata.append('userAddress', addressText);
				formdata.append('userEducation', this.userInfo.schooling_id);
				formdata.append('userGraduation', this.userInfo.graduate_school);
				var industry_b = this.userInfo.industry == '' ? 0 : this.userInfo.industry
				formdata.append('userInIndustry', industry_b);
				formdata.append('userWorkYears', this.userInfo.worked_year);
				this.info_loading = true;
				this.post('front/usercore/changeUserInfo', formdata)
					.then((response) => {
						if (response.code == 0)
							this.message(true, '修改成功', 'success');
						else
							this.message(true, response.msg, 'info');

						this.info_loading = false;
					})

			},
			handleChange(value) {},
			getUserAccounts() {
				let phone = this.getUserState('user');
				// let phone = '15837587256';
				let that = this;
				if (phone) {
					this.info_loading = true;
					this.user_loading = true;
					this.fetch('/front/usercore/getUserAccountInfo', {
						phone: phone
					}).then((response) => {
						if (response.code == 0) {
							if (response.result.address != "") {
								response.result.address.forEach((item, index) => {
									response.result.address[index] = parseInt(item);
								});
							} else {
								response.result.address = [];
								response.result.address[0] = 0;
								response.result.address[1] = 0;
							}
							that.userHeadUrl = response.result.head_portrait;
							response.result.industry = response.result.industry == 0 ? '' : response.result.industry
							that.userInfo = response.result;

						} else if(response.code == 3){
						  that.message(true , response.msg , 'error');
              this.$router.push('/front/Login/loginRoute/accountNumber')
            }else
							that.message(true, "修改成功", 'success');

						that.info_loading = false;
						that.user_loading = false;
					})

				} else {
					this.message(true, '您的登录状态已经过期，请重新登录', 'info');
					// this.$router.push('/front/Login/loginRoute/accountNumber');
				}
			}

		},
		mounted() {
			if (!this.getUserState('user')) {
				this.$router.push('/front/Login/loginRoute/accountNumber')
			}
			this.getUserAccounts();
			this.fetch('/front/usercore/getFrontProvince').then((response) => {
				if (response.code == 0)
					this.provinces = response.result[0];
				else
					this.provinces = this.options;
			});
			this.fetch('/front/usercore/getIndustryList').then((response) => {
				if (response.code == 0) {
					this.dictionaries = response.result;
				} else this.message(true, '请尝试刷新', 'info');
			})

		}
	}
</script>

<style scoped>
	/*
    账户信息
*/
	.input {
		outline: none;
		background: transparent;
		border: none;
		outline: medium;
	}

	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 98px;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		line-height: 115px;
		text-align: center;
	}


	h1 {
		font-size: 36px;
		min-width: 10px;
		min-height: 10px;
	}

	.div_v60iAm.xiangqingye {
		padding: 0px 25px 25px;
		margin-bottom: 20px;
		padding-top: 25px;
	}

	.div_v60iAm {
		background-color: rgb(255, 255, 255);
		border-radius: 5px;
		border-style: none;
		padding-left: 30px;
		padding-right: 30px;
		transform: rotate(0deg) scale(1) translate(0%, 0%);
		transition: All 0.3s ease;
		-ms-transform: rotate(0deg) scale(1) translate(0%, 0%);
		-o-transform: rotate(0deg) scale(1) translate(0%, 0%);
		-moz-transform: rotate(0deg) scale(1) translate(0%, 0%);
		-webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
		-ms-transition: All 0.3s ease;
		-o-transition: All 0.3s ease;
		-moz-transition: All 0.3s ease;
		-webkit-transition: All 0.3s ease;
	}

	@media (max-width: 767px) {
		.div_v60iAm {
			padding-left: 10px;
			padding-right: 10px;
		}
	}

	@media (max-width: 767px) {
		.div_v60iAm.xiangqingye {
			padding-left: 10px;
			padding-right: 10px;
		}
	}

	.div_Vpd4yi.biaoti {
		display: block;
	}

	.div_Vpd4yi {
		min-height: auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin-bottom: 30px;
	}

	.div_gv5puJ {
		min-height: auto;
	}

	.heading_LkNL2E {
		color: #009fa0;
		font-size: 18px;
		font-weight: bold;
		margin-top: 0px;
		margin-bottom: 15px;
	}

	.div_ZlvBVf {
		width: 21px;
		height: 4px;
		min-height: auto;
		background-color: rgba(210, 210, 210, 1);
	}

	.div_ZlvBVf.xian {
		height: 1px;
		width: 100%;
		background-color: rgba(239, 239, 239, 1);
	}


	.row_nR81Ef {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	@media (max-width: 767px) {
		.row_nR81Ef {
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
		}
	}

	.c-row {
		margin-left: 0;
		margin-right: 0;
		padding-right: 0;
		padding-left: 0;
	}

	.c-row {
		word-spacing: -4px;
	}

	.column_0l18QF {
		padding-left: 0px;
		width: auto;
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-ms-flex-negative: 1;
		flex-shrink: 1;
		-ms-flex-preferred-size: 0%;
		flex-basis: 0%;
	}

	@media (max-width: 767px) {
		.column_0l18QF {
			text-align: left;
		}
	}

	.c-column {
		word-spacing: normal;
	}

	@media (min-width: 1200px) {
		.col-lg-6 {
			width: 50%;
		}
	}

	@media (min-width: 1200px) {

		.col-lg-1,
		.col-lg-2,
		.col-lg-3,
		.col-lg-4,
		.col-lg-5,
		.col-lg-6,
		.col-lg-7,
		.col-lg-8,
		.col-lg-9,
		.col-lg-10,
		.col-lg-11,
		.col-lg-12 {
			float: left;
		}
	}

	@media (min-width: 992px) {
		.col-md-6 {
			width: 50%;
		}
	}

	@media (min-width: 992px) {

		.col-md-1,
		.col-md-2,
		.col-md-3,
		.col-md-4,
		.col-md-5,
		.col-md-6,
		.col-md-7,
		.col-md-8,
		.col-md-9,
		.col-md-10,
		.col-md-11,
		.col-md-12 {
			float: left;
		}
	}

	@media (min-width: 768px) {
		.col-sm-6 {
			width: 50%;
		}
	}

	@media (min-width: 768px) {

		.col-sm-1,
		.col-sm-2,
		.col-sm-3,
		.col-sm-4,
		.col-sm-5,
		.col-sm-6,
		.col-sm-7,
		.col-sm-8,
		.col-sm-9,
		.col-sm-10,
		.col-sm-11,
		.col-sm-12 {
			float: left;
		}
	}

	.col-xs-12 {
		width: 100%;
	}

	.col-xs-1,
	.col-xs-2,
	.col-xs-3,
	.col-xs-4,
	.col-xs-5,
	.col-xs-6,
	.col-xs-7,
	.col-xs-8,
	.col-xs-9,
	.col-xs-10,
	.col-xs-11,
	.col-xs-12 {
		float: left;
	}

	.col-xs-1,
	.col-sm-1,
	.col-md-1,
	.col-lg-1,
	.col-xs-2,
	.col-sm-2,
	.col-md-2,
	.col-lg-2,
	.col-xs-3,
	.col-sm-3,
	.col-md-3,
	.col-lg-3,
	.col-xs-4,
	.col-sm-4,
	.col-md-4,
	.col-lg-4,
	.col-xs-5,
	.col-sm-5,
	.col-md-5,
	.col-lg-5,
	.col-xs-6,
	.col-sm-6,
	.col-md-6,
	.col-lg-6,
	.col-xs-7,
	.col-sm-7,
	.col-md-7,
	.col-lg-7,
	.col-xs-8,
	.col-sm-8,
	.col-md-8,
	.col-lg-8,
	.col-xs-9,
	.col-sm-9,
	.col-md-9,
	.col-lg-9,
	.col-xs-10,
	.col-sm-10,
	.col-md-10,
	.col-lg-10,
	.col-xs-11,
	.col-sm-11,
	.col-md-11,
	.col-lg-11,
	.col-xs-12,
	.col-sm-12,
	.col-md-12,
	.col-lg-12 {
		position: relative;
		min-height: 1px;
		padding-right: 15px;
		padding-left: 15px;
	}

	.div_xRicHO {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		min-height: auto;
		margin-bottom: 19px;
	}

	.heading_m2C6Qu {
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: rgb(49, 49, 49);
		margin-top: 0px;
		margin-bottom: 0px;
		padding-bottom: 14px;
		border-bottom: 1px solid rgb(239, 239, 239);
		width: 110px;
	}

	.heading_m2C6Qu.mingcheng {
		width: 160px;
	}

	@media (max-width: 767px) {
		.heading_m2C6Qu.mingcheng {
			width: 100px;
		}
	}

	.heading_m2C6Qu.bianji {
		cursor: pointer;
		width: 60px;
		color: rgb(255, 185, 87);
		text-align: center;
	}


	.button_LsM2yn123.quguan.quxiao.mima {
		margin-top: 49px;
		padding: 9px 20px;
		padding-bottom: 9px;
	}

	.button_LsM2yn123.quguan {
		margin-top: 5px;
		border-radius: 5px;
		color: rgb(191, 191, 191);
		background-color: transparent;
		border-color: rgb(220, 220, 220);
		font-weight: bold;
	}

	.button_LsM2yn123.quguan:hover {
		background-color: rgb(255, 185, 87);
		color: #ffffff;
	}

	.c-button {
		background-color: #000000;
		color: #FFFFFF;
	}

	.btn {
		display: inline-block;
		padding: 6px 12px;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.42857143;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-image: none;
		border: 1px solid transparent;
		border-radius: 4px;
	}

	@media (max-width: 767px) {
		.button_LsM2yn123.quguan.quxiao.mima {
			margin-top: 19px;
		}
	}


	.column_wODSnC {
		text-align: right;
		width: auto;
	}

	@media (max-width: 767px) {
		.column_wODSnC {
			width: 100%;
			-webkit-box-ordinal-group: 0;
			-ms-flex-order: -1;
			order: -1;
			margin-bottom: 34px;
		}
	}

	.div_c1UVgP {
		margin-left: auto;
		margin-right: 0px;
		text-align: center;
		width: auto;
	}

	.imageblock_JtO0xa.yuan.shezhi {
		position: static;
	}

	.imageblock_JtO0xa.yuan {
		border-radius: 70px;
	}

	.imageblock_JtO0xa {
		border-radius: 5px;
		border-color: rgba(255, 255, 255, 0.1);
		border-width: 5px;
		background-color: rgb(255, 255, 255);
		border-style: none;
		margin-top: auto;
		margin-bottom: auto;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: 0px;
		position: absolute;
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
	}

	.c-imageblock {
		width: 100px;
		height: 100px;
	}


	.heading_m2C6Qu.bianji.touxiang {
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 0px;
		border-style: none;
		margin-top: 17px;
	}




	/*
    会员信息
*/
	.heading_m2C6Qu.huiyuan.mingcheng {
		color: rgb(187, 187, 187);
		width: 110px;
		padding-bottom: 0px;
	}

	@media (max-width: 767px) {
		.heading_m2C6Qu.huiyuan.mingcheng {
			width: 90px;
			font-size: 12px;
		}
	}

	.heading_m2C6Qu.huiyuan {
		border-style: none;
		width: 180px;
	}

	.heading_m2C6Qu.bianji.huiyuan {
		width: auto;
		margin-right: 10px;
	}


	.div_xRicHO.biaodan {
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.row_myRz0h {
		height: auto;
		min-height: auto;
		/* width: 110px; */
	}

	@media (max-width: 767px) {
		.row_myRz0h.df123 {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
		}
	}


	.select_1BZvOz {
		/* width: 200px; */
		height: 40px;
		background-color: rgb(245, 245, 245);
		border-radius: 5px;
		border-style: none;
		margin-bottom: 0px;
	}

	.c-input,
	.c-select {
		display: block;
		/* width: 100%; */
		height: 38px;
		padding: 8px 12px 8px 0px;
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #555;
		vertical-align: middle;
		background-color: #fff;
		/* border: 1px solid #ccc; */
	}

	.el-input {
		width: auto !important;
	}


	.select_1BZvOz.kuan {
		width: 370px;
	}


	.button_LsM2yn123.quguan.quxiao.mima.baocun {
		background-color: rgb(0, 159, 160);
		color: rgb(255, 255, 255);
		border-bottom-style: none;
		border-top-style: none;
		border-right-style: none;
		border-left-style: none;
	}

  @media (max-width: 767px) {
    .select_1BZvOz {
      width: 100%;
    }

    .select_1BZvOz.kuan {
      width: 240px;
    }
  }
</style>

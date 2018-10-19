<template >
		<div>
			<div class="operateBox">
				<!-- 中间内容 -->
				<div>
					<el-breadcrumb separator="/">
						<el-breadcrumb-item>运行管理</el-breadcrumb-item>
						<el-breadcrumb-item class="selectedNavPublic">频道banner</el-breadcrumb-item>
					</el-breadcrumb>
					<!-- 选项卡 -->
					<operateNav :Banner="banner" :radio2="radio2" @showbox="toshow" :i="i"></operateNav>
					
					<div class="operateUpfiles operateHeader">
						<p>当前操作页面：<span>{{this.radio2}}</span></p>
						<el-button type="info" plain @click.native="operateUpdate"><i class="fa fa-refresh fa-fw"></i>&nbsp;刷新</el-button>
					</div>
					<div v-loading="loading"
						element-loading-text="拼命加载中"
						element-loading-spinner="el-icon-loading">
						<!-- 上传banner -->
						<div class="operateUpfiles operateUp">
							
							<div class="operateUpfilesLeft">
								<div><i class="fa fa-cloud-upload fa-fw FA-3X"></i>&nbsp;上传banner</div>
							</div>
							<div class="operateUpfilesRight">
								<div>
									<div>
										<el-upload class="upload-demo" action='' :auto-upload="false" :on-change="changeUpload" :multiple="false" :show-file-list="false">
											<el-button size="small" type="primary" class="operateFloat">点击上传</el-button>
											<div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
											<span slot="tip" class="el-upload__tip">当前以选择：{{ this.file.name }}</span>
										</el-upload>
									</div>
									<div class="operateUpfilesRightImg">
										<img :src="this.initialImgUrl" alt="预览图">
									</div>
								</div>
								<!-- 提交表单 -->
								<div>
									<el-form ref="ruleForm" :model="ruleForm" label-width="80px">
										<el-form-item label="图片名称">
											<el-input v-model="ruleForm.name" placeholder="输入图片名称"></el-input>
										</el-form-item>
										<el-form-item label="图片描述">
											<el-input v-model="ruleForm.message" placeholder="输入图片描述"></el-input>
										</el-form-item>
										<el-form-item label="图片URL">
											<el-input v-model="ruleForm.url" placeholder="输入图片URL"></el-input>
										</el-form-item>
									</el-form>
									<el-button type="primary" key="shanchuan" @click.native="submitForm" size="medium">上传</el-button>
								</div>
							</div>
						</div>
						<!-- 当前banner -->
						<div class="operateUpfiles operateDown">
							<div class="operateUpfilesLeft">
								<div><i class="fa fa-list-alt fa-fw FA-3X"></i>&nbsp;当前banner</div>
							</div>
							<div class="operateUpfilesRight2">
								<div class="operateUpfilesRight2Nav">
									<!-- <span>当前展示的banner</span> -->
									<el-button type="info" plain @click="operateDelete" size="small"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
								</div>
								<!-- 表格 -->
								<OperateTable :tableData3 = "tableData3" :listTable="listTable" @setInfoRelation="setInfoRelation" @del="delBanner"></OperateTable>
								<!-- 完成按钮 -->
								<div class="operateFinalUp">
									<el-button type="primary">完成</el-button>
								</div>

							</div> 
						</div>
					</div>
				</div>
			</div>
			
		</div>
</template>

<script>
export default {
		components: {
		},
		data() {
			return {
					loading: false,
					banner: [],
					radio2: "",
					src: "",
					initialImgUrl: 'http://img.hb.aicdn.com/cf629e62573f99793bf9c5621ecb5545534642ac1215-3wa44w_fw658',
					file: {},
					ruleForm: {
						name: '',
						message: '',
						url: ''
					},
					i: 0,
					TableValue: 0,
					listTable: [
						{
							prop: 'img',
							lable: '图片名称',
							width: "250px"
						},
						{
							prop: "show_weight",
							lable: "展示权重",
							width: "80px"
						},
						{
							prop: "re_alt",
							lable: "图片描述",
							width: "210px"
						},
						{
							prop: "re_url",
							lable: "图片地址",
							width: "279px"
						},
						{
							prop: "create_time",
							lable: "上传时间",
							width: "210px"
						}
					],
					// 表格默认数据
					tableData3: []
				}
		},
		methods:{
				//获取图片file，并图片预览
				changeUpload: function(file,fileList) {
					console.log(file);
					if(this.beforeAvatarUpload(file)) {
							this.initialImgUrl = file.url;
							this.file = file.raw;
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

				// 清空所有banner
				operateDelete: function() {
					var table = this.tableData3;
					var arrayTableId = [];
					table.forEach((item) => {
						arrayTableId.push(item.id);
					});
					if(arrayTableId.length < 1) {
							this.message(true, '没有要清空的数据');
							return;
					}
					this.confirm(() => {
							this.post('/admin/operate/deleteBannerAd', {
									btId: arrayTableId
							}).then((response) => {
									if(response.code == 0) {
											this.tableData3 = [];
											this.message(true, response.msg, 'success');
									}
									else {
											this.message(true, response.msg, 'error');
									}
							})
					}, () => {
							this.message(true, '已取消修改', 'info');
					})
				},

				//上传
				submitForm: function (formName) {
					var self = this;
					var urlReg = new RegExp("^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$");

					if(!(this.ruleForm.name.indexOf('.jpg') || this.ruleForm.name.indexOf('.png'))) this.message(true, '图片名称不能包含.jpg或.png', 'warnning');
					else if(!urlReg.test(this.ruleForm.url.toString())) this.message(true, 'Banner跳转跳转网址不符合路由规范', 'warnning');
					else if(JSON.stringify(this.file) == "{}") {
						this.message(true, '您还没有选择上传的图片', 'warnning');
						return false;
					}
					else {
						var formdata = new FormData();
						formdata.append('img', this.file);
						formdata.append('imgName', this.ruleForm.name);
						formdata.append('imgAlt', this.ruleForm.message);
						formdata.append('reUrl', this.ruleForm.url.toString());
						formdata.append('urlId', this.i);

						let config = {
							headers: {
								'Content-Type': 'multipart/form-data'
							}
						}

						this.post('/admin/operate/createBannerAd', formdata, config).then((response) => {
								if(response.code == 0) {
									this.operateUpdate();
									this.message(true, response.msg, 'success');
								}
								else this.message(true, response.msg, 'error');
						})
					}
				},

				// 刷新页面，重新加载页面数据
				operateUpdate: function() {
					this.getIndexBanner();
					this.initialImgUrl = 'http://img.hb.aicdn.com/cf629e62573f99793bf9c5621ecb5545534642ac1215-3wa44w_fw658';
					this.ruleForm.name = "";
					this.ruleForm.message = "";
					this.ruleForm.url = "";
				},

				// 动态更新资讯类型id
				toshow: function (i) {
					this.i = i;
					for(var i=0;i<this.banner.length;i++) {
						if(this.banner[i].id == this.i) {
							this.radio2 = this.banner[i].name;
							break;
						}
					}
					
					this.getIndexBanner();
				},
				setInfoRelation: function(id, weight, val, index) {
					this.confirm(() => {
						this.post('/admin/operate/setBtWeight', {
							bannerAdId: id,
							weight:weight
						}).then((response) => {
							response = response.data;
							(response.code == 0) ? this.message(true, response.msg, 'success') : this.message(true, response.msg, 'error');
						})
					}, () => {
						this.tableData3[index].show_weight = val;
						this.message(true, '已取消修改', 'info');    
					})
				},

				delBanner: function(res, row) {
					this.confirm(() => {
							this.post('/admin/operate/deleteBannerAd', {
								btId: res
							}).then((response) => {
								response = response.data;
								if(response.code == 0) {
									this.tableData3.splice(this.tableData3.indexOf(row), 1);
									this.message(true, response.msg, 'success');
								}
								else {
									this.message(true, response.msg, 'error');
								}
							})
					}, () => {
							this.message(true, '已取消修改', 'info')
					})
				},

				// 获取所有一级页面名称
				getInformationType: function() {
					var self = this;
					this.post('/admin/operate/getIndexListName', {})
					.then(function (response) {
						if (response.code == 0) {
							self.banner = response.result;
							self.radio2 = response.result[0].name;
							self.i = response.result[0].id;
							self.getIndexBanner();
						};
					})
					.catch(function (error) {
						console.log(error);
					});
				},
   

				// 获得页面的banner信息
				getIndexBanner: function() {
				var self = this;
				var load =this.openFullScreen2();
				this.post('/admin/operate/getIndexBanner', {
					indexId: self.i,
					btType: 0
				})
				.then(function (response) {
					if (response.code == 0) {
					self.tableData3 = response.result;
					load.close();
					};
				})
				.catch(function (error) {
					console.log(error);
					load.close();
				});
				
				}
    },
    mounted(){
      	this.getInformationType();
      
    }
};
</script>
<style>
	/*
	* 上传图片列表初始时不显示
	*/
	.operateUpfilesRight .el-upload-list {
		display: none;
		margin-top: -10px;
	}
	.operateUpfilesRight2 .has-gutter th {
		background-color: #EAEDF1 !important;
	}

	/*
	* 公共样式
	*/
	.selectedNavPublic {
		border-bottom: 1px solid #1abc1a;
		padding-bottom: 5px;
	}
	.el-breadcrumb__inner {
		font-size: 12px;
	}
</style>

<style scoped>
.operateBox {
	width: 1500px;
	margin: 0 auto;
}
/*
* 选项卡样式
*/
.operateNav {
	margin: 20px 0;
}
.operateNav .el-radio-button {
	margin-right: 10px;
}
/*
* 右边上传banner内容样式
*/
.operateUpfilesRight .upload-demo {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.operateUpfilesRight .el-upload__tip {
	margin-left: 20px;
	margin-bottom: 8px;
	display: none;
}
.operateUpfiles {
	border: 1px solid #e4e4e4;
	background-color: #fff;
	display: flex;
	flex-direction: row;
}
.operateHeader {
	border-bottom: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #e4e4e4;
	color: #666;
}
.operateHeader .el-button {
	width: 80px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 10px;
}
.operateHeader>p {
	margin-left: 20px;
	font-weight: bold;
}
.operateUp {
	border-bottom: none;
}
.operateDown {
	border-top: none;
}
.operateUpfilesLeft {
	background-color: #fcfcfc;
	border-right: 1px solid #e4e4e4;
	width: 159px;
}
.operateUpfilesLeft>div {
	background: url(../../assets/img/point.png) no-repeat;
	position: relative;
	top: 50px;
	left: 0;
	width: 180px;
	height: 50px;
	color: #fff;
	display: flex;
	align-items: center;
	padding-left: 20px;
}
.operateUpfilesRight {
	padding: 50px 80px;
	width: 1170px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #e4e4e4;
}
.operateUpfilesRight .el-input {
	width: 360px;
}
.operateUpfilesRight form {
	margin-top: 50px;
}
.operateUpfilesRight button {
	float: right;
}
.operateUpfilesRightImg {
	width: 640px;
	height: 170px;
	overflow: hidden;
	margin-top: 20px;
}
.operateUpfilesRightImg>img {
	max-width: 100%;
	max-height: 100%;
}


/*
* 右边当前banner内容样式
*/

.operateUpfilesRight2 {
	padding: 40px 90px 40px 80px;
	width: 1170px;
}
.operateUpfilesRight2Nav {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-weight: bold;
	color: #666;
	font-size: 14px;
}
.operateTable {
	margin-top: 25px;
}
.operateFinalUp {
	text-align: center;
	margin: 150px 0 20px;
}
</style>


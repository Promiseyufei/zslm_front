<template>
	<div>
		<div class="operateBox">
			<!-- 中间内容 -->
			<div>
				<el-breadcrumb separator="/">
					<el-breadcrumb-item>文件管理</el-breadcrumb-item>
					<el-breadcrumb-item>文件上传</el-breadcrumb-item>
				</el-breadcrumb>

				<!-- 步骤条 -->
				<div class="fileSteps">
					<el-steps :active="2" align-center>
						<el-step title="选择院校专业"></el-step>
						<el-step title="上传文件"></el-step>
					</el-steps>
				</div>

				<div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
					<!-- 上传banner -->
					<div class="operateUpfiles operateUp">

						<div class="operateUpfilesLeft">
							<div><i class="fa fa-cloud-upload fa-fw FA-3X"></i>&nbsp;上传广告图</div>
						</div>
						<div class="operateUpfilesRight">
							<div>
								<el-upload class="upload-demo" action="/putPictrue" :on-change="handleChange" :on-remove="handleRemove"
								 :before-remove="beforeRemove" :auto-upload="false" :file-list="fileList">
									<el-button size="small" type="primary">上传文件</el-button>
									<!-- <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
									<span slot="tip" class="el-upload__tip">当前以选择：</span>
								</el-upload>
							</div>
							<!-- 提交表单 -->
							<div>
								<el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
									<el-form-item label="文件名称" prop="name">
										<el-input v-model="ruleForm.name" placeholder="输入文件名称"></el-input>
									</el-form-item>
									<el-form-item label="文件描述" prop="message">
										<el-input v-model="ruleForm.message" placeholder="输入文件描述"></el-input>
									</el-form-item>
									<el-form-item label="年份信息" prop="url">
										<el-date-picker v-model="ruleForm.url" type="date" placeholder="输入年份信息">
										</el-date-picker>
									</el-form-item>
									<el-form-item label="文件类型" prop="resource">
										<el-radio-group v-model="ruleForm.resource">
											<el-radio :label="0">招生简章</el-radio>
											<el-radio :label="1">其他文件</el-radio>
										</el-radio-group>
									</el-form-item>
									<el-form-item label="院校展示" prop="delivery">
										<el-switch v-model="ruleForm.delivery"></el-switch>
									</el-form-item>
									<el-form-item>
										<el-button type="primary" @click="submitForm('ruleForm')">上传</el-button>
									</el-form-item>
								</el-form>
							</div>
						</div>
					</div>
					<!-- 当前banner -->
					<div class="operateUpfiles operateDown">
						<div class="operateUpfilesLeft">
							<div><i class="fa fa-list-alt fa-fw FA-3X"></i>&nbsp;当前院校的文件</div>
						</div>
						<div class="operateUpfilesRight2" style="padding-top: 100px !important;">
							<div class="operateUpfilesRight2Nav">
								<span>当前展示院校的文件</span>
								<el-button type="info" plain @click="BatchDelete"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
							</div>
							<!-- 表格 -->
							<div class="file-table" style="margin-top: 20px !important;">
								<el-table v-loading="loading" :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%"
								 :header-cell-style="{background:'#f9fafc'}">
									<el-table-column label="编号" prop="id" width="70"></el-table-column>
									<el-table-column label="展示权重" width="100">
										<template slot-scope="scope">
											<el-input id="inputID" @focus="getFocus(tableData[scope.$index].show_weight)" v-on:blur="loseFocus(tableData[scope.$index].show_weight,scope.$index)"
											 v-model="tableData[scope.$index].show_weight">
											</el-input>
										</template>
									</el-table-column>
									<el-table-column label="操作" width="220">
										<template slot-scope="scope">
											<el-button @click="editFile(tableData[scope.$index])" type="text" size="small">编辑</el-button>
											<!-- 模态框 -->
											<el-dialog title="编辑文件信息" :visible.sync="dialogFormVisible" class="dialog">
												<el-form :model="form">
													<div class="dialogText">文件编号：{{form.fileId}}</div>
													<el-form-item label="文件名称" :label-width="formLabelWidth">
														<el-input v-model="form.name" autocomplete="off"></el-input>
													</el-form-item>
													<div class="dialogRadio">
														<div>文件类型</div>
														<el-radio-group v-model="form.type">
															<el-radio :label="0">招生简章</el-radio>
															<el-radio :label="1">其他文件</el-radio>
														</el-radio-group>
													</div>
													<el-form-item label="年份信息" :label-width="formLabelWidth">
														<el-input v-model="form.yearInfo" autocomplete="off"></el-input>
													</el-form-item>
													<el-form-item label="文件描述" :label-width="formLabelWidth">
														<el-input v-model="form.fileDesc" autocomplete="off"></el-input>
													</el-form-item>
													<div class="dialogSwitch">
														<div>是否展示</div>
														<el-tooltip :content="'Switch value: ' + value5" placement="top">
															<el-switch v-model="form.is_show" active-color="#13ce66" inactive-color="#ff4949">
															</el-switch>
														</el-tooltip>
													</div>

												</el-form>
												<div slot="footer" class="dialog-footer">
													<el-button @click="dialogFormVisible = false">取 消</el-button>
													<el-button type="primary" @click="updateFile">确 定</el-button>
												</div>
											</el-dialog>

											<el-button @click="view(tableData[scope.$index].file_url)" type="text" size="small">查看</el-button>
											<el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
										</template>
									</el-table-column>
									<div v-for="(val, index) in tableTop" :key="index">
										<el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
										</el-table-column>
									</div>
								</el-table>
							</div>
							<!-- 表格 -->

							<!-- 分页 -->
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
		components: {},
		data() {
			var checkAge = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('年份信息不能为空！'));
				} else {
					callback();
				}
			};
			return {
				majorname: this.$route.params.majorname,
				isUpload: false,
				value2: '',
				rules: {
					name: [{
							required: true,
							message: '文件名称不能为空！',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 10,
							message: '长度在 3 到 10 个字符',
							trigger: 'blur'
						}
					],
					message: [{
							required: true,
							message: '文件描述不能为空！',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 15,
							message: '长度在 3 到 15 个字符',
							trigger: 'blur'
						}
					],
					url: [{
						validator: checkAge,
						required: true,
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择文件类型',
						trigger: 'change'
					}],
				},
				loading: false,
				banner: [],
				radio2: "",
				src: "",
				fileList: [{
					name: '',
					url: 'http://img.hb.aicdn.com/cf629e62573f99793bf9c5621ecb5545534642ac1215-3wa44w_fw658',
					file: ''
				}],
				ruleForm: {
					name: '',
					message: '',
					url: '',
					resource: '',
					delivery: ''
				},
				i: 0,
				TableValue: 0,
				listTable: [{
						prop: 'img',
						lable: '图片名称',
						width: "210px"
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
						width: "319px"
					},
					{
						prop: "create_time",
						lable: "上传时间",
						width: "210px"
					}
				],
				// 表格默认数据
				tableData3: [],
				dialogFormVisible: false,
				form: {
					fileId: 0,
					name: '',
					fileDesc: '',
					yearInfo: 0,
					type: '0',
					is_show: true,
				},
				formLabelWidth: '120px',

				value5: '100',
				/*选项卡*/

				allFilesCount: 1000,
				recrIntroCount: 200,
				otherFilesCount: 7000,
				// radio2:"",
				/*查询输入框*/
				filesName: '',
				fileType: '全部',
				fileYear: '',
				majorName: '',
				/*表格*/
				tableTop: [{
						type: '',
						prop: 'file_name',
						label: '文件名称',
						width: 260
					},
					{
						type: '',
						prop: 'z_name',
						label: '所属院校专业',
						width: 320
					},
					{
						type: '',
						prop: 'type_name',
						label: '文件类型',
						width: 100
					},
					{
						type: '',
						prop: 'file_year',
						label: '文件年份',
						width: 100
					},
					{
						type: '',
						prop: 'show_name',
						label: '主页展示',
						width: 100
					},
					{
						type: '',
						prop: 'create_time',
						label: '上传时间',
						width: 180
					},
				],
				tableData: [{
					id: '',
					show_weight: '',
					file_name: '',
					z_name: '',
					file_type: '',
					file_year: '',
					is_show: '',
					create_time: '',
				}],
				showweight: '',
				disabled: true,
				multipleSelection: [], //存放多选选中的ID
				/*分页*/
				total: 0,
				searchContent: {
					page: 1,
					limit: 10,
				},
				judgeadd: true,
				fileUrl: this.globals.FileUrl
			}
		},
		watch: {
			i: function(val, oldval) {},
		},
		methods: {
			// 清空所有banner
			operateDelete: function() {
				var table = this.tableData3;
				var arrayTableId = [];
				for (var i = 0; i < table.length; i++) {
					arrayTableId.push(table[i].id);
				};
				this.deleteBanner(arrayTableId);
			},
			// 点击上传图片按钮
			submitForm: function(formName) {
				var self = this;
				this.$refs[formName].validate((valid) => {
					// 判断表单是否符合填写要求
					if (valid) {
						// 判断是否上传图片
						if (self.fileList[0].file == '') {
							this.$message('您还没有上传为图片呢');
							return;
						};

						var fd = new FormData()

						fd.append('uploadFile', self.fileList[0].raw)
						fd.append('isShow', self.ruleForm.delivery ? 1 : 0)
						fd.append('fileName', self.ruleForm.name)
						fd.append('fileDescribe', self.ruleForm.message)
						fd.append('fileYear', self.ruleForm.url.toString().split(' ')[3])
						fd.append('fileType', self.ruleForm.resource)
						fd.append('majorId', self.$route.params.majorname)
						let imgFile = {
							headers: {
								'Content-Type': 'multipart/form-data'
							}
						}
						console.log(self.fileList[0].raw)
						this.post('/admin/files/upload', fd, imgFile)
							.then(function(response) {
								var date = response;
								if (date.code == 0) {
									self.$message({
										message: '上传成功',
										type: 'success'
									});
								} else {
									console.log(date.msg, 123);
								}
							})
							.catch(function(error) {
								console.log(error);
							});

					} else {
						return false;
					}
				});
			},
			// 刷新页面，重新加载页面数据
			operateUpdate: function() {
				this.loading = true;
				this.getIndexBanner();
				this.ruleForm.name = "";
				this.ruleForm.message = "";
				this.ruleForm.url = "";
				this.loading = false;
			},
			// 动态更新资讯类型id

			handleClick: function(row) {
				console.log(row);
			},
			// 图片移除时触发该事件
			handleRemove: function(file, fileList) {
				var span = document.getElementsByClassName("el-upload__tip")[0];
				span.style.display = "none";
				this.fileList[0].url = 'http://img.hb.aicdn.com/cf629e62573f99793bf9c5621ecb5545534642ac1215-3wa44w_fw658';
				this.fileList[0].file = '';
			},
			handlePreview: function(file) {
				console.log(file);
			},
			handleAvatarSuccess: function(res, file) {
				this.fileList[0].url = URL.createObjectURL(file.raw);
				this.fileList[0].file = file;
			},
			// 每次上传图片列表改变时，触发
			handleChange: function(file, fileList) {
				var li = document.getElementsByClassName("el-upload-list")[0];
				var span = document.getElementsByClassName("el-upload__tip")[0];
				span.style.display = "block";
				li.style.display = "block";

				this.fileList = fileList.slice(-1);
			},
			beforeRemove: function(file, fileList) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			},
			//  获得所有页面的名称
			getInformationType: function() {
				var self = this;
				axios.post('/admin/operate/getAllPageListName', {})
					.then(function(response) {
						var date = response.data;
						if (date.code == 0) {
							self.banner = date.data;
							self.radio2 = date.data[0].name;
							self.i = date.data[0].id;
						};
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			// 获得页面的banner信息
			getIndexBanner: function() {
				var self = this;
				axios.post('/admin/operate/getIndexBanner', {
						indexId: self.i,
						btType: 1
					})
					.then(function(response) {
						var date = response.data;
						if (date.code == 0) {
							var res = date.data;
							self.tableData3 = res;
						};
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			editFile: function(val) {
				console.log(val)
				this.form.fileId = val.id
				this.form.name = val.file_name
				this.form.type = val.file_type
				this.form.yearInfo = val.file_year
				this.form.fileDesc = val.file_alt
				this.form.is_show = val.is_show == 0 ? true : false
				this.dialogFormVisible = true

			},
			updateFile: function() {
				let that = this
				this.post("/admin/files/updatefile", {
					fileId: that.form.fileId,
					fileName: that.form.name,
					fileType: that.form.type,
					fileYear: that.form.yearInfo,
					fileDescribe: that.form.fileDesc,
					isShow: that.form.is_show ? 0 : 1
				}).then(res => {
					if (res.code == 0) {
						this.message(true, '修改成功', 'success');
						that.dialogFormVisible = false
						that.query()
					} else {
						this.message(true, res.msg, 'error');

					}
				})

			},

			//跳转页面
			//获得多选中表格行的id
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			//批量删除表格内容
			toshow2(msg) {
				this.msg = msg;
			},
			/**
			 * 清空
			 */
			BatchDelete: function() {
				var that = this;
				let selectId = []; //存放删除的数据
				this.post('/admin/files/deletemajorallf', {
					mid: that.majorname
				}).then(res => {
					if (res.code == 0) {
						that.message(true, "删除成功", "success")
						that.tableData = []
					} else {
						that.message(true, res.msg, "error")
					}
				})
			},
			//获得焦点，储存原值
			getFocus: function(val) {
				this.showweight = val;
			},
			//失去焦点做判断
			loseFocus: function(val, index) {
				var re = /^[0-9]+.?[0-9]*$/;
				if (!re.test(val)) {
					this.message(true, '请输入数值', 'warning');
					this.tableData[index].showweight = this.showweight;
				} else if (val < 0 || val > 1000) {
					this.message(true, '权值范围为0~100', 'warning');
					this.tableData[index].showweight = this.showweight;
				} else {
					//权重正确，将该行表格id传给后台
					var that = this;

					this.post('/admin/files/updateweight', {
						//后台参数，前台参数(传向后台)
						fileId: that.tableData[index].id,
						weight: that.tableData[index].show_weight
					})
				}
			},
			//删除请求方法
			deleteRequest(filesId) {
				let that = this;
				this.confirm(() => {
					this.post('/admin/files/deletefiles', {
						//后台参数，前台参数(传向后台)
						fileId: filesId,
					}).then(function(response) {
						var res = response;
						that.judgeadd = true
						if (res.code == 0) {
							that.query();
							that.message(true, '删除成功', 'success');
						} else {
							that.message(true, '删除失败', 'error');
						}
					}).catch(function(error) {
						that.message(true, '删除失败', 'error');
					});
				}, () => {
					// console.log('this is catchback');
				}, '确定删除吗', '危险操作');
			},
			// 表格单行删除
			deleteRow(index, rows) {
				// 删除前判断
				let that = this;
				that.deleteRequest([rows[index].id]);
				// 删除某一行

			},
			//查看表格某一行——弹出编辑文件信息框框
			view: function(row) {
				//当前行表格数据
				// console.log(row)

				var url = this.fileUrl + row;

				window.location.href = url
				// 此弹出框未给
			},
			//编辑表格某一行——跳到PDF文件预览界面
			edit(row) {
				//当前行表格数据
				var singledata = row;
				// 此页面未给
			},
			//动态更新文件管理首页的id
			toshow: function(i) {
				this.i = i;
				this.query();
			},

			pageChange(msg) {
				// var page = msg.page;
				// var page = msg.limit;
				this.searchContent.page = msg.page;
				this.searchContent.limit = msg.limit;
				//分页改变时，更新表格数据
				if (this.searchContent.page) {
					this.query();
				};
				// console.log(this.searchContent.page);
			},
			query: function() {
				var that = this;
				this.fetch('/admin/files/getonemajorfile',
						//后台参数，前台参数(传向后台)
						{

							majorId: that.majorname,

						}
					)
					.then(function(response) {
						var res = response;
						if (res.code == 0) {
							console.log(res.result.data)
							that.tableData = res.result.data;
							for (var i = 0; i < that.tableData.length; i++) {
								that.tableData[i].type_name = that.tableData[i].file_type == 0 ? "招生简章" : "其他文件"
								that.tableData[i].show_name = that.tableData[i].is_show == 0 ? "展示" : "不展示"
							}
							that.total = res.result.dataCount;
							if (that.judgeadd)
								that.adds(res.result.dataCount, res.result.zhaos, res.result.dataCount - res.result.zhaos)
							that.judgeadd = false;
						};
					})
					.catch(function(error) {});
			},
		},
		mounted() {
			this.query()
		}
	}
</script>
<style>
	/*
  * 上传图片列表初始时不显示
  */
	.operateUpfilesRight .el-upload-list {
		display: none;
		margin-top: 20px;
	}

	.operateUpfilesRight2 .has-gutter th {
		background-color: #EAEDF1 !important;
	}

	/*
    * 步骤条
    */
	.fileSteps .is-text {
		width: 50px;
		height: 50px;
	}

	.fileSteps .is-finish .is-text {
		background: #1ABC9C;
		color: #fff;
	}

	.fileSteps .el-step__icon-inner {
		font-size: 20px;
	}

	.fileSteps .el-step__line {
		top: 23px !important;
	}
</style>

<style scoped>
	.dialog .el-dialog__header {
		padding: 20px 20px 10px !important;
		text-align: left !important;
		background: #f2f2f2 !important;
		color: #333 !important;
		font-size: 14px !important;
		font-weight: bolder !important;
	}

	.dialog .el-input__inner {
		width: 440px !important;
		text-align: left !important;
	}

	.dialog .el-input {
		width: 450px !important;
	}

	.dialog .el-form-item {
		width: 600px !important;
	}

	.dialog .el-radio-group {
		margin-left: 36px !important;
	}

	.dialog .el-switch__core {
		margin-left: 36px !important;
	}

	.file-table .el-table--scrollable-x .el-table__body-wrapper {
		overflow-x: hidden !important;
	}

	.operateBox {
		width: 1500px;
		margin: 0 auto;
	}

	/*
* 步骤条样式
*/
	.fileSteps {
		/*margin: 20px 0;*/
		width: 400px;
		margin: 0 auto;
	}

	.fileSteps .el-steps--horizontal {
		margin: 20px 0;
	}

	/*
* 右边上传banner内容样式
*/
	.operateUpfilesRight .upload-demo {
		width: 250px;
	}

	.operateUpfilesRight .el-upload__tip {
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
		background: url(../../../assets/img/point.png) no-repeat;
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

	/*.operateUpfilesRightImg {
  width: 640px;
  height: 170px;
  overflow: hidden;
  margin-top: 20px;
}
.operateUpfilesRightImg>img {
  max-width: 100%;
  max-height: 100%;
}*/


	/*
* 右边当前banner内容样式
*/

	.operateUpfilesRight2 {
		padding: 40px 90px 40px 80px;
		width: 1170px;
	}

	.operateUpfilesRight2Nav {
		display: flex;
		justify-content: space-between;
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

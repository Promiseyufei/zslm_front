<template>
	<div class="filesAll">
		<!-- 选项卡 -->
		<div class="files-tab">
			<div class="operateNav">
				<el-radio-group v-model="radio2">
					<el-radio-button :label="list.name" v-for="(list, index) in banner" :key="index" @click.native="changeType(list.id,list.name)">{{list.val}}</el-radio-button>
				</el-radio-group>
			</div>
			<el-button size="small" type="primary" @click.native="jumpPage" class="click">点击上传</el-button>
		</div>

		<!-- 筛选查询 -->
		<div class="filesquery">
			<i class="el-icon-search"></i>
			<p class="screen">筛选查询</p>
			<el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native="f5">刷新</el-button>
		</div>

		<!-- 查询输入框 -->
		<div class="filesForm">
			<div>
				<el-form class="input" label-width="80px">
					<el-form-item label="文件名称">
						<el-input size="medium" v-model="filesName_v" placeholder="请输入文件名称">
						</el-input>
					</el-form-item>
					<el-form-item label="院校名称">
						<el-input v-model="majorName_v" size="medium" placeholder="请输入院校名称"></el-input>
					</el-form-item>
					<el-form-item label="文件年份">
						<el-date-picker v-model="fileYear_v" type="year" placeholder="选择年" size="medium" value-format="yyyy">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="文件类型">
						<el-select v-model="fileType_v" size="medium" placeholder="请选择">
							<el-option v-for="(opt,index) in input" :key="index" :label="opt.label" :value="opt.value">
							</el-option>
						</el-select>
					</el-form-item>
				</el-form>
			</div>
			<el-button size="mini" class="filesForm-query" type="primary" icon="el-icon-search" @click.native="selectQuery">查询</el-button>
		</div>

		<!-- 数据列表 -->
		<div class="files-datalist">
			<i class="el-icon-tickets"></i>
			<p class="screen">数据列表</p>
		</div>

		<!-- 表格 -->
		<div class="file-table">
			<el-table v-loading="loading" :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%"
			 :header-cell-style="{background:'#f9fafc'}">
				<el-table-column type="selection" width="50"></el-table-column>
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
		<div class="footer">
			<el-button type="primary" size="mini" icon="el-icon-delete" @click.native="BatchDelete">批量删除</el-button>
			<Page ref="page" :total="total" @pageChange="pageChange">
			</Page>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				/*模态框*/
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
				radio2: '全部文件',
				value5: '100',
				/*选项卡*/
				banner: [{
						id: 2,
						name: "全部文件",
						val: ""
					},
					{
						id: 0,
						name: "招生简章",
						val: ""
					},
					{
						id: 1,
						name: "其他文件",
						val: ""
					}
				],
				allFilesCount: 1000,
				recrIntroCount: 200,
				otherFilesCount: 7000,
				// radio2:"",
				i: 0, //当前选项卡id
				/*查询输入框*/
				filesName_v: '',
				fileType_v: '全部',
				fileYear_v: '',
				majorName_v: '',
				filesName: '',
				fileType: '全部',
				fileYear: '',
				majorName: '',
				input: [{
						value: '2',
						label: '全部'
					},
					{
						value: '0',
						label: '招生简章'
					},
					{
						value: '1',
						label: '其他文件'
					},
				],
				/*数据列表  排序方式*/
				Sort: '',
				sort: [{
						value: '选项一',
						label: '10条'
					},
					{
						value: '选项二',
						label: '50条'
					},
					{
						value: '选项三',
						label: '100条'
					},
				],
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
				loading: true,
				
			}
		},
		watch: {
			// page: function(newpage,oldpage) {
			// 	if (this.searchContent.page == 1) {
			//     	this.query();
			// 	};
			// }
		},
		methods: {
			// opendialog:function(){    //代开模态框
			//    this.dialogVisible = false 
			//  },
			//变量和字符串拼接——头部导航按钮内字体显示

			f5: function() {
				var that = this;
				that.searchContent.page = 1;
				that.searchContent.limit = 10;

				that.filesName = "";
				that.fileType = '全部'
				that.fileYear = ''
				that.majorName = ''
				that.filesName_v = "";
				that.fileType_v = '全部'
				that.fileYear_v = ''
				that.majorName_v = ''
				that.Sorting = ''
				that.radio2 = '全部文件'
				that.searchContent.page = 1
				this.$refs.page.handleSizeChange(10);
			},

			editFile: function(val) {
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
			/**
			 * 点击头部的类型
			 */
			changeType: function(val,name) {
				var that = this
				that.filesName = "";
				that.fileType = val
				that.fileYear = ''
				that.majorName = ''
				that.filesName_v = "";
				that.fileType_v = name
				that.fileYear_v = ''
				that.majorName_v = ''
				that.Sorting = ''
				that.searchContent.page = 1
				this.$refs.page.handleSizeChange(10);
			},
			selectQuery: function() {
				this.majorName = this.majorName_v
				this.fileType = this.fileType_v
				this.fileYear = this.fileYear_v
				this.filesName = this.filesName_v
				this.searchContent.page = 1
				this.query()
			},
			adds: function(allfilecount, zhaosheng, other) {
				this.banner[0].val = `全部文件(${allfilecount})`;
				this.banner[1].val = `招生简介(${zhaosheng})`;
				this.banner[2].val = `其他文件(${other})`;
			},
			//跳转页面
			jumpPage: function() {
				this.$router.push('/admin/SelectUnivers');
			},
			//获得多选中表格行的id
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			//批量删除表格内容
			BatchDelete: function() {
				var that = this;
				let selectId = []; //存放删除的数据
				for (var i = 0; i < that.multipleSelection.length; i++) {
					selectId.push(that.multipleSelection[i].id);
					//删除数组——删除选择的行


				};
				this.deleteRequest(selectId);
			},
			toshow2(msg) {
				this.msg = msg;
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

				var url =  row;
				window.open(url)
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
				this.loading = true;
				this.fetch('/admin/files/getuploadfile',
						//后台参数，前台参数(传向后台)
						{
							page: that.searchContent.page,
							pageSize: that.searchContent.limit,
							fileName: that.filesName,
							majorName: that.majorName,
							fileYear: that.fileYear,
							fileType: that.fileType == '全部' ? 2 : that.fileType
						}
					)
					.then(function(response) {
						var res = response;
						if (res.code == 0) {
							that.tableData = res.result.data;
							for (var i = 0; i < that.tableData.length; i++) {
								that.tableData[i].type_name = that.tableData[i].file_type == 0 ? "招生简章" : "其他文件"
								that.tableData[i].show_name = that.tableData[i].is_show == 0 ? "展示" : "不展示"
							}
							that.total = res.result.dataCount;
							if (that.judgeadd)
								that.adds(res.result.dataCount, res.result.zhaos, res.result.dataCount - res.result.zhaos)
							that.judgeadd = false;
							that.loading = false;
						};
					})
					.catch(function(error) {});
			},
		},
		mounted() {
			this.radio2 = '全部文件';
			this.query();
			this.adds();

		}
	}
</script>


<!-- 全局样式 -->
<style>
	.dia {
		width: 100px;
		height: 100px;
	}

	/*表格滚动条*/
	.file-table .el-table--scrollable-x .el-table__body-wrapper {
		/* overflow-x: hidden; */
	}

	.file-table .el-input__inner {
		width: 60px;
		text-align: center;
	}

	/*模态框*/
	.dialog .el-dialog__header {
		padding: 20px 20px 10px;
		text-align: left;
		background: #f2f2f2;
		color: #333;
		font-size: 14px;
		font-weight: bolder;
	}

	.dialog .el-input__inner {
		width: 440px;
		text-align: left;
	}

	.dialog .el-input {
		width: 450px;
	}

	.dialog .el-form-item {
		width: 600px;
	}

	.dialog .el-radio-group {
		margin-left: 36px;
	}

	.dialog .el-switch__core {
		margin-left: 36px;
	}

	/*表头文本居中*/
	.file-table .el-table th.is-leaf {
		text-align: center;
	}

	.footer .el-button--primary[data-v-09f3e8a6] {
		margin: 0 0 0 20px;
	}

	/*分页右间距*/
	.footer .el-pagination[data-v-09f3e8a6] {
		padding-right: 20px;
	}

	/*上传按钮*/
	.footer .el-button--primary {
		padding: 9px 15px;
		background-color: #1ABC9C;
		border-color: #1ABC9C;
	}

	.footer .el-button--primary:hover {
		background-color: #1ABC9C;
		opacity: 0.8;
		border-color: #1ABC9C;
	}
</style>

<style scoped>
	.operateNav {
		margin: 20px 0;

	}

	.operateNav .el-radio-button {
		margin-right: 10px;
	}

	.el-radio-button__inner {
		font-size: 12px !important;
	}

	.dialogRadio,
	.dialogSwitch,
	.dialogText {
		text-align: left;
	}

	.dialogText {
		margin: 0 0 10px 20px;
	}

	.dialogRadio,
	.dialogSwitch {
		display: flex;
		align-items: center;
		margin-left: 50px;
	}

	.dialogRadio {
		margin-bottom: 20px;
	}

	/* 表格样式 */
	.file-table {
		width: 1500px;
		margin: 0 auto;
		text-align: center;
	}

	.el-table__header-wrapper {
		border-color: #000;
	}

	.el-table thead {
		color: #333;
		font-size: 12px;
		font-family: 'Tahoma';
	}

	.el-table--border {
		border-right: none;
		border-bottom: none;
	}

	.el-button--text[data-v-09f3e8a6] {
		margin: 0 15px;
	}

	.el-main[data-v-04c2046b] {
		background-color: #fff !important;
	}

	.el-select-group__wrap:not(:last-of-type) {
		padding-bottom: 7px;
	}

	.el-select-group .el-select-dropdown__item {
		font-size: 12px;
		color: #BBB;
	}

	.el-input__inner {
		font-size: 12px;
	}

	.datalist-selecttwo {
		position: absolute;
		right: 10px;
	}

	.datalist-selecttwo {
		width: 100px;
	}

	.files-datalist {
		display: flex;
		align-items: center;
		position: relative;
		width: 1500px;
		height: 50px;
		background: #f3f3f3;
		margin: 0 auto;
	}

	.filesForm-query {
		position: absolute;
		right: 10px;
		bottom: 25px;
		background-color: #fff;
		border-color: #CCC;
		border-radius: 0;
		color: #666;
		font-size: 12px;
	}

	.filesquery i,
	.files-datalist i {
		margin: 0 10px 0 20px;
	}

	.input {
		display: flex;
		margin: 20px 0 0 0;
	}

	.filesForm {
		width: 1500px;
		display: flex;
		position: relative;
		margin: 0 auto 20px;
	}

	/*表格操作*/
	.el-table {
		color: #333;
	}

	.el-button--text {
		color: #333;
	}

	.el-button--text:hover {
		color: #1ABC9C;
	}

	.el-pagination {
		color: #999;
		font-weight: 500;
	}

	.footer {
		border: 1px solid #E4E4E4;
		text-align: right;
		width: 1500px;
		height: 50px;
		background-color: #fdfdfe;
		margin: 20px auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active:hover {
		color: #1ABC9C;
		border: 1px solid #1ABC9C;
	}

	.el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
		color: #1ABC9C;
		border: 1px solid #1ABC9C;
	}

	.screen {
		font-weight: bold;
		font-size: 16px;
		color: #666;
		font-family: 'Tahoma';
	}

	.dataquery-refresh {
		position: absolute;
		right: 10px;
		top: 10px;
		color: #666;
		background-color: #fff;
		border: 1px solid #CCC;
		border-radius: 0;
	}

	.filesquery {
		width: 1500px;
		height: 50px;
		margin: 0 auto;
		background-color: #F3F3F3;
		position: relative;
		display: flex;
		align-items: center;
	}

	.files-tab {
		width: 1500px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>

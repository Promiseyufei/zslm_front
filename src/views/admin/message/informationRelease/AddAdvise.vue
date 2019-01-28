<template>
	<div class="operateBox">
		<!-- 中间内容 -->
		<div>
			<!-- 面包屑 -->
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>运行管理</el-breadcrumb-item>
				<el-breadcrumb-item>资讯频道首页推荐</el-breadcrumb-item>
				<el-breadcrumb-item class="selectedNavPublic">添加推荐</el-breadcrumb-item>
			</el-breadcrumb>

			<!-- 返回按钮 -->
			<div class="addadviseBtn">
				<el-row>
					<el-button @click.native="$router.push('/admin/operate/advise')">返回</el-button>
				</el-row>
			</div>

			<div class="operateUpfiles operateHeader">
				<p><i class="fa fa-filter"></i> 筛选查询</p>
			</div>

			<!-- 筛选框 -->
			<div class="addadviseSelect">
				<div class="addadviseInput">
					<el-form ref="form" :model="form" label-width="120px">
						<el-form-item label="资讯类型">
							<el-select v-model="form.region_v" clearable placeholder="全部">
								<el-option :label="list.name" :value="list.id" v-for="(list,i) in banner" :key="i"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="资讯标题">
							<el-input v-model="form.message_v" placeholder="输入关键字"></el-input>
						</el-form-item>
					</el-form>
				</div>
				<el-button type="info" plain @click="selectQuery" size="small"><i class="fa fa-search fa-fw"></i>查询</el-button>
			</div>

			<!-- 筛选头部 -->
			<div class="operateUpfiles operateHeader">
				<p><i class="fa fa-bars"></i> 资讯列表</p>
			</div>
			<!-- 表格 -->
			<div class="operateTable">
				<template>
					<el-table :data="tableData3" border style="width: 100%" ref="order" @selection-change="handleSelectionChange"
					 :header-cell-style="getRowClass">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column v-for="(list,index) in listTable" :prop="list.prop" :label="list.lable" :width="list.width" :key="index">
						</el-table-column>
						<el-table-column label="操作" width="140">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
								<el-button type="text" size="small" @click="addadviseSelect(scope.row)">选中</el-button>
							</template>
						</el-table-column>
					</el-table>
				</template>
			</div>

			<div class="addadviseblock">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
				 :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>

			<!-- 已选资讯 -->
			<div class="operateUpfiles operateHeader">
				<p><i class="fa fa-window-restore"></i> 已选资讯</p>
			</div>

			<!-- 选中状态 -->
			<div class="operateTable">
				<template>
					<el-table :data="tableData" border style="width: 100%" :header-cell-style="getRowClass">
						<el-table-column v-for="(list,index) in listTable2" :prop="list.prop" :label="list.lable" :width="list.width"
						 :key="index">
						</el-table-column>
						<el-table-column label="操作" width="180">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
								<el-button type="text" size="small" @click="delectSelect(scope.row)">取消选中</el-button>
							</template>
						</el-table-column>
					</el-table>
				</template>
			</div>

			<!-- 加入推荐按钮 -->
			<div style="text-align:center;" class="addadviseFinish">
				<el-button type="primary" @click="setInfoRecommend">加入推荐</el-button>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		components: {},

		data() {
			return {
				id: this.$route.params.id,
				form: {
					region: 0,
					message: '',
					region_v: 0,
					message_v: ''
				},
				banner: [{
					name: "全部",
					id: 0
				}],
				total: 0,
				count: 100,
				page: 1,
				sort: 0,
				count2: [{
						number: 10
					},
					{
						number: 100
					},
					{
						number: 200
					}
				],
				listTable: [{
						prop: "id",
						lable: "编号",
						width: "250px"
					},
					{
						prop: "z_type",
						lable: "资讯类型",
						width: "350px"
					},
					{
						prop: 'zx_name',
						lable: '资讯标题',
						width: "354px"
					},
					{
						prop: "create_time",
						lable: "上传时间",
						width: "350px"
					}
				],
				listTable2: [{
						prop: "id",
						lable: "编号",
						width: "250px"
					},
					{
						prop: "z_type",
						lable: "资讯类型",
						width: "350px"
					},
					{
						prop: 'name',
						lable: '资讯标题',
						width: "369px"
					},
					{
						prop: "create_time",
						lable: "上传时间",
						width: "350px"
					}
				],
				// 表格默认数据
				tableData3: [],
				tableData: [],
				currentPage3: this.page,
				infoIdArr: []
			}
		},
		methods: {
			selectQuery() {
				this.form.message = this.form.message_v
				this.form.region = this.form.region_v
				this.getIndexInfo()
			},
			//从选中表格中删除指定的资讯
			delectSelect: function(row) {
				this.$refs.order.toggleRowSelection(row, false);
			},

			//显示将要添加咨询表格
			addadviseSelect: function(row) {
				this.$refs.order.toggleRowSelection(row, true);
			},

			handleClick(val) {
				let routeUrl = this.$router.resolve({
					path: "/front/firstMenuRouter/viewInformation/singleInformation/" + val.id,

				});
				window.open(routeUrl.href, '_blank');
			},
			//获得需要添加的资讯的id数组
			handleSelectionChange(val) {
				this.tableData = val;
				this.infoIdArr = [];
				var self = this;
				if (val.length > 0) {
					val.forEach((item) => {
						self.infoIdArr.push(item.id);
					});
				}
				self = undefined;
			},

			//向指定区域添加相关咨讯
			setInfoRecommend: function() {
				var that = this;
				var url = '/admin/message/recommend/' + that.id;
				if (this.infoIdArr.length == 0) {
					this.message(true, '没有选择要推荐的资讯', 'warning');
					return false;
				}
				this.confirm(() => {
					// var load = this.openFullScreen2();
					this.post('/admin/information/setManualRecInfos', {
						infoId: this.id,
						infoArr: this.infoIdArr
					}).then((response) => {

						if (response.code == 0) {
							this.infoIdArr = [];
							this.tableData = [];
							this.message(true, response.msg, 'seccess');
							this.$router.push(url);
						} else
							this.message(true, response.msg, 'error');
					})
				}, () => {
					this.message(true, '已取消修改', 'info');
					// load.close();
				}, '是否添加推荐咨询')

			},

			// 每页显示条数改变时触发事件
			handleSizeChange: function(val) {
				this.count = val;
				this.getIndexInfo();
			},

			// 点击小分页触发事件
			handleCurrentChange: function(val) {
				this.page = val;
				this.getIndexInfo();
			},

			// 获取所有资讯类型
			getInformationType: function() {
				var self = this;
				this.post('/admin/operate/getInformationType', {})
					.then(function(response) {
						if (response.code == 0) {

							for (var i = 0; i < response.result.length; i++)
								self.banner.push(response.result[i])
						};
					})
					.catch(function(error) {
						self.message(true, error, 'error');
					});
			},

			// 获取咨询列表添加分页数据
			getIndexInfo: function() {
				var self = this;
				// var load = this.openFullScreen2();
				this.post('/admin/operate/getInformPagingData', {
						informationTypeId: self.form.region,
						titleKeyword: self.form.message,
						pageCount: self.count,
						pageNumber: self.page - 1,
						sortType: self.sort
					})
					.then(function(response) {
						// response = response.data;
						if (response.code == 0) {
							self.tableData3 = response.result['data'];
							self.total = response.result['count'];
						} else {
							self.message(true, response.msg, 'error');
						}
						// load.close();
					})
					.catch(function(error) {
						// load.close();
					});
			}
		},
		mounted() {
			this.getInformationType();
			this.getIndexInfo();
		}
	}
</script>
<style>
	.operateTable .has-gutter th {
		background-color: #ebeef5 !important;
	}

	.operateTable .cell {
		text-align: center;
		font-size: 12px;
	}
</style>

<style scoped>
	.operateBox {
		width: 1500px;
		margin: 0 auto;
	}

	/*返回按钮*/
	.addadviseBtn {
		margin: 20px 0;
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

	.operateHeader>p {
		margin-left: 20px;
		font-weight: bold;
	}

	/*筛选框*/
	.addadviseSelect {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20px 10px 20px 0;
	}

	.addadviseInput .el-form {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.addadviseInput .el-form-item {
		margin-bottom: 0;
	}

	/*分页*/
	.addadviseblock {
		background-color: #fff;
		border-color: 1px solid #e4e4e4;
		padding: 10px 20px;
		margin: 20px 0;
		text-align: right;
	}

	/*加入推荐按钮*/
	.addadviseFinish {
		background-color: #e4e4e4;
		padding: 20px 0;
	}
</style>

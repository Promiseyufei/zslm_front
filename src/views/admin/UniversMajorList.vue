<template>
	<div class="majorlist">
		<div class="majorlist-top">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>信息发布</el-breadcrumb-item>
			  <el-breadcrumb-item>院校专业</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="majorlist-button">
			<el-button @click.native ="jumpPage">新建</el-button>
		</div>
		<div class="majorlist-query">
			<i class="el-icon-search"></i>
			<p>筛选查询</p>
			<div></div>
			<el-button size="mini" type="primary" icon="el-icon-refresh" class="majorlist-queryrefresh" @click.native ="refreshMajorPage">刷新</el-button>
		</div> 
		<div class="majorlist-form">
			<el-form class="majorlist-input" label-width="80px">
				<el-form-item label="院校专业">
					<el-input size="medium" v-model="name" placeholder="输入院校专业名称"></el-input>
				</el-form-item>
				<el-form-item label="展示状态">
					<el-select size="medium" v-model="type1" placeholder="全部">
					  <el-option v-for="(item, index) in screenType" :label="item.label" :value="item.value" :key="index"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="推荐状态">
					<el-select size="medium" v-model="type2" placeholder="全部">
						<el-option v-for="(item, index) in screenState" :label="item.label" :value="item.value" :key="index"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<el-button size="mini" type="primary" icon="el-icon-search" class="majorlist-queryrefresh" @click.native="gettableInfo">查询</el-button>
		</div>
		<div class="majorlist-list">
			<i class="el-icon-tickets"></i>
			<p>内容列表</p>
			<div></div>
			<el-select size="mini" class="majorlist-selectone" v-model="value" placeholder="默认顺序">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click="gettableInfo">
				</el-option>
			</el-select>
		</div>
		<div class="majorlist-table">
			<el-table :header-cell-style="{background:'#f9fafc'}" :data="majorlisttable" @current-change="handleCurrentChange" border style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>1
				<el-table-column label="编号" prop="id" width="100"></el-table-column>
				<el-table-column label="展示权重" width="100">
					<template slot-scope="scope">
						<el-input v-model="majorlisttable[scope.$index].weight" @focus="focusMajorWeigthCount(majorlisttable[scope.$index].weight)" v-on:blur="changeMajorWeight(majorlisttable[scope.$index].id, majorlisttable[scope.$index].weight, scope.$index)"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="展示状态" width="100">
					<template slot-scope="scope">
						<el-switch v-model="majorlisttable[scope.$index].is_show" @change="setMajorState(majorlisttable[scope.$index].id, majorlisttable[scope.$index].is_show, 1, scope.$index)"></el-switch>
					</template>
				</el-table-column>
				<el-table-column label="推荐状态" width="100">
					<template slot-scope="scope">
						<el-switch v-model="majorlisttable[scope.$index].if_recommended" @change="setMajorState(majorlisttable[scope.$index].id, majorlisttable[scope.$index].if_recommended, 2, scope.$index)">
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="210">
					<template slot-scope="scope">
						<div class="majorlist-icon">
							<i v-for="(val, index) in iconname" :key="index" :class="val.name" @click="clickEvent(val.event, majorlisttable[scope.$index])"></i>
							<!-- <i class="el-icon-tickets" @click="dialogTableVisible = true"></i> -->
							<el-dialog title="查看招生项目" :visible.sync="dialogTableVisible" class="dialog">
							  <el-table :data="gridData"  border>
								<el-table-column property="id" label="编号" width="80"></el-table-column>
								<el-table-column property="weight" label="展示顺序" width="100">
									<template slot-scope="scope">
										<el-input v-model="gridData[scope.$index].weight" @focus="focusMajorWeigthCount(gridData[scope.$index].weight)" v-on:blur="changeMajorWeight(gridData[scope.$index].id, gridData[scope.$index].weight, scope.$index, 1)"></el-input>
									</template>
								</el-table-column>
								<el-table-column property="is_show" label="展示状态" width="100">
									<template slot-scope="scope">
										<el-switch v-model="gridData[scope.$index].is_show" @change="changeMajorProjectState(gridData[scope.$index].id, () => {return gridData[scope.$index].is_show == true ? 0:1}, 2, scope.$index)">
										</el-switch>
									</template>
								</el-table-column>
								<el-table-column property="project_name" label="招生项目"></el-table-column>
								<el-table-column property="address" label="操作" width="140">
									<template slot-scope="scope">
										<i class="el-icon-search"  @click="jumpItemInfo(majorlisttable[scope.$index].id, majorlisttable[scope.$index].z_name, gridData[scope.$index].id)"></i>
										<i class="el-icon-delete" @click="delMajorProject(gridData[scope.$index].id, gridData[scope.$index])"></i>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
						</div>
					</template>
				</el-table-column>
				<!-- <div> -->
				  <!-- <el-table-column v-for="(val,index) in tableTop" :key="index" :type="val.type" :prop="val.prop" :label="val.label" :width="val.width"> -->
				<div v-for="(val, index) in tableTop" :key="index">
					<el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width" >
				</el-table-column>
				</div>
			   
			</el-table>
		</div>
		<div class="footer"> 
			<el-button size="mini" icon="el-icon-delete" @click.native = "BatchDelete">删除</el-button>
			<Page :total="total" :limit="searchContent.limit" @pageChange="pageChange" ></Page>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				/*模态框*/
				dialogTableVisible: false,
				 gridData: [    //表格
					// {
					//   id: 0,
					//   showInput: 0,
					//   showState: true,
					//   item:'',
					// }, 
				],

				total:0,
				value:'',
				name:'',
				type1:2,
				type2:2,
				cacheMajorWeight:'',
				searchContent:{
					page:1,
					limit:10,
				},
				iconname:[
					{name:'el-icon-search', event:'jumpFontMajorPage'},
					{name:'el-icon-edit-outline', event:'jumpMajorMsgPage'},
					{name:'el-icon-delete', event:"delAppointMajor"},
					{name:'el-icon-refresh', event:"updateMajorTime"},
					{name:'el-icon-tickets', event:"checkAllProject"}
				],
				options: [
					{value: 0,　label: '按权重升序'}, 
					{value: 1,label: '按权重降序'}, 
					{value: 2,label: '按信息更新时间'}
				],
				screenType: [
					{label: '展示', value: 0},
					{label: '不展示', value: 1},
					{label: '显示全部', value: 2}
				],
				screenState: [
					{label: '推荐', value: 0},
					{label: '不推荐', value: 1},
					{label: '显示全部', value: 2}
				],
				tableTop:[
				  {prop:'z_name',label:'院校专业名称',width:580},
				  {prop:'student_project_count',label:'招生项目',width:100},
				  {prop:'update_time',label:'发布时间',width:160},
				],
				majorlisttable:[],
				multipleSelection:[],//存放多选选中的ID                
			}
		},
		methods:{
			checkAllProject(major) {
                let self = this;

                this.post('/admin/information/getAllProject', {
                    majorId: major.id,
                    pageNum: 0
                }).then((response) => {
                    if(response.code == 0) {
						// self.total = response.result.total;
						this.gridData = response.result.data
                    }
                    else 
                        this.message(true, response.msg, 'error');
                })
                .catch(function (error) {
                    this.message(true, error, 'error');
                });
				this.dialogTableVisible = true;
			},
			//表格编辑-查找-跳到招生项目信息编辑页面
			jumpItemInfo:function(majorId, majorName, projectId) {
				this.$router.push('/admin/message/universityMessage/'+majorId + '/' + majorName + '/' + projectId);
			},
			//新建-跳转院校专业信息页面页面
			jumpPage:function() {
				this.$router.push('/admin/message/messageHome/'+"");
			},
			//操作方法回调
			clickEvent(eventName, row) {
				if(this[eventName+""]) {
					this[eventName+""](row);
				}
				else {
					this.message(true, "浏览器版本不兼容", "error");
				}
			},

			//批量删除表格内容
			BatchDelete: function(){
				var that = this;
				let selectId = [];//存放删除的数据
				for (var i = 0; i < that.multipleSelection.length; i++) {
					that.selectId.push(that.multipleSelection[i].id);
					//删除数组——删除选择的行
					selectId.splice(0,that.multipleSelection.length);
				};
				// this.deleteRequest(selectId);
			},


			//删除指定的院校专业
			delAppointMajor(val) {
				let _this = this;
				this.confirm(() => {
					_this.post('/admin/information/deleteMajor', {
						majorId: val.id
					}).then((response) => {
						if(response.code == 0){
							_this.majorlisttable.splice(this.majorlisttable.indexOf(val), 1);
							this.message(true,response.msg, 'success');
						}
						else
							this.message(true, response.msg, 'error');
					})
				}, ()=> {
					this.message(true, "已取消操作", "info");
				})
			},

			//删除指定的招生项目
            delMajorProject(proId, row) {
                this.confirm(() => {
                   this.post('/admin/information/deleteAppointProject', {
                       projectId: proId
                   }).then((response) => {
                        if(response.code == 0) {
							this.gridData.splice(this.gridData.indexOf(row), 1);
							this.gettableInfo();
                            this.message(true, response.msg, 'success');
                        }
                        else
                            this.message(true, response.msg, 'error');
                   })
                }, () => {
                    this.message(true, '已取消操作', 'info');
                });
            },

			//更新指定院校专业的更新时间
			updateMajorTime(val) {
				let _this = this;
				this.confirm(() => {
					this.post('/admin/information/updateMajorInformationTime', {
						majorId: val.id
					}).then((response) => {
						if(response.code == 0) {
							_this.majorlisttable[_this.majorlisttable.indexOf(val)].update_time = response.result;
							this.message(true, response.msg, 'success');
						}
						else 
							this.message(true, response.msg, 'error');
					})
				}, () => {
					this.message(false, "已取消修改", 'info');
				});
			},

			//跳转到指定的院校专业编辑页面
			jumpMajorMsgPage(val) {
				this.$router.push('/admin/message/messageHome/' + val.id);
			},
			//跳到相应的前台院校专业主页
			jumpFontMajorPage(major){
				let routeUrl = this.$router.resolve({
					path:'/front/firstMenuRouter/selectCollege/singleCollage',
					query:{id:major.id}
				});
				window.open(routeUrl.href, '_blank');
				
			},
			//刷新页面
			refreshMajorPage() {
				this.name = '';
				this.type1 = 2;
				this.type2 = 2;
				this.majorlisttable = [];
				this.searchContent.page = 1;
				this.searchContent.limit = 10;
				this.value = this.options[2].value;
				this.gettableInfo();
			},

			//弹出查看招生项目页面
			alertSeeProject(){
				
			},

			//设置专业状态(权重，展示状态，推荐状态)
			setMajorState(id, state, type, row) {
				let _this = this;
				this.confirm(() => {
					if(type == 0) state = state;
					else state = state ? 0 : 1;
					_this.post('/admin/information/setMajorState', {
						majorId: id,
						type: type,
						state: state
					}).then((response) => {
						(response.code == 0) ? this.message(true, response.msg, 'success'): this.message(true, response,msg, 'error');
					});
				}, ()=> {
					switch(type)
					{
						case 1:
							_this.majorlisttable[row].is_show = !_this.majorlisttable[row].is_show;
							break;
						case 2: 
							_this.majorlisttable[row].if_recommended = !_this.majorlisttable[row].if_recommended;
							break;
					}
					this.message(true, '已取消修改', 'info');    
				})
			},

			//缓存权重值
			focusMajorWeigthCount(weight) {
				this.cacheMajorWeight = weight;
			},

			//改变权重值时进行判断
			changeMajorWeight(id, weight, row, type = 0) {
				var re = /^[0-9]+.?[0-9]*$/;
				if (!re.test(weight)) {
					this.message(true,'请输入数值','warning');
					this.majorlisttable[row].weight = this.cacheMajorWeight;
				} else if (weight<0||weight>1000) {
					this.message(true,'权值范围为0~100','warning');
					this.majorlisttable[row].weight = this.cacheMajorWeight;
				} else {
					type == 1 ? this.changeMajorProjectState(id, 0, weight) : this.setMajorState(id, weight, 0);
				}
			},

			//设置招生项目的状态
            changeMajorProjectState(proId, type, state) {
                let status = true;
                this.post('/admin/information/setProjectState' , {
                    projectId: proId,
                    type:type,
                    state: state
                }).then((response) => {
                    if(response.code == 0) {
                        this.message(true, response.msg, 'success');
                    }
                    else {
                        status = false;
                        this.message(true, response.msg, 'error');
                    }
                })
                return status;

            },

			//分页发生变化时调用
			pageChange(msg) {
				this.searchContent.page = msg.page;
				this.searchContent.limit = msg.limit;
				this.gettableInfo();
			},

			handleCurrentChange(val) {
				this.currentRow = val;
			},

			//请求列表数据
			gettableInfo:function(){
				var that = this;
				this.post('/admin/information/getMajorPageMessage',{
					majorNameKeyword:that.name,
					screenType:that.type1,
					screenState:that.type2,
					sortType:that.value == '' ? that.options[2].value : that.value,
					pageCount:that.searchContent.limit,
					pageNumber:that.searchContent.page - 1
				})
				.then(function (response) {
					if (response.code == 0) {
						that.majorlisttable = response.result.get_page_msg;
						that.total = response.result.count;
					};
				})
				.catch(function (error) {
					// console.log(error);
				});
			}
		},
		mounted(){
			this.gettableInfo();
		},
	}

</script>

<!-- 全局样式 -->
<style>
	/*表格滚动条*/
	.majorlist-table .el-table--scrollable-x .el-table__body-wrapper {
		overflow-x: hidden;
	}
	/*表头文本居中*/
	.majorlist-table .el-table th.is-leaf {
		text-align: center;
	}
	.footer .el-button--mini, .el-button--mini.is-round {
	  margin: 0 0 0 20px;
	}
	/*分页右间距*/
	.footer .el-pagination[data-v-67d9ff78] {
		padding-right: 20px;
	}
	/*模态框*/
	.dialog .el-input__inner {
		width: 50px;
	}

</style>

<!-- 局部样式 scoped -->
<style scoped>
	.dialog i {
		font-size: 20px;
	}
	.page {
		padding: 5px 10px;
	}
	.el-table {
		color: #333;
	}
	.el-button--text {
		color: #333;
	}
	.el-button--text:hover {
		color: #1ABC9C;
	}
	.el-table th>.cell {
		text-align: center;
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
		display: flex;
		align-items:center;
		justify-content:space-between;
		background-color: #fdfdfe;
		margin: 20px auto;
		/*padding: 10px;*/
	}
	.el-table thead {
		background: #f9fafc;
	}
	.el-table th>.cell {
		font-size: 12px;
		font-weight: bold;
		color: #666; 
		text-align: center;
	}
	.majorlist-icon i {
		margin: 0 5px;
		cursor: pointer;
	}
	.majorlist-icon {
		font-size: 20px;
		color: #999;
	}
	.majorlist-table .el-input {
		width: 40px;
	}
	.majorlist-table {
		width: 1500px;
		margin: 0 auto;
		text-align: center;
	}
	.majorlist-selectone {
		position: absolute;
		right: 10px;
		width: 100px;
	}
	.majorlist-input {
		display: flex;
	}
	.majorlist-form {
		display: flex;
		position: relative;
		width: 1500px;
		margin: 20px auto;
	}
	.majorlist-queryrefresh {
		position: absolute;
		right: 10px;
		top: 10px;
		color: #666; 
		background-color: #fff; 
		border:1px solid #CCC;
		border-radius:0;
	}
	.majorlist-query i,.majorlist-list i {
		margin: 0 10px 0 20px
	}
	.majorlist-query p,.majorlist-list p {
		font-size: 16px;
		color: #666;
		font-weight: bold;
	}
	.majorlist-query,.majorlist-list {
		position: relative;
		display: flex;
		align-items:center;
		width: 1500px;
		height: 50px;
		background:#f3f3f3;
		margin: 0 auto;
	}
	.majorlist-button {
		margin: 20px auto;
		width: 1500px;
	}
	.majorlist-top p {
		font-size: 10px;
		color: #999;
	}
	.majorlist-top {
		display: flex;
		margin: 0 auto;
		width: 1500px;
	}    
</style>

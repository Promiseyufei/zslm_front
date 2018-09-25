<template>
	<div class="dataAll">
		<div class="dataAll-top">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="dataquery">
			<i class="el-icon-search"></i>
			<p>筛选查询</p>
			<!-- <div></div> -->
			<el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native="gettableInfo">刷新</el-button>
		</div>
		<div class="dataform">
			<el-form class="dataform-input" ref="filesForm" :model="filesForm" label-width="80px">
				<el-form-item label="内容类型">
				    <el-select v-model="filesForm.type" placeholder="全部">
						<el-option v-for="(item, index) in contentType" :key="index" :label="item.label" :value="item.value"></el-option>
				    </el-select>
			    </el-form-item>
		        <el-form-item label="关键字">
		          <el-input v-model="filesForm.name1" placeholder="请输入关键字"></el-input>
		        </el-form-item>
	      	</el-form>
	      	<el-button size="mini" type="primary" icon="el-icon-search" class="dataquery-refresh" @click.native="gettableInfo">查询</el-button>
		</div>
		<div class="datalist">
			<i class="el-icon-tickets"></i>
			<p>内容列表</p>
			<el-cascader
				size="mini"
				class="datalist-selecttwo"
				expand-trigger="hover"
				:options="cascaderOptions"
				v-model="selectedOptions2"
				@change="handleChange">
			</el-cascader>
		</div>
		<div class="datatable">
			<el-table ref="singleTable" :data="Datatable" border @current-change="handleCurrentChange" style="width: 100%">
				<div v-for="(val, index) in tableTop" :key="index">
					<el-table-column :type="val.type" :property="val.property" :label="val.label" :width="val.width"></el-table-column>
				</div>
			</el-table>
		</div>
		<div class="footer"> 
	  		<div class="addadviseblock">
                <el-pagination
                	background
                  	@size-change="handleSizeChange"
                  	@current-change="handleCurrent"
                  	:current-page.sync="currentSubscript"
                  	:page-size="currentPage3"
                  	layout="total, sizes, prev, pager, next, jumper"
                  	:total="total">
                </el-pagination>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
	    data(){
	    	return {
				currentPage3:10,
				total:100,
				currentSubscript: 1,
	    		currentPage4:2,
	    		msg:0,
				count:0,
	    		number:0,
				value: '',

				contentType:[
					{
						label: '院校专业主页',
						value: 0
					},
					{
						label: '活动详情',
						value: 1
					},
					{
						label: '资讯详情',
						value: 2
					},
					{
						label: '总量',
						value:3
					}
					
				],

	    		tableTop:[
					{property:'name',label:'分享内容',width:650},
					{property:'id',label:'编号',width:100},
					{property:'total_browse',label:'页面浏览量',width:100},
					{property:'wx_count',label:'微信分享次数',width:100},
					{property:'wx_browse',label:'微信引流数',width:100},
					{property:'wb_count',label:'微博分享次数',width:100},
					{property:'wb_browse',label:'微博引流数',width:100},
					{property:'total_count',label:'总引流数',width:100},
				],
				
	    		Datatable: [{
					id:'',
					name:'',
					wx_count:'',
					wb_count:'',
					wx_browse:'',
					wb_browse:'',
					total_count:'',
					total_browse:''
				}],
				
				currentRow:null,
				
	    		filesForm: {
		    		name1:'',
		    		type: 3,
				},
				
		    	options: [
			        {
			          value: '选项3',
			          label: '时间'
			        }, 
			        {
			          value: '选项4',
			          label: '浏览量'
			        }, 
			        {
			          value: '选项5',
			          label: '分享次数'
			        }
				],

				selectedOptions2: [0, 0],

				cascaderOptions:[
					{
						label: '总浏览量',
						value: 0,
						children: [
							{
								label:'升序',
								value:0
							},
							{
								label:'降序',
								value:1
							}
						]
					},
					{
						label: '总分享次数',
						value: 1,
						children: [
							{
								label:'升序',
								value:0
							},
							{
								label:'降序',
								value:1
							}
						]
					},
					{
						label: '微信分享次数',
						value: 2,
						children: [
							{
								label:'升序',
								value:0
							},
							{
								label:'降序',
								value:1
							}
						]
					},
					{
						label: '微博分享次数',
						value: 3,
						children: [
							{
								label:'升序',
								value:0
							},
							{
								label:'降序',
								value:1
							}
						]
					},
					{
						label: '微信浏览量',
						value: 2,
						children: [
							{
								label:'升序',
								value:0
							},
							{
								label:'降序',
								value:1
							}
						]
					},
					{
						label: '微博浏览量',
						value: 5,
						children: [
							{
								label:'升序',
								value:0
							},
							{
								label:'降序',
								value:1
							}
						]
					}
				]
		    };
	    },
	    methods: {
			//分页页数改变时触发
			handleSizeChange: function(val) {
				this.currentPage3 = val;
				this.gettableInfo();
			},
			//分页下标改变时触发
			handleCurrent:function(val) {
				this.currentSubscript = val;
				this.gettableInfo();
			},

			//排序方式改变时触发
			handleChange(value) {
				this.selectedOptions2 = value;
				this.gettableInfo();
			},


		    toshow2(msg) {
		        this.msg = msg;
		        console.log(this.msg);
			},
			
	    	gettableInfo: function (){
				var that = this;
		        this.post('/admin/operate/getPagingData',{
					pageNumber: that.currentSubscript,
					pageCount: that.currentPage3,
					sortType: that.selectedOptions2[0],
					riseOrDrop: that.selectedOptions2[1],
					contentType: that.filesForm.type,
					titleKeyword: that.filesForm.name1 == null ? '' : that.filesForm.name1 

		        })
		        .then(function (response) {
		            if (response.code == 0) {
		            	that.Datatable = response.result;
		            	that.count = response.count;
		            };
		        })
		        .catch(function (error) {
		            console.log(error);
		        });
	      },
	    	handleCurrentChange(val) {
				console.log(val);
				this.currentRow = val;
	      }
	    },
		mounted() {
			this.gettableInfo();
			// this.getPage();
		},
	}
</script>


<!-- 全局样式 -->
<style>
	/*表格滚动条*/
    .datatable .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    /*表头文本居中*/
    .datatable .el-table th.is-leaf {
        text-align: center;
        font-size: 12px;
        font-weight: bold;
    }
</style>

<style scoped>
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
		background-color: #fdfdfe;
		margin: 0 auto;
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
	.datatable {
		width: 1500px;
		margin: 0 auto;
		text-align: center;
	}
	.datalist-selecttwo {
		position: absolute;
		right: 10px;
	}
	.datalist-selecttwo {
		width: 100px;
	}
	.dataform-input {
		display: flex;
	}
	.dataform {
		display: flex;
		position: relative;
		width: 1500px;
		margin: 20px auto;
	}
	.dataquery-refresh {
		position: absolute;
		right: 10px;
		top: 10px;
	    color: #666; 
	    background-color: #fff; 
	    border:1px solid #CCC;
	    border-radius:0;
	}
	.dataquery i,.datalist i {
		padding: 0 5px 0 10px;
	}
	.dataquery p,.datalist p {
		font-size: 16px;
		color: #666;
		font-weight: bold;
	}

	.dataquery,.datalist {
		position: relative;
		display: flex;
		align-items:center;
		width: 1500px;
		height: 50px;
		background:#f3f3f3;
		margin: 0 auto;
	}
	.dataquery {
		margin: 15px auto;
	}
	.span {
		margin: 10px 6.5px;
	}
	.dataAll-top p {
		font-size: 10px;
		color: #999;
	}
	.dataAll-top {
		display: flex;
		margin: 0 auto;
		width: 1500px;
	}
</style>


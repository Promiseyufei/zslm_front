<template>
	<div class="dataAll">
		<div class="dataAll-top">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>首页</el-breadcrumb-item>
			  <el-breadcrumb-item class="selectedNavPublic">活动管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="dataquery">
			<p><i class="el-icon-search"></i> 筛选查询</p>
			<!-- <div></div> -->
			<el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native="gettableInfo">刷新</el-button>
		</div>
		<div class="dataform">
			<el-form class="dataform-input" ref="filesForm" :model="filesForm" label-width="80px">
				<el-form-item label="内容类型">
				    <el-select size="medium" v-model="filesForm.type" placeholder="全部">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			    </el-form-item>
		        <el-form-item label="关键字">
		          <el-input size="medium" v-model="filesForm.name1" placeholder="请输入关键字"></el-input>
		        </el-form-item>
	      	</el-form>
	      	<el-button size="mini" type="primary" icon="el-icon-search" class="dataquery-refresh" @click.native="gettableInfo">查询</el-button>
		</div>
		<div class="datalist">
			<i class="el-icon-tickets"></i>
			<p>内容列表</p>
			<el-select size="mini" class="datalist-selecttwo" v-model="value" placeholder="默认顺序">
			    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native = "gettableInfo">
			    </el-option>
			</el-select>
		</div>
		<div class="datatable">
			<el-table ref="singleTable" :data="Datatable" border @current-change="handleCurrentChange" style="width: 100%" :header-cell-style="{background:'#f9fafc'}">
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
		          {property:'content',label:'分享内容',width:650},
	    		  {property:'id',label:'编号',width:100},
		          {property:'type',label:'内容类型',width:150},
		          {property:'pagedata',label:'页面浏览量',width:100},
		          {property:'wxdata',label:'微信分享次数',width:100},
		          {property:'wxdatas',label:'微信引流数',width:100},
		          {property:'wbdata',label:'微博分享次数',width:100},
		          {property:'wbdatas',label:'微博引流数',width:100},
		          {property:'datas',label:'总引流数',width:100},
		        ],
	    		Datatable: [{
		          content:'',
	    		  id:'',
		          type:'',
		          pagedata:'',
		          wxdata:'',
		          wxdatas:'',
		          wbdata:'',
		          wbdatas:'',
		          datas:'',
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
                selectedOptions2:0
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
				console.log(this.selectedOptions2)
				// this.gettableInfo();
			},


		    toshow2(msg) {
		        this.msg = msg;
		        console.log(this.msg);
			},

	    	gettableInfo: function (){
				var that = this;
		        axios.post('http://www.zslm.com/admin/operate/getPagingData',{

                        pageNumber: that.currentSubscript,
                        pageCount: that.currentPage3,
                        sortType: 0,
                        riseOrDrop: that.selectedOptions2,
                        contentType: that.filesForm.type,
                        titleKeyword: that.filesForm.name1


		        })
		        .then(function (response) {
		            // that.page++;
		            var res = response.data;
		            if (res.code == 0) {
		            	that.Datatable = res.data;
		            	that.total = res.total;
		            };
		            // that.pages = response.datas.data;
		        })
		        .catch(function (error) {
		            // console.log(error);
		        });
	      },
	    	handleCurrentChange(val) {
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
        /* overflow-x: hidden; */
    }
    /*表头文本居中*/
    .datatable .el-table th.is-leaf {
        text-align: center;
        font-size: 12px;
        font-weight: bold;
    }
</style>

<style scoped>
  .el-button--primary{
    background-color: #009fa0 !important;
    border-color: #009fa0 !important;
    width: auto !important;
    border-radius: 5px !important;
  }

	.el-table {
		color: #333;
	}
	.el-button--text {
		color: #333;
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
		width: 1480px;
		padding: 10px;
		background-color: #fdfdfe;
		margin: 20px auto;
		display: flex;
    	align-items:center;
    	justify-content:flex-end;
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
		justify-content: space-between;
		align-items: center;
		width: 1500px;
		margin: 0 auto 20px;
	}
	.dataform .el-form-item {
		margin: 0;
	}
	.dataquery-refresh {
		/* position: absolute;
		right: 10px;
		top: 10px; */
	    /*color: #666;*/
	    color: #fff;
	    background-color: #fff;
	    border:1px solid #CCC;
	    border-radius:0;
		margin-right: 10px;
	}
	.dataquery i,.datalist i {
		padding: 0 5px 0 20px;
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
		background:#f3f3f3;
		margin: 0 auto;
	}
	.dataquery {
		margin: 20px auto;
		display: flex;
		justify-content: space-between;
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


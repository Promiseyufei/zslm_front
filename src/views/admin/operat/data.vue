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
			<el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native = "gettable_info">刷新</el-button>
		</div>
		<div class="dataform">
			<el-form class="dataform-input" ref="filesForm" :model="filesForm" label-width="80px">
				<el-form-item label="内容类型">
				    <el-select v-model="filesForm.type" placeholder="全部">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			    </el-form-item>
		        <el-form-item label="关键字">
		          <el-input v-model="filesForm.name1" placeholder="请输入关键字"></el-input>
		        </el-form-item>
	        	<!-- </el-form-item> -->
	      	</el-form>
	      	<el-button size="mini" type="primary" icon="el-icon-search" class="dataquery-refresh" @click.native = "gettable_info">查询</el-button>
		</div>
		<div class="datalist">
			<i class="el-icon-tickets"></i>
			<p>内容列表</p>
			<div></div>
			<!-- <el-select size="mini" class="datalist-selectone" v-model="value" placeholder="请选择">
			    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			    </el-option>
			</el-select> -->
			<el-select size="mini" class="datalist-selecttwo" v-model="value" placeholder="默认顺序">
			    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native = "gettable_info">
			    </el-option>
			</el-select>
		</div>
		<div class="datatable">
			<el-table ref="singleTable" :data="Datatable" border @current-change="handleCurrentChange" style="width: 100%">
				<div v-for="val in tableTop">
					<el-table-column :type="val.type" :property="val.property" :label="val.label" :width="val.width"></el-table-column>
				</div>
			</el-table>
		</div>
		<div class="footer"> 
	  		<Page ref = "page" :count="count" :number="number" :currentPage4="currentPage4" @gettable_info="gettable_info" @showbox="toshow2" :msg="msg"></Page>
		</div>
	</div>
</template>

<script>
	export default {
	    data(){
	    	return {
	    		currentPage4:2,
	    		msg:0,
	    		count:0,
	    		number:0,
		        value: '',
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
		    		type:'',
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
		    };
	    },
	    methods: {
		    toshow2(msg) {
		        this.msg = msg;
		        console.log(this.msg);
		    },
	    	gettable_info: function (){
	        	var that = this;
		        axios.post('/admin/data/getdata-table',{
		        	type: that.filesForm.type,
		        	name1: that.filesForm.name1,
		        })
		        .then(function (response) {
		            // that.page++;
		            var res = response.data;
		            if (res.code == 0) {
		            	that.Datatable = res.data;
		            	that.count = res.count;
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
			this.gettable_info();
			// this.getPage();
		},
	}
</script>

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


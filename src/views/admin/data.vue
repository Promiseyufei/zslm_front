<template>
	<div class="dataAll">
		<div class="dataAll-top">
			<p>运营管理</p>
			<p class="span">/</p>
			<p>分享管理</p>
		</div>
		<div class="dataquery">
			<i class=""></i>
			<p>筛选查询</p>
			<div></div>
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
		          <el-input v-model="filesForm.name2" placeholder="请输入关键字"></el-input>
		        </el-form-item>
	        	<!-- </el-form-item> -->
	      	</el-form>
	      	<el-button size="mini" type="primary" icon="el-icon-search" class="dataquery-refresh" @click.native = "gettable_info">查询</el-button>
		</div>
		<div class="datalist">
			<i class=""></i>
			<p>内容列表</p>
			<div></div>
			<el-select size="mini" class="datalist-selectone" v-model="value" placeholder="请选择">
			    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			    </el-option>
			</el-select>
			<el-select size="mini" class="datalist-selecttwo" v-model="value" placeholder="请选择">
			    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			    </el-option>
			</el-select>
			<!-- <el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh">刷新</el-button> -->
		</div>
		<div class="datatable">
			<el-table ref="singleTable" :data="Datatable" border @current-change="handleCurrentChange" style="width: 100%">
				<el-table-column type="index" width="50"></el-table-column>
				<div v-for="val in tableTop">
					<el-table-column :type="val.type" :property="val.property" :label="val.label" :width="val.width"></el-table-column>
				</div>
			</el-table>
		</div>
		<div class="footer"> 
	  		<div class="footer-left">共<span>{{Page.pages}}</span>页/<span>{{Page.page}}</span>条数据</div>
	  		<Page ref = "page" @click.native = "gettable_info"></Page>
		</div>
	</div>
</template>

<script>
export default {
    data(){
    	return {
    		Page:{
	          pages:'',
	          page:'',
	        },
    		tableTop:[
	          {type:'',property:'content',label:'分享内容',width:700},
	          {type:'',property:'type',label:'内容类型',width:150},
	          {type:'',property:'pagedata',label:'页面浏览量',width:100},
	          {type:'',property:'wxdata',label:'微信分享次数',width:100},
	          {type:'',property:'wxdatas',label:'微信引流数',width:100},
	          {type:'',property:'wbdata',label:'微博分享次数',width:100},
	          {type:'',property:'wbdatas',label:'微博引流数',width:100},
	          {type:'',property:'datas',label:'总引流数',width:100},
	        ],
    		Datatable: [{
	          // date1: '',
	          content:'',
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
	    		name2:'',
	    		year:'',
	    		type:'',
	    	},
	    	options: [
		        {
		          value: '选项3',
		          label: '蚵仔煎'
		        }, 
		        {
		          value: '选项4',
		          label: '龙须面'
		        }, 
		        {
		          value: '选项5',
		          label: '北京烤鸭'
		        }
	        ],
	        value: '',
	    };
    },
    methods: {
    	getPage: function (){
        var that = this;
        axios.post('/admin/files/getUploadFile',{
        })
        .then(function (response) {
            that.Page = response.data.datas[0];
        })
        .catch(function (error) {
            // console.log(error);
        });
      },
    	gettable_info: function (){
        var that = this;
        axios.post('/admin/data/getdata-table',{
          page:that.page,
        })
        .then(function (response) {
            that.page++;
            that.Datatable = response.data.data;
            console.log(that.Datatable);
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
		this.getPage();
	},
}
</script>

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
	.footer-left {
		font-size: 12px;
		color: #999;
		margin: 8px 0 0 900px;
	}
	.footer-left span {
		color: #F04844;    
	}
	.footer {
		border: 1px solid #E4E4E4;
		display: flex;
		margin: 20px auto;
		width: 1500px;
		background-color: #fdfdfe;
	}
	.footer div {
		text-align: center;
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
	.datalist-selectone {
		position: absolute;
		right: 120px;
	}
	.datalist-selecttwo {
		position: absolute;
		right: 10px;
	}
	.datalist-selectone,.datalist-selecttwo {
		width: 100px;
		margin: 10px 0;
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
	.dataquery p,.datalist p {
		font-size: 16px;
		color: #666;
		font-weight: bold;
		padding: 0 20px;
	}
	.dataquery,.datalist {
		position: relative;
		display: flex;
		width: 1500px;
		height: 50px;
		background:#f3f3f3;
		margin: 0 auto;
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
		margin: 0 0 10px 60px;
	}
</style>


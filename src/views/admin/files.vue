<template>
	<div class="filesAll">
        <!-- 选项卡 -->
        <div class="files-tab">
          <operateNav :Banner="banner" :radio2 = "radio2" @showbox="toshow" :i="i"></operateNav>  
          <el-button size="small" type="primary"  @click.native = "jumpPage" class="click">点击上传</el-button>
        </div>

        <!-- 筛选查询 -->
    	<div class="filesquery"> 
            <i class="el-icon-search"></i>
            <p class="screen">筛选查询</p>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native = "query">刷新</el-button>
      	</div>

        <!-- 查询输入框 -->
        <div class="filesForm">
    	   <div>
                <el-form class="input" label-width="80px">
                    <el-form-item label="文件名称">
                        <el-input size="medium" v-model="filesName" placeholder="请输入文件名称">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="院校名称">
                        <el-input v-model="majorName" size="medium" placeholder="请输入院校名称"></el-input>
                    </el-form-item>
                    <el-form-item label="文件年份">
                          <el-date-picker v-model="fileYear" type="year" placeholder="选择年" size="medium">
                          </el-date-picker>
                    </el-form-item>
                    <el-form-item label="文件类型">
                        <el-select v-model="fileType" size="medium" placeholder="请选择">
                            <el-option v-for="(opt,index) in input" :key="index" :label="opt.label" :value="opt.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>  
           </div>
           <el-button class="filesForm-query" type="primary" icon="el-icon-search" @click.native = "query">查询</el-button> 
        </div>

		<!-- 数据列表 -->
	    <div class="files-datalist">
	  		<i class="el-icon-tickets"></i>
	    	<p class="screen">数据列表</p>
	        <el-select size="mini" class="datalist-selecttwo" v-model="Sort" placeholder="排序方式">
		         <el-option v-for="(item,index) in sort" :key="index" :label="item.label" :value="item.value">
		         </el-option>
	        </el-select>
	  	</div>

	  	<!-- 表格 -->
	    <div class="file-table">
		      <el-table :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%">
		          <el-table-column type="selection" width="50"></el-table-column>
		          <el-table-column label="编号" prop="id" width="70"></el-table-column>
		          <el-table-column label="展示权重" width="100">
                    <template slot-scope="scope">
                        <el-input id="inputID" @focus="getFocus(tableData[scope.$index].showweight)" v-on:blur="loseFocus(tableData[scope.$index].showweight,scope.$index)" v-model="tableData[scope.$index].showweight"></el-input>
                    </template>
                </el-table-column>
		          <el-table-column label="操作" width="220">
		              <template slot-scope="scope">
		                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
		                <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
		              </template>
		          </el-table-column>
		          <div v-for="(val, index) in tableTop" :key="index">
		            <el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
		            </el-table-column>
		          </div>
		      </el-table>
	    </div>

	    <!-- 分页 -->
	    <div class="footer">
	      <el-button type="primary" size="mini" icon="el-icon-delete" @click.native = "BatchDelete">批量删除</el-button>
	      <Page class="page" :total="total" @pageChange="pageChange"></Page>
	    </div>
	</div>
</template>
<script>
    export default {
  		data() {
  	    	return {
  	    		/*选项卡*/
  	    		banner:[
    	          {id: 0,name: "全部文件"},
    	          {id: 1,name: "招生简章"},
    	          {id: 2,name: "其他文件"}
            	],
            	radio2: "",
    			i: 0,//当前选项卡id
  	    		/*查询输入框*/

  	    		filesName:'',
  	    		fileType:'',
  	    		fileYear:'',
  	    		majorName:'',
  	    		input: [	
		           	{value: '选项一',label:'类型一'},
		           	{value: '选项二',label:'类型二'},
		           	{value: '选项三',label:'类型三'},
          		],
          		/*数据列表  排序方式*/
          		Sort:'',
          		sort:[
	          		{value: '选项一',label: '10条'},
	          		{value: '选项二',label: '50条'},
	          		{value: '选项三',label: '100条'},        
	            ],
	            /*表格*/
	            tableTop:[
		            // {type:'',prop:'showweight',label:'展示权重',width:100},
		            {type:'',prop:'filename',label:'文件名称',width:260},
		            {type:'',prop:'universmajor',label:'所属院校专业',width:320},
		            {type:'',prop:'filetype',label:'文件类型',width:100},
		            {type:'',prop:'fileyear',label:'文件年份',width:100},
		            {type:'',prop:'showhomepage',label:'主页展示',width:100},
		            {type:'',prop:'onlinetime',label:'上传时间',width:180},
		        ],
		        tableData:[{
		        	id:'',
		            showweight: '',
		            filename: '',
		            universmajor:'',
		            filetype: '',
		            fileyear: '',
		            showhomepage: '',
		            onlinetime: '',
		        }],
		        showweight:'',
		        sels:[],
		        disabled:true,
		        multipleSelection:[],
		        /*分页*/
		        total:0,
		        searchContent:{
		              page:'',
		              limit:'',
		        },
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
	  		//跳转页面
	  		jumpPage:function() {
	    		this.$router.push('/SelectUnivers');
	    	},
	  		//获得选中表格行的id
	  		handleSelectionChange(val) {
		    	this.multipleSelection = val;
		    	// console.log(this.multipleSelection);
		    },
		    //批量删除表格内容
		    BatchDelete: function(){
		    	var that = this;
		    	for (var i = 0; i < that.multipleSelection.length; i++) {
		    		var ID = that.multipleSelection[i].id;
		    	};
	        	axios.post('/admin/files/getUploadFile',{
		          //后台参数，前台参数(传向后台)
		          	ID: that.ID,
	        	})
	        	.then(function (response) {
	        	})
	        	.catch(function (error) {
	        	});
		    },
	      	toshow2(msg) {
	        	this.msg = msg;
	          // console.log(this.msg);
	      	},
	  		//获得焦点，储存原值
	  		getFocus: function(val) {
	  			this.showweight = val;
	  			// console.log(val);
	  		},
	  		//失去焦点做判断
	  		loseFocus:function(val,index) {
	  			var re = /^[0-9]+.?[0-9]*$/;
	            if (!re.test(val)) {
	                this.message(true,'请输入数值','warning');
	                this.tableData[index].showweight = this.showweight;
	            } else if (val<0||val>1000) {
	                this.message(true,'权值范围为0~100','warning');
	                this.tableData[index].showweight = this.showweight;
	            } else {
	            	//权重正确，将该行表格id传给后台
	            	var that = this;
	            	axios.post('/admin/files/updateFile',{
			          //后台参数，前台参数(传向后台)
			          fileId: that.tableData[index].id,
		        	})
	            }
	  		},
	      	// 表格单行删除
	    	deleteRow(index, rows) {
	      		// 删除前判断
	      		this.confirm(() => {
	      			rows.splice(index, 1);
            		// console.log('this is callback');
        		}, () => {
            		// console.log('this is catchback');
        		},'确定删除吗', '危险操作');
        		// 删除某一行
	        	
	      	},
	      	// 编辑、查看表格某一行
	    	handleClick(row) {
	        // console.log(row);
	    	},
	  		//动态更新文件管理首页的id
	  		toshow: function (i) {
	        	this.i = i;
	        	this.query();
	      	},
	      	pageChange(msg) {
	        	this.searchContent.page = msg.page;
	        	//分页改变时，更新表格数据
	        	if (this.searchContent.page) {
	        		this.query();
	        	};
	        	// console.log(this.searchContent.page);
	          	this.searchContent.limit = msg.limit;
	      	},
	      	query: function (){
	        	var that = this;
	        	axios.post('/admin/files/getUploadFile',{
		          //后台参数，前台参数(传向后台)
		          page: that.searchContent.page,
		          pageSize: that.searchContent.limit,
		          fileName: that.fileName,
		          majorName: that.majorName,
		          fileYear: that.fileYear,
		          fileType: that.fileType,
	        	})
	        	.then(function (response) {
	            	var res = response.data;
                    if (res.code == 0) {
                        console.log(res.result.data)
                        that.tableData =res.result.data;

                        that.total = res.result.dataCount;
                        console.log(that.total);
                    };
	        	})
	        	.catch(function (error) {
	        	});
	      	},
	  	},
  		mounted(){
	  		// this.getPage();
	    	this.query();
	  		this.radio2 = "全部文件";
	  		console.log(this.radio2);
  		}
  }

</script>


<!-- 全局样式 -->
<style>
    /*表格滚动条*/
    .file-table .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    .file-table .el-input__inner {
    	width: 60px;
    	text-align: center;
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
</style>

<style scoped>
  /*上传按钮*/
  .el-button--primary {
      padding: 9px 15px;
      background-color: #1ABC9C;
      border-color: #1ABC9C;
  }
  .el-button--primary:hover {
    background-color: #1ABC9C;
    opacity: 0.8;
    border-color: #1ABC9C;
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
      font-family:'Tahoma';
  }
  .el-table--border {
      border-right: none;
      border-bottom: none;
  }
  .el-button--text[data-v-09f3e8a6] {
    margin: 0 15px;
  }
	
	.el-main[data-v-04c2046b] {
		background-color: #fff!important; 
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
    align-items:center;
    position: relative;
    width: 1500px;
    height: 50px;
    background: #f3f3f3;
    margin: 0 auto;
  }
  .filesForm-query {
    position: absolute;
    right: 10px;
    bottom: 5px;
    background-color: #fff;
    border-color: #CCC;
    border-radius: 0;
    color: #666;
    font-size: 12px;
  }
  .filesquery i,.files-datalist i {
    padding: 0 5px 0 10px;
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
    background-color: #fdfdfe;
    margin: 20px auto;
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
  .el-tabs__item {
    line-height: 36px;
    font-size: 12px;
  }
  .el-tabs__nav-scroll {
    background-color: #fff;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item {
     border: 0; 
     margin: 0; 
  }
  .el-main {
    background-color: #fff;
    text-align: center;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active,.el-tabs--border-card>.el-tabs__header .el-tabs__item {
    color: #666;
    border: 1px solid #CCC;
    width: 120px;
    height: 35px;
    margin-left: 10px;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active:hover {
    color: #1ABC9C;
    border: 1px solid #1ABC9C;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    color: #1ABC9C;
    border: 1px solid #1ABC9C;
  }
  .el-tabs--border-card {
    background: #fff;
    border: 0; 
    box-shadow: 0; 
    -webkit-box-shadow: 0 0 0 0 rgba(0,0,0,.12), 0 0 0 0 rgba(0,0,0,.04);
  }
  .screen {
    font-weight: bold;
    font-size: 16px;
    color: #666;
    font-family:'Tahoma';
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
  .filesquery {
    width: 1500px;
    height: 50px;
    margin: 0 auto;
    background-color: #F3F3F3;
    position: relative;
    display: flex;
    align-items:center;
  }
  .files-tab {
    width: 1500px;
    margin: 0 auto;
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
  *{
    margin: 0;
    padding: 0;
  }
</style>
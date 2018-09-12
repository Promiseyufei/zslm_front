<template>
	<div class="filesAll">
		<div class="filesTop">
      <Click></Click>
      <!-- <Tab :table-data="tableData" :page="Page"></Tab> -->
      <operateNav :Banner="banner" :radio2 = "radio2" @showbox="toshow" :i="i" @click.native = "query"></operateNav>  
    </div>
	  <div class="filesquery" style="width:1500px; margin:0 auto;"> 
        <i></i>
        <p class="screen">筛选查询</p>
  	</div>
      <!-- <div class="dataquery">
        <i class=""></i>
        <p>筛选查询</p>
        <div></div>
        <el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native = "gettable_info">刷新</el-button>
      </div> -->
    <div class="filesForm">
    	<div>
        <el-form class="input" ref="filesForm" :model="filesForm" label-width="80px">
          <el-form-item label="文件名称">
            <el-input v-model="filesForm.name1" placeholder="请输入文件名称"></el-input>
          </el-form-item>
          <el-form-item label="院校名称">
            <el-input v-model="filesForm.name2" placeholder="请输入院校名称"></el-input>
          </el-form-item>
          <el-form-item label="文件年份">
            <div class="block">
              <el-date-picker
                v-model="filesForm.year" type="year" placeholder="选择年">
              </el-date-picker>
           </div>
            </el-form-item>
          <el-form-item label="文件类型">
            <el-select v-model="filesForm.type" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
        </el-form>  
      </div>
      <div>
        <el-button class="filesForm-query" type="primary" icon="el-icon-search" @click.native = "query">查询</el-button> 
      </div>
    </div>
	    <div class="filesSelect">
	  		<i></i>
	    	<p class="screen">数据列表</p>
        <!-- <el-select class="filesSelect-sel" v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select> -->
	  	</div>
	  	<!-- <Table ref = "table"></Table> -->
      <div class="file-table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          <div v-for="val in tableTop">
            <el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
            </el-table-column>
          </div>
        </el-table>
      </div>
    <div class="footer">
      <Page ref = "page" :count="count" :number="number" :currentPage4="currentPage4" @query="query" @showbox="toshow2" :msg="msg"></Page>
    </div>
	</div>
</template>
<script>
  export default {
  	data() {
  	    return {
          msg:0,
          currentPage4: 4,
          number:0,
          count:0,
          tabPosition: 'top',
          Page:'',
          isCollapse: true,
          radio2: "",
          tableTop:[
            {type:'',prop:'data',label:'展示权重',width:100},
            {type:'',prop:'name',label:'文件名称',width:320},
            {type:'',prop:'major',label:'所属院校专业',width:320},
            {type:'',prop:'type',label:'文件类型',width:100},
            {type:'',prop:'year',label:'文件年份',width:100},
            {type:'',prop:'homepage',label:'主页展示',width:100},
            {type:'',prop:'time',label:'上传时间',width:160},
   
          ],
          tableData:[{
            data: '',
            name: '',
            major:'',
            type: '',
            year: '',
            homepage: '',
            time: '',
          }],
  	    	filesForm: {
  	    		name1:'',
  	    		name2:'',
  	    		year:'',
  	    		type:'',
  	    	},
          options3: [{
              value: 10,
              label: '10条'
            }, {
              value: 50,
              label: '50条'
            }, {
              value: 100,
              label: '100条'
            }], 
         	options: [
           	{
            		value: '黄金糕',
            		// label: '黄金糕'
          	}, 
          	{
  	          	value: '双皮奶',
  	          	// label: '双皮奶'
         	 	}, 
          	{
  	          value: '蚵仔煎',
  	          // label: '蚵仔煎'
          	}, 
          	{
  	          value: '龙须面',
  	          // label: '龙须面'
          	}, 
  	        {
  	          value: '北京烤鸭',
  	          // label: '北京烤鸭'
  	        }
          ],
          
    			banner:[
    	          {
    	            id: 0,
    	            name: "全部文件"
    	          },
    	          {
    	            id: 1,
    	            name: "招生简章"
    	          },
    	          {
    	            id: 2,
    	            name: "其他文件"
    	          }
            	],
    			i: 0,
    	    }
  	   },
       watch: {
        // value: function(val,oldval) {
        //   console.log(val);
        //   this.value2 = val;
        //   this.query();
        // }
       },
  	methods: {
      // handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
      // },
      // handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      // },
  		//动态更新文件管理首页的id
  		toshow: function (i) {
        this.i = i;
        console.log(this.i);
      },
      toshow2(msg) {
          this.msg = msg;
          // console.log(this.msg);
      },
      query: function (){
        var that = this;
        axios.post('/admin/files/getUploadFile',{
          //后台参数，前台参数(传向后台)
          name1: that.filesForm.name1,
          name2: that.filesForm.name2,
          year: that.filesForm.year,
          type: that.filesForm.type,
        })
        .then(function (response) {
            var res = response.data;
            // console.log(res.count,123);
            if (res.code == 0) {
                that.tableData =res.data;
                // that.number = Math.ceil(res.count/that.value2);
                that.count = res.count;
                // console.log(that.number);
            };
            console.log(that.tableData);
            // that.pages = response.datas.data;
        })
        .catch(function (error) {
            // console.log(error);
        });
        // this.$refs.page.handleCurrentChange();
      },
        // getPage: function (){
        //   var that = this;
        //   axios.post('/admin/files/getUploadFile',{
        //   })
        //   .then(function (response) {
        //       that.Page = response.data.datas[0];
        //   })
        //   .catch(function (error) {
        //   });
        // }
  	},
  	mounted(){
  		// this.getPage();
      this.query();
  		this.radio2 = "全部文件";
  		console.log(this.radio2);
  	}
  }

</script>

</script>

<!-- 全局样式 -->
<style>

    /*表头文本居中*/
    .file-table .el-table th.is-leaf {
        text-align: center;
    }
</style>

<style scoped>
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
      margin-left: -5px;
      border-right: none;
      border-bottom: none;
  }
  /*表格滚动条*/
    .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
  .el-button--text, .el-button--text.is-disabled, .el-button--text.is-disabled:focus, .el-button--text.is-disabled:hover, .el-button--text:active {
      margin-left: 20px;
  }
	.filesTop {
		width: 1500px;
		margin: 0 auto;
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
  .filesSelect-sel {
    width: 105px;
    position: absolute;
    right: 10px;
    top: 8px;
  }
  .filesSelect {
    display: flex;
    position: relative;
    width: 1500px;
    margin: 0 auto;
  }
  .filesForm-query {
    width: 80px;
    height: 30px;
    position: absolute;
    right: 50px;
    bottom: 5px;
    background-color: #fff;
    border-color: #CCC;
    border-radius: 0;
    color: #666;
    font-size: 12px;
  }
  .input {
    display: flex;
    margin: 20px 0 0 0;
  }

  .filesForm {
    width: 1500px;
    display: flex;
    position: relative;
    margin: 0 auto ;
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
    background-color: #fdfdfe;
    margin: 0 auto;
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
    font-size: 14px;
    color: #666;
    font-family:'Tahoma';
    background-color: #F3F3F3;
    height: 30px;
    width: 100%;
    border: 1px solid #E4E4E4;
    padding: 15px 0 0 35px;
    text-align: left;
    margin: 5px 0 0 -5px;
  }
  .filesTop {
    width: 1500px;
    margin: 0 auto;
  }
  *{
    margin: 0;
    padding: 0;
  }
</style>
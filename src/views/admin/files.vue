<template>
		<div class="filesTop" style="width:1500px;">
			<Click></Click>
			<!-- <Tab :table-data="tableData" :page="Page"></Tab> -->
			<operateNav :Banner="banner" :radio2 = "radio2" @showbox="toshow" :i="i"></operateNav>
			<div>
	            <i></i>
	            <p class="screen">筛选查询</p>
          	</div>
            <div class="filesForm">
              <el-form class="input" ref="form" label-width="80px">
                <el-form-item label="文件名称">
                  <el-input placeholder="请输入文件名称" ></el-input>
                </el-form-item>
                <el-form-item label="院校名称">
                  <el-input placeholder="请输入院校名称" ></el-input>
                </el-form-item>
                <el-form-item label="文件年份">
                  <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
                </el-form-item>
                <el-form-item label="文件类型">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <el-button class="filesForm-query" type="primary" icon="el-icon-search" @click.native = "query">查询</el-button>
            </div>
            <div class="filesSelect">
          		<i></i>
            <!-- <div></div> -->
            	<p class="screen">数据列表</p>
            	<el-select v-model="value7" placeholder="显示条数" class="filesSelect-sel">
              <el-option-group
                v-for="group in options3"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            	</el-select>
          	</div>
          	<Table></Table>
        	<div class="footer"> 
          		<div class="footer-left">共<span>{{Page.pages}}</span>页/<span>{{Page.page}}</span>条数据</div>
          	<Page></Page>
        	</div>
		</div>
</template>
<script>
export default {
	data() {
	    return {
	    	options3: [
          	{
	            options: [{
	              value: 'Shanghai',
	              label: '10条/页'
	            }]
          	}, 
          	{
            	// label: '城市名',
	            options: [{
	              value: 'Chengdu',
	              label: '50条/页'
	            }]
          	},
          	{
            	// label: '城市名',
	            options: [{
	              value: 'Chengdu',
	              label: '100条/页'
	            }]
          	}
        	],
        	value7: '',
        	props:{Page:{
	          	// type:string,
	          	required:true,
        	}},
	        Page:{
	          pages:'',
	          page:'',
	        },
	        props:{tableData:{
	          type:Array,
	          required:true,
	        }},
         	options: [{
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
	        }],
        	value: '',
	        value1: '',
	        value2: '',
        	tabPosition: 'top',
	    	Page:'',
	    	tableData:'',
	      	isCollapse: true,
	      	radio2: "全部文件",
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
	methods: {
		toshow: function (i) {
          this.i = i;
          console.log(this.i);
        },
        getPage: function (){
        var that = this;
        axios.post('/admin/files/getUploadFile',{
        })
        .then(function (response) {
            that.Page = response.data.datas[0];
            // console.log(that.Page);
            // that.pages = response.datas.data;
        })
        .catch(function (error) {
            // console.log(error);
        });
      }
	},
	mounted(){
		this.getPage();
	}
}

</script>

<style scoped>
	.filesTop {
		width: 1500px;
		margin: 0 auto;
	}
	.el-radio-button__inner {
		/*border-left: 1px solid #dcdfe6;*/
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
    width: 1531px;
  }
  .filesForm-query {
    width: 80px;
    height: 30px;
    position: absolute;
    right: -32px;
    bottom: 5px;
    background-color: #fff;
    border-color: #CCC;
    border-radius: 0;
    color: #666;
    font-size: 12px;
  }
  .filesForm {
    display: flex;
    position: relative;
    margin: 0 0 20px 0 ;
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
    margin: 20px -5px;
  }
  .footer div {
    text-align: center;
  }
  .input {
    display: flex;
    margin: 20px 0 0 0;
  }
  .input div {
    margin-left: 10px;
  }
  .input div>div {
    margin-left: 5px;
  } 
  /*.click {*/
     /* padding: 9px 15px;
      width: 80px;
      height: 35px;
      background-color: #1ABC9C;
      border-color: #1ABC9C;*/
  /*}*/
  /*.click {*/
    /*background-color: #1ABC9C;
    opacity: 0.8;
    border-color: #1ABC9C;*/
  /*}*/
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
  *{
    margin: 0;
    padding: 0;
  }
</style>
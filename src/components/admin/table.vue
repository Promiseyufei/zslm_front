<template>
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
</template>

<script>
  export default {
    data() {
      return {
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
      }
    },
    methods: {
      gettable_info: function (){
        var that = this;
        axios.post('/admin/files/getUploadFile',{
        })
        .then(function (response) {
            var res = response.data;
            if (res.code == 0) {
                that.tableData =res.data;
            };
            console.log(that.tableData);
            // that.pages = response.datas.data;
        })
        .catch(function (error) {
            // console.log(error);
        });
      },
    },
    
    mounted(){
      this.gettable_info();
    }
  } 
</script>

<style scoped>
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
	.el-button--text, .el-button--text.is-disabled, .el-button--text.is-disabled:focus, .el-button--text.is-disabled:hover, .el-button--text:active {
	    margin-left: 20px;
	}
	
</style>
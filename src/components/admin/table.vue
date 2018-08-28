<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      fixed
      prop="date"
      label="展示权重"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="文件名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="所属院校专业"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="文件类型"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="文件年份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="主页展示"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="上传时间"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="200"
      >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>

      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '1',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '1',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '1',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '1',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style>
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
	.el-table .cell {
    	/*display: flex;*/
	}

	.el-button--small {
	    /*width: 37px;*/
	}
</style>
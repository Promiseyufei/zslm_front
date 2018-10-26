<template >
    <div>
      <!-- 表格 -->
      <div class="operateTable">
        <template>
          <el-table :data="tableData3"  border style="width: 100%" :header-cell-style="getRowClass">
            <el-table-column
              v-for="(list,index) in listTable" 
              :prop="list.prop"
              :label="list.lable"
              :width="list.width" :key = "index" v-if="index == 1">
              <template slot-scope="scope" >
                  <el-input v-model="tableData3[scope.$index].weight" @focus="focusCount(tableData3[scope.$index].show_weight)" v-on:blur="changeCount(tableData3[scope.$index].show_weight, scope.$index)"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              :prop="list.prop"
              :label="list.lable"
              :width="list.width" v-else>
            </el-table-column>
            <el-table-column
              label="操作"
              width="140">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small" @click="deleteSingle(scope.row.id, scope.row)">取消推荐</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
      return {
          TableValue: 0,
        }
    },
    props:["tableData3","listTable"],
    methods:{

        // 表单获得焦点触发事件
        focusCount: function(val) {
            this.TableValue = val;
            console.log(this.TableValue);
        },

        // 鼠标失去焦点时触发事件，val=>当前input里面的值，index=>当前行的下标
        changeCount1: function(val,index) {
            var re = /^[0-9]+.?[0-9]*$/;
            if (!re.test(val)) {
                this.message(true,'请输入数值','warning');
                this.tableData3[index].show_weight = this.TableValue;
            } else if (val<0||val>1000) {
                this.message(true,'权值范围为0~100','warning');
                this.tableData3[index].show_weight = this.TableValue;
            } else {
                this.$emit('setInfoRelation',this.tableData3[index].id, this.tableData3[index].show_weight);
            }
        },

        // 删除单个banner
        delete: function(res, row) {
          this.$emit('del',res, row);
        },
        
        handleClick: function (row) { 
            console.log(this.listTable[1].prop);
        }
    },
    mounted(){
    }
};
</script>

<style scoped>
.operateBox {
  width: 1500px;
  margin: 0 auto;
}
/*
* 选项卡样式
*/
.operateNav {
  margin: 20px 0;
}
.operateNav .el-radio-button {
  margin-right: 10px;
}
/*
* 右边上传banner内容样式
*/
.operateUpfilesRight .upload-demo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.operateUpfilesRight .el-upload__tip {
  margin-left: 20px;
  margin-bottom: 8px;
  display: none;
}
.operateUpfiles {
  border: 1px solid #e4e4e4;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
.operateHeader {
  border-bottom: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e4e4e4;
  color: #666;
}
.operateHeader .el-button {
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 10px;
}
.operateHeader>p {
  margin-left: 20px;
  font-weight: bold;
}
.operateUp {
  border-bottom: none;
}
.operateDown {
  border-top: none;
}
.operateUpfilesLeft {
  background-color: #fcfcfc;
  border-right: 1px solid #e4e4e4;
  width: 159px;
}
.operateUpfilesLeft>div {
  background: url(../../assets/img/point.png) no-repeat;
  position: relative;
  top: 50px;
  left: 0;
  width: 180px;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.operateUpfilesRight {
  padding: 50px 80px;
  width: 1170px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
}
.operateUpfilesRight .el-input {
  width: 360px;
}
.operateUpfilesRight form {
  margin-top: 50px;
}
.operateUpfilesRight button {
  float: right;
}
.operateUpfilesRightImg {
  width: 640px;
  height: 170px;
  overflow: hidden;
  margin-top: 20px;
}
.operateUpfilesRightImg>img {
  max-width: 100%;
  max-height: 100%;
}


/*
* 右边当前banner内容样式
*/

.operateUpfilesRight2 {
  padding: 40px 90px 40px 80px;
  width: 1170px;
}
.operateUpfilesRight2Nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #666;
  font-size: 14px;
}
.operateTable {
  margin-top: 25px;
}
</style>


<template >
    <div class="operateBox">
        <!-- 中间内容 -->
    	<div>
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>运行管理</el-breadcrumb-item>
            <el-breadcrumb-item>资讯频道首页推荐</el-breadcrumb-item>
            <el-breadcrumb-item>添加推荐</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 返回按钮 -->
          <div class="addadviseBtn">
              <el-button type="success" plain>返回</el-button>
          </div>
          
          <div class="operateUpfiles operateHeader">
            <p><i class="fa fa-filter"></i> 筛选查询</p>
          </div> 

          <!-- 筛选框 -->
          <div class="addadviseSelect">
              <div class="addadviseInput">
                  <el-form ref="form" :model="form" label-width="120px">
                      <el-form-item label="资讯类型">
                        <el-select v-model="form.region" clearable placeholder="全部">
                          <el-option :label="list.name" :value="list.id" v-for="(list,i) in banner" :key = "i"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="资讯标题">
                        <el-input v-model="form.message" placeholder="输入关键字"></el-input>
                      </el-form-item>
                  </el-form>
              </div>
              <el-button type="info" plain @click=""><i class="fa fa-search fa-fw"></i>查询</el-button>
          </div>

          <!-- 筛选头部 -->
          <div class="operateUpfiles operateHeader">
            <p><i class="fa fa-bars"></i> 资讯列表</p>
            <!-- <el-select v-model="count" placeholder="筛选条数">
                <el-option
                  v-for="item in count2"
                  :key="item.number"
                  :label="item.number"
                  :value="item.number">
                </el-option>
            </el-select> -->
          </div>
            <!-- 表格 -->
            <div class="operateTable">
                <template>
                  <el-table :data="tableData3"  border style="width: 100%" ref="order"  @selection-change="handleSelectionChange">
                    <el-table-column
                      type="selection"
                      width="55">
                    </el-table-column>
                    <el-table-column
                      v-for="(list,index) in listTable" 
                      :prop="list.prop"
                      :label="list.lable"
                      :width="list.width" :key = "index">
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width="140">
                      <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small" @click="addadviseSelect(scope.row)">选中</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
            </div>

            <div class="addadviseblock">
                <el-pagination
                    background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="1000">
                </el-pagination>
            </div>

            <!-- 已选资讯 -->
            <div class="operateUpfiles operateHeader">
                <p><i class="fa fa-window-restore"></i> 已选资讯</p>
            </div>

            <!-- 选中状态 -->
            <div class="operateTable">
                <template>
                  <el-table :data="tableData"  border style="width: 100%">
                    <el-table-column
                      v-for="(list,index) in listTable2" 
                      :prop="list.prop"
                      :label="list.lable"
                      :width="list.width" :key = "index">
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width="180">
                      <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small" @click="delectSelect(scope.row)">取消选中</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
            </div>

            <!-- 加入推荐按钮 -->
            <div style="text-align:center;" class="addadviseFinish">
                <el-button type="primary">加入推荐</el-button>
            </div>
        
    	</div>
    	
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
      return {
          id: this.$route.params.id,
          form: {
            region: '',
            message: ''
          },
          banner: [],
          count: 100,
          page: 5,
          sort: 0,
          count2: [
                {
                    number: 10
                },
                {
                    number: 100
                },
                {
                    number: 200
                }
          ],
          listTable: [
              {
                prop: "id",
                lable: "编号",
                width: "250px"
              },
              {
                prop: "z_type",
                lable: "资讯类型",
                width: "350px"
              },
              {
                prop: 'name',
                lable: '资讯标题',
                width: "354px"
              },
              {
                prop: "create_time",
                lable: "上传时间",
                width: "350px"
              }
          ],
          listTable2: [
              {
                prop: "id",
                lable: "编号",
                width: "250px"
              },
              {
                prop: "z_type",
                lable: "资讯类型",
                width: "350px"
              },
              {
                prop: 'name',
                lable: '资讯标题',
                width: "369px"
              },
              {
                prop: "create_time",
                lable: "上传时间",
                width: "350px"
              }
          ],
          // 表格默认数据
          tableData3: [],
          tableData: [],
          currentPage3: 5,
        }
    },
    methods:{
        delectSelect: function(row) {
            this.$refs.order.toggleRowSelection(row,false);
        },
        addadviseSelect: function(row) {
            if (row) {
                this.$refs.order.toggleRowSelection(row,true);
            } else {
              this.message(true,'不能重复选择！','warning');
            }
        },

        handleSelectionChange(val) {
            this.tableData = val;
            this.multipleSelection = val;
        },
        // 每页显示条数改变时触发事件
        handleSizeChange: function(val) {
            this.count = val;
            this.getIndexBanner();
            console.log(`${val} items per page`);
        },
        // 点击小分页触发事件
        handleCurrentChange: function(val) {
            this.page = val;
            this.getIndexBanner();
            console.log(`current page: ${val}`);
        },
        // 获取所有资讯类型
        getInformationType: function() {
          var self = this;
          axios.post('/admin/operate/getInformationType', {
          })
          .then(function (response) {
            var date = response.data;
            if (date.code == 0) {
              self.banner = date.data;
            };
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        // 获取咨询列表添加分页数据
        getIndexBanner: function() {
          var self = this;
          // var pageCount = 0;
          // if (self.count != '') {
          //   pageCount = self.count;
          // };

          axios.post('/admin/operate/getInformPagingData', {
            informationTypeId: self.form.region,
            titleKeyword: self.form.message,
            pageCount: self.count,
            pageNumber: self.page,
            sortType: self.sort
          })
          .then(function (response) {
            var date = response.data;
            if (date.code == 0) {
              var res = date.data;
              self.tableData3 = res;
            };
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    },
    mounted(){
      this.getInformationType();
      this.getIndexBanner();
    }
}
</script>
<style>
    .operateTable .has-gutter th {
        background-color: #ebeef5 !important;
    }
</style>

<style scoped>
    .operateBox {
      width: 1500px;
      margin: 0 auto;
    }

    /*返回按钮*/
    .addadviseBtn {
        margin: 20px 0;
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
    .operateHeader>p {
      margin-left: 20px;
      font-weight: bold;
    }

    /*筛选框*/
    .addadviseSelect {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 10px 20px 0;
    }
    .addadviseInput .el-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .addadviseInput .el-form-item {
        margin-bottom: 0;
    }

    /*分页*/
    .addadviseblock {
        background-color: #fff;
        border-color: 1px solid #e4e4e4;
        padding: 10px 20px;
        margin: 20px 0;
        text-align: right;
    }

    /*加入推荐按钮*/
    .addadviseFinish {
        background-color: #e4e4e4;
        padding: 20px 0;
    }
</style>
<template >
    <div class="operateBox">
        <!-- 中间内容 -->
    	<div>
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
                <el-breadcrumb-item>消息管理</el-breadcrumb-item>
                <el-breadcrumb-item>发消息</el-breadcrumb-item>
                <el-breadcrumb-item  class="selectedNavPublic">设置消息对象</el-breadcrumb-item>
                <el-breadcrumb-item>选择关联活动</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 返回按钮 -->
          <div class="addadviseBtn">
              <el-row>
                <el-button @click.native="$router.push('/admin/send/sendHome')">返回</el-button>
              </el-row>
          </div>
          
          <div class="operateUpfiles operateHeader">
            <p><i class="fa fa-filter"></i> 筛选查询</p>
          </div> 

          <!-- 筛选框 -->
          <div class="addadviseSelect">
              <div class="addadviseInput">
                  <el-form ref="form" :model="form" label-width="120px">
                      <el-form-item label="推荐状态">
                        <el-select v-model="form.region" clearable placeholder="全部">
                          <el-option :label="list.name" :value="list.id" v-for="(list,i) in banner" :key = "i"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="活动名称">
                        <el-input v-model="form.message" placeholder="输入关键字"></el-input>
                      </el-form-item>
                  </el-form>
              </div>
              <el-button type="info" plain @click="getAllActivity" size="small"><i class="fa fa-search fa-fw"></i>查询</el-button>
          </div>

          <!-- 筛选头部 -->
          <div class="operateUpfiles operateHeader">
            <p><i class="fa fa-bars"></i> 活动列表</p>
          </div>
            <!-- 表格 -->
            <div class="operateTable">
                <template>
                  <el-table :data="tableData3"  border style="width: 100%" ref="order"  @selection-change="handleSelectionChange" :header-cell-style="getRowClass">
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
                        <el-button @click="$router.push('/admin/message/activity/' + scope.row.id)" type="text" size="small">查看</el-button>
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
                  :total="total">
                </el-pagination>
            </div>

            <!-- 已选资讯 -->
            <div class="operateUpfiles operateHeader">
                <p><i class="fa fa-window-restore"></i> 已选活动</p>
            </div>

            <!-- 选中状态 -->
            <div class="operateTable">
                <template>
                  <el-table :data="tableData"  border style="width: 100%" :header-cell-style="getRowClass">
                    <el-table-column
                      v-for="(list,index) in listTable"
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
                <el-button type="primary" @click="setInfoRecommend">加入推荐</el-button>
            </div>
        
    	</div>
    	
    </div>
</template>

<script>
export default {
    
    data() {
      return {
          id: this.$route.params.id,
          form: {
            region: '',
            message: ''
          },
          banner: [
              {'id':0,'name':'推荐'},
              {'id':1,'name':'不推荐'},
              {'id': 2, 'name':'全部'}
          ],
          total: 0,
          count: 100,
          page: 1,
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
                lable: "活动编号",
                width: "250px"
              },
              {
                prop: "active_name",
                lable: "活动名称",
                width: "350px"
              },
              {
                prop: 'address',
                lable: '活动地址',
                width: "354px"
              },
              {
                prop: "update_time",
                lable: "更新时间",
                width: "350px"
              }
          ],
          // 表格默认数据
          tableData3: [],
          tableData: [],
          currentPage3: this.page,
          infoIdArr:[]
        }
    },
    methods:{

        //从选中表格中删除指定的资讯
        delectSelect: function(row) {
            this.$refs.order.toggleRowSelection(row,false);
        },

        //显示将要添加咨询表格
        addadviseSelect: function(row) {
          this.$refs.order.toggleRowSelection(row,true);
        },

        handleClick(val){
          this.$router.push('/admin/message/activity/' + val.id);
        },
        //获得需要添加的资讯的id数组
        handleSelectionChange(val) {
            this.tableData = val;
            this.infoIdArr = [];
            var self = this;
            if(val.length > 0) {
              val.forEach((item) => {
                self.infoIdArr.push({id: item.id, active_name: item.active_name});
              });
            }
            self = undefined;
        },
        
        //向指定区域添加相关咨讯
        setInfoRecommend: function() {
			if(this.infoIdArr.length == 0) {
				this.message(true, '没有选择要选中的活动', 'warning');
				return false;
            }
            this.$router.push({
                name:'/send/setMessageObject',
                params: {
                    seActivity: this.infoIdArr
                }
            })
        },

        // 每页显示条数改变时触发事件
        handleSizeChange: function(val) {
            this.count = val;
            this.getAllActivity()
        },

        // 点击小分页触发事件
        handleCurrentChange: function(val) {
            this.page = val;
            this.getAllActivity()
        },

        // 获取所有活动
        getAllActivity: function() {
          var self = this;
          this.post('/admin/information/getActivityMessage', {
              screenType:0,
              activityState:3,
              sortType:2,
              screenState: self.form.region == '' ? this.banner[2].id : self.form.region,
              activityNameKeyword:self.form.message,
              pageCount: self.count,
              pageNumber: self.page,
          })
              .then(function (response) {
                  // response = response.data;
                  if (response.code == 0) {
                      self.tableData3 = response.result[0];
                      self.total = response.result[1];
                  }else {
                      self.message(true, response.msg, 'error');
                  }
                  load.close();
              })
              .catch(function (error) {
                  load.close();
              });
        },

        // 获取咨询列表添加分页数据
    },
    mounted(){
      this.getAllActivity();
    }
}
</script>
<style>
    .operateTable .has-gutter th {
        background-color: #ebeef5 !important;
    }
    .operateTable .cell {
      text-align: center;
      font-size: 12px;
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
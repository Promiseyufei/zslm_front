<template>
    <div class="informationList">
        <!-- 面包屑 -->
        <div class="informationList-crumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">信息发布</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">资讯发布</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 新建按钮 -->
        <div class="informationList-newbuild">
            <el-button type="primary" size="medium" @click.native = "jumpPage">新建</el-button>
        </div>

        <!-- 筛选查询   刷新按钮需要获得表格数据-->
        <div class="informationList-query">
            <i class="el-icon-search"></i>
            <p>筛选查询</p>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="informationList-refresh" @click.native = "gettableInfo">刷新</el-button>
        </div> 

        <!-- 查询输入框   输入框向后台传参，查询按钮需要获得表格数据-->
        <div class="informationList-form">
            <el-form class="informationList-input" label-width="80px">
                <el-form-item label="资讯标题" >
                    <el-input size="medium" v-model="informationTitle" placeholder="输入文件名称"></el-input>
                </el-form-item>
                <el-form-item v-for="(item, index) in input" :key="index" :label="item.title">
                    <el-select size="medium" v-model="item.content" placeholder="全部">
                      <el-option v-for="(select, index) in options" :key="index" :label="select.option" :value="select.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button size="mini" type="primary" icon="el-icon-search" class="informform-search" @click.native = "gettableInfo">查询</el-button>
        </div>

        <!-- 内容列表   默认顺序需向后台传参-->
        <div class="informationList-contentlist">
            <i class="el-icon-tickets"></i>
            <p>内容列表</p>
            <!-- <div></div> -->
            <el-select size="mini" class="information-sort" v-model="Sort" placeholder="默认顺序">
                <el-option v-for="item in sort" :key="item.value" :label="item.label" :value="item.value" @click.native = "gettableInfo">
                </el-option>
            </el-select>
        </div>

        <!-- 表格    需获得表格数据-->
        <div class="information-table">
            <el-table :data="informationListtTable" @current-change="handleCurrentChange" border style="width: 100%">
                <el-table-column type="selection" width="60"></el-table-column>
                <el-table-column label="编号" prop="id" width="100"></el-table-column>
                <el-table-column label="展示权重" width="80">
                    <template slot-scope="scope">
                        <el-input v-model="informationListtTable[scope.$index].showweight"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="展示状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="informationListtTable[scope.$index].showstate"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="推荐状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="informationListtTable[scope.$index].advicestate" active-color="#999" inactive-color="#409eff">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <div class="majorlist-icon">
                            <i class="el-icon-search"></i>
                            <i class="el-icon-edit-outline"></i>
                            <i class="el-icon-delete" @click.native.prevent="deleteRow(scope.$index, informationListtTable)"></i>
                        </div>
                    </template>
                </el-table-column>
                <div v-for="(val, index) in tableTop" :key="index">
                  <el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
                  </el-table-column>
                </div>
            </el-table>
        </div>
        <div class="footer"> 
            <el-button size="mini" icon="el-icon-delete">删除</el-button>
            <Page :total="total" @pageChange="pageChange" @click.native = "gettableInfo"></Page>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                /*查询输入框*/
                informationTitle:'',
                input:[
                    {title:'展示状态',content:''},
                    {title:'推荐状态',content:''},
                    {title:'资讯类型',content:''}
                ],
                options:[
                    {label:'请选择',value:'类型一'},
                    {label:'请选择',value:'类型二'},
                    {label:'请选择',value:'类型三'},
                ],
                /*默认顺序*/
                Sort:'',
                sort: [
                    {
                      value: '选项1',
                      label: '时间'
                    }, 
                    {
                      value: '选项2',
                      label: '资讯类型'
                    }, 
                    {
                      value: '选项3',
                      label: '资讯来源'
                    }
                ],
                /*表格*/
                tableTop:[
                  {prop:'informTitle',label:'资讯标题',width:520},
                  {prop:'informState',label:'资讯类型',width:100},
                  {prop:'informSource',label:'资讯来源',width:160},
                  {prop:'onlineTime',label:'发布时间',width:160},
                ],
                informationListtTable:[{
                  id:'',
                  showweight:'',
                  showstate:true,
                  advicestate:'',
                  informTitle:'',
                  informState:'',
                  informSource:'',
                  onlineTime:'',
                }],
                /*分页*/
                total:0,
                searchContent:{
                    page:'',
                    limit:'',
                },  
            }
        },
        methods:{
            jumpPage:function(){
                this.$router.push('/message/changeMessage');
            },
            /*删除表格某一行*/
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            /*分页  获得当前页码和总页数*/
           pageChange(msg) {
                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            // changeCount: function(val,index) {
            //   var re = /^[0-9]+.?[0-9]*$/;
            //   if (!re.test(val)) {
            //     this.message(true,'请输入数值','warning');
            //     this.tableData3[index].show_weight = this.inputval;
            //     // console.log(this.show_weight[index]);
            //   } else if (val<0||val>1000) {
            //     this.message(true,'权值范围为0~100','warning');
            //     this.tableData3[index].show_weight = this.inputval;
            //   } else {
            //     this.$confirm('此操作将修改该图片的权值, 是否继续?', '提示', {
            //       confirmButtonText: '确定',
            //       cancelButtonText: '取消',
            //       type: 'warning'
            //     }).then(() => {
            //       this.$message({
            //         type: 'success',
            //         message: '修改成功!'
            //       });
            //     }).catch(() => {
            //       this.tableData3[index].show_weight = this.inputval;
            //       this.$message({
            //         type: 'info',
            //         message: '已取消修改'
            //       });          
            //     });
            //   }
            // },
            focusCount:function(){
                this.input = val;
                console.log(this.TableValue);
            },
            gettableInfo:function(){
                var that = this;
                axios.post('/message/informationList/gettableInfo',{
                    // type: that.filesForm.type,
                    // name1: that.filesForm.name1,
                    // input: that.input,
                })
                .then(function (response) {
                    // that.page++;
                    var res = response.data;
                    if (res.code == 0) {
                        that.informationListtTable = res.data;
                        that.total = res.total;
                        // that.weight = res.weight;
                        // that.id = res.id;
                        // that.input = res.input;
                        console.log(that.id);
                    };
                })
                .catch(function (error) {
                    // console.log(error);
                });
            }
        },
        mounted(){
            this.gettableInfo();
        },
    }

</script>

<!-- 全局样式 -->
<style>
    /*表格滚动条*/
    .information-table .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    /*表头文本居中*/
    .information-table .el-table th.is-leaf {
        text-align: center;
    }
    .footer .el-button--mini {
      margin: 0 0 0 20px;
    }
    .information-table .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
        padding-left: 0;
    }
</style>

<!-- 局部样式 scoped -->
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
        height: 50px;
        background-color: #fdfdfe;
        margin: 20px auto;
        display: flex;
        align-items:center;
        justify-content:space-between;
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
    .majorlist-icon i {
        margin: 0 5px;
    }
    .majorlist-icon {
        display: flex;
        justify-content:center;
        font-size: 18px;
        color: #999;
    }
    .information-table .el-input {
        width: 40px;
    }
    .information-table {
        width: 1500px;
        margin: 0 auto;
        text-align: center;
    }
    .information-sort {
        position: absolute;
        right: 10px;
        width: 100px;
    }
    .informationList-input {
        display: flex;
    }
    .informationList-form {
        display: flex;
        position: relative;
        width: 1500px;
        margin: 20px auto 0;
        padding: 0 0 0 30px;
    }
    .informationList-refresh,.informform-search {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666; 
        background-color: #fff; 
        border:1px solid #CCC;
        border-radius:0;
    }
    .informform-search {
        right: 25px;
    }
    .informationList-query p,.informationList-contentlist p {
        font-size: 16px;
        color: #666;
        font-weight: bold;
    }
    .informationList-query i,.informationList-contentlist i {
        padding: 0 5px 0 10px;
    }
    .informationList-query,.informationList-contentlist {
        position: relative;
        display: flex;
        align-items:center;
        width: 1500px;
        height: 50px;
        background:#f3f3f3;
        margin: 0 auto;
    }
    /*新建按钮*/
    .informationList-newbuild {
        margin: 20px auto;
        width: 1500px;
    }
    /*面包屑*/
    .informationList-crumb p {
        font-size: 10px;
        color: #999;
    }
    .informationList-crumb {
        display: flex;
        margin: 0 auto;
        width: 1500px;
    }
</style>

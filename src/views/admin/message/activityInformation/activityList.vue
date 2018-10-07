<template>
    <div class="majorlist">
        <div class="majorlist-top">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">信息发布</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动信息</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="majorlist-button">
            <el-button type="primary" @click.native = "jumpPage">新建</el-button>
        </div>
        <div class="majorlist-query">
            <i class="el-icon-search"></i>
            <p>筛选查询</p>
            <div></div>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="majorlist-queryrefresh" @click.native = "gettableInfo">刷新</el-button>
        </div> 
        <div class="majorlist-form">
            <el-form class="majorlist-input" label-width="80px">
                <el-form-item label="院校专业">
                    <el-input size="medium" v-model="name" placeholder="输入文件名称"></el-input>
                </el-form-item>
                <el-form-item label="展示状态">
                    <el-select size="medium" v-model="type1" placeholder="全部">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="推荐状态">
                    <el-select size="medium" v-model="type2" placeholder="全部">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动状态">
                    <el-select size="medium" v-model="type3" placeholder="全部">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button size="mini" type="primary" icon="el-icon-search" class="majorlist-queryrefresh" @click.native = "gettableInfo">查询</el-button>
        </div>
        <div class="majorlist-list">
            <i class="el-icon-tickets"></i>
            <p>内容列表</p>
            <div></div>
            <el-select size="mini" class="majorlist-selectone" v-model="value" placeholder="显示条数">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native = "gettableInfo">
                </el-option>
            </el-select>
        </div>
        <div class="majorlist-table">
            <el-table :data="majorlisttable" @current-change="handleCurrentChange" border style="width: 100%">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="编号" prop="id" width="100"></el-table-column>
                <el-table-column label="展示权重" width="100">
                    <template slot-scope="scope">
                        <el-input v-model="majorlisttable[scope.$index].weight"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="展示状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].value2"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="推荐状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].value3" active-color="#999" inactive-color="#409eff">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <div class="majorlist-icon">
                            <i class="el-icon-search"></i>
                            <i class="el-icon-edit-outline"></i>
                            <i class="el-icon-delete"></i>
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
                /*分页*/
                total:0,
                searchContent:{
                    page:'',
                    limit:'',
                },
                // currentPage4:2,
                // msg:0,
                // count:0,
                // number:0,
                tableTop:[
                  {prop:'name',label:'活动名称',width:380},
                  {prop:'project',label:'活动类型',width:80},
                  {prop:'project',label:'活动省市',width:80},
                  {prop:'project',label:'主办院校',width:160},
                  {prop:'project',label:'报名状态',width:80},
                  {prop:'time',label:'发布时间',width:160},
                ],
                majorlisttable:[{
                  weight:'',
                  id:'',
                  name:'',
                  project:'',
                  time:'',
                  value2:true,
                  value3:'',
                }],
                value:'',
                // input:'',
                name:'',
                type1:'',
                type2:'',
                type3:'',
                options: [
                    {
                      value: '选项1',
                      label: '10条'
                    }, 
                    {
                      value: '选项2',
                      label: '50条'
                    }, 
                    {
                      value: '选项3',
                      label: '100条'
                    }
                ],
            }
        },
        methods:{
            jumpPage:function(){
                this.$router.push('/message/activityInformation/Activity');
            },
            pageChange(msg) {
                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            
            focusCount:function(){
                this.input = val;
                console.log(this.TableValue);
            },
            gettableInfo:function(){
                var that = this;
                axios.post('/message/activityList/gettable-info',{
                    // type: that.filesForm.type,
                    // name1: that.filesForm.name1,
                    // input: that.input,
                })
                .then(function (response) {
                    // that.page++;
                    var res = response.data;
                    if (res.code == 0) {
                        that.majorlisttable = res.data;
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
    .majorlist-table .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    /*表头文本居中*/
    .majorlist-table .el-table th.is-leaf {
        text-align: center;
    }
    .footer .el-button--mini {
      margin: 0 0 0 20px;
    }
    .majorlist-table .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
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
    .majorlist-table .el-input {
        width: 40px;
    }
    .majorlist-table {
        width: 1500px;
        margin: 0 auto;
        text-align: center;
    }
    .majorlist-selectone {
        position: absolute;
        right: 10px;
        width: 100px;
    }
    .majorlist-input {
        display: flex;
    }
    .majorlist-form {
        display: flex;
        position: relative;
        width: 1500px;
        margin: 20px auto 0;
    }
    .majorlist-queryrefresh {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666; 
        background-color: #fff; 
        border:1px solid #CCC;
        border-radius:0;
    }
    .majorlist-query p,.majorlist-list p {
        font-size: 16px;
        color: #666;
        font-weight: bold;
    }
    .majorlist-query i,.majorlist-list i {
        padding: 0 5px 0 10px;
    }
    .majorlist-query,.majorlist-list {
        position: relative;
        display: flex;
        align-items:center;
        width: 1500px;
        height: 50px;
        background:#f3f3f3;
        margin: 0 auto;
    }
    .majorlist-button {
        margin: 20px auto;
        width: 1500px;
    }
    .span {
        margin: 10px 6.5px;
    }
    .majorlist-top p {
        font-size: 10px;
        color: #999;
    }
    .majorlist-top {
        display: flex;
        margin: 0 auto;
        width: 1500px;
    }
</style>

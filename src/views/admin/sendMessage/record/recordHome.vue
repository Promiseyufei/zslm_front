<template>
    <div class="filesAll">
        <!-- 面包屑 -->
        <div class="recordHomeBread">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>信息发布</el-breadcrumb-item>
              <el-breadcrumb-item  class="selectedNavPublic">院校专业</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 筛选查询 -->
        <div class="recordHomeQuery"> 
            <i class="el-icon-search"></i>
            <p class="screen">筛选查询</p>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="refreshBut" @click.native = "Refresh">刷新</el-button>
        </div>

        <!-- 查询输入框 -->
        <div class="recordHomeForm">
           <div>
                <el-form class="input" >
                    <el-form-item label="从">
                        <el-date-picker v-model="startTime" type="date" placeholder="选择日期" default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="到">
                        <el-date-picker v-model="overTime" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="消息内容" label-width="180px">
                        <el-input v-model="messageCont" size="medium" placeholder="输入"></el-input>
                    </el-form-item>
                </el-form>  
           </div>
           <el-button class="queryBut" type="primary" icon="el-icon-search" @click.native="query">查询</el-button> 
        </div>

        <!-- 数据列表 -->
        <div class="recordHomeDatalist">
            <i class="el-icon-tickets"></i>
            <p class="screen">账户列表</p>
        </div>

        <!-- 表格 -->
        <div class="recordHomeTable">
              <el-table :data="tableData" border style="width: 100%">
                  <el-table-column label="操作" width="210">
                      <template slot-scope="scope">
                          <div class="recordHome-icon">
                            <i @click="jumpPage(scope.row.id)" class="el-icon-search"></i>
                          </div>
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
            <singlePage :currentPage="currentPage" :totalData="totalData"></singlePage>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                /*查询输入框*/
                startTime:'',
                overTime:'',
                messageCont: '',
                
                /*表格*/
                tableTop:[
                    {type:'',prop:'id',label:'消息ID',width:150},
                    {type:'',prop:'carrier',label:'消息类型',width:150},
                    // {type:'',prop:'messageObject',label:'消息对象',width:150},
                    {type:'',prop:'create_time',label:'发送时间',width:200},
                    {type:'',prop:'success',label:'发送状态',width:100},
                    {type:'',prop:'news_title',label:'消息内容',width:690},
                ],
                tableData:[],

                /*分页*/
                currentPage:1,
                totalData:0,
                size: 10
            }
        },
        methods: {
            //跳转页面
            jumpPage:function(newsId) {
                this.$router.push('/record/recordDetail/' + newsId);
            },
            //进入页面自动调用
            intoPage: function(){
                var that = this;
                this.post('/admin/news/getScreenNews',{
                    newTitleKeywords: null,
                    startTime: this.startTime,
                    endTime: this.overTime,
                    pageCount: this.size,
                    pageNumber: this.currentPage
                })
                .then(function (response) {
                    if(response.code == 0) {
                        that.totalData = response.result.total;
                        that.tableData = response.result.his_news;
                    }
                    else
                        this.message(true, response.msg, 'error');
                })
                .catch(function (error) {
                });
            },            //查询按钮函数
            query: function(){
                this.intoPage();
            },
            //刷新按钮函数
            Refresh: function() {
                this.startTime = '',
                this.overTime = '',
                this.messageCont = '',
                this.tableData = [];
                this.currentPage = 1;
                this.totalData = 0;
                this.intoPage();
            }
        },
        mounted(){
            this.intoPage();
        }
  }

</script>


<!-- 全局样式 -->
<style>
    .recordHomeForm .input .el-form-item__label {
        width: 37px;
    }
    .recordHomeForm .input .el-form-item__content {
        margin-left: 37px;
    }
    /*表格滚动条*/
    .recordHomeTable .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    .recordHomeTable .el-input__inner {
        width: 60px;
        text-align: center;
    }
    /*表头文本居中*/
    .recordHomeTable .el-table th.is-leaf {
        text-align: center;
    }
    /*分页右间距*/
    .footer .el-pagination[data-v-09f3e8a6] {
        /*padding-right: 20px;*/
    }
</style>

<style scoped>
    .footer {
        border: 1px solid #E4E4E4;
        text-align: right;
        width: 1500px;
        height: 50px;
        background-color: #fdfdfe;
        margin: 20px auto;
        display: flex;
        align-items:center;
        justify-content:flex-end;
    }
    /* 表格样式 */
    .recordHomeTable {
        width: 1500px;
        margin: 0 auto;
        text-align: center;
    }
    .recordHome-icon {
        cursor: pointer;
        font-size: 20px;
        color: #999;
    }
    .recordHome-icon i {
        cursor: pointer;
    }

    /*刷新、查询按钮*/
    .refreshBut {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666; 
        background-color: #fff; 
        border:1px solid #CCC;
        border-radius:0;
    }
    .queryBut {
        position: absolute;
        right: 10px;
        bottom: 25px;
        background-color: #fff;
        border-color: #CCC;
        border-radius: 0;
        color: #666;
        font-size: 12px;
    } 
    .el-button--primary {
        padding: 9px 15px;
    }
    .el-button--primary:hover {
        background-color: #1ABC9C;
        opacity: 0.8;
        border-color: #1ABC9C;
    }
    .recordHomeForm {
        width: 1500px;
        display: flex;
        position: relative;
        margin: 0 auto 20px;
    }
    .recordHomeQuery,.recordHomeDatalist {
        width: 1500px;
        height: 50px;
        margin: 0 auto;
        background-color: #F3F3F3;
        position: relative;
        display: flex;
        align-items:center;
    }
    .recordHomeQuery i,.recordHomeDatalist i {
        padding: 0 5px 0 10px;
    }
    .input {
        display: flex;
        margin: 20px 0 0 0;
    }
    .screen {
        font-weight: bold;
        font-size: 16px;
        color: #666;
        font-family:'Tahoma';
    }
    /*面包屑*/
    .recordHomeBread p {
        font-size: 10px;
        color: #999;
    }
    .recordHomeBread {
        display: flex;
        margin: 0 auto 20px;
        width: 1500px;
    }
    
</style>
<template>
    <div class="Select">
        <div class="choiceActivity-top">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>信息发布</el-breadcrumb-item>
              <el-breadcrumb-item>辅导机构</el-breadcrumb-item>
              <el-breadcrumb-item>相关活动设置</el-breadcrumb-item>
              <el-breadcrumb-item class="selectedNavPublic">选择活动</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="choiceActivity-button">
            <el-button size="medium">返回</el-button>
        </div>
        <div class="choiceActivity">
            <div class="choiceActivity-left">
                <div class="leftImg">
                    <i class="el-icon-view"></i>
                    <p>选择活动</p>
                </div>
            </div>
            <div class="choiceActivity-right">
                <div class="rightTop">
                    <el-form class="inputone" label-width="80px"> 
                        <el-form-item label="活动名称">
                            <el-input size="medium" v-model="ruleForm.name" placeholder="输入文件名称"></el-input>
                        </el-form-item>
                        <el-form-item label="展示状态">
                            <el-select size="medium" v-model="ruleForm.showstate" placeholder="全部">
                                <el-option label="展示" :value="0"></el-option>
                                <el-option label="不展示" :value="1"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="推荐状态">
                            <el-select size="medium" v-model="ruleForm.advicestate" placeholder="全部">
                                <el-option label="推荐" :value="0"></el-option>
                                <el-option label="不推荐" :value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <el-form class="inputtwo" label-width="80px">
                        <el-form-item label="报名状态">
                            <el-select v-model="ruleForm.status" placeholder="请选择状态" >
                                <el-option label="可报名" :value="0"></el-option>
                                <el-option label="不可报名" :value="1"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="活动类型">

                            <el-select v-model="ruleForm.type" placeholder="请选择活动类型" >
                                <el-option :label="item.name" :value="item.id" v-for="(item, index) in actType"
                                           :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="活动省">
                            <el-select v-model="ruleForm.region" placeholder="请选择活动区域" >
                                <el-option :label="item.name" :value="item.id" v-for="(item, index) in province"
                                           :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <el-button size="mini" type="primary" icon="el-icon-search" class="choiceActivity-queryrefresh" @click.native = "gettableInfo">查询</el-button>
                </div>
                <div class="majorlist-list">
                    <i class="el-icon-news"></i>
                    <p>活动信息</p>
                    <el-select size="mini" class="majorlist-selectone" v-model="value" placeholder="默认顺序">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native = "gettableInfo">
                        </el-option>
                    </el-select>
                </div>
                <el-table :data="majorlisttable"
                          @selection-change="handleSelectionChange"
                          @current-change="handleCurrentChange" border style="width: 1160px" :header-cell-style="{background:'#f9fafc'}">
                    <el-table-column type="selection" width="60"></el-table-column>
                    <el-table-column label="操作" width="80">
                        <template slot-scope="scope">
                            <div class="majorlist-icon">
                                <i v-for="(val, index) in iconname" :key="index" :class="val.name"></i>
                            </div>
                        </template>
                    </el-table-column>
                    <div v-for="(val, index) in tableTop" :key="index">
                      <el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
                      </el-table-column>
                    </div>
                </el-table>
                <div class="page"> 
                    <Page :total="total" @pageChange="pageChange" @click.native = "gettableInfo"></Page>
                </div>
            </div>
        </div>
        <div class="footer">
            <span class="footerSelected">当前已选择：<span class="footerMajorname">{{majorname}}</span></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                /*分页*/
                total: 0,
                searchContent:{
                    page:1,
                    limit:5,
                },
                string:"请选择",
                ruleForm: {
                    name: "",
                    type: 0,
                    region: "",
                    spaticalType:"",
                    status: "",
                    showstate:"",
                    advicestate:""
                },
                /*当前选择*/
                majorname:'',
                /*查询输入框*/
                activityname:'',
                showstate:'',
                advicestate:'',
                activitystate:'',
                activitytype:'',
                activitycity:'',
                value:'',
                /*表格排序*/
                options: [
                    {
                      value: '选项1',
                      label: '时间'
                    }, 
                    {
                      value: '选项2',
                      label: '编号'
                    }, 
                    {
                      value: '选项3',
                      label: '报名状态'
                    }
                ],
                /*操作图标*/
                iconname:[
                    {name:'el-icon-search'},
                    {name:'el-icon-edit-outline'},
                ],
                /*表格循环*/
                multipleSelection:[],
                tableTop:[
                    {prop:'id',label:'编号',width:80},
                    {prop:'recommended_state',label:'推荐状态',width:80},
                    {prop:'show_state',label:'显示状态',width:80},
                    {prop:'active_name',label:'活动名称',width:380},
                    {prop:'active_type',label:'活动类型',width:80},
                    {prop:'province',label:'活动省市',width:80},
                    {prop:'recommended_state',label:'主办院校',width:160},
                    {prop:'sign_up_state',label:'报名状态',width:80},
                ],
                /*表格数据*/
                majorlisttable:[{
                    id:'',
                    adviceState:'',
                    showState:'',
                    activityName:'',
                    activityType:'',
                    activityCity:'',
                    mainUnivers:'',
                    joinType:'',
                }],
                province: [],
                // 专业字典
                major: [],
                city: [],
                actType: [],
            };
        },
        methods: {
            handleCurrentChange(val) {
                this.currentRow = val;

            },
            pageChange(msg) {
                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            info: function () {
                let self = this;
                this.fetch('/admin/information/getpageinfo')
                    .then(res => {
                        console.log(res)
                        if (res.code == 0) {
                            self.province = res.result['provice'];
                            self.major = res.result['major'];
                            self.city = res.result['city'];
                            self.actType = res.result['type']


                        } else {

                        }
                    })
                    .catch(error => {

                    })


            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            },
            postT(){
                let selectId = "";//存放删除的数据
                for (var i = 0; i < that.multipleSelection.length-1; i++) {
                    selectId+=that.multipleSelection[i].id+','
                };
                selectId+=that.multipleSelection[that.multipleSelection.length-1].id



            },
            gettableInfo: function(){
                    var that = this;
                    this.fetch('/admin/information/getActivityAll',{
                        soachNameKeyword:that.ruleForm.name,
                        showType:that.ruleForm.showstate != "" ? parseInt(that.ruleForm.showstate) : 2,
                        recommendedState:that.ruleForm.advicestate !=  "" ? parseInt(that.ruleForm.advicestate): 2,
                        activityState:that.ruleForm.activitystate !=  ""  ? parseInt(that.ruleForm.activitystate) : 2,
                        activityType:that.ruleForm.type,
                        provice:that.ruleForm.region !=  "" ? '%':that.ruleForm.region ,
                        sortType:0,
                        pageCount:that.searchContent.limit,
                        pageNumber:that.searchContent.page
                    })
                    .then(function(response) {
                        var res = response;
                        console.log(res)
                        if (res.code == 0) {
                            that.majorlisttable = res.result[0];
                            that.total = res.result[1];
                        }else{
                            that.majorlisttable = [];
                            that.total =0;
                        };
                    })
                    .catch(function (error) {
                    });
           },
        },
        mounted(){
            this.info();
            this.gettableInfo();
        }
    }

</script>
<style>
    .choiceActivity-right .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    /*表头文本居中*/
    .choiceActivity-right .el-table th.is-leaf,.choiceActivity-right .el-table th, .el-table tr {
        text-align: center;
    }
    .choiceActivity-right .el-table--border {
        /*text-align: center;*/
        margin: 0 0 0 80px;
    }
    
</style>

<style scoped>
    .majorlist-icon i {
        margin: 0 5px;
    }
    .majorlist-icon {
        display: flex;
        justify-content:center;
        font-size: 18px;
        color: #999;
    }
    .majorlist-selectone {
        position: absolute;
        right: 10px;
        width: 100px;
    }
    .inputone {
        margin: 40px 0 0;
    }
    .inputone,.inputtwo {
        display: flex;
        margin: 0 0 0 80px;
    }
    .majorlist-form {
        display: flex;
        position: relative;
        width: 1500px;
        margin: 20px auto;
    }
    .choiceActivity-queryrefresh {
        position: absolute;
        right: 80px;
        bottom: 20px;
        color: #666; 
        background-color: #fff; 
        border:1px solid #CCC;
        border-radius:0;
    }
    .majorlist-list i {
        padding: 0 5px 0 10px;
    }
    .majorlist-list p {
        font-size: 16px;
        color: #666;
        font-weight: bold;
    }
    .majorlist-list {
        position: relative;
        display: flex;
        align-items:center;
        width: 1160px;
        height: 50px;
        background:#f3f3f3;
        margin: 40px 80px 0;
    }
    .footerMajorname {
        color: #ff0000;
    }
    .footerSelected {
        font-size: 14px;
        color: #999;
    }
    .footer {
        width: 900px;
        margin: 0 auto;
    }
    .ellipsis {
        margin: 0 0 0 60px;
    }
    .page {
        text-align: right;
        margin: 20px 75px 40px 0;
    }
    .leftImg p {
        position: relative;
        left: 35px;
    }
    .leftImg i {
        position: absolute;
        left: 15px;
        top: 17px;
    }
    .leftImg {
        position: relative;
        top: 50px;
        color: #FFF;
        font-size: 14px;
        width: 200px;
        height: 50px;
        display: flex;
        background: url(../../../../assets/img/point.png) no-repeat;
        background-size: 100% 100%;
        z-index: 1;
    }
    .rightTop {
        position: relative;
    }
    .choiceActivity-right {
        width: 1320px;
        border: 1px solid #DDD;
        border-left: 1px solid #e9eef3;
        padding: 40px 0 0 40px;
    }
    .choiceActivity-left {
        width: 180px;
        background-color: #fcfcfc;
        border: 1px solid #DDD;
    }
    .choiceActivity {
        width: 1500px;
        margin: 0 auto;
        display: flex;
    }
    .choiceActivity-button {
        margin: 20px auto;
        width: 1500px;
    }
    .choiceActivity-top {
        display: flex;
        margin: 0 auto;
        width: 1500px;
    }
</style>
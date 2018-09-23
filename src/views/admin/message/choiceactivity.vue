<template>
    <div class="Select">
        <div class="choiceActivity-top">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">信息发布</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">辅导机构</a></el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">相关活动设置</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">选择活动</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="choiceActivity-button">
            <el-button size="medium">返回</el-button>
        </div>
        <div class="choiceActivity">
            <div class="choiceActivity-left">
                <div class="leftImg">
                    <i class="el-icon-view"></i>
                    <p>选择院校专业</p>
                </div>
            </div>
            <div class="choiceActivity-right">
                <div class="rightTop">
                    <el-form class="inputone" label-width="80px"> 
                        <el-form-item label="活动名称">
                            <el-input size="medium" v-model="activityname" placeholder="输入文件名称"></el-input>
                        </el-form-item>
                        <el-form-item label="展示状态">
                            <el-select size="medium" v-model="showstate" placeholder="全部">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="推荐状态">
                            <el-select size="medium" v-model="advicestate" placeholder="全部">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <el-form class="inputtwo" label-width="80px"> 
                        <el-form-item label="活动状态">
                            <el-select size="medium" v-model="activitystate" placeholder="全部">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="活动类型">
                            <el-select size="medium" v-model="activitytype" placeholder="全部">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="活动省市">
                            <el-select size="medium" v-model="activitycity" placeholder="全部">
                              <el-option label="区域一" value="shanghai"></el-option>
                              <el-option label="区域二" value="beijing"></el-option>
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
                <el-table :data="majorlisttable" @current-change="handleCurrentChange" border style="width: 1160px">
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
                    page:'',
                    limit:'',
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
                tableTop:[
                    {prop:'id',label:'编号',width:80},
                    {prop:'adviceState',label:'推荐状态',width:80},
                    {prop:'showState',label:'显示状态',width:80},
                    {prop:'activityName',label:'活动名称',width:380},
                    {prop:'activityType',label:'活动类型',width:80},
                    {prop:'activityCity',label:'活动省市',width:80},
                    {prop:'mainUnivers',label:'主办院校',width:160},
                    {prop:'joinType',label:'报名状态',width:80},
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
           gettableInfo: function(){
                var that = this;
                axios.post('/admin/choiceactivity/getcityInfo',{
                  //后台参数，前台参数(传向后台)
                  // butname: that.butname,
                })
                .then(function(response) {
                    var res = response.data;
                    if (res.code == 0) {
                        that.majorlisttable = res.data;
                        that.total = res.total;
                    };
                })
                .catch(function (error) {
                });
           },
        },
        mounted(){
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
        background-color: #e9eef3;
        margin: 20px 70px 40px 0;
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
        background: url(../../../assets/img/point.png) no-repeat;
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
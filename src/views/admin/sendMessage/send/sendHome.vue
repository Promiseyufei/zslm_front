<template>
    <div>
    	<div class="operateBox">
    		<div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>消息管理</el-breadcrumb-item>
                    <el-breadcrumb-item  class="selectedNavPublic">发消息</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active=".1" align-center>
                        <el-step title="设置消息对象"></el-step>
                        <el-step title="编辑消息内容"></el-step>
                    </el-steps>
                </div> 

                <div>
                    <!-- 设置消息对象 -->
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;设置消息对象</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <template>
                                <el-radio v-model="radio" label="1">全部用户</el-radio>
                                <el-radio v-model="radio" label="2">特定行为的用户（关注院校、参与活动）</el-radio>
                                <el-radio v-model="radio" label="3">给手动选择的用户发消息</el-radio>
                            </template>

                            <el-row>
                                <el-button type="primary" @click="setUser">设置</el-button>
                            </el-row>
                        </div>
                    </div>
                    <!-- 已选消息对象 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;已选消息对象</div>
                        </div>
                        <div class="operateUpfilesRight">
                           <div v-if=" radio=='2' ">
                               <div class="sendNav">
                                    <span>消息对象类型：</span>
                                    <div>
                                        <p>特定行为的用户（关注院校、参与活动）</p>
                                    </div>
                               </div>
                               <div class="sendNav">
                                    <span>关注院校：</span>
                                    <div>
                                        <template v-for="(ma, index) in seMajor">
                                            <p :key="index">{{ ma.z_name }}</p>
                                        </template>
                                        <!-- <p>院校名称2</p>
                                        <p>院校名称3</p> -->
                                    </div>
                               </div>
                               <div class="sendNav">
                                    <span>关注活动：</span>
                                    <div>
                                        <template v-for="(a, index) in seAc">
                                            <p :key="index">{{ a.active_name }}</p>
                                        </template>
                                        <!-- <p>活动名称1</p>
                                        <p>活动名称1</p> -->
                                    </div>
                               </div>
                               <div class="sendNav">
                                    <span>关系类型：</span>
                                    <template v-if="toType == 1">
                                        <div>
                                            <p>关注了以上任意一种院校【或】参与以上任意活动</p>
                                        </div>
                                    </template>
                                    <template v-else-if="toType == 2">
                                        <div>
                                            <p>关注了以上任意一种院校【且】参与以上任意活动</p>
                                        </div>
                                    </template>

                               </div>
                               <hr>
                           </div>
                           
                           <!-- 表格 -->
                           <userTable :tableData="tableData" :listTable="listTable" v-if=" radio!='' "></userTable>
                           <!-- 分页 -->
                           <div v-if=" radio!='' ">
                                <singlePage :currentPage="currentPage" :totalData="totalData" @use="changePageNum"></singlePage>
                           </div>
                        </div>
                    </div>

                </div>

                <!-- 完成按钮 -->
                <div class="operateFinalUp">
                    <el-button type="primary" @click="toAdvise">下一步，编辑消息内容</el-button>
                </div>



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
        radio: "",
        seMajor:[],
        seAc:[],
        toType:0,
        listTable: [
            {
                prop: 'id',
                lable: '账户ID',
                width: "80px"
            },
            {
                prop: "account",
                lable: "账号",
                width: "100px"
            },
            {
                prop: "user_name",
                lable: "昵称",
                width: "160px"
            },
            {
                prop: "real_name",
                lable: "真实姓名",
                width: "80px"
            },
            {
                prop: "sex",
                lable: "性别",
                width: "80px"
            },
            {
                prop: "address",
                lable: "常住地",
                width: "80px"
            },
            {
                prop: "schooling_id",
                lable: "最高学历",
                width: "80px"
            },
            {
                prop: "graduate_school",
                lable: "毕业院校",
                width: "180px"
            },
            {
                prop: "industry",
                lable: "所属行业",
                width: "240px"
            },
            {
                prop: "worked_year",
                lable: "工作年限",
                width: "100px"
            }
        ],
        // 表格默认数据
        tableData: [],
        //默认展示页数
        currentPage: 1,
        // 分页总数,默认值
        totalData: 0,
        table1: [],
        table2: [],
        size:10
      }
    },
    watch: {
        radio: function(val,oldval) {
            if(val == "1" && oldval != "1") {
                this.getUser();
            }else if(val == "2" && oldval != "2") {
                this.tableData = this.table1;
            }
            // else if(val == "3" && oldval != "3") {
            //     this.tableData = this.table2;
            // }
        }
    },
    methods: {
        //获取全部用户
        getUser: function() {
            let self = this;
            this.post('/admin/news/getAllAccounts', {
                pageCount: 20,
                pageNumber: self.currentPage
            }).then((response) => {
                console.log(response);
                if(response.code == 0) {
                    self.totalData = response.result.total;
                    self.tableData = response.result.map;
                    console.log(self.totalData);
                }
                else 
                    this.message(true, response.msg, 'error');
            })
        },

        //改变分页下标并请求
        changePageNum: function(pageNum) {
            console.log('aa');
            if(this.radio == "1") {
                this.currentPage = pageNum;
                this.getUser();
            }
            else if(this.radio == "2") {

            }
            else if(this.radio == "3") {
                console.log(this.table2);
                if(this.table2.length <= this.size) {
                    this.tableData = this.table2;
                }
                else
                    this.tableData = this.interceptArray(this.table2, (pageNum - 1) * this.size, this.size);
            }

        },

        // 跳转页面
        toAdvise: function() {
            
            let sendArr = [];
            if(this.radio == "1") {
                this.tableData.forEach((item) => {
                    sendArr.push(item.id);
                });
            }
            else if(this.radio == "3") 
                this.table2.forEach((item) => {
                    sendArr.push(item.id);
                });

            
            // let setStr = encodeURIComponent(JSON.stringify(sendArr));
            if(sendArr.length < 1) {
                this.message('没有指定要发送消息的用户');
                return false;
            }
            else 
                this.$router.push({
                    name: '/send/setMessageDetail',
                    params: {
                        sendIdArr:sendArr
                    }
                });
            // this.$router.push('/admin/send/setMessageDetail?setStr=' + setStr);
        },

        // 设置消息对象类型
        setUser: function() {
            if(this.radio == "2") {
                this.$router.push('/admin/send/setMessageObject');
            }else if(this.radio == "3") {
                this.$router.push('/admin/send/setMessageSelf');
            }
        },
        //
        remove: function(key) {
            // console.log(this.table2);
            this.table2.pop();
            // this.table2[key] = null;
            // console.log(this.table2);
        },

        batchScreenUser() {
            // console.log(this.seAc);
            let majorIdArr = [];
            let acIdArr = [];
            if(this.seAc != undefined && this.seAc.length > 0)
                this.seAc.forEach((item) => {
                    acIdArr.push(item.id);
                });
            if(this.seMajor != undefined && this.seMajor.length > 0)
                this.seMajor.forEach((item) => {
                    majorIdArr.push(item.id);
                });

            this.post('/admin/news/batchScreenAccounts', {
                majorIdArr:majorIdArr,
                activityIdArr: acIdArr,
                condition: this.toType == 1 ? 1 : 0,
                pageCount: this.size,
                pageNumber:(this.currentPage - 1)
            }).then((response) => {
                if(response.code == 0) {
                    this.tableData = response.result.users;
                    this.totalData = response.result.count;
                    // this.radio = 2;
                    console.log(response.result);
                }
                else this.message(true, response.msg, 'error');
            })
        }
    },
    
    mounted() {
        if(this.$route.params.setStr != undefined) {
            let setArray = this.$route.params.setStr;

            let tt = setArray.pop();
            this.radio = tt;
            this.totalData = setArray.length;
            tt == "2" ? this.table1 = setArray : (tt == "3" ? this.table2 = setArray : this.table2 = this.table2);
            this.changePageNum(1);
        }
        if(this.$route.params.seTwo != undefined) {
            let seArray = this.$route.params.seTwo;
            console.log(this.$route.params.seTwo);
            let t = seArray.pop();
            this.seMajor = seArray['semajor'] != undefined ? seArray['semajor'] : [];
            this.seAc = seArray['seactivity'] != undefined ? seArray['seactivity'] : [];
            this.toType = seArray['type'];
            // console.log(seArray);
            this.batchScreenUser();
            this.radio = t;
        }
        
    },
};
</script>
<style>
    p,hr {
        margin: 0;
        padding: 0;
    }

    /*
    * 步骤条
    */
    .fileSteps .is-text {
        width: 50px;
        height: 50px;
    }
    .fileSteps .is-finish .is-text {
        background: #1ABC9C; 
        color: #fff;
    }
    .fileSteps .el-step__icon-inner {
        font-size: 20px;
    }
    .fileSteps .el-step__line {
        top: 23px !important;
    }
</style>
<style scoped>
    .operateBox {
        width: 1500px;
        margin: 0 auto;
    }

    /*
    * 分页样式
    */
    .apartPage {
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 20px;
    }
    .countPage {
        margin-right: 15px;
    }

    /*
    * 步骤条样式
    */
    .fileSteps {
        /*margin: 20px 0;*/
        width: 400px;
        margin: 0 auto;
    }
    .fileSteps .el-steps--horizontal {
        margin: 20px 0;
    }

    /*
    * 主题内容样式
    */
    .operateUpfiles {
        border: 1px solid #e4e4e4;
        background-color: #fff;
        display: flex;
        flex-direction: row;
    }
    .operateUp {
        border-bottom: none;
    }
    .operateUpfilesLeft {
        background-color: #fcfcfc;
        border-right: 1px solid #e4e4e4;
        width: 159px;
    }
    .operateUpfilesLeft>div {
        background: url(../../../../assets/img/point.png) no-repeat;
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
        border-bottom: 1px solid #e4e4e4;
    }
    .operateUpfilesRight form {
        margin-top: 50px;
    }
    .operateUpfilesRight button {
        float: right;
    }

    /*
    * 最后一个大框样式
    */
    .operateDown {
        border-top: none;
    }

    /*
    * 已选消息对象内容的样式
    */
    .sendNav {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 15px;
    }
    .sendNav span {
        width: 150px;
        text-align: right;
    }
    .sendNav p {
        margin-bottom: 15px;
        color: #333;
    }
    .operateUpfilesRight hr {
        background-color: #e4e4e4;
        height: 1px;
        line-height: 1px;
        border:none;
    }

    /*
    * 底部跳转按钮样式
    */
    .operateFinalUp {
      text-align: center;
      margin: 95px 0 70px;
    }
</style>
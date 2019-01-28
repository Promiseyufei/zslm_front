<template>
    <div>
    	<div class="operateBox">
    		<div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>消息管理</el-breadcrumb-item>
                    <el-breadcrumb-item>发消息</el-breadcrumb-item>
                    <el-breadcrumb-item  class="selectedNavPublic">设置消息对象</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active=".1" align-center>
                        <el-step title="设置消息对象"></el-step>
                        <el-step title="编辑消息内容"></el-step>
                    </el-steps>
                </div>

                <div>
                    <!-- 按关注院校发消息 -->
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;按关注院校发消息</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <div class="messageUpfilesRight2Nav">
                                <el-button type="info" plain @click="adviseAdd"><i class="fa fa-plus fa-fw fa-lg"></i>添加</el-button>
                                <el-button type="info" plain @click="objectDelete"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
                            </div>

                            <!-- 已选院校专业 -->
                            <div class="operateUpfiles operateHeader">
                                <p>已选院校专业</p>
                            </div>
                            <div style="margin-top:1%;" class="selectMajor" v-for="(list,index) in majorData" :key="index">
                                <span @click="majorDelete(index)">删除</span>
                                <p>{{list.z_name}}</p>
                            </div>
                        </div>
                    </div>

                    <!-- 按参与活动发消息 -->
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;按参与活动发消息</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <div class="messageUpfilesRight2Nav">
                                <el-button type="info" plain @click="adviseAdd2"><i class="fa fa-plus fa-fw fa-lg"></i>添加</el-button>
                                <el-button type="info" plain @click="objectDelete2"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
                            </div>

                            <!-- 已选活动 -->
                            <div class="operateUpfiles operateHeader">
                                <p>已选活动</p>
                            </div>
                            <div style="margin-top:1%" class="selectMajor" v-for="(list,index) in activityData" :key="index">
                                <span @click="activityDelete(index)">删除</span>
                                <p>{{list.active_name}}</p>
                            </div>
                        </div>
                    </div>

                    <!-- 关系类型 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;关系类型</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <template>
                                <el-radio v-model="radio" label=1>关注了以上任一院校【或】参与了以上任一活动</el-radio>
                                <el-radio v-model="radio" label=2>关注了以上任一院校【且】参与了以上任一活动</el-radio>
                            </template>

                            <!-- 完成按钮 -->
                            <div style="text-align:center;" class="selectFinish">
                                <el-button type="primary" @click="test">完成</el-button>
                            </div>
                        </div>
                    </div>
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
            majorData: [],
            activityData: [],
            radio: 0,
        }
    },
    methods: {
        test:function() {
            let arr = new Array();
            arr['semajor'] = this.majorData;
            arr['seactivity'] = this.activityData;
            arr['type'] = this.radio;
            arr.push("2");

            this.$router.push({name:'/send/sendHome', params: {seTwo: arr}});
            // this.post('/admin/news/batchScreenAccounts', {
            //     majorIdArr:
            //     activityIdArr:
            //     condition:
            // })

        },
        judge() {
            if(this.radio == 0) {
                this.message(true, '请选择关系类型', 'info');
                return false;
            }
            else {
                
                if((this.majorData.length < 1 || this.activityData.length < 1) && (this.radio == 2 || this.radio == "2")) {
                    this.message(true, '若需要满足且的关系，需要同时选择院校专业和活动');
                    return false;
                }
                return true;
            }
        },


        //删除单个院校
        majorDelete: function(index) {
            this.majorData.splice(index, 1);
        },
        // 跳转到“院校列表”
        adviseAdd: function() {
          this.$router.push('/admin/send/sendMessage');
        },
        //跳到"选择活动"页面
        adviseAdd2: function() {
            this.$router.push('/admin/send/selectAcitity');
        },
        //删除单个活动
        activityDelete: function(index) {
            this.activityData.splice(index, 1);
        },
        //清空所有学校
        objectDelete:function() {
            this.majorData = [];
        },
        //清空所有活动
        objectDelete2:function() {
            this.activityData = [];
        },
    },
    mounted(){
        // console.log(this.majorData)
            // console.log(this.$store.state.sendnewObj['majorArr'])
        
        if(typeof this.$route.params.seMajor != "undefined" ? true : false) {
            this.$store.commit('changeSendnewObj', {name: 'majorArr', val: this.$route.params.seMajor});
            this.majorData = this.$route.params.seMajor;
        }
        else this.majorData = this.$store.state.sendnewObj['majorArr'];


        if(typeof this.$route.params.seActivity != "undefined" ? true : false) {
            this.$store.commit('changeSendnewObj', {name: 'activityArr', val: this.$route.params.seActivity});
            this.activityData = this.$route.params.seActivity;
        }
        else this.activityData = this.$store.state.sendnewObj['activityArr'];
    },
};
</script>
<style>
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
    * 右边当前banner内容样式
    */
    .operateUpfilesRight2 {
      padding: 50px 80px;
      width: 1170px;
    }
    .messageUpfilesRight2Nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        color: #666;
        font-size: 14px;
    }
    .operateFinalUp {
      text-align: center;
      margin: 95px 0 70px;
    }
    .messageBtn button{
      float: right;
    }

    /*
    * 大标题
    */
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
      margin-top: 20px;
    }
    .operateHeader>p {
      margin-left: 20px;
      font-weight: bold;
    }
    .selectMajor {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 13px;
        color: #333;
        margin-left: 30px;
    }
    .selectMajor span {
        margin-right: 20px;
        cursor: pointer;
    }

    /*完成按钮*/
    .selectFinish {
        margin: 100px 0 0;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
</style>
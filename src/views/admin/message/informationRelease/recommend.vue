<template>
    <div>
        <div class="operateBox">
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>资讯发布</el-breadcrumb-item>
                    <el-breadcrumb-item>资讯内容推荐</el-breadcrumb-item>
                    <el-breadcrumb-item>推荐信息</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active="1.2" align-center>
                        <el-step title="活动信息"></el-step>
                        <el-step title="推荐信息"></el-step>
                        <el-step title="消息通知"></el-step>
                    </el-steps>
                </div> 

                <div>
                    <!-- 招生项目信息 -->
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;设置相关院校</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <div class="messageBtn">
                                <el-button type="primary" @click="toNotice" plain>跳过</el-button>
                                <el-button type="primary" @click="pushInfoSelectMajor">设置</el-button>
                            </div>

                            <div class="shoolTotal">
                                <div v-if="shoolCount.length==0">
                                    <!-- 主办院校logo -->
                                    <div class="messageSchool">
                                        <img src="../../../../assets/img/collegeLogo.png" alt="">
                                    </div>

                                    <!-- 院校名称 -->
                                    <p style="text-align: center;">未设置主办院校</p>
                                </div>

                                <div v-for="(item, index) in shoolCount" :key="index">
                                    <!-- 主办院校logo -->
                                    <div class="messageSchool">
                                        <img v-bind:src="item.logo" alt="">
                                    </div>

                                    <!-- 院校名称 -->
                                    <p style="text-align: center;">{{item.name}}</p>
                                    <p style="text-align: center; color: #1ABC9C;cursor: pointer;" v-if="index >= 0" @click="deleteSchool(index)">删除</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <!-- 设置推荐阅读 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;设置推荐阅读</div>
                        </div>
                        <div class="operateUpfilesRight2">
                            <template>
                                <el-radio-group v-model="setSwitch" @change="valuechange">
                                    <el-radio :label="1">自动设置</el-radio>
                                    <el-radio :label="2">手动设置</el-radio>
                                </el-radio-group>
                                <div v-if="this.setSwitch == 2">
                                    <div class="messageUpfilesRight2Nav">
                                        <el-button type="info" plain @click="adviseRead"><i class="fa fa-plus fa-fw fa-lg"></i>添加</el-button>
                                        <el-button type="info" plain @click="delAdvise"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
                                    </div>
                                    <!-- 表格 -->
                                    <messageTable :tableData3="tableData" :isSelect="0" :listTable="listTable" @setInfoRelation="setInfoState" @del="delAdvise"></messageTable>
                                </div>
                            </template>
                        </div>
                    </div>

                    <!-- 设置推荐院校专业 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;设置推荐院校专业</div>
                        </div>
                        <div class="operateUpfilesRight2">
                            <template>
                                <el-radio-group v-model="setSwitch2" @change="valueReMajor">
                                    <el-radio :label="1">自动设置</el-radio>
                                    <el-radio :label="2">手动设置</el-radio>
                                </el-radio-group>
                                <div v-if="this.setSwitch2 == 2">
                                    <div class="messageUpfilesRight2Nav">
                                        <el-button type="info" plain @click="adviseAdd"><i class="fa fa-plus fa-fw fa-lg"></i>添加</el-button>
                                        <el-button type="info" plain @click="activityDelete"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
                                    </div>
                                    <!-- 表格 -->
                                    <messageTable :tableData3 = "tableData2" :listTable="listTable2" @setInfoRelation="setInfoState" @del="delAdvise"></messageTable>
                                </div>
                            </template>
                        </div>
                    </div>

                    <!-- 按钮 -->
                    <div class="operateFinalUp">
                        <el-button type="primary" @click="toBack" plain>返回上一步</el-button>
                        <el-button type="primary" @click="toNotice">下一步，消息通知</el-button>
                        <el-button type="primary" @click="finish">完成！</el-button>
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
        info: 0,
        imageUrl: '',
        //设置成功的主办院校：
        shoolCount: [],
        setSwitch: 0,
        setSwitch2: 0,
        listTable: [
            {
                prop: 'id',
                lable: '编号',
                width: "210px"
            },
            {
                prop: "show_weight",
                lable: "展示顺序",
                width: "80px"
            },
            {
                prop: "info_type",
                lable: "资讯类型",
                width: "210px"
            },
            {
                prop: "zx_name",
                lable: "资讯标题",
                width: "319px"
            },
            {
                prop: "create_time",
                lable: "发布时间",
                width: "210px"
            }
        ],
        // 表格默认数据
        tableData: [],
        listTable2: [
            {
                prop: 'id',
                lable: '编号',
                width: "210px"
            },
            {
                prop: "weight",
                lable: "展示顺序",
                width: "80px"
            },
            {
                prop: "activity_type",
                lable: "院校省市",
                width: "210px"
            },
            {
                prop: "active_name",
                lable: "院校专业名称",
                width: "319px"
            },
            {
                prop: "create_time",
                lable: "发布时间",
                width: "210px"
            }
        ],
        // 表格默认数据
        tableData2: []
      }
    },
    methods: {
        // 跳转到“院校专业”页面添加院校
        adviseAdd: function() {
          this.$router.push('/send/sendMessage/' + this.infoId);
        },
        //跳转到推荐阅读添加页面
        adviseRead() {
            this.$router.push('/message/setReRead/' + this.infoId);
        },
        pushInfoSelectMajor() {
            this.$router.push('/message/infoSelectMajor');
        },
        
        // 返回上一步
        toBack: function() {
            this.$router.push('/message/changeInformation/' + this.infoId);
        },

        // 跳转到消息通知页面
        toNotice: function() {
            this.$router.push('/message/informationNotice/' + this.id);
        },

        //点击完成，跳转到资讯列表首页
        finish:function() {
            this.$router.push('/message/informationList');
        },

        //删除主办院校
        deleteSchool: function(index) {
            console.log(index);
            this.shoolCount.splice(index);
        },

        // 得到所有的推荐活动
        getAdviseName: function() {
            var self = this;
            //   var load = this.openFullScreen2();
            axios.post('/admin/information/getAllActivitys', {
                regionId: self.id
            })
            .then(function (response) {
                var res = response.data;
                if (res.code == 0) {
                    self.tableData = res.data;
                };
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        // 得到所有的推荐院校专业
        getAdviseCollege: function() {
            var self = this;
            //   var load = this.openFullScreen2();
            axios.post('/admin/information/getAllCollege', {
                regionId: self.id
            })
            .then(function (response) {
                var res = response.data;
                if (res.code == 0) {
                    self.tableData2 = res.data;
                };
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        setInfoState: function(id, weight) {
            this.confirm(() => {
                this.post('/admin/information/setAppointInfoState', {
                    infoId: id,
                    type: 0,
                    state: weight
                }).then((response) => {
                    (response.code == 0) ? this.message(true, response.msg, 'success') : this.message(true, response.msg, 'error');
                })
            }, () => {
                this.message(true, '已取消修改', 'info');
            }, '确定修改该资讯的权值吗？');
        },

        //取消推荐阅读
        //直接调用后台接口清除字符串中的删除id，因为添加页面点击完成已经添加到数据库中，所以在手动设置模块展示的一定是在数据库中的信息，所以直接删除就ok
        delAdvise: function(infoid, row) {
            let type = null;
            if(typeof infoid != null && typeof row != null) type = 0;
            else if(typeof infoid == null && typeof row == null) type = 1;

            this.confirm(() => {
                this.post('/admin/information/delAppointInfoRecommendRead', {
                    id: this.infoId,
                    infoId: infoid
                }).then((response) => {
                    if(response.code == 0) {
                        if(type == 0) {
                            this.tableData.splice(this.tableData.indexOf(row), 1);
                        }
                        else if(type == 1) this.tableData = [];
                        this.message(true, "删除成功", 'success');
                    }
                    else this.message(true, response.msg, 'error');
                })
            }, () => {
                this.message(true, '已取消删除', 'info');
            }, "确定取消该推荐阅读吗？");
        },
        // 清空所有推荐活动
        activityDelete: function() {
            var table = this.tableData3;
            var arrayTableId = [];
            for (var i = 0; i < table.length; i++) {
                arrayTableId.push(table[i].id);
            };
            if(arrayTableId.length < 1) {
                this.message(true, '没有要清空的数据', 'error');
                return;
            }
            this.post('/admin/operate/deleteAppoinInformation', {
                RegionId: this.id,
                InformationId : arrayTableId
            }).then((response) => {
                if(response.code == 0) {
                    this.tableData3 = [];
                    this.message(true, response.msg, 'success');
                }
                else this.message(true, response.msg, 'error');
            })
        },
        startChange: function () {
            this.disabled = false;
        },
        startChange2: function () {
            this.disabled2 = false;
        },
        valuechange: function(res) {
            let _this = this;
            //自动设置
            if(res == 1) {
                this.confirm(() => {
                    this.post('/admin/information/setAutomaticRecInfos', {
                        infoId: this.infoId
                    }).then((response) => {
                        if(response.code == 0) {
                            this.message(true, "成功自动设置该资讯的推荐阅读", 'success');
                        }
                        else {
                            this.message(true, response.msg, 'error');
                        }
                    })
                }, () => {
                    this.message(true, "已取消自动设置该资讯的推荐阅读", 'info');
                }, '确定自动设置推荐阅读吗？');
            }
            //手动设置
            else if(res == 2) {
                this.post('/admin/information/getAppointInfoRecommendRead', {
                    infoId: this.infoId
                }).then((response) => {
                    if(response.code == 0) {
                        _this.tableData = response.result;
                    }
                    else {
                        this.message(true, response.msg, 'error');
                    }
                })
            }
        },
        valueReMajor(res) {
            let _this = this;
            if(res == 1) {
                this.confirm(() => {
                    this.post('/admin/information/setAutoInfoRelationCollege', {
                        infoId: this.infoId
                    }).then((response) => {
                        if(response.code == 0) {
                            this.message(true, "成功自动设置该资讯的推荐院校专业", 'success');
                        }
                        else   
                            this.message(true, response.msg, 'error');
                    });
                }, () => {

                }, '确定自动设置推荐院校专业吗？');
            }
        },
        // 上传院校logo
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
    mounted() {
        if(this.$route.params.infoId != null) {
            this.infoId = this.$route.params.infoId;
        }
        
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

    .messageBtn {
        display: flex;
        justify-content: space-between;
    }

    /*
    * 上传图片
    */
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
        border: 1px dashed #d9d9d9; 
    }
    .avatar-uploader-icon:hover {
        border-color: #409EFF;
    }
    .messageSchool {
        margin: 15px 0 20px;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
    .messageSchool img {
        max-width: 178px;
        max-height: 178px;
    }

    /*
    * 富文本编辑器
    */
    #editor {
      text-align: left;
    }
    .messageEditor {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;

    }

    /*
    * 设置主办院校
    */
    .shoolTotal {
        display: flex;
        justify-content:flex-start;
    }
    .shoolTotal>div {
        margin: 20px 80px 0 20px;
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
    .operateHeader .el-button {
        width: 80px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 10px;
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
        margin: 20px 0 0;
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

</style>


<template>
    <div>
        <div class="operateBox">
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>活动信息</el-breadcrumb-item>
                    <el-breadcrumb-item>活动信息编辑</el-breadcrumb-item>
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
                            <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;设置主办院校</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <div class="messageBtn">
                                <el-button type="primary" @click="toM" plain>跳过</el-button>
                                <el-button type="primary" @click="toNotice">设置</el-button>
                            </div>

                            <div class="shoolTotal">
                                <div v-if="hostMajor.majorid != null">
                                    <!-- 主办院校logo -->
                                    <div class="messageSchool">
                                        <img :src="hostMajor.img" alt="主办院校logo">
                                    </div>
                                    <!-- 院校名称 -->
                                    <p style="text-align: center;">{{ this.hostMajor.zname}}</p>
                                    <p style="margin-top:2%;text-align: center; color: #1ABC9C;cursor: pointer;"
                                       @click="deleteSchool">删除</p>
                                </div>
                                <div  v-else-if="hostMajor.majorid == null ">
                                    <!-- 主办院校logo -->
                                    <div class="messageSchool">
                                        <img v-bind:src="defaultMajorLogo" alt="">
                                    </div>
                                    <!-- 院校名称 -->
                                    <p style="text-align: center;">请添加主办院校</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 设置推荐活动 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;设置推荐活动</div>
                        </div>
                        <div class="operateUpfilesRight2">
                            <template>
                                <el-radio-group v-model="setSwitch">
                                    <el-radio :label="1">自动设置</el-radio>
                                    <el-radio :label="2">手动设置</el-radio>
                                </el-radio-group>
                                <div v-if="this.setSwitch == 2">
                                    <div class="messageUpfilesRight2Nav">
                                        <el-button type="info" plain @click="adviseAdd"><i
                                                class="fa fa-plus fa-fw fa-lg"></i>添加
                                        </el-button>
                                        <el-button type="info" plain @click="activityDelete"><i
                                                class="fa fa-trash-o fa-fw fa-lg"></i>清空
                                        </el-button>
                                    </div>
                                    <!-- 表格 -->
                                    <messageTable :tableData3="tableData" :isSelect="1" :listTable="listTable"
                                                  @setInfoRelation="setOpAd" @del="delAdvise" @handleClick="(activity) => {$router.push('/admin/message/activity/' + activity.id)}"></messageTable>
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
                                <el-radio-group v-model="setSwitch2">
                                    <el-radio :label="1">自动设置</el-radio>
                                    <el-radio :label="2">手动设置</el-radio>
                                </el-radio-group>
                                <div v-if="this.setSwitch2 == 2">
                                    <div class="messageUpfilesRight2Nav">
                                        <el-button type="info" plain @click="majorAdd"><i
                                                class="fa fa-plus fa-fw fa-lg"></i>添加
                                        </el-button>
                                        <el-button type="info" plain @click="majorDelete"><i
                                                class="fa fa-trash-o fa-fw fa-lg"></i>清空
                                        </el-button>
                                    </div>
                                    <!-- 表格 -->
                                    <messageTable1 :tableData3="tableData2" :listTable="listTable2"
                                                   @setInfoRelation="setOpM" @del="delAdviseMajor" @handleClick="(major) => {$router.push('/admin/message/messageHome/' + major.id)}"></messageTable1>
                                </div>
                            </template>
                        </div>
                    </div>

                    <!-- 按钮 -->
                    <div class="operateFinalUp">
                        <el-button type="primary" @click="toBack" plain>返回上一步</el-button>
                        <el-button type="primary" @click="toM">下一步，消息通知</el-button>
                        <el-button type="primary" @click="$router.push('/admin/message/activityList')">完成！</el-button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                // 上个页面传过来的参数（xx活动的id）
                hostMajor: {
                    zname:'',
                    majorid: 0,
                    img:'',

                },
                id: 0,
                defaultMajorLogo: require('../../../../assets/img/collegeLogo.png'),
                // shoolCount: [
                //     {
                //         logo: ,
                //         name: "请设置主办院校",
                //     },
                // ],
                imageUrl: '',
                setSwitch: 2,
                setSwitch2: 2,
                listTable: [
                    {
                        prop: 'id',
                        lable: '编号',
                        width: "210px"
                    },
                    {
                        prop: "show_weight",
                        lable: "展示权重",
                        width: "80px"
                    },
                    {
                        prop: "active_type",
                        lable: "活动类型",
                        width: "210px"
                    },
                    {
                        prop: "active_name",
                        lable: "活动名称",
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
                        prop: "province",
                        lable: "活动省市",
                        width: "210px"
                    },
                    {
                        prop: "z_name",
                        lable: "专业名称",
                        width: "319px"
                    },
                    {
                        prop: "update_time",
                        lable: "发布时间",
                        width: "210px"
                    }
                ],
                // 表格默认数据
                tableData2: []
            }
        },
        watch: {
            setSwitch: function (val, oldval) {
                if (val == 1 && oldval != val) {
                    this.setActivity();
                }

            },
            setSwitch2: function (val, oldval) {
                if (val == 1 && oldval != val) {
                    this.setCollege();
                }
            }
        },
        methods: {
            // 跳转到“活动列表”页面添加推荐活动
            info: function () {
                let self = this;
                this.fetch('/admin/information/getguanlian', {
                    id: parseInt(self.id)
                }).then(res => {
                    if (res.code == 0) {
                        self.tableData = res.result[0];
                        self.tableData2 = res.result[1];
                    }
                })
            },

            adviseAdd: function () {
                this.$router.push('/admin/message/addActivity/' + this.id);
            },

            majorAdd: function () {
                this.$router.push('/admin/message/addmajor/' + this.id);
            },

            // 返回上一步
            toBack: function () {
                this.$router.push('/admin/message/activity/' + this.id);
            },

            setInfoRelation(index,val){
                alert(111)
            },
            // 跳转到消息通知页面

            toM:function(){

                this.$router.push('/admin/message/notice/' + this.id);
            },
            toNotice: function () {
                this.$router.push('/admin/active/selectUnivers/' + this.id);
            },


            //获得主办院校
            getImg: function () {
                let that = this;
                this.fetch('/admin/information/getimg', {
                    id: this.id
                }).then(
                    res=>{
                        console.log(res.result);
                        that.hostMajor.zname = res.result.z_name;
                        that.hostMajor.img = res.result.magor_logo_name;
                        that.hostMajor.majorid = res.result.id;
                    }
                )
            },

            //删除主办院校
            deleteSchool: function () {
                this.confirm(() => {
                    this.post('/admin/information/setHostMajor', {
                        activityId: this.id,
                        majorId: 0
                    }).then((response) => {
                        if(response.code == 0) {
                            this.getImg();
                            this.message(true,'删除成功','success');
                        }
                        else this.message(ture, '删除失败', 'info');
                    }) 
                }, () => {

                }, '确认取消该活动的主办院校？');
                this.shoolCount.splice(index);
            },

            // 自动设置推荐活动
            setActivity: function () {
                this.confirm(() => {
                    let self = this;
                    this.post('/admin/information/setAutomaticRecActivitys', {
                        activityId: self.id
                    }).then((response) => {
                        if(response.code == 0) {
                            this.info();
                            this.message(true, '自动设置推荐活动成功', 'success');
                        }
                        else this.message(true, response.msg, 'info');
                    })
                }, () => {

                },'确认更改为自动设置推荐活动吗？该操作将覆盖之前的设置。');
            },

            // 自动设置院校专业
            setCollege: function () {
                this.confirm(() => {
                    let self = this;
                    this.post('/admin/information/setAutomaticRecMajors', {
                        activityId: self.id
                    }).then((response) => {
                        if(response.code == 0) {
                            this.info();
                            this.message(true, '自动设置推荐院校专业成功', 'success');
                        }
                        else this.message(true, response.msg, 'info');
                    })
                }, () => {

                },'确认更改为自动设置推荐院校专业吗？该操作将覆盖之前的设置。');
            },

            // 得到所有的推荐活动
            getAdviseName: function () {
                var self = this;
                //   var load = this.openFullScreen2();
                axios.post('/admin/information/getAllActivitys', {
                    regionId: self.id
                })
                    .then(function (response) {
                        var res = response.data;
                        if (res.code == 0) {
                            self.tableData = res.data;
                        }
                        ;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            // 得到所有的推荐院校专业
            getAdviseCollege: function () {
                var self = this;
                //   var load = this.openFullScreen2();
                axios.post('/admin/information/getAllCollege', {
                    regionId: self.id
                })
                    .then(function (response) {
                        var res = response.data;
                        if (res.code == 0) {
                            self.tableData2 = res.data;
                        }
                        ;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            setOpAd: function (id, weight) {
                let that = this;
                this.post('/admin/information/updateActivityWeight',{
                    //后台参数，前台参数(传向后台)
                    id: id,
                    showWeight: weight
                }).then(res=>{
                    if (res.code == 0){
                        that.message(true,'修改成功','success');
                    }else{
                        that.message(true,'修改失败','error');
                    }
                
                })
                this.$confirm('操作需谨慎, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消修改'
                    });
                });
            },



            setOpM(id, weight){
                let that = this;
                this.$confirm('操作需谨慎, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.post('/admin/information/updateActivityWeight',{
                        id: id,
                        showWeight: parseInt(weight)
                    }).then(res=>{
                        if (res.code == 0){
                            that.message(true,'权值修改成功','success');
                        }else{
                            that.message(true,'权值修改失败','info');
                        }
                
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消修改'
                    });
                });
            },



            //取消指定的推荐活动
            delAdvise: function (res, row) {
                this.confirm(() => {
                    this.post('/admin/information/cancelAppointRecommendActivity', {
                        acId: this.id,
                        cancelAcId: res
                    }).then((response) => {
                        if(response.code == 0) {
                            this.tableData.splice(this.tableData.indexOf(row), 1);
                            this.message(true, response.msg, 'success');
                        }
                        else {
                            this.message(true, response.msg, 'error');
                        }
                    })
                }, () => {
                    this.message(true, '已取消修改', 'info')
                })
            },
            //取消指定的推荐专业
            delAdviseMajor(res, row) {
                this.confirm(() => {
                    this.post('/admin/information/cancelAppointRecommendMajor', {
                        acId: this.id,
                        cancelMaId: res
                    }).then((response) => {
                        if(response.code == 0) {
                            this.tableData2.splice(this.tableData2.indexOf(row), 1);
                            this.message(true, response.msg, 'success');
                        }
                        else {
                            this.message(true, response.msg, 'error');
                        }
                    })
                }, () => {
                    this.message(true, '已取消修改', 'info')
                })
            },
            // 清空所有推荐活动
            activityDelete: function () {
                this.confirm(() => {
                    this.post('/admin/information/cancelAppointActicityAllRe', {
                        acId: this.id,
                    }).then((response) => {
                        if (response.code == 0) {
                            this.tableData = [];
                            this.message(true, response.msg, 'success');
                        }
                        else this.message(true, response.msg, 'info');
                    })
                }, () => {
                    this.message(true, '取消操作成功', 'info')
                }, "确定清空所有的推荐活动吗？请谨慎操作。")
            },

            // 清空所有推荐院校专业
            majorDelete: function () {
                this.confirm(() => {
                    this.post('/admin/information/cancelAppointMajorAllRe', {
                        acId: this.id,
                    }).then((response) => {
                        if (response.code == 0) {
                            this.tableData2 = [];
                            this.message(true, response.msg, 'success');
                        }
                        else this.message(true, response.msg, 'info');
                    })
                }, () => {
                    this.message(true, '取消操作成功', 'info')
                }, "确定清空所有的推荐院校专业吗？请谨慎操作。")
            },


            startChange: function () {
                this.disabled = false;
            },
            startChange2: function () {
                this.disabled2 = false;
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
            },
            // changeCount: function (val, index) {
            //     console.log(1)
            // },

            del() {
                console.log(111111)
            }
        },
        mounted() {
            if(this.$route.params.id != 'undefined' || this.$route.params.id != undefined) {
                this.id = this.$route.params.id;
            }
            this.info();
            this.getImg();
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
    * 设置主办院校
    */
    .shoolTotal > div {
        margin: 20px 80px 0 20px;
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

    .operateUpfilesLeft > div {
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

    .messageBtn button {
        float: right;
    }

</style>


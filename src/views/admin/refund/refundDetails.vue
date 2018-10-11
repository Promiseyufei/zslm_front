<template>
    <div>
        <div class="operateBox">
            <!-- 中间内容 -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>退款管理</el-breadcrumb-item>
                    <el-breadcrumb-item class="selectedNavPublic">退款申请</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 返回按钮 -->
                <div class="refundBtn">
                    <el-button @click="goBake">返回</el-button>
                </div>
                
                <div>
                    <!-- 退款申请 -->
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-envelope-open-o fa-fw FA-3X"></i>&nbsp;退款申请</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <p style="width: 100%;text-align: center">退款申请单</p>
                            <div class="refundMark">
                                <p>编号：111111</p>
                                <p>2018-10-10</p>
                            </div>
                            <el-form ref="form" :model="form">
                                <div class="content">
                                    <strong class="title">test：</strong>
                                    <label>test</label>
                                </div>
                                <div class="content">
                                    <strong class="title">申请凭证：</strong>
                                    <div label="申请凭证">
                                        <img class="img" src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
                                        <img class="img" src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
                                        <img class="img" src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
                                        <img class="img" src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
                                    </div>
                                </div>
                            </el-form>
                        </div>
                    </div>

                    <!-- 操作管理 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-wrench fa-fw FA-3X"></i>&nbsp;操作管理</div>
                        </div>
                        <div class="operateUpfilesRight2">
                            <div class="operateUpfilesRight2Nav">
                                <el-button type="primary" style="float: right" @click.native="changeForm()">编辑</el-button>
                            </div>
                            <el-form class="refundDetialForm" :rules="rules" :disabled="formdis">
                                <el-form-item label="审批结果："  prop="type">
                                    <el-radio-group v-model="type">
                                        <el-radio :label="3">通过</el-radio>
                                        <el-radio :label="6">驳回</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                                <el-form-item label="审批意见：" prop="desc">
                                    <el-input style="width: 500px"
                                            type="textarea"
                                            v-model="content" resize="none"
                                            :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                                </el-form-item>
   
                                <el-form-item label="流程状态："  prop="status">
                                    <el-radio-group v-model="status">
                                        <el-radio :label="3">进行中</el-radio>
                                        <el-radio :label="6">已结束</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <div style="display: flex;flex-direction: row-reverse;padding-left: 170px">
                                    <el-button type="primary" style="float: right" >提交</el-button>
                                </div>
                            </el-form>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<link rel="stylesheet" type="text/css" href="vue-photo-preview/dist/skin.css"/>

<script>

    export default {
        name: "refundDetails",
        data(){
            return{
                formdis:true,
                type:'',
                content:'',
                rules:{
                    type :[ { required: true, message: '请选择审核结果', trigger: 'blur' }],
                    desc:[{ required: true, message: '请输入审核意见', trigger: 'blur' }],
                    status :[ { required: true, message: '请选择流程状态', trigger: 'blur' }]
                },
                status:'',
                model: []
            }
        },
        methods:{
            goBake: function() {
                this.$router.push('/refund/refundlist');
            },
            changeForm(){
                this.formdis = false
            }
        }

    }
</script>

<style scoped>
    p {
        margin: 0;
        padding: 0;
    }
    .operateBox {
        width: 1500px;
        margin: 0 auto;
    }
    /*
    * 选项卡样式
    */
    .operateNav {
        margin: 20px 0;
    }
    .operateNav .el-radio-button {
        margin-right: 10px;
    }

    /*
    * 返回按钮样式
    */
    .refundBtn {
        margin: 20px 0;
    }

    /*
    * 右边上传banner内容样式
    */
    .operateUpfilesRight .upload-demo {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .operateUpfilesRight .el-upload__tip {
        margin-left: 20px;
        margin-bottom: 8px;
        display: none;
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
    .operateHeader .el-button {
        width: 80px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 10px;
    }
    .operateHeader>p {
        margin-left: 20px;
        font-weight: bold;
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
        background: url(../../../assets/img/point.png) no-repeat;
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
        padding: 40px 90px 40px 80px;
        width: 1170px;
    }
    .operateUpfilesRight2Nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: bold;
        color: #666;
        font-size: 14px;
    }
    .operateTable {
        margin-top: 25px;
    }
    .operateFinalUp {
        text-align: center;
        margin: 150px 0 20px;
    }
    .refundDetialForm {
        margin-left: 100px;
        margin-top: 20px;
    }

    /*
    * 右边文本内容样式
    */
    .refundMark {
        margin-top: 30px;
    }
    .refundMark p{
        font-size: 14px;
        text-align: right;
        height: 35px;
        line-height: 35px;
    }
    .title{
        width: 100px;
        text-align: right;
        display: inline-block;
        font-size: 14px;
    }
    .content{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 20px;
        font-size: 14px;
    }
    .operateUpfilesRight .el-form {
        margin-left: 100px;
    }
    .img{
        display: inline-block;
        width: 150px;
        height: 150px;
        margin-right: 10px;
    }
</style>
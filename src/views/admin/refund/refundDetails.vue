<template>
    <div class="body">
        <p style="width: 100%;text-align: center">退款申请单</p>
        <el-form ref="form" :model="form">
            <el-form-item style="margin-bottom:0 !important;padding-right: 20%">
                <label style="float: right">编号：111111</label>
            </el-form-item>
            <el-form-item style="padding-right: 20%">
                <label  style="float: right">2018-10-10</label>
            </el-form-item>
            <el-form-item>
                <label class="title"><strong>test:</strong></label>
                <label class="content">test</label>
            </el-form-item>
            <el-form-item >
                <div class="title">申请凭证：</div>
                <div class="content" style="width: 500px" label="申请凭证">
                    <img class="img" src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
                    <img class="img" src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
                    <img class="img" src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
                    <img class="img" src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
                </div>
            </el-form-item>
        </el-form>
        <div style="width: 1200px;margin: 0 auto">
            <div style="display: flex;flex-direction: row-reverse;padding-left: 170px">
                <el-button type="success" style="float: right" @click.native="changeForm()">编辑</el-button>
            </div>
            <el-form style="margin-top: 20px" :rules="rules" :disabled="formdis">
              <el-form-item style="padding-left: 38%" label="审批结果"  prop="type">
                  <el-radio-group v-model="type">
                      <el-radio :label="3">通过</el-radio>
                      <el-radio :label="6">驳回</el-radio>
                  </el-radio-group>
              </el-form-item>
              <el-form-item>
                  <el-form-item  style="padding-left: 38%"  label="审批意见" prop="desc">
                      <el-input style="width: 500px"
                                type="textarea"
                                v-model="content" resize="none"
                                :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                  </el-form-item>
              </el-form-item>
                <el-form-item style="padding-left: 38%" label="流程状态"  prop="status">
                    <el-radio-group v-model="status">
                        <el-radio :label="3">进行中</el-radio>
                        <el-radio :label="6">已结束</el-radio>
                    </el-radio-group>
                </el-form-item>
                <div style="display: flex;flex-direction: row-reverse;padding-left: 170px">
                    <el-button type="success" style="float: right" >提交</el-button>
                </div>
            </el-form>
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
                status:''
                // form:''
            }
        },
        methods:{
            changeForm(){
                this.formdis = false
            }
        }

    }
</script>

<style scoped>
    .body{
        width: 1500px;
        margin: 0 auto;
    }
    .title{
        width: 30%;
        display: inline-block;
        text-align: end;
        font-size: 20px;

    }
    .content{
        width: 59%;
        padding-left: 10%;
        display: inline-block;
        text-align: start;
        font-size: 20px;
    }

    .img-body{
        width: 490px;
        margin: 0 auto;
        display: inline-block;
    }

    .img-title{
        width: 500px;
        height: 100%;
        text-align: end;
        display: inline-block;
    }
    .img{
        display: inline-block;
        width: 150px;
        height: 150px;
        margin-right: 10px;
    }
</style>
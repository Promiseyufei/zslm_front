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
                    <el-steps :active="1" align-center>
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
                                <el-button type="primary" plain>主要按钮</el-button>
                                <el-button type="primary" @click="">设置</el-button>
                            </div>
                            <!-- 主办院校logo -->
                            <div class="messageSchool">
                                <el-upload
                                  class="avatar-uploader"
                                  action="/admin/message/setUploadPhoto"
                                  :show-file-list="false"
                                  :on-success="handleAvatarSuccess"
                                  :before-upload="beforeAvatarUpload">
                                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </div>

                            <!-- 院校名称 -->
                            <p style="text-align: center;">{{messageSchool}}</p>
                            
                        </div>
                    </div>

                    <!-- 所有招生项目 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;所有招生项目</div>
                        </div>
                        <div class="operateUpfilesRight2">
                            <template>
                                <el-radio-group v-model="radio" @change="valuechange">
                                    <el-radio :label="1">自动设置</el-radio>
                                    <el-radio :label="2">手动设置</el-radio>
                                </el-radio-group>
                            </template>
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
        imageUrl: '',
        messageSchool: "未设置主办院校",
        radio: 1,
      }
    },
    methods: {
        startChange: function () {
            this.disabled = false;
        },
        startChange2: function () {
            this.disabled2 = false;
        },
        valuechange: function(res) {
            console.log(res);
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

    },
};
</script>
<style>
  /*
  * 
  */
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
      padding: 40px 90px 40px 80px;
      width: 1170px;
    }
    .operateUpfilesRight2 button {
        margin-bottom: 20px;
    }
    .operateFinalUp {
      text-align: center;
      margin: 95px 0 70px;
    }
    .messageBtn button{
      float: right;
    }

</style>


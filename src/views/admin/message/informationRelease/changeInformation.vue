<template>
    <div>
        <div class="operateBox">
            <!-- 中间内容  -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>资讯发布</el-breadcrumb-item>
                    <el-breadcrumb-item>资讯内容编辑</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active=".1" align-center>
                        <el-step title="资讯内容"></el-step>
                        <el-step title="推荐信息"></el-step>
                        <el-step title="消息通知"></el-step>
                    </el-steps>
                </div>

                <!-- 辅导机构基本信息 -->
                <div class="operateUpfiles operateUp">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;资讯信息</div>
                    </div>
                    <div class="operateUpfilesRight">
                        <el-form ref="informationForm" :model="informationForm" label-width="100px">
                            <el-form-item>
                                <el-button type="primary" @click="startChange">开始编辑</el-button>
                            </el-form-item>

                            <el-form-item label="资讯标题">
                                <el-input v-model="infoMsg.zx_name" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="资讯类型">
                                <el-select v-model="infoMsg.z_type" placeholder="请选择活动区域" :disabled = "disabled">
                                    <el-option :label="item.name" :value="item.id" v-for="(item, index) in counsellType" :key="index"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="资讯来源">
                                <el-input v-model="infoMsg.z_from" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="来源URL">
                                <el-input v-model="infoMsg.from_url" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="资讯简介">
                                <el-input type="textarea" v-model="infoMsg.brief_introduction" :disabled = "disabled"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="资讯封面图">
                                <div class="info_cover_img">
                                    <el-upload class="avatar-uploader" action="" :auto-upload="false" :on-change="changeCoverMapUpload" :multiple="false" :show-file-list="false">
                                        <img v-if="infoCoverUrl" :src="infoCoverUrl" class="avatar" alt="资讯封面">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                            </el-form-item>
                            
                            <el-form-item>
                                <el-button type="primary" @click="putInfoMsg" :disabled = "disabled">提交</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                <!-- 页面优化信息 -->
                <div class="operateUpfiles operateDown">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;页面优化信息</div>
                    </div>
                    <div class="operateUpfilesRight2">
                        <div class="messageBtn">
                            <el-form ref="form" label-width="100px">
                                <el-form-item>
                                    <el-button type="primary" @click="startChange2">开始编辑</el-button>
                                </el-form-item>
                                <el-form-item label="Title">
                                    <el-input v-model="infoMsg.title" :disabled = "disabled2"></el-input>
                                </el-form-item>
                                <el-form-item label="Keywords">
                                    <el-input v-model="infoMsg.keywords" :disabled = "disabled2"></el-input>
                                </el-form-item>
                                <el-form-item label="Description">
                                    <el-input v-model="infoMsg.description" :disabled = "disabled2"></el-input>
                                </el-form-item>
            
                                <el-form-item>
                                    <el-button type="primary" @click="putInfoOtherMsg" :disabled = "disabled2">提交</el-button>
                                </el-form-item>
                            </el-form>  
                        </div>
                    </div>
                </div>

                <!-- 活动介绍信息 -->
                <div class="operateUpfiles operateDown">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;资讯详情</div>
                    </div>
                    <div class="operateUpfilesRight2">
                        <el-button type="primary" @click="startChange3">编辑</el-button>
                        <div class="messageBtn">
                            <div id="editor">
                                <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
                            </div>
                            <div class="messageEditor">
                                <el-button type="primary" plain :disabled = "disabled3" @click="messageEmpty">清空</el-button>
                                <el-button type="primary" :disabled = "disabled3"  @click="putInfoTextMsg">提交</el-button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 完成按钮 -->
                <div class="operateFinalUp">
                    <el-button type="primary" @click="toBack" plain>返回</el-button>
                    <el-button type="primary" @click="toAdvise">下一步，编辑推荐信息</el-button>
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
            infoId: 0,
            infoCoverUrl:'',
            infoCoverFile:{},
            form: {
                Title: "123",
                Keywords: "",
                Description: ""
            },
            infoMsg:{},
            informationForm: {
                name: "河南科技学院",
                counsell_type: "提前面试",
                region: "提前面试",
                address: "河南省新乡市河南科技学院",
                web:"http://qinghua.cn",
                detial: "ahjksdbfhjbsahejsdnb"
            },
            disabled: true,
            disabled2: true,
            disabled3: true,
            counsellType: [],
            // 富文本编辑器
            editorContent:'',
            editor: new WangEditor('#editor'),
            id: 0,
        }
    },
    methods: {

        //捕获图片事件
        changeCoverMapUpload: function(file, fileList) {
            if(this.beforeAvatarUpload(file)) {
                this.infoCoverUrl = file.url;
                this.infoCoverFile = file.raw;
            }
        },        
        //上传图片判断
        beforeAvatarUpload(file) {
            const isJPG = file.raw.type === 'image/jpeg' || file.raw.type === 'image/png';
            const isLt2M = file.raw.size / 1024 / 1024 < 4;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 4MB!');
            }
            return isJPG && isLt2M;
        },

        startChange: function() {
            this.disabled = false;
        },
        startChange2: function() {
            this.disabled2 = false;
        },
        startChange3: function () {
            this.disabled3 = false;
            this.editor.$textElem.attr('contenteditable', true);
        },
        // 提交修改数据提交修改数据
        messageSubmit: function() {
            console.log(this.editor.txt.html());
            this.disabled3 = true;
            this.editor.$textElem.attr('contenteditable', false);
        },
        // 清空富文本编辑器内容
        messageEmpty: function() {
            this.editor.txt.clear();
        },
        //返回上一页
        toBack: function() {
            this.$router.push('/message/informationList');
        },
        // 跳转到推荐内容设置页面
        toAdvise: function() {
            if(this.$route.params.infoId != null) {
                this.$router.push('/message/recommend/' + this.$route.params.infoId);
            }
            else 
                this.message(true, 'error', 'error');
            
        },
        getAppointIdInfoMsg() {
            let _this = this;
            this.post('/admin/information/selectInfoReception', {
                infoId: this.infoId
            }).then((response) => {
                if(response.code == 0) {
                    _this.infoCoverUrl = response.result.z_image;
                    _this.infoMsg = response.result;
                    _this.editor.txt.html(response.result.z_text);
                }
                else
                    this.message(true, "未查询到指定资讯的信息", 'error');
                
            })
        },
        // 创建富文本编辑器
        createEditor() {
            let _this = this;
            this.editor.customConfig.onchange = (html) => {
                _this.editorContent = html;
            }
            this.editor.create();
            this.editor.$textElem.attr('contenteditable', false);
        },
        putInfoMsg() {
            let formdata = new FormData();
            formdata.append('infoName', this.infoMsg.zx_name);
            formdata.append('infoType', this.infoMsg.z_type);
            formdata.append('infoFrom', this.infoMsg.z_from);
            formdata.append('infoFromUrl', this.infoMsg.from_url);
            formdata.append('briefIntroduction', this.infoMsg.brief_introduction);
            formdata.append('infoImage', this.infoCoverFile);

            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.post('/admin/information/createInfo', formdata, config).then((response) => {
                if(response.code == 0) {
                    this.infoId = response.result;
                    this.message(true, response.msg, 'success');
                    this.$router.push('/message/changeInformation/' + this.infoId);
                }
            })
        },
        putInfoOtherMsg() {
            this.post('/admin/information/updateInfoExtendMsg', {
                infoId: this.infoId || this.$route.params.infoId,
                title: this.infoMsg.title,
                keywords: this.infoMsg.keywords,
                description: this.infoMsg.description
            }).then((response) => {
                if(response.code == 0) {
                    this.getAppointIdInfoMsg();
                    this.disabled2 = true;
                    this.message(true, response.msg, 'success');
                }
                else 
                    this.message(true, response.msg, 'error');
            })
        },
        putInfoTextMsg() {
            this.post('/admin/information/updateInfoTextMsg', {
                infoId: this.infoId || this.$route.params.infoId,
                text: this.editor.txt.html()
            }).then((response) => {
                if(response.code == 0) {
                    this.getAppointIdInfoMsg();
                    this.messageSubmit();
                    this.message(true, response.msg, 'success');
                }
                else 
                    this.message(true, response.msg, 'error');
            })
        }

        
    },
    mounted(){
        this.createEditor();

        if(this.$route.params.infoId != null && this.$route.params.infoId != '') {
            this.infoId = this.$route.params.infoId;
            this.getAppointIdInfoMsg();
        }

        this.getMajorPageOptions('post', '/admin/information/getInfoType', {}, (response) => {
            response.code == 0 ? this.counsellType = response.result : this.message(true, response.msg, 'error');
        }, () => {
            this.message(true, '未查询到资讯类型的信息', 'error')
        })
    },
};
</script>
<style>
/* 封面图样式 */
.info_cover_img .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.info_cover_img .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.info_cover_img .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 198px;
    height: 198px;
    line-height: 178px;
    text-align: center;
}
.info_cover_img .avatar {
    width: 198px;
    height: 198px;
    display: block;
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
* 步骤条样式
*/
.fileSteps {
  width: 400px;
  margin: 0 auto;
}
.fileSteps .el-steps--horizontal {
  margin: 20px 0;
}

/*
* 大块样式
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
  padding: 0 80px 50px;
  width: 1170px;
  border-bottom: 1px solid #e4e4e4;
}
.operateUpfilesRight button {
  float: right;
}


.operateUpfilesRight2 {
    padding: 40px 90px 40px 80px;
    width: 1170px;
}
.operateUpfilesRight2 {
    text-align: right;
}
.operateFinalUp {
    text-align: center;
    margin: 95px 0 70px;
}


#editor {
    margin: 20px 0;
    text-align: left;
}


</style>
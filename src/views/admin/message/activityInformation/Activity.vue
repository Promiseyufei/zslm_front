<template>
    <div>
        <div class="operateBox">
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>活动信息</el-breadcrumb-item>
                    <el-breadcrumb-item>活动信息编辑</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active=".1" align-center>
                        <el-step title="活动信息"></el-step>
                        <el-step title="推荐信息"></el-step>
                        <el-step title="消息通知"></el-step>
                    </el-steps>
                </div>

                <div>
                    <!-- 招生项目信息 -->
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;招生项目信息</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <el-form ref="ruleForm" :model="ruleForm" label-width="100px">
                                <el-form-item>
                                    <el-button type="primary" @click="startChange">开始编辑</el-button>
                                </el-form-item>
                                <el-form-item label="活动名称">
                                    <el-input v-model="ruleForm.name" :disabled="disabled"></el-input>
                                </el-form-item>
                                <el-form-item label="活动类型">

                                    <el-select v-model="ruleForm.type" placeholder="请选择活动类型" :disabled="disabled">
                                        <el-option :label="item.name" :value="item.id" v-for="(item, index) in actType"
                                                   :key="index"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="活动所在市">
                                    <el-select v-model="ruleForm.city" placeholder="请选择活动区域" :disabled="disabled">
                                        <el-option :label="item.name" :value="item.id" v-for="(item, index) in city"
                                                   :key="index"></el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="专业类型">
                                    <el-select v-model="ruleForm.spaticalType" placeholder="请选择专业类型"
                                               :disabled="disabled">
                                        <el-option :label="item.name" :value="item.id" v-for="(item, index) in major"
                                                   :key="index"></el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="活动地址">
                                    <el-input v-model="ruleForm.address" :disabled="disabled"></el-input>
                                </el-form-item>

                                <el-form-item label="选择时间">
                                    <template>
                                        <el-date-picker
                                                v-model="ruleForm.startTime"
                                                type="datetimerange"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                :disabled="disabled"
                                                value-format="yyyy-MM-dd"
                                                format="yyyy-MM-dd"
                                                @change="teste">
                                        </el-date-picker>
                                    </template>
                                </el-form-item>

                                <el-form-item label="报名状态">
                                    <el-select v-model="ruleForm.status" placeholder="请选择状态" :disabled="disabled">
                                        <el-option label="可报名" :value="0"></el-option>
                                        <el-option label="可提醒" :value="1"></el-option>

                                    </el-select>
                                </el-form-item>

                                <el-form-item label="活动封面图">
                                    <div class="activity_cover">
                                        <i v-if="activityCoverImg.activityCoverMapUrl" @click="changeCoverImgMsg">更改</i>
                                        <el-dialog title="上传封面" :visible.sync="dialogTableVisible" class="dialog">
                                            <el-form :model="activityCoverImg" label-position="left">
                                                <el-form-item>
                                                    <el-upload
                                                    class="upload-demo"
                                                    action=""
                                                    :show-file-list="false"
                                                    :auto-upload="false"
                                                    :multiple="false"
                                                    :on-change="changeCoverMapUpload" 
                                                    >
                                                        <i style="display: inline-flex;flex-direction:row;flex-wrap:nowrap">
                                                            <el-button size="small" type="primary">点击上传</el-button>
                                                            <span>当前以选择：<i>{{ activityCoverImg.activityCoverDefultName }}</i></span>
                                                        </i>
                                                    </el-upload>
                                                </el-form-item>
                                                <el-form-item label="图片名称" :label-width="formLabelWidth">
                                                    <el-input v-model="activityCoverImg.activityCoverImgName"></el-input>
                                                </el-form-item>
                                                <el-form-item label="图片描述" :label-width="formLabelWidth">
                                                    <el-input v-model="activityCoverImg.activityCoverDiscribe"></el-input>
                                                </el-form-item>
                                                <el-form-item>
                                                    <el-button @click="dialogTableVisible = false">取 消</el-button>
                                                    <el-button type="primary" @click="changeActivityCoverImgMsg">确 定</el-button>
                                                </el-form-item>
                                            </el-form>
                                        </el-dialog>
                                        <el-upload class="avatar-uploader" action="" :auto-upload="false" :on-change="changeCoverMapUpload" :multiple="false" :show-file-list="false">
                                            <img v-if="activityCoverImg.activityCoverMapUrl" :src="activityCoverImg.activityCoverMapUrl" class="avatar" alt="活动封面图">
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                    </div>

                                </el-form-item>

                                <el-form-item>
                                    <el-button type="primary" @click="projectSubmit" :disabled="disabled">提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>

                    <!-- 所有招生项目 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;所有招生项目</div>
                        </div>
                        <div class="operateUpfilesRight2">
                            <div class="messageBtn">
                                <el-form ref="form" :model="form" label-width="100px">
                                    <el-form-item>
                                        <el-button type="primary" @click="startChange2">开始编辑</el-button>
                                    </el-form-item>
                                    <el-form-item label="Title">
                                        <el-input v-model="form.Title" placeholder="请输入Title"
                                                  :disabled="disabled2"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Keywords">
                                        <el-input v-model="form.Keywords" placeholder="请输入Keywords"
                                                  :disabled="disabled2"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Description">
                                        <el-input v-model="form.Description" placeholder="请输入Description"
                                                  :disabled="disabled2"></el-input>
                                    </el-form-item>

                                    <el-form-item>
                                        <el-button type="primary" :disabled="disabled2" @click="keySublimit">提交
                                        </el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>

                    <!-- 活动介绍信息 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;活动介绍信息</div>
                        </div>
                        <div class="operateUpfilesRight2">
                             <el-button type="primary" @click="startChange3">编辑</el-button>
                    <!---->
                            <div class="messageBtn">
                                <div id="editor">
                                    <!-- <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p> -->
                                    <div v-html="ruleForm.introduce"></div>
                                </div>
                                <div class="messageEditor">
                                    <el-button type="primary" plain :disabled="disabled3" @click="messageEmpty">清空
                                    </el-button>
                                    <el-button type="primary" :disabled="disabled3" @click="messageSubmit">提交</el-button>
                                </div>
                            </div>
                            <!-- </div> -->
                        </div>
                    </div>

                    <!-- 完成按钮 -->
                    <div class="operateFinalUp">
                        <el-button type="primary" @click="toAdvise">下一步，编辑推荐信息</el-button>
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
                formLabelWidth: '120px',
                activityCoverImg:{
                    activityCoverMapFile:{},
                    activityCoverMapUrl:'',
                    activityCoverImgName:'',
                    activityCoverDiscribe:'',
                    activityCoverDefultName:''
                },
                
                dialogTableVisible: false,
                actId: 0,
                record: 0,
                string: '请选择',
                form: {
                    Title: "",
                    Keywords: "",
                    Description: ""
                },
                ruleForm: {
                    name: "",
                    type: this.string,
                    // region: this.string,
                    city: this.string,
                    spaticalType: this.string,
                    address: "",
                    time: "",
                    startTime: "",
                    endTime: "",
                    status: this.string,
                    coverImgName:'',
                    coverImgDescribe:'',
                    introduce:''
                },
                // 活动ID
                id: 1,

                hostId:0,
                // 省份字典
                // province: [],
                // 专业字典
                major: [],
                city: [],
                actType: [],
                // 富文本编辑器
                editorContent: '',
                imgUrls: [],
                isShow: true,
                disabled: true,
                disabled2: true,
                disabled3: true,
                editor: new WangEditor('#editor'),
                fileList2: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }]
            }
        },
        computed: {
            getMapFile() {
                return this.activityCoverImg.activityCoverMapFile;
            }
        },
        watch: {
            getMapFile(newVal, oldVal) {
                if(JSON.stringify(newVal) != "{}") {
                    this.ruleForm.coverImgName = '';
                    this.activityCoverImg.activityCoverImgName = '';
                }                
            }
        },
        methods: {

            /**
             * info
             * 初始化地区字典以及专业字典
             */
            teste() {
                // console.log(this.ruleForm.startTime)
            },
            info: function () {
                let self = this;
                this.fetch('/admin/information/getpageinfo')
                    .then(res => {
                        // console.log(res)
                        if (res.code == 0) {
                            // self.province = res.result['provice'];
                            self.major = res.result['major'];
                            self.city = res.result['city'];
                            self.actType = res.result['type']
                        } else {

                        }
                    })
                    .catch(error => {

                    })


            },
            changeCoverImgMsg() {
                this.dialogTableVisible = true;
            },
            
            changeActivityCoverImgMsg() {
                this.ruleForm.coverImgName = this.activityCoverImg.activityCoverImgName;
                this.ruleForm.coverImgDescribe = this.activityCoverImg.activityCoverDiscribe;
                this.dialogTableVisible = false;
            },

            getone() {
                let that = this;
                this.fetch('/admin/information/getoneact', {
                    id: that.actId
                })
                    .then(res => {
                        if (res.code == 0) {
                            console.log(res.result);
                            that.ruleForm.name = res.result.active_name;
                            that.ruleForm.type = res.result.active_type;
                            that.ruleForm.city =parseInt(res.result.province);
                            that.ruleForm.spaticalType = res.result.major_type;
                            that.ruleForm.address = res.result.address;
                            that.ruleForm.startTime = [];
                            that.ruleForm.startTime.push(res.result.begin_time);
                            that.hostId = res.result.host_major_id;
                            that.ruleForm.startTime.push(res.result.end_time);
                            that.ruleForm.status=res.result.sign_up_state;
                            that.ruleForm.coverImgName = res.result.active_cover_img_name.split('.')[0];
                            that.ruleForm.coverImgDescribe = res.result.active_alt;
                            

                            that.form.Title = res.result.title;
                            that.form.Keywords = res.result.keywords;
                            that.form.Description = res.result.description;
                            that.ruleForm.introduce = res.result.introduce;
                            
                            that.activityCoverImg.activityCoverMapUrl = res.result.active_img;
                            that.activityCoverImg.activityCoverDefultName = res.result.active_cover_img_name;
                            that.activityCoverImg.activityCoverImgName = that.activityCoverImg.activityCoverDefultName.split('.')[0];
                            console.log(that.activityCoverImg.activityCoverImgName);
                            that.activityCoverImg.activityCoverDiscribe = res.result.active_alt;

                        } else {
                            that.message(true, '出错了 请刷新一下', 'error')
                        }
                    })
            },
            // judgeSelect() {
            //     if (this.ruleForm.type == this.string + '活动类型') {
            //         return '请选择活动类型';
            //     }
            //     if (this.ruleForm.city == this.string + '活动区域') {
            //         return '请选择活动所在市';
            //     }
            //     if (this.ruleForm.spaticalType == this.string + '专业类型') {
            //         return '请选择专业';
            //     }
            //     if (this.ruleForm.status == this.string + '状态') {
            //         return '请选择状态';
            //     }
            //     if (this.activityCoverMapUrl.length == 0) {
            //         return '请选择图片';
            //     }
            //     return '';
            // },
            startChange3: function () {
                this.disabled3 = false;
                this.editor.$textElem.attr('contenteditable', true);
            },
            //将base64转换为文件
            dataURLtoFile: function (dataurl, filename) {
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new File([u8arr], filename, {type: mime});
            },

            startChange: function () {
                this.disabled = false;
            },
            startChange2: function () {
                this.disabled2 = false;
            },
            // 提交表单数据
            projectSubmit: function () {

                let self = this;
                // let img = this.imgUrls;
                // img = this.dataURLtoFile(img[0], 'uploadfile');
                
                var fd = new FormData();
                fd.append('activityName', self.ruleForm.name);
                fd.append('activityType', self.ruleForm.type);
                fd.append('province', self.ruleForm.city);
                fd.append('majorType', self.ruleForm.spaticalType);
                fd.append('address', self.ruleForm.address);
                fd.append('beginTime', self.ruleForm.startTime[0]);
                fd.append('endTime', self.ruleForm.startTime[1]);
                fd.append('signUpState', self.ruleForm.status);

                fd.append('coverImgName', self.ruleForm.coverImgName);
                fd.append('coverImgDescribe', self.ruleForm.coverImgDescribe);
                fd.append('activityCoverImg', self.activityCoverImg.activityCoverMapFile);

                let imgFile = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                if (this.actId == 0) {
                    this.post('/admin/information/createActivity', fd, imgFile)
                        .then(res => {
                            if (res.code == 0) {
                                self.message(true, '上传成功', 'success');
                                self.record = res.result;
                                this.$router.push('/admin/message/activity/' + self.record);
                            } else {
                                self.message(true, '上传失败', 'info');
                            }
                        })
                } else {
                    fd.append('id', self.actId);
                    this.post('/admin/information/updateActivity', fd, imgFile)
                        .then(res => {
                            if (res.code == 0) {
                                console.log(res.result);
                                self.message(true, '修改成功', 'success');
                            } else {
                                self.message(true, '修改失败', 'info');
                            }

                        })
                }

                // 提交表单数据，没有找到相应的接口
            },

            keySublimit: function () {
                if (this.record == 0) {
                    this.message(true, '请先创建活动', 'error');
                    return;
                } else if (this.form.Title == '') {
                    this.message(true, 'error', '请输入 title');
                    return;
                } else if (this.form.Keywords == '') {
                    this.message(true, 'error', '请输入 keywords');
                    return;
                } else if (this.form.Description == '') {
                    this.message(true, 'error', '请输入 description');
                    return;
                }

                let that = this;
                this.post('/admin/information/setkwt', {
                    id: that.record,
                    title: that.form.Title,
                    keywords: that.form.Keywords,
                    description: that.form.Description
                }).then(res => {
                    if (res.code == 0) {
                        console.log(res.result);
                        that.message(true, '提交成功', 'success');
                    } else {
                        that.message(true, '提交失败 请重试', 'error')
                    }
                })
                    .catch(error => {
                        that.message(true, '提交失败 请重试', 'error')
                    })
            },

            inPost: function () {
                let that = this;
                if (this.record == 0) {
                    this.message(true, '请先创建活动', 'error');
                    return;
                } else if (that.editor.txt.html() == '') {
                    this.message(true, '请输入内容', 'error');
                    return;
                }
                
                this.post('/admin/information/setin', {
                    id: that.record,
                    introduce: that.editor.txt.html()
                }).then(res => {
                    if (res.code == 0) {
                        that.message(true, '提交成功', 'success');
                    } else {
                        that.message(true, '提交失败 请重试', 'error')
                    }
                })
                    .catch(error => {
                        that.message(true, '提交失败 请重试', 'error')
                    })
            },

            // 跳转页面
            toAdvise: function () {
                // if(this.record == 0){
                //     this.message(true,'请先创建活动','error');
                //     return;
                // }
                this.$router.push('/admin/message/advise/' + this.record);
            },

            // 提交修改数据

            messageSubmit: function () {
                this.disabled3 = false;
                this.editor.$textElem.attr('contenteditable', false);
                this.inPost();
            },
            // 清空富文本编辑器内容
            messageEmpty: function() {
                this.editor.txt.clear();
            },
            //弹出上传图片对话框
            // addPic: function (e) {
            //     $('input[type=file]').trigger('click');
            //     return false;
            // },
            //删除图片
            delImage: function (index) {
                let vm = this;
                vm.$vux.confirm.show({
                    content: '取消选择？',
                    onConfirm() {
                        vm.imgUrls.splice(index, 1);
                        vm.count--;
                        vm.count < 3 ? vm.isShow = true : vm.isShow;
                        vm.$vux.toast.text('图片删除成功', 'top');
                    }
                });
            },
            
            changeCoverMapUpload: function(file, fileList) {
                
                if(this.beforeAvatarUpload(file)) {
                    this.activityCoverImg.activityCoverMapUrl = file.url;
                    this.activityCoverImg.activityCoverMapFile = file.raw;
                    this.activityCoverImg.activityCoverDefultName = file.name;
                    // this.
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
        },
        mounted() {
            // this.province = this.getProvince();
            // this.getMajor();
            this.actId = this.$route.params.actId
            this.editor.customConfig.onchange = (html) => {
                this.editorContent = html;
            }
            this.editor.create();
            this.editor.$textElem.attr('contenteditable', false);
            this.info();

            if (this.actId != 0) {
                this.record = this.actId
                this.getone();
            }
        }
    };
</script>
<style>
    /*活动封面 */
    .activity_cover .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .activity_cover .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .activity_cover .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 250px;
        height: 250px;
        line-height: 250px;
        text-align: center;
    }
    /* #major_cover_map .avatar-uploader-icon {
        width: 250px !important;
    } */
    .activity_cover .avatar {
        width: 250px;
        height: 250px;
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
    * 富文本编辑器
    */
    /* #editor {
      text-align: left;
    }
    .messageEditor {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;

    } */

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

    .operateUpfilesRight2 {
        text-align: right;
    }

    .operateFinalUp {
        text-align: center;
        margin: 95px 0 70px;
    }

    .submit-picture {
        color: #13ce66;
        margin: 0 10px;
    }

    .el-upload {
        float: left;
    }

    .el-upload-list--picture .el-upload-list__item {
        border: 0px solid #c0ccda;
        padding: 0px;
        margin-right: 10px;
        width: 95px;
        height: 95px;
    }

    .el-upload-list--picture .el-upload-list__item-thumbnail {
        margin-left: 0px !important;
    }

    .el-upload__tip {
        display: none;
    }

    .el-upload-list--picture {
        float: left;
    }

    .show, .add {
        display: inline-block;
        width: 60px;
        height: 60px;
        overflow: hidden;
    }

    .show {
        margin: 0 10px 0;
    }

    .add {
        /*background-image:url('../../../img/wx/add.png');*/
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .picture {
        display: inline-block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>


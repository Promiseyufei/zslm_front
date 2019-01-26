<template>
    <div>
        <div class="operateBox">
            <!-- 中间内容  -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>辅导机构</el-breadcrumb-item>
                    <el-breadcrumb-item class="selectedNavPublic">辅导机构信息编辑</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active=".1" align-center>
                        <el-step title="辅导机构信息"></el-step>
                        <el-step title="优惠卷设置"></el-step>
                        <el-step title="相关活动设置"></el-step>
                    </el-steps>
                </div>

                <!-- 辅导机构基本信息 -->
                <div class="operateUpfiles operateUp">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;辅导机构基本信息</div>
                    </div>
                    <div class="operateUpfilesRight">
                        <el-form ref="counsellForm" :model="counsellForm" label-width="100px">
                            <el-form-item>
                                <el-button type="primary" @click="startChange">开始编辑</el-button>
                            </el-form-item>

                            <el-form-item label="是否展示">
                                <el-select v-model="counsellForm.show" placeholder="请选择" :disabled="disabled">
                                    <el-option :label="item.type" :value="item.id"
                                               v-for="(item, index) in counsell_type" :key="index"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="辅导机构名称">
                                <el-input v-model="counsellForm.name" :disabled="disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="机构所在省">
                                <el-select v-model="counsellForm.region" placeholder="请选择活动区域" :disabled="disabled">
                                    <el-option :label="item.name" :value="item.id" v-for="(item, index) in province"
                                               :key="index"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="所在总部">
                                <el-select v-model="counsellForm.father" placeholder="请选择总部" :disabled="disabled">
                                    <el-option :label="item.coach_name" :value="item.id" v-for="(item, index) in coach"
                                               :key="index"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="联系电话">
                                <el-input v-model="counsellForm.tell" :disabled="disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="地址">
                                <el-input v-model="counsellForm.address" :disabled="disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="网址">
                                <el-input v-model="counsellForm.web" :disabled="disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="课程形式">
                                <el-radio-group v-model="counsellForm.type" :disabled="disabled">
                                    <el-radio label="线上" :value="0">线上</el-radio>
                                    <el-radio label="线下" :value="1">线下</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="优惠卷">
                                <el-radio-group v-model="counsellForm.cheap" :disabled="disabled">
                                    <el-radio label="启用" :value="0">启用</el-radio>
                                    <el-radio label="禁用" :value="1">禁用</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="退款保障">
                                <el-radio-group v-model="counsellForm.refund" :disabled="disabled">
                                    <el-radio label="支持" :value="0">支持</el-radio>
                                    <el-radio label="不支持" :value="1">不支持</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="院校logo">
                                <div class="coach_logo_img">
                                    <i v-if="coachLogoAndCoverImg.coachLogoUrl" @click="dialogLogoTableVisible = true">更改</i>
                                    <el-dialog title="上传Logo" :visible.sync="dialogLogoTableVisible" class="dialog">
                                        <el-form :model="coachLogoAndCoverImg" label-position="left">
                                            <el-form-item>
                                                <el-upload
                                                class="upload-demo"
                                                action=""
                                                :show-file-list="false"
                                                :auto-upload="false"
                                                :multiple="false"
                                                :on-change="changeLogoUpload" 
                                                >
                                                    <i style="display: inline-flex;flex-direction:row;flex-wrap:nowrap">
                                                        <el-button size="small" type="primary">点击上传</el-button>
                                                        <span>当前以选择：<i>{{ coachLogoAndCoverImg.coachLogoDefultName }}</i></span>
                                                    </i>
                                                </el-upload>
                                            </el-form-item>
                                            <el-form-item label="图片名称" :label-width="formLabelWidth">
                                                <el-input v-model="coachLogoAndCoverImg.coachLogoImgName"></el-input>
                                            </el-form-item>
                                            <el-form-item label="图片描述" :label-width="formLabelWidth">
                                                <el-input v-model="coachLogoAndCoverImg.coachLogoDiscribe"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button @click="dialogLogoTableVisible = false">取 消</el-button>
                                                <el-button type="primary" @click="changeCoachLogoImgMsg">确 定</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </el-dialog>
                                    <el-upload class="avatar-uploader" action="" :auto-upload="false"
                                               :on-change="changeLogoUpload" :multiple="false" :show-file-list="false">
                                        <img v-if="coachLogoAndCoverImg.coachLogoUrl" :src="coachLogoAndCoverImg.coachLogoUrl" class="avatar" alt="院校logo">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                            </el-form-item>


                            <!-- 院校封面图 -->
                            <el-form-item label="院校封面图">
                                <div class="coach_cover_img">
                                    <i v-if="coachLogoAndCoverImg.coachCoverMapUrl" @click="dialogCoverTableVisible = true">更改</i>
                                    <el-dialog title="上传Logo" :visible.sync="dialogCoverTableVisible" class="dialog">
                                        <el-form :model="coachLogoAndCoverImg" label-position="left">
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
                                                        <span>当前以选择：<i>{{ coachLogoAndCoverImg.coachCoverDefultName }}</i></span>
                                                    </i>
                                                </el-upload>
                                            </el-form-item>
                                            <el-form-item label="图片名称" :label-width="formLabelWidth">
                                                <el-input v-model="coachLogoAndCoverImg.coachCoverImgName"></el-input>
                                            </el-form-item>
                                            <el-form-item label="图片描述" :label-width="formLabelWidth">
                                                <el-input v-model="coachLogoAndCoverImg.coachCoverDiscribe"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button @click="dialogCoverTableVisible = false">取 消</el-button>
                                                <el-button type="primary" @click="changeCoachCoverImgMsg">确 定</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </el-dialog>
                                    <el-upload class="avatar-uploader" action="" :auto-upload="false"
                                                :on-change="changeCoverMapUpload" :multiple="false"
                                                :show-file-list="false">
                                        <img v-if="coachLogoAndCoverImg.coachCoverMapUrl" :src="coachLogoAndCoverImg.coachCoverMapUrl" class="avatar"
                                                alt="院校封面图">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="postC" :disabled="disabled">提交</el-button>
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
                                    <el-input v-model="form.Title" :disabled="disabled2"></el-input>
                                </el-form-item>
                                <el-form-item label="Keywords">
                                    <el-input v-model="form.Keywords" :disabled="disabled2"></el-input>
                                </el-form-item>
                                <el-form-item label="Description">
                                    <el-input v-model="form.Description" :disabled="disabled2"></el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="primary" @click="postK" :disabled="disabled2">提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>

                <!-- 活动介绍信息 -->
                <div class="operateUpfiles operateDown">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;辅导机构简介</div>
                    </div>
                    <div class="operateUpfilesRight2">
                        <el-button type="primary" @click="startChange3">编辑</el-button>
                        <div class="messageBtn">
                            <div id="editor">
                                <!-- <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p> -->
                                 <!-- <div v-html="editorContent"></div> -->
                            </div>
                            <div class="messageEditor">
                                <el-button type="primary" plain :disabled="disabled3" @click="messageEmpty">清空
                                </el-button>
                                <el-button type="primary" :disabled="disabled3" @click="messageSubmit">提交</el-button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 完成按钮 -->
                <div class="operateFinalUp">
                    <el-button type="primary" @click="toBack" plain>返回</el-button>
                    <el-button type="primary" @click="toAdvise">下一步，优惠卷设置</el-button>
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
                dialogLogoTableVisible: false,
                dialogCoverTableVisible: false,
                form: {
                    Title: "",
                    Keywords: "",
                    Description: ""
                },
                coachLogoAndCoverImg: {
                    coachCoverMapFile: {},
                    coachCoverMapUrl:'',
                    coachCoverImgName:'',
                    coachCoverDiscribe: '',
                    coachCoverDefultName:'',

                    coachLogoFile: {},
                    coachLogoUrl:'',
                    coachLogoImgName:'',
                    coachLogoDiscribe: '',
                    coachLogoDefultName:'',
                },
                counsellForm: {
                    counsell_type: '请选择',
                    name: "",
                    region: "",
                    tell: "",
                    address: "",
                    web: "",
                    type: 0,
                    cheap: 0,
                    refund: 0,
                    father: 0,
                    show: '',
                    logoName:'',
                    logoImgDescribe:'',
                    coverName:'',
                    coverImgDescribe:''
                },
                disabled: true,
                disabled2: true,
                disabled3: true,
                counsell_type: [
                    {
                        id: 0,
                        type: "展示"
                    },
                    {
                        id: 1,
                        type: "不展示"
                    }
                ],
                // 省份字典
                province: [],
                coach: [],
                // 富文本编辑器
                editorContent: '',
                editor: new WangEditor('#editor'),
                id: 0,
                majorLogoUrl: '',
                majorLogoFile: null,
                majorCoverMapUrl: '',
                majorCoverMapFile: ''
            }
        },
        computed: {
            getCoachLogoFile() {
                return this.coachLogoAndCoverImg.coachLogoFile;
            },
            getCoachCoverFile() {
                return this.coachLogoAndCoverImg.coachCoverMapFile;
            }
        },
        watch: {
            getCoachLogoFile(newLogo, old) {
                if(JSON.stringify(newLogo) != "{}") {
                    this.counsellForm.logoName = '';
                    this.coachLogoAndCoverImg.coachLogoImgName = '';
                }
            },
            getCoachCoverFile(newCover, old) {
                if(JSON.stringify(newCover) != "{}") {
                    this.counsellForm.coverName = '';
                    this.coachLogoAndCoverImg.coachCoverImgName = '';
                }
            }
        },
        methods: {
            changeCoachLogoImgMsg() {
                this.counsellForm.logoName = this.coachLogoAndCoverImg.coachLogoImgName;
                this.counsellForm.logoImgDescribe = this.coachLogoAndCoverImg.coachLogoDiscribe;
                this.dialogLogoTableVisible = false;
            },
            changeCoachCoverImgMsg() {
                this.counsellForm.coverName = this.coachLogoAndCoverImg.coachCoverImgName;
                this.counsellForm.coverImgDescribe = this.coachLogoAndCoverImg.coachCoverDiscribe;
                this.dialogCoverTableVisible = false;
            },

            getOne() {
                let self = this;
                this.fetch('/admin/information/getonecoach', {
                    id: parseInt(self.id)
                }).then(res => {
                    if(res.code == 0){
                        self.editorContent = res.result.describe;
                        // console.log(self.editorContent)
                        self.editor.txt.html(self.editorContent);
                        self.counsellForm.name = res.result.coach_name
                        self.counsellForm.region =  parseInt(res.result.province)
                        self.counsellForm.tell = res.result.phone
                        self.counsellForm.address = res.result.address
                        self.counsellForm.web = res.result.web_url
                        self.counsellForm.type = res.result.coach_type == 0 ? '线上' : '线下'
                        self.counsellForm.cheap = res.result.if_coupons == 0 ? '启用' : '禁用'
                        self.counsellForm.refund = res.result.if_back_money == 0 ? '支持' : '不支持'
                        self.counsellForm.show = res.result.is_show
                        self.counsellForm.father = res.result.father_id

                        self.counsellForm.logoName = res.result.logo_name.split('.')[0];
                        self.counsellForm.logoImgDescribe = res.result.logo_alt;
                        self.counsellForm.coverName = res.result.cover_name.split('.')[0];
                        self.counsellForm.coverImgDescribe = res.result.cover_alt;

                        self.form.Title = res.result.title;
                        self.form.Keywords = res.result.keywords;
                        self.form.Description = res.result.description;

                        self.coachLogoAndCoverImg.coachLogoUrl = res.result.coach_logo_img_name;
                        self.coachLogoAndCoverImg.coachLogoDefultName = res.result.logo_name;
                        self.coachLogoAndCoverImg.coachLogoImgName = self.coachLogoAndCoverImg.coachLogoDefultName.split('.')[0];
                        self.coachLogoAndCoverImg.coachLogoDiscribe = res.result.logo_alt;
                        self.coachLogoAndCoverImg.coachCoverMapUrl = res.result.coach_cover_img_name;
                        self.coachLogoAndCoverImg.coachCoverDefultName = res.result.cover_name;
                        self.coachLogoAndCoverImg.coachCoverImgName = self.coachLogoAndCoverImg.coachCoverDefultName.split('.')[0];
                        self.coachLogoAndCoverImg.coachCoverDiscribe = res.result.cover_alt;

                    }
                })
                    
            },


            info: function () {
                let self = this;
                this.fetch('/admin/information/getcoachinfo')
                    .then(res => {
                        if (res.code == 0) {
                            self.province = res.result['provice'];
                            res.result['coach'].unshift({'id': 0, 'coach_name': '自主办校'})
                            self.coach = res.result['coach'];
                        } else {

                        }
                    })
                    .catch(error => {

                    })
            },
            changeLogoUpload: function (file, fileList) {
                if (this.beforeAvatarUpload(file)) {
                    this.coachLogoAndCoverImg.coachLogoUrl = file.url;
                    this.coachLogoAndCoverImg.coachLogoFile = file.raw;
                    this.coachLogoAndCoverImg.coachLogoDefultName = file.name;
                }
            },
            changeCoverMapUpload: function (file, fileList) {
                if (this.beforeAvatarUpload(file)) {
                    this.coachLogoAndCoverImg.coachCoverMapUrl = file.url;
                    this.coachLogoAndCoverImg.coachCoverMapFile = file.raw;
                    this.coachLogoAndCoverImg.coachCoverDefultName = file.name;
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

            postK: function () {
                let that = this;
                this.post('/admin/information/createktd', {
                    id: that.id,
                    keywords: that.form.Keywords,
                    title: that.form.Title,
                    description: that.form.Description
                }).then(res => {
                    if(res.code == 0){
                        that.message(true,'提交成功','success')
                    }else{
                        that.message(true,'提交失败','error')
                    }
                })

            },
            postC: function () {
                let that = this;
                var fd = new FormData();
                let imgFile = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                let url = '/admin/information/updateCoach';
                    // url = '/admin/information/updateCoach';
                if(this.id != 0){
                    fd.append('id', this.id);
                }
                fd.append('coach_name', that.counsellForm.name);
                fd.append('provice', that.counsellForm.region)
                fd.append('phone', that.counsellForm.tell);
                fd.append('address', that.counsellForm.address);
                fd.append('web_url', that.counsellForm.web);
                fd.append('father_id', that.counsellForm.father);
                fd.append('if_coupons', that.counsellForm.cheap == '启用' ? 0 : 1);
                fd.append('if_back_money', that.counsellForm.refund == '支持' ? 0 : 1)
                fd.append('coach_type', that.counsellForm.type == '线上' ? 0 : 1);
                fd.append('is_show', that.counsellForm.show);

                fd.append('logo_img_name', that.counsellForm.logoName);
                fd.append('logo_img_describe', that.counsellForm.logoImgDescribe);
                fd.append('logo_img', that.coachLogoAndCoverImg.coachLogoFile);

                fd.append('cover_img_name', that.counsellForm.coverName);
                fd.append('cover_img_describe', that.counsellForm.coverImgDescribe);
                fd.append('cover_img', that.coachLogoAndCoverImg.coachCoverMapFile);

                this.post(url, fd, imgFile).then(
                    res => {
                        // console.log(res.result);return false;
                        if(that.id == 0) {
                            that.id = res.result;
                            this.$router.push('/admin/message/changeMessage/' + that.id);
                        }
                        if(res.code == 0){
                            that.message(true,'提交成功','success')
                        }else{
                            that.message(true,'提交失败','error')
                        }
                    }
                )
            },
            postD() {
                let that = this;
                this.post('/admin/information/created', {
                    id: that.id,
                    describe: that.editor.txt.html()
                }).then(res => {
                    if(res.code == 0){
                        that.message(true,'提交成功','success')
                    }else{
                        that.message(true,'提交失败','error')
                    }
                })
            },

            startChange: function () {
                this.disabled = false;
            },
            startChange2: function () {
                this.disabled2 = false;
            },
            startChange3: function () {
                this.disabled3 = false;
                this.editor.$textElem.attr('contenteditable', true);
            },
            // 提交修改数据
            messageSubmit: function () {
                this.disabled3 = true;
                this.editor.$textElem.attr('contenteditable', false);
                this.postD()
            },
            // 清空富文本编辑器内容
            messageEmpty: function () {
                this.editor.txt.clear();
            },
            //返回上一页
            toBack: function () {
                this.$router.push('/admin/message/coachList');
            },
            // 跳转到优惠卷设置页面
            toAdvise: function () {
                this.$router.push('/admin/message/coupon/' + this.id);
            },

        },
        mounted() {
            this.id = this.$route.params.cid
            this.info();
            if (this.id != 0) {
                this.getOne()
            }
            // 创建富文本编辑器
            // this.editor.customConfig.onchange = (html) => {
            //     this.editorContent = html;
            // }
            // console.log(this.editorContent +'aaa')
            this.editor.create();
            // this.editor.txt.html(this.editorContent);
            this.editor.$textElem.attr('contenteditable', false);
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

<style>
    /* coach logo */
    .coach_logo_img .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .coach_logo_img .el-upload:hover {
        border-color: #409EFF;
    }

    .coach_logo_img .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }

    .coach_logo_img .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }


    /* coach cover */
    .coach_cover_img .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .coach_cover_img .el-upload:hover {
        border-color: #409EFF;
    }

    .coach_cover_img .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
    }

    .coach_cover_img .avatar {
        width: 200px;
        height: 200px;
        display: block;
    }


</style>

<template>
    <div>
        <div class="operateBox">
            <!-- 中间内容  -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>辅导机构</el-breadcrumb-item>
                    <el-breadcrumb-item  class="selectedNavPublic">辅导机构信息编辑</el-breadcrumb-item>
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
                                <el-select v-model="counsellForm.show" placeholder="请选择" :disabled = "disabled">
                                    <el-option :label="item.type" :value="item.id" v-for="(item, index) in counsell_type" :key="index"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="辅导机构名称">
                                <el-input v-model="counsellForm.name" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="所在省市">
                                <el-select v-model="counsellForm.region" placeholder="请选择活动区域" :disabled = "disabled">
                                    <el-option :label="item.name" :value="item.id" v-for="(item, index) in province" :key="index"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="总部">
                                <el-select v-model="counsellForm.father" placeholder="请选择总部" :disabled = "disabled">
                                    <el-option :label="item.coach_name" :value="item.id" v-for="(item, index) in coach" :key="index"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="联系电话">
                                <el-input v-model="counsellForm.tell" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="地址">
                                <el-input v-model="counsellForm.address" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="网址">
                                <el-input v-model="counsellForm.web" :disabled = "disabled"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="课程形式">
                                <el-radio-group v-model="counsellForm.type" :disabled = "disabled">
                                    <el-radio label="线上" :value="0">线上</el-radio>
                                    <el-radio label="线下" :value="1">线下</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="优惠卷">
                                <el-radio-group v-model="counsellForm.cheap" :disabled = "disabled">
                                    <el-radio label="启用" :value="0">启用</el-radio>
                                    <el-radio label="禁用" :value="1">禁用</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="退款保障">
                                <el-radio-group v-model="counsellForm.refund" :disabled = "disabled">
                                    <el-radio label="支持" :value="0">支持</el-radio>
                                    <el-radio label="不支持" :value="1">不支持</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="院校logo">
                                <div class="major_img">
                                    <el-upload class="avatar-uploader" action="" :auto-upload="false" :on-change="changeLogoUpload" :multiple="false" :show-file-list="false">
                                        <img v-if="majorLogoUrl" :src="majorLogoUrl" class="avatar" alt="院校logo">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                            </el-form-item>


                            <!-- 院校封面图 -->
                            <el-form-item label="院校封面图">
                                <div class="major_img">
                                    <div id="major_cover_map">
                                        <el-upload class="avatar-uploader" action="" :auto-upload="false" :on-change="changeCoverMapUpload" :multiple="false" :show-file-list="false">
                                            <img v-if="majorCoverMapUrl" :src="majorCoverMapUrl" class="avatar" alt="院校封面图">
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                    </div>
                                </div>
                            </el-form-item>
                            <!--<el-form-item label="官方微信">
                                <div style="padding: 0 5px 5px 8px">
                                    <div class="add" @click.stop="addPic" cuort>
                                        <input type="file" id="upload" accept="image" @change="upload" style="display: none">
                                        <span style="color:#B2B2B2;" >添加图片</span>
                                    </div>
                                    <li class="show" v-for="(iu, index) in imgUrls">
                                        <div class="picture" @click="delImage(index)" :style="'backgroundImage:url('+iu+')'"></div>
                                    </li>
                                </div>
                            </el-form-item> -->
                            
                            <el-form-item>
                                <el-button type="primary" @click="postC" :disabled = "disabled">提交</el-button>
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
                                    <el-input v-model="form.Title" :disabled = "disabled2"></el-input>
                                </el-form-item>
                                <el-form-item label="Keywords">
                                    <el-input v-model="form.Keywords" :disabled = "disabled2"></el-input>
                                </el-form-item>
                                <el-form-item label="Description">
                                    <el-input v-model="form.Description" :disabled = "disabled2"></el-input>
                                </el-form-item>
            
                                <el-form-item>
                                    <el-button type="primary" @click="postK" :disabled = "disabled2">提交</el-button>
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
                                <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
                            </div>
                            <div class="messageEditor">
                                <el-button type="primary" plain :disabled = "disabled3" @click="messageEmpty">清空</el-button>
                                <el-button type="primary" :disabled = "disabled3"  @click="messageSubmit">提交</el-button>
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
    components: {
    },
    data() {
        return {
            form: {
                Title: "123",
                Keywords: "",
                Description: ""
            },
            counsellForm: {
                counsell_type: '请选择',
                name: "河南科技学院",
                region: "河南省",
                tell: "18303612352",
                address: "河南省新乡市河南科技学院",
                web:"http://qinghua.cn",
                type: 0,
                cheap:0,
                refund: 0,
                father:0,
                show:'',
                logo:'',
                cover:''
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
            coach:[],
            // 富文本编辑器
            editorContent:'',
            editor: new WangEditor('#editor'),
            id: 0,
            majorLogoUrl:'',
            majorLogoFile:null,
            majorCoverMapUrl:'',
            majorCoverMapFile:''
        }
    },
    methods: {
        info:function(){
            let self = this;
            this.fetch('/admin/information/getcoachinfo')
                .then(res=>{
                    if(res.code == 0){
                        self.province = res.result['provice'];
                        res.result['coach'].unshift({'id':0,'coach_name':'自主办校'})
                        self.coach = res.result['coach'];
                        console.log(self.coach)
                    }else{

                    }
                })
                .catch(error=>{

                })
        },
        changeLogoUpload: function(file,fileList) {
            if(this.beforeAvatarUpload(file)) {
                console.log(file.url);
                this.majorLogoUrl = file.url;
                this.majorLogoFile = file.raw;
            }
        },
        changeCoverMapUpload: function(file, fileList) {
            if(this.beforeAvatarUpload(file)) {
                console.log(file.url);
                this.majorCoverMapUrl = file.url;
                this.majorCoverMapFile = file.raw;
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

        postK:function(){
            let that = this;
            this.post('/admin/information/createktd',{
                id:that.id,
                keywords:that.form.Keywords,
                title:that.form.Title,
                description:that.form.Description
            }).then(res=>{

            })

        },
        postC:function(){
            let that = this;
            var fd = new FormData();
            let imgFile = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            fd.append('coach_name',that.counsellForm.name);
            fd.append('provice',that.counsellForm.region)
            fd.append('phone',that.counsellForm.tell);
            fd.append('address',that.counsellForm.address);
            fd.append('web_url',that.counsellForm.web);
            fd.append('father_id',that.counsellForm.father);
            fd.append('if_coupons',that.counsellForm.cheap);
            fd.append('if_back_money',that.counsellForm.refund);
            fd.append('is_show',that.counsellForm.show);
            fd.append('coachLogo',that.majorLogoFile);
            fd.append('coachCover',that.majorCoverMapFile)
            this.post('/admin/information/createCoach',fd,imgFile).
            then(
                res=>{
                    that.id = res.result
                }
            )
        },
        postD(){
            let that = this;
            this.post('/admin/information/created',{
                id:that.id,
                describe:that.editor.txt.html()
            }).then(res=>{

            })
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
        // 提交修改数据
        messageSubmit: function() {
            console.log(this.editor.txt.html());
            this.disabled3 = true;
            this.editor.$textElem.attr('contenteditable', false);
            this.postD()
        },
        // 清空富文本编辑器内容
        messageEmpty: function() {
            this.editor.txt.clear();
        },
        //返回上一页
        toBack: function() {
            this.$router.push('/message/coachList');
        },
        // 跳转到优惠卷设置页面
        toAdvise: function() {
            this.$router.push('/message/coupon/' + this.id);
        },
        
    },
    mounted(){
        this.info();

        // 创建富文本编辑器
        this.editor.customConfig.onchange = (html) => {
            this.editorContent = html;
        }
        this.editor.create();
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
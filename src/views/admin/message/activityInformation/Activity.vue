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
                                <el-form-item label="活动省">
                                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" :disabled="disabled">
                                        <el-option :label="item.name" :value="item.id" v-for="(item, index) in province"
                                                   :key="index"></el-option>
                                    </el-select>
                                </el-form-item>
                                <!--<el-form-item label="活动市">-->
                                    <!--<el-select v-model="ruleForm.city" placeholder="请选择活动区域" :disabled="disabled">-->
                                        <!--<el-option :label="item.name" :value="item.id" v-for="(item, index) in city"-->
                                                   <!--:key="index"></el-option>-->
                                    <!--</el-select>-->
                                <!--</el-form-item>-->

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
                                        <el-option label="不可报名" :value="1"></el-option>

                                    </el-select>
                                </el-form-item>

                                <el-form-item label="活动封面图">
                                    <div style="padding: 0 5px 5px 8px">
                                        <div class="add" @click="addPic">
                                            <input type="file" id="upload" accept="image" @change="upload"
                                                   style="display: none">
                                            <span style="color:#B2B2B2;">添加图片</span>
                                        </div>
                                        <li class="show" v-for="(iu, index) in imgUrls" :key="index">
                                            <div class="picture" @click="delImage(index)"
                                                 :style="'backgroundImage:url('+iu+')'"></div>
                                        </li>
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
                                    <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
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
                actId: 0,
                record: 0,
                string: '请选择',
                form: {
                    Title: "",
                    Keywords: "",
                    Description: ""
                },
                ruleForm: {
                    name: "河南科技学院",
                    type: this.string,
                    region: this.string,
                    city: this.string,
                    spaticalType: this.string,
                    address: "河南省新乡市河南科技学院",
                    time: "我们的招新活动将在2018年9月20日开始咯",
                    startTime: "",
                    endTime: "",
                    status: this.string,
                },
                // 活动ID
                id: 1,

                hostId:0,
                // 省份字典
                province: [],
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
        methods: {

            /**
             * info
             * 初始化地区字典以及专业字典
             */
            teste() {
                console.log(this.ruleForm.startTime)
            },
            info: function () {
                let self = this;
                this.fetch('/admin/information/getpageinfo')
                    .then(res => {
                        console.log(res)
                        if (res.code == 0) {
                            self.province = res.result['provice'];
                            self.major = res.result['major'];
                            self.city = res.result['city'];
                            self.actType = res.result['type']


                        } else {

                        }
                    })
                    .catch(error => {

                    })


            },

            getone() {
                let that = this;
                this.fetch('/admin/information/getoneact', {
                    id: that.actId
                })
                    .then(res => {
                        if (res.code == 0) {
                            that.ruleForm.name = res.result[0].active_name
                            that.ruleForm.type = res.result[0].active_type
                            let p = res.result[0].province;

                            that.ruleForm.region = parseInt( p[0])
                            if (p.length > 1)
                                that.ruleForm.city =parseInt( p[1])
                            that.ruleForm.spaticalType = res.result[0].major_type
                            that.ruleForm.address = res.result[0].address
                            that.ruleForm.startTime = []
                            that.ruleForm.startTime .push( res.result[0].begin_time);
                            that.hostId = res.result[0].host_major_id
                            that.ruleForm.startTime.push(res.result[0].end_time);
                            that.ruleForm.status=res.result[0].sign_up_state

                            that.form.Title = res.result[0].title;
                            that.form.Keywords = res.result[0].keywords;
                            that.form.Description = res.result[0].description;
                        } else {
                            that.message(true, '出错了 请刷新一下', 'error')
                        }
                    })
                    .catch(error => {

                    })
            },
            judgeSelect() {
                if (this.ruleForm.type == this.string + '活动类型') {
                    return '请选择活动类型';
                }
                if (this.ruleForm.region == this.string + '活动区域') {
                    return '请选择省份';
                }
                if (this.ruleForm.spaticalType == this.string + '专业类型') {
                    return '请选择专业';
                }
                if (this.ruleForm.status == this.string + '状态') {
                    return '请选择状态';
                }
                if (this.imgUrls.length == 0) {
                    return '请选择图片';
                }
                return '';
            },
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

                let judge = this.judgeSelect();
                if (judge == '') {
                    let self = this;
                    let img = this.imgUrls;
                    img = this.dataURLtoFile(img[0], 'uploadfile');
                    console.log(img)
                    var fd = new FormData();
                    fd.append('activeImg', img);
                    fd.append('activityName', self.ruleForm.name);
                    fd.append('activityType', self.ruleForm.type);
                    fd.append('majorType', self.ruleForm.spaticalType);
                    fd.append('province', self.ruleForm.region);
                    fd.append('address', self.ruleForm.address);
                    fd.append('beginTime', self.ruleForm.startTime[0]);
                    fd.append('endTime', self.ruleForm.startTime[1]);
                    fd.append('signUpState', self.ruleForm.status);
                    let imgFile = {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    let that = this;

                    if (this.actId == 0) {

                        this.post('/admin/information/createActivity', fd, imgFile)
                            .then(res => {
                                if (res.code == 0) {
                                    that.message(true, '上传成功', 'success');
                                    that.record = res.result
                                } else {
                                    that.message(true, '上传失败', 'success');
                                }
                            })
                    } else {
                        fd.append('id', self.actId);
                        this.post('/admin/information/updateActivity', fd, imgFile)
                            .then(res => {
                                if (res.code == 0) {
                                    that.message(true, '修改成功', 'success');
                                } else {
                                    that.message(true, '修改失败', 'success');
                                }

                            })
                    }
                } else {
                    this.message(true, judge, 'error');
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
                console.log(that.record)
                this.post('/admin/information/setkwt', {
                    id: that.record,
                    title: that.form.Title,
                    keywords: that.form.Keywords,
                    description: that.form.Description
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
                this.$router.push('/message/advise/' + this.record+'/'+this.hostId);
            },

            // 提交修改数据

            messageSubmit: function () {
                this.disabled3 = false;
                this.editor.$textElem.attr('contenteditable', false);
                this.inPost();
            },
            // 清空富文本编辑器内容
            // messageEmpty: function() {
            //     this.editor.txt.clear();
            // },
            //弹出上传图片对话框
            addPic: function (e) {
                $('input[type=file]').trigger('click');
                return false;
            },
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
            //上传图片
            upload(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length || this.count > 2) {
                    return;
                }
                this.imgPreview(files[0], e);
                this.count++;
                this.count >= 3 ? this.isShow = false : this.isShow;
                this.message(true, '图片添加成功', '');
            },
            imgPreview(file, e) {
                let self = this;
                let Orientation;
                //去获取拍照时的信息，解决拍出来的照片旋转问题
                Exif.getData(file, function () {
                    Orientation = Exif.getTag(this, 'Orientation');
                });
                // 看支持不支持FileReader
                if (!file || !window.FileReader) return;

                if (/^image/.test(file.type)) {
                    // 创建一个reader
                    let reader = new FileReader();
                    // 将图片2将转成 base64 格式
                    reader.readAsDataURL(file);
                    // 读取成功后的回调
                    reader.onloadend = function () {
                        let result = this.result;
                        let img = new Image();
                        img.src = result;
                        //判断图片是否大于100K,是就直接上传，反之压缩图片
                        if (this.result.length <= (100 * 1024)) {
                            self.imgUrls.push(this.result);
                        } else {
                            img.onload = function () {
                                let data = self.compress(img, Orientation);
                                self.imgUrls.push(data);
                            }
                        }
                        e.target.value = null;
                    }
                }
            },
            rotateImg(img, direction, canvas) {
                //最小与最大旋转方向，图片旋转4次后回到原方向
                const min_step = 0;
                const max_step = 3;
                if (img == null) return;
                //img的高度和宽度不能在img元素隐藏后获取，否则会出错
                let height = img.height;
                let width = img.width;
                let step = 2;
                if (step == null) {
                    step = min_step;
                }
                if (direction == 'right') {
                    step++;
                    //旋转到原位置，即超过最大值
                    step > max_step && (step = min_step);
                } else {
                    step--;
                    step < min_step && (step = max_step);
                }
                //旋转角度以弧度值为参数
                let degree = step * 90 * Math.PI / 180;
                let ctx = canvas.getContext('2d');
                switch (step) {
                    case 0:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0);
                        break;
                    case 1:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, 0, -height);
                        break;
                    case 2:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, -height);
                        break;
                    case 3:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, 0);
                        break;
                }
            },
            compress(img, Orientation) {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext('2d');
                //瓦片canvas
                let tCanvas = document.createElement("canvas");
                let tctx = tCanvas.getContext("2d");
                let initSize = img.src.length;
                let width = img.width;
                let height = img.height;
                //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
                let ratio;
                if ((ratio = width * height / 4000000) > 1) {
                    console.log("大于400万像素")
                    ratio = Math.sqrt(ratio);
                    width /= ratio;
                    height /= ratio;
                } else {
                    ratio = 1;
                }
                canvas.width = width;
                canvas.height = height;
                //铺底色
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                //如果图片像素大于100万则使用瓦片绘制
                let count;
                if ((count = width * height / 1000000) > 1) {
                    count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
                    //计算每块瓦片的宽和高
                    let nw = ~~(width / count);
                    let nh = ~~(height / count);
                    tCanvas.width = nw;
                    tCanvas.height = nh;
                    for (let i = 0; i < count; i++) {
                        for (let j = 0; j < count; j++) {
                            tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                        }
                    }
                } else {
                    ctx.drawImage(img, 0, 0, width, height);
                }
                //修复ios上传图片的时候 被旋转的问题
                if (Orientation != "" && Orientation != 1) {
                    switch (Orientation) {
                        case 6://需要顺时针（向左）90度旋转
                            this.rotateImg(img, 'left', canvas);
                            break;
                        case 8://需要逆时针（向右）90度旋转
                            this.rotateImg(img, 'right', canvas);
                            break;
                        case 3://需要180度旋转
                            this.rotateImg(img, 'right', canvas);//转两次
                            this.rotateImg(img, 'right', canvas);
                            break;
                    }
                }
                //进行最小压缩
                let ndata = canvas.toDataURL('image/jpeg', 0.1);
                tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
                return ndata;
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


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
                                    <el-input v-model="ruleForm.name" :disabled = "disabled"></el-input>
                                </el-form-item>
                                <el-form-item label="活动类型">
                                    <el-select v-model="ruleForm.type" placeholder="请选择活动类型" :disabled = "disabled">
                                        <el-option label="提前面试" value="1"></el-option>
                                        <el-option label="招生宣讲" value="2"></el-option>
                                        <el-option label="高精会议" value="3"></el-option>
                                        <el-option label="讲座论坛" value="4"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="活动省市">
                                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" :disabled = "disabled">
                                        <el-option :label="item.name" :value="item.id" v-for="(item, index) in province" :key="index"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="专业类型">
                                    <el-select v-model="ruleForm.spaticalType" placeholder="请选择专业类型" :disabled = "disabled">
                                        <el-option :label="item.name" :value="item.id" v-for="(item, index) in major" :key="index"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="活动地址">
                                    <el-input v-model="ruleForm.address" :disabled = "disabled"></el-input>
                                </el-form-item>
                                <el-form-item label="活动时间">
                                    <el-input v-model="ruleForm.time" :disabled = "disabled"></el-input>
                                </el-form-item>

                                <el-form-item label="选择时间">
                                    <template>
                                            <el-date-picker
                                                v-model="ruleForm.startTime"
                                                type="datetimerange"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                :default-time="['12:00:00']"
                                                :disabled = "disabled"
                                                value-format="yyyy-MM-dd HH:mm"
                                                format="yyyy-MM-dd HH:mm">
                                            </el-date-picker>
                                    </template>   
                                </el-form-item>
                                
                                <el-form-item label="报名状态">
                                    <el-select v-model="ruleForm.status" placeholder="全部" :disabled = "disabled">
                                    <el-option label="可报名" value="jion"></el-option>
                                    <el-option label="可设提醒" value="warn"></el-option>
                                    </el-select>
                                </el-form-item>
                                
                                <el-form-item label="活动封面图">
                                    <div style="padding: 0 5px 5px 8px">
                                        <div class="add" @click="addPic">
                                            <input type="file" id="upload" accept="image" @change="upload" style="display: none">
                                            <span style="color:#B2B2B2;" >添加图片</span>
                                        </div>
                                        <li class="show" v-for="(iu, index) in imgUrls" :key="index">
                                            <div class="picture" @click="delImage(index)" :style="'backgroundImage:url('+iu+')'"></div>
                                        </li>
                                    </div>
                                </el-form-item>
                                
                                <el-form-item>
                                    <el-button type="primary" @click="projectSubmit" :disabled = "disabled">提交</el-button>
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
                                  <el-input v-model="form.Title" placeholder="请输入Title" :disabled = "disabled2"></el-input>
                                </el-form-item>
                                <el-form-item label="Keywords">
                                  <el-input v-model="form.Keywords" placeholder="请输入Keywords" :disabled = "disabled2"></el-input>
                                </el-form-item>
                                <el-form-item label="Description">
                                  <el-input v-model="form.Description" placeholder="请输入Description" :disabled = "disabled2"></el-input>
                                </el-form-item>

                                <el-form-item>
                                  <el-button type="primary" @click="test" :disabled = "disabled2">提交</el-button>
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
                      <el-button type="primary" @click="toAdvise">下一步，编辑推荐信息</el-button>
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
        form: {
            Title: "",
            Keywords: "",
            Description: ""
        },
        ruleForm: {
            name: "河南科技学院",
            type: "提前面试",
            region: "河南",
            spaticalType: "大数据",
            address: "河南省新乡市河南科技学院",
            time: "我们的招新活动将在2018年9月20日开始咯",
            startTime:"",
            endTime: "",
            status: "可报名",
        },
        // 活动ID
        id: 1,
        // 省份字典
        province: [],
        // 专业字典
        major: [],
        // 富文本编辑器
        editorContent:'',
        imgUrls: [],
        isShow:true,
        disabled:true,
        disabled2:true,
        disabled3:true,
        editor: new WangEditor('#editor'),
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    methods:{
        startChange3: function () {
            this.disabled3 = false;
            this.editor.$textElem.attr('contenteditable', true);
        },
        startChange: function () {
            this.disabled = false;
        },
        startChange2: function () {
            this.disabled2 = false;
        },
        // 提交表单数据
        projectSubmit: function() {
            let self = this;
            // 提交表单数据，没有找到相应的接口
        },
        // 跳转页面
        toAdvise: function() {
            this.$router.push('/message/advise/' + this.id);
        },
        
        // 提交修改数据
        messageSubmit: function() {
            console.log(this.editor.txt.html());
            this.disabled3 = true;
            this.editor.$textElem.attr('contenteditable', false);
        },
        // 清空富文本编辑器内容
        messageEmpty: function() {
            this.editor.txt.clear();
        },
        //弹出上传图片对话框
        addPic: function(e) {
            $('input[type=file]').trigger('click');
            return false;
        },
        //删除图片
        delImage: function(index) {
            let vm = this;
            vm.$vux.confirm.show({
                content: '取消选择？',
                onConfirm () {
                    vm.imgUrls.splice(index, 1);
                    vm.count--;
                    vm.count<3?vm.isShow = true:vm.isShow;
                    vm.$vux.toast.text('图片删除成功', 'top');
                }
            });
        },
        //上传图片
        upload (e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length||this.count>2) {
                return;
            }
            this.imgPreview(files[0],e);
            this.count++;
            this.count>=3?this.isShow = false:this.isShow;
            this.message(true,'图片添加成功','');
        },
        imgPreview (file,e) {
            let self = this;
            let Orientation;
            //去获取拍照时的信息，解决拍出来的照片旋转问题
            Exif.getData(file, function(){
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
                    }else {
                        img.onload = function () {
                            let data = self.compress(img,Orientation);
                            self.imgUrls.push(data);
                        }
                    }
                    e.target.value = null;
                }
            }
        },
        rotateImg (img, direction,canvas) {
            //最小与最大旋转方向，图片旋转4次后回到原方向
            const min_step = 0;
            const max_step = 3;
            if (img == null)return;
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
        compress(img,Orientation) {
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
            if(Orientation != "" && Orientation != 1){
                switch(Orientation){
                    case 6://需要顺时针（向左）90度旋转
                        this.rotateImg(img,'left',canvas);
                        break;
                    case 8://需要逆时针（向右）90度旋转
                        this.rotateImg(img,'right',canvas);
                        break;
                    case 3://需要180度旋转
                        this.rotateImg(img,'right',canvas);//转两次
                        this.rotateImg(img,'right',canvas);
                        break;
                }
            }
            //进行最小压缩
            let ndata = canvas.toDataURL('image/jpeg', 0.1);
            tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
            return ndata;
      },
    },
    mounted(){
        this.province = this.getProvince();
        this.getMajor();
        this.editor.customConfig.onchange = (html) => {
            this.editorContent = html;
        }
        this.editor.create();
        this.editor.$textElem.attr('contenteditable', false);
    }
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
      padding: 40px 90px 40px 80px;
      width: 1170px;
    }
    .operateUpfilesRight2 {
        text-align: right;
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

    .submit-picture{
      color: #13ce66;
      margin: 0 10px;
    }
    .el-upload{
      float: left;
    }

    .el-upload-list--picture .el-upload-list__item{
      border: 0px solid #c0ccda;
      padding: 0px; 
      margin-right: 10px;
      width: 95px;
      height: 95px;
    }
    .el-upload-list--picture .el-upload-list__item-thumbnail{
      margin-left: 0px !important; 
    }

    .el-upload__tip{
      display: none;
    }

    .el-upload-list--picture{
      float: left;
    }

    .show, .add{
        display: inline-block;
        width: 60px;
        height: 60px;
        overflow: hidden;
    }
    .show{
        margin: 0 10px 0;
    }
    .add{
        /*background-image:url('../../../img/wx/add.png');*/
        background-repeat: no-repeat;
        background-size:100%;
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


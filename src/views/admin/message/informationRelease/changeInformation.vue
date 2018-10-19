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
                                <el-input v-model="informationForm.name" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="资讯类型">
                                <el-select v-model="informationForm.region" placeholder="请选择活动区域" :disabled = "disabled">
                                    <el-option :label="item.type" :value="item.id" v-for="(item, index) in counsell_type" :key="index"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="资讯来源">
                                <el-input v-model="informationForm.address" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="来源URL">
                                <el-input v-model="informationForm.web" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="资讯简介">
                                <el-input type="textarea" v-model="informationForm.detial" :disabled = "disabled"></el-input>
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
                                <el-button type="primary" @click="" :disabled = "disabled">提交</el-button>
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
                                    <el-button type="primary" @click="" :disabled = "disabled2">提交</el-button>
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
                                <el-button type="primary" :disabled = "disabled3"  @click="messageSubmit">提交</el-button>
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
            form: {
                Title: "123",
                Keywords: "",
                Description: ""
            },
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
            counsell_type: [
                {
                    id: 0,
                    type: "提前面试"
                },
                {
                    id: 1,
                    type: "招生宣讲"
                },
                {
                    id: 2,
                    type: "高精会议"
                },
                {
                    id: 3,
                    type: "讲座论坛"
                },
            ],
            // 富文本编辑器
            editorContent:'',
            editor: new WangEditor('#editor'),
            id: 0,
        }
    },
    methods: {
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
            this.$router.push('/message/recommend/' + this.id);
        },
        
    },
    mounted(){
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
 <template>
    <div class="recordDetail">
        <div class="reDetBread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>消息管理</el-breadcrumb-item>
                <el-breadcrumb-item>发消息</el-breadcrumb-item>
                <el-breadcrumb-item>编辑消息内容</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="messageSteps">
            <el-steps :active=".1" align-center>
              <el-step title="设置消息对象"></el-step>
              <el-step title="编辑消息内容"></el-step>
            </el-steps>
        </div>
        <div class="setMessDeta">
            <div class="setMessDeta-left">
                <div>
                    <div class="leftImg">
                        <i class="el-icon-edit-outline"></i>
                        <p>设置消息类型</p>
                    </div>
                </div>
                <div>
                    <div class="messageCon">
                        <i class="el-icon-setting"></i>
                        <p>编辑消息内容</p>
                    </div>
                </div>
            </div>
            <div class="setMessDeta-right">
               <div class="rightRedio">
                    <div class="checkbox">
                        <div><el-checkbox v-model="shortMess" label="短信"></el-checkbox></div>
                        <div><el-checkbox v-model="stationMess" label="站内信"></el-checkbox></div>
                    </div>
                    <div class="radio">
                        <el-radio-group v-model="radio">
                            <div><el-radio label=1>小助手消息</el-radio></div>
                            <div><el-radio label=2>系统员管理消息</el-radio></div>
                            <div><el-radio label=3>院校动态消息</el-radio></div>
                        </el-radio-group>
                        <!-- <div><el-radio label="1">小助手消息</el-radio></div>
                        <div><el-radio label="2">系统员管理消息</el-radio></div>
                        <div><el-radio label="3">院校动态消息</el-radio></div> -->
                    </div>
               </div>
               <!-- <div class="setUp"><el-button type="primary">设置</el-button></div> -->
               <div class="rightEditor"></div>

                <div style="margin-bottom:30px;">
                    <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入内容"
                    v-model="textarea">
                    </el-input>
                </div>
               <div id="editor">

               </div>

                <div>
                    <el-input placeholder="请输入内容" v-model="input" style="margin-top:30px;">
                        <template slot="prepend">Http://</template>
                    </el-input>
                </div>
               
            </div>
        </div>
        <div class="sendMess">
            <el-button type="primary" @click="send">发消息</el-button>     
        </div> 
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //设置消息类型
                radio:'1',
                shortMess:false,
                stationMess:false,
                // assisMess:'',
                // adminMess:'',
                // univerMess:'',
                idArr:[],
                radio:0,
                input:'',
                editor:{},
                editorContent:'',
                carrier:-1,
                textarea:''
            };
        },
        // watch:{
        //     radio:function(val, old) {
        //         console.log(val);
        //     }
        // },
        methods: {

            judgeCarrier() {
                if(this.shortMess == true && this.stationMess == false) this.carrier = 0;
                else if(this.shortMess == false && this.stationMess == true) this.carrier = 1;
                else if(this.shortMess == true && this.stationMess == true) this.carrier = 2;
            },
            validateParameter() {
                this.judgeCarrier();
                if(this.carrier < 0) {
                    this.message(true, "请选择消息载体类型");
                    return false;
                }
                else if(this.textarea == '') {
                    this.message(true, "请填写消息标题");
                    return false;
                }
                else if(this.editorContent == "") {
                    this.message(true, "请填写消息内容");
                    return false;
                }
                else if(this.input == "") {
                    this.message(true, "请输入相关链接");
                    return false;
                }
                return true;
            },
            send() {
                if(this.validateParameter()) {
                    this.confirm(() => {
                        this.post('/admin/news/getNewNewsMessage', {
                            userArr: this.idArr,
                            carrier: this.carrier,
                            type: this.radio,
                            title: this.textarea,
                            context: this.editorContent,
                            url: this.input
                        }).then((response) => {
                            console.log(response);
                            if(response.code == 0) {
                                console.log(response);
                            }
                        })
                    }, () => {
                        this.message(true, "已取消发送", 'info');
                    }, "确定发送吗?");
                }
            }
        },
        mounted(){
            if(this.$route.query.setStr instanceof Array && this.$route.query.setStr.length > 0)
                this.idArr = this.$route.query.setStr;
            else {
                // this.message(true, "请先选择发送消息的用户");
                // this.$router.go(-1);
            }

            //生成编辑器
            this.editor = new WangEditor('#editor');
            this.editor.customConfig.onchange = (html) => {
                this.editorContent = html;
            }
            this.editor.create();
            
        }
    }

</script>
<style>
    .checkbox>div {
        margin: 10px 0 0;
    }
    .radi .el-radio+.el-radio {
        margin: 10px 0 0 0;
    }
</style>

<style scoped>
    .radi {
        display: flex;
        flex-direction:column ;
    }
    .sendMess {
        display: flex;
        justify-content:center;
    }
    .setUp {
        margin: 20px 0 0 180px;
    }
    .rightEditor {
        border-bottom: 1px solid #dddddd; 
        height: 100px;
    }
    .radio {
        margin: 50px 0 0 20px;
    }
    .rightRedio {
        display: flex;
        margin: 50px 0 0 180px;
        /*justify-content:center;*/
    }
    .messageSteps {
        width: 450px;
        margin: 0 auto;
    }
    .leftImg i,.messageCon i {
        margin: 0 10px 0;
    }
    .leftImg,.messageCon {
        color: #FFF;
        font-size: 14px;
        width: 200px;
        height: 50px;
        display: flex;
        align-items:center;
        background: url(../../../../assets/img/point.png) no-repeat;
        background-size: 100% 100%;
    }
    .leftImg {
        margin: 50px 0 0;
    }
    .messageCon {
        margin: 280px 0 0;
    }
    .setMessDeta-right {
        width: 1320px;
        border: 1px solid #DDD;
        border-left: 1px solid #fff;
    }
    .setMessDeta-left {
        width: 180px;
        background-color: #fcfcfc;
        z-index: 1;
    }
    .setMessDeta {
        width: 1500px;
        margin: 0 auto;
        display: flex;
    }
    /*.jumpPageBut {
        width: 1500px;
        margin: 20px auto;
    }*/
    .reDetBread p {
        font-size: 10px;
        color: #999;
    }
    .reDetBread {
        display: flex;
        width: 1500px;
        margin: 0 auto 20px;
    }
    #editor {
        background-color: #ffffff;
    }
</style>
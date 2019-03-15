 <template>
    <div class="recordDetail">
        <div class="reDetBread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>消息管理</el-breadcrumb-item>
                <el-breadcrumb-item>发消息</el-breadcrumb-item>
                <el-breadcrumb-item  class="selectedNavPublic">编辑消息内容</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="fileSteps messageSteps">
            <el-steps :active="1.2" align-center>
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
                        <!-- <div><el-checkbox v-model="shortMess" label="短信"></el-checkbox></div>
                        <div><el-checkbox v-model="stationMess" label="站内信"></el-checkbox></div> -->
                        <el-radio-group v-model="shortMess">
                            <div style="margin-bottom:2%"><el-radio :label="0">短信</el-radio></div>
                            <div><el-radio :label="1">站内信</el-radio></div>
                        </el-radio-group>
                    </div>
                    <div class="radio">
                        <el-radio-group v-model="radio">
                            <div><el-radio :disabled="disabled" label=1>小助手消息</el-radio></div>
                            <div><el-radio :disabled="disabled" label=2>系统员管理消息</el-radio></div>
                            <div><el-radio :disabled="disabled" label=3>院校动态消息</el-radio></div>
                        </el-radio-group>
                        <!-- <div><el-radio label="1">小助手消息</el-radio></div>
                        <div><el-radio label="2">系统员管理消息</el-radio></div>
                        <div><el-radio label="3">院校动态消息</el-radio></div> -->
                    </div>
               </div>
               <!-- <div class="setUp"><el-button type="primary">设置</el-button></div> -->
               <div class="rightEditor"></div>

                <div class="inputSendMessage">
                    <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入消息标题"
                    :disabled="disabled"
                    v-model="textarea">
                    </el-input>
                </div>
               <!--<div id="editor">

               </div>
-->
              <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
                <div>
                    <el-input placeholder="请输入相关链接" v-model="input" style="margin-top:30px;" :disabled="disabled">
                        <template slot="prepend">Http://</template>
                    </el-input>
                </div>

            </div>
        </div>
        <div class="sendMess">
            <!-- <el-button type="primary" v-if="shortMess == ''" :disabled="false">发消息</el-button>   -->
            <el-button type="primary" v-if="shortMess == 1" :disabled="disabled" @click="send">发消息</el-button>
            <el-button type="primary" v-else-if="shortMess == 0" @click="putExcel">导出用户列表</el-button>
        </div>
    </div>
</template>
<script>
    import UE from '../../../../components/ue/ue.vue';
    export default {
        components: {UE},
        data() {
            return {
                uploadUrl: this.globals.excelUrl + '/admin/news/putExcel',
                //设置消息类型
                radio:'1',
                disabled:true,
                shortMess:-1,
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
                textarea:'',

                defaultMsg: '',
                config: {
                  initialFrameWidth: null,
                  initialFrameHeight: 350
                },
                ue1: "ue1", // 不同编辑器必须不同的id
            };
        },
        // watch:{
        //     radio:function(val, old) {
        //         console.log(val);
        //     }
        // },
        watch: {
            shortMess(newval, oldval) {
                if(newval == 0 || newval == '0') {
                    this.disabled = true;
                    this.$refs.ue.setUEDisabled();
                }
                else if(newval == 1 || newval == '1') {
                    this.disabled = false;
                    this.$refs.ue.setUeEnabled();
                }
            }
        },
        methods: {

            judgeCarrier() {
                // if(this.shortMess == true && this.stationMess == false) this.carrier = 0;
                // else if(this.shortMess == false && this.stationMess == true) this.carrier = 1;
                // else if(this.shortMess == true && this.stationMess == true) this.carrier = 2;

                if(this.shortMess >= 0) this.carrier = this.shortMess;
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
                this.editorContent = this.$refs.ue.getUEContent();

                if(this.validateParameter()) {

                    // this.confirm(() => {
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
                                this.message(true, response.msg, 'success');
                            }
                            else
                                this.message(true, response.msg, 'error');
                        })
                    // }, () => {
                        // this.message(true, "已取消发送", 'info');
                    // }, "确定发送吗?");
                }
            },
            putExcel() {
                let str = '';
                if(this.idArr.length < 1) {
                    this.message(true, '请选择导出的用户','info');
                    return false;
                }
                for(let i = 0; i < this.idArr.length; i++) {
                    if(i == (this.idArr.length -1)) str += 'userArr[' + i + ']=' + this.idArr[i];
                    else str += 'userArr[' + i + ']=' + this.idArr[i] + '&';
                }
                window.location.href = (this.uploadUrl + '?' + str);
                // this.post('/admin/news/putExcel', {
                //     userArr: this.idArr
                // }).then((response) => {
                //     console.log(response)
                // })
            }
        },
        mounted(){
            console.log(this.$route.params.sendIdArr);
            if(typeof this.$route.params.sendIdArr != "undefined" ? true : false && this.$route.params.sendIdArr.length > 0)
                this.idArr = this.$route.params.sendIdArr
            else {
                this.message(true, "请先选择发送消息的用户");
                this.$router.go(-1);
            }

            //生成编辑器
            /*this.editor = new WangEditor('#editor');
            this.editor.customConfig.onchange = (html) => {
                this.editorContent = html;
            }
            this.editor.create();
            this.editor.$textElem.attr('contenteditable', false);*/

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
    .inputSendMessage {
        margin: 20px;
    }

    .radi {
        display: flex;
        flex-direction:column ;
    }
    .sendMess {
        display: flex;
        justify-content:center;
        margin: 95px 0 100px;
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
        margin-left: 1.5%;
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

 <template>
    <div class="recordDetail">
        <div class="reDetBread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                <el-breadcrumb-item>资讯发布</el-breadcrumb-item>
                <el-breadcrumb-item>消息通知</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="messageSteps fileSteps">
            <el-steps :active="3" align-center>
                <el-step title="活动信息"></el-step>
                <el-step title="推荐信息"></el-step>
                <el-step title="消息通知"></el-step>

            </el-steps>
        </div>
        <div class="setMessDeta">
            <div class="setMessDeta-left">
                <div>
                    <div class="leftImg">
                        <i class="el-icon-message"></i>
                        <p>发送消息通知</p>
                    </div>
                </div>
            </div>
            <div class="setMessDeta-right">
               <div class="steps">
                    <div class="dynamicUpd">
                        <div class="dynamicUpd_img"><img src="../../../../assets/img/dynamicUpd.png"></div>
                        <p>作为院校动态更新，</p>
                        <p>推送给关注了相关院校的用户</p>
                    </div>
                    <div class="messageCon">
                        <div class="messageCon_img"><img src="../../../../assets/img/messageCon.png"></div>
                        <p>作为新消息内容，</p>
                        <p>推送给关注了相关院校的用户</p>
                   </div>
               </div>
               <div class="separateLine"></div>
               <div class="sendUnivers">
                   <div class="back">
                       <p>发送院校动态更新</p>
                   </div>
                   <div class="updateCon">
                       <div style="position: relative;">
                           <div class="upQuotes"><img src="../../../../assets/img/upQuotes.png"></div>
                           <div class="contentDetail">
                               <p>{{ xxnr }}</p>
                               <el-button type="text" @click="modifyNewsFirst">修改</el-button>
                           </div>
                           <div class="lowQuotes"><img src="../../../../assets/img/lowQuotes.png"></div>
                       </div>
                       <div>
                           <el-button type="primary"  @click="addInfoNews(0)">发送</el-button>
                       </div>
                   </div>
               </div>
               <div class="separateLine"></div>
               <div class="sendMessage">
                   <div class="back">
                       <p>发送消息</p>
                   </div>
                   <div class="updateCon">
                       <div style="position: relative;">
                           <div class="upQuotes"><img src="../../../../assets/img/upQuotes.png"></div>
                           <div class="contentDetail">
                               <p>{{ sendMessage }}</p>
                               <el-button type="text"  @click="modifyNewsSecond">修改</el-button>
                           </div>
                           <div class="lowQuotes"><img src="../../../../assets/img/lowQuotes.png"></div>
                       </div>
                       <div>
                           <el-button type="primary" @click="addInfoNews(1)">发送</el-button>
                       </div>
                   </div>
               </div>
            </div>
        </div>
        <div class="sendMess">
            <el-button type="primary" @click.native="jumpPage">&#8195&#8195完成！&#8195&#8195</el-button>     
        </div> 
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //设置消息类型
                universName:'',
                sendMessage:'',
                content:'test',
                majorId:1,
                activeId:0,
                yxdt:'',
                xxnr:'',
                info:{},
                infoId:0,
            };
        },
        methods: {
            jumpPage:function() {
                this.$router.push('/admin/message/informationList');
            },

            addInfoNews:function(type){
                let self = this;
                let url = ''
                let data = null;
                if(type == 0) {
                    url = '/admin/information/setInformationdynamic';
                    data = {
                        infoId:parseInt(self.infoId),
                    }
                }
                else if(type == 1) {
                    url = '/admin/information/sendInfoDynamic';
                    data = {
                        infoId: parseInt(self.infoId),
                        contexts: this.sendMessage,
                        url:'http://' + window.location.host + '/front/firstMenuRouter/viewInformation/singleInformation/' + parseInt(self.infoId)
                    }
                }
                this.post(url, data).then((response) => {
                    if(response.code == 0) {
                        this.message(true, '发送成功', 'success');
                    }
                    else {
                        this.message(true, response.msg, 'info');
                    }
                })



                // this.post('/admin/information/sendActivityDynamic',
                //     {
                //         activityId:parseInt(self.activeId),
                //         contents:self.sendMessage,
                //         type: 1,
                //         url: 'http://' + window.location.host + '/front/firstMenuRouter/lookActivity/singleActivity/' + parseInt(self.activeId)
                //     }
                // ).then(res=>{
                //     if(res.code == 0){
                //         self.message(true,'发送成功', 'success')
                //         self.sendMessagedis = true;
                //     }else{
                //         self.message(true,res.msg,'info')
                //     }
                // })
            },
            modifyNewsFirst() {
                // let self = this;
                // this.post('/admin/information/setActivitydynamic',{
                //     activityId:parseInt(self.activeId),
                // }).then(res=>{
                //     if(res.code == 0){
                //         self.message(true,'发送成功','success')
                //         self.contentdis = true;
                //     }else{
                //         self.message(true,res.msg,'info')
                //     }

                // })
                this.message(true, '发送院校动态更新不需要输入信息哦', 'info');
            },
            modifyNewsSecond() {
                this.$prompt('', '', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  inputPattern: '',//输入框内容判断，前台要加吗？
                  inputErrorMessage: '邮箱格式不正确'//判断提示语
                }).then(({ value }) => {
                    this.sendMessage = value
                  this.$message({
                    type: 'success',
                    message: '您已修改为: ' + value
                  });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '您已取消修改'
                  });       
                });
            }
        },
        mounted(){
            if(typeof this.$route.params.infoId != null) this.infoId = this.$route.params.infoId;
            this.post('/admin/information/selectInfoReception', {
                infoId: this.infoId
            }).then((response) => {
                if(response.code == 0) {
                    this.info = response.result;
                    this.xxnr = '【MBA小助手】新发布了一条资讯: ' + this.info.zx_name + '，快去看看吧！';
                    this.sendMessage = '【MBA小助手】新发布了一条资讯: ' + this.info.zx_name + '，快去看看吧！';
                }
                else
                    this.message(true, response.msg, 'error');
            })
        }
    }

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
    .sendMess {
        display: flex;
        justify-content:center;
        margin: 95px 0 70px;
    }
    .upQuotes>img,.lowQuotes>img {
        width: 50px;
    }
    .upQuotes {
        left: 0;
        top: 10px;
    }
    .lowQuotes {
        right: 0;
        bottom: 0;
    }
    .upQuotes,.lowQuotes {
        position: absolute;
    }
    .updateCon {
        display: flex;
        justify-content:space-around;
        margin-top: 20px;
    }
    .back {
        width: 1140px;
        display: flex;
        align-items:center;
        height: 50px;
        background: #f1f1f1;
        padding: 0 0 0 20px;
    }
    .separateLine {
        height: 1px;
        background-color: #e4e4e4;
        margin: 50px 0;
    }
    .sendUnivers,.sendMessage {
        border: 1px solid #e4e4e4;
        width: 1160px;
        margin: 0 auto;
    }
    .sendUnivers,.sendMessage {
        border-top: 0 solid #e4e4e4;
    }
    .sendMessage {
        margin: 0 auto 50px;
    }
    .dynamicUpd_img>img,.messageCon_img>img {
        width: 120px;
    }
    .contentDetail {
        display:flex; 
        width: 400px;
        justify-content:space-around;
        margin: 28px 120px 30px 25px;
    }
    .messageCon {
        margin: 100px 0 0 100px;
    }
    .dynamicUpd {
        margin: 100px 100px 0 0;
    }
    .steps {
        display: flex;
        justify-content:center;
        text-align: center;
    }
    .messageSteps {
        width: 450px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .leftImg p {
        position: relative;
        left: 35px;
    }
    .leftImg i {
        position: absolute;
        left: 15px;
        top: 17px;
    }
    .leftImg {
        position: relative;
        top: 50px;
        color: #FFF;
        font-size: 14px;
        width: 200px;
        height: 50px;
        display: flex;
        background: url(../../../../assets/img/point.png) no-repeat;
        background-size: 100% 100%;
    }
    .setMessDeta-right {
        background: #fff;
        width: 1320px;
        border: 1px solid #DDD;
        border-left: 1px solid #fff;
    }
    .setMessDeta-left {
        width: 180px;
        background-color: #fcfcfc;
    }
    .setMessDeta {
        width: 1500px;
        margin: 0 auto;
        display: flex;
    }
    .reDetBread p {
        font-size: 10px;
        color: #999;
    }
    .reDetBread {
        display: flex;
        width: 1500px;
        margin: 0 auto 20px;
    }
</style>
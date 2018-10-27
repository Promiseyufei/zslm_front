 <template>
    <div class="recordDetail">
        <div class="reDetBread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>活动信息</el-breadcrumb-item>
                <el-breadcrumb-item>推荐信息</el-breadcrumb-item>
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
                        <p>推送给关注了主办院校的用户</p>
                    </div>
                    <div class="messageCon">
                        <div class="messageCon_img"><img src="../../../../assets/img/messageCon.png"></div>
                        <p>作为新消息内容，</p>
                        <p>推送给关注了主办院校的用户</p>
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
                               <p>{{universName}}发布了一个新的活动，快去看看吧！</p>
                               <el-button type="text" @click="modify">修改</el-button>
                           </div>
                           <div class="lowQuotes"><img src="../../../../assets/img/lowQuotes.png"></div>
                       </div>
                       <div>
                           <el-button type="primary"  @click="addNewsFirst">发送</el-button>
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
                               <p>{{sendMessage}}发布了一个新的活动，快去看看吧！</p>
                               <el-button type="text"  @click="modify">修改</el-button>
                           </div>
                           <div class="lowQuotes"><img src="../../../../assets/img/lowQuotes.png"></div>
                       </div>
                       <div>
                           <el-button type="primary" @click="addNewsSecond">发送</el-button>
                       </div>
                   </div>
               </div>
            </div>
        </div>
        <div class="sendMess">
            <el-button type="primary" @click.native = "jumpPage">&#8195&#8195完成！&#8195&#8195</el-button>     
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
                activeId:0
            };
        },
        methods: {
            jumpPage:function() {
                this.$router.push('/message/activityList');
            },

            addNewsFirst:function(){
                let self = this;
                this.post('/admin/information/sendActivityDynamic',
                        {
                            activityId:parseInt(self.activeId),
                            majorId:parseInt(self.majorId),
                            newOrDyna:0
                        }
                )
            },
            addNewsSecond(){
                let self = this;
                this.post('/admin/information/sendActivityDynamic',
                    {
                        activityId:parseInt(self.activeId),
                        majorId:parseInt(self.majorId),
                        newOrDyna:1
                    }
                )
            },
            modify() {
                this.$prompt('', '', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  inputPattern: '',//输入框内容判断，前台要加吗？
                  inputErrorMessage: '邮箱格式不正确'//判断提示语
                }).then(({ value }) => {
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
            this.activeId = this.$route.params.id;
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
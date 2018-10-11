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
                        <div class="radi">
                            <el-radio v-model="radio" label="1">小助手消息</el-radio>
                            <el-radio v-model="radio" label="2">系统员管理消息</el-radio>
                            <el-radio v-model="radio" label="3">院校动态消息</el-radio>
                        </div>
                    </div>
               </div>
               <div class="setUp"><el-button type="primary">设置</el-button></div>
               <div class="rightEditor">
               </div>
            </div>
        </div>
        <div class="sendMess">
            <el-button type="primary">发消息</el-button>     
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
            };
        },
        methods: {
            //初次进入页面，获取的院校专业
            getcityInfo: function(){
                var that = this;
                axios.post('/admin/setMessageDetail/getcityInfo',{
                  //后台参数，前台参数(传向后台)
                  // butname: that.butname,
                })
                .then(function (response) {
                    var res = response.data;
                    if (res.code == 0) {
                        
                    };
                })
                .catch(function (error) {
                });
            },
            
        },
        mounted(){
            this.getcityInfo();
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
</style>
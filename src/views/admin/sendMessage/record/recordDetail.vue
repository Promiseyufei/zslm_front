 <template>
    <div class="recordDetail">
        <div class="reDetBread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>消息管理</el-breadcrumb-item>
                <el-breadcrumb-item>历史消息记录</el-breadcrumb-item>
                <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="jumpPageBut">
            <el-button @click.native = "jumpPage">返回</el-button>
        </div>
        <div class="historyDetail">
            <div class="historyDetail-left">
                <div class="leftImg">
                    <i class="el-icon-view"></i>
                    <p>历史消息详情</p>
                </div>
            </div>
            <div class="historyDetail-right">
               <div class="rightUp">
                   <h1>消息记录详情</h1>
                   <div class="rightUpCon">
                       <div class="Nav">
                           <div>
                               <p class="messageObjc">消息对象类型：</p>
                               <p>{{messageObjc}}</p>
                           </div>
                           <div v-for = "(val,index) in careJoin" :key="index+'b'">
                               <p class="a">&#8195&#8195{{val.titl}}：</p>
                               <div class="careJoin">
                                    <p v-for = "(cont,index) in val.cont" :key="index+'b'">{{cont.content}}</p>
                               </div>
                           </div>
                           <div v-for = "(vals,index) in rightUpCon" :key="index">
                               <p class="a">&#8195&#8195{{vals.title}}：</p>
                               <p>{{vals.content}}</p>
                           </div>
                       </div>
                       <div></div>
                   </div>
               </div> 
               <div class="rightLow">
                   <userTable></userTable>
               </div>
            </div>
        </div>       
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //消息记录详情
                messageObjc:'',
                careJoin:[
                    {
                        titl:'关注院校',
                        cont:[
                            {content:''}
                        ]
                    },
                    {titl:'参与活动',cont:''},
                ],
                rightUpCon:[
                    {title:'关系类型',content:''},
                    {title:'消息类型',content:''},
                    {title:'发送时间',content:''},
                    {title:'发送状态',content:''},
                    {title:'消息内容',content:''},
                ],
               listTable:[
                    {prop:'id',label:'账户ID',width:100},
                    {prop:'account',label:'账号',width:100},
                    {prop:'nickname',label:'昵称',width:100},
                    {prop:'name',label:'真实姓名',width:100},
                    {prop:'sex',label:'性别',width:100},
                    {prop:'address',label:'常住地',width:100},
                    {prop:'highEduc',label:'最高学历',width:100},
                    {prop:'belongUnivers',label:'毕业院校',width:100},
                    {prop:'industry',label:'所属行业',width:100},
                    {prop:'workFix',label:'工作年限',width:100},
                    {prop:'shareCon',label:'分享内容',width:100},
               ],
               tableData: [{
                  id:'',
                  account:'',
                  nickname:'',
                  name:'',
                  sex:'',
                  address:'',
                  highEduc:'',
                  belongUnivers:'',
                  workFix:'',
                  shareCon:'',
                }],
            };
        },
        methods: {
            //初次进入页面，获取的院校专业
            getcityInfo: function(){
                var that = this;
                axios.post('/admin/recordDetail/getcity-info',{
                  //后台参数，前台参数(传向后台)
                  // butname: that.butname,
                })
                .then(function (response) {
                    var res = response.data;
                    if (res.code == 0) {
                        that.messageObjc = res.messageObjc;
                        that.careJoin = res.careJoin;
                        that.rightUpCon = res.rightUpCon;
                        that.tableData = res.data;
                    };
                })
                .catch(function (error) {
                });
            },
            //点击城市按钮
            clickCity:function() {
                var that = this;
                axios.post('/admin/recordDetail/clickgetcity-info',{
                  //后台参数，前台参数(传向后台)
                  butname: that.butname,
                })
            },
            //跳转页面按钮
            jumpPage:function() {
                // if (this.majorname) {
                    this.$router.push('/send/recordHome');
                // }
            }
        },
        mounted(){
            this.getcityInfo();
        }
    }

</script>
<style>
    
    
</style>

<style scoped>
    .messageObjc {
        text-align: right;
    }
    .careJoin {
        text-align: left;
        margin: 10px 0 0 0;
    }
    .Nav>div {
        display: flex;
        text-align: right;
    }
    .rightUpCon {
        display: flex;
        justify-content:center;
    }
    .rightUp h1 {
        text-align: center;
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
    .historyDetail-right {
        width: 1320px;
        border: 1px solid #DDD;
        border-left: 1px solid #fff;
    }
    .historyDetail-left {
        width: 180px;
        background-color: #fcfcfc;
    }
    .historyDetail {
        width: 1500px;
        margin: 0 auto;
        display: flex;
    }
    .jumpPageBut {
        width: 1500px;
        margin: 20px auto;
    }
    .reDetBread p {
        font-size: 10px;
        color: #999;
    }
    .reDetBread {
        display: flex;
        width: 1500px;
        margin: 0 auto;
    }
</style>
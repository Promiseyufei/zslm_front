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
               <div class="line"></div> 
               <div class="rightLow" style="width:1170px;margin:0 auto;">
                   <userTable :listTable="listTable" :tableData="tableData"></userTable>
                   <singlePage :currentPage="currentPage" :totalData="totalData"></singlePage>
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
                
                //表格
                listTable:[
                    {prop:'id',lable:'账户ID',width:80},
                    {prop:'account',lable:'账号',width:100},
                    {prop:'nickname',lable:'昵称',width:140},
                    {prop:'name',lable:'真实姓名',width:80},
                    {prop:'sex',lable:'性别',width:80},
                    {prop:'address',lable:'常住地',width:80},
                    {prop:'highEduc',lable:'最高学历',width:80},
                    {prop:'belongUnivers',lable:'毕业院校',width:180},
                    {prop:'industry',lable:'所属行业',width:248},
                    {prop:'workFix',lable:'工作年限',width:100},
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
                  industry:'',
                  workFix:'',
                }],

                //分页
                totalData:0,
                currentPage:1,
            };
        },
        methods: {
            //初次进入页面，获取的院校专业
            getcityInfo: function(){
                var that = this;
                axios.post('/admin/recordDetail/getcityInfo',{
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
                        that.totalData = res.totalData;
                        // console.log(that.totalData);
                        // console.log(res.totalData)
                    };
                })
                .catch(function (error) {
                });
            },
            //跳转页面按钮
            jumpPage:function() {
                    this.$router.push('/record/recordHome');
            }
        },
        mounted(){
            this.getcityInfo();
        }
    }

</script>
<style>
    .rightLow .el-table td, .el-table th.is-leaf {
        text-align: center;
    }
    
</style>

<style scoped>
    .line {
        width: 1170px;
        height: 2px;
        background: #e4e4e4;
        margin: 0 auto;
    }
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
    .leftImg i {
        margin: 0 8px 0 15px;
    }
    .leftImg {
        margin: 50px 0 0 0;
        color: #FFF;
        font-size: 14px;
        width: 200px;
        height: 50px;
        display: flex;
        align-items:center;
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
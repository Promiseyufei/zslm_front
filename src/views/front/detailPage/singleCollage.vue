<!-- 选院校》单个院校 -->
<template>
    <div class="singleCollage">
        <div class="singleCollageAll">
        <!-- 院校logo -->
            <div class="itemPicture">
                <div class="backColor">
                    <div class="collageLogo"><img src="../../../assets/img/picture.jpg"></div>
                    <div class="collageName">
                        <div class="nameLine"></div>
                        <div class="concreteName">复旦大学MBA</div>
                        <div class="nameLine"></div>
                    </div>
                    <p style="opacity: 0.8;text-align: center;color: rgb(255, 255, 255);font-size: 12px;font-weight: bold;">关注复旦大学MBA，获取最新信息！</p>
                    <div class="collageButton">
                        <div class="buttoOne"><el-button type="primary">+ 关注</el-button></div>
                        <div class="buttoTwo"><el-button type="primary" icon="el-icon-share"></el-button></div>
                    </div>
                </div>
            </div>
        <!-- 院校logo -->
        <!-- 招生项目 -->
            <div class="itemDetails">
            <!-- 左边 -->
                <div class="itemInform">
                    <!-- <div class="1"> -->
                        <el-col :span="8">
                            <el-card shadow="hover">
                                <div class="itemInformOne">
                                    <div>
                                        <p>招生项目</p>
                                        <div class="collageLine"></div>
                                    </div>
                                    <div><el-button size="mini">+ 对比</el-button></div>
                                </div>
                                <singleItem :detail="t" v-for="(t,index) in singleItem" :key="index"></singleItem>
                            </el-card>
                        </el-col>
                    <!-- </div> -->
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <div class="itemInformOne">
                                <div>
                                    <p>推荐内容</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div class="reflesh">
                                    <a @click="getContent"><i class="fa fa-repeat">&nbsp;换一换</i></a>
                                </div>
                            </div>
                            <div class="recommedContent">
                                <subPage :shortArticles="recommedContent"></subPage>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <div class="itemInformOne">
                                <div>
                                    <p>相关活动</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div class="reflesh">
                                    <a><i class="fa fa-repeat">&nbsp;换一换</i></a>
                                </div>
                            </div>
                            <div class="aboutActivity">
                                <activityBox :activityInfo="t" v-for="(t,index) in aboutActivity" :key="index"></activityBox>
                            </div>
                        </el-card>
                    </el-col>
                </div>
            <!-- 左边 -->
            <!-- 右边 -->
                <div class="basicInform">
                    <div class="leftOne">
                        <el-col :span="8">
                            <el-card shadow="hover">
                                <div style="margin-bottom:30px;">
                                    <p>基本信息</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div class="basicDetail">
                                    <div class="detailYear">
                                        <div class="detailTitle">审批年限</div>
                                        <div class="detailContent">1991</div>
                                    </div>
                                    <div class="detailMajor">
                                        <div class="detailTitle">专业认证</div>
                                        <div class="majorPicture" >
                                            <div v-for="(m,index) in majorPicture" :key="index"><img :src="m.src"></div>
                                        </div>
                                    </div>
                                    <div class="detailType">
                                        <div class="detailTitle">院校性质</div>
                                        <div class="typePicture">
                                            <div v-for="(t,index) in typePicture" :key="index"><img :src="t.src"></div>
                                        </div>
                                    </div>
                                    <div class="detailCity">
                                        <div class="detailTitle">所在省市</div>
                                        <div class="detailContent">上海</div>
                                    </div>
                                    <div class="detailAddress" style="align-items:flex-start;">
                                        <div class="detailTitle">院校地址</div>
                                        <div class="detailContent" style="width:182px;line-height: 22px;">上海市杨浦区国顺路670号史带楼 702室</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </div>
                    <div class="leftTwo">
                        <el-col :span="8">
                            <el-card shadow="hover">
                                <div style="margin-bottom:30px;">
                                    <p>联系方式</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div class="telephone">
                                    <div class="phoneText">咨询电话</div>
                                    <div class="phoneNumber">021-65119023，021-65643935 021-25011338</div>
                                </div>
                                <div class="fourLogon">
                                    <div class="majorLine" @mouseover="computer" @mouseout="computerOut">
                                        <div><img :src="logoPicture[0].computer"></div>
                                        <div class="major" id="major">校园官网</div>
                                    </div>
                                    <div class="logonLine"></div>
                                    <div class="studentLine" @mouseover="contact" @mouseout="contactOut">
                                        <div><img :src="logoPicture[0].contact"></div>
                                        <div class="student" id="contact">招生专题</div>
                                    </div>
                                    <div class="logonLine"></div>
                                    <div class="weixinLine" @mouseover="weixin" @mouseout="weixinOut">
                                        <div><img :src="logoPicture[0].weixin"></div>
                                        <div class="weixin" id="weixin">院校微信</div>
                                    </div>
                                    <div class="logonLine"></div>
                                    <div class="weiboLine" @mouseover="xinlang" @mouseout="xinlangOut">
                                        <div><img :src="logoPicture[0].xinlang"></div>
                                        <div class="weibo" id="xinlang">微博主页</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </div>
                    <div class="leftThree">
                        <el-col :span="8">
                            <el-card shadow="hover">
                                <div style="margin-bottom:10px;">
                                    <p>资料下载区</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div class="pdf">
                                    <div class="pdfDetail" v-for="(t,index) in pdfPicture" :key="index">
                                        <pdfDetail v-for="(t,index) in pdfPicture" @thisTesta="(b) => {bb = b}" @thisTest="(a) => {aa = a}" :t="index" :key="index" :class="{testa: index == aa ? true : false, testb: index == bb ? true : false}" :id="city(index)"></pdfDetail>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </div>
                </div>
            <!-- 右边 -->
            </div>
        <!-- 招生项目 -->
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            id:1,
            u_id:2,
            aa:-1,
            bb:-1,
            count:0,
            page:1,
            page_size:3,
            //招生项目
            singleItem:[],
            //推荐内容
            recommedContent:[],
            aboutActivity:[
                // {
                //     start_state:'123',
                //     z_name:'45',
                //     activity_type:'67',
                //     active_name:'11',
                //     begin_time:'33',
                //     end_time:'55',
                //     province:{province:'99'}
                // },
                // {
                //     start_state:'123',
                //     z_name:'45',
                //     activity_type:'67',
                //     active_name:'11',
                //     begin_time:'33',
                //     end_time:'55',
                //     province:{province:'99'}
                // },
                // {
                //     start_state:'123',
                //     z_name:'45',
                //     activity_type:'67',
                //     active_name:'11',
                //     begin_time:'33',
                //     end_time:'55',
                //     province:{province:'99'}
                // },
            ],
            pdfPicture:[
                {},
                {},
                {},
            ],
            logoPicture:[{
                computer:require("../../../assets/img/computer.png"),
                xinlang:require("../../../assets/img/xinlang2.png"),
                weixin:require("../../../assets/img/weixin2.png"),
                contact:require("../../../assets/img/contact.png"), 
            }],
            majorPicture:[
                {src:require("../../../assets/img/amba.png")},
                {src:require("../../../assets/img/aacsbSmall.png")},
                {src:require("../../../assets/img/camea.png")},
                {src:require("../../../assets/img/equsSmall.png")},
            ],
            typePicture:[
                {src:require("../../../assets/img/211.png")},
                {src:require("../../../assets/img/985.png")},
                {src:require("../../../assets/img/shuangyiliu.png")},
            ]
            // basicInform:true,
            // id: this.$route.params.id,
        }
    },
    methods: {
        // 相关活动
        getaboutAcitivity:function(){
            let that = this;
            this.fetch('/front/colleges/getmajoractive',{
                id:that.id,
                page:that.page,
                page_size:that.page_size
            }).then((response) => {
                if(response.code == 0){
                    let res = response.result.info;
                    that.aboutActivity = res;
                    // for(var i in res){
                    //     that.recommedContent.push({
                    //         img:res[i].z_image ,
                    //         title:res[i].zx_name,
                    //         content:res[i].brief_introduction,
                    //         time:res[i].z_from,
                    //         author:res[i].brief_introduction,
                    //     });
                    // }
                    // console.log(res)
                    // console.log(123)
                }
            })
            .catch(error => function (error) {
                console.log(response)
            });
        },
        //推荐内容刷新
        refresh: function (data) {
            this.page++;
            if (this.page*3 >60){
                this.page = 0;
            }
            this.getContent();
        },
        //获取推荐内容
        getContent:function(){
            let that = this;
            this.fetch('/front/colleges/getmajorinformation',{
                id:that.id,
                page:that.page,
                page_size:that.page_size
            }).then((response) => {
                if(response.code == 0){
                    let res = response.result;
                    that.recommedContent = res;
                    for(var i in res){
                        that.recommedContent.push({
                            img:res[i].z_image ,
                            title:res[i].zx_name,
                            content:res[i].brief_introduction,
                            time:res[i].z_from,
                            author:res[i].brief_introduction,
                        });
                    }
                    // console.log(res)
                }
            })
            .catch(error => function (error) {
                console.log(response)
            });
        },
        city:function(index){
            // console.log(index)
            return "city" + index;
        },
        //获取招生项目和基本信息
        getItemInform:function(){
            let that = this;
            that.fetch('/front/colleges/getmajordetails',{
                u_id: that.u_id,
                id: that.id,
                  
            }).then(function (response) {
                let res = response[0].project;
                that.singleItem = res;
                // if (response.code==0) {}
                // console.log(response)      

            }).catch(function (error) {
                // console.log(132)
            });
        },

        
        //联系方式logo——鼠标滑过样式
            computer:function() {
                this.logoPicture[0].computer = require("../../../assets/img/computerG.png")
                document.getElementById('major').style.color = "#009fa0"
            },
            computerOut:function() {
                this.logoPicture[0].computer = require("../../../assets/img/computer.png")
                document.getElementById('major').style.color = "#6f6f6f"
            },
            xinlang:function() {
                this.logoPicture[0].xinlang = require("../../../assets/img/xinlangR.png")
                document.getElementById('xinlang').style.color = "#009fa0"
            },
            xinlangOut:function() {
                this.logoPicture[0].xinlang = require("../../../assets/img/xinlang2.png")
                document.getElementById('xinlang').style.color = "#6f6f6f"
            },
            weixin:function() {
                this.logoPicture[0].weixin = require("../../../assets/img/weixinG.png")
                document.getElementById('weixin').style.color = "#009fa0"
            },
            weixinOut:function() {
                this.logoPicture[0].weixin = require("../../../assets/img/weixin2.png")
                document.getElementById('weixin').style.color = "#6f6f6f"
            },
            contact:function() {
                this.logoPicture[0].contact = require("../../../assets/img/contactG.png")
                document.getElementById('contact').style.color = "#009fa0"
            },
            contactOut:function() {
                this.logoPicture[0].contact = require("../../../assets/img/contact.png")
                document.getElementById('contact').style.color = "#6f6f6f"
            },
        //联系方式logo——鼠标滑过样式
        
    },
    mounted(){
        this.getaboutAcitivity();
        this.getContent();
        this.getItemInform();
        // count:function(){
            // let i = 0;
            // i++;
            // this.t = i;
        // }
        // console.log(this.pdfDetail[0].src)
        // let w = document.documentElement.offsetWidth || document.body.offsetWidth;
        // if (w<991) {
        //     this.basicInform = false;
        // } else {
        //     this.basicInform = true;
        // }
    },
};
</script>
<style>
    /*<!-- 招生项目 -->*/
        /*左边*/
            .pdfDetail {
                width: 96%;
                margin: 0 auto;
                padding: 25px 0;
                border-bottom: 1px solid rgb(239, 239, 239);
                display: flex;
                flex-wrap:wrap;
            }
            .major,.student,.weixin,.weibo {
                font-family: MicrosoftYaHei;
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 20px;
                letter-spacing: 0px;
                color: #6f6f6f;
            }
            .logonLine {
                width: 1px;
                height: 30px;
                background-color: #efefef;
            }
            .majorLine,.studentLine,.weixinLine,.weiboLine {
                cursor: pointer;
                width: 24%;
                height: 52px;
                text-align: center;
                margin-right: 
            }
            .pdf {
                width: 100%;
                margin: 0 auto;
            }
            .fourLogon {
                width: 96%;
                margin: 29px 0 0 2%;
                display: flex;
                align-items:center;
                justify-content:center;
            }
            .phoneNumber {
                line-height: 18px;
                font-size: 12px;
                font-weight: bold;
                color: rgb(110, 110, 110);
            }
            .phoneText {
                line-height: 18px;
                font-size: 12px;
                color: rgb(110, 110, 110);
            }
            .telephone {
                width: 200px;
                height: 56px;
                margin-top: 11px;
            }
            .majorPicture {
                width: 185px;
                display: flex;
                flex-wrap:wrap;
            } 
            .typePicture {
                display: flex;
                flex-wrap:wrap;
            }
            .majorPicture div,.typePicture div {
                margin: 0 4px 6px 0;
            }
            .detailContent {
                font-size: 12px;
                color: #6f6f6f;
                font-weight: bold;
            }
            .detailTitle {
                font-family: MicrosoftYaHei;
                width: 70px;
                line-height: 22px;
                font-size: 12px;
                color: rgb(110, 110, 110);;
            }
            .detailYear,.detailMajor,.detailType,.detailCity,.detailAddress {
                display: flex;
                margin-top: 11px;
                align-items:center;
            }
            .detailMajor,.detailType {
                align-items:flex-start;
            }
            .basicDetail {
                width: 305px;
            }
        /*左边*/
        
        
        .leftTwo .el-col-8 {
            margin: 20px 0;
        }
        .basicInform .el-col-8 {
            width: 325px;
            padding-left: 10px;
        }
        .itemInform .el-card__body{
            padding: 25px;
        }
        .itemInform .el-button--mini, .el-button--mini.is-round {
            padding: 8px 18px;
        }
        .itemInform .el-button--mini, .el-button--small {
            font-size: 12px;
            border-radius: 3px;
        }
        .itemInform .el-col-8 {
            width: 955px;
            padding-right: 10px;
            margin: 0 0 20px;
        }
        .itemInform .el-card__body{
            /*width: 100%;*/
            padding: 25px 25;
        }
        .itemInform {
            width: 955px;
        }
    /*<!-- 招生项目 -->*/
    /*<!-- 院校logo -->*/
        .buttoTwo .el-button--primary:hover,.buttoOne .el-button--primary:hover{
            background-color: #009fa0;
        }
        .buttoTwo .el-button--primary {
            height: 48px;
            width: 48px;
            background-color: rgb(255, 185, 87);
            color: rgb(255, 255, 255);
            font-weight: bold;
            border-radius: 5px;
            border: 0;
            margin-left: 6px;
        }
        .buttoOne .el-button--primary {
            width: 138px;
            height: 48px;
            background-color: rgb(255, 185, 87);
            color: rgb(255, 255, 255);
            font-weight: bold;
            border-radius: 5px;
            border: 0;
        }
    /*<!-- 院校logo -->*/



</style>
<style scoped>
    /*<!-- 招生项目 -->*/
        .aboutActivity >>>.activityBox {
            width: 288.3px;
            /*padding: 0 10px 0 0;*/
        }
        .aboutActivity {
            /*width: 925px;*/
            display: flex;
            margin-right: 0;
            flex-wrap:wrap;
            justify-content:space-between;
        }
        .reflesh > a:hover{
            color: rgb(255, 255, 255);
            background-color: rgb(255, 185, 87);
        }
        .reflesh > a >[class*=" el-icon-"], [class^=el-icon-]{
            font-family: MicrosoftYaHei-Bold;
            font-size: 15px;
        }
        .reflesh > a{
            color: #009fa0;
            font-family: MicrosoftYaHei-Bold;
            width: 89px;
            height: 28px;
            line-height: 28px;
            display: block;
            text-align: center;
            border-radius: 3px;
        }
        .reflesh {
           /* display: flex;
            align-items:center;
            width: 89px;
            height: 28px;*/
            
        }
        .collageLine {
            width: 21px;
            height: 4px;
            /*min-height: auto;*/
            background-color: rgba(210,210,210,1);
        }
        .itemInformOne p,.basicInform p {
            color: #009fa0;
            font-size: 18px;
            font-weight: bold;
            margin: 0px 0 15px;
        }
        .itemInformOne {
            display: flex;
            justify-content:space-between;
            width: 905px;
            margin-bottom: 30px;
        }
        .itemDetails {
            display: flex;
            flex-wrap:wrap;
        }
    /*<!-- 招生项目 -->*/
    /*<!-- 院校logo -->*/
        .collageButton {
            display: flex;
            justify-content:center;
            margin: 9px 0 0;
        }
        .concreteName {
            margin: 0 23px;
            font-size: 28px;
            color: #fcfcfc;
            font-family: Roboto;
            font-weight: bold;
        }
        .nameLine {
            background-color: rgb(255, 185, 87);
            width: 26px;
            height: 4px;
        }
        .collageName {
            display: flex;
            justify-content:center;
            align-items:center;
            margin: 0 auto 17px;
        }
        .collageLogo img {
            width: 100%;
        }
        .collageLogo {
            width: 120px;
            height: 120px;
            margin: 0 auto 30px;
            border-radius: 5px;
            border: rgba(255, 255, 255, 0.1) 2px solid;
            border-width: 5px;
            z-index: 99;
        }
        .backColor {
            border-radius: 5px;
            padding: 40px 0 0;
            height: 320px;
            background-color: rgba(56, 59, 61, 0.85);
        }
        .itemPicture {
            margin: 0 0 30px;
            border-radius: 5px;
            height: 360px;
            background: url(../../../assets/img/singleCollege.jpg) no-repeat;
            background-position: 50% 50%;
            background-size: cover; 
        }
    /*<!-- 院校logo -->*/
        .singleCollageAll {
            width: 1280px;
            margin: 0 auto;
        }
        .singleCollage {
            width: 100%;
            padding: 30px 0 60px;
            background-color: #f5f5f5;
        }
    /** PC **/
    @media only screen and (min-width: 992px) and (max-width:1200px) {
        
        .singleCollageAll {
            width: 100%;
        }

    }
    /** iPad **/
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .leftOne .el-col-8,.leftTwo .el-col-8,.leftThree .el-col-8 {
            width: 98%;
            padding: 0;
            margin-left: 1%;
        }
        .basicInform {
            width: 100%;
        }
        .itemInformOne {
            width: 100%;
        }
        .itemInform .el-col-8 {
            width: 98%;
            margin-left: 1%;
            padding: 0;
        }
        .itemInform {
            width: 100%;
        }
        .singleCollageAll {
            width: 100%;
        }

    }
    /** iPhone **/
    @media only screen and (min-width: 320px) and (max-width: 767px) {
        .aboutActivity >>>.activityBox {
            /*width: 100%;*/
            /*padding: 0 10px 0 0;*/
        }
        .aboutActivity {
            /*width: 100%;*/
        }
        .leftOne .el-col-8,.leftTwo .el-col-8,.leftThree .el-col-8 {
            width: 96%;
            padding: 0;
            margin-left: 2%;
        }
        .itemInform .el-card__body {
            padding: 25px 5px;
        }
        .itemInform .el-card {
            height: 100%;
        }
        .basicInform {
            width: 100%;
        }
        .itemInformOne {
            width: 100%;
        }
        .itemInform .el-col-8 {
            width: 96%;
            margin-left: 2%;
            padding: 0;
        }
        .itemInform {
            width: 100%;
        }
        .singleCollageAll {
            width: 100%;
        }
    }
</style>
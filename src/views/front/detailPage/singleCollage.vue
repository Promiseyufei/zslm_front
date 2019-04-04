<!-- 选院校》单个院校 -->
<template>
    <div class="singleCollage">
        <div class="singleCollageAll">
        <!-- 院校logo -->
            <!--<div class="itemPicture" :style="{ backgroundImage: 'url(' + coverName + ') no-repeat' }">-->
            <div class="itemPicture" :style="{backgroundImage:'url(' + coverName + ')', backgroundRepeat:'no-repeat'}">
                <div class="backColor">
                    <div class="collageLogo"><img :src="logoName"></div>
                    <div class="collageName">
                        <div class="nameLine"></div>
                        <div class="concreteName">{{ z_name }}</div>
                        <div class="nameLine"></div>
                    </div>
                    <p style="opacity: 0.8;text-align: center;color: rgb(255, 255, 255);font-size: 12px;font-weight: bold;">关注{{ z_name }}，获取最新信息！</p>
                    <div class="collageButton">
                        <div class="buttoOne" @click="clickFollow"><el-button type="primary" id="followButt"><i class="el-icon-plus" id="symbol"></i>{{follow}}</el-button></div>
                        <!--<div class="buttoTwo">
                            <el-popover
                              placement="bottom-start"
                              v-model="visible2">
                                <div class="shareWeinxin" @click="sharewx">
                                    <img src="../../../assets/img/weixin2.png">
                                    <span>分享到微信</span>
                                </div>
                                 <div class="shareWeinxin" @click="sharexl">
                                    <img src="../../../assets/img/xinlang2.png">
                                    <span>分享到微博</span>
                                </div>
                                <el-button type="primary" icon="el-icon-share" slot="reference"></el-button>
                            </el-popover>
                        </div>-->

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
                                    <div class="hover"><el-button @click="contrastPro" size="mini">+ 对比</el-button></div>
                                </div>
                                <singleItem :detail="t" :i="index" v-for="(t,index) in singleItem" :key="index"></singleItem>
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
                                    <a @click="refresh"><i class="fa fa-repeat">&nbsp;换一换</i></a>
                                </div>
                            </div>
                            <div class="recommedContent">
                                <subPage :shortArticles="recommedContent" @detail="detail"></subPage>
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
                                    <a @click="refreshActivity"><i class="fa fa-repeat">&nbsp;换一换</i></a>
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
                                        <div class="detailContent">{{year}}</div>
                                    </div>
                                    <div class="detailMajor">
                                        <div class="detailTitle">专业认证</div>
                                        <div class="majorPicture" >
                                            <div v-for="(item,index) in typeId.major_confirm_id" :key="index">
                                                <img class="c-image image_2pnGPP" v-if="item=='EQUIS'" src="../../../assets/img/EQUIS.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='AASCB'" src="../../../assets/img/AACSB.png">
                                                <img class="c-image image_2pnGPP" v-if="item == 'AMBA'" src="../../../assets/img/amba.png">
                                                <img class="c-image image_2pnGPP" v-if="item == 'CAMEA'" src="../../../assets/img/camea.png">
                                                <img class="c-image image_2pnGPP" v-if="item == 'AAPEQ'" src="../../../assets/img/AAPEQ.png">
                                                <img class="c-image image_2pnGPP" v-if="item == 'NASPAA'" src="../../../assets/img/NASPAA.png">
                                                <img class="c-image image_2pnGPP" v-if="item == 'CEEMAN IQA'" src="../../../assets/img/CEEMANIQA.png">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="detailType">
                                        <div class="detailTitle">院校性质</div>
                                        <div class="typePicture">
                                            <div v-for="(item,index) in typeId.major_follow_id" :key="index">
                                                <img class="c-image image_2pnGPP" v-if="item=='原211'" src="../../../assets/img/原211.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='原985'" src="../../../assets/img/原985.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='双一流'" src="../../../assets/img/双一流.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='中科院直属'" src="../../../assets/img/中科院直属.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='社科院直属'" src="../../../assets/img/社科院直属.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='部委直属'" src="../../../assets/img/部委直属.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='省部共建'" src="../../../assets/img/省部共建.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='省市属重点'" src="../../../assets/img/省市属重点.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='普通高等院校'" src="../../../assets/img/普通高等院校.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='中国与欧盟合办'" src="../../../assets/img/中国与欧盟合办.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='中西部重点建设'" src="../../../assets/img/中西部重点建设.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='宁波市与MIT共建'" src="../../../assets/img/宁波市与MIT共建.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='省/市直属'" src="../../../assets/img/省市直属.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='A线'" src="../../../assets/img/A线.png">
                                                <img class="c-image image_2pnGPP" v-if="item=='B线'" src="../../../assets/img/B线.png">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="detailCity">
                                        <div class="detailTitle">所在省市</div>
                                        <div class="detailContent">{{province}}</div>
                                    </div>
                                    <div class="detailAddress" style="align-items:flex-start;">
                                        <div class="detailTitle">院校地址</div>
                                        <div class="detailContent" style="width:182px;line-height: 22px;">{{address}}</div>
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
                                    <div class="phoneNumber" v-html="phonNumber"></div>
                                </div>
                                <div class="fourLogon">
                                    <div class="majorLine" @mouseover="computer" @mouseout="computerOut" @click="majorWebsite">
                                        <div><img :src="logoPicture[0].computer"></div>
                                        <div class="major" id="major">校园官网</div>
                                    </div>
                                    <div class="logonLine"></div>
                                    <div class="studentLine" @mouseover="contact" @mouseout="contactOut" @click="majorSpecial">
                                        <div><img :src="logoPicture[0].contact"></div>
                                        <div class="student" id="contact">招生专题</div>
                                    </div>
                                    <div class="logonLine"></div>
                                    <div class="weixinLine" @mouseover="weixin" @mouseout="weixinOut" @click="majorWx">
                                        <div><img :src="logoPicture[0].weixin"></div>
                                        <div class="weixin" id="weixin">院校微信</div>
                                    </div>
                                    <el-dialog
                                      :title=dialogTitle
                                      :visible.sync="dialogVisible"
                                      width="30%">
                                      <span><img :src="all" v-for="(all, index) in wxCode" :key="index"></span>
                                    </el-dialog>
                                    <div class="logonLine"></div>
                                   <!-- <div class="weiboLine" @mouseover="xinlang" @mouseout="xinlangOut" @click="majorWb">
                                        <div><img :src="logoPicture[0].xinlang"></div>
                                        <div class="weibo" id="xinlang">微博主页</div>
                                    </div>-->
                                    <el-dialog
                                      :visible.sync="dialogVisible2"
                                      width="30%">
                                      <span><img :src="xlCode"></span>
                                    </el-dialog>
                                </div>
                            </el-card>
                        </el-col>
                    </div>
                    <div class="leftThree">
                        <el-col :span="8">
                            <el-card shadow="hover">
                                <div style="margin-bottom:10px;padding:10px;">
                                    <p>资料下载区</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div class="pdf">
                                    <div class="pdfDetail" >
                                        <pdfDetail @loadPdf="loadPdf" :pdfPicture="pdfPicture" v-for="(t,index) in pdfPicture" @thisTesta="(b) => {bb = b}" @thisTest="(a) => {aa = a}" :t="index" :key="index" :class="{testa: index == aa ? true : false, testb: index == bb ? true : false}" :id="city(index)"></pdfDetail>
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
            dialogTitle:'',
            //院校二维码
            // wxCode:require("../../../assets/img/weixin2.png"),
            logoName:'',
            coverName:'../../../assets/img/singleCollege.jpg',
            z_name:'',
            wxCode:[],
            xlCode:[],
            //模态框
            dialogVisible: false,
            dialogVisible2:false,
            //关注
            follow:'关注',
            ab:1,
            //分享
            visible2: false,
            //资料下载区
            aa:-1,
            bb:-1,
            //基本信息、联系方式资料下载区
            year:0,
            province:'',
            address:'',
            phonNumber:0,
            id:this.$route.params.id,
            is_guanzhu:'',
            index_web:'',
            admissions_web:'',
            u_id: this.getUserState('userId') != null ? this.getUserState('userId') : 0,
            page:1,
            page_size:3,
            //招生项目
            singleItem:[],
            //推荐内容
            recommedContent:[],
            //相关活动
            aboutActivity:[],
            //资料下载区
            pdfPicture:[],
            //联系方式
            logoPicture:[{
                computer:require("../../../assets/img/computer.png"),
                xinlang:require("../../../assets/img/xinlang2.png"),
                weixin:require("../../../assets/img/weixin2.png"),
                contact:require("../../../assets/img/contact.png"),
            }],
            //基本信息——院校性质图片
            typeId:[],
            equis:"EQUIS",
            aascb:"AASCB",
            two:"原211",
            nine:"原985",
            both29:"双一流",
            amba:"AMBA",
            camea:"CAMEA",
        }
    },
    methods: {
        contrastPro() {
            window.open(document.location.origin+'/#/front/firstMenuRouter/majorCompare/' + this.id , '_blank');
            // this.$router.push('/front/firstMenuRouter/majorCompare/' + this.id);
        },
        detail(id) {
            this.$router.push('/front/firstMenuRouter/viewInformation/singleInformation/' + id);
        },
        //分享到微信——接口没写~
        sharewx:function(){
            // console.log('weixin');
        },
        //分享到新浪微博——接口没写~
        sharexl:function(){

        },
        //院校官网——跳转页面
        majorWebsite:function(){
            window.open(this.index_web);
        },
        //招生专题——跳转页面
        majorSpecial:function(){
            window.open(this.admissions_web);
        },
        //微博主页
        majorWb:function(){
            this.dialogVisible2 = true;
        },
        //院校微信
        majorWx:function(){
            this.dialogVisible = true;
        },
        //下载pdf
        loadPdf:function(file_name){
            window.open(this.excelUrl + "/front/colleges/downloadfile?filename=" + file_name);
        },
        //点击关注
        clickFollow:function(){

            if(this.getUserState('userId') != null) {
                let followButt = document.getElementById('followButt');
                if (this.is_guanzhu==false) {
                    this.post('/front/colleges/setusermajor', {
                        m_id: this.id,
                        u_id: this.getUserState('userId')
                    }).then((response) => {
                        if(response.code == 0) {
                            this.message('judge', '您已成功关注！', 'success');
                            this.follow = '已关注';
                            $("#symbol").attr("class","el-icon-check");
                            followButt.style.background = '#009fa0';
                            this.is_guanzhu=true;
                        }
                        else {
                            this.message(true, '关注失败，请重新尝试或联系服务人员', 'info');
                        }
                    })

                } else{
                    this.post('/front/colleges/unsetusermajor', {
                        m_id: this.id,
                        u_id: this.getUserState('userId')
                    }).then((response) => {
                        if(response.code == 0) {
                            this.message('judge', '您已取消关注哦', 'warning')
                            this.follow = '关注';
                            $("#symbol").attr("class","el-icon-plus");
                            followButt.style.background = '#ffb957';
                            this.is_guanzhu=false;
                        }
                        else {
                            this.message(true, '取消关注操作失败，请重新尝试或联系服务人员', 'info');
                        }
                    })
                }
            }
            else {
                this.$router.push('/front/Login/loginRoute/accountNumber');
                this.message(true, '您还未登录，请先登录后再完成关注。', 'info');
            }

        },
        //判断是否关注
        isFollow:function(){
            let followButt = document.getElementById('followButt');
            if (this.is_guanzhu==true) {
                this.follow = '已关注';
                $("#symbol").attr("class","el-icon-check");
                followButt.style.background = '#009fa0';
            } else {
                this.follow = '关注';
                $("#symbol").attr("class","el-icon-plus");
                followButt.style.background = '#ffb957';
            }
        },
        refreshActivity() {
            ++this.page;
            this.getaboutAcitivity();
        },
        // 相关活动
        getaboutAcitivity:function(){
            let that = this;
            this.fetch('/front/colleges/getmajoractive',{
                id:that.id,
                page:that.page,
                page_size:that.page_size
            }).then((response) => {
                // console.log(response.result)
                if(response.code == 0){
                    let res = response.result.info;
                    that.aboutActivity = res;
                }
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
                    // console.log(res)
                    for(var i in res){
                        that.recommedContent.push({
                            id: res[i].id,
                            img:res[i].z_image ,
                            title:res[i].zx_name,
                            content:res[i].brief_introduction,
                            time:res[i].update_time,
                            author:res[i].author,
                        });
                    }
                }
            })
            .catch(error => function (error) {
                // console.log(response)
            });
        },
        city:function(index){
            // console.log(index)
            return "city" + index;
        },
        //获取招生项目和基本信息
        getItemInform:function(){
            let that = this;
            this.u_id = ((this.getUserState('userId') != null) ? this.getUserState('userId') : 0);
            that.fetch('/front/colleges/getmajordetails',{
                u_id: that.u_id,
                id: that.id,
            }).then(function (response) {
                if (response.code==0) {
                    console.log(response)
                    let res = response.result[0];
                    that.changeTile(res.title)
                    that.z_name = res.z_name;
                    that.logoName = res.magor_logo_name != '' ? res.magor_logo_name : '../../../assets/img/picture.jpg';
                    that.coverName = res.major_cover_name != '' ? res.major_cover_name : '../../../assets/img/singleCollege.jpg';
                    that.singleItem = res.project;
                    that.phonNumber = res.phone;
                    that.year = res.access_year;
                    that.province = res.province;
                    that.address = res.address;
                    that.pdfPicture = res.file;
                    that.is_guanzhu = res.is_guanzhu;
                    that.index_web = res.index_web;
                    that.admissions_web = res.admissions_web;

                    that.typeId.major_confirm_id = (res.major_confirm_id != false) ? res.major_confirm_id.split(',') : [];
                    that.typeId.major_follow_id = (res.major_follow_id != false ) ? res.major_follow_id.split(',') : [];
                    // console.log(res.major_follow_id.split(','))
                    //字符串转化为数组
                    // that.wxCode = res.wc_image.split(',');
                    // that.xlCode = res.wb_image.split(',');
                    that.wxCode = res.wc_image;
                    that.xlCode = res.wb_imag;
                    that.dialogTitle = res.wc_image.length > 0?'扫码关注官方微信公众号':'暂无官方微信公众号信息！';

                    that.isFollow();


                }
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
        // console.log(369)
        // this.isFollow();
        this.getaboutAcitivity();
        this.getContent();
        this.getItemInform();
    },
};
</script>
<style>
    .el-icon-share{
      /*position: relative;
      right: 5px;*/
      margin: 0 auto;
      font-size: 15px !important;
    }
    .leftTwo .el-dialog__body {
        text-align: center;
    }
    .buttoOne .reflesh > a >[class*=" el-icon-"][data-v-26348ad6], [class^=el-icon-][data-v-26348ad6] {
        margin-right: 3px;
        font-size: 12px !important;
        font-weight: bold;
    }
    .el-popover {
        min-width: 150px;
        padding: 0;
    }
    /*<!-- 招生项目 -->*/
        /*左边*/
            .pdfDetail {
                width: 100%;
                margin: 0 auto;
                display: flex;
                flex-wrap:wrap;
                justify-content:center;
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
                /* margin-right:  */
            }
            .pdf {
                width: 100%;
                margin: 0 auto;
            }
            .fourLogon {
                width: 96%;
                margin: 20px 0 0 2%;
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
                /*height: 56px;*/
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
        .leftThree .el-card__body {
            padding: 10px;
            padding-bottom: 0;
        }
        .itemInform .el-card__body {
            padding: 0 0 20px 0;
        }
        .leftTwo .el-col-8 {
            margin: 20px 0;
        }
        .basicInform .el-col-8 {
            width: 325px;
            padding-left: 10px;
        }

        .itemInform .el-button--mini, .el-button--mini.is-round {
            padding: 8px 18px;
        }
        .hover .el-button:hover {
            background-color: #009fa0;
            color: #fff;
            border-color: #009fa0;
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
            background-color: rgb(255, 185, 87) !important;
            color: rgb(255, 255, 255);
            font-size: 18px !important;
            border-radius: 5px !important;
            border: 0;
            padding-right:25px;
            margin-left: 6px;
        }
        .buttoOne .el-button--primary {
            width: 138px !important;
            height: 48px;
            background-color: rgb(255, 185, 87) !important;
            color: rgb(255, 255, 255);
            font-weight: bold;
            border-radius: 5px !important;
            border: 0;
        }
        /*<!-- 院校logo -->*/
    @media only screen and (min-width: 320px) and (max-width: 767px) {
      .el-card__body {
        padding: 25px 10px !important;
      }
    }
</style>
<style scoped>
        /*分享按钮*/
        .shareWeinxin img {
            width: 20px;
        }
        .shareWeinxin span {
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 26px;
            letter-spacing: 0px;
            color: #6f6f6f;
        }
        .shareWeinxin {
            display: flex;
            justify-content:space-between;
            align-items:center;
            padding: 0 20px;
            margin: 10px 0;
            cursor: pointer;
        }

    /*<!-- 招生项目 -->*/
        .aboutActivity >>>.activityBox {
            width: 280px;
        }
        .aboutActivity >>> .activityManager {
            margin-top: 0;
            padding-top: 23px;
        }
        .activityBox>>>div {
            background-color: #f5f5f5;
        }
        .itemInform .el-card__body{
            padding: 25px;
        }
        .aboutActivity {
            width: 905px;
            padding: 0 20px;
            display: flex;
            flex-wrap:wrap;
            justify-content:flex-start;
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
           cursor: pointer;
        }
        .collageLine {
            width: 21px;
            height: 4px;
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
            width: 900px;
            margin-bottom:30px;
            /*padding: 25px;*/
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
            margin: 9px 0 40px;
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
           /* border-radius: 5px;
            border: rgba(255, 255, 255, 0.1) 2px solid;
            border-width: 5px;*/
            z-index: 99;
        }
        .backColor {
            border-radius: 5px;
            padding: 40px 0 0;
            /*height: 360px;*/
            background-color: rgba(56, 59, 61, 0.85);
            overflow: hidden;
        }
        .itemPicture {
            margin: 0 0 30px;
            border-radius: 5px;
            /*height: 360px;*/
            /* background: url(../../../assets/img/singleCollege.jpg) no-repeat; */
            background-position:center;
            background-size: 100% auto;
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
            width: 100%;
        }
        .leftOne .el-col-8,.leftTwo .el-col-8,.leftThree .el-col-8 {
            width: 96%;
            padding: 0;
            margin-left: 2%;
        }
        .itemInform .el-card__body {
            /*width: 100%;*/
            /*padding: 0;*/
        }
        /*.itemInform .el-card__body*/
        .itemInform .el-card {
            height: 100%;
        }
        .basicInform {
            width: 100%;
        }
        .itemInformOne {
            width: 100%;
            padding: 10px 0;
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

      .concreteName{
        width: 60%;
        line-height: 40px;
        text-align: center;
      }

      .singleCollage{
        padding-top: 20px;
      }

      .itemPicture{
        margin-bottom: 20px;
        background-size: auto 100%;
      }
    }
</style>

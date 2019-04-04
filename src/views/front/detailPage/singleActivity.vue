<!-- 找活动》单个活动 -->
<template>
    <div>
        <!-- 面包屑导航 -->
        <div class="breadCrumb">
            <div class="breadCrumbContainer">
                <img src="../../../assets/img/homeIcon.png">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>找活动</el-breadcrumb-item>
                    <el-breadcrumb-item>正文</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <!-- 中间主体块：左右布局 -->
        <div class="singleActivityBody">
            <!-- 清除浮动 -->
            <div class="clearBox">
                <!-- 左半部分 -->
                <section>
                    <!-- 主办方信息块 -->
                    <div class="InfoBox host">
                        <div class="hostInfo">
                            <h1>{{AppointAcInfo.active_name}}</h1>
                            <div class="hostInfoContent">
                                <div class="hostInfoItem">
                                    <img src="../../../assets/img/calendar.png">
                                    <p>{{AppointAcInfo.begin_time}} 至 {{AppointAcInfo.end_time}}</p>
                                </div>
                                <div class="hostInfoItem">
                                    <img src="../../../assets/img/position.png">
                                    <p>{{AppointAcInfo.address}}</p>
                                </div>
                                <div class="hostInfoType hostInfoItem">
                                    <img src="../../../assets/img/tag.png">
                                    <!-- <p>{{AppointAcInfo.active_type}}</p> -->
                                    <p v-if="AppointAcInfo.active_type == '招生宣讲'" style="background-color: rgb(0, 159, 160);">
                                        {{AppointAcInfo.active_type}}
                                    </p>
                                    <p v-else-if="AppointAcInfo.active_type == '提前面试'" style="background-color: rgba(0,97,172,1);">
                                        {{AppointAcInfo.active_type}}
                                    </p>
                                    <p v-else-if="AppointAcInfo.active_type == '高精会议'" style="background-color: rgba(199,140,0,1);">
                                        {{AppointAcInfo.active_type}}
                                    </p>
                                    <p v-else>
                                        {{AppointAcInfo.active_type}}
                                    </p>
                                </div>
                            </div>
                            <!--<div class="InfoBtn hostBtn">
                                <a v-if="AppointAcInfo.start_state == 0" href="javascript:;" @click="activitySign">{{acState}}</a>
                                <a v-else style="background-color:rgb(200,200,200);cursor: not-allowed;" href="javascript:;">{{acState}}</a>
                                <div class="hostShare">
                                    <p>分享到</p>
                                    <a class="shareweixin" @click="() => {this.message(true, '该功能还未开通，敬请期待。', 'info')}">
                                        &lt;!&ndash; <img src="../../../assets/img/weixin.png"> &ndash;&gt;
                                    </a>
                                    <a class="shareweibo" @click="() => {this.message(true, '该功能还未开通，敬请期待。', 'info')}">
                                        &lt;!&ndash; <img src="../../../assets/img/glayxinlang.png"> &ndash;&gt;
                                    </a>
                                </div>
                            </div>-->
                        </div>
                    </div>
                    <!-- 活动内容块 -->
                    <div class="InfoBox content">
                        <div class="infoTitle">
                            <h1>活动内容</h1>
                        </div>
                        <article v-html="AppointAcInfo.introduce">
                            <!-- {{AppointAcInfo.introduce}} -->
                        </article>
                        <div class="InfoBtn">
                            <a v-if="AppointAcInfo.start_state == 0" href="javascript:;" @click="activitySign">{{acState}}</a>
                            <a v-else style="background-color:rgb(200,200,200);cursor: not-allowed;" href="javascript:;">{{acState}}</a>
                        </div>
                    </div>
                </section>
                <!-- 右部分侧边栏 -->
                <aside>
                    <!-- 院校信息 -->
                    <div v-if="acHostInfo.id" class="asideBox" :style="{backgroundImage:'url(' + hostBgimg + ')'}">
                        <!-- <div v-if="acHostInfo.id" class="asideBox" style="backgroundImage: url(../../../assets/img/singleCollege.jpg);"> -->
                        <div class="asideContent">
                            <div class="asideLogo">
                                <!-- <img v-if=" acHostInfo.magor_logo_name != '' " :src="acHostInfo.magor_logo_name"> -->
                                <!-- 默认图片 -->
                                 <img v-if=" acHostInfo.magor_logo_name != '' " :src="acHostInfo.magor_logo_name">
                                <img v-else src="../../../assets/img/collegeLogo.png">
                            </div>
                            <div class="asideTitle" @click="goItemDetail(acHostInfo.id)" style="cursor: pointer">
                                <span></span>
                                <p>{{acHostInfo.z_name}}</p>
                                <span></span>
                            </div>
                            <div class="asideAddress">
                                <img src="../../../assets/img/position.png">
                                <span>{{acHostInfo.city}}&nbsp;</span>
                                <span class="addressItem">&middot;&nbsp;{{acHostInfo.province}}</span>
                            </div>
                            <div class="InfoBtn asideBtn">
                                <a v-if="acHostInfo.is_guanzhu" style="background-color:rgb(0, 159, 160)" class="getGuanZhu" href="javascript:0;" @click="changeState(acHostInfo.is_guanzhu)">{{GuanZhu}}</a>
                                <a v-else style="background-color:rgb(255, 185, 87)" class="getGuanZhu" href="javascript:0;" @click="changeState(acHostInfo.is_guanzhu)">{{GuanZhu}}</a>
                                <!-- <a href="javascript:0;" @click="changeState(acHostInfo.is_guanzhu)" v-else>+&nbsp;关注</a> -->
                            </div>
                        </div>
                    </div>
                    <!-- 广告位 -->
                    <!-- <div class="advertisement"> -->
                    <div class="advertisement" v-if="rotationPicture.length > 0">
                        <!-- <img v-if="rotationPicture.length == 1" src="../../../assets/img/advertisementB.png" :alt="rotationPicture[0].img_alt" @click="jumpreUrl(rotationPicture[0].re_url)"> -->
                        <!-- <img src="../../../assets/img/advertisement.png" alt=""> -->
                        <el-carousel style="border-radius: 5px;" trigger="click" height="100%" class="sowingContent test" :interval="5000" arrow="always">
                            <el-carousel-item v-for="(item,index) in rotationPicture" :key="index" @click.native="jumpreUrl(item.re_url)">
                                <!-- <img :src="item.img" alt="" @click="judgeBanner(item.re_url)" class="picture-header"> -->
                                    <img :src="item.img" :alt="item.img_alt" class="picture-header">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                        <!-- <img src="../../../assets/img/advertisementB.png" alt=""> -->
                    <!-- </div> -->
                    <!-- 热门活动推荐 -->
                    <div class="HotAcList">
                        <Article @jump="jump" @refreshs="refresh" v-if="hotInfor.length" title="热门活动" :inforArticle="hotInfor"></Article>
                    </div>
                </aside>
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
            // 单个活动id
            id: 0,

            //侧边栏 活动主办院校
            acHostInfo:[],
            // 关注
            GuanZhu:"+ 关注",

            // 热门活动
            hotInfor:[],//活动信息
            hotInfoTatol:1,
            hotInfopage:0,

            // 用户id
            userId:0,
            // 我要报名状态，实现只可点击一次
            acSignClick:0,

            // 活动详情
            AppointAcInfo:[],
            acState:'',

            // 院校背景图路径
            hostBgimg:'url(' + require('../../../assets/img/singleCollege.jpg') + ')',
            rotationPicture:[]
        }
    },
    methods: {
        jumpreUrl(jumpUrl) {
            if(typeof jumpUrl !== 'undefined') {
                if(jumpUrl.substr(0,7).toLowerCase() == "http://" || jumpUrl.substr(0,8).toLowerCase() == "https://") {
                    window.open(jumpUrl);
                }
                else {
                    var url = ('http://' + jumpUrl);
                    window.open(url);
                }
            }
        },
        jump(zxId) {
          // console.log(zxId);return false;
          // this.$router.push('/front/firstMenuRouter/viewInformation/singleInformation/' + zxId.id);
          window.open(document.location.origin+'/#/front/firstMenuRouter/lookActivity/singleActivity/'+zxId.id , '_blank');
        },
        /**
         * 获取banner图
         */
        getBanner: function() {
            var that = this;
            this.fetch('/front/banner/getbanner', {
                b_name: '找活动页面',
                limit: 3,
                type: 1
            }).then(res => {
                if (res.code == 0) {
                    // console.log(res.result)
                    that.rotationPicture = res.result
                } else {
                    that.message(true, res.msg, 'error')
                }
            })
        },

        // 关注院校、取消关注
        // state: false 未关注 true 已关注
        changeState:function(state){
            // console.log(state);
            if(state){this.remove();}
            else {this.follow();}
        },
        //关注院校
        follow:function(){
            let self = this;
            this.userId = this.getUserState('userId')
            if(self.userId){
                this.post('/front/colleges/setusermajor',{
                    m_id:this.acHostInfo.id,     //院校id
                    u_id:this.userId, //用户id
                }).then(function (res) {
                    if(res.code == 0){
                        self.message(true, "关注成功", 'success');
                        self.GuanZhu = "取消关注";
                        self.getAcHostMajor();
                    }else{
                        self.message(true, "操作失败，请重试", 'error');
                    }
                }).catch(function(error){
                    console.log("error");
                });
            }else{
                self.message(true, "你还没有登录哦,请先登录/注册。", 'info');
                this.$router.push('/front/Login/loginRoute/accountNumber');
            }

        },
        // 取消关注
        remove:function(){
            let self = this;
            this.userId = this.getUserState('userId')
            if(self.userId){
                this.post('/front/colleges/unsetusermajor',{
                    m_id:this.acHostInfo.id,     //院校id
                    u_id:this.userId, //用户id
                }).then(function (res) {
                    if(res.code == 0){
                        self.message(true, "取消关注成功", 'success');
                        self.GuanZhu = "+ 关注";
                        self.getAcHostMajor();
                        // console.log("---");
                    }else{
                        self.message(true, "操作失败，请重试", 'error');
                    }
                }).catch(function(error){
                    console.log("error");
                });
            }else{
                self.message(true, "你还没有登录哦,请先登录/注册。", 'info');
                this.$router.push('/front/Login/loginRoute/accountNumber');
            }
        },

        //跳到单个院校
        goItemDetail:function(id){
          // console.log(id);
          this.$router.push({
            path:'/front/firstMenuRouter/selectCollege/singleCollage/'+id
          });
        },

        // 热门活动——换一换
        refresh: function (data) {
            this.hotInfopage++;
            if (this.hotInfopage*4 >=this.hotInfoTatol){
                this.hotInfopage = 0;
            }
            this.getPopularAcInfo();
        },

        // 获取活动主办院校信息
        getAcHostMajor:function(){
            let self = this;
            if(self.userId){
                this.fetch('/front/colleges/getactivemajor',{
                    a_id:this.id,
                    u_id:this.userId,
                }).then(function (res) {
                    if(res.code == 0){
                        self.acHostInfo = res.result[0];
                        // 设置背景图
                        if(self.acHostInfo.major_cover_name != ""){
                            self.hostBgimg = self.acHostInfo.major_cover_name;
                        }
                        if(self.acHostInfo.is_guanzhu == true){
                            self.GuanZhu = "取消关注";
                        }
                    }else{
                        self.message(true, "主办院校不存在", 'info');
                    }
                }).catch(function(error){
                    console.log("error");
                });
            }else{
                this.fetch('/front/activity/getAcHostMajor',{
                    acId:this.id,
                }).then(function (res) {
                    if(res.code == 0){
                        self.acHostInfo = res.result;
                        // 设置背景图
                        if(self.acHostInfo.major_cover_name != ""){
                            self.hostBgimg = self.acHostInfo.major_cover_name;
                        }
                    }else{
                        self.message(true, "主办院校不存在", 'info');
                    }
                }).catch(function(error){
                    console.log(error);
                });
            }

        },

        // 热门活动推荐列表
        getPopularAcInfo:function(){
            let self = this;
            this.fetch('/front/activity/getPopularAcInfo',{
                acId:this.id,
                pageNumber:this.hotInfopage,
            }).then(function (res) {
                // let res = result.data;
                // console.log(res);
                if(res.code == 0){
                    let acInfo = res.result.acInfo;
                    for(var i in acInfo){
                        self.hotInfor.push({
                            id:acInfo[i].id,
                            zx_name:acInfo[i].active_name,
                            create_time:acInfo[i].begin_time,
                            z_image:acInfo[i].active_img,
                        });
                    }
                    // console.log(res);
                    // console.log("-----");
                    // self.hotInfor = res.result[0].acInfo;
                    self.hotInfoTatol = acInfo.count;
                }else{
                    self.message(true, "热门活动不存在", 'error');
                }
            }).catch(function(error){
                console.log("error");
            });
        },

        // 获取活动内容详情
        getAppointAcInfo:function(){
            let self = this;
            this.fetch('/front/activity/getAppointAcInfo',{
                acId:this.id,
            }).then(function (res) {
                // let res = result.data;
                // console.log(res);
                if(res.code == 0){
                    self.AppointAcInfo = res.result;
                    self.changeTile(self.AppointAcInfo.title);
                    switch(self.AppointAcInfo.start_state){
                        case 0:   self.acState = "+ 我要报名"; break;//未开始
                        case 1:   self.acState = "活动进行中"; break;//进行中
                        case 2:   self.acState = "活动已结束"; break;//已结束
                        default:  self.acState = "状态未知"; break;//未识别
                    };
                }else{
                    self.message(true, "活动不存在", 'error');
                }
            }).catch(function(error){
                console.log("error");
            });
        },

        // 我要报名
        activitySign:function(){
            if(this.userId){
              // 需不需要前台判断多次点击时的情况
              let self = this;
              if(self.acSignClick == 0){
                  this.post('/front/activity/activitySign',{
                      userId:this.userId,
                      acId:this.id,
                  }).then(function (res) {
                      // let res = result.data;
                      // console.log(res);
                      if(res.code == 0){
                          // self.acHostInfo = res.result[0];
                          self.message(true, "报名成功", 'success');
                          self.acSignClick = 1;
                          self.acState = "已报名";
                      }else{
                          self.message(true, "报名已结束，下次早点来哦", 'info');
                      }
                  }).catch(function(error){
                      console.log(error);
                  });
              }else{
                  self.message(true, "操作不正确", 'info');
              }
            }else{
              this.message(true, '您还未登录，请先登录后再完成关注。', 'info');
              this.$router.push('/front/Login/loginRoute/accountNumber');
            }
        },

    },
    mounted(){
        this.id = this.$route.params.id;
        this.userId = this.getUserState('userId');
        // console.log(this.userId);
        this.getAcHostMajor();//主办院校信息
        this.getPopularAcInfo();//热门活动列表
        this.getAppointAcInfo();//活动详细信息
        this.getBanner()
    },
};
</script>
<style>
    /*面包屑导航样式*/
    .breadCrumb .breadCrumbContainer span{
        font-size: 14px;
        color: #6e6e6e;
    }
    .breadCrumb .breadCrumbContainer .el-breadcrumb__item:last-child .el-breadcrumb__inner{
        color: rgb(0, 159, 160);
        font-weight: bold;
    }
</style>
<style scoped>
    p, span{
        font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
    }
    /*整体背景色*/
    .breadCrumb, .singleActivityBody{
        background-color: rgb(245, 245, 245);
    }

    /*面包屑导航样式*/
    .breadCrumb .breadCrumbContainer{
        min-height: auto;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    .breadCrumb .breadCrumbContainer>img{
        margin-right: 7px;
    }

    /*中间主体部分：左右两块布局*/
    .singleActivityBody{
        min-height: auto;
        padding-bottom: 60px;
        position: relative;
    }
    .singleActivityBody .clearBox{
        margin-left: auto;
        margin-right: auto;
    }
    /*清除浮动*/
    .clearBox::after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0;
    }
    .singleActivityBody section, .singleActivityBody aside{
        padding-left: 10px;
        padding-right: 10px;
        float: left;
    }

    /*左浮动——中间的左边部分大块：包括主办院校信息以及活动信息*/
    .singleActivityBody section{
        min-height: 80px;
        box-sizing: border-box;
    }
    .singleActivityBody section .InfoBox{
        padding: 0 25px 25px;
        margin-bottom: 20px;
        padding-top: 25px;
        border-radius: 5px;
        border-style: none;
        background-color:#fff;
        box-sizing: border-box;
    }

    /*我要报名按钮 样式*/
    .singleActivityBody .InfoBtn{
        display: flex;
        align-items: center;
        min-height: auto;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        /*margin-top: 19px;*/
        justify-content: space-between;
    }
    .InfoBtn>a{
        background-color: rgb(255, 185, 87);
        color: #fff;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        padding-top: 16px;
        width: 138px;
        height: 48px;
        box-sizing: border-box;
        font-size: 14px;
    }
    .InfoBtn>a:hover{
        background-color: rgba(0,159,160,1);
    }

    /*主办院校块*/
    .host{
        height: 350px;
    }
    .host .hostInfo{
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: 0px;
        height: 100%;
    }
    .hostInfo h1{
        color: rgb(72,72,72);
        min-height: 10px;
        min-width: 10px;
    }
    .hostInfo .hostInfoContent{
        border-top: 1px solid rgb(239, 239, 239);
        padding-top: 34px;
        min-height: auto;
        flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
    }
    .hostInfoContent p{
        color: #383b3d;
        font-size: 14px;
        opacity: 0.7;
        font-weight: bold;
    }
   .hostInfoContent .hostInfoItem{
        margin-bottom: 15px;
        align-items: center;
        min-height: auto;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
    }
    .hostInfoContent .hostInfoType p{
        background-color: rgb(0, 159, 160);
        border-radius: 60px;
        padding: 3px 8px;
        font-size: 12px;
        color: #fff;
        font-weight: normal;
    }
    .hostInfoContent img{
        margin-right: 6px;
    }
    /*主办院校下的我要报名分享*/
    .hostBtn .hostShare{
        min-height: auto;
        display: flex;
        align-items: center;
        -webkit-box-align: center;
    }
    .hostBtn .hostShare a{
        margin-left: 11px;
        width: 28px;
        height: 28px;
        background-size: cover;
    }
    .hostShare .shareweixin{
        background-image: url("../../../assets/img/grayweixin.png");
    }
    .hostShare .shareweibo{
        background-image: url("../../../assets/img/grayxinlang.png");
    }
    .hostShare .shareweixin:hover{
        background-image: url("../../../assets/img/greenweixin.png");
    }
    .hostShare .shareweibo:hover{
        background-image: url("../../../assets/img/redxinlang.png");
    }
    .hostBtn .hostShare p{
        opacity: 0.7;
        margin-bottom: 0;
        margin-top: 0;
        font-size: 14px;
        color: #383b3d;
    }

    /*活动详情内容块样式*/
    .content .infoTitle{
        padding-bottom: 12px;
        min-height: auto;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .content .infoTitle>h1{
        font-size: 16px;
        color: rgb(110, 110, 110);
        font-weight: bold;
    }
    .content article{
        margin-bottom: 49px;
        font-size: 16px;
        line-height: 30px;
        color: rgb(110,110,110);
        margin-top: 33px;
        text-align: justify;
    }

    /*中间的右边侧边栏部分块*/
    .singleActivityBody aside{
        min-height: 80px;
        position: relative;
        box-sizing: border-box;
    }
    /*侧边栏第一块*/
    aside .asideBox{
        background: url('../../../assets/img/singleCollege.jpg') no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        border-radius: 5px;
        margin-bottom: 20px;
        width: auto;
        /*height: 350px;*/
        overflow: hidden;
    }
    .asideBox .asideContent{
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: 25px;
        height: 100%;
        text-align: center;
        padding-top: 52px;
        box-sizing: border-box;
        background-color: rgba(56, 59, 61, 0.85);
    }
    .asideBox .asideLogo{
        width: 108px;
        height: 108px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 70px;
    }
    .asideBox .asideLogo img{
        width: 98px;
        height: 98px;
        border-radius: 70px;
        background-color: #fff;
        margin: 5px;
    }
    .asideBox .asideTitle{
        padding-left: 10px;
        padding-right: 10px;
        min-height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .asideTitle span{
        display: inline-block;
        width: 18px;
        height: 4px;
        background-color: rgb(255,185,87);
        min-height: auto;
    }
    .asideTitle p{
        font-size: 20px;
        margin-left: 14px;
        margin-right: 14px;
        color: #fcfcfc;
        font-weight: bold;
        width: 138px;
        line-height: 1.2;
    }
    .asideBox .asideAddress{
        display: flex;
        min-height: auto;
        justify-content: center;
        align-items: center;
        margin-top: 17px;
        margin-bottom: 30px;
    }
    .asideAddress img{
        margin-right: 6px;
    }
    .asideAddress span{
        font-size: 12px;
        color: #fff;
        font-weight: bold;
    }
    .asideAddress .addressItem{
        opacity: 0.7;
    }
    .asideContent .asideBtn{
        margin-top: 8px;
        justify-content: center;
    }

    /*广告位*/
    .advertisement{
        border-radius: 3px;
        margin-bottom: 14px;
        /*margin-top: 14px;*/
        height: auto;
    }
    .advertisement img{
        width: 100%;
        height: 100%;
    }
    .advertisement img:hover, .InfoBox:hover{
        box-shadow:rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
        -webkit-transition: All 0.3s ease;
        -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
        transform: rotate(0deg) scale(1) translate(0%,0%);
        transition: All 0.3s ease;
    }
    .advertisement {
        width: 100%;
        height: auto;
    }

	.test {
		height: 219.7px;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

    .test:hover {
        -webkit-box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
        -webkit-transition: All 0.3s ease;
        -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
        transform: rotate(0deg) scale(1) translate(0%,0%);
        transition: All 0.3s ease;
    }

    @media only screen and (max-width: 767px) {
        /*面包屑导航样式*/
        .breadCrumb{
            padding-top: 25px;
            padding-bottom: 10px;
        }

        /*活动详情大块元素*/
        .singleActivityBody{
            padding-bottom: 30px;
        }
        .singleActivityBody>div,section,aside{
            width: 100%;
        }
        /*主办方标题*/
        .hostInfo h1{
            font-size: 18px;
            line-height: 26px;
            margin-bottom: 18px;
        }
        /*主办院校整体块*/
        .singleActivityBody section .InfoBox{
            padding-left: 10px;
            padding-right: 10px;
        }

        .content article{
          margin-top: 33px;
          margin-bottom: 49px;
        }

        .singleActivityBody .InfoBtn{
          margin-top: 0px;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px){
        /*面包屑*/
        .breadCrumb{
            padding-bottom: 32px;
            padding-top: 56px;
        }
        /*主办方标题*/
        .hostInfo h1{
            font-size: 26px;
            line-height: 34px;
            margin-bottom: 30px;
        }
        /*左右两边分布 布局*/
        .singleActivityBody section{
            width: 69%;
        }
        .singleActivityBody aside{
            width: 31%;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        /*中间活动大块样式*/
        .singleActivityBody>div{
            width: 1300px;
        }
        /*左右两边分布 布局*/
        .singleActivityBody section{
            width: 75%;
        }
        .singleActivityBody aside{
            width: 25%;
        }
        /*面包屑样式*/
        .breadCrumb .breadCrumbContainer{
            width: 1280px;
            padding-left: 0;
        }
    }
</style>

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
                            <h1>华中科技大学MBA2019聚英计划第一批提前面试申请时间表</h1>
                            <div class="hostInfoContent">
                                <div class="hostInfoItem">
                                    <img src="../../../assets/img/calendar.png">
                                    <p>2018-10-07 13:00 至 13:30</p>
                                </div>
                                <div class="hostInfoItem">
                                    <img src="../../../assets/img/position.png">
                                    <p>闵行区沪闵路6088号凯德龙之梦17楼R6教室</p>
                                </div>
                                <div class="hostInfoType hostInfoItem">
                                    <img src="../../../assets/img/tag.png">
                                    <p>招生宣讲</p>
                                </div>
                            </div>
                            <div class="InfoBtn hostBtn">
                                <a href="">+&nbsp;我要报名</a>
                                <div class="hostShare">
                                    <p>分享到</p>
                                    <a href="">
                                        <img src="../../../assets/img/weixin.png">
                                    </a>
                                    <a href="">
                                        <img src="../../../assets/img/xinlang.png">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 活动内容块 -->
                    <div class="InfoBox content">
                        <div class="infoTitle">
                            <h1>活动内容</h1>
                        </div>
                        <article>
                            上海对外经贸大学MBA招生宣讲安排（2018年10月7日）

                            为了帮助考生朋友更好的了解上海对外经贸大学MBA项目和申请流程，我们MBA项目宣讲会安排如下，欢迎考生朋友前来咨询：

                            时间： 10月7日 13:00-13:30 地 址：闵行区沪闵路6088号凯德龙之梦17楼R6教室

                            时间安排可能临时调整，请关注我们官网的最新动态或者咨询我们。 咨询电话：021-52067665 牟老师
                        </article>
                        <div class="InfoBtn">
                            <a href="">+&nbsp;我要报名</a>
                        </div>
                    </div>
                </section>
                <!-- 右部分侧边栏 -->
                <aside>
                    <!-- 院校信息 -->
                    <div class="asideBox">
                        <div class="asideContent">
                            <div class="asideLogo">
                                <img src="../../../assets/img/majorIcon.png">
                            </div>
                            <div class="asideTitle">
                                <span></span>
                                <p>复旦大学MBA</p>
                                <span></span>
                            </div>
                            <div class="asideAddress">
                                <img src="../../../assets/img/position.png">
                                <span>上海市&nbsp;</span>
                                <span class="addressItem">&middot;&nbsp;静安区</span>
                            </div>
                            <div class="InfoBtn asideBtn">
                                <a href="">+&nbsp;关注</a>
                            </div>
                        </div>
                    </div>
                    <!-- 广告位 -->
                    <div class="advertisement">
                        <img src="../../../assets/img/advertisementB.png" alt="">
                    </div>
                    <!-- 热门活动推荐 -->
                    <!-- <Article @refreshs="refresh" v-if="information.length" title="推荐阅读" :inforArticle="information"></Article> -->
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
            id: 0,

        }
    },
    methods: {

    },
    mounted(){
        this.id = this.$route.params.id;
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

    /*左浮动——中间的左边部分大块：包括主办院校信息以及活动信息*/
    .singleActivityBody section{
        padding-left: 10px;
        padding-right: 10px;
        min-height: 80px;
        float: left;
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
        margin-top: 19px;
        justify-content: space-between;
    }
    .InfoBtn>a{
        background-color: rgb(255, 185, 87);
        color: #fff;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        padding-top: 14px;
        width: 138px;
        height: 48px;
        box-sizing: border-box;
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
    .hostBtn .hostShare img{
        width: 28px;
        height: 28px;
    }
    .hostBtn .hostShare a{
        margin-left: 11px;
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
        padding-left: 10px;
        padding-right: 10px;
        min-height: 80px;
        float: left;
        position: relative;
        box-sizing: border-box;
    }
    /*侧边栏第一块*/
    aside .asideBox{
        background-image: url("../../../assets/img/coach.jpg");
        background-position: 50% 50%;
        background-size: cover;
        border-radius: 5px;
        margin-bottom: 20px;
        width: auto;
        height: 350px;
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
        margin-top: 14px;
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

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        /*面包屑导航样式*/
        .breadCrumb{
            padding-top: 25px;
            padding-bottom: 10px;
        }
        .breadCrumb .breadCrumbContainer{
            padding-left: 10px;
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
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        /*面包屑导航样式*/
        .breadCrumb{
            padding-top: 25px;
            padding-bottom: 10px;
        }
        .breadCrumb .breadCrumbContainer{
            padding-left: 10px;
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
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
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
    } 

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {

    } 

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        /*中间活动大块样式*/
        .singleActivityBody{
            padding-bottom: 60px;
        }
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
        }
        .breadCrumb .breadCrumbContainer{
            padding-left: 0;
        }
    }
</style>
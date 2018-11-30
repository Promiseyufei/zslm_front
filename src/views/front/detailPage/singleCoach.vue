<template>
    <div>
        <div class="bigBox">
            <!--header-->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="selectHeaderbox">
                        <div class="selectHeaderboxhover">
                            <div class="selectHeader">
                                <img src="../../../assets/img/xindongfang.png" alt="">
                                <p><span></span><strong>新东方</strong><span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--main-->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="singlemessage">
                        <!-- 简介 -->
                        <div class="detailCoach">
                            <h6>机构简介</h6>
                            <p>北京社科赛斯教育集团由北京大学MBA甄诚先生于2002年创立，是一家股东层、管理层由北大、清华、南开、
                                上海交大等高校MBA毕业生组成的教育科技企业，同时也是中国较早成立的MBA、MPAcc等专业培训的机构之一，
                                核心业务涵盖MBA、MPA、MPAcc、MEM等硕士考前辅导、在线教育、国际合作MBA、考试研究及图书出版等。 
                                旗下设有MBA备考网（http://www.mbaschool.com.cn/、MBA教育网(http://www.mbaedu.cn/)
                                、研线网（http://www.yanxian.org/）和研线课堂（http://ke.yanxian.org/)等教育门户网站和在
                                线学习平台。</p>
                        </div>
                        <!-- 切换卡 -->
                        <div class="messageCoach">
                            <el-tabs v-model="activeName">
                                <el-tab-pane label="优惠卷" name="first">
                                    <div class="coachbig">
                                        <!-- n个优惠卷 -->
                                        <div class="coachbox" v-for="(item,index) in 2">
                                            <div class="coachleft">
                                                <div class="coachleftleft">折扣卷</div>
                                                <div class="coachright">
                                                    <p>任意课程8折</p>
                                                    <span>2018.10.12-2018.11.12</span>
                                                </div>
                                            </div>
                                            <div class="coachleftright">
                                                <span>点击领取</span>
                                            </div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="分校列表" name="second">
                                    <div class="coachbig">
                                        <div class="collagebox" v-for="(item,index) in 2">
                                            <img src="../../../assets/img/collageimg.jpg" alt="">
                                            <div class="collagemessage detailCoach">
                                                <nav>
                                                    <h4>社科赛似（合肥）分校</h4>
                                                    <img src="../../../assets/img/money2.png" alt="">
                                                    <img src="../../../assets/img/return3.png" alt="">
                                                </nav>
                                                <div><span>所在省市</span><strong>400-010-9168</strong></div>
                                                <div><span>联系电话</span><strong>点击访问</strong></div>
                                                <div><span>地址</span><strong>北京市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长市海淀区苏州街18号长远天地大厦A1-1901室</strong></div>
                                                <div><span>网址</span><strong>线上线下</strong></div>
                                                <div><span>辅导形式</span><strong>2018.09.02</strong></div>
                                                <div><span>信息更新日期</span><strong>2018.09.02</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                    <div class="singlerightbox">
                        <!-- 机构信息 -->
                        <div class="detailCoach">
                            <h6>机构简介</h6>
                            <div><span>联系电话</span><strong>400-010-9168</strong></div>
                            <div><span>总部官网</span><strong>点击访问</strong></div>
                            <div><span>总部地址</span><strong>北京市海淀区苏州街18号长远天地大厦A1-1901室</strong></div>
                            <div><span>辅导形式</span><strong>线上线下</strong></div>
                            <div><span>信息更新</span><strong>2018.09.02</strong></div>
                        </div>

                        <!-- 活动小块 -->
                        <activityBox :activityInfo="activity"></activityBox>

                        <!-- 意见反馈 -->
                        <img src="../../../assets/img/advise.png" alt="">

                        <!-- 退款保障 -->
                        <img src="../../../assets/img/returnmoney.png" alt="">
                    </div>
                </div>
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
            activeName: 'first',
            activity:{
                id:1,
                active_name:'活动名称',
                province:[
                    {province:'陕西省'},
                    {city:'西安市'},
                ],
                begin_time:'5-23',
                end_time:'8-15',
                active_img:'http://www.xxx.com/ssdsd/dds',
                activity_type:'活动类型名称',
                z_name:'主办院校专业名称',
                start_state:'0'
            }
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
    .el-tabs__nav {
        width: 100%;
    }
    .el-tabs__item {
        width: 50%;
        text-align: center;
    }
</style>
<style scoped>
.bigBox {
    background-color: rgb(245, 245, 245);
}
.collagemessage {
    margin-left: 20px;
    width: 595px !important;
}
.collagemessage>nav {
    font-size: 18px;
    font-weight: bold;
    /* line-height: 25px; */
    color: rgb(72, 72, 72);
    /* margin-bottom: 10px; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.collagemessage>nav>h4 {
    margin-right: 20px;
}
.collagemessage>nav>img {
    margin-right: 10px;
}

.coachbig {
    display: flex;
    flex-wrap: wrap;
}
.collagebox:first-child {
    border-top: 0;
}
.coachbox {
    display: flex;
    justify-content: flex-start;
    margin: 0 10px 28px;
}
.collagebox {
    display: flex;
    justify-content:flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 40px 0;
    border-top: 1px solid rgb(239, 239, 239);
}
.collagebox>img {
    width: 240px;
    height: 174px;
}
.coachright {
    margin-left: 15px;
}
.coachright>p {
    font-size: 22px;
    color: rgb(199, 140, 0);
}
.coachright>span {
    font-size: 14px;
    color: rgb(111, 111, 111);
    opacity: 0.7;
    margin-top: 8px;
}
.coachleftright {
    width: 81px;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    background-image: url("../../../assets/img/green3.png");
}
.coachleftright:hover {
    opacity: 1;
}
.coachleftright>span {
    width: 16px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 3px;
    color: rgb(255, 255, 255);
    line-height: 1.2em;
    text-align: center;
}
.coachleft {
    width: 350px;
    background-image: url("../../../assets/img/coachleft.png");
    display: flex;
    justify-content: center;
    align-items: center;
}
.coachleftleft {
    width: 112px;
    height: 59px;
    background-image: url("../../../assets/img/yellow.png");
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgb(255, 255, 255);
}
.singlerightbox {
    width: 305px;
    margin: 30px 0 0 20px;
}
.singlerightbox>img {
    margin-bottom: 20px;
}
.singlerightbox>img:hover {
    box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
}
.singlemessage {
    margin: 30px 0 0;
}
.detailCoach>h6 {
    color: #009FA1;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e6e6e6;
}
.detailCoach>div {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    margin-top: 11px;
}
.detailCoach>div>span {
    font-size: 12px;
    width: 70px;
    flex-shrink:0;
    line-height: 1.6em;
    color: rgb(110, 110, 110);
}

.detailCoach>div>strong {
    font-size: 12px;
    font-weight: bold;
    line-height: 1.6em;
    color: rgb(110, 110, 110);
}
.collagemessage>div>span {
    font-size: 14px;
    width: 100px;
}
.collagemessage>div>strong {
    font-size: 14px;
}
.detailCoach>p {
    font-size: 16px;
    line-height: 30px;
    color: rgb(110, 110, 110);
} 
.messageCoach {
    background-color: #fff;
    padding: 25px;
}

.detailCoach {
    padding: 25px;
    margin-bottom: 20px;
    background-color: #fff;
}
.detailCoach:hover {
    box-shadow:rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
}

.collagebox .detailCoach:hover {
    box-shadow:none;
}
.singlemessage {
    width: 955px;
}
.collagebox .detailCoach {
    padding: 0;
    margin-bottom: 0;
    background-color: none;
    width: auto;
}
.selectHeader {
    margin: 0 auto;
    text-align: center;
}
.singlecoachbox {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
}
.selectHeaderbox {
    background: url("../../../assets/img/room.jpg");
    background-size: 100%;
    width: 100%;
}
.selectHeaderboxhover {
    background-color: rgba(56, 59, 61, 0.85);
    width: 100%;
    padding: 80px 0;
}
.selectHeader>img {
    margin-bottom: 30px;
    max-width: 110px;
    border-radius: 5px;
    border: 5px solid rgba(255, 255, 255, 0.1);
}
.selectHeader>p {
    display: flex;
    align-items: center;
    justify-content: center;
}
.selectHeader>p>span {
    display: inline-block;
    margin: 0 20px;
    width: 30px;
    color: #ffb957;
    border: 2px solid #ffb957;
}
.selectHeader>p>strong {
    color: #fff;
    font-size: 31px;
}
.selectHeader>strong {
    color: #fff;
    font-size: 30px;
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
    .selectHeader>p>span {
        width: 20px;
        margin: 0 15px;
    }
    .selectHeaderback {
        height: 140px;
    }
    .selectHeader>p {
        margin-bottom: 5px;
    }
    .selectHeader>p>strong {
        font-size: 20px;
    }
    .selectHeader>strong {
        font-size: 20px;
    }
    .collagemessage {
        margin-left: 0;
        margin-top: 20px;
        width: 100% !important;
    }
    .collagemessage>nav>h4 {
        flex-shrink:0;
        width: 100%;
    }
    .singlerightbox {
        width: 95%;
        margin-left: 0;
    }
}
@media only screen and (max-width: 432px) {
    .coachbox {
        width: 100%;
        margin-bottom:20px;
    }
    .coachleft {
        width: 190px;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .coachleftleft {
        width: 55px;
        background-size: 100%;
        background-repeat: no-repeat;
        font-size: 12px;
        height: 30px;
    }
    .coachright {
        margin-left: 5px;
    }
    .coachright>p {
        font-size: 14px;
    }
    .coachright>span {
        font-size: 12px;
    }
    .coachleftright {
        width: 44px;
        height:68px;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .coachleftright>span {
        font-size: 12px;
    }
}
@media only screen and (max-width: 1280px) {
    .singlecoachbox {
        width: 100%;
    }
    .singlemessage {
        width: 95%;
    }
}

</style>
    
    
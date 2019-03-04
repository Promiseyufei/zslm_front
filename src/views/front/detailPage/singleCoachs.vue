<template>
    <div>
        <div class="bigBox" style="padding-bottom: 20px">
            <!--header-->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="selectHeaderbox" :style="{backgroundImage:'url('+collage.cover_name+')'}">
                        <div class="selectHeaderboxhover">
                            <div class="selectHeader">
                                <img :src="collage.logo_name" alt="">
                                <p><span></span><strong>{{collage.coach_name}}</strong><span></span></p>
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
                            <p>{{collage.describe}}</p>
                        </div>
                        <!-- 切换卡 -->
                        <div class="messageCoach" v-show="collage.son_coach!='' ">
                            <el-tabs v-model="activeName">
                                <el-tab-pane label="优惠券" name="first">
                                    <div class="coachbig">
                                        <!-- n个优惠券 -->
                                        <div class="coachbox" v-for="(item,index) in collage.coupon" @click="useorget(item.is_have,item.id , index)" v-show="item.is_enable == 0">
                                            <div class="coachleft" :class="item.is_have==1?'ff':'' ">
                                                <div class="coachleftleft" v-if="item.type==0">折扣券</div>
                                                <div class="coachleftleft2" v-if="item.type==1">满减券</div>
                                                <div class="coachright">
                                                    <p :class="item.type==1?'ffff':'' ">{{item.name}}</p>
                                                    <span>2018.10.12-2018.11.12</span>
                                                </div>
                                            </div>
                                            <div class="coachleftright" v-if="item.is_have==0">
                                                <span>点击领取</span>
                                            </div>
                                            <div class="coachleftright coachleftright2" v-if="item.is_have==1" @click="jumpUserCoupon()">
                                                <span>去使用</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nonecoach" v-show="collage.coupon=='' ">
                                        <img src="../../../assets/img/nonecoach.png" alt="">
                                        <span>暂无可用优惠券</span>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="分校列表" name="second">
                                    <div class="coachbig">
                                        <div class="collagebox" v-for="(item,index) in collage.son_coach">
                                            <img :src="item.cover_name" alt="">
                                            <div class="collagemessage detailCoach" @click="jumpCoach(item.id)">

                                                <!--{{item}}-->
                                                <nav>
                                                    <h4>{{item.coach_name}}</h4>
                                                    <img src="../../../assets/img/money2.png" v-show="item.if_back_money == 0">
                                                    <img src="../../../assets/img/return3.png" v-show="item.if_coupons == 0">
                                                </nav>
                                                <div><span>所在省市</span><strong>{{item.province}}</strong></div>
                                                <div><span>联系电话</span><strong>{{item.phone}}</strong></div>
                                                <div><span>地址</span><strong>{{item.address}}</strong></div>
                                                <div><span>网址</span><strong class="link" @click="tolink(item.web_url)">{{item.web_url}}</strong></div>
                                                <div><span>辅导形式</span>
                                                    <strong v-if="item.coach_type==0">线上</strong>
                                                    <strong v-if="item.coach_type==1">线下</strong>
                                                    <strong v-if="item.coach_type==2">线上、线下</strong>
                                                </div>
                                                <div><span>信息更新</span><strong>{{item.update_time}}</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                        <div class="messageCoach" v-show="collage.son_coach=='' ">
                            <h6>优惠券</h6>
                            <div class="coachbig" style="margin-top: 15px;">
                              <!-- n个优惠券 -->
                              <div class="coachbox" v-for="(item,index) in collage.coupon" @click="useorget(item.is_have,item.id , index)"  v-show="item.is_enable == 0">
                                <div class="coachleft" :class="item.is_have==1?'ff':'' ">
                                  <div class="coachleftleft" v-if="item.type==0">折扣券</div>
                                  <div class="coachleftleft2" v-if="item.type==1">满减券</div>
                                  <div class="coachright">
                                    <p :class="item.type==1?'ffff':'' ">{{item.name}}</p>
                                    <span>2018.10.12-2018.11.12</span>
                                  </div>
                                </div>
                                <div class="coachleftright" v-if="item.is_have==0">
                                  <span>点击领取</span>
                                </div>
                                <div class="coachleftright coachleftright2" v-if="item.is_have==1" @click="jumpUserCoupon()">
                                  <span>去使用</span>
                                </div>
                              </div>
                            </div>
                            <div v-show="collage.coupon==''">
                              <div class="nonecoach">
                                  <img src="../../../assets/img/nonecoach.png" alt="">
                                  <span>暂无可用优惠券</span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="singlerightbox">
                        <!-- 机构信息 -->
                        <div class="detailCoach">
                            <h6>机构简介</h6>
                            <div><span>联系电话</span><strong>{{collage.phone}}</strong></div>
                            <div><span>总部官网</span><strong @click="jumpweb" class="handstyle">点击访问<i class="fa fa-share-square-o"></i></strong></div>
                            <div><span>总部地址</span><strong>{{collage.address}}</strong></div>
                            <div><span>辅导形式</span>
                                <strong v-if="collage.coach_type==0">线上</strong>
                                <strong v-if="collage.coach_type==1">线下</strong>
                                <strong v-if="collage.coach_type==2">线上、线下</strong>
                            </div>
                            <div><span>信息更新</span><strong>{{collage.update_time}}</strong></div>
                        </div>

                        <!-- 活动小块 -->
                        <div v-if="activity != null">
                            <activityBox  :activityInfo="activity" class="activitystyle"></activityBox>
                        </div>

                        <!-- 意见反馈 -->
                        <img src="../../../assets/img/advise.png" alt="" @click="advise">

                        <!-- 退款保障 -->
                        <img src="../../../assets/img/returnmoney.png" alt="" @click="returnmoney">
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
            userId:0,
            activeName: 'first',
            activity:{},
            collage:{},
        }
    },
    methods: {
        //获得分页数据
        singlecoach:function () {
            var that = this;
            this.fetch('/front/coach/getcoachbyid',{
                id: that.id,
                u_id:this.userId?this.userId:0,
            }).then(function (res) {
                    if (res.code == 0) {
                        that.collage = res.result[0];
                        if(that.collage.best_hot_active.info.length > 0)
                            that.activity = that.collage.best_hot_active.info[0];
                        else
                            that.activity = null
                        that.changeTile(that.collage.title);
                        // that.count = res.count;
                    }else {
                        that.message(true,res.msg,"error");
                    }
            }).catch(function (error) {
            });
        },
        //跳转到官网
        jumpweb:function() {
            window.open(this.collage.web_url , '_blank');
            // window.location.href=this.collage.web_url;
        },
        // 领取优惠券
        useorget:function(re,id , key) {
            if(this.userId){
              if(re==0) {
                var that = this;
                this.post('/front/coach/addcoupon',{
                  u_id:this.userId,
                  c_id:id
                }).then(function (res) {
                  console.log(res);
                  if (res.code == 0) {
                    that.collage.coupon[key].is_have = 1;
                    that.message(true,res.msg,"succeed");
                  }else {
                    that.message(true,res.msg,"error");
                  }
                }).catch(function (error) {
                });
              }
            }else{
              this.message(true, '您还未登录，请先登录后再完成关注。', 'info');
              this.$router.push('/front/Login/loginRoute/accountNumber');
            }
        },
        // 跳转到用户优惠券中心
        jumpUserCoupon(){
            this.$router.push('/front/firstMenuRouter/usercore/mycoupon');
        },
        //跳转到官网
        tolink:function(url) {
            window.open(url , '_blank');
            // window.location.href=url;
        },
        //点击跳到意见反馈页面
        advise: function() {
            window.open(document.location.origin+'/#/front/firstMenuRouter/singleOpinion' , '_blank');
            // this.$router.push('/front/firstMenuRouter/singleOpinion');
        },
        //点击跳到退款保障页面
        returnmoney: function() {
            window.open(document.location.origin+'/#/front/firstMenuRouter/returnmoney' , '_blank');
            // this.$router.push('/front/firstMenuRouter/returnmoney');
        },
        jumpCoach:function (id) {
            this.$router.push('/front/firstMenuRouter/searchCoach/singleCoachs/'+id);
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        this.userId = this.getUserState('userId');
        this.singlecoach();
    },
};
</script>
<style>
    /* 选项卡样式 */
    .messageCoach .el-tabs__nav {
        width: 100%;
    }
    .messageCoach .el-tabs__item {
        width: 50%;
        text-align: center;
    }

    .el-tabs__active-bar{
      background-color:#1abc9c;
    }

    .el-tabs__item:hover,.el-tabs__item.is-active{
      color: #1abc9c;
    }
</style>
<style scoped>
.bigBox {
    background-color: rgb(245, 245, 245);
}
.nonecoach {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
}
.nonecoach>span {
    margin-top: 10px;
    color: rgb(170, 170, 170);
    font-size: 14px;
}
.ffff {
    color: #0061ac !important;
}
.activitystyle {
    margin-left: 0 !important;
}
.handstyle {
    cursor: pointer;
}
.handstyle>i {
    margin-left: 5px;
    color: #009FA1;
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
    cursor: pointer;
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
.coachleftright2 {
    background-image: url("../../../assets/img/green4.png");
    opacity: 1;
}
.coachleftright2:hover {
    background-image: url("../../../assets/img/green2.png");
}
.coachleftright2>span {
    color: #009FA1;
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
.coachleftleft2 {
    width: 112px;
    height: 59px;
    background-image: url("../../../assets/img/reduce.png");
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
    cursor: pointer;
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
.ff {
    background-image: url("../../../assets/img/finish.png") !important;
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
.messageCoach:hover {
    box-shadow:rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
}
.messageCoach>h6 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
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
    background-color: rgba(56, 59, 61, 0.8);
    width: 100%;
    padding: 80px 0;
}
.selectHeader>img {
    margin-bottom: 30px;
    max-width: 200px;
    /*border-radius: 5px;*/
    /*border: 5px solid rgba(255, 255, 255, 0.1);*/
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
.link {
    color: #009FA1 !important;
    cursor: pointer;
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
    .coachleftleft2 {
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


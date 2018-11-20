<template>
    <div>
    	<div>
            <!-- header -->
            <div class="indexHeaderbig">
                <div class="indexHeaderbox">
                    <!-- 搜索，消息，个人中心图标 -->
                    <div class="indexNav">
                        <div class="indexHeader">
                            <div>
                                <input type="text" class="indexinput">
                                <i class="fa fa-search"></i>
                            </div>
                            <i class="fa fa-bell"></i>
                            <i class="fa fa-user-circle"></i>
                        </div>
                    </div>
                    <!-- logo按钮 -->
                    <img src="../../assets/img/MBA.png" alt="">
                    <p>MBA报考、资讯、活动，一站搞定！</p>
                    <!-- 四个大的按钮 -->
                    <div class="indexBigBlock">
                        <div @click = "toJump(1)"><img src="../../assets/img/college.png" alt=""><p>选院校</p></div>
                        <div @click = "toJump(2)"><img src="../../assets/img/activity.png" alt=""><p>找活动</p></div>
                        <div @click = "toJump(3)"><img src="../../assets/img/information.png" alt=""><p>看资讯</p></div>
                        <div @click = "toJump(4)"><img src="../../assets/img/coach.png" alt=""><p>搜辅导</p></div>
                    </div>
                </div>
            </div>

		    <!-- 选院校模块 -->
            <div class="indexBlockMessageBox">
                <div class="indexBlockMessage">
                    <!-- 选择院校----header -->
                    <div>
                        <div class="selectHeader">
                            <p><span></span><strong>COLLEGES</strong><span></span></p>
                            <strong>选院校</strong>
                        </div>
                    </div>
                    <!-- 选择院校----单个院校小块块 -->
                    <div class="singleCollegeBox">
                        <div class="singleCollege" v-for="(temp,index) in college" :key="index" @click = "toJumpCollege(temp.id)">
                            <img :src="temp.img" alt="">
                            
                            <div class="hover">
                                <div>
                                    <img :src="temp.backImg" alt="" class="indeximg">
                                </div>
                                <div class="singleCollegeHover">
                                    <div class="singleCollegeHeader">
                                        <img :src="temp.img" alt="">
                                        <div>
                                            <img src="../../assets/img/aacsb.jpg" alt="">
                                            <img src="../../assets/img/camea.png" alt="">
                                        </div>
                                    </div>
                                    
                                    <div class="collegeName">
                                        <p>{{temp.name}}</p>
                                        <p>点击进入院校主页<i class="fa fa-long-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singleCollege listMedo">
                            <div class="listTxt">
                                <p>为您网罗国内知名院校</p>
                                <p>商学院认证的最新MBA招生项目</p>
                                <p>信息确保真实</p>
                            </div>
                            <homeBtn class="homeBtn self" text="查看全部院校"></homeBtn>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 搜辅导模块 -->
            <div class="indexBlockMessageBox black">
                <div class="indexBlockMessage">
                    <!-- 搜辅导----header -->
                    <div>
                        <div class="selectHeader blackHeader">
                            <p><span></span><strong>INSTITUTUONS</strong><span></span></p>
                            <strong>搜辅导</strong>
                        </div>
                    </div>
                    <!-- 搜辅导----单个辅导机构小块块 -->
                    <div class="singleCollegeBox">
                        <div class="selectInformationHearder">
                            <div class="selectInformationLeft"> 
                                <img src="../../assets/img/sitanfu.jpg" alt="">
                                <div>
                                    <div class="selectInformationLeftimg">
                                        <img src="../../assets/img/sheke.png" alt="">
                                    </div>
                                    <div class="selectInformationLeftMessage">
                                        <div class="collegeName">
                                            <p>YaHei</p>
                                            <p>点击进入院校主页<i class="fa fa-long-arrow-right"></i></p>
                                        </div>
                                        <div class="selectInformationSign">
                                            <img src="../../assets/img/money.png" alt="">
                                            <img src="../../assets/img/return.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="selectInformationRight">
                                <div class="selectInformationLittle" v-for="(item, index) in 2" :key="index">
                                    <img src="../../assets/img/sitanfu.jpg" alt="">
                                    <div>
                                        <div class="selectInformationLeftimg">
                                            <img src="../../assets/img/dongfang.png" alt="">
                                        </div>
                                        <div class="selectInformationLeftMessage">
                                            <div class="collegeName">
                                                <p>YaHei</p>
                                                <p>点击进入院校主页<i class="fa fa-long-arrow-right"></i></p>
                                            </div>
                                            <div class="selectInformationSign">
                                                <img src="../../assets/img/money.png" alt="">
                                                <img src="../../assets/img/return.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="selectInformationFooter">
                            <div>
                                <p>全国N个省市，M个辅导机构</p>
                                <p>领优惠卷更实惠，退款保障更放心！</p>
                            </div>
                            <yellowBtn class="yellowBtn" text="查看全部辅导机构"></yellowBtn>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 找活动模块 -->
            <div class="indexBlockMessageBox">
                <div class="indexBlockMessage">
                    <!-- 找活动----header -->
                    <div>
                        <div class="selectHeader">
                            <p><span></span><strong>ACTIVITY</strong><span></span></p>
                            <strong>找活动</strong>
                        </div>
                    </div>
                    <!-- 找活动----三个活动小块块 -->
                    <div class="singleCollegeBox">
                        <div class="selectActivity">
                            <div class="homeContainer">
                                <div class="wrap" style="left: -955px;">
                                    <img src="../../assets/img/sitanfu.jpg" alt="">
                                    <img src="../../assets/img/banner1.jpg" alt="">
                                    <img src="../../assets/img/sitanfu.jpg" alt="">
                                    <img src="../../assets/img/sitanfu.jpg" alt="">
                                    <img src="../../assets/img/banner1.jpg" alt="">
                                </div>
                                <div class="buttons">
                                    <b class="on"></b>
                                    <b></b>
                                    <b></b>
                                </div>
                                <div class="wrapCover">
                                    <div class="wrapCover1">
                                        <span>招生宣讲</span>
                                        <h3>{{activity[index].name}}</h3>
                                    </div>
                                    <div class="wrapCover2">
                                        <p><i class="fa fa-map-marker"></i>{{activity[index].province}}</p>
                                        <p><i class="fa fa-calendar"></i>{{activity[index].time}}</p>
                                        <div>
                                            <img :src="activity[index].logo" alt="">
                                            <span>{{activity[index].school}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="singActivitybox">
                                <div class="singActivity selectMessage" v-for="(item,indd) in activity">
                                    <h3>{{item.name}}</h3>
                                    <div class="singActivityspan">
                                        <span><i class="fa fa-map-marker"></i>{{item.province}}</span>
                                        <span><i class="fa fa-calendar"></i>{{item.time}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="selectInformationFooter Footerblack">
                            <div>
                                <p>全国N个省市，M个辅导机构</p>
                                <p>领优惠卷更实惠，退款保障更放心！</p>
                            </div>
                            <homeBtn class="homeBtn" text="查看更多活动"></homeBtn>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 看资讯模块 -->
            <div class="indexBlockMessageBox black">
                <div class="indexBlockMessage">
                    <!-- 看资讯----header -->
                    <div>
                        <div class="selectHeader blackHeader">
                            <p><span></span><strong>INFORMATION</strong><span></span></p>
                            <strong>看资讯</strong>
                        </div>
                    </div>
                    <!-- 看资讯----单个辅导机构小块块 -->
                    <div class="singleCollegeBox">
                        <div class="selectInformationHearder informationDiv">
                            <div class="lookinformation" v-for="(item,index) in 2">
                                <img src="../../assets/img/infor.jpg" alt="">
                                <div class="lookinforMessage">
                                    <h3>浙江：这里产浙商，也教你经商︱浙江MBA项目分析</h3>
                                    <div>
                                        <p><i class="fa fa-calendar"></i>2018.8.31</p>
                                        <p><i class="fa fa-map-marker"></i>专硕联盟</p>
                                    </div>
                                </div>
                            </div>
                            <div class="lookinformation little" v-for="(item,index) in 2">
                                <img src="../../assets/img/infor.jpg" alt="">
                                <div class="lookinforMessage">
                                    <h3>浙江：这里产浙商，也教你经商︱浙江MBA项目分析</h3>
                                    <div>
                                        <p><i class="fa fa-calendar"></i>2018.8.31</p>
                                        <p><i class="fa fa-map-marker"></i>专硕联盟</p>
                                    </div>
                                </div>
                            </div>
                            <div class="lookinformationBig big" v-for="(item,index) in 2">
                                <div class="lookinforMessage">
                                    <h3>浙江：这里产浙商，也教你经商︱浙江MBA项目分析</h3>
                                    <p>在教育资源方面，2017年，全国共有普通搞笑2914所育资源方面，2017年，全国共有普育资源方面，2017年，全国共有普育资源方面，2017年，全国共有普育资源方面，2017年，全国共有普育资源方面，2017年，全国共有普</p>
                                    <div>
                                        <p><i class="fa fa-calendar"></i>2018.8.31</p>
                                        <p><i class="fa fa-map-marker"></i>专硕联盟</p>
                                    </div>
                                </div>
                                <img src="../../assets/img/infor.jpg" alt="">
                            </div>
                            <div class="lookinformation" v-for="(item,index) in 2">
                                <img src="../../assets/img/infor.jpg" alt="">
                                <div class="lookinforMessage">
                                    <h3>浙江：这里产浙商，也教你经商︱浙江MBA项目分析</h3>
                                    <div>
                                        <p><i class="fa fa-calendar"></i>2018.8.31</p>
                                        <p><i class="fa fa-map-marker"></i>专硕联盟</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="selectInformationFooter">
                            <div>
                                <p>重量级资讯</p>
                                <p>前沿信息尽在掌握</p>
                            </div>
                            <yellowBtn class="yellowBtn" text="查看更多资讯"></yellowBtn>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 会员模块 -->
            <div class="indexBlockMessageBox">
                <div class="indexBlockMessage">
                    <!-- 会员模块----header -->
                    <div>
                        <div class="selectHeader">
                            <p><span></span><strong>立即加入会员</strong><span></span></p>
                            <strong>享受更多便捷服务</strong>
                        </div>
                    </div>
                    <!-- 服务----单个服务小块块 -->
                    <div class="singleCollegeBox">
                        <div class="memberServe">
                            <div v-for="(item,index) in member">
                                <div>
                                    <img :src="item.logo" alt="">
                                </div>
                                <span>{{item.name}}</span>
                                <p>{{item.detail}}</p>
                            </div>
                        </div>
                        <div class="selectInformationFooter memberFooter">
                            <homeBtn class="homeBtn" text="免费注册，成为会员"></homeBtn>
                        </div>
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
        member:[
            {
                logo: require("../../assets/img/coach2.png"),
                name: "优惠卷",
                detail: "报名培训班享受会员专属优惠价！折扣多多！"
            },
            {
                logo: require("../../assets/img/return2.png"),
                name: "退款管理",
                detail: "会员享受辅导班10天内无条件退款保障！"
            },
            {
                logo: require("../../assets/img/remind.png"),
                name: "活动提醒",
                detail: "感兴趣的活动，小助手来提醒你不怕错过！"
            },
            {
                logo: require("../../assets/img/attention.png"),
                name: "关注院校",
                detail: "心仪的院校，任何风吹草动，第一时间全知道！"
            },
            {
                logo: require("../../assets/img/helper.png"),
                name: "个人助手",
                detail: "备考全程陪伴，重要事件时时提醒，不耽误事儿！"
            }
        ],
        activity: [
            {
                name:"商学院MBA2019年提前面试第四批",
                type:1,
                province:"武汉",
                time: "5月15日-8月23日",
                school: "广东外语外贸大学",
                logo: require("../../assets/img/college.png")
            },
            {
                name:"2019聚英计划第一批提前面试申请时间表（武汉）",
                type:1,
                province:"武汉",
                time: "6月15日-8月23日",
                school: "河南科技大学",
                logo: require("../../assets/img/college.png")
            },
            {
                name:"2018聚英计划第一批提前面试申请时间表（武汉）",
                type:1,
                province:"武汉",
                time: "7月15日-8月23日",
                school: "北京大学",
                logo: require("../../assets/img/college.png")
            },
        ],
        wrap: document.querySelector(".wrap"),
        timer: null,
        index: 0,
        dots: document.getElementsByTagName("b"),
        mes: document.getElementsByClassName("selectMessage"),
        college: [
            {
                id: 1,
                img: require("../../assets/img/college.png"),
                backImg: require("../../assets/img/college1.jpg"),
                name: "北京科技大学MBA"
            },
            {
                id: 2,
                img: require("../../assets/img/college.png"),
                backImg: require("../../assets/img/college1.jpg"),
                name: "北京科技大学MBA2"
            },
            {
                id: 3,
                img: require("../../assets/img/college.png"),
                backImg: require("../../assets/img/college1.jpg"),
                name: "北京科技大学MBA3"
            },
            {
                id: 4,
                img: require("../../assets/img/college.png"),
                backImg: require("../../assets/img/college1.jpg"),
                name: "北京科技大学MBA"
            },
            {
                id: 5,
                img: require("../../assets/img/college.png"),
                backImg: require("../../assets/img/college1.jpg"),
                name: "北京科技大学MBA"
            },
            {
                id: 6,
                img: require("../../assets/img/college.png"),
                backImg: require("../../assets/img/college1.jpg"),
                name: "北京科技大学MBA"
            },
            {
                id: 7,
                img: require("../../assets/img/college.png"),
                backImg: require("../../assets/img/college1.jpg"),
                name: "北京科技大学MBA7"
            },
        ],

      }
    },
    methods: {
        //跳到相应的模块，分别为（选校校，找活动，找资讯，搜辅导）
        toJump: function(index) {
            if(index==1) {
                this.$router.push('/front/selectCollege');
            }else if(index==2) {
                this.$router.push('/front/lookActivity');
            }else if(index==3) {
                this.$router.push('/front/viewInformation');
            }else {
                this.$router.push('/front/searchCoach');
            }
        },
        //跳到相应的单个院校
        toJumpCollege: function(id) {
            this.$router.push('/front/singleCollage/'+id);
        },

        next_pic: function() {
            this.index++;
            if(this.index > 2){
                this.index = 0;
            }
            this.showCurrentDot();
            var newLeft;
            if(this.wrap.style.left === "-3820px"){
                newLeft = -1910;
            }else{
                newLeft = parseInt(this.wrap.style.left)-955;
            }
            this.wrap.style.left = newLeft + "px";
        },
        prev_pic: function() {
            this.index--;
            if(this.index < 0){
                this.index = 2;
            }
            this.showCurrentDot();
            var newLeft;
            if(this.wrap.style.left === "0px"){
                newLeft = -3820;
            }else{
                newLeft = parseInt(this.wrap.style.left)+955;
            }
            this.wrap.style.left = newLeft + "px";
        },
        showCurrentDot: function () {
            for(var i = 0, len = this.dots.length; i < len; i++){
                this.dots[i].className = "";
                this.mes[i].style.backgroundColor = "#009fa0";
            }
            this.dots[this.index].className = "on";
            this.mes[this.index].style.backgroundColor = "#ffb957";
        },
    },
    computed: {

    },
    mounted(){
        var wrap = document.querySelector(".wrap");
        this.wrap = wrap;
        var dots = document.getElementsByTagName("b");
        this.dots = dots;
        var messsa= document.getElementsByClassName("selectMessage");
        this.mes = messsa;
        var self = this;

        

        clearInterval(self.timer);
        self.timer = setInterval(function () {
            self.next_pic();
        },1000);
        var container = document.querySelector(".homeContainer");
        container.onmouseenter = function () {
            clearInterval(self.timer);
        }
        container.onmouseleave = function () {
            clearInterval(self.timer);
            self.timer = setInterval(function () {
                self.next_pic();
            },1000);
        }
        // var self = this;
        for (var i = 0, len = self.dots.length; i < len; i++){
            (function(i){
                self.dots[i].onclick = function () {
                    console.log(i);
                    var dis = self.index - i;
                    if(self.index == 2 && parseInt(self.wrap.style.left)!==-2865){
                        dis = dis - 3;   
                    }
                    //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
                    if(self.index == 0 && parseInt(self.wrap.style.left)!== -955){
                        dis = 3 + dis;
                    }
                    self.wrap.style.left = (parseInt(self.wrap.style.left) + dis * 955)+"px";
                    self.index = i;
                    self.showCurrentDot();
                }
            })(i);
        }
        
    },
};
</script>
<style>
</style>
<style scoped>
    body {
        font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
    }
    p,h6 {
        margin: 0;
        padding: 0;
    }

    /*
    看资讯样式
    */
    .memberServe {
        display: flex;
        text-align: center;
        flex-wrap: wrap;
        justify-content: center;
    }
    .memberServe span {
        display: inline-block;
        color: #009fa0;
        font-size: 18px;
        font-weight: bold;
        margin: 26px 0 10px;
    }
    .memberServe p {
        color: rgb(56, 59, 61);
        font-size: 14px;
    }
    .memberServe>div {
        width: 206px;
        margin: 20px;
    }
    .memberServe>div>div {
        width: 100%;
        height: 128px;
        text-align: center;
    }
    .memberServe>div>div>img {
        width: 128px;
    }
    .memberFooter {
        justify-content: center !important;
    }


    .little {
        display: none;
    }
    .lookinformation {
        width: 305px;
        border-radius: 6px;
        overflow: hidden;
    }
    
    .lookinformation>img {
        width: 100%;
        height: 170px;
        display: block;
    }
    .lookinforMessage {
        background-color: #fff;
        padding: 20px;
        height: 127px;
        position: relative;
    }
    .lookinforMessage>h3 {
        margin: 0;
        padding: 0;
        font-size: 18px;
        line-height: 1.55em;
        font-weight: normal;
        color: #383b3d;
    }
    .lookinforMessage>div {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: #383b3d;
        font-size: 14px;
        opacity: 0.7;
        display: flex;
        justify-content: space-between;
    }
    .lookinforMessage>div>p {
        margin-right: 20px;
    }
    .lookinforMessage>div>p>i {
        margin-right: 5px;
    }
    .lookinformationBig {
        width: 610px;
        display: flex;
        flex-wrap: wrap;
        border-radius: 6px;
        overflow: hidden;
    }
    .lookinformationBig .lookinforMessage {
        width: 265px;
        height: 297px;
    }
    .lookinformationBig .lookinforMessage>p {
        font-size: 12px;
        color: rgb(56, 59, 61);
        line-height: 1.8em;
        margin-top: 23px;
    }
    .lookinformationBig img {
        width: 305px;
        height: 337px;
    }
    .informationDiv>div {
        margin: 10px;
    }



    /* header>nav */
    .indexHeaderbig {
        overflow: hidden;
        background-image: url("../../assets/img/indexHeader.jpg");
        background-size: auto 100%;
    }
    .indexHeaderbox {
        height: 100%;
        width: 100%;
        background-color: #383b3dd9;
    }
    .indexHeader {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 30px 0 30px 30px;
        margin-right: 10px;
        width: 1280px;
    }
    .indexHeader>div {
        margin: 0 10px;
        color: rgb(56, 56, 56);
        background-color: #fff;
        border-radius: 20px;
        padding: 3px;
        display: flex;
        align-items: center;
    }
    .indexHeader>div>i {
        margin-bottom: 1px;
        margin-right: 1px;
    }
    .indexHeader>i {
        margin: 0 10px;
        color: #fff;
        font-size: 22px;
    }
    .indexinput {
        width: 0;
        border: none;
        border-radius: 20px;
        outline: none;
    }
    .indexHeader>div:hover .indexinput {
        width: 100px;
        padding-left: 5px;
    }
    .indexNav {
        display: flex;
        justify-content: center;
    }
    .indexHeaderbox>img {
        display: block;
        margin: 20px auto;
        margin-top: 40px;
        max-width: 50%;
    }
    .indexHeaderbox>p {
        text-align: center;
        color: #fcfcfc;
        font-size: 14px;
    }
    .indexBigBlock {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 10% 0 3%;
    }
    .indexBigBlock>div {
        margin: 2%;
        padding: 4% 5%;
        background-color: rgba(255, 255, 255, 0.3);
        text-align: center;
        border-radius: 5px;
    }
    .indexBigBlock>div:hover {
        background-color: #ffb957;
    }
    .indexBigBlock img {
        width: 50%;
        margin: 0 auto;
    }
    .indexBigBlock p {
        font-size: 14px;
        margin: 10px 0 5px;
        color: #fff;
    }

    /* 搜辅导模块样式 */
    .black {
        background-image: url("../../assets/img/coach.jpg");
        background-size: auto 100%;
        background-color: #6e6e6e90;
    }
    

    /* 选院校模块样式 */
    .indexBlockMessageBox {
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .indexBlockMessage {
        width: 1280px;
        margin: 5% auto 5%;
    }
    .selectHeader {
        width: 350px;
        margin: 0 auto;
        text-align: center;
    }
    .selectHeader>p {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .selectHeader>p>span {
        color: #009fa0;
        width: 30px;
        border: 2px solid #009fa0;
    }
    .selectHeader>p>strong {
        color: #6e6e6e;
        font-size: 31px;
    }
    .selectHeader>strong {
        color: #009fa0;
        font-size: 30px;
    }
    .singleCollegeBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2% 0;
    }
    .singleCollege {
        margin: 1%;
        background-color: #e6e6e6;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 280px;
        height: 300px;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
    }
    .listMedo {
        background-color: #fff;
    }
    
    .singleCollege:hover .hover{
        display: block;
        -moz-box-shadow: 5px 10px 15px #cac9c9; /* 老的 Firefox */
        box-shadow: 5px 10px 15px #cac9c9;
    }
    .singleCollege>div {
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 5px;
    }
    .indeximg {
        width: 100%;
    }
    .singleCollege>img {
        display: block;
        margin: 20px;
        max-width: 50%;
    }
    .listTxt {
        position: absolute;
        top: 0;
        right: 0;
        color: rgb(110, 110, 110);
        font-size: 16px;
        line-height: 1.75em;
        font-weight: lighter;
        display: block !important;
        text-align: right;
        cursor:default;
    }
    .self {
        display: block !important;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .singleCollegeHover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000099;
    }
    .singleCollegeHeader {
        height: 65%;
        text-align: center;
    }
    .singleCollegeHeader>img {
        margin: 35px 0 20px;
    }
    .singleCollegeHeader>div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .singleCollegeHeader>div>img {
        height: 14px;
        border-radius: 2px;
        margin: 0 5px;
    }
    .collegeName {
        background-color: #ffb957;
        height: 35%;
        padding: 20px 25px;
    }
    .collegeName>p {
        font-size: 12px;
        color: #fff;
    }
    .collegeName>p>i {
        margin-left: 10px;
    }
    .collegeName>p:first-child {
        margin-bottom: 15px;
        font-size: 18px;
    }
    .singActivity {
        height: 97px;
        color: rgba(255, 255, 255, 0.8);
        padding: 10px 15px;
        position: relative;
        font-weight: lighter;
    }
    .singActivity>h3 {
        margin: 0;
        text-align: left;
        line-height: 1.75em;
        padding: 0;
        font-size: 16px;
        font-weight: lighter;
    }
    .singActivityspan {
        position: absolute;
        width: 285px;
        bottom: 15px;
        left: 15px;
        display: flex;
        justify-content: space-between;
    }
    .singActivityspan i {
        margin-right: 7px;
    }
    .singActivitybox {
        margin-top: 20px;
        width: 305px;
        background-color: #009fa0;
        border-radius: 5px;
        overflow: hidden;
        margin-left: 15px;
    }
    .selectActivity {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .selectMessage {
        background-color: #ffb957;
    }


    /*搜辅导页面*/
    .blackHeader>p>span {
        color: #ffb957;
        border: 2px solid #ffb957;
    }
    .blackHeader>p>strong {
        color: #fff;
    }
    .blackHeader>strong {
        color: #fff;
    }
    .selectInformationHearder {
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        justify-content: center;
    }
    .selectInformationLeft {
        width: 955px;
        height: 460px;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .selectInformationLeft>img {
        min-width: 100%;
        height: 100%;
    }
    .selectInformationLeft>div {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(56, 60, 61, 0.5);
        width: 100%;
        height: 100%;
    }
    .selectInformationLeftimg {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .selectInformationLeft:hover .selectInformationLeftimg{
        height: 75%;
        background: rgba(56, 60, 61, 0.8);
    }
    
    .selectInformationLeftimg>img {
        width: 37%;
    }
    .selectInformationLeftMessage {
        background-color: #ffb957;
        display: flex;
        justify-content: space-between;
        height: 25%;
        margin: 0;
        padding: 0;
    }
    .selectInformationSign {
        padding: 20px 30px;
    }
    .selectInformationSign>img {
        margin-left: 5px;
    }
    .selectInformationRight {
        width: 305px;
        margin-left: 20px;
        
    }
    .selectInformationLittle {
        width: 100%;
        height: 220px;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 20px;
    }
    
    .selectInformationLittle>img {
        min-width: 100%;
        max-height: 100%;
    }
    .selectInformationLittle>div {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(56, 60, 61, 0.5);
        width: 100%;
        height: 100%;
    }
    .selectInformationLittle:hover .selectInformationLeftimg{
        height: 55%;
        background: rgba(56, 60, 61, 0.8);
    }
    .selectInformationLittle .selectInformationLeftMessage {
        height: 55%;
    }
    .selectInformationLittle .selectInformationLeftimg>img {
        width: 45%;
    }
    .selectInformationFooter {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .selectInformationFooter>div {
        margin-top: 3%;
        width: 305px;
    }
    .selectInformationFooter .yellowBtn {
        margin-top: 3%;
    }
    .selectInformationFooter .homeBtn {
        margin-top: 3%;
    }
    .selectInformationFooter p {
        color: #fff;
        font-size: 14px;
        font-weight: lighter;
        line-height: 1.75em;
    }
    .Footerblack p {
        color: #000;
    }

    

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        /* 选院校模块 */
        .selectHeader {
            width: 200px;
            margin: 0 auto;
            text-align: center;
        }
        .selectHeader>p>span {
            width: 30px;
            border: 1px solid #009fa0;
        }
        .selectHeader>p>strong {
            font-size: 20px;
        }
        .selectHeader>strong {
            font-size: 20px;
        }
        .selectInformationLeft {
            width: 305px;
            height: 220px;
        }
        .selectInformationRight {
            margin-left: 0;
        }
        .selectInformationFooter {
            justify-content: center;
        }
        .selectInformationFooter .yellowBtn {
            margin-top: 5%;
            width: 241px;
        }
        .selectInformationFooter .homeBtn {
            margin-top: 5%;
            width: 241px;
        }
        .selectActivity {
            width: 300px;
            overflow: hidden;
        }
        .singActivitybox {
            margin-left: 0;
        }
        .big {
            display: none;
        }
        .little {
            display: block;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 1200px) and (min-width: 600px) {
        .selectInformationLeft {
            width: 305px;
            height: 220px;
        }
        .selectInformationFooter {
            justify-content: center;
        }
        .selectInformationFooter .yellowBtn {
            margin-top: 5%;
            width: 241px;
        }
        .selectInformationFooter .homeBtn {
            margin-top: 5%;
            width: 241px;
        }
        .big {
            display: none;
        }
        .little {
            display: block;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        
    } 

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        /* header顶部模块图片样式 */
        .indexHeaderbox>p {
            font-size: 18px;
        }
        .indexBigBlock img {
            width: 80%;
        }
    } 

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        /* header顶部模块图片样式 */
        .indexHeaderbox>p {
            font-size: 18px;
        }
        .indexBigBlock img {
            width: 80%;
        }
    }


    /*
    轮播图样式
    */
    .homeContainer {
        position: relative;
        width: 955px;
        height: 350px;
        margin-top: 20px;
        overflow: hidden;
    }
    .homeContainer .wrap {
        position: absolute;
        width: 5730px;
        height: 350px;
        z-index: 1;
    }
    .homeContainer .wrap img {
        float: left;
        width: 955px;
    }
    .homeContainer .buttons {
        position: absolute;
        right: 0;
        bottom:20px;
        width: 100%;
        height: 10px;
        z-index: 3;
        text-align: center;
    }
    .wrapCover {
        position: absolute;
        top: 0;
        left: 0;
        width: 265px;
        height: 310px;
        padding: 20px;
        color: #fff;
        background-color: rgba(56, 59, 61, 0.9);
        z-index: 2;
    }
    .wrapCover1{
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .wrapCover2 {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
    .wrapCover1>span {
        font-size: 12px;
        background-color: #009fa0;
        border-radius: 60px;
        font-weight: lighter;
        padding: 1px 8px;
        line-height: 1.1;
    }
    .wrapCover1>h3 {
        font-size: 24px;
        font-weight: lighter;
        /* margin-bottom: 70px; */
    }
    .wrapCover2>p {
        font-size: 14px;
        font-weight: lighter;
        line-height: 1.9;
        margin: 15px 0;
    }
    .wrapCover2>p>i {
        margin-right: 7px;
    }
    .wrapCover2>div {
        width: 265px;
        padding: 15px 0 10px;
        border-top: 1px solid #fff;
        display: flex;
        align-items: center;
    }
    .wrapCover2>div>img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .wrapCover2>div>span {
        font-size: 14px;
        font-weight: lighter;
    }
    .homeContainer .buttons b {
        margin-left: 5px;
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        border: 1px solid #fff;
        text-align: center;
        color:white;
        cursor: pointer;
    }
    .homeContainer .buttons b.on{
        background-color: #ffb957;
        border: 1px solid #ffb957;
    }
</style>


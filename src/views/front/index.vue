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
                            <homeBtn class="self" text="查看全部院校"></homeBtn>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 搜辅导模块 -->
            <div class="indexBlockMessageBox black">
                <div class="indexBlockMessage">
                    <!-- 搜辅导----header -->
                    <div>
                        <div class="selectHeader">
                            <p><span></span><strong>INSTITUTUONS</strong><span></span></p>
                            <strong>搜辅导</strong>
                        </div>
                    </div>
                    <!-- 搜辅导----单个辅导机构小块块 -->
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
                            <homeBtn class="self" text="查看全部院校"></homeBtn>
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
    },
    mounted(){

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
        width: 260px;
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


    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        
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
</style>


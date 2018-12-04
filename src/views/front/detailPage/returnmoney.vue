<template>
    <div>
        <div class="bigBox">
            <!-- 面包屑 -->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <img src="../../../assets/img/homeIcon.png">
                    <el-breadcrumb separator-class="el-icon-arrow-right" class="collagebreadcrumb">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item class="activelist">正文</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>

            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="collagemessage">
                        <!-- banner -->
                        <img src="../../../assets/img/banner1.jpg" alt="">
                        <!-- 列表 -->
                        <div class="acticalbox">
                            <div class="acticallittle">
                                <span>1</span>
                                <div class="messagetopic">
                                    <h6>退款保障服务是什么？</h6>
                                    <p>为保障考生得权益，MBAhelper作为第三方平台，携手辅导机构一同为考生提供报辅导退费保障服务。“退费保障服务”指MBAhelper
                                        向其注册用户提供的特别售后服务，保障买家可按本规则在15天内对其已购买的特定辅导机构课程进行退款。保障期限：已购买课程
                                        当日所开发票或收据等凭证时间开始计算，截止到在MBAhelper提交退款申请单的15天内。
                                    </p>
                                </div>
                            </div>
                            <div class="acticallittle">
                                <span>2</span>
                                <div class="messagetopic">
                                    <h6>退款保障服务会给用户带来什么好处？</h6>
                                    <p>MBAhelper作为中保，为您解除想报辅导机构又担心辅导机构质量及服务不佳的烦恼，解决您与所报辅导机构间交涉退费的后顾之忧。
                                    </p>
                                </div>
                            </div>
                            <div class="acticallittle">
                                <span>3</span>
                                <div class="messagetopic">
                                    <h6>MBAhelper为用户提供的优势？</h6>
                                    <p>MBAhelper为用户整合辅导机构信息，方便用户筛选和比较。<br/>
                                        在平台上用户可以轻松选择自己中意的辅导机构进行报名，享受15天无条件退款。
                                    </p>
                                </div>
                            </div>

                            <!-- button -->
                            <div class="button">
                                <homeBtn text="退款申请入口" @click.native="toJump"></homeBtn>
                            </div>
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

        }
    },
    methods: {
        //跳转到退款申请页面
        toJump:function() {
            this.$router.push('/front/firstMenuRouter/returnform');
        }
    },
    mounted(){

    },
};
</script>
<style>
    .activelist span{
        color: #009FA1 !important;
        font-weight: bold !important;
    }
</style>
<style scoped>
.bigBox {
    background-color: rgb(245, 245, 245);
    padding-bottom: 10px;
}
.button {
    text-align: center;
    height: 50px;
}
.acticallittle {
    padding: 35px 0 70px;
    display: flex;
    justify-content: flex-start;
    border-top: 1px solid rgb(223, 223, 223);
}
.acticallittle:first-child {
    border-top: none;
}
.acticallittle>span {
    height: 110px;
    width: 110px;
    font-size: 30px;
    flex-shrink: 0;
    color:#009FA1;
    line-height: 110px;
    text-align: center;
    margin-right: 55px;
    margin-top: 35px;
    border: 2px solid #009FA1;
    border-radius: 50%;
}
.messagetopic {
    margin-top: 35px;
}
.messagetopic>h6 {
    font-size: 20px;
    color: #009FA1;
    font-weight: bold;
    margin-bottom: 23px;
}
.messagetopic>p {
    line-height: 30px;
    color: rgb(110, 110, 110);
}
.singlecoachBig {
    display: flex;
    justify-content: center;
}
.acticalbox {
    background: #fff;
    padding: 15px 100px;
    margin-bottom: 80px;
}

.singlecoachbox {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: center;
}
.collagebreadcrumb {
    margin:35px 8px 30px;
}
.collagemessage>img {
    width: 100%;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
    .acticalbox {
        padding: 15px 20px;
    }
    .acticallittle {
        flex-wrap: wrap;
    }
    .acticallittle>span {
        width: 100px;
        height: 100px;
        line-height: 100px;
        margin: 0 auto;
    }
}
</style>
    
    
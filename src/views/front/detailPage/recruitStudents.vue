<template>
    <div class="content">
        <div class="single-div-con">
            <div class="content-article-single">
                <div class="single-div-head">
                    <i id="home"></i>&nbsp;
                    <i>首页</i>
                    <label>></label>
                    <i>看资讯</i>
                    <label>></label>
                    <i class="text-article">招生简章</i>
                </div>
                <div class="title-head clearfloat">
                    <div class="float-left">
                        <a href="javaScript:void(0)" v-for="(item,index) in time">
                            {{ item }}
                        </a>
                    </div>
                    <div class="float-right">
                        <el-input
                                placeholder="请输入内容"
                                suffix-icon="el-icon-search"
                                v-model="search">
                        </el-input>
                    </div>
                </div>

                <div class="recruitContent clearfloat">
                    <div class="university" @click="centerDialogVisible = true">
                        <div class="university-icon">
                            <img src="../../../assets/img/picture-university.png" alt="">
                        </div>
                        <div class="university-footer">
                            <div class="footer-font">
                                dsggdgsdf
                            </div>
                            <div class="tips">
                                kkkk
                            </div>
                        </div>
                    </div>
                    <div class="university">
                        <div class="university-icon">
                            <img src="../../../assets/img/picture-university.png" alt="">
                        </div>
                        <div class="university-footer">
                            <div class="footer-font">
                                dsggdgsdf
                            </div>
                            <div class="tips">
                                kkkk
                            </div>
                        </div>
                    </div>
                    <div class="university">
                        <div class="university-icon">
                            <img src="../../../assets/img/picture-university.png" alt="">
                        </div>
                        <div class="university-footer">
                            <div class="footer-font">
                                dsggdgsdf
                            </div>
                            <div class="tips">
                                kkkk
                            </div>
                        </div>
                    </div>
                    <div class="university">
                        <div class="university-icon">
                            <img src="../../../assets/img/picture-university.png" alt="">
                        </div>
                        <div class="university-footer">
                            <div class="footer-font">
                                dsggdgsdf
                            </div>
                            <div class="tips">
                                kkkk
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
                title="共6则招生简章"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <div class="title-span">
                <span>1</span>&nbsp;&nbsp;&nbsp;
                <span>需要注意的是内容是默认不居中的</span>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                time:['全部年分','2018','2017'],
                search:'',
                centerDialogVisible: false,
            }
        }
    }
</script>
<style scoped>
    .clearfloat::after{
        display:block;
        clear:both;content:"";
        visibility:hidden;
        height:0;
    }
    .content{
        width: 100%;
        background-color: #f5f5f5;
    }
    .content-article-single{
        width: 1280px;
        margin: auto;
        padding-top: 23px;
        padding-bottom: 60px;
    }
    .single-div-head {
        line-height: 65px;
    }
    #home{
        background-image: url("../../../assets/img/home.png");
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        width: 15px;
        height: 15px;
    }
    .content-article-single > div >i,.content-article-single > div > label{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #6e6e6e;
    }
    .content-article-single > div >i:last-child{
        color: rgb(0, 159, 160);
        font-weight: bolder;
    }
    .title-head{
        margin-top: 59px;
        height: 40px;
        border-bottom: 1px solid #e7e7e7;
    }
    .float-left{
        float: left;
    }
    .float-right{
        float: right;
    }
    .float-left > a{
        font-family: MicrosoftYaHei-Bold;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #6e6e6e;
        text-decoration: none;
        display: inline-block;
        margin-right: 18px;
    }
    .float-left > a:first-child{
        color: #009fa0;
        font-weight: bolder;
        margin-right: 27px;
    }
    .recruitContent{
        width: 100%;
        margin-top: 33px;
    }
    .university{
        width: 305px;
        height: 305px;
        margin-right: 19px;
        border-radius: 10px;
        cursor: pointer;
        float: left;
    }
    .university:nth-child(4n){
        margin-right: 0px;
    }
    .university-icon{
        width: 100%;
        height: 255px;
        background-color: #FFFFFF;
        text-align:center
    }
    .university-icon > img{
        width: 120px;
        height: 120px;
        margin-top: 93px;
    }
    .university-footer{
        width: 100%;
        height: 50px;
        background-color: #383b3d;
        border-radius: 0px 0px 5px 5px;
        opacity: 0.8;
    }
    .footer-font{
        width: 82%;
        font-family: MicrosoftYaHei-Bold;
        font-size: 19px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
        line-height: 50px;
        margin: auto;
    }
    .tips{
        width: 82%;
        font-family: MicrosoftYaHei-Bold;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 12px;
        letter-spacing: 0px;
        color: #fffffe;
        margin: auto;
        display: none;
    }
    .university:hover .university-icon{
        background-image: url("../../../assets/img/back-picture.jpg");
        background-size: cover;
        height: 204px;
        transition: all 1s;
    }
    .university:hover img{
        margin-top: 45px;
        transition: all 1s;
    }
    .university:hover .tips{
        display: block;
        transition: all 1s;
    }
    .university:hover .university-footer{
        height: 97px;
        background-color: #ffb957;
        transition: all 1s;
    }
    .title-span span:first-child{
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: #ffb957;
        border-radius: 8px;
        text-align: center;
        line-height: 16px;
        color: #FFFFFF;
    }
    .title-span span:last-child{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: 0px;
        cursor: pointer;
    }
    @media (max-width: 991px){
        .single-div-con{
            width: 95%;
            margin: auto;
        }
        .content-article-single{
            width: 96%;
        }
        .float-left{
            width: 100%;
        }
        .float-right{
            float: left;
        }
        .university{
            width: 100%;
            float: none;
            margin: auto;
            margin-top: 31px;
        }
        .title-head{
            height: 79px;
        }


    }
</style>
<style>
    .float-right .el-input__inner{
        border-radius: 23px;
        width: 307px;
        height: 30px;
    }
    .float-right .el-input__icon{
        line-height: 29px;
    }
    @media (max-width: 991px){
        .content .el-dialog{
            width: 89% !important;
        }
    }
</style>
<!-- 院校对比 -->
<template>
    <div class="content">
        <div class="single-div-con">
            <div class="content-article-single">
                <div class="single-div-head">
                    <i id="home"></i>&nbsp;
                    <i>首页</i>
                    <label>></label>
                    <i class="text-article">专业对比</i>
                </div>
                <div class="collage-major clearfloat">
                    <div class="collage-con">
                        <div class="clearfloat">
                            <div class="collage-conten-article" v-for="(item,index) in information" :key="index">
                                <div class="collage-title">
                                    {{item.project_name}}<span class="collage-cancel"><i @click="delProcon(index)" class="el-icon-close cancel"></i></span>
                                    <div class="collage-mba">
                                        {{item.recruitment_pattern[0].name}}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pageJudge">
                            <el-button type="warning" round @click="choicePage(-1)" :disabled="left">上一页</el-button>
                            <el-button type="warning" round @click="choicePage(1)" :disabled="right">下一页</el-button>
                        </div>

                        <!-- 项目经费 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                项目经费
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position" :key="index">
                                <span class="span-big-font">
                                    {{item.cost }}
                                </span>
                                <span class="span-short-font">
                                    万元
                                </span>
                            </div>
                        </div>

                        <!-- 招生名额 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                招生名额
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-font collage-position" :key="index">
                                <span class="span-big-font" v-html="item.student_count">
                                    <!-- {{item.student_count}} -->
                                </span>
                                <span class="span-short-font">
                                    名
                                </span>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                学制
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position" :key="index">
                                <span class="span-big-font" v-html="item.eductional_systme">
                                    <!-- 2 -->
                                </span>
                                <span class="span-short-font">
                                    年
                                </span>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                授课语言
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-font collage-position" :key="index">
                                <div class="languageMajor" v-if="item.language == Chinese"><img src="../../../assets/img/chinese4.jpg" alt=""></div>
                                <div class="languageMajor" v-else><img src="../../../assets/img/english.jpg" alt=""></div>
                                <p style="color: #aaaaaa;">(课程均为{{ item.language }})</p>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                班级情况
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position" :key="index">
                                <p style="color: #aaaaaa;" v-html="item.class_situation"></p>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                报考条件
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position" :key="index">
                                <p style="color: #aaaaaa;" v-html="item.can_conditions"></p>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                分数线描述
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position" :key="index">
                                <p style="color: #aaaaaa;" v-html="item.score_describe"></p>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                统招模式
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position" :key="index">
                                <p style="color: #aaaaaa;" v-html="item.recruitment_pattern[0].name"></p>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                招生模式
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position" :key="index">
                                <p style="color: #aaaaaa;" v-html="item.enrollment_mode"></p>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                分数线类型
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position" :key="index">
                                <p style="color: #aaaaaa;" v-html="item.score_type[0].name"></p>
                                <!-- {{ item.score_type[0].name }} -->
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                毕业证书
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position" :key="index">
                                <p style="color: #aaaaaa;" v-html="item.graduation_certificate"></p>
                                <!-- {{ item.graduation_certificate }} -->
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                其他说明
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="footer-con-collage collage-age collage-position informationPhone">
                                <span v-if="item.other_explain == null">
                                    无
                                </span>
                                <span v-else>
                                    <p style="color: #aaaaaa;" v-html="item.other_explain"></p>
                                    <!-- {{ item.other_explain }} -->
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                Chinese:'中文',
                information:[],
                schoolCollage:[],
                sendCollage:[],
                pagelength:4,
                //专业数
                pageTatol:0,
                startPage:0,
                stringpage:'',
                //页数
                pageCount:0,
                left:false,
                right:false
            }
        },
        methods:{
            delProcon(index) {
                if(index < 0 || index > this.information.length -1 || this.information.length == 0) {
                    return false;
                }
                else {
                    this.information.splice(index, 1);
                }
            },
            getInformation: function () {
                let _this = this;
                _this.fetch('/front/colleges/vsproject',{
                    p_id:_this.stringpage
                }).then(function (res) {
                    if (res.code == 0){
                        _this.information = res.result;
                    }

                }).catch(function (error) {

                })
            },
            getSchool:function () {
                let _this = this;
                _this.fetch('/front/colleges/getmajorporject',{
                    m_id:_this.$route.params.id
                }).then(function (res) {
                    if (res.code == 0){
                        _this.schoolCollage = res.result;
                        _this.pageTatol = res.result.length;
                        _this.pageCount = Math.ceil(res.result.length/_this.pagelength);
                        _this.choicePage(1);
                    }
                    else {
                        _this.message(true, res.msg, 'info');
                    }

                })
            },
            choicePage:function (page) {
                this.startPage = this.startPage+page;

                if (this.startPage>this.pageCount){
                    this.startPage = this.pageCount;
                    this.right = true;
                    return ;
                }else if(this.startPage <= 0) {
                    this.left = true;
                    this.startPage = 1;
                    return ;
                }else {
                    this.right = false;
                    this.left = false;
                }

                let end;
                if (this.startPage == this.pageCount){
                    end = this.pageTatol;
                }else {
                    end = this.startPage*this.pagelength
                }
                for (let i = (this.startPage-1)*this.pagelength; i < end-1 ; i++){
                    this.stringpage = this.stringpage+this.schoolCollage[i].id+",";
                }
                this.stringpage = this.stringpage+this.schoolCollage[end-1].id;
                this.getInformation();
            },
        },

        mounted(){
            if ($(window).width()<991){
                this.pagelength = 2;
            }
            this.getSchool();
        }
    }
</script>
<style scoped>
    .footer-con-collage{
        padding-bottom: 20px;
    }
    .languageMajor{
        width: 34px;
        height: 34px;
        margin-bottom: 10px;
    }
    .languageMajor > img{
        width: 100%;
        height: 100%;
    }
    .informationPhone{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 0px;
        color: #aaaaaa;
    }
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
    .pageJudge{
        margin: auto;
        text-align: center;
        margin-top: 3%;
    ;
    }
    .collage-major{
        width: 96%;
        padding: 30px;
        padding-top: 46px;
        background-color: #FFFFFF;
    }
    .collage-conten-article{
        width: 306px;
        float: left;
    }
    .collage-title{
        width: 95%;
        height: 86px;
        border-bottom: 2px solid #009fa0;
        font-family: MicrosoftYaHei-Bold;
        font-size: 21px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 50px;
        letter-spacing: 0px;
        color: #009fa0;
        font-weight: bolder;
        margin: auto;
    }
    .collage-cancel{
        float: right;
    }
    .cancel{
        display: inline-block;
        cursor: pointer;
        border-radius: 12px;
    }
    .cancel:hover{
        background-color: #ffb957;
        transition: all .5s;
    }
    .authentication{
        margin-top: 60px;
        width: 100%;
        height: 66px;
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 66px;
        letter-spacing: 0px;
        color: #323232;
        border-bottom: 1px solid #efefef;
    }
    .collage-position{
        width: 295px;
        margin: auto;
        margin-top: 34px;
        margin-right: 6px;
        margin-left: 6px;
        float: left;
        line-height: 30px;
    }
    .collage-font{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 0px;
        color: #484848;
    }
    .span-big-font{
        font-family: Ubuntu;
        font-size: 45px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 66px;
        letter-spacing: 0px;
        color: #aaaaaa;
    }
    .span-short-font{
        font-family: MicrosoftYaHei-Bold;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 66px;
        letter-spacing: 0px;
        color: #aaaaaa;
    }
    .link-p{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 0px;
        color: #009fa0;
        cursor: pointer;
    }
    .collage-mba{
        font-family: MicrosoftYaHei-Bold;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 17px;
        width: 61px;
        letter-spacing: 0px;
        color: #ffffff;
        text-align: center;
        background-color: #009fa0;
        border-radius: 20px;
    }
    @media (max-width: 991px){
        .content-article-single{
            width: 100%;
        }
        .collage-conten-article{
            width: 50%;
        }
        .collage-position{
            width: 50%;
            margin-left: 0px;
            margin-right: 0px;
        }
        .collage-major{
            padding: 0px;
            margin: auto;
            width: 100%;
        }
        .collage-con{
            width: 96%;
            margin: auto;
            padding-top: 25px;
        }

        .collage-title{
          height: auto;
          padding-bottom: 10px;
          padding-right: 20px;
          box-sizing: border-box;
          position: relative;
          line-height: 40px;
        }

        .collage-cancel{
          position: absolute;
          top: 0px;
          right: 0px;
        }
    }

    @media only screen and (max-width: 767px) and (min-width: 320px){
      .content[data-v-6dc19430] {
        width: 100%;
         margin-bottom: 0px;
      }
    }
</style>

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
                            <div class="collage-conten-article" v-for="(item,index) in information">
                                <div class="collage-title">
                                    {{item.project_name}}<span class="collage-cancel"><i class="el-icon-close cancel"></i></span>
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

                        <div class="authentication">
                            <p class="authentication-p">
                                项目经费
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">
                                <span class="span-big-font">
                                    {{item.cost }}
                                </span>
                                <span class="span-short-font">
                                    万元
                                </span>
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                招生名额
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-font collage-position">
                                <span class="span-big-font">
                                    {{item.student_count}}
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
                            <div v-for="(item,index) in information" class="collage-age collage-position">
                                <span class="span-big-font">
                                    2
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
                            <div v-for="(item,index) in information" class="collage-font collage-position">
                                <div class="languageMajor"><img src="" alt=""></div>
                                (课程均为{{ item.language }})
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                班级情况
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position">
                                {{ item.class_situation }}班
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                报考条件
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position">
                                {{ item.can_conditions }}
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                分数线描述
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position">
                                {{ item.score_describe }}
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                统招模式
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position">
                                {{ item.recruitment_pattern[0].name }}
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                招生模式
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position">
                                {{ item.enrollment_mode }}
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                分数线类型
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position">
                                {{ item.score_type[0].name }}
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                毕业证书
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-age collage-position">
                                {{ item.graduation_certificate }}
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                其他说明
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="footer-con-collage collage-age collage-position informationPhone">
                                <span v-if="item.other_explain == null">
                                    无
                                </span>
                                <span v-else>
                                    {{ item.other_explain }}
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
            getInformation: function () {
                let _this = this;
                _this.fetch('/front/colleges/vsproject',{
                    p_id:_this.stringpage
                }).then(function (res) {
                    console.log(res)
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
                    console.log(res)
                    if (res.code == 0){
                        _this.schoolCollage = res.result;
                        _this.pageTatol = res.result.length;
                        _this.pageCount = Math.ceil(res.result.length/_this.pagelength);
                        _this.choicePage(1);
                    }

                }).catch(function (error) {

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
        margin-top: 15px
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
        font-size: 60px;
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
            width: 45%;
        }
        .collage-major{
            padding: 0px;
            margin: auto;
            width: 100%;
        }
        .collage-con{
            width: 96%;
            margin: auto;
        }
    }
</style>
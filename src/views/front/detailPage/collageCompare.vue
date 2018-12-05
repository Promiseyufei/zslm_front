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
                    <div>
                        <div class="clearfloat">
                            <div class="collage-conten-article" v-for="(item,index) in information">
                                <div class="collage-title">
                                    华东理工大学MBA<span class="collage-cancel"><i class="el-icon-close cancel"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                认证性质
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">

                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                项目列表
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-font collage-position">
                                GV看关于与谷歌应用于忽忽悠悠呼吁呼吁呼吁好言好语呼吁呼吁呼应用户会愈合喻户狐海域与语言
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
                                毕业证
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-font collage-position">
                                GV看关于与谷歌应用于忽忽悠悠呼吁呼吁呼吁好言好语呼吁呼吁呼应用户会愈合喻户狐海域与语言
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                院校官网
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-font collage-position">
                                <p class="link-p">GV看关</p>
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
                information:[1,2,3,4]
            }
        },
        methods:{
            getInformation: function () {
                let _this = this;
                _this.fetch('/front/colleges/vsmajors',{
                    m_ids:'1,2,17,18'
                }).then(function (res) {
                    console.log(res)
                    if (res.code == 0){

                    }
                    
                }).catch(function (error) {
                    
                })
            }
        },
        mounted(){
            this.getInformation();
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
        line-height: 66px;
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
</style>
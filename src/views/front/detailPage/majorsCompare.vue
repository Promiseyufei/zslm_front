<!-- 院校对比 -->
<template>
    <div class="content">
        <div class="single-div-con">
            <div class="content-article-single">
                <div class="single-div-head">
                    <i id="home"></i>&nbsp;
                    <i>首页</i>
                    <label>></label>
                    <i class="text-article">院校对比</i>
                </div>
                <div class="collage-major clearfloat">
                    <div class="collage-con">
                        <div class="clearfloat">
                            <div class="collage-conten-article" v-for="(item,index) in information" :key="index">
                                <div class="collage-title">
                                    <span>{{item.z_name}}</span>
                                    <span class="collage-cancel"><i class="el-icon-close cancel" @click="removeAsMajor(item.id)"></i></span>
                                    <div class="collage-mba"></div>
                                </div>
                            </div>
                        </div>


                        <!-- 认证性质 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                认证性质
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="collage-position">
                                    <div style="">
                                        <div v-for="(item_,index_) in item.major_confirm_id" :key="index_" style="display: inline-block;margin: 5px 5px">
                                            <img class="c-image image_2pnGPP" v-if="item_==equis" src="../../../assets/img/equs.png">
                                            <img class="c-image image_2pnGPP" v-if="item_==aascb" src="../../../assets/img/aacsb.jpg">
                                            <img class="c-image image_2pnGPP" v-if="item_ == amba" src="../../../assets/img/amba.png">
                                            <img class="c-image image_2pnGPP" v-if="item_ == camea" src="../../../assets/img/camea.png">
                                        </div>
                                    </div>
                                    <div style="">
                                         <div v-for="(item_,j) in item.major_follow_id" :key="j" style="display: inline-block;margin: 5px 5px">
                                             <img class="c-image image_2pnGPP" v-if="item_==two" src="../../../assets/img/211.png">
                                             <img class="c-image image_2pnGPP" v-if="item_==nine" src="../../../assets/img/985.png">
                                             <img class="c-image image_2pnGPP" v-if="item_==both29" src="../../../assets/img/all985211.png">
                                         </div>
                                    </div>
                            </div>
                        </div>

                        <!-- 项目列表 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                项目列表
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,i) in information" :key="i"  class="collage-position" >
                                <div v-for="(item_,index_) in item.project" :key="index_" style="color: rgb(168, 168, 168);margin-bottom: 20px;letter-spacing: 0.8px;line-height: 20px">
                                    {{item_.project_name}}费用{{item_.cost}}&nbsp;&nbsp;
                                    招生名额：{{item_.student_count}}名&nbsp;&nbsp;
                                    授课语言：{{item_.language}}&nbsp;&nbsp;
                                    班级情况：{{item_.class_situation}}

                                    <!-- <p style="margin-top: 10px"><b>学制：</b>{{item_.eductional_systme}}</p>
                                    <p style="margin-top: 10px"><b>毕业证：</b>{{item_.graduation_certificate}}</p>
                                    <p style="margin-top: 10px"><b>报考条件：</b>{{item_.can_conditions}}</p>
                                    <p style="margin-top: 10px"><b>分数线描述：</b>{{item_.score_describe}}</p>
                                    <p style="margin-top: 10px"><b>招生模式：</b>{{item_.recruitment_pattern}}</p> -->
                                </div>
                            </div>
                        </div>

                        <!-- 毕业证书 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                毕业证
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,i) in information" :key="i"  class="collage-position" >
                                <div v-for="(item_,index_) in item.project" :key="index_" style="color: rgb(168, 168, 168);margin-bottom: 20px;letter-spacing: 0.8px;line-height: 20px">
                                    <p v-html="item_.graduation_certificate"></p>
                                </div>
                            </div>
                        </div>

                        <!-- 审批年限 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                审批年限
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="collage-position">

                                <span class="span-short-font">
                                   {{item.access_year }}
                                </span>
                            </div>
                        </div>

                        <!-- 报考条件 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                报考条件
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,i) in information" :key="i"  class="collage-position" >
                                <div v-for="(item_,index_) in item.project" :key="index_" style="color: rgb(168, 168, 168);margin-bottom: 20px;letter-spacing: 0.8px;line-height: 20px">
                                    <p v-html="item_.can_conditions"></p>
                                </div>
                            </div>
                        </div>

                        <!-- 分数线 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                分数线
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,i) in information" :key="i"  class="collage-position" >
                                <div v-for="(item_,index_) in item.project" :key="index_" style="color: rgb(168, 168, 168);margin-bottom: 20px;letter-spacing: 0.8px;line-height: 20px">
                                    <p v-html="item_.score_describe"></p>
                                </div>
                            </div>
                        </div>

                        <!-- 招生模式 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                招生模式
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,i) in information" :key="i"  class="collage-position" >
                                <div v-for="(item_,index_) in item.project" :key="index_" style="color: rgb(168, 168, 168);margin-bottom: 20px;letter-spacing: 0.8px;line-height: 20px">
                                    <p v-html="item_.enrollment_mode"></p>
                                </div>
                            </div>
                        </div>


                        <!-- 省市 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                省市
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="collage-position">

                                <span class="span-short-font">
                                   {{item.province['province'] }}{{item.province['city']}}
                                </span>
                            </div>
                        </div>

                        <!-- 地址 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                地址
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="collage-position">
                                <p v-text="item.address" style="color: rgb(168, 168, 168);margin-bottom: 20px;letter-spacing: 0.8px;line-height: 20px"></p>
                            </div>
                        </div>

                        <!-- 咨询电话 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                咨询电话
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="collage-position">
                                <p v-html="item.phone" style="color: rgb(168, 168, 168);margin-bottom: 20px;letter-spacing: 0.8px;line-height: 20px"></p>
                            </div>
                        </div>

                        <!-- 院校官网 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                院校官网
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="collage-position">
                                <a style="text-decoration: none;color:rgb(38, 218, 183)" v-bind:href=" item.index_web " target="_blank">点击进入官网</a>
                            </div>
                        </div>

                        <!-- 招生专题 -->
                        <div class="authentication">
                            <p class="authentication-p">
                                招生专题
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="collage-position">

                                <a style="text-decoration: none;color:rgb(38, 218, 183)" v-bind:href=" item.admissions_web " target="_blank">点击此链接进入专题页面</a>
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                院校官微
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" :key="index" class="collage-position">

                                <div v-for="(item_,index_) in item.wc_image" :key="index_" style="display: inline-block">
                                    <img  :src="item_" style="height: 100px;width: 100px">
                                </div>
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
                right:false,
                equis:"EQUIS",
                aascb:"AASCB",
                two:"原211",
                nine:"原985",
                both29:"双一流",
                amba:"AMBA",
                camea:"CAMEA",
                ercode:"/storage/wimg/",
                imgurl:'http://www.lishanlei.cn'

            }
        },
        methods:{
            removeAsMajor(index) {
                this.stringpage = this.stringpage.split(',');
                for(let i = 0; i < this.stringpage.length; i++) {
                    if(parseInt(index) == parseInt(this.stringpage[i])) {
                        this.stringpage.splice(i, 1);
                    }
                }
                this.stringpage = this.stringpage.length > 0 ? this.stringpage.join(',') : '';
                this.$router.push('/front/firstMenuRouter/majorsCompare/' + this.stringpage);
            },
            getInformation: function () {
                let _this = this;
                _this.fetch('/front/colleges/vsmajors',{
                    m_ids:_this.stringpage
                }).then(function (res) {
                    if (res.code == 0){
                        _this.information = res.result;
                        for(let i in _this.information){
                            if(typeof _this.information[i].major_confirm_id == 'string' && _this.information[i].major_confirm_id != '')
                                _this.information[i].major_confirm_id = _this.information[i].major_confirm_id.split(',')
                            if(typeof _this.information[i].major_follow_id == 'string' && _this.information[i].major_follow_id != '')
                                _this.information[i].major_follow_id = _this.information[i].major_follow_id.split(',')

                        }
                    }

                })
            },

        },

        mounted(){
            this.stringpage = this.$route.params.id
            this.getInformation();
        }
    }
</script>
<style scoped>
    .footer-con-collage{
        padding-bottom: 20px;
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
        width: 25%;
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
    .collage-title span:first-child{
      float: left;
      width: 90%;
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
        line-height: 35px;
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
            display: inline-flex;
        }
        .collage-major{
            padding: 0px;
            margin: auto;
            width: 100%;
          padding-top: 25px;
        }
        .collage-con{
            width: 96%;
            margin: auto;
        }

      .collage-title span:first-child{
        width: 85%;
        line-height: 35px;
      }
    }
</style>

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
                            <div class="collage-conten-article" v-for="(item,index) in information">
                                <div class="collage-title">
                                    {{item.z_name}}<span class="collage-cancel"><i class="el-icon-close cancel"></i></span>
                                    <div class="collage-mba">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="authentication">
                            <p class="authentication-p">
                                专业列表
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position" style="border-bottom: 1px solid #777777">
                                <div v-for="(item_,index_) in item.project" style="color: rgb(168, 168, 168);margin-bottom: 20px;letter-spacing: 0.8px;line-height: 20px">
                                    {{item_.project_name}}费用{{item_.cost}},招生名额：{{item_.student_count}}名,授课语言：{{item_.language}},
                                    班级情况：{{item_.class_situation}}
                                    <p style="margin-top: 10px"><b>学制：</b>{{item_.eductional_systme}}</p>
                                    <p style="margin-top: 10px"><b>毕业证：</b>{{item_.graduation_certificate}}</p>
                                    <p style="margin-top: 10px"><b>报考条件：</b>{{item_.can_conditions}}</p>
                                    <p style="margin-top: 10px"><b>分数线描述：</b>{{item_.score_describe}}</p>
                                    <p style="margin-top: 10px"><b>招生模式：</b>{{item_.recruitment_pattern}}</p>
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
                                    <div style="">
                                        <div v-for="(item_,index_) in item.major_confirm_id" style="display: inline-block;margin: 5px 5px">
                                            <img class="c-image image_2pnGPP" v-if="item_ == equis" src="http://qty83k.creatby.com/materials/2771/origin/6dafa65ca7969bd1332d32af843573b4_origin.png">
                                            <img class="c-image image_2pnGPP" v-if="item_ == aascb" src="http://qty83k.creatby.com/materials/2771/origin/a441ca693a7edd636e46d70f405471f2_origin.png">
                                            <img class="c-image image_2pnGPP" v-if="item_ == amba" src="http://qty83k.creatby.com/materials/2771/origin/a441ca693a7edd636e46d70f405471f2_origin.png">
                                            <img class="c-image image_2pnGPP" v-if="item_ == camea" src="http://qty83k.creatby.com/materials/2771/origin/a441ca693a7edd636e46d70f405471f2_origin.png">

                                        </div>
                                    </div>
                                    <div style="">
                                         <div v-for="(item_,index_) in item.major_follow_id" style="display: inline-block;margin: 5px 5px">
                                            <img class="c-image image_2pnGPP" v-if="item_==two" src="http://qty83k.creatby.com/materials/2771/origin/4a927421d269514312c8e280be7c5f32_origin.png">
                                            <img class="c-image image_2pnGPP" v-if="item_==nine" src="http://qty83k.creatby.com/materials/2771/origin/70280919fb394c9c97e8f8c20eee6a31_origin.png">
                                            <img class="c-image image_2pnGPP" v-if="item_==both29" src="http://qty83k.creatby.com/materials/2771/origin/e8ecd15f5fdb4cd47b820a13ded104ff_origin.png">
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="authentication">
                        <p class="authentication-p">
                            审批年限
                        </p>
                    </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">

                                <span class="span-short-font">
                                   {{item.access_year }}年
                                </span>
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                省市
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">

                                <span class="span-short-font">
                                   {{item.province['province'] }}{{item.province['city']}}
                                </span>
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                地址
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">

                                <span class="span-short-font">
                                   {{item.address}}
                                </span>
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                咨询电话
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">

                                <span class="span-short-font">
                                   {{item.phone}}
                                </span>
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                院校官网
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">

                             <a style="text-decoration: none;color:rgb(38, 218, 183)" v-bind:href=" item.index_web ">点击进入官网</a>
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                招生专题
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">

                                <a style="text-decoration: none;color:rgb(38, 218, 183)" v-bind:href=" item.admissions_web ">点击此链接进入专题页面</a>
                            </div>
                        </div>
                        <div class="authentication">
                            <p class="authentication-p">
                                院校官微
                            </p>
                        </div>
                        <div class="clearfloat">
                            <div v-for="(item,index) in information" class="collage-position">

                                <div v-for="(item_,index_) in item.wc_image" style="display: inline-block">
                                    <img :src="imgurl+ercode+item_" style="height: 100px;width: 100px">
                                </div>
                            </div>
                        </div>
                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--招生名额-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-font collage-position">-->
                                <!--<span class="span-big-font">-->
                                    <!--{{item.student_count}}-->
                                <!--</span>-->
                                <!--<span class="span-short-font">-->
                                    <!--名-->
                                <!--</span>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--学制-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-age collage-position">-->
                                <!--<span class="span-big-font">-->
                                    <!--2-->
                                <!--</span>-->
                                <!--<span class="span-short-font">-->
                                    <!--年-->
                                <!--</span>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--授课语言-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-font collage-position">-->
                                <!--<div>333</div>-->
                                <!--(课程均为{{ item.language }})-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--班级情况-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-age collage-position">-->
                                <!--{{ item.class_situation }}班-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--报考条件-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-age collage-position">-->
                                <!--{{ item.can_conditions }}-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--分数线描述-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-age collage-position">-->
                                <!--{{ item.score_describe }}-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--统招模式-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-age collage-position">-->
                                <!--{{ item.recruitment_pattern[0].name }}-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--招生模式-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-age collage-position">-->
                                <!--{{ item.enrollment_mode }}-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--分数线类型-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-age collage-position">-->
                                <!--{{ item.score_type[0].name }}-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--毕业证书-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="collage-age collage-position">-->
                                <!--{{ item.graduation_certificate }}-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="authentication">-->
                            <!--<p class="authentication-p">-->
                                <!--其他说明-->
                            <!--</p>-->
                        <!--</div>-->
                        <!--<div class="clearfloat">-->
                            <!--<div v-for="(item,index) in information" class="footer-con-collage collage-age collage-position informationPhone">-->
                                <!--<span v-if="item.other_explain == null">-->
                                    <!--无-->
                                <!--</span>-->
                                <!--<span v-else>-->
                                    <!--{{ item.other_explain }}-->
                                <!--</span>-->
                            <!--</div>-->
                        <!--</div>-->
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
                stringpage:'1,2,17,18',
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
            getInformation: function () {
                let _this = this;
                _this.fetch('/front/colleges/vsmajors',{
                    m_ids:_this.stringpage
                }).then(function (res) {
                    console.log(res)
                    if (res.code == 0){
                        _this.information = res.result;
                        console.log(_this.information)
                        for(let i in _this.information){
                            _this.information[i].major_confirm_id   = _this.information[i].major_confirm_id.split(',')
                            _this.information[i].major_follow_id    = _this.information[i].major_follow_id.split(',')
                            _this.information[i].wc_image    = _this.information[i].wc_image.split(',')

                        }
                    }

                }).catch(function (error) {

                })
            },

        },

        mounted(){
            this.stringpage = this.$route.params.id
            this.getInformation();
            // this.imgurl = longUrl
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
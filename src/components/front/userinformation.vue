<template>
    <div class="c-div div_v60iAm ggwei">
        <div class="container c-container container_T7sUlN huodong geren" >
            <div class="c-div div_sS15pC huodong">
                <div class="c-div div_9HK05B yuan">
                    <div v-if="userhead != ''" id="user_img" class="c-inlineblock c-imageblock imageblock_JtO0xa yuan test"
                         mode="scaleToFill"
                         :src="userhead"
                         :style="{ backgroundImage: 'url(' + userhead + ')' }">
                    </div>
                    <div v-else id="user_img" class="c-inlineblock c-imageblock imageblock_JtO0xa yuan test"
                         mode="scaleToFill"
                         :src="userhead"
                         style="backgroundImage: url(http://qty83k.creatby.com/materials/2771/origin/dfcbeb92f5c5e039d67f280a7bd3b330_origin.png);">
                    </div>
                </div>
                <div class="c-div div_SjIrYp biaotizhong">
                    <div class="c-div div_mjNmSC" style="height: 20px">
                        <div class="c-div div_nc26mD yellow huodong"></div>
                        <h1 class="c-heading heading_D4pPFr fanbai zhongwen huodong">{{ user_name }}</h1>
                        <div class="c-div div_nc26mD yellow huodong"></div>
                    </div>
                    <div class="c-div div_IIlwIU juzhong">
                        <img class="c-image image_tCkiDX"
                             src="http://qty83k.creatby.com/materials/2771/origin/c46972a7e1c58ac43fd3dec69815dec1_origin.png">
                        <h1 class="c-heading heading_3hU4sb bold shier white">{{ provices }}</h1>
                        <h1 class="c-heading heading_3hU4sb bold shier">&nbsp;·&nbsp;{{ citys }}</h1>
                    </div>
                </div>
                <div class="row c-row row_IBfFmS geren">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 c-column column_G7ZEcz">
                        <div class="c-div div_But3Va danshu geren">
                            <h1 class="c-heading heading_58QPWV center shuzi">{{ colleges }}</h1>
                            <h1 class="c-heading heading_58QPWV small center geren">关注院校</h1>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 c-column column_G7ZEcz">
                        <div class="c-div div_But3Va danshu geren">
                            <h1 class="c-heading heading_58QPWV center shuzi">{{ actives }}</h1>
                            <h1 class="c-heading heading_58QPWV small center geren">参加活动</h1>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 c-column column_G7ZEcz">
                        <div class="c-div div_But3Va danshu geren">
                            <h1 class="c-heading heading_58QPWV center shuzi">{{ ding }}</h1>
                            <h1 class="c-heading heading_58QPWV small center geren">收到提醒</h1>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 c-column column_G7ZEcz">
                        <div class="c-div div_But3Va danshu geren">
                            <h1 class="c-heading heading_58QPWV center shuzi">{{coupons}}</h1>
                            <h1 class="c-heading heading_58QPWV small center geren">可用优惠券</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    h1 {
        font-size: 36px;
    }

    p, h1, h2, h3, h4 {
        min-width: 10px;
        min-height: 10px;
    }
    p, h1, h2, h3, h4, h5, h6, a {
        font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
    }
    img, p, h1, h2, h3, h4, h5, h6 {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    h1, .h1 {
        font-size: 36px;
    }
    h1, .h1, h2, .h2, h3, .h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
    }
    h1 {
        margin: .67em 0;
        font-size: 2em;
    }

    :before, :after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    :before, :after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2,
    .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4,
    .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6,
    .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8,
    .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10,
    .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }

    .col-xs-12 {
        width: 100%;
    }

    .col-xs-3 {
        width: 25%;
    }

    .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6,
    .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
        float: left;
    }

    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .container-fluid {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .c-section, .c-container, .c-container-1, .c-container-2, .c-row, .c-column, .c-div, .c-list, .c-listitem, .c-tabpane {
        min-height: 80px;
    }

    .row {
        margin-right: -15px;
        margin-left: -15px;
    }

    .c-row {
        word-spacing: -4px;
    }

    .c-row {
        margin-left: 0;
        margin-right: 0;
        padding-right: 0;
        padding-left: 0;
    }

    .c-column {
        word-spacing: normal;
    }

    .c-imageblock {
        width: 100px;
        height: 100px;
    }

    .c-inlineblock {
        display: inline-block;
    }

    .div_v60iAm.ggwei {
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 20px;
    }

    .div_v60iAm {
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        border-style: none;
        padding-left: 30px;
        padding-right: 30px;
        transform: rotate(0deg) scale(1) translate(0%, 0%);
        transition: All 0.3s ease;
        -ms-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -o-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -moz-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -ms-transition: All 0.3s ease;
        -o-transition: All 0.3s ease;
        -moz-transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
    }

    .container_T7sUlN.huodong.geren {
        height: auto;
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/b19b1963dc8e4cb49519512fb0fef1cb_origin.jpg);
    }

    .container_T7sUlN.huodong {
        width: auto;
        height: 350px;
        padding-bottom: 0px;
    }

    .container_T7sUlN {
        width: 1280px;
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/924aa58…_origin.jpg);
        background-size: cover;
        background-position: 50% 50%;
        height: 360px;
        padding-left: 0;
        padding-right: 0;
        border-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }



    .div_sS15pC.huodong {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: 25px;
    }

    .div_sS15pC {
        background-color: rgba(56, 59, 61, 0.85);
        height: 100%;
        text-align: center;
        padding-top: 40px;
        border-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .div_9HK05B.yuan {
        width: 108px;
        height: 108px;
        border-radius: 70px;
        border-bottom-right-radius: 70px;
        border-bottom-left-radius: 70px;
        border-top-right-radius: 70px;
        border-top-left-radius: 70px;
    }

    .div_9HK05B {
        width: 130px;
        height: 130px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background-color: rgba(255, 255, 255, 0.1);
        margin-bottom: 30px;
        border-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .div_SjIrYp.biaotizhong {
        margin-bottom: 0px;
    }
    .div_SjIrYp {
        margin-bottom: 80px;
        padding-left: 10px;
        padding-right: 10px;
        min-height: auto;
    }

    .row_IBfFmS.geren {
        margin-top: 10px;
    }

    .row_IBfFmS {
        margin-top: 29px;
        min-height: auto;
    }

    .div_sS15pC.huodong {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: 25px;
    }

    .div_sS15pC {
        background-color: rgba(56, 59, 61, 0.85);
        height: 100%;
        text-align: center;
        padding-top: 40px;
        border-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .imageblock_JtO0xa.yuan {
        border-radius: 70px;
        width: 98px;
        height: 98px;
    }

    .imageblock_JtO0xa {
        width: 120px;
        height: 120px;
        border-radius: 5px;
        border-color: rgba(255, 255, 255, 0.1);
        border-width: 5px;
        background-color: rgb(255, 255, 255);
        border-style: none;
        margin-top: auto;
        margin-bottom: auto;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        position: absolute;
        display: inline-block;
        margin-left: auto;
        margin-right: auto;
    }
    .test {
        background-size: 100% 100%; background-position:   0% 0%;
        background-repeat:   no-repeat;
    }

    .div_SjIrYp.biaotizhong {
        margin-bottom: 0px;
    }

    .div_SjIrYp {
        margin-bottom: 80px;
        padding-left: 10px;
        padding-right: 10px;
        min-height: auto;
    }

    .div_mjNmSC {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        min-height: auto;
    }

    .heading_D4pPFr.fanbai.zhongwen.huodong {
        font-size: 20px;
        margin-left: 14px;
        margin-right: 14px;
    }

    .heading_D4pPFr.fanbai.zhongwen {
        font-size: 28px;
    }
    .heading_D4pPFr.fanbai {
        color: #fcfcfc;
    }
    .heading_D4pPFr {
        text-align: center;
        text-transform: uppercase;
        font-family: Roboto;
        font-weight: bold;
        color: rgb(110, 110, 110);
        margin: 0px 23px;
        font-size: 31px;
        line-height: 1em;
    }

    .div_nc26mD.yellow.huodong {
        width: 18px;
        height: 4px;
    }

    .div_nc26mD.yellow {
        background-color: rgb(255, 185, 87);
        width: 26px;
        height: 4px;
    }
    .div_nc26mD {
        width: 28px;
        height: 5px;
        min-height: auto;
        background-color: rgba(0,159,160,1);
    }

    .div_IIlwIU.juzhong {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 17px;
        margin-bottom: 30px;
    }

    .div_IIlwIU {
        min-height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-left: 0px;
    }

    .image_tCkiDX {
        margin-right: 6px;
        display: inline-block;
    }

    .heading_3hU4sb.bold.shier.white {
        opacity: 1;
    }

    .heading_3hU4sb.bold.shier {
        font-size: 12px;
    }
    .heading_3hU4sb.bold {
        font-weight: bold;
    }
    .heading_3hU4sb {
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 14px;
        color: rgb(255, 255, 255);
        opacity: 0.7;
    }

    .c-image {
        height: auto;
        width: auto;
        max-width: 100%;
        display: inline-block;
    }

    .column_G7ZEcz {
        padding-left: 0;
        padding-right: 0;
        min-height: auto;
    }

    .div_But3Va.danshu.geren {
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/9945ea5cff0e597ecf02a416a947575d_origin.png);
    }

    .div_But3Va.danshu {
        background-image: url("http://qty83k.creatby.com/materials/2771/origin/3aa75931ffba5b972751d11f226237e0_origin.png");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 50%;
    }
    .div_But3Va {
        min-height: auto;
    }
    .heading_58QPWV.center.shuzi {
        color: rgb(255, 185, 87);
        font-weight: bold;
        font-family: Roboto;
        font-size: 22px;
        width: auto;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
    .heading_58QPWV {
        color: rgb(110, 110, 110);
        font-size: 14px;
        margin-top: 0px;
        margin-bottom: 0px;
        line-height: 1.5em;
        font-weight: normal;
        margin-right: 0px;
        width: 70px;
        text-align: left;
    }

    .heading_58QPWV.small {
        font-size: 12px;
        margin-right: 0px;
        width: 70px;
        margin-bottom: 0px;
    }


    small, .small {
        font-size: 85%;
    }

    .heading_58QPWV.small.center.geren {
        color: rgb(255, 255, 255);
        opacity: 0.7;
    }

    .heading_58QPWV.small.center {
        width: auto;
        text-align: center;
        margin-top: 0px;
    }

    .clearfix:before, .clearfix:after, .dl-horizontal dd:before, .dl-horizontal dd:after, .container:before, .container:after, .container-fluid:before, .container-fluid:after, .row:before, .row:after, .form-horizontal .form-group:before, .form-horizontal .form-group:after, .btn-toolbar:before, .btn-toolbar:after, .btn-group-vertical>.btn-group:before, .btn-group-vertical>.btn-group:after, .nav:before, .nav:after, .navbar:before, .navbar:after, .navbar-header:before, .navbar-header:after, .navbar-collapse:before, .navbar-collapse:after, .pager:before, .pager:after, .panel-body:before, .panel-body:after, .modal-footer:before, .modal-footer:after {
        display: table;
        content: " ";
    }
    .clearfix:after, .dl-horizontal dd:after, .container:after, .container-fluid:after, .row:after, .form-horizontal .form-group:after, .btn-toolbar:after, .btn-group-vertical>.btn-group:after, .nav:after, .navbar:after, .navbar-header:after, .navbar-collapse:after, .pager:after, .panel-body:after, .modal-footer:after {
        clear: both;
    }
    :before, :after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    @media (max-width: 767px){
        *[data-v-315cf025] {
            background-attachment: initial !important;
        }
    }
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{

        },
        props:["user_img","user_name","provices","citys","colleges","actives","ding","coupons", "userhead"],
        mounted(){

        }
    }
</script>
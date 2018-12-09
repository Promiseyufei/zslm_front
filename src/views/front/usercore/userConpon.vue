<template>
    <div>
        <div class="c-div div_v60iAm xiangqingye">
            <div class="c-div div_Vpd4yi biaoti">
                <div class="c-div div_gv5puJ">
                    <h1 class="c-heading heading_LkNL2E">优惠券使用操作流程</h1>
                </div>
                <div class="c-div div_ZlvBVf xian">

                </div></div>
            <div class="row c-row row_lysUBI">
                <div class="col-lg-2_4 col-md-2_4 col-sm-2_4 col-xs-12 c-column column_mGHURg">
                    <div class="c-div div_jvE6kN"><div class="c-div div_HMuEFu">
                        <img class="c-image image_5BC1ZB" src="http://qty83k.creatby.com/materials/2771/origin/7edff31b5173a184ae1a2ba77b380ba7_origin.png">
                        <img class="hidden-xs c-image image_zlyW4q" src="http://qty83k.creatby.com/materials/2771/origin/62353520f032dd88dc536cb8979c86b4_origin.png">
                    </div>
                        <h1 class="c-heading heading_bzBLAm">step.1</h1>
                        <h1 class="c-heading heading_wT39zy">领取优惠券</h1></div>
                </div><div class="col-lg-2_4 col-md-2_4 col-sm-2_4 col-xs-12 c-column column_mGHURg">
                <div class="c-div div_jvE6kN"><div class="c-div div_HMuEFu">
                    <img class="c-image image_5BC1ZB" src="http://qty83k.creatby.com/materials/2771/origin/d6a6bfeef43412a4a3e3d7631c5683cd_origin.png">
                    <img class="hidden-xs c-image image_zlyW4q" src="http://qty83k.creatby.com/materials/2771/origin/62353520f032dd88dc536cb8979c86b4_origin.png">
                </div><h1 class="c-heading heading_bzBLAm">step.2</h1><h1 class="c-heading heading_wT39zy">在个人中心可以查看到相应的优惠券</h1></div></div>
                <div class="col-lg-2_4 col-md-2_4 col-sm-2_4 col-xs-12 c-column column_mGHURg"><div class="c-div div_jvE6kN">
                    <div class="c-div div_HMuEFu">
                        <img class="c-image image_5BC1ZB" src="http://qty83k.creatby.com/materials/2771/origin/6d65440a03efb918fe32ec1f1e180951_origin.png">
                        <img class="hidden-xs c-image image_zlyW4q" src="http://qty83k.creatby.com/materials/2771/origin/62353520f032dd88dc536cb8979c86b4_origin.png">
                    </div><h1 class="c-heading heading_bzBLAm">step.3</h1><h1 class="c-heading heading_wT39zy">选择想要使用的优惠券，点击使用</h1>
                </div></div><div class="col-lg-2_4 col-md-2_4 col-sm-2_4 col-xs-12 c-column column_mGHURg">
                <div class="c-div div_jvE6kN"><div class="c-div div_HMuEFu">
                    <img class="c-image image_5BC1ZB" src="http://qty83k.creatby.com/materials/2771/origin/d70b7ea45baa54b5a62c13ad1650c826_origin.png">
                    <img class="hidden-xs c-image image_zlyW4q" src="http://qty83k.creatby.com/materials/2771/origin/62353520f032dd88dc536cb8979c86b4_origin.png">
                </div>
                    <h1 class="c-heading heading_bzBLAm">step.4</h1>
                    <h1 class="c-heading heading_wT39zy">收到短信凭据</h1>
                </div></div><div class="col-lg-2_4 col-md-2_4 col-sm-2_4 col-xs-12 c-column column_mGHURg">
                <div class="c-div div_jvE6kN"><div class="c-div div_HMuEFu">
                    <img class="c-image image_5BC1ZB" src="http://qty83k.creatby.com/materials/2771/origin/7a310a01603dc0b85112c25941443108_origin.png">
                </div><h1 class="c-heading heading_bzBLAm">step.5</h1><h1 class="c-heading heading_wT39zy">在辅导机构报名时，出示短信凭据即可享受优惠</h1>
                </div></div></div>
        </div>
        <div class="c-div div_v60iAm biaoqian">
            <a class="c-textlink textlink_jH6Kkn userclick xuanzhong" @click="pageInfo(0,0)">未使用 ({{noUseCount}})</a>
            <a class="c-textlink textlink_jH6Kkn userclick" @click="pageInfo(0,1)">已使用 ({{useCount}})</a>
            <a class="c-textlink textlink_jH6Kkn userclick" @click="pageInfo(1,2)">已失效 ({{enable}})</a>
        </div>
        <div v-for="(item,index) in this.coupons">
            <userCoupon :data="item" :use_show="use_show"></userCoupon>
        </div>
        <el-button  style="float: right" type="text" @click="getPage" :loading="loading" :disabled="disabled">{{ loadingBtnText }}</el-button>

    </div>
</template>
<style scoped>

    .heading_LkNL2E {
        color: #009fa0;
        font-size: 18px ;
        font-weight: bold ;
        margin-top: 0px ;
        margin-bottom: 15px ;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        color: black;
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
    body {
        font-size: 14px !important;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
        line-height: 1.42857143 !important;
        color: #333 !important;
    }
    body {
        font-size: 14px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    body {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 1.42857143 !important;
        color: #333;
        background-color: #fff;
    }
    html {
        font-size: 15px;
          -webkit-font-smoothing: antialiased;
    }
    html {
          -webkit-font-smoothing: antialiased;
    }
    html {
        font-size: 10px;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    html {
        font-family: sans-serif;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
    }

    a {
        color: #428bca;
        text-decoration: none;
    }

    a {
        background: 0 0;
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

    .c-section {
        padding-left: 0;
        padding-right: 0;
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

    .section_bUBpNL {
        background-color: rgb(245, 245, 245);
        min-height: auto;
        padding-bottom: 60px;
        position: relative;
        z-index: -2;
    }

    .row_EaN5GL {
        width: 1300px;
        margin: 0 auto !important;
    }

    .c-row {
        margin-left: 0;
        margin-right: 0;
        padding-right: 0;
        padding-left: 0;
    }





    .column_Pmqzmn {
        padding-left: 10px;
        padding-right: 10px;
    }

    .c-column {
        word-spacing: normal;
    }

    .column_aLEhx8 {
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 50px;
    }





    a:-webkit-any-link {

        cursor: pointer;
        text-decoration: none;
    }


    a:hover, a:focus {
        text-decoration: none;
    }
    a:hover, a:focus {
        color: #2a6496;
        text-decoration: underline;
    }
    a:active, a:hover {
        outline: 0;
    }

    initHide:not(.c-hideHolder) {
        display: none !important;
    }



    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
    }





    @media (max-width: 991px){
        .column_Pmqzmn {
            width: 100%;
        }

        .column_aLEhx8 {
            width: 100%;
        }
        .row_EaN5GL {
            width: 100%;
        }
    }

    @media (max-width: 767px){
        * {
            background-attachment: initial !important;
        }

        .column_mGHURg {
            margin-bottom: 39px;
            padding-right: 0px !important;
        }

        .div_HMuEFu {
            -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }

        .heading_bzBLAm {
            text-align: center;
        }

        .hidden-xs {
            display: none!important;
        }

        .heading_wT39zy {
            text-align: center;
        }
        .div_v60iAm.biaoqian {
            padding-left: 10px;
            padding-right: 10px;
            overflow: scroll;
            overflow-y: hidden;
        }

        .div_v60iAm {
            padding-left: 10px;
            padding-right: 10px;
        }

        .textlink_jH6Kkn.xuanzhong {
            font-size: 12px;
            margin-right: 13px;
        }


        .textlink_jH6Kkn {
            margin-right: 15px !important;
            font-size: 12px !important;
        }

    }


    @media (min-width: 1200px) {

        .col-lg-3 {
            width: 25%;
        }

        .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
            float: left;
        }

        .col-lg-6 {
            width: 50%;
        }
        .col-lg-9 {
            width: 75%;
        }

    }


    @media (min-width: 992px) {

        .col-md-3 {
            width: 25%;
        }

        .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
            float: left;
        }

        .col-md-6 {
            width: 50%;
        }

        .row_EaN5GL{
            width: 100%;
        }
    }

    @media (min-width: 768px) {

        .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
            float: left;
        }
        .col-sm-2_4 {
            width: 20%;
        }

        .col-sm-6 {
            width: 50%;
        }

    }

    @media (min-width: 1200px) {

    }

    @media (min-width: 1200px) {
        .c-container {
            width: 940px;
        }
        .container {
            width: 1170px;
        }

        .col-lg-2_4 {
            width: 20%;
        }
    }

    @media (min-width: 992px) {
        .container {
            width: 970px;
        }

        .col-md-2_4 {
            width: 20%;
        }
    }

    body{
        background-color: #f5f5f5;
    }
    .el-carousel__container{
        height: 440px;
    }
    .el-carousel__button{
        width: 1em;
        height: 1em;
        border-radius: .5em;
    }
    .el-carousel__indicator{
        padding: 0 3px 16px;
    }

    .el-carousel__arrow{
        height: 0px;
    }
    [class*=" el-icon-"], [class^=el-icon-]{
        font-size:26px;
        font-weight: bolder;
        line-height:0px;
    }
    .el-carousel__arrow--left{
        left: 20px;
    }
    .el-carousel__arrow--right{
        right: 20px;
    }
    .sowingContent[data-v-2912dfba]{
        border-radius: 5px;
    }



    .div_v60iAm.xiangqingye {
        padding: 0px 25px 25px;
        margin-bottom: 20px;
        padding-top: 25px;
    }

    .div_v60iAm {
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        border-style: none;
        padding-left: 30px;
        padding-right: 30px;
        transform: rotate(0deg) scale(1) translate(0%,0%);
        transition: All 0.3s ease;
        -ms-transform: rotate(0deg) scale(1) translate(0%,0%);
        -o-transform: rotate(0deg) scale(1) translate(0%,0%);
        -moz-transform: rotate(0deg) scale(1) translate(0%,0%);
        -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
        -ms-transition: All 0.3s ease;
        -o-transition: All 0.3s ease;
        -moz-transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
    }

    .div_Vpd4yi {
        min-height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 30px;
    }

    .div_gv5puJ {
        min-height: auto;
    }

    .div_ZlvBVf.xian {
        height: 1px;
        width: 100%;
        background-color: rgba(239,239,239,1);
    }

    .div_ZlvBVf {
        width: 21px;
        height: 4px;
        min-height: auto;
        background-color: rgba(210,210,210,1);
    }

    .column_mGHURg {
        padding-left: 0px;
        padding-right: 46px;
    }

    .div_HMuEFu {
        min-height: auto;
        text-align: left;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .c-image {
        height: auto;
        width: auto;
        max-width: 100%;
        display: inline-block;
    }

    .heading_bzBLAm {
        font-size: 12px;
        font-weight: bold;
        font-style: italic;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgb(0, 159, 160);
        margin-bottom: 7px;
        margin-top: 12px;
    }

    .div_Vpd4yi.biaoti {
        display: block;
    }

    .heading_wT39zy {
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0px;
        color: rgb(72, 72, 72);
        margin-top: 0px;
        margin-bottom: 0px;
        line-height: 1.6em;
    }

    .div_v60iAm:hover {
        box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
        transform: rotate(0deg) scale(1) translate(0%,0%);
        transition: All 0.3s ease;
        -ms-transform: rotate(0deg) scale(1) translate(0%,0%);
        -o-transform: rotate(0deg) scale(1) translate(0%,0%);
        -moz-transform: rotate(0deg) scale(1) translate(0%,0%);
        -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
        -ms-transition: All 0.3s ease;
        -o-transition: All 0.3s ease;
        -moz-transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
    }

    .div_v60iAm.biaoqian {
        margin-bottom: 20px;
        padding-left: 25px;
        padding-right: 25px;
        min-height: auto;
        padding-top: 22px;
        height: 65px;
    }

    .textlink_jH6Kkn.xuanzhong {
        color: rgb(0, 159, 160);
        border-style: none none solid;
        border-color: rgb(0, 159, 160);
        border-width: 3px;
        font-weight: bold;

    }

    .textlink_jH6Kkn {
        font-size: 16px;
        color: rgb(49, 49, 49)  ;
        height: 100%;
        padding-bottom: 0px;
        display: inline-block;
        margin-right: 46px;

    }

    .textlink_jH6Kkn:hover {
        font-weight: bold;
        border-style: none none solid;
        border-bottom-color: rgb(0, 159, 160);
        border-bottom-width: 2px;
        color: #009fa0;
        text-decoration: none ;
    }

    a:hover, a:focus {
        text-decoration: none;
    }

    a{
        color: black;
    }
    a:active, a:hover {
        outline: 0;
        color: black;
    }
    .textlink_jH6Kkn {
        font-size: 16px;
        color: rgb(49, 49, 49) ;
        height: 100%;
        padding-bottom: 0px;
        display: inline-block;
        margin-right: 46px;
    }

    @media (max-width: 991px){
        .el-carousel__container {
            min-height: auto;
        }
        .sowingMap[data-v-2912dfba]{
            width: 100%;
        }
        [class*=" el-icon-"], [class^=el-icon-]{
            font-size: 0px;
        }
        .sowingContent[data-v-2912dfba]{
            border-radius: 0px;
        }
    }

    @media (min-width: 768px) {
        .container {
            width: 750px;
        }
    }


</style>


<script>
    export default {
        data() {
            return {
                // isCollapse: true,
                id:1,
                userName:'',
                userProvice:'',
                userCity:'',
                userCollege:0,
                userActive:0,
                userNews:0,
                userCoupon:0,
                page:1,
                page_size:3,
                coupons:[],
                loading:false,
                disabled:false,
                loadingBtnText:'加载更多',
                type:0,
                isUse:0,
                noUseCount:0,
                useCount:0,
                enable:0,
                use_show:true,
            };
        },
        methods: {

            getCoupon(){
                let self = this;
                this.fetch('/front/coach/getusercoach',{
                    id:self.id,
                    page:self.page,
                    page_size:self.page_size,
                    type:self.type,
                    is_use:self.isUse
                })
                    .then(res=>{
                        if(res.code == 0){
                            let data = res.result[0];
                            self.noUseCount = res.result['nouse'];
                            self.useCount = res.result['use'];
                            self.enable = res.result['enable'];
                            for(let i in data){
                                self.coupons.push(data[i])
                            }
                        }else{
                            self.disabled = true;
                            self.loadingBtnText = "已经到底了"
                        }
                    })
            },
            getPage(){
                this.loading = true;
                this.page++;
                this.getCoupon();
                this.loading = false;
            },
            pageInfo(type,isUse){
                this.page = 1;
                this.type = type;
                this.isUse = isUse;
                this.coupons = [];
                var doc = document.getElementsByClassName('userclick')
                console.log(doc)
                for(var i = 0;i<doc.length;i++){
                    if(i == isUse)
                        doc[i].setAttribute('class', 'c-textlink textlink_jH6Kkn userclick xuanzhong')
                    else
                        doc[i].setAttribute('class', 'c-textlink textlink_jH6Kkn userclick ')
                }

                if(isUse == 0)
                    this.use_show = true
                else
                    this.use_show = false
                this.getCoupon();
            }
        },
        mounted(){
            let divs = document.getElementsByTagName("div")
            divs[1].style.height = 0;
            divs[2].style.height = 0;
            this.getCoupon();
        }
    }
</script>
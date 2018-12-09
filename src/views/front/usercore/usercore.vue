<template>
    <div >
        <div class="container-fluid c-section section_bUBpNL banner c-scrollIn" data-c_tl_id="M_1190f23c338d4f57" id="section_d2fdb4dd"></div>
            <div class="container-fluid c-section section_bUBpNL">
                <div class="row c-row row_EaN5GL">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 c-column column_Pmqzmn" style="margin-bottom: 25px">
                        <userInfomation :user_name="this.userName"
                                        :colleges="this.userCollege"
                                        :provices="this.userProvice"
                                        :citys="this.userCity"
                                        :actives="this.userActive"
                                        :ding="this.userNews"
                                        :coupons="this.userCoupon"></userInfomation>
                        <userList></userList>

                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 c-column column_aLEhx8" >
                        <router-view/>
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
        z-index: 100;
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

    .section_bUBpNL {
        background-color: rgb(245, 245, 245);
        min-height: auto;
        padding-bottom: 60px;
        position: relative;
        z-index: 100;
    }

    .section_bUBpNL.banner {
        padding-top: 30px;
        padding-bottom: 30px;
    }




    a:-webkit-any-link {
        color: -webkit-link;
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
        .section_bUBpNL.banner {
            padding-top: 20px;
            padding-bottom: 20px;
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

        /*.row_EaN5GL{*/
            /*width: 100%;*/
        /*}*/
    }

    @media (min-width: 768px) {

        .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
            float: left;
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
    }

    @media (min-width: 992px) {
        .container {
            width: 970px;
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
            };
        },
        methods: {

            info(){
                let self = this;
                this.fetch('/front/usercore/getuserinfo?id='+self.id)
                    .then(res=>{
                        if(res.code == 0){
                            let result = res.result[0];
                            self.userName = result.user_name;
                            self.userProvice = result.provice
                            self.userCity = result.city
                            self.userCollege = result.majorCount;
                            self.userActive = result.activeCount;
                            self.userNews = result.newCount;
                            self.userCoupon = result.couponCount;
                        }
                    })
            },
        },
        mounted(){
            this.id = this.getUserState("userId")
            let divs = document.getElementsByTagName("div")
            divs[1].style.height = 0;
            divs[2].style.height = 0;
            this.info();
            // this.getMajor();
        }
    }
</script>
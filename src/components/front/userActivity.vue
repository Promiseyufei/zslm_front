<template>
    <div class="c-div div_v60iAm guanzhu huodong">
        <h1 class="c-heading heading_EVacHm">{{data.active_name}}</h1>
        <h1 class="c-heading heading_uRIjB0">{{data.update_time}}</h1>
        <div class="row c-row row_wX75UL wode">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_sjvm7k wode">

                <div class="c-div div_39Oixh wode">
                    <h1   v-show="data.active_status != 2" class="c-heading heading_49UScq">未开始</h1>
                    <h1   v-show="data.active_status == 2" class="c-heading heading_49UScq  yijieshu">已结束</h1>
                </div>

            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column cs-repeatable column_sjvm7k">
                <div class="c-div div_0oZzVH xiangqingye">
                    <div class="c-div div_eQPG16">
                        <img class="c-image image_3wYLxF"
                             src="http://qty83k.creatby.com/materials/2771/origin/18f5b9f2f32cefa9351e0776a9191f8f_origin.png">
                        <h1 class="c-heading heading_58QPWV">主办院校</h1>
                    </div>
                    <p class="c-paragraph heading_58QPWV bold">{{data.z_name}}</p>
                </div>
                <div class="c-div div_0oZzVH xiangqingye">
                    <div class="c-div div_eQPG16">
                        <img class="c-image image_3wYLxF"
                             src="http://qty83k.creatby.com/materials/2771/origin/9d39297b7527a3125b6f2a8e3eaaec35_origin.png">
                        <h1 class="c-heading heading_58QPWV">活动地址</h1>
                    </div>
                    <p class="c-paragraph heading_58QPWV bold">{{data.address}}</p>
                </div>
                <div class="c-div div_0oZzVH xiangqingye">
                    <div class="c-div div_eQPG16">
                        <img class="c-image image_3wYLxF"
                             src="http://qty83k.creatby.com/materials/2771/origin/d93413ec08a849f8633c67e0557be548_origin.png">
                        <h1 class="c-heading heading_58QPWV">活动时间</h1>
                    </div>
                    <p class="c-paragraph heading_58QPWV bold">{{data.begin_time}} 至 {{data.end_time}}</p>
                </div>
                <div class="c-div div_0oZzVH xiangqingye">
                    <div class="c-div div_eQPG16">
                        <img class="c-image image_3wYLxF"
                             src="http://qty83k.creatby.com/materials/2771/origin/a2a111bd9f722160447a7dc496916b1b_origin.png">
                        <h1 class="c-heading heading_58QPWV">活动地区</h1></div>
                    <p class="c-paragraph heading_58QPWV bold">{{data.province['province']}} {{
                        data.province['city']}}</p></div
                >
                <div class="c-div div_0oZzVH xiangqingye">
                    <div class="c-div div_eQPG16">
                        <img class="c-image image_3wYLxF"
                             src="http://qty83k.creatby.com/materials/2771/origin/bac6ee1b91168a53f1244429b5c238f4_origin.png">
                        <h1 class="c-heading heading_58QPWV">活动类型</h1></div>
                    <h1 class="c-heading heading_V5QM03">{{data.activity_type}}</h1></div>
                <a class="btn c-button button_LsM2yn123 quguan quxiao" type="button" @click="unsetActive(data.id)">取消报名</a></div>
        </div>
    </div>
</template>

<style scoped>

    * {
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
        font-family: "Microsoft YaHei", "Hiragino Sans GB", SimHei, STHeiti;
    }

    img, p, h1, h2, h3, h4, h5, h6 {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
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
    }

    .div_v60iAm.guanzhu.huodong {
        padding-top: 35px;
        padding-bottom: 35px;
    }

    .div_v60iAm.guanzhu {
        padding-left: 25px;
        padding-right: 25px;
        margin-bottom: 10px;
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

    .c-section, .c-container, .c-container-1, .c-container-2, .c-row, .c-column, .c-div, .c-list, .c-listitem, .c-tabpane {
        min-height: 80px;
    }

    .heading_EVacHm {
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgb(0, 159, 160);
        margin-top: 0px;
        margin-bottom: 0px;
    }

    h1 {
        font-size: 36px;
    }

    .heading_uRIjB0 {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgb(192, 192, 192);
        margin-top: 17px;
        margin-bottom: 31px;
    }

    .row_wX75UL.wode {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .c-row {
        margin-left: 0;
        margin-right: 0;
        padding-right: 0;
        padding-left: 0;
    }

    .c-row {
        word-spacing: -4px;
    }

    .column_sjvm7k.wode {
        width: auto;
        padding-left: 0px;
        padding-right: 0px;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
    }

    .column_sjvm7k {
        padding-left: 35px;
        padding-right: 0px;
        width: auto;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0%;
        flex: 1 1 0%;
        text-align: right;
    }

    .div_39Oixh.wode {
        width: 350px;
        height: 220px;
        border-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .div_39Oixh {
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/5f136dd034db5e699830521d60156268_origin.jpg);
        height: 191px;
        background-position: 50% 50%;
        background-size: cover;
    }

    .heading_49UScq {
        color: rgb(255, 255, 255);
        font-size: 14px;
        text-align: center;
        width: 84px;
        height: 34px;
        background-color: rgb(255, 185, 87);
        margin-top: 0px;
        margin-bottom: 0px;
        padding-top: 9px;
        border-bottom-left-radius: 5px;
        margin-left: auto;
        margin-right: 0;
    }

    .column_sjvm7k {
        padding-left: 35px;
        padding-right: 0px;
        width: auto;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0%;
        flex: 1 1 0%;
        text-align: right;
    }

    .div_0oZzVH.xiangqingye {
        margin-top: 0px;
        margin-bottom: 15px;
    }

    .div_0oZzVH {
        min-height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        margin-top: 11px;
    }

    .div_eQPG16 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        min-height: auto;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        width: auto;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    }

    .image_3wYLxF {
        margin-right: 12px;
    }

    .c-image {
        height: auto;
        width: auto;
        max-width: 100%;
        display: inline-block;
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

    .heading_58QPWV.bold {
        font-weight: bold;
        margin-right: 0px;
        line-height: 1.6em;
        width: auto;
    }

    .button_LsM2yn123.quguan {
        margin-top: 5px;
        border-radius: 5px;
        color: rgb(191, 191, 191);
        background-color: transparent;
        border-color: rgb(220, 220, 220);
        font-weight: bold;
    }

    .c-button {
        background-color: #000000;
        color: #FFFFFF;
    }

    .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
    }

    .heading_V5QM03 {
        font-size: 12px;
        color: rgb(255, 255, 255);
        background-color: rgb(0, 159, 160);
        border-radius: 60px;
        margin-top: 0px;
        text-align: left;
        padding: 3px 8px;
        -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        margin-bottom: 0px;
        width: auto;
        margin-left: 0;
        margin-right: auto;
    }

    .button_LsM2yn123.quguan:hover {
        background-color: rgb(255, 185, 87);
        color: #ffffff;
    }

    .heading_49UScq.yijieshu {
        width: 100%;
        height: 100%;
        border-radius: 0px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 0px;
        background-color: rgba(230, 230, 232, 0.8);
        color: rgb(108, 108, 108);
        font-size: 33px;
    }

    .heading_49UScq.jinxingzhon {
        background-color: rgba(177,0,8,1);
    }

    @media (max-width: 767px) {
        .div_v60iAm.guanzhu.huodong {
            padding: 25px 10px 20px;
            padding-top: 20px;
        }

        .heading_EVacHm {
            font-size: 16px;
            line-height: 1.5em;
        }

        .heading_EVacHm {
            font-size: 16px;
            line-height: 1.5em;
        }

        .heading_uRIjB0 {
            margin-top: 12px;
            margin-bottom: 13px;
        }

        .row_wX75UL.wode {
            display: block;
        }

        .column_sjvm7k.wode {
            width: 100%;
            height: auto;
        }

        .div_39Oixh.wode {
            width: 100%;
            margin-bottom: 24px;
        }

        .column_sjvm7k {
            width: 100%;
            padding-left: 0px;
            padding-top: 0px;
        }

    }

    @media screen and (min-width: 768px)and  (max-width: 1024px) {
        .div_v60iAm {
            width: 740px;
        }

    }
</style>
<script>
    export default {
        data() {
            return {
                datas: null
            }
        },
        methods: {
            unsetActive(a_id){
                let self = this;
                this.post("/front/activity/unsetactive",{
                    id:self.id,
                    a_id :a_id
                }).then(res=>{
                    if(res.code == 0){
                        this.message(true,"取消成功",'success')
                        this.$parent.pageinfo()
                    }else{
                        this.message(true,"取消失败","error")
                    }

                })
            },

        },
        props: ["data","id"],
        mounted() {
            console.log(this.data)
            // this.datas = this.data
        },

    }


</script>
<template>
    <div class="c-div div_v60iAm xiangqingye wodeyouhuiquan">
        <div class="row c-row row_qsGx3s">

            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 c-column column_uyUjdj">
                <div class="c-div div_bYIuDs">
                    <img class="c-image image_Y5MjSi" src="http://qty83k.creatby.com/materials/2771/origin/c2002a76f6c09f0000660a8ad7c20035_origin.png">
                    <h1 class="c-heading textlink_e6pE3X daliebiao wode">{{data.coach_name}}</h1>
                    <p class="c-ellipse c-paragraph paragraph_XjkcYS">{{data.province}}+{{data.city}}</p>
                </div>
              <div class="c-div div_m9HjXA c-action-click" >
                <h1 class="c-heading heading_6Bjcro"><a @click="jump(data.web_url)">进入主页</a></h1>
              </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 c-column column_PITz90">
              <div class="c-div cs-repeatable div_2wrISM">
                  <div class="c-div div_x27uqU wode"  v-for="(item,index) in this.data.coupon">
                      <div class="c-div div_VjbXVh wode">
                          <div class="row c-row row_le0dbL">
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_jKGCDi wode">
                                  <h1 class="c-heading heading_Wi6xhy wode" v-show="item.type == 1">折扣券</h1>
                                  <h1 class="c-heading heading_Wi6xhy wode manjian " v-show="item.type == 0">满减券</h1>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_wOc8K3 wode">
                                  <h1 class="c-heading heading_o0nVub wode">{{item.name}}</h1>
                                  <h1 class="c-heading heading_j4aUpK wode">2018.10.12-2018.11.12</h1>
                              </div>
                          </div>
                      </div>
                      <div class="c-div div_8LVJIQ shiyong wode c-action-click" v-if="use_show" @click="showDialog(item.id)">
                          <h1 class="c-heading heading_UEZrXJ shiyong wode">去<div>使</div><div>用</div></h1>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      <!-- 弹出层 -->
      <!--<el-dialog
        title="优惠卷使用说明"
        :visible.sync="dialogFormVisible"
        append-to-body=true
        :before-close="handleClose">-->
      <el-dialog
        title="优惠卷使用说明"
        :visible.sync="dialogFormVisible"
        append-to-body=true>
        <span><div v-html="couponcol"></div></span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="userCouponFunc">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<style scoped>
  @media (max-width: 760px) {
    .el-dialog{
      width: 95% !important;
    }
  }
</style>
<style>
    .el-dialog{
      border-radius: 5px !important;
      width: 40% !important;
    }
    .el-dialog__headerbtn:hover{
      background-color: #ffb957;
      border-radius: 50%;
    }

    .el-dialog__headerbtn:hover .el-dialog__close{
      color: #ffffff;
    }

    .el-dialog__header{
      border-bottom:1px solid #efefef;
    }

    .el-dialog__body{
      line-height: 30px !important;
      font-size: 12px !important;
      color: #484848 !important;
    }

    .el-dialog__footer{
      margin: 0px;
      padding: 0px !important;
      width: 100% !important;
    }

    .el-button--primary{
      background-color: #009fa0 !important;
      border-color: #009fa0 !important;
      width: 100% !important;
      border-radius: 0px 0px 2px 2px !important;
    }

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
        font-family: "Microsoft YaHei", "Hiragino Sans GB", SimHei, STHeiti;
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
        color: rgb(89, 89, 89);
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

    .heading_Wi6xhy.manjian {
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/5653cb7999c172994171cdb229339f0a_origin.png);
    }
    .div_v60iAm.xiangqingye.wodeyouhuiquan {
        padding: 0px;
        margin-bottom: 10px;
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
        /*overflow: hidden;*/
    }

    .column_uyUjdj {
        width: 30%;
        padding-left: 0px;
        padding-right: 0px;
        min-height: auto;
        height: 260px;
        border-right: 1px solid rgb(239, 239, 239);
    }

    .div_bYIuDs {
        text-align: center;
        padding-top: 55px;
        height: auto;
        margin-top: 0px;
    }

    .image_Y5MjSi {
        width: 140px;
    }

    .c-image {
        height: auto;
        width: auto;
        max-width: 100%;
        display: inline-block;
    }

    .textlink_e6pE3X.daliebiao.wode {
        margin-bottom: 0px;
    }

    .textlink_e6pE3X.daliebiao {
        width: auto;
        height: auto;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 25px;
        letter-spacing: 0px;
        color: rgb(72, 72, 72);
        display: block;
        clear: both;
        margin-bottom: 10px;
    }
    .textlink_e6pE3X {
        font-size: 14px;
        float: none;
        clear: both;
        display: inline-block;
        padding-left: 0px;
        color: #6e6e6e;
    }
    .paragraph_XjkcYS {
        width: auto;
        height: auto;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 0px;
        color: rgb(111, 111, 111);
        -webkit-line-clamp: 2;
    }

    .c-ellipse {
        text-overflow: ellipsis;
        /*display: -webkit-box;*/
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .div_m9HjXA {
        min-height: auto;
        height: 40px;
        margin-top: auto;
        margin-bottom: 0px;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        border-top: 1px solid rgb(239, 239, 239);
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .div_m9HjXA:hover{
      background-color: #ffb957;
    }

    .div_m9HjXA:hover a{
      color: #ffffff;
    }

    .div_m9HjXA:hover .heading_6Bjcro{
      background-image: url('../../assets/img/icon2.png');
    }

    .c-action-click {
        cursor: pointer;
    }
    .column_PITz90 {
        width: 70%;
        height: 260px;
    }

    .heading_6Bjcro {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgb(89, 89, 89);
        opacity: 0.6;
        text-align: center;
        margin: 0px auto;
        background-image: url('../../assets/img/icon1.png');
        background-repeat: no-repeat;
        background-position: 0% 50%;
        padding-left: 19px;
    }

    .div_2wrISM {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        padding-top: 25px;
    }

    .div_VjbXVh.wode {
        width: 236px;
        height: 84px;
    }

    .div_VjbXVh {
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/0e52d0b536f59acad95f7bf979957a5b_origin.png);
        background-repeat: no-repeat;
        width: 350px;
        height: 125px;
        min-height: auto;
        background-position: 50% 50%;
        background-size: cover;
    }

    .row_le0dbL {
        height: 100%;
        min-height: auto;
    }

    .column_jKGCDi.wode {
        width: 37%;
    }

    .column_jKGCDi {
        height: 100%;
        width: 40%;
        padding-right: 0px;
        min-height: auto;
    }

    .heading_Wi6xhy.wode {
        width: 70px;
        font-size: 14px;
    }

    .heading_Wi6xhy {
        font-size: 20px;
        color: rgb(255, 255, 255);
        text-align: center;
        width: 112px;
        height: 59px;
        margin: auto 0px auto auto;
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/c9c528b2f235c0fb447aceeb7deb2dab_origin.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        position: absolute;
    }

    .column_wOc8K3.wode {
        padding-left: 8px;
        padding-right: 5px;
        width: 63%;
    }

    .column_wOc8K3 {
        height: 100%;
        width: 60%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding-left: 15px;
        min-height: auto;
    }

    .heading_o0nVub.wode {
        font-size: 14px;
    }

    .heading_o0nVub {
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        /*line-height: auto;*/
        letter-spacing: 0px;
        color: rgb(199, 140, 0);
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .div_8LVJIQ.shiyong.wode {
        height: 84px;
        width: 55px;
    }
    .div_8LVJIQ.wode {
        width: 47px;
        height: 73px;
        background-size: contain;
    }
    .div_8LVJIQ.shiyong {
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/8f289e51d91203051959b87b198bb441_origin.png);
        opacity: 1;
    }
    .div_8LVJIQ {
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/fd8c760944e7626e6a5d2f024b8210f1_origin.png);
        background-repeat: no-repeat;
        width: 81px;
        height: 125px;
        min-height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        opacity: 0.6;
        background-size: contain;
    }

    .heading_UEZrXJ.wode {
        font-size: 12px;
    }
    .heading_UEZrXJ.shiyong {
        color: #009fa0;
    }
    .heading_UEZrXJ {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 3px;
        color: rgb(255, 255, 255);
        margin-top: 0px;
        margin-bottom: 0px;
        line-height: 1.2em;
        text-align: center;
    }

    .div_x27uqU.wode {
        height: 84px;
        width: 290px;
    }

    .div_x27uqU {
        width: 431px;
        height: 125px;
        min-height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-right: 10px;
        margin-left: 10px;
        margin-bottom: 28px;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
    }

    .heading_j4aUpK.wode {
        font-size: 12px;
    }
    .heading_j4aUpK {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgb(111, 111, 111);
        opacity: 0.7;
        margin-bottom: 0px;
        margin-top: 8px;
    }
    @media (max-width: 767px){
        .div_v60iAm.xiangqingye {
            padding-left: 10px;
            padding-right: 10px;
        }
        .column_uyUjdj {
            width: 100%;
        }

        .textlink_e6pE3X.daliebiao {
            font-size: 16px;
            margin-top: 0px;
        }
        .paragraph_XjkcYS {
            font-size: 12px;
        }

        .div_m9HjXA {
            border-top-color: rgb(239, 239, 239);
            border-top-style: none;
            border-bottom: 1px solid rgb(239, 239, 239);
            border-bottom-color: rgba(239,239,239,1);
        }
        .column_PITz90 {
            width: 100%;
            height: auto;
            padding-left: 0;
        }


    }

    @media screen and (max-width: 1024px) and (min-width: 768px){



        .column_aLEhx8{
            width: 760px;
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                // isCollapse: true,
                userName:'',
                userProvice:'',
                userCity:'',
                userCollege:0,
                userActive:0,
                userNews:0,
                userCoupon:0,
                page:1,
                page_size:1,
                active:[],
                loading:false,
                disabled:false,
                loadingBtnText:'加载更多',
                dialogFormVisible:false,
                couponcol:'',
                couponId:0,
            };
        },
        methods: {
            userCouponFunc(){
                if(this.couponId){
                  var phone = this.getUserState("user");
                  let self = this;
                  this.post('/front/coupon/usecoupon',{
                    u_id:self.id,
                    c_id:self.couponId,
                    phone:phone
                  }).then(res=>{
                    if(res.code == 0){
                      this.message(true,"使用成功",'success')
                      this.$parent.pageInfo(0,0)
                    }else{
                      this.message(true,res.msg,'error')
                    }
                  })
                }
            },
            showDialog(id){
              // 获取优惠券使用说明
              this.fetch('/front/coupon/getCouponcol' , {id:id}).then((res)=>{
                if(res.code == 0){
                  this.couponcol = res.result;
                  this.couponId = id,
                    this.dialogFormVisible = true;
                }
              }).catch((error)=>{
                this.couponcol = '';
                this.couponId = 0,
                  console.log(error);
              });
            },
            jump(url){
                // alert(url);
                window.open(url);
            }
        },
        props: ["data","use_show","id"],
        mounted(){
          // console.log(this.data);
        }
    }
</script>

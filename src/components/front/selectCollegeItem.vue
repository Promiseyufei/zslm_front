<template>
    <div class="allInforma" @change="getViewIcon">
        <div class="c-div div_BMsaOd guanzhu" style="margin-bottom:30px;align-items:flex-end;">
            <div class="c-div div_ARD2As">
                <div class="c-inlineblock c-imageblock imageblock_VRWtPr" mode="scaleToFill" src="http://qty83k.creatby.com/materials/2771/origin/1f7fb8acff94af6f93a34de300842574_origin.png" style="background-size:  100% 100%; background-position:  0% 0%; background-repeat:  no-repeat; background-image: url(http://qty83k.creatby.com/materials/2771/origin/1f7fb8acff94af6f93a34de300842574_origin.png); ">
                </div>
                <div class="c-div div_mnG0wo">
                    <div class="c-div div_oLhlRV">
                        <h1 class="c-heading heading_IH2VnY" @click="goItemDetail">{{collegeInfo.z_name}}</h1>
                        <label class="c-label label_OVUgJH">{{collegeInfo.province}}</label>
                        <label class="c-label label_OVUgJH">{{collegeInfo.city}}</label>
                    </div>
                    <div class="c-div cs-repeatable div_sfz9WV">
                        <img class="c-image image_2pnGPP" v-show="equis" src="http://qty83k.creatby.com/materials/2771/origin/6dafa65ca7969bd1332d32af843573b4_origin.png">
                        <img class="c-image image_2pnGPP" v-show="aascb" src="http://qty83k.creatby.com/materials/2771/origin/a441ca693a7edd636e46d70f405471f2_origin.png">
                        <img class="c-image image_2pnGPP" v-show="two" src="http://qty83k.creatby.com/materials/2771/origin/4a927421d269514312c8e280be7c5f32_origin.png">
                        <img class="c-image image_2pnGPP" v-show="nine" src="http://qty83k.creatby.com/materials/2771/origin/70280919fb394c9c97e8f8c20eee6a31_origin.png">
                        <img class="c-image image_2pnGPP" v-show="both29" src="http://qty83k.creatby.com/materials/2771/origin/e8ecd15f5fdb4cd47b820a13ded104ff_origin.png">
                    </div>
                </div>
            </div>
            <div class="joinContrast"><el-button>+ 加入对比</el-button></div>
        </div>
        <div class="forThree">
            <div class="specificInform" v-for="(t,index) in collegeInfo.showProduct" :key="index">
                <p class="international">{{t.project_name}}</p>
                <div class="moneyType">
                    <div style="display:flex;align-items:center;margin:0 44px 0 0;">
                        <div style="margin:2px 0 0 0;"><img src="../../assets/img/smoney.png"></div>
                        <div style="margin:0 11px 0 8px;font-size: 14px;color: #6e6e6e;">学费</div>
                        <div style="font-size: 14px;color: #6e6e6e; font-weight: bold;">{{t.cost}}</div>
                    </div>
                    <div style="display:flex;align-items:center;">
                        <div style="margin:3px 0 0 0;"><img src="../../assets/img/class.png"></div>
                        <div style="margin:0 11px 0 8px;font-size: 14px;color: #6e6e6e;">授课语言</div>
                        <div style="font-size: 14px;color: #6e6e6e; font-weight: bold;">{{t.language}}</div>
                    </div>
                </div>
                <div style="display:flex;align-items:center;margin:15px 0;">
                        <div style="margin:2px 0 0 0;"><img src="../../assets/img/friends.png"></div>
                        <div style="margin:0 11px 0 8px;font-size: 14px;color: #6e6e6e;">招生名额</div>
                        <div style="font-size: 14px;color: #6e6e6e; font-weight: bold;">{{t.student_count}}</div>
                </div>
                <div style="display:flex;align-items:center;">
                        <div style="margin:2px 0 0 0;"><img src="../../assets/img/friends.png"></div>
                        <div style="margin:0 11px 0 8px;font-size: 14px;color: #6e6e6e;">班级情况</div>
                        <div style="font-size: 14px;color: #6e6e6e; font-weight: bold;">{{t.class_situation}}</div>
                </div>
            </div>
        </div>

        <div class="forThree" v-show="productShow">
            <div class="specificInform" v-for="(t,index) in collegeInfo.missPorduct" :key="index">
                <p class="international">{{t.project_name}}</p>
                <div class="moneyType">
                    <div style="display:flex;align-items:center;margin:0 44px 0 0;">
                        <div style="margin:2px 0 0 0;"><img src="../../assets/img/smoney.png"></div>
                        <div style="margin:0 11px 0 8px;font-size: 14px;color: #6e6e6e;">学费</div>
                        <div style="font-size: 14px;color: #6e6e6e; font-weight: bold;">{{t.cost}}</div>
                    </div>
                    <div style="display:flex;align-items:center;">
                        <div style="margin:3px 0 0 0;"><img src="../../assets/img/class.png"></div>
                        <div style="margin:0 11px 0 8px;font-size: 14px;color: #6e6e6e;">授课语言</div>
                        <div style="font-size: 14px;color: #6e6e6e; font-weight: bold;">{{t.language}}</div>
                    </div>
                </div>
                <div style="display:flex;align-items:center;margin:15px 0;">
                    <div style="margin:2px 0 0 0;"><img src="../../assets/img/friends.png"></div>
                    <div style="margin:0 11px 0 8px;font-size: 14px;color: #6e6e6e;">招生名额</div>
                    <div style="font-size: 14px;color: #6e6e6e; font-weight: bold;">{{t.student_count}}</div>
                </div>
                <div style="display:flex;align-items:center;">
                    <div style="margin:2px 0 0 0;"><img src="../../assets/img/friends.png"></div>
                    <div style="margin:0 11px 0 8px;font-size: 14px;color: #6e6e6e;">班级情况</div>
                    <div style="font-size: 14px;color: #6e6e6e; font-weight: bold;">{{t.class_situation}}</div>
                </div>
            </div>

        </div>
        <div class="viewMore" v-show="viewMoreIcon">
            <div class="updateInform">信息更新时间：{{update_time}}</div>
            <div class="moreInform" @click="viewMore">{{viewMoreButt}}<span><i class="el-icon-caret-bottom" id="moreButton"></i></span></div>
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
            /*按钮参数*/
            viewMoreIcon:true,
            productShow:false,
            viewMoreButt:'查看更多项目',
            majorInform:[],
            nature:null,
            equis:true,
            aascb:false,
            //211
            two:false,
            //985
            nine:false,
            //双一流
            both29:false,
            moreMajor:false,
            update_time:1996,
            }
        },
        methods: {
            //跳到单个院校
            goItemDetail:function(){
                let id = this.collegeInfo.id;
                console.log(id)
                this.$router.push({
                            path:'/front/firstMenuRouter/selectCollege/singleCollage/'+id
                        });
            },
            //子向父传参
            getViewIcon:function(a){
                this.$emit('getViewIcon',this.viewMoreIcon)
            },
            //加载更多院校信息
            viewMore:function(index) {
                if (!this.productShow) {
                    //改变字体及icon名字
                    this.productShow = true;
                    this.viewMoreButt = '收起';
                    $("#moreButton").attr("class","el-icon-caret-top")
                } else {
                    this.productShow = false;
                    //改变字体及icon名字
                    this.viewMoreButt = '查看更多项目';
                    $("#moreButton").attr("class","el-icon-caret-bottom")
                }
            },
        },
        props:["collegeInfo","followId","confirmId","missPorduct"],//需要传一个数组
        mounted() {
            // this.goItemDetail();
            // console.log(this.missPorduct);
            //是否显示查看更多
            if (this.collegeInfo.missPorduct.length==0) {
                // console.log(this.missPorduct)
                this.viewMoreIcon = false;
            };
            //向父组件传参数
            this.getViewIcon();
            // 院校性质标签是否显示
            if(this.followId == '原985')
                this.nine= true;
            else if(this.followId=='原211')
                this.two = true;
            else
                this.both29 = true;
            if (this.confirmId=='AASCB') {
                this.aascb = true;
            } else {
                this.equis = true;
            }
        }

    }
</script>
<style>
    
</style>

<style scoped>
    /*不同院校——院校信息*/
        .moreInform:hover {
            color: #009fa0;
            cursor: pointer;
        }
        .moreInform {
            color: #a4a4a4;
        }
        .viewMore {
            width: 1220px;
            padding: 0 5px 0 10px;
            display: flex;
            justify-content:space-between;
            font-size: 12px;
            color: #a4a4a4;
        }
        .allInforma {
            margin-bottom: 40px;
            border-bottom: 1px solid #efefef;
            padding-bottom: 40px;
        }
        .moneyType p {
            height: 21px;
            line-height: 21px;
        }
        .forThree {
            display: flex;
            flex-wrap:wrap;
            margin-left: 5px;
        }
        .moneyType p,.state,.interval {
            font-size: 14px;
            color: #6e6e6e;
        }
        .interval {
            margin: 10px 0 10px 0;
        }
        .money {
            margin: 0 44px 0 11px;
        }
        .bold {
            margin-left: 18px;
        }
        .type {
            margin-left: 14px;
        }
        .money,.type,.bold {
            font-size: 14px;
            font-weight: bold;
            color: #6e6e6e;
        }
        .international {
            height: 19px;
            margin-bottom: 21px;
            font-size: 18px;
            color: #009fa0;
        }
        .moneyType {
            display: flex;
        }
        .specificInform {
            width: 375px;
            padding: 30px 0 30px 25px;
            margin: 10px 5px;
            background-color: #f5f5f5;
            border-radius: 5px;
        }
        .forY {
            display: flex;
        }
        .collegeInform {
        }
        .diffeCollege {
            margin: 0 auto;
            width: 1280px;
        }
        .buttonCollege {
            width: 1280px;
            height: 2px;
            background-color: #009fa0;
            /*border: solid 3px #000000;*/
            opacity: 0.06;
            margin: 50px auto;
        }
        /*加入对比*/
        .joinContrast .el-button {
            width: 120px;
            height: 44px;
            border: 2px solid #0fa5a6;
            color: #0fa5a6;
            font-weight: bold;
        }
        .joinContrast .el-button:hover{
            color: #fff;
            background-color: #0fa5a6;
        }
    /** PC **/
    @media only screen and (min-width: 1024px) and (max-width:1300px) {
        .viewMore {
            width: 755px;
            margin: 0 auto;
        }
        .specificInform {
             width: 720px;
             /*margin: 0 0 10px 80px;*/
        }
        .forY,.forThree {
            /*flex-direction:column;*/
            /*justify-content:center;*/
            /*align-items:center;*/
        }
        .buttonCollege {
        }
        .diffeCollege {
            width: 90%;
            overflow:hidden;
        }

    }
    /** iPad **/
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .viewMore {
            width: 700px;
        }
        .specificInform,.threeSpecificInform {
            width: 658px;
            margin-right: 25px;
        }
        .forY,.forThree {
            /*flex-direction:column;*/
            /*justify-content:center;*/
        }
        .buttonCollege {
        }
        .diffeCollege {
            width: 100%;
            overflow:hidden;
        }
        .diffeCollege .el-col-8{
            width: 720px;
            overflow:hidden;
            margin-left: 20px;
        }

    }
    /** iPhone **/
    @media only screen and (min-width: 320px) and (max-width: 767px) {
        .updateInform {
            font-size: 12px;
        }
        .buttonCollege {
            margin:0 0 20px;
        }
        .selectCollegeSearch {
            margin: 20px 0 20px 0;
        }
        .selectCollege .el-input__inner {
            border-radius: 20px;
        }
        .buttonCollege {
            width: 90%；
        }
        .viewMore {
            width: 85%;
        }
        .teach {
            margin-top: 10px;
        }
        .moneyType {
            flex-direction: column;
        }
        .specificInform {
            margin: 0 auto 10px;
            width: 200px;
            height: 150px;
            padding: 30px 25px;
        }
        .diffeCollege .el-col-8 {
            width: 90%;
            margin-left: 20px;
        }
        .forY,.forThree {
            /*flex-direction:column;*/
            /*justify-content:center;*/

        }
        .diffeCollege {
            width: 100%;
        }
        
    }
    /*不同院校——院校信息*/

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

    .div_lPV1oN.guanzhu {
        border-bottom-style: none;
        border-top-style: none;
        border-right-style: none;
        border-left-style: none;
    }

    .div_lPV1oN {
        padding-top: 40px;
        margin-bottom: 0px;
        padding-bottom: 40px;
        border-bottom: 1px solid rgb(239, 239, 239);
        border-bottom-color: rgba(239,239,239,1);
    }

    .div_BMsaOd.guanzhu {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        margin-bottom: 0px;
    }

    .div_BMsaOd {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        margin-bottom: 30px;
        padding-right: 5px;
        padding-left: 5px;
    }

    .div_ARD2As {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .imageblock_VRWtPr {
        width: 106px;
        height: 106px;
    }
    .c-imageblock {
        width: 100px;
        height: 100px;
    }
    .c-inlineblock {
        display: inline-block;
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

    .button_LsM2yn123.quguan:hover {
        background-color: rgb(255, 185, 87);
        color: #ffffff;
        text-decoration: none;
    }


    .div_Sd6WRB {
        padding-left: 5px;
        padding-right: 5px;
        margin-left: 110px;
        min-height: auto;
        margin-top: 18px;
    }

    .div_PiRYSQ {
        min-height: auto;
        overflow: hidden;
        text-align: right;
        height: auto !important;
    }




    .c-action-click {
        cursor: pointer;
    }



    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: none;
    }

    .textlink_wzNM3e {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgb(160, 160, 160);
        width: auto;
        -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/2239e95017c6ccff0186655f567ba350_origin.png);
        background-repeat: no-repeat;
        background-position: 100% 50%;
        margin-top: 0px;
        padding-right: 16px;
        margin-left: 5px;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
    }

    .textlink_wzNM3e.dakai:hover {
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/c56a1af0e1b00b60d71d71b4734f9451_origin.png);
    }
    .textlink_wzNM3e:hover {
        color: rgb(0, 159, 160);
        text-decoration: none;
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/2522722074aff0dc287d117eba695003_origin.png);
    }
    .textlink_wzNM3e.dakai {
        background-image: url(http://qty83k.creatby.com/materials/2771/origin/7499076bd780b8c6275b2b3a1c63e607_origin.png);
        margin-left: 5px;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
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

    .div_mnG0wo {
        min-height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
    }

    .div_oLhlRV {
        min-height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .heading_IH2VnY {
        font-size: 26px;
        color: rgb(72, 72, 72);
        margin-top: 0px;
        margin-bottom: 0px;
        margin-right: 9px;
        line-height: 1em;
    }

    .label_OVUgJH {
        color: rgb(0, 159, 160);
        font-weight: normal;
        padding-left: 6px;
        padding-right: 6px;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        border-color: rgb(0, 159, 160);
        margin-left: 3px;
        margin-right: 3px;
        margin-bottom: 0px;
    }

    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
    }

    .label_OVUgJH {
        color: rgb(0, 159, 160);
        font-weight: normal;
        padding: 4px 8px;
        font-size: 14px;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        border-color: rgb(0, 159, 160);
        margin:0 3px;
    }

    .div_sfz9WV {
        min-height: auto;
        margin-top: 26px;
    }

    .div_PiRYSQ.c-state1 {
        height: auto;
    }

    .div_PiRYSQ {
        min-height: auto;
        overflow: hidden;
        text-align: right;
        height: 0px;
    }

    .row_EsvYjt.guanzhu {
        overflow: hidden;
        height: auto;
        min-height: auto;
    }

    .column_WvUK7W {
        padding-left: 5px;
        padding-right: 5px;
        margin-bottom: 10px;
    }

    .div_zpfJlh {
        background-color: rgb(245, 245, 245);
        border-radius: 5px;
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .heading_gviHAE {
        margin-top: 0px;
        margin-bottom: 21px;
        color: rgb(0, 159, 160);
        font-size: 18px;
        font-weight: bold;
        text-align: left;
    }
    .row_JUft7v {
        min-height: auto;
    }

    .column_mFWPbx {
        padding-left: 0px;
        padding-right: 0px;
        min-height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
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
    .column_UYw0gx {
        min-height: auto;
        padding-left: 0px;
        padding-right: 0px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
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
    .column_k5dtwn {
        padding-left: 5px;
        padding-right: 5px;
        margin-bottom: 10px;
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

        * {
            background-attachment: initial !important;
        }
        .buttonCollege {
            width: 90%；
        }
        .div_v60iAm {
            padding-left: 10px;
            padding-right: 10px;
        }

        .imageblock_VRWtPr {
            width: 108px;
            height: 108px;
        }

        .heading_IH2VnY {
            font-size: 18px;
            margin-bottom: 14px;
            width: 100%;
            text-align: center;
            margin-top: 17px;
        }

        .div_BMsaOd.guanzhu {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .div_oLhlRV {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        .div_ARD2As {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        .div_sfz9WV {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }
        .image_2pnGPP {
            margin-right: 5px;
            margin-bottom: 10px;
        }
        .div_Sd6WRB {
            margin-left: auto;
            margin-right: auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }
        .column_WvUK7W {
            margin-bottom: 10px;
        }
    }


    @media (min-width: 1200px) {

        .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
            float: left;
        }
        .col-lg-6 {
            width: 50%;
        }

    }


    @media (min-width: 992px) {

        .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
            float: left;
        }
        .col-md-6 {
            width: 50%;
        }
    }

    @media (min-width: 768px) {
        .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
            float: left;
        }

        .col-sm-6 {
            width: 50%;
        }

    }

    /*不同院校——图片信息*/



    .selectCollegeSearch {
        width: 407px;
        margin: 49px 0 44px;
    }
    .selectCollege {
        width: 1260px;
        margin: 0 auto;
    }
</style>

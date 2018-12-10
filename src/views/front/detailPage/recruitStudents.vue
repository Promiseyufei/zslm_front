<template>
    <div class="contentS">
        <div class="single-div-con">
            <div class="content-article-single">
                <div class="single-div-head">
                    <i id="home"></i>&nbsp;
                    <i>首页</i>
                    <label>></label>
                    <i>看资讯</i>
                    <label>></label>
                    <i class="text-article">招生简章</i>
                </div>
                <div class="title-head clearfloat">
                    <div class="float-left">
                        <a href="javaScript:void(0)" @click="allInformation">
                            全部年分
                        </a>
                        <a href="javaScript:void(0)" v-for="(item,index) in time" :key="index" class="time-a" @click="choiceTime(index)">
                            {{ item }}
                        </a>
                    </div>
                    <div class="float-right" @keyup.13="showInformation()">
                        <el-input
                                placeholder="请输入内容"
                                suffix-icon="el-icon-search"
                                v-model="search">
                        </el-input>
                    </div>
                </div>

                <div class="recruitContent clearfloat">
                    <div class="university" @click="studentInformation(index)" v-for="(item , index) in information" :key="index">
                        <div class="university-icon" @mouseover="overStyle(item,index)" @mouseout="outStyle(item,index)">
                            <img :src="item.magor_logo_name" alt="">
                        </div>
                        <div class="university-footer">
                            <div class="footer-font">
                                {{ item.z_name }}
                            </div>
                            <div class="tips">
                                点击打开招生简章&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="loadPage">
                    <pcPhonePage :currentPage="page" :totalData="pagecount" :size="pageSize" @use="usePage" @getPage="getPage"></pcPhonePage>
                </div>
            </div>
        </div>
        <el-dialog
                :title="title"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <div v-if="centerDialogVisible">
                <div class="title-span" v-for="(item,index) in information[number].ZSJZF" :key="index" @click="showPdf(item)">
                    <span>{{index+1}}</span>&nbsp;&nbsp;&nbsp;
                    <span>{{item.file_alt}}</span>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                time:[],
                search:'',
                centerDialogVisible: false,
                /*分页*/
                page:1,
                pageSize:8,
                pagecount:1,
                name:'',
                year:'',
                /*招生信息*/
                information:[],
                number:0,
                title:''
            }
        },
        methods: {
            getRecruit: function () {
                let _this = this;
                _this.fetch('/front/colleges/getmajorzsjz',{
                    page:_this.page,
                    page_size: _this.pageSize,
                    name:_this.name,
                    year:_this.year
                }).then(function (res) {
                    if (res.code == 0){
                        _this.information = res.result[0];
                        _this.pagecount = Math.ceil(res.result[1]/_this.pageSize);
                        console.log(res)
                    }else if(res.code == 1) {
                        _this.information = [];
                        _this.pagecount = 0;
                    }
                }).catch(function (error) {

                })
            },
            getYear: function () {
                let _this = this;
                _this.fetch('/front/colleges/getyear').then(function (res) {
                    if (res.code == 0){
                        _this.time = res.result;
                    }
                }).catch(function (error) {

                })
            },
            choiceTime: function (index) {
                $(".time-a").css("color","#6e6e6e");
                $(".time-a").css("font-weight","normal");
                $($(".time-a")[index]).css("color","#009fa0");
                $($(".time-a")[index]).css("font-weight","bolder");
                this.year = this.time[index];
                this.getRecruit();
            },
            overStyle: function (item,index) {
                $($(".university-icon")[index]).css("background-image","url("+item.major_cover_name+")");
            },
            outStyle: function (item,index) {
                $($(".university-icon")[index]).css("background-image","");
            },
            studentInformation: function (index) {
                this.number = index;
                this.title = "共"+this.information[index].ZSJZF.length+"则招生简章";
                this.centerDialogVisible = true;
            },
            showInformation:function () {
                this.name = this.search;
                this.getRecruit();
            },
            usePage:function (index) {
                this.page = index;
                this.getRecruit();
            },
            allInformation:function () {
                $(".time-a").css("color","#6e6e6e");
                $(".time-a").css("font-weight","normal");
                this.year = '';
                this.getRecruit();
            },
            getPage: function () {
                if ((this.page+1)>this.pagecount){
                    return ;

                }
                this.page++;
                this.getRecruit();
            },
            showPdf: function (item) {
                window.open('http://www.lishanlei.cn/storage/major_file/test.pdf');
//                window.location.href = "http://www.lishanlei.cn/storage/major_file/"+item.file_name;
            }
        },
        mounted:function () {
            this.getYear();
            this.getRecruit();
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
    .contentS{
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
    .title-head{
        margin-top: 59px;
        height: 40px;
        border-bottom: 1px solid #e7e7e7;
    }
    .float-left{
        float: left;
    }
    .float-right{
        float: right;
    }
    .float-left > a{
        font-family: MicrosoftYaHei-Bold;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #6e6e6e;
        text-decoration: none;
        display: inline-block;
        margin-right: 18px;
    }
    .float-left > a:first-child{
        color: #009fa0;
        font-weight: bolder;
        margin-right: 27px;
    }
    .recruitContent{
        width: 100%;
        margin-top: 20px;
    }
    .university{
        width: 305px;
        height: 305px;
        margin-right: 19px;
        border-radius: 10px;
        cursor: pointer;
        float: left;
        margin-top: 33px;
    }
    .university:nth-child(4n){
        margin-right: 0px;
    }
    .university-icon{
        width: 100%;
        height: 255px;
        background-color: #FFFFFF;
        text-align:center
    }
    .university-icon > img{
        width: 120px;
        height: 120px;
        margin-top: 93px;
    }
    .university-footer{
        width: 100%;
        height: 50px;
        background-color: #383b3d;
        border-radius: 0px 0px 5px 5px;
        opacity: 0.8;
    }
    .footer-font{
        width: 82%;
        font-family: MicrosoftYaHei-Bold;
        font-size: 19px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
        line-height: 50px;
        margin: auto;
    }
    .tips{
        width: 82%;
        font-family: MicrosoftYaHei-Bold;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 12px;
        letter-spacing: 0px;
        color: #fffffe;
        margin: auto;
        display: none;
    }
    .university:hover .university-icon{
        background-size: cover;
        height: 204px;
        transition: all 1s;
    }
    .university:hover img{
        margin-top: 45px;
        transition: all 1s;
    }
    .university:hover .tips{
        display: block;
        transition: all .5s;
    }
    .university:hover .university-footer{
        height: 101px;
        background-color: #ffb957;
        transition: all .5s;
    }
    .title-span span:first-child{
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: #ffb957;
        border-radius: 8px;
        text-align: center;
        line-height: 16px;
        color: #FFFFFF;
    }
    .title-span span:last-child{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: 0px;
        cursor: pointer;
    }
    .time-a{

    }
    .loadPage{
        width: 100%;
        height: 50px;
        margin-top: 20px;
    }
    @media (max-width: 991px){
        .single-div-con{
            width: 95%;
            margin: auto;
        }
        .content-article-single{
            width: 96%;
        }
        .float-left{
            width: 100%;
        }
        .float-right{
            float: left;
        }
        .university{
            width: 100%;
            float: none;
            margin: auto;
            margin-top: 31px;
        }
        .title-head{
            height: 79px;
        }


    }
</style>
<style>
    .float-right .el-input__inner{
        border-radius: 23px;
        width: 307px;
        height: 30px;
    }
    .float-right .el-input__icon{
        line-height: 29px;
    }
    .float-left .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 0;
        font-weight: bold;
    }
    .float-left .el-menu--horizontal>.el-menu-item {
        font-size: 16px;
        cursor: pointer;
        padding: 0 20px;
        height: 11px;
        line-height: 11px;
        color: #009fa0;
        background-color: #f5f5f5;
    }
    .float-left .el-menu--horizontal {
        border-bottom: 0;
    }
    .float-left .el-menu{
        background-color: #f5f5f5;
    }
    .float-left .el-menu--horizontal{
        display: inline-block;
    }
    @media (max-width: 991px){
        .contentS .el-dialog{
            width: 89% !important;
        }

    }
</style>
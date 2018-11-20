<template>
    <div>
        <div class="content-whole">
            <div class="content-whole-article">
                <div class="content-head clearfloat">
                    <div class="head-left">
                        <img src="../../assets/img/personal.jpg" alt="未加载">
                    </div>
                    <div class="head-right">
                        <h1 class="head-title">
                            浙江：这里产浙商，也教你经商︱浙江MBA项目分析
                        </h1>
                        <p class="head-paragraph">
                            当代浙商的闻名，不仅仅是因为这片土地孕育了马云、丁磊、杨元庆、宗庆后等知名企业家。更因为浙商血液里流淌着创业经营的基
                        </p>
                        <div class="icon-head">
                            <i class="fa fa-calendar position">
                                2018.8.31
                            </i>
                            <i class="fa fa-paper-plane">
                                专硕联盟
                            </i>
                        </div>
                        <div class="button">
                            <homeBtn class="homeBtn" text="查看详情"></homeBtn>
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

            }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<style scoped>
    .content-whole{
        width: 100%;
        background-color: #ffffff;
    }
    .content-whole:hover{
        box-shadow:rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
        -webkit-transition: All 0.3s ease;
        -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
        transform: rotate(0deg) scale(1) translate(0%,0%);
        transition: All 0.3s ease;
    }
    .content-whole-article{
        margin: 25px;
    }
    .content-head{
        width: 100%;
        padding-top: 25px;
        padding-bottom: 25px;
        margin-bottom: 20px;
    }
    .head-left{
        float: left;
        width: 437px;
    }
    .head-left > img{
        width: 100%;
    }
    .head-right{
        float: right;
        height: 316px;
        width: 418px;
    }
    .clearfloat:after{
        display:block;
        clear:both;content:"";
        visibility:hidden;
        height:0
    }
    .head-title{
        height: 58px;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: 0px;
        margin-bottom: 30px;
        color: rgb(0, 159, 160);
    }
    .head-paragraph{
        height: 93px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 0px;
        color: #6f6f6f;
    }
    .icon-head>i{
        color: #383b3d;
        opacity: 0.7;
        font-size: 14px;
    }
    .icon-head > .position{
        margin-right: 27px;
    }
</style>

<style>

</style>
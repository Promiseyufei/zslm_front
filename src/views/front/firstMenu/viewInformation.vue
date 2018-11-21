<template>
    <div>
        <div class="sowingMap">
            <el-carousel trigger="click" :height="myWidth" class="sowingContent" :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content">
            <div class="float-left">
                <div class="navigation">
                    <!--<ul>-->
                        <!--<li><a href="">ALL</a></li>-->
                        <!--<li><a href="">MBA分析</a></li>-->
                        <!--<li><a href="">MBA招生</a></li>-->
                        <!--<li><a href="">MBA备考</a></li>-->
                        <!--<li><a href="">MBA词典</a></li>-->
                        <!--<li><a href="">行业报告</a></li>-->
                    <!--</ul>-->
                </div>

                <div class="article-cont">
                    <mbaArticle></mbaArticle>
                </div>
            </div>
            <!--右边的的文章-->
            <div class="float-right">
                <Article :inforArticle="information"></Article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
//    import
    components: {
    },
    data() {
        return {
            myWidth: window.innerWidth>767? 440+"px": window.innerWidth*(440/1280)+"px",
            information:[
                {
                    title:"2018年度北京地区MBA招生项目分析报告",
                    time: "2014.12.18",
                    img:"../../assets/img/picture.jpg"
                },
                {
                    title:"2018年度北京地区MBA招生项目分析报告",
                    time: "2014.12.18",
                    img:"../../assets/img/picture.jpg"
                },
                {
                    title:"2018年度北京地区MBA招生项目分析报告",
                    time: "2014.12.18",
                    img:"../../assets/img/picture.jpg"
                },
                {
                    title:"2018年度北京地区MBA招生项目分析报告",
                    time: "2014.12.18",
                    img:"../../assets/img/picture.jpg"
                },
            ]
        }
    },
    methods: {

    },
    mounted(){

    },
};
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .sowingMap{
        width: 1280px;
        margin: auto;
        margin-top: 30px;
    }
    .content{
        margin: auto;
        margin-top: 29px;
        width: 1280px;
    }
    .float-left{
        float: left;
        width: 955px;
    }
    .navigation{
        width: 100%;
        margin-top: 0px;
        height: 64px;
        background-color: #ffffff;
        border-radius: 5px;
    }
    .float-right{
        float: right;
        width: 305px;
    }
    #article-cont{
        width: 100%;
        margin-top: 11px;
    }
    @media (max-width: 991px){
        .content{
            width: 95%;
        }
        .float-left{
            width: 100%;
        }
        .float-right{
            margin-top: 25px    ;
            width: 100%;
        }
        .sowingMap{
            width: 100%;
        }
    }
</style>

<style>
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
</style>
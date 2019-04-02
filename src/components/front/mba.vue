<template>
    <div>
        <div class="content-whole">
            <div class="content-whole-article">
                <div class="content-head clearfloat" v-for="(item, index) in headArticle" :key="index">
                    <div class="head-left">
                            <img :src="item.z_image" alt="未加载">
                    </div>
                    <div class="head-right">
                        <h1 class="head-title">
                            {{ item.zx_name }}
                        </h1>
                        <p class="head-paragraph">
                            {{ item.brief_introduction }}
                        </p>
                        <div class="icon-head">
                            <i class="fa fa-calendar position">
                                {{ item.create_time }}
                            </i>
                            <i class="fa fa-paper-plane">
                                <!--{{ item.publisher }}-->
                                MBA&#12288;Helper
                            </i>
                        </div>
                        <div class="button" @click="jump(item.id)">
                            <homeBtn class="botton-style" text="查看详情"></homeBtn>
                        </div>
                    </div>
                </div>

                <div class="content-son" v-for="(item,index) in shortArticles">
                    <div class="article-con-posiion clearfloat" @click="jumpArticle(item.id)">
                        <div class="son-left">
                            <img :src="item.z_image" alt="未加载">
                        </div>
                        <div class="son-right">
                            <div>
                                <h1 class="son-title">
                                    {{ item.zx_name }}
                                </h1>
                                <p class="head-paragraph">
                                    {{ item.brief_introduction }}
                                </p>
                                <div class="icon-head">
                                    <i class="fa fa-calendar position">
                                        {{ item.create_time }}
                                    </i>
                                    <i class="fa fa-paper-plane">
                                        <!--{{ item.publisher }}-->
                                        MBA&#12288;Helper
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="button-div" v-if="mbatitle == 1">
                    <a @click="addAtricle" class="load-button">加载更多</a>
                </div>
                <div class="button-div" v-else>
                    <a @click="addAtricle" id="complete-page">--------------已加载完成--------------</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                mbaHead:this.headArticle,
                mbaShort:this.shortArticles,
                mbaTitle:this.mbatitle
            }
        },
        methods:{
            addAtricle:function () {
                this.mbaHead=this.headArticle;
                this.mbaShort=this.shortArticles;
                this.mbaTitle=this.mbatitle;
                this.$emit('addAtricle');
            },
            jump: function (id) {
                this.$emit('jumpContent',{id:id});
            },
            jumpArticle: function (id) {
                this.$emit('jumpArticle',{id:id});
            },
        },
        props:["headArticle","shortArticles","mbatitle"],
        mounted(){
            console.log(this.mbaTitle);
        }
    }
</script>

<style scoped>
    #complete-page{
        text-align: center;
        color: #c0c4cc;
        display: block;
        width: 100%;
        height: 100%;
    }
    a{
        cursor: pointer;
        cursor: hand;
    }
    .content-whole{
        width: 100%;
        background-color: #ffffff;
        padding-bottom: 44px;
        border-radius: 5px;
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
        position: relative;
    }
    .clearfloat::after{
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
        opacity: 0.6;
        font-size: 14px;
    }
    .icon-head > .position{
        margin-right: 27px;
    }
    .button{
        position: absolute;
        z-index: 0;
        bottom: 8px;
        left: 0px;
    }
    .content-son{
        display:flex;
        align-items:center;
        height: 219px;
        border-top: 1px solid rgb(239, 239, 239);
        cursor:hand;
        cursor:pointer;
    }
    .article-con-posiion{
        width: 100%;
    }
    .son-left{
        width: 188px;
        margin-bottom: 17px;
    }
    .son-left > img {
        width: 100%;
        height: 140px;
        border-radius: 3px;
        float: left;
    }
    .son-right{
        height: 140px;
        width: 74%;
        float: right;
        display: inline-block;

    }
    .son-title{
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 25px;
        letter-spacing: 0px;
        color: rgb(72, 72, 72);
    }
    .load-button{
        display: block;
        border-radius: 3px;
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        border: solid 1px #bfbfbf;
        text-align: center;
        line-height: 62px;
    }
    .load-button:hover{
        background-color: rgb(255, 185, 87);
        color: #ffffff;
    }
    .button-div{
        width: 100%;
        height: 62px;
        margin-top: 64px;

    }
    .button-div > a{
        font-family: MicrosoftYaHei;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #6e6e6e;
        text-decoration: none;
    }
    @media (max-width: 991px){
        .head-left{
            width: 100%;
            margin-bottom: 16px;
        }
        .head-right{
            width: 100%;
            height: 291px;
        }
        .content-son{
            height: auto;
            padding-top: 20px;
            padding-bottom: 20px;
        }
        .son-left{
            width: 100%;
        }
        .son-right{
            width: 100%;
            height: auto;
        }
        .son-left > img{
            margin-bottom: 17px;
        }
    }

  @media (max-width: 767px) {
    .content-whole-article{
      margin: 25px 10px;
    }

    .head-left > img{
      border-radius: 5px;
    }

    .head-paragraph{
      height: auto;
      font-size: 12px;
      color: rgb(111, 111, 111);
    }

    .head-title{
      height: auto;
      margin-bottom: 18px;
      font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
    }

    .icon-head{
      margin-top: 19px;
    }

    .button{
      margin-top: 37px;
      margin-left: 0px;
      margin-right: auto;
      position: relative;
      z-index: 0;
      bottom: 0px;
      left: 0px;
      width: 160px;
    }

    .head-right{
      height: auto;
    }

    .content-head{
      padding-bottom: 0px;
    }
  }
</style>

<style>

</style>

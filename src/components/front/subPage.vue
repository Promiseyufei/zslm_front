<template>
    <!--看咨询的列表-->
    <div>
        <div class="content-whole">
            <div class="content-whole-article">
                <div class="content-son" v-for="(item, index) in shortArticles" :key="index">
                    <div class="article-con-posiion clearfloat" @click="detail(item.id)">
                        <div class="son-left">
                            <img :src="item.img" alt="未加载">
                        </div>
                        <div class="son-right">
                            <div>
                                <h1 class="son-title">
                                    {{ item.title }}
                                </h1>
                                <p class="head-paragraph" v-html="item.content">
                                    <!-- {{ item.content }} -->
                                </p>
                                <div class="icon-head" style="margin-top: 10px;color:#6f6f6f;">
                                    <i class="fa fa-calendar position"></i>{{ item.time }}
                                    <!--<i class="fa fa-paper-plane position" style="margin-left: 10px;"></i>{{ item.author }}-->
                                    <i class="fa fa-paper-plane position" style="margin-left: 10px;"></i>MBA&#12288;Helper
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:["shortArticles"],
        data(){
            return{
                // mbaShort:this.shortArticles
            }
        },
        methods:{
            detail(id) {
                // console.log(id)
                this.$emit('detail', id);
            }
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
    .content-whole-article{
        margin-right: 25px;
        margin-left: 25px;
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
    .clearfloat::after{
        display:block;
        clear:both;content:"";
        visibility:hidden;
        height:0
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
    .head-paragraph{
        /*height: 93px;*/
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 0px;
        color: #6f6f6f;
    }
    icon-head{
      margin-top: 10px;
    }
    .icon-head>i{
        color: #383b3d;
        opacity: 0.6;
        font-size: 14px;
    }
    .icon-head > .position{
        margin-right: 10px;
    }
    @media (max-width: 991px){
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
      margin-right: 0px;
      margin-left: 0px;
    }

  }
</style>

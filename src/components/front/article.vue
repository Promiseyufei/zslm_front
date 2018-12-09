<template>
    <div>
        <!--大兄弟组建完成-->
        <div class="artile-content">
            <div id="content">
                <div id="head-choiced">
                    <div id="head-left">
                        {{ titles }}
                    </div>
                    <div id="head-right" @click="refresh">
                        <a>
                            <i class="fa fa-repeat">&nbsp;换一换</i>
                        </a>
                    </div>
                </div>
                <div class="content-article" v-for="(item,index) in infor" :key="index">
                    <div id="title-article" @click="jump(item.id)">
                        <div class="font-style"><a href="">{{ item.zx_name }}</a></div>
                        <div class="time">{{ item.create_time }}</div>
                    </div>
                    <div id="picture">
                        <img :src="item.z_image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                infor: this.inforArticle,
                titles: this.title
            }
        },
        props:["inforArticle","title"],
        methods:{
            /*
            * 刷新页面
            * */
            refresh: function () {
                this.$emit('refreshs');
            },
            /*
            * 跳转页面
            * */
            jump:function (id) {
                this.$emit('jump',{id:id});
            },
        },

        mounted(){
          
        }
    }
</script>

<style>

</style>

<style scoped>
    a{
        cursor: pointer;
    }
    .artile-content{
        border-radius: 5px;
        background-color: #ffffff;
        overflow: hidden;
        padding: 10px auto;
        border-radius: 5px;
    }
    #content{
        margin: auto;
        width: 82%;
    }
    #head-choiced{
        width: 100%;
        height: 51px;
        padding-top: 10px ;
    }
    #head-left{
        float: left;
        font-family: MicrosoftYaHei-Bold;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        color: rgb(110, 110, 110);

    }
    #head-right{
        float: right;
    }
    #head-left{
        line-height: 61px;
    }
    #head-right{
        line-height: 28px;
    }
    #head-right > a{
        color: #009fa0;
        font-family: MicrosoftYaHei-Bold;
        width: 89px;
        height: 28px;
        display: block;
        text-align: center;
        border-radius: 3px;
        margin-top: 18px;
    }
    #head-right > a:hover{
        color: rgb(255, 255, 255);
        background-color: rgb(255, 185, 87);
    }
    #head-right > a >[class*=" el-icon-"], [class^=el-icon-]{
        font-family: MicrosoftYaHei-Bold;
        font-size: 15px;
    }
    .content-article{
        display:flex;
        justify-content: space-between;
        align-items:center;
        width: 100%;
        height: 100px;
        cursor:hand;
        cursor:pointer;
        border-top: 1px solid rgb(239, 239, 239);
    }
    #picture{
        width: 70px;
        height: 70px;
        border-radius: 5px;
        overflow: hidden;
        display: inline-block;
    }
    #picture > img{
        width: 100%;
        height: 100%;
    }
    #title-article{
        display: inline-block;
        height: 70px;
        width: 66%;
    }
    #title-article a{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 19.3px;
        letter-spacing: 0px;
        text-decoration: none;
        color: #6e6e6e;
    }
    #title-article a:hover{
        color: #2a6496;
    }
    .time{
        text-align: left;
        padding-top: 6px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #6e6e6e;
        opacity: 0.5;
    }
    .artile-content:hover{
        box-shadow:rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
        -webkit-transition: All 0.3s ease;
        -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
        transform: rotate(0deg) scale(1) translate(0%,0%);
        transition: All 0.3s ease;
    }
    .font-style{
        text-align: left;
    }
    @media (max-width: 991px){
        .artile-content{
            width: 100%;
        }
    }
</style>

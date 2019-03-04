<template>
	<!-- 用户条款 -->
    <div class="bodyBox">
    	<body>
    	   	<staticNav :state="state"></staticNav>
            <div class="content">
                <div class="title">
                    <p>用户条款</p>
                </div>
                <article>
                    <img src="../../../assets/img/staticLogo.png">
                    <p>暂无信息。</p>
                </article>
            </div>
    	</body>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            state:1,
        }
    },
    methods: {

    },
    mounted(){

    },
};
</script>

<style>

</style>
<style scoped>
    .bodyBox,body,.content,.content article{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .bodyBox{
        width: 100%;
        /*padding-top: 59px;*/
        /*padding-bottom: 197px;*/
        /*padding-top: 3.89%;
        padding-bottom: 12.97%;*/
        background-color: rgb(245, 245, 245);
        font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
        font-size: 12px;
    }
    .bodyBox body{
        margin-top: 3.89%;
        margin-bottom: 12.97%;
        width: 1280px;
        align-items: flex-start;
    }
    body .content{
        background-color: #fff;
        border-radius: 5px;
        margin-left: 20px;
        width: 74.6%;
    }
    .content .title{
        width: 94.4%;
        /*padding-left: 26px;*/
        padding-top: 28px;
        padding-bottom: 20px;
        border-bottom: 1px solid #efefef;
    }
    .title p{
        font-size: 18px;
        color: #009fa0;
    }

    .content article{
        margin-top: 20px;
        margin-bottom: 53px;
    }
    .content article img{
        width: 92%;
    }
    .content article p{
        margin-top: 29px;
        font-size: 16px;
        color: #6e6e6e;
        width: 92%;
        line-height: 29px;
    }

    /*手机端样式*/
    @media only screen and (max-width: 1024px) {
        body .content{
            margin: 20px 0 0 0;
            width: 95%;
        }
        body>div{
            width: 95%;
        }
    }

</style>

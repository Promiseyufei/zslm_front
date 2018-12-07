<template> 
	<!-- 用户条款 -->
    <div class="bodyBox">
    	<body>
    	   	<staticNav :state="state"></staticNav>
            <div class="content">
                <div class="title">
                    <p>法律声明</p>
                </div>
                <article>
                    <!-- <img src="../../../assets/img/staticLogo.png"> -->
                    <p>2017年中国城市GDP排名发布，上海以30133亿元位列中国城市第一位，卫冕榜单冠军，成为中国第一个GDP总量超3万亿的城市。GDP在亚洲城市排第二位，仅次于日本东京。</p>
                    <p>上海住户存款总额和人均住户存款均居全国第二。2017年，上海高新技术企业总数达到7642家， 位列福布斯2017年"中国大陆最佳商业城市排行榜”第一位。</p>
                    <p>在教育资源方面，2017年，全国共有普通高校2914所，上海有78所，约占总数的2.68%。全国的243所MBA高校共有250个办学主体，上海地区有16个，显著高于全国省均MBA办学主体数量8.3个，地区MBA办学主体数占全国总数的6.4%，排名全国第3。</p>
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
            state:3,
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
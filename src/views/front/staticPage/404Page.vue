<template>
	<!-- 404页面 -->
    <div class="bodyBox">
    	<body>
    		<div class="mainBody">
    			<div class="returnIndex">
    				<a @click="toIndex" href="javascript:0;">返回首页
    					<img src="../../../assets/img/arrow.png">
    				</a>
    			</div>
    			<img src="../../../assets/img/404.png">
    			<!-- 四个大的按钮 -->
                <div class="indexBigBlock">
                    <div @click = "toJump(1)"><img src="../../../assets/img/college.png" alt=""><p>选院校</p></div>
                    <div @click = "toJump(2)"><img src="../../../assets/img/activity.png" alt=""><p>找活动</p></div>
                    <div @click = "toJump(3)"><img src="../../../assets/img/information.png" alt=""><p>看资讯</p></div>
                    <div @click = "toJump(4)"><img src="../../../assets/img/coach.png" alt=""><p>搜辅导</p></div>
                </div>
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
        }
    },
    methods: {
    	//跳到相应的模块，分别为（选校校，找活动，找资讯，搜辅导）
        toJump: function(index) {
            switch(index){
                case 1:   this.$router.push('/front/firstMenuRouter/selectCollege'); break;
                case 2:   this.$router.push('/front/firstMenuRouter/lookActivity'); break;
                case 3:   this.$router.push('/front/firstMenuRouter/viewInformation'); break;
                default:  this.$router.push('/front/firstMenuRouter/searchCoach'); break;
            };
        },
        toIndex:function(){
            this.$router.push('/front/firstMenuRouter/index');
        }
    },
    mounted(){
        // let height = $(window).height()-63.1;
        // $('.bodyBox').height(height);
    },
};
</script>

<style>

</style>
<style scoped>
	
	.bodyBox,.returnIndex,.indexBigBlock{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.bodyBox{
		width: 100%;
		/*padding-top: 2%;
		padding-bottom: 3.5%;*/
		background-color: rgb(245, 245, 245);
        font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
        font-size: 12px;
	}
	body{
        margin-top: 2%;
        margin-bottom: 3.5%;
		width: 1280px;
		background-color: #fff;
		text-align: center;
	}
	.mainBody>img{
		margin-top: 6.2%;
    	margin-bottom: 7.7%;
	}
	/*返回首页*/
	.returnIndex{
		margin-top: 2.5%;
	    justify-content: flex-end;
	    margin-right: 38px;
	}
	.returnIndex>a{
		text-decoration: none;
		color: #009fa0;
		/*font-size: 12px;*/
		min-width: 77px;
	}
	.returnIndex>a img{
		margin-left: 5px;
	}

	/*四个小块块*/
	.indexBigBlock {
		margin-bottom: 8.2%;
        cursor: pointer;
    }
    .indexBigBlock>div {
        /*margin: 0 9px 0 0;*/
        margin-left: 4px;
        margin-right: 4px;
        margin-bottom: 5px;
        padding: 16px 26px 12px 26px;
        background-color: rgba(245, 245, 245, .3);
        text-align: center;
        border-radius: 5px;
    }
    .indexBigBlock img {
        width: 32px;
        height: 35px;
        margin: 0 auto;
    }
    .indexBigBlock p {
        color: #a5a5a5;
    	margin-top: 11.4px;
    }

    @media only screen and (max-width: 991px) {
    	.mainBody>img{
    		width: 90%;
    	}
    	body{
    		width: 100%;
    	}
        .indexBigBlock{
            font-size: 10px;
            /*flex-wrap: nowrap;*/
        }
    }

    @media only screen and (max-width: 360px) {
		.indexBigBlock>div {
	        padding: 16px 20px 12px 20px;
		}
    }
</style>
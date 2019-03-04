<template>
	<!-- 单个活动块————使用方式 -->
    <!-- <activityBox v-for="(item,index) in info"  :key="index" :activityInfo="item"></activityBox> -->

	<!-- 单个活动块 -->
    <div class="activityBox" @click="jump" v-show="activityInfo.active_name != ''">
	    <div>
	        <!-- 头部图片及状态 -->
	        <div class="activityImg" v-if="activityInfo.active_img" :style="{ backgroundImage: 'url(' + activityInfo.active_img + ')' }">
	            <p v-if="activityInfo.start_state==0">{{state}}</p>
	            <p v-else :class="activityInfo.start_state==1?'activityState1':'activityState2' ">{{state}}</p>
	        </div>
	        <div class="activityImg" v-else>
	            <p v-if="activityInfo.start_state==0">{{state}}</p>
	            <p v-else :class="activityInfo.start_state==1?'activityState1':'activityState2' ">{{state}}</p>
	        </div>
	        <!-- 中间活动内容：标题、地址、时间 -->
	        <div class="activityDetail">
	            <div class="activityTitle">
	                <p v-if="activityInfo.start_state==2" style="color: #b1b1b1;">{{activityInfo.active_name}}</p>
	                <p v-else>{{activityInfo.active_name}}</p>
	            </div>
	            <div class="activityAddressTime">
	                <div class="activityAddress">
	                    <img src="../../assets/img/position.png">
	                    <span>{{activityInfo.province.province}}</span>
	                </div>
	                <div class="activityTime">
	                    <img src="../../assets/img/calendar.png">
	                    <span>{{activityInfo.begin_time}}~{{activityInfo.end_time}}</span>
	                </div>
	            </div>
	        </div>
	        <!-- 底部：承办学校、主题 -->
	        <div class="activityManager">
	            <div  class="line"></div>
	            <div class="managerSchoolTitle">
	                <div class="managerSchool">
                        <img key='a' :src="(activityInfo.magor_logo_name != '' || activityInfo.magor_logo_name != 'undefined') ? activityInfo.magor_logo_name : url">
	                    <span v-if="activityInfo.start_state==2" style="color: #b1b1b1;">{{activityInfo.z_name}}</span>
	                    <span v-else>{{activityInfo.z_name}}</span>
	                </div>
	                <p v-if="activityInfo.activity_type == '招生宣讲'" style="background-color: rgb(0, 159, 160);" class="managerTitle">
	                    {{activityInfo.activity_type}}
	                </p>
	                <p v-else-if="activityInfo.activity_type == '提前面试'" style="background-color: rgba(0,97,172,1);" class="managerTitle">
	                    {{activityInfo.activity_type}}
	                </p>
	                <p v-else-if="activityInfo.activity_type == '高精会议'" style="background-color: rgba(199,140,0,1);" class="managerTitle">
	                    {{activityInfo.activity_type}}
	                </p>
	                <p v-else class="managerTitle">
	                    {{activityInfo.activity_type}}
	                </p>
	            </div>
	        </div>
	    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url:'../../assets/img/college1.jpg',
            item: this.activityInfo,//活动信息
            state: '',//图片上标签——活动状态

        };
    },
    methods:{
        activityState:function(){
        	let self = this;
        	// console.log(self.item.start_state);
        	switch(self.activityInfo.start_state){
        		case 0:   self.state = "未开始"; break;
        		case 1:   self.state = "进行中"; break;
    			case 2:   self.state = "已结束"; break;
        		default:  self.state = "未识别"; break;
        	};
        },

        // 跳转到活动详情页
        jump: function(){
            let id = this.activityInfo.id;
            this.$router.push('/front/firstMenuRouter/lookActivity/singleActivity/'+id);
        },
    },
    props: ["activityInfo"],
    mounted(){
        // console.log(this.activityInfo);
        this.activityState();
    },
    watch:{
        activityInfo(){
            this.activityState();
        }

    }
}
</script>

<style>
	/*单个活动块儿上部图片上的标签及字体样式*/
    .activityImg>p{
        width: 84px;
        height: 34px;
        box-sizing: border-box;
        margin: 0 0 0 auto;
        border-radius: 0px 5px 0px 5px;
        font-size: 14px;
        color: #fff;
        /*padding: 9px 21px 10px 21px; 原有大小*/
        padding: 7px 21px 10px 21px; /*更合适*/
        /*颜色会根据状态不同而变化*/
        background-color: #ffb957;
    }

</style>

<style scoped>
	p, span{
        font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
    }
    /*单个活动块儿的属性：大小、背景色等*/
    .activityBox{
        cursor: pointer;
        width: 305px;
        /*height: 370px;*/
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        /*包括边框和padding的大小*/
        box-sizing: border-box;
        min-height: 80px;
        float: left;
        /*margin: 20px auto;*/
      justify-content:flex-start;
    }
    .activityBox>div{
        background-color: #ffffff;
        border-radius: 5px;
    }
    /*鼠标悬浮单个活动块儿时的效果*/
    .activityBox>div:hover{
        box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
    }

    /*单个活动块儿上部图片*/
    .activityImg{
        height: 191px;
        background-image: url("../../assets/img/activitytitle.jpg");
        background-position: 50% 50%;
        background-size: cover;
        border-radius: 5px 5px 0px 0px;
    }

    .activityState1{
    	background-color: #b10008;
    }
	.activityState2{
		background-color: #e6e6e8;
		width: 100%;
		height: 100%;
		font-size: 33px;
		opacity: 0.8;
		color: rgb(108, 108, 108);
		display: flex;
    	justify-content: center;
    	align-items: center;
    }

    /*单个活动块儿中间部位：包括活动标题、地址、日期*/
    .activityDetail{
        /*未按照原psd格式图片设计，根据原型图设计*/
        padding: 10px 15px 0 15px;
        min-height: 80px;
    }

    /*单个活动块儿：活动标题样式*/
    .activityTitle>p{
        /*防止文字过少时（单行）样式混乱*/
        min-width: auto;
        min-height: 56px;
        /*防止文字过多时样式混乱*/
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;

        font-size: 16px;
        color: #6f6f6f;
        line-height: 1.75em;
        margin: 0 0 10px;
    }

    /*单个活动块儿的地址和时间，分为一块div*/
    .activityAddressTime{
        min-height: auto;
        display: flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        -webkit-box-pack: justify;
        margin-top: 19px;
    }

    /*地址、时间内部布局样式*/
    .activityAddress, .activityTime{
        display: flex;
        align-items: center;
        min-height: auto;
    }

    .activityAddressTime img{
        margin-right: 6px;
        display: inline-block;
        height: auto;
        width: auto;
        max-width: 100%;
        vertical-align: middle;
    }

    .activityAddressTime span{
        font-size: 14px;
        color: #606060;
        opacity: 0.7;
        font-weight: 500;
        line-height: 1.1;
        min-height: 10px;
        min-width: 10px;
    }

    /*单个活动块儿底部布局*/
    .activityManager{
        min-height: auto;
        margin-top: 23px;
        padding: 0px 15px 10px;
    }

    /*分割线样式*/
    .activityManager .line{
        background-color: rgba(239,239,239,1);
        min-height: auto;
        height: 1px;
    }

    /*底部块儿中的：学校和主题*/
    .managerSchoolTitle{
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        margin-top: 10px;
        min-height: auto;

        /*font-size: 12px;*/
    }

    .managerSchool{
        display: flex;
        -webkit-box-align: center;
        align-items: center;

        margin-top: 0;
        margin-bottom: 0;
        min-height: auto;
    }

    .managerSchool>img{
        width: 24px;
        height: 24px;
        background-color: #ffb957;
        border-radius: 50%;
        margin-right: 11px;
    }

    .managerSchool span{
        line-height: 28px;
        color: #6f6f6f;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.1;
    }

    .managerSchoolTitle .managerTitle{
        border-radius: 60px;
        color: #ffffff;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.1;
        padding: 3px 8px;
        margin: 0 0 0 auto;
        -webkit-box-flex: 0;
        flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        text-align: left;
        /*颜色可变*/
        background-color: #aaa;
    }

     /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 767px) {
        .activityBox{
            width: 100%;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1200px) {
        .activityBox{
            width: 50%;
        }
    }
</style>

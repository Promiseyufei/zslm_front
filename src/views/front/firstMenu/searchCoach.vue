<template>
    <div>
        <div class="bigBox" v-bind:style="minHeight= heig + 'px' ">
            <!-- header -->
            <hearderBanner enName="INSTITUTIONS" name="搜辅导"></hearderBanner>

            <!-- 辅导机构小块块 -->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="singlecoach" v-for="(item,index) in coachlist" @click="jump(item.id)">
                        <div class="singlecoachtop">
                            <img src="../../../assets/img/xindongfang.png" alt="">
                        </div>
                        <span>{{item.coach_name}}</span>
                        <div class="singlecoachHoverbig"> 
                            <div class="singlecoachHoverbox" :class="index%4==2||index%4==3 ? 'activeClass' : ''">
                                <div class="singlecoachHover" v-if="index%4==0||index%4==1">
                                    <div class="singlecoachtop2">
                                        <img src="../../../assets/img/xindongfangwhite.png" alt="">
                                    </div>
                                    <div class="singlecoachspan">
                                        <span>{{item.coach_name}}</span>
                                        <span>
                                            <img src="../../../assets/img/money2.png" alt="" v-if="item.if_coupons==0">
                                            <img src="../../../assets/img/return3.png" alt="" v-if="item.if_back_money==0">
                                        </span>
                                    </div>
                                </div>
                                <div class="littleCollage2" v-if="index%4==2||index%4==3">
                                    <p class="coachHeader">{{item.son_coachs.length}}个分校</p>
                                    <div class="coachLittle">
                                        <div class="coachLittleshort" v-for="(list,dd) in item.son_coachs">
                                            <strong>{{dd+1}}</strong>
                                            <span>{{list.coach_name}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="singlecoachHover" v-if="index%4==2||index%4==3">
                                    <div class="singlecoachtop2">
                                        <img src="../../../assets/img/xindongfangwhite.png" alt="">
                                    </div>
                                    <div class="singlecoachspan">
                                        <span>{{item.coach_name}}</span>
                                        <span>
                                            <img src="../../../assets/img/money2.png" alt="" v-if="item.if_coupons==0">
                                            <img src="../../../assets/img/return3.png" alt="" v-if="item.if_back_money==0">
                                        </span>
                                    </div>
                                </div>
                                <div class="littleCollage" v-if="index%4==0||index%4==1">
                                    <p class="coachHeader">{{item.son_coachs.length}}个分校</p>
                                    <div class="coachLittle">
                                        <div class="coachLittleshort" v-for="(list,dd) in item.son_coachs">
                                            <strong>{{dd+1}}</strong>
                                            <span>{{list.coach_name}}</span>
                                        </div>
                                    </div>
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
export default {
    components: {
    },
    data() {
        return {
            tive:true,
            coachlist: [],
            heig: 0,
        }
    },
    methods: {
        jump: function(id) {
            this.$router.push('/front/singleCoach/'+id);
        },
        getCoach: function() {
            var that = this;
            axios.post('/front/coach/getcoach',{
                provice: "全部",
                coach_type: 3,
                coach_name: "",
                if_back: 2,
                if_coupon: 2,
                page: 1,
                page_size: 8
            }).then(function (response) {
                    var res = response.data;
                    if (res.code == 0) {
                        that.coachlist = res.data;
                    }
            }).catch(function (error) {
            });
        }
    },
    mounted(){
        this.getCoach();
        this.heig = window.screen.height;
        console.log(this.heig);
    },
};
</script>
<style>
</style>
<style scoped>
.coachLittleshort {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    margin-bottom: 15px;
}

.coachLittleshort>strong {
    background-color: #ffb957;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 11px;
}

.coachLittle {
    display: flex;
    flex-wrap: wrap;
    width: 604px;
    overflow-y: scroll;
    height: 160px;
    margin-left: 47px;
    margin-top: 45px;
    font-size: 14px;
    font-weight: normal;
    color: rgb(255, 255, 254);
}
.coachLittle::-webkit-scrollbar {
    display: none;
}
.littleCollage {
    margin: 15px 0;
    border-left: 1px solid #ffb957;
}
.littleCollage2 {
    margin: 15px 0;
    border-right: 1px solid #ffb957;
}
.coachHeader {
    color: #ffb957;
    margin-left: 47px;
    margin-top: 25px;
}
.singlecoachHoverbox {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    background-color: rgba(56, 59, 61, 0.95);
    width: 955px;
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 5px;
}
.activeClass {
    top: 0;
    left: -650px;
}
.singlecoachHover {
    width: 305px;
}
.bigBox {
    background-color: rgb(245, 245, 245);
}
.singlecoachBig {
    display: flex;
    justify-content: center;
}
.singlecoachbox {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
.singlecoach {
    width: 305px;
    background-color: #fff;
    margin: 10px;
    position: relative;
    border-radius: 5px;
}
.singlecoachHoverbig {
    display: none;
}
.singlecoach:hover .singlecoachHoverbig {
    display: block;
}
.singlecoachtop2 {
    width: 100%;
    z-index: 2;
} 
.singlecoachtop,.singlecoachtop2 {
    width: 100%;
    height: 253px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.singlecoachtop>img {
    width: 40%;
}
.singlecoachtop2>img {
    width: 40%;
}
.singlecoach>span {
    display: inline-block;
    width: 100%;
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: rgba(56, 59, 61, 0.8);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.singlecoachspan {
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
}
.singlecoachspan>span {
    margin: 0 20px;
    color: #ffb957;
    display: flex;
    align-items: center;
}
.singlecoachspan>span>img {
    margin-left: 10px;
}
</style>
<template>
    <div>
        <div class="bigBox">
            <!-- header -->
            <hearderBanner enName="COLLEGES" name="选院校"></hearderBanner>

            <!-- 辅导机构小块块 -->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="singlecoach" v-for="(item,index) in 8">
                        <div class="singlecoachtop">
                            <img src="../../../assets/img/xindongfang.png" alt="">
                        </div>
                        <span>新东方</span>
                        <div class="singlecoachHover">
                            <div class="singlecoachtop2">
                                <img src="../../../assets/img/xindongfang.png" alt="">
                            </div>
                            <div class="singlecoachspan">
                                <span>xindongfang</span>
                                <span>
                                    <img src="" alt="">
                                    <img src="" alt="">
                                </span>
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

.singlecoachHover {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
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
}
.singlecoachtop2 {
    background-color: rgba(56, 59, 61, 0.7);
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
}
.singlecoachspan {
    width: 100%;
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
</style>
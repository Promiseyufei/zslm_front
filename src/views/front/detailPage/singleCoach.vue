<template>
    <div>
        <div class="bigBox">
            <!--header-->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="selectHeaderbox">
                        <div class="selectHeaderboxhover">
                            <div class="selectHeader">
                                <img src="../../../assets/img/xindongfang.png" alt="">
                                <p><span></span><strong>新东方</strong><span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--main-->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    
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
            id: 0,

        }
    },
    methods: {

    },
    mounted(){
        this.id = this.$route.params.id;
    },
};
</script>
<style>
</style>
<style scoped>
.bigBox {
    background-color: rgb(245, 245, 245);
}
.selectHeader {
    margin: 0 auto;
    text-align: center;
}
.singlecoachbox {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
.selectHeaderbox {
    background: url("../../../assets/img/room.jpg");
    background-size: 100%;
    width: 100%;
}
.selectHeaderboxhover {
    background-color: rgba(56, 59, 61, 0.85);
    width: 100%;
    height: 100%;
    padding: 80px 0;
}
.selectHeader>img {
    margin-bottom: 30px;
    max-width: 110px;
    border-radius: 5px;
    border: 5px solid rgba(255, 255, 255, 0.1);
}
.selectHeader>p {
    display: flex;
    align-items: center;
    justify-content: center;
}
.selectHeader>p>span {
    display: inline-block;
    margin: 0 20px;
    width: 30px;
    color: #ffb957;
    border: 2px solid #ffb957;
}
.selectHeader>p>strong {
    color: #fff;
    font-size: 31px;
}
.selectHeader>strong {
    color: #fff;
    font-size: 30px;
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
    .selectHeader>p>span {
        width: 20px;
        margin: 0 15px;
    }
    .selectHeaderback {
        height: 140px;
    }
    .selectHeader>p {
        margin-bottom: 5px;
    }
    .selectHeader>p>strong {
        font-size: 20px;
    }
    .selectHeader>strong {
        font-size: 20px;
    }
}
@media only screen and (max-width: 1280px) {
    .singlecoachbox {
        width: 100%;
    }
}

</style>
    
    
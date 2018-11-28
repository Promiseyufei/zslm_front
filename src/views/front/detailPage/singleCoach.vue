<template>
    <div>
        <div class="bigBox">
            <div class="singlecoachBig">
                <div class="selectHeader">
                    <img src="" alt="">
                    <p><span></span><strong>新东方</strong><span></span></p>
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
.selectHeader>p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 10px;
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

</style>
    
    
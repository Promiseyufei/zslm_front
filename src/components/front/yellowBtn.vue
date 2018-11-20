<template>
    <span>{{text}}
        <img src="../../assets/img/white.png" alt="">
    </span>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    methods:{

    },
    props:["text"],
    mounted(){
    }
}
</script>

<style scoped>
    .yellowBtn {
        text-align: center;
        padding: 15px 30px;
        border-radius: 5px;
        border: 2px solid #fff;
        color: #fff;
        cursor: pointer;
    }
    .yellowBtn:hover {
        background-color: #ffb957;
        border: 2px solid #ffb957;
    }
    img {
        width: 25px;
        margin-left: 3px;
    }
</style>
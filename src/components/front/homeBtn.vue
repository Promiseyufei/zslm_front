<template>
    <span @mouseover="selectStyle()" @mouseout="outStyle()">{{text}}
        <img :src="src" alt="">
    </span>
</template>

<script>
export default {
    data() {
        return {
            src: require('../../assets/img/green.png'),
        };
    },
    methods:{
        //鼠标移入触发事件
        selectStyle: function() {
            this.src = require('../../assets/img/white.png');
        },
        //鼠标移开触发事件
        outStyle: function(se) {
            this.src = require('../../assets/img/green.png');
        }
        
    },
    props:["text"],
    mounted(){
    }
}
</script>

<style scoped>
    .homeBtn {
        padding: 15px 30px;
        border: 2px solid #009fa0;
        border-radius: 5px;
        color: #009fa0;
    }
    .homeBtn:hover {
        background-color: #009fa0;
        color: #fff;
    }
    .yellowBtn {
        padding: 15px 30px;
        border-radius: 5px;
        border: 2px solid #fff;
        color: #fff;
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
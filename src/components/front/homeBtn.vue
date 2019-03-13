<template>
    <!-- <homeBtn text="查看全部院校"></homeBtn> -->
    <span @mouseover="selectStyle()" @mouseout="outStyle()"  class="homeBtn">{{text}}
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
        text-align: center;
        color: #009fa0;
        cursor: pointer;
        box-sizing: border-box;
    }
    .homeBtn:hover {
        background-color: #009fa0;
        color: #fff;
    }
    /* .yellowBtn {
        padding: 15px 30px;
        border-radius: 5px;
        border: 2px solid #fff;
        color: #fff;
    }
    .yellowBtn:hover {
        background-color: #ffb957;
        border: 2px solid #ffb957;
    } */
    img {
        width: 25px;
        margin-left: 3px;
    }

    @media only screen and (max-width: 600px) {
      .homeBtn {
        /*padding: 10px;*/
        width: 100%;
        padding:6px 12px;
        display: block;
        border-width: 1px;
      }
    }
</style>

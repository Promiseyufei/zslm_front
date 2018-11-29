<template>
        <div class="detailPicture" @mouseover="pdfOne" @mouseout="pdfOneOut" >
            <div><img :src="src"></div>
            <div class="detailCity" id="city">{{city}}</div>
        </div>
</template>

<script>
export default {
    data(){
    	return{
            src:require("../../assets/img/pdf.png"),
            city:'北京地区招生报告',
    	}
    },
    methods:{
       //资料下载区logo——鼠标滑过样式
            pdfOne:function() {
                    this.src = require("../../assets/img/pdfG.png")
                    document.getElementById('city').style.color = "#009fa0"
            },
            pdfOneOut:function() {
                    this.src = require("../../assets/img/pdf.png")
                    document.getElementById('city').style.color = "#6f6f6f"
            },
        //资料下载区logo——鼠标滑过样式

      
    },
    watch:{

    },
    mounted(){
        // console.log(this.tag)
    }
}
</script>

<style>

</style>

<style scoped>
    .detailCity {
        line-height: 17px;
        font-size: 12px;
        color: rgb(110, 110, 110);
    }
    .detailPicture {
        cursor: pointer;
        width: 24%;
        height: 52px;
        text-align: center;
        margin: 0 10px;
        height: 86px;
        /*width: 29%;*/
    }
    


</style>

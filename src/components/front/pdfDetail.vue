<template>
        <div @click="loadPdf(pdfPicture[t].file_url)" class="detailPicture" @mouseover="pdfOne" @mouseout="pdfOneOut" >
            <div><img :src="src" alt="加载中"></div>
            <div class="detailCity">{{pdfPicture[t].file_name}}</div>
        </div>
</template>

<script>
export default {
    data(){
    	return{
            src:require("../../assets/img/pdf.png"),
    	}
    },
    props:["t","pdfPicture","index"],
    methods:{
    //资料下载区logo——鼠标滑过样式
        pdfOne:function() {
                this.src = require("../../assets/img/pdfG.png")
                this.$emit('thisTest', this.t)
                // document.getElementById('t').style.color = "#009fa0"
        },
        pdfOneOut:function() {
                this.src = require("../../assets/img/pdf.png")
                this.$emit('thisTesta', this.t)
                // this.$emit('thisTest', this.t)
                // document.getElementById('t').style.color = "#6f6f6f"
        },
    //资料下载区logo——鼠标滑过样式
        loadPdf(fileName) {
            // alert(fileName);
            this.$emit('loadPdf', fileName);
            // window.open('/front/colleges/downloadfile/'+fileName);
            // this.fetch('/front/colleges/downloadfile/'+fileName);
        }


    },
    watch:{

    },
    mounted(){
        console.log(this.t);
        console.log(this.pdfPicture)
    }
}
</script>

<style>

</style>

<style scoped>
    .testa>.detailCity {
        color: #009fa0;
    }
    .testb>.detailCity {
        color: #6f6f6f;
    }
    .detailCity {
        text-align: center;
        width: 100%;
        line-height: 17px;
        font-size: 12px;
        color: rgb(110, 110, 110);
    }
    .detailPicture {
        display: flex;
        align-items:center;
        flex-direction:column;
        cursor: pointer;
        border-bottom: 1px solid rgb(239, 239, 239);
        width: 23%;
        padding: 20px 12px;
    }



</style>

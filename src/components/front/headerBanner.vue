<template>
    <!-- header -->
    <div class="selectHeaderback" id="headerback" @click="judgePage">
        <div>
            <div class="selectHeader">
                <p><span></span><strong>{{enName}}</strong><span></span></p>
                <strong>{{name}}</strong>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url:''
            // bannerUrl:this.banner.img != '' ? this.banner.img : require("../../assets/img/banner.jpg"),
        }
    },
    methods: {
      setImg:function(url){
        if(url){
          document.getElementById('headerback').style.backgroundImage = "url('"+url+"')";
        }
      },
      setJudgeUlr:function(paramurl){
              if(typeof paramurl != "undefined") {
                  if(paramurl.substr(0,7).toLowerCase() == "http://" || paramurl.substr(0,8).toLowerCase() == "https://") {
                      this.url = paramurl;
                  }
                  else {
                      this.url = 'http://' + paramurl;
                  }
              }
      },
      judgePage:function(){
        // window.open(this.url)
		  }
    },
    props:["enName","name", "banner"],
    mounted(){
        //this.setImg(this.banner);
    },
};
</script>
<style>
</style>
<style scoped>
/*
* 静态banner
*/
.selectHeaderback {
    background-image: url("../../assets/img/banner.jpg");
    height: 287px;
    background-position: 50% 50%;
    background-size: cover;

}
.selectHeaderback>div {
    background-color: rgba(56,59,61,0.85);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

<template>
    <div class="opinion">
        <div class="opinionContent">
            <div class="opinionMiddle">
                <div class="opinionHeader">
                    意见反馈
                </div>
                <textarea class="opinionAdvice" v-model="text">

                </textarea>
                <div class="opinionSubmit">
                    <el-button type="warning" @click="submit">提交</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                text:"",
            }
        },
        methods: {
            submit: function () {
                let _this = this;
                console.log(_this.$route.params.id);
                this.fetch('/front/usercore/adduseropinion',{
                    text:_this.text,
                    id:_this.$route.params.id,
                    name:_this.$route.params.name,
                }).then((response) => {
                    if(response.code == 0){
                        _this.message(true,"您已经成功提交反馈建议",'success');
                    }else {
                        _this.message(true,"您提交反馈建议失败",'error');
                    }
                })
                    .catch(error => function (error) {
                        console.log(response)
                        _this.message(true,"您提交反馈建议失败",'error');
                    });
            }
        }
    }
</script>
<style scoped>
    .opinion{
        width: 100%;
        padding-top: 96px;
        padding-bottom: 113px;
        background-color: #f5f5f5;
    }
    .opinionContent{
        width: 1277px;
        height: 600px;
        margin: auto;
        background-color: #fff;
        border-radius: 5px;
    }
    .opinionMiddle{
        width: 94%;
        margin: auto;
    }
    .opinionHeader{
        height: 70px;
        line-height: 70px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #009fa0;
        border-bottom: 1px solid #efefef;
    }
    .opinionAdvice{
        width: 884px;
        height: 326px;
        background-color: #f5f5f5;
        border-radius: 5px;
        border: solid 1px #dddddd;
        margin: auto;
        margin-top: 54px;
        display: block;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;
        -webkit-appearance:none;
        outline: none;
        border: none;
        padding: 10px;
        margin-bottom: 40px;
    }
    .opinionSubmit{
        margin: auto;
        width: 144px;
        height: 48px;
    }
    .opinionSubmit .el-button{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 991px){
        .opinionContent{
            width: 100%;
        }
        .opinionAdvice{
            width: 90%;
        }
    }
</style>
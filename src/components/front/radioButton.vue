<template>
    <div>
        <div class="radioButton">
            <el-col :span="8">
                <el-card shadow="hover">
                    <!-- <div> -->
                        <div class="overHidden" >
                            <div class="allButton" id="overHidden">
                                <div class="majorType">专业类型</div>
                                <el-radio-group v-model="z_type">
                                    <el-radio-button label="全部"></el-radio-button>
                                    <el-radio-button :label="m.z_name" v-for="(m,index) in allMajorname" :key="index"></el-radio-button>
                                    </el-radio-group>
                                    <div @click="hiddenButton" class="hiddenButton">
                                    更多专业<span><i class="el-icon-caret-bottom"></i></span>
                                    </div>
                            </div>
                        </div>
                        <div class="divLine"></div>
                    <!-- </div> -->
                </el-card>
            </el-col>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                // a:0,
                z_type:'全部',
                allMajorname:[
                    {label:'z_name'},
                ]
            }
        },
        methods: {
            hiddenButton:function(){
                let div=document.getElementById("overHidden");
                console.log(this.a);
                //页面宽度
                let w = document.documentElement.offsetWidth || document.body.offsetWidth;
                if (w<768) {
                    div.offsetHeight==53?div.style.height="450px":div.style.height="53px";
                } else {
                    div.offsetHeight==53?div.style.height="150px":div.style.height="53px";
                }
            },
            mobileHidden:function(){
                
            },
            //院校按钮信息
            getmajor:function() {
                var that = this;
                // console.log(123)
                axios.get('/front/colleges/getmajor',{
                    //后台参数，前台参数(传向后台)
                    z_type: that.z_type,
                }).then(function (response) {
                        var res = response.data;
                        console.log(res.allMajorname)
                        if (res.code == 0) {
                            that.allMajorname =res.allMajorname;
                        }
                }).catch(function (error) {
                });
            }
        },
        mounted(){
            let div=document.getElementById("overHidden");
            let moheight = div.offsetHeight||clientHeighto;
            this.a = moheight;
            console.log(moheight);
            this.getmajor();
        },
    };
</script>
<style> 
    .allButton .el-radio-button:first-child .el-radio-button__inner {
        border-left: 0;
    }
    .allButton .el-radio-button__inner {
        border: 0;
        padding: 9px 15px;
        font-size: 16px;
        color: #6f6f6f;
    }
    .allButton .el-radio-button__orig-radio:checked+.el-radio-button__inner {
        color: #fff;
        background-color: #ffb957;
        border-color: #ffb957;
        border-left: 0;
        border-radius: 5px;
        -webkit-box-shadow: -1px 0 0 0 #ffb957;
        text-align: center;
    }
    .allButton .el-radio-group {
        margin-top: 15px;
        width: 999px;
    }
    .radioButton .el-card__body {
        padding: 0 20px;
        height: 371px;
    }
    .radioButton .el-col-8 {
        width: 1280px;
        height: 471px;
        padding-bottom: 60px;
    }
    
</style>
<style scoped>
    .majorType {
        width: 120px;
        color: #009fa0;
        font-size: 16px;
        margin:  25px 0 0 0;
    }
    .hiddenButton {
        margin-top: 30px;
        width: 64px;
        font-size: 12px;
        color: rgb(160, 160, 160);
    }
    .divLine {
        width: 1219px;
        height: 1px;
        background-color: #000000;
        opacity: 0.13;
        margin-top: 10px;
    }
    .allButton {
        height: 53px;
        width: 1280px;
        display: flex;
        justify-content: space-between;
    }
    .overHidden {
        overflow: hidden; 
        display: flex;
        justify-content:space-between;
    }
    .radioButton {
        width:1280px;
        margin: 0 auto;
    }

    /** PC **/
    @media only screen and (min-width: 1024px) and (max-width:1300px) {
        .allButton .el-radio-group {
            width: 720px;
        }
        .divLine {
            width: 980px;
        }
        .hiddenButton {
            width: 100px;
            margin-top: 25px;
        }
        .overHidden {
            width: 950px;

        }
        .radioButton .el-col-8 {
            width: 100%;
            overflow: hidden; 
        }
        .radioButton {
            width: 90%;
            overflow: hidden;
        }
    }
    /** iPad **/
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .allButton .el-radio-group {
            width: 500px;
        }
        .divLine {
            width: 900px;
        }
        .hiddenButton {
            width: 100px;
            margin: 25px 15px 0 0;
        }
        .overHidden {
            width: 720px;
        }
        .radioButton .el-col-8 {
            width: 720px;
            margin: 0 0 0 20px;
            overflow: hidden; 
        }
        .radioButton {
            width: 100%;
            overflow: hidden;
        }
    }
    /** iPhone **/
    @media only screen and (min-width: 320px) and (max-width: 767px) {
        .allButton {
            height: 53px;
        }
        .hiddenButton {
            width: 80px;
        }
        .allButton .el-radio-button__inner {
            font-size: 12px;
            padding: 5px;
        }
        .allButton {
            /*width: 350px;*/
        }
        .majorType {
            margin-right: 20px;
        }
        .majorType {
            width: 60px;
            font-size: 12px;
        }
        .allButton .el-radio-group {
            width: 70%;
        }
        .overHidden {
            width: 100%;
            /*margin: 0 auto;*/
        }
        .radioButton .el-col-8 {
            width: 95%;
            margin-left: 10px;
        }
        .radioButton {
            width: 95%;
        }
    }
</style>
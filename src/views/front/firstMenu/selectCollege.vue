<template>
    <div>
        <div style="overflow-x:hidden;">
            <hearderBanner enName="COLLEGES" name="选院校"></hearderBanner>
            <div class="selectCollege">
                <div class="selectCollegeSearch">
                    <el-input
                        placeholder="请输入关键字搜索"
                        suffix-icon="el-icon-search"
                        v-model="searchContent">
                    </el-input>
                </div>
            </div>
            <radioButton></radioButton>
            <!-- <div class="buttonCollege"></div> -->
            <div class="diffeCollege">
                <el-col :span="8">
                    <el-card shadow="hover">
                        <div class="collegePicture"></div>
                        <div class="forThree">
                            <div class="specificInform" v-for="(t,index) in allMajorname" :key="index">
                                <p class="international">国际</p>
                                <div class="moneyType">
                                    <p><span><i class="fa fa-jpy"></i></span>学费<span class="money">18.8万</span></p>
                                    <p class="teach"><span><i class="el-icon-caret-bottom"></i></span>授课语言<span class="type">英文</span></p>
                                </div>
                                <p class="interval"><span><i class="el-icon-caret-bottom"></i></span>授课语言<span class="bold">全日制共100名</span></p>
                                <p class="state"><span><i class="el-icon-caret-bottom"></i></span>班级情况<span class="bold">国际班</span></p>
                            </div>
                        </div>
                        
                        <div class="collegeInform" v-show="moreMajor" v-for="(m,index) in allMajorname" :key="index">
                            <div class="forY">
                                <div class="forX" v-for="(m,index) in allMajorname" :key="index">
                                    <div class="specificInform">
                                        <p class="international">国际</p>
                                        <div class="moneyType">
                                            <p><span><i class="el-icon-caret-bottom"></i></span>学费<span class="money">18.8万</span></p>
                                            <p class="teach"><span><i class="el-icon-caret-bottom"></i></span>授课语言<span class="type">英文</span></p>
                                        </div>
                                        <p class="interval"><span><i class="el-icon-caret-bottom"></i></span>授课语言<span class="bold">全日制共100名</span></p>
                                        <p class="state"><span><i class="el-icon-caret-bottom"></i></span>班级情况<span class="bold">国际班</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="viewMore">
                            <div class="updateInform">信息更新时间：</div>
                            <div class="moreInform" @click="viewMore">查看更多项目<span><i class="el-icon-caret-bottom"></i></span></div>
                        </div>
                    </el-card>
                </el-col>
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
            searchContent:'',
            moreMajor:false,
            allMajorname:[
                {},
                {},
                {},
            ]
        }
    },
    methods: {
        viewMore:function() {
            if (this.moreMajor==false) {
                this.moreMajor = true;
            } else {
                this.moreMajor = false;
            }
        }
    },
    mounted(){

    },
};
</script>
<style>
    /*不同院校*/
    .moreInform:hover {
        color: #009fa0;
    }
    .viewMore {
        width: 1230px;
        display: flex;
        justify-content:space-between;
        font-size: 12px;
        color: #a4a4a4;
    }
    .diffeCollege [class*=" el-icon-"], [class^=el-icon-] {
        width: 19px;
        height: 19px;
        margin-right: 8px;
    }
    .diffeCollege .el-col-8 {
        width: 1280px;
        margin-bottom: 60px;
    }
    .selectCollegeSearch .el-input__inner {
        border-radius: 60px;
        height: 32px;
    }
</style>
<style scoped>
    /*不同院校——院校信息*/
    .forThree {
        display: flex;
    }
    .moneyType p,.state,.interval {
        font-size: 14px;
        color: #6e6e6e;
    }
    .interval {
        margin: 10px 0 10px 0;
    }
    .money {
        margin: 0 44px 0 11px;
    }
    .bold {
        margin-left: 18px;
    }
    .type {
        margin-left: 14px;
    }
    .money,.type,.bold {
        font-size: 14px;
        font-weight: bold;
        color: #6e6e6e;
    }
    .international {
        height: 19px;
        margin-bottom: 21px;
        font-size: 18px;
        color: #009fa0;
    }
    .moneyType {
        display: flex;
    }
    .specificInform {
        width: 375px;
        padding: 30px 0 30px 25px;
        margin: 0 10px 10px 0; 
        background-color: #f5f5f5; 
        border-radius: 5px;
    }
    .forY {
        display: flex;
        /*width: 1230px;*/
    }
    .collegeInform {
        /*display: flex;*/
    }
    .diffeCollege {
        margin: 0 auto;
        width: 1280px;
    }
    .buttonCollege {
        width: 1280px;
        height: 2px;
        background-color: #009fa0;
        border: solid 3px #000000;
        opacity: 0.06;
        margin: 50px auto;
    }

    /*不同院校——图片信息*/
    .collegePicture {
        /*width: 1280px;*/
        /*border-bottom: 1px solid red;*/
    }



    .selectCollegeSearch {
        width: 407px;
        margin: 49px 0 44px;
    }
    .selectCollege {
        width: 1260px;
        margin: 0 auto;
    }


    /** PC **/
    @media only screen and (min-width: 1024px) and (max-width:1300px) {
        .updateInform {
            /*margin-left: 50px;*/
        }
        .viewMore {
            width: 755px;
            margin: 0 auto;
        }
        .specificInform {
             width: 720px;
             /*margin: 0 0 10px 80px;*/
        }
        .forY,.forThree {
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        .buttonCollege {
        }
        .diffeCollege {
            width: 90%;
            overflow:hidden;
        }
        .diffeCollege .el-col-8 {
            width: 100%;
        }
        .diffeCollege .el-card__body{
            width: 90%;
            /*margin-left: 10px;*/
        }
        
        .selectCollegeSearch {
            margin: 49px auto 44px;
            /*margin-left: 10px;*/
            width: 50%;
        }
        .selectCollege {
            width: 100%;
        }
    }
    /** iPad **/
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .viewMore {
            width: 700px;
        }
        .specificInform,.threeSpecificInform {
            width: 658px;
            margin-right: 25px;
        }
        .forY,.forThree {
            flex-direction:column;
            justify-content:center;
        }
        .buttonCollege {
        }
        .diffeCollege {
            width: 100%;
            overflow:hidden; 
        }
        .diffeCollege .el-col-8{
            width: 720px;
            overflow:hidden;
            margin-left: 20px;
        }

        .selectCollegeSearch {
        }
        .selectCollege {
            width: 700px;
        }
    }
    /** iPhone **/
    @media only screen and (min-width: 320px) and (max-width: 767px) {
        .viewMore {
            width: 95%;
        }
        .teach {
            margin-top: 10px;
        }
        .moneyType {
            flex-direction: column;
        }
        .specificInform {
            width: 200px;
            height: 150px;
            padding: 30px 25px;
        }
        .diffeCollege .el-col-8 {
            width: 90%;
            margin-left: 20px;
        }
        .forY,.forThree {
            flex-direction:column;
            justify-content:center;
            
        }
        .diffeCollege {
            width: 100%;
        }
        .selectCollegeSearch {
            width: 90%;
            margin-left: 20px;
        }
        .selectCollege {
            width: 100%;
        }
    }
</style>
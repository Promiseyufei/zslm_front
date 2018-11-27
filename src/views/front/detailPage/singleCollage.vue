<!-- 选院校》单个院校 -->
<template>
    <div class="singleCollage">
        <div class="singleCollageAll">
        <!-- 院校logo -->
            <div class="itemPicture">
                <div class="backColor">
                    <div class="collageLogo"><img src="../../../assets/img/picture.jpg"></div>
                    <div class="collageName">
                        <div class="nameLine"></div>
                        <div class="concreteName">复旦大学MBA</div>
                        <div class="nameLine"></div>
                    </div>
                    <p style="opacity: 0.8;text-align: center;color: rgb(255, 255, 255);font-size: 12px;font-weight: bold;">关注复旦大学MBA，获取最新信息！</p>
                    <div class="collageButton">
                        <div class="buttoOne"><el-button type="primary">+ 关注</el-button></div>
                        <div class="buttoTwo"><el-button type="primary" icon="el-icon-share"></el-button></div>
                    </div>
                </div>
            </div>
        <!-- 院校logo -->
        <!-- 招生项目 -->
            <div class="itemDetails">
                <div class="itemInform">
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <div class="itemInformOne">
                                <div>
                                    <p>招生项目</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div><el-button size="mini">+ 对比</el-button></div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <div class="itemInformOne">
                                <div>
                                    <p>推荐内容</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div><el-button size="mini">+ 对比</el-button></div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <div class="itemInformOne">
                                <div>
                                    <p>相关活动</p>
                                    <div class="collageLine"></div>
                                </div>
                                <div><el-button size="mini">+ 对比</el-button></div>
                            </div>
                        </el-card>
                    </el-col>
                </div>
                <div class="basicInform">
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <div style="margin-bottom:30px;">
                                <p>基本信息</p>
                                <div class="collageLine"></div>
                            </div>
                            <!-- <div class=""></div> -->
                        </el-card>
                  </el-col>
                </div>
            </div>
        <!-- 招生项目 -->
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            // basicInform:true,
            // id: this.$route.params.id,
        }
    },
    methods: {

    },
    mounted(){
        // let w = document.documentElement.offsetWidth || document.body.offsetWidth;
        // if (w<991) {
        //     this.basicInform = false;
        // } else {
        //     this.basicInform = true;
        // }
    },
};
</script>
<style>
    /*<!-- 招生项目 -->*/
        .basicInform .el-col-8 {
            width: 325px;
            padding-left: 10px;
        }
        .itemInform .el-card__body{
            padding: 25px;
        }
        .itemInform .el-button--mini, .el-button--mini.is-round {
            padding: 8px 18px;
        }
        .itemInform .el-button--mini, .el-button--small {
            font-size: 12px;
            border-radius: 3px;
        }
        .itemInform .el-col-8 {
            width: 955px;
            padding-right: 10px;
            margin: 0 0 20px;
        }
        .itemInform .el-card__body{
            padding: 25px 25px;
        }
        .itemInform {
            width: 955px;
        }
    /*<!-- 招生项目 -->*/
    /*<!-- 院校logo -->*/
        .buttoTwo .el-button--primary:hover,.buttoOne .el-button--primary:hover{
            background-color: #009fa0;
        }
        .buttoTwo .el-button--primary {
            height: 48px;
            width: 48px;
            background-color: rgb(255, 185, 87);
            color: rgb(255, 255, 255);
            font-weight: bold;
            border-radius: 5px;
            border: 0;
            margin-left: 6px;
        }
        .buttoOne .el-button--primary {
            width: 138px;
            height: 48px;
            background-color: rgb(255, 185, 87);
            color: rgb(255, 255, 255);
            font-weight: bold;
            border-radius: 5px;
            border: 0;
        }
    /*<!-- 院校logo -->*/



</style>
<style scoped>
    /*<!-- 招生项目 -->*/
        .collageLine {
            width: 21px;
            height: 4px;
            min-height: auto;
            background-color: rgba(210,210,210,1);
        }
        .itemInformOne p,.basicInform p {
            color: #009fa0;
            font-size: 18px;
            font-weight: bold;
            margin: 0px 0 15px;
        }
        .itemInformOne {
            display: flex;
            justify-content:space-between;
            width: 905px;
        }
        .itemDetails {
            display: flex;
            flex-wrap:wrap;
        }
    /*<!-- 招生项目 -->*/
    /*<!-- 院校logo -->*/
        .collageButton {
            display: flex;
            justify-content:center;
            margin: 9px 0 0;
        }
        .concreteName {
            margin: 0 23px;
            font-size: 28px;
            color: #fcfcfc;
            font-family: Roboto;
            font-weight: bold;
        }
        .nameLine {
            background-color: rgb(255, 185, 87);
            width: 26px;
            height: 4px;
        }
        .collageName {
            display: flex;
            justify-content:center;
            align-items:center;
            margin: 0 auto 17px;
        }
        .collageLogo img {
            width: 100%;
        }
        .collageLogo {
            width: 120px;
            height: 120px;
            margin: 0 auto 30px;
            border-radius: 5px;
            border: rgba(255, 255, 255, 0.1) 2px solid;
            border-width: 5px;
            z-index: 99;
        }
        .backColor {
            border-radius: 5px;
            padding: 40px 0 0;
            height: 320px;
            background-color: rgba(56, 59, 61, 0.85);
        }
        .itemPicture {
            margin: 0 0 30px;
            border-radius: 5px;
            height: 360px;
            background: url(../../../assets/img/singleCollege.jpg) no-repeat;
            background-position: 50% 50%;
            background-size: cover; 
        }
    /*<!-- 院校logo -->*/
        .singleCollageAll {
            width: 1280px;
            margin: 0 auto;
        }
        .singleCollage {
            width: 100%;
            padding: 30px 0 60px;
            background-color: #f5f5f5;
        }
    /** PC **/
    @media only screen and (min-width: 992px) and (max-width:1200px) {
        
        .singleCollageAll {
            width: 100%;
        }

    }
    /** iPad **/
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .itemInformOne {
            width: 100%;
        }
        .itemInform .el-col-8 {
            width: 98%;
            margin-left: 1%;
            padding: 0;
        }
        .itemInform {
            width: 100%;
        }
        .singleCollageAll {
            width: 100%;
        }

    }
    /** iPhone **/
    @media only screen and (min-width: 320px) and (max-width: 767px) {
        .itemInformOne {
            width: 100%;
        }
        .itemInform .el-col-8 {
            width: 96%;
            margin-left: 2%;
            padding: 0;
        }
        .itemInform {
            width: 100%;
        }
        .singleCollageAll {
            width: 100%;
        }
    }
</style>
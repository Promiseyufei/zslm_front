<template>
    <div>
        <div class="bigBox">
            <!-- 面包屑 -->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <img src="../../../assets/img/homeIcon.png">
                    <el-breadcrumb separator-class="el-icon-arrow-right" class="collagebreadcrumb">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>退款服务</el-breadcrumb-item>
                        <el-breadcrumb-item class="activelist">退款申请</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
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

        }
    },
    methods: {

    },
    mounted(){

    },
};
</script>
<style>
    .activelist span{
        color: #009FA1 !important;
        font-weight: bold !important;
    }
</style>
<style scoped>
.bigBox {
    background-color: rgb(245, 245, 245);
    padding-bottom: 10px;
}
.singlecoachBig {
    display: flex;
    justify-content: center;
}
.singlecoachbox {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: center;
}
.collagebreadcrumb {
    margin:35px 8px 30px;
}
</style>
    
    
<template>
    <div>
        <div>
            <hearderBanner enName="COLLEGES" name="选院校"></hearderBanner>
            <!-- <div class="selectCollege">
                <div class="selectCollegeSearch">
                    <el-input
                        placeholder="请输入关键字搜索"
                        suffix-icon="el-icon-search"
                        v-model="searchContent">
                    </el-input>
                </div>
                <radioButton></radioButton>
            </div> -->
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
        }
    },
    methods: {

    },
    mounted(){

    },
};
</script>
<style>

    .selectCollegeSearch .el-input__inner {
        border-radius: 60px;
        height: 32px;
    }
</style>
<style scoped>
    .selectCollegeSearch {
        width: 407px;
        margin: 49px 0 44px;
    }
    .selectCollege {
        width: 1280px;
        margin: 0 auto;
        /*background-color: #f5f5f5;*/
        /*display: flex;*/
        /*flex-direction: column ;*/
        /*align-items:center;*/
    }
</style>
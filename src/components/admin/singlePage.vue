<template>
    <!-- 分页 -->
    <!-- <singlePage :currentPage = "currentPage" :totalData = "totalData"></singlePage> -->
    <div class="apartPage">
        <div class="countPage">
            <span>共{{Math.ceil(totalData/size)}}页</span>
            <span v-text="'/' + totalData + '条'"></span>
        </div>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage2"
            :page-size="size"
            layout="prev, pager, next, jumper"
            :total="totalData">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage2: this.currentPage,
            // totalData2: this.totalData,
            size: 10
        };
    },

    props:["currentPage", "totalData"],
    methods:{
        //改变当前页时，触发事件,val为当前页
        handleCurrentChange(val) {
            // console.log(val)
            this.currentPage2 = val;
            this.$emit('use',this.currentPage2);
        },
        childMethod: function(res) {
            this.totalData = res;
        }
    },
    mounted(){
        // console.log(this.totalData2);
    }
}
</script>

<style>
    /*
    * 分页样式
    */
    .apartPage li, .apartPage button {
        /*border: 1px solid #d7d7d7 !important;*/
        margin-right: 10px;
        border-radius: 3px;
        color: #999;
    }
    .apartPage .btn-prev {
        margin-right: 10px;
        padding-right: 6px;
        color: #999;
    }
    .apartPage .btn-next {
        padding-left: 6px;
        color: #999;
    }
    .apartPage .active {
        border: 1px solid #1abc9c !important;
        color: #fff !important;
        background: #1abc9c;
    }
    .apartPage .active:hover {
        color: #fff !important;
    }
    .apartPage li:hover {
        color: #1abc9c !important;
    }
    .apartPage button:hover {
        color: #1abc9c !important;
    }
</style>
<style scoped>
    /*
    * 分页样式
    */
    .apartPage {
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 20px;
    }
    .apartPage span {
        float: left;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        font-weight: 400;
        color: #606266;
    }
    .apartPage active {
        border: 1px solid #1abc9c !important;
    }
    .countPage {
        margin-right: 15px;
    }
</style>

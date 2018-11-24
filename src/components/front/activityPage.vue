<template>
    <!-- 分页 当前页 总数 每页显示个数-->
    <!-- <activityPage :currentPage="pageNumber" :totalData="count" :size="pageCount" @use="changePageNum"></activityPage> -->

    <div class="apartPage">
       <!--  <div class="countPage">
            <span>共{{Math.ceil(totalData/size)}}页</span>
            <span v-text="'/' + totalData + '条'"></span>
        </div> -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalData"
          :current-page="currentPage2"
          @current-change="handleCurrentChange"
          :page-size="size"
          prev-text="上一页"
          next-text="下一页">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage2: this.currentPage,
            // totalData2: this.totalData,
        };
    },

    props:["currentPage", "totalData","size"],
    methods:{
        //改变当前页时，触发事件,val为当前页
        handleCurrentChange(val) {
            this.currentPage2 = val;
            this.$emit('use',this.currentPage2);
        },
    },
    mounted(){
        // console.log(this.totalData);
        // console.log(this.currentPage);
        // console.log(this.size);
    }
}
</script>

<style>
    .apartPage span{
        background-color: #f9f9f9;
        border-radius: 5px;
        border: solid 1px #bfbfbf;
        padding-left: 10px;
        padding-right: 11px;
    }
    .apartPage li{
        /*background-color: #009fa0;*/
        border-radius: 5px;
        border: solid 1px #bfbfbf !important;
        background-color: #f4f4f5;
    }
    .apartPage .active{
        background-color: #009fa0;
    }
</style>
<style scoped>
    /*分页样式*/
    .apartPage{
        margin-top: 56px;
        margin-bottom: 76px;
        text-align: center;
    }

</style>

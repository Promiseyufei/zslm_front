<template>
    <!-- 分页参数： 
        手机端参数
            loading:false,//加载小圈圈
        pc端分页
            currentPage当前页
            totalData总数
            size每页显示个数
    -->
    <!-- <pcPhonePage class="pcPage" :loading="loading" :currentPage="pageNumber" :totalData="count" :size="pageCount" @use="changePageNum" @getPage="getPage"></pcPhonePage> -->
<div>
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
    <div class="phoneLeadBtn">
        <el-button class="leadBtn" type="text" @click="getPage" :loading="loading" :disabled="disabled">{{ loadingBtnText }}</el-button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentPage2: this.currentPage,
            // totalData2: this.totalData,
            disabled:false,
            loadingBtnText:'加载更多',
            count:1
        };
    },

    props:["currentPage", "totalData","size", "loading"],
    methods:{
        //pc改变当前页时，触发事件,val为当前页
        handleCurrentChange(val) {
            this.currentPage2 = val;
            this.$emit('use',this.currentPage2);
        },
        // phone滑动加载按钮
        getPage(){
            // 当前页*每页显示个数 >= 总数 时加载全部结束
            this.count = this.count+1;
            if(this.count*this.size >= this.totalData){
                this.disabled = true;
                this.loadingBtnText = "————我是有底线的————";
                this.count = 1;
            }
            this.$emit('getPage');
        }, 
    },
    mounted(){
        //刚开始是否已经加载完
        if(this.count*this.size >= this.totalData){
            this.disabled = true;
            this.loadingBtnText = "————我是有底线的————";
            this.count = 1;
        }
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

    /*加载更多*/
    .phoneLeadBtn{
        margin-bottom: 10px; 
        margin-left: 10px;
        margin-right: 10px;
        width: 95%;
    }
    .phoneLeadBtn .leadBtn{
        color: #fff;
        background-color: #009fa0;
        width: 100%;
    }
</style>
<style scoped>
    /*分页样式*/
    .apartPage{
        margin-top: 56px;
        margin-bottom: 76px;
        text-align: center;
    }

    @media only screen and (max-width: 767px) {
        .apartPage{
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        .pcPageDiv .pcPage{
            display: block;
        }
        .phoneLeadBtn .leadBtn{
            display: none;
        }
    }
</style>

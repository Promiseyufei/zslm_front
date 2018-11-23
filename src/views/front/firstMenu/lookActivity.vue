<template>
    <div>
        <hearderBanner enName="COLLEGES" name="选院校"></hearderBanner>
        <!-- 活动列表模块 -->
        <div class="activityList">
            <div class="activityListBox">
                <!-- 单个活动块 -->
                <activityBox v-for="(item,index) in info"  :key="index" :activityInfo="item"></activityBox>
                
            </div>
            <activityPage :currentPage="pageNumber" :totalData="count" :size="pageCount" @use="changePageNum"></activityPage>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            keyword:'',//搜索关键字
            province:[],//选择的省份数组
            majorType:[],//专业类型的id数组
            activityType:[],//活动类型的id数组
            activityState:[],//活动开始状态数组:0未开始 1进行中 2已结束
            activityDate:1,//月份 1~12

            pageCount:12,//分页显示的行数
            pageNumber:1,//分页显示的下标

            count:0,//筛选后活动总数

            info:[],//活动信息
        }
    },
    methods: {
        // 活动列表页---通过筛选条件获得的活动列表数据
        getActivityList:function(){
            var self = this;
            axios.get('/front/activity/getActivity',{
                keyword:self.keyword,
                province:self.province,
                majorType:self.majorType,
                activityType:self.activityType,
                activityState:self.activityState,
                activityDate:self.activityDate,
                pageCount:self.pageCount,
                pageNumber:self.pageNumber
            }).then(function (response) {
                let res = response.data;
                if(res.code == 0){
                    // console.log(res.data[0].info);
                    self.count = res.data[0].count;
                    // console.log(self.count);
                    self.info = res.data[0].info;
                    self.message(true, "活动列表加载成功", 'success');

                }
                else{
                    self.message(true, "加载失败，请重试", 'info');
                }
            }).catch(function(error){
                console.log("error");
            });
        },

        changePageNum(pageNum) {
            this.pageNumber = pageNum;
            this.getActivityList();
        },

        // 活动列表页筛选部分---获得活动的专业类型字典
        getActivityType:function(){
            var self = this;
            axios.get('/front/colleges/getCollegesType',{
                
            })
            .then(res=>{
                console.log(res.data);
                if(res.code == 0){
                    // self.count = res.data.count;
                    // self.info = res.data.info;
                    // self.message(true, "活动列表加载成功", 'success');
                }
                else{
                    self.message(true, "加载失败，请重试", 'info');
                }
            })
            .catch(function(error){
                console.log("error");
            });
        }
    },
    mounted(){
        this.getActivityList();
    },
};
</script>
<style>
</style>
<style scoped>
    .activityList{
        width: 100%;
        overflow: hidden;
        background-color: rgb(245, 245, 245);
    }

    .activityListBox{
        display: flex;
        /*换行，默认左对齐*/
        flex-wrap: wrap; 
        margin-right: auto;
        margin-left: auto;
        min-height: auto;
        margin-bottom: 20px;
    }
    
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        .activityListBox{
            background-attachment: initial !important;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        .activityListBox{
            background-attachment: initial !important;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        
    } 

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        
    } 

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        .activityListBox{
            width: 1300px;
        }
    }   

</style>
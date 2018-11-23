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

            // 筛选块列表数据
            activitySelect:[{
                allMajorType:[],//所有专业类型的id数组
                allProvince:[
                    {
                        id:1,
                        name:"北京"
                    },
                    {
                        id:2,
                        name:"天津"
                    },
                    {
                        id:3,
                        name:"上海"
                    },
                    {
                        id:4,
                        name:"重庆"
                    },
                    {
                        id:5,
                        name:"河北"
                    },
                    {
                        id:1,
                        name:"北京"
                    },
                    {
                        id:6,
                        name:"山西"
                    },
                    {
                        id:7,
                        name:"台湾"
                    },
                    {
                        id:8,
                        name:"辽宁"
                    },
                    {
                        id:9,
                        name:"吉林"
                    },
                    {
                        id:10,
                        name:"黑龙江"
                    },
                    {
                        id:11,
                        name:"江苏"
                    },
                    {
                        id:12,
                        name:"浙江"
                    },
                    {
                        id:13,
                        name:"安微"
                    },
                    {
                        id:14,
                        name:"福建"
                    },
                    {
                        id:15,
                        name:"江西"
                    },
                    {
                        id:16,
                        name:"山东"
                    },
                    {
                        id:17,
                        name:"河南"
                    },
                ],//所有省份数组
                allActivityType:[],//所有活动类型的id数组
                studyCost:[
                    {
                        id:0,
                        name:"未开始"
                    },
                    {
                        id:1,
                        name:"进行中"
                    },
                    {
                        id:2,
                        name:"已结束"
                    },
                ],//活动状态
                gradeLine:[
                    {
                        id:1,
                        name:"一月"
                    },
                    {
                        id:2,
                        name:"二月"
                    },
                    {
                        id:3,
                        name:"三月"
                    },
                    {
                        id:4,
                        name:"四月"
                    },
                    {
                        id:5,
                        name:"五月"
                    },
                    {
                        id:6,
                        name:"六月"
                    },
                    {
                        id:7,
                        name:"七月"
                    },
                    {
                        id:8,
                        name:"八月"
                    },
                    {
                        id:9,
                        name:"九月"
                    },
                    {
                        id:10,
                        name:"十月"
                    },
                    {
                        id:11,
                        name:"十一月"
                    },
                    {
                        id:12,
                        name:"十二月"
                    },
                ],//时间1-12月
            }],
        }
    },
    methods: {
        // 活动列表页---通过筛选条件获得的活动列表数据
        getActivityList:function(){
            var self = this;
            this.fetch('/front/activity/getActivity',{
                keyword:self.keyword,
                province:self.province,
                majorType:self.majorType,
                activityType:self.activityType,
                activityState:self.activityState,
                activityDate:self.activityDate,
                pageCount:self.pageCount,
                pageNumber:self.pageNumber
            }).then(function (res) {
                // let res = response.data;
                if(res.code == 0){
                    // console.log(res.data[0].info);
                    self.count = res.data[0].count;
                    // console.log(self.count);
                    self.info = res.data[0].info;
                    // self.message(true, "活动列表加载成功", 'success');
                }
                else{
                    self.message(true, "加载失败，请重试", 'info');
                }
            }).catch(function(error){
                console.log("error");
            });
        },

        // 在活动列表页————筛选部分————获得活动的专业字典
        getCollegesType:function(){
            var self = this;
            this.fetch('/front/colleges/getCollegesType',{
               
            }).then(function (res) {
                // console.log(res);
                if(res.code == 0){
                    self.activitySelect.allMajorType = res.result;
                    // console.log(self.activitySelect.allMajorType);
                }
                else{
                    self.message(true, "加载失败，请重试", 'info');
                }
            }).catch(function(error){
                console.log("error");
            });
        },

        // 在活动列表页————筛选部分————获得活动的类型字典
        getActivityType:function(){
            var self = this;
            this.fetch('/front/activity/getActivityType',{
               
            }).then(function (res) {
                if(res.code == 0){
                    self.activitySelect.allActivityType = res.result;
                    // console.log(self.activitySelect.allActivityType);
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

    },
    mounted(){
        this.getCollegesType();
        this.getActivityType();
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
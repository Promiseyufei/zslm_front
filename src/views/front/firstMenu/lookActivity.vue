<template>
    <div>
        <hearderBanner enName="COLLEGES" name="选院校"></hearderBanner>
        <!-- 活动列表模块 -->
        <div class="activityList">
            <div class="activityListBox">
                <!-- 单个活动块 -->
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
                <activityBox></activityBox>
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
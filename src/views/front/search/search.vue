<template>
    <div class="search" style="z-index:0;">

        <!-- 搜索页面导航 -->
        <div class="search_header" style="z-index:1;">
            <search-header></search-header>    
        </div>

        <!-- 面包屑 -->
        <div class="crumbs" style="z-index:1;">
            <div class="mianbao section_bUBpNL c-section">
                <div class="container_tPJRDM c-container container">
                    <div class="div_PHerR2">
                        <img class="c-image image_YLRWqP" src="http://qty83k.creatby.com/materials/2771/origin/d38e0d91e82be1f717b1c33cec9f34df_origin.png" alt="">
                        <a class="c-textlink textlink_9Rp72B" href="#">首页</a>
                        <label class="c-label label_glfPoo">&gt;</label>
                        <a class="c-textlink textlink_9Rp72B dangqian" href="#">搜索结果</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 主题部分 -->
        <div class="section_bUBpNL" style="z-index:1">
            <div class="row_EaN5GL c-row row_flex">
                <!-- 左边主要部分 -->
                <div class="row_left row_padding">
                    <!-- 标签页导航 -->
                    <searchLablePageHead :names="names"></searchLablePageHead>
                    <router-view></router-view>
                    <!-- <div class="c-div div_v60iAm xiangqingye xiangqingye_flex">
                        <h1 class="c-heading heading_XwQWQq">当前搜索关键字为“院校”，小助手找到了以下内容：</h1>
                    </div> -->
                </div>

                <!-- 右边主要部分 -->
                <div class="row_right row_padding">
                    <searchSearchInput></searchSearchInput>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            names: [
                 {name:'院校', selected_prop_value:null, url:'/front/search/major'},
                {name:'咨询', selected_prop_value:null, url:'/front/search/info'}, 
                {name:'辅导', selected_prop_value:null, url:'/front/search/coach'}, 
                {name:'活动', selected_prop_value:null, url:'/front/search/activity'}
            ]
        }
    }
}
</script>

<style scoped>

 /* 面包屑部分样式 */
.crumbs .mianbao {
    padding-bottom: 32px;
    padding-top: 56px;
}
.crumbs .section_bUBpNL {
    background-color: rgb(245, 245, 245);
    min-height: auto;
    /* padding-bottom: 60px; */
    position: relative;
    z-index: -2;
}
.crumbs .c-section {
    padding-left: 0;
    padding-right: 0;
}
.crumbs .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.mianbao .container_tPJRDM {
    width: 1280px;
    min-height: auto;
    padding-left: 0px;
    padding-right: 0px;
}
@media (max-width: 767px) {
    .container_tPJRDM {
        width: auto;
    }
}
@media (min-width: 1200px) {

    .c-container {
        width: 940px;
    }
}
.mianbao .div_PHerR2 {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.mianbao .c-image {
    margin-right: 6px;
}
.mianbao .image_YLRWqP {
    height: auto;
    width: auto;
    max-width: 100%;
    display: inline-block;
}
.mianbao .textlink_9Rp72B {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #6e6e6e;
    text-decoration: none;
}
.mianbao label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
.mianbao .label_glfPoo {
    font-family: SimSun;
    color: rgb(110, 110, 110);
    margin-left: 6px;
    margin-right: 6px;
    display: block;
    margin-bottom: 0px;
    font-weight: 100;
}
.div_PHerR2 .textlink_9Rp72B {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #6e6e6e;
}
.textlink_9Rp72B.dangqian {
    color: rgb(0, 159, 160);
    font-weight: bold;
}

/* 主体布局 */
.search .section_bUBpNL {
    background-color: rgb(245, 245, 245);
    min-height: auto;
    /* padding-bottom: 60px; */
    position: relative;
    z-index: -2;
    padding-left: 0;
    padding-right: 0;
}

.section_bUBpNL .row_EaN5GL {
    width: 1300px;
    margin-left: auto;
    margin-right: auto;
}
.section_bUBpNL .c-row {
    padding-right: 0;
    padding-left: 0;
    word-spacing: -4px;
}
.section_bUBpNL .row_flex {
    display: flex;
    flex-direction:row;
    flex-wrap: nowrap;
}
.section_bUBpNL .row_padding {
    padding-left: 10px;
    padding-right: 10px;
}
@media (min-width: 1200px) {
    .row_left {
        width: 75%;
    }
    .row_right {
        width: 25%;
    }
}

</style>

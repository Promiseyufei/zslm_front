<template>
    <div id="search_activity">
        <div class="div_rTx1Nf">
            <h1 class="c-heading heading_XwQWQq jieguohuodong">当前搜索关键字为“活动”，小助手找到了以下内容：</h1>
            <div class="activitys">
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
    
}
</script>

<style scoped>

.activitys {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
#search_activity .div_rTx1Nf {
    padding-top: 10px;
    min-height: 80px;
}
#search_activity .div_rTx1Nf .heading_XwQWQq.jieguohuodong {
    margin-left: 10px;
    margin-bottom: 20px;
}
#search_activity .div_rTx1Nf .heading_XwQWQq {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: rgb(49, 49, 49);
    margin-top: 0px;
    margin-bottom: 10px;
}
h1 {
    min-width: 10px;
    min-height: 10px;
}
@media only screen and (min-width: 768px) {
    .activitys .activityBox[data-v-1be92314] {
        width: 33.3% !important;
    }
}


</style>

<template>
    <div id="search_coach">
        <div class="div_rTx1Nf">
            <h1 class="c-heading heading_XwQWQq jieguohuodong">当前搜索关键字为“辅导”，小助手找到了以下内容：</h1>
            <div class="coachs">
                <searchCoachBox></searchCoachBox>
                <searchCoachBox></searchCoachBox>
                <searchCoachBox></searchCoachBox>
                <searchCoachBox></searchCoachBox>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.coachs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
#search_coach .div_rTx1Nf {
    padding-top: 10px;
    min-height: 80px;
}
#search_coach .div_rTx1Nf .heading_XwQWQq.jieguohuodong {
    margin-left: 10px;
    margin-bottom: 20px;
}
#search_coach .div_rTx1Nf .heading_XwQWQq {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: rgb(49, 49, 49);
    margin-top: 0px;
    margin-bottom: 10px;
}
#search_coach h1 {
    min-width: 10px;
    min-height: 10px;
}
</style>

<template>
    <div id="search_coach">
        <div class="div_rTx1Nf">
            <h1 class="c-heading heading_XwQWQq jieguohuodong">当前搜索关键字为“{{ keyword }}”，小助手找到了以下内容：</h1>
            <div class="coachs">
                <searchCoachBox v-for="(item, index) in coachs" :key="index" :coachInfo="item"></searchCoachBox>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword:'',
            pageNumber: 1,
            pageCount:6,
            coachs: []
        }
    },
    methods: {
        getCoach() {
            this.fetch('/front/coach/getcoachbyname', {
                name: this.keyword,
                page: this.pageNumber,
                page_size: this.pageCount
            }).then((response) => {
                if(response.code == 0) {
                    // console.log(response.result);
                    this.coachs = response.result;
                }
                else this.message(true, response.msg, 'info');
            })
        }
    },
    mounted() {
        if(typeof this.$route.params.keyword != 'undefined') {
            this.keyword = this.$route.params.keyword;
            // this.$store.commit('changeSearch', {name:'keyword', val: this.$route.params.keyword});
        }
        this.$store.commit('changeSearch', {name:'nowUrl', val: this.getChangeUrl(this.$route.path)});
        this.getCoach();
    }
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

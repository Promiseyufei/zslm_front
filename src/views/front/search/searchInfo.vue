<template>
    <div id="search_info">
        <div class="div_v60iAm xiangqingye">
            <h1 class="c-heading heading_XwQWQq">当前搜索关键字为“{{ keyword }}”，小助手找到了以下内容：</h1>
            <subPage :shortArticles="info"></subPage>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
            pageNumber:1,
            pageCount: 5,
            info: []
        }
    },
    methods: {
        getInfo() {
            // console.log(this.keyword);
            this.fetch('/front/consult/getSearchConsult', {
                keyword: this.keyword,
                pageNumber: this.pageNumber,
                pageCount: this.pageCount
            }).then((response) => {
                if(response.code == 0) {
                    this.info = response.result;
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
        this.getInfo();
    }
}
</script>

<style scoped>
@import "../../../assets/css/searchXiangqing.css";
</style>

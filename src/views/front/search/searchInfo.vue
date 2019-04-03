<template>
    <div id="search_info">
        <div class="div_v60iAm xiangqingye">
            <h1 class="c-heading heading_XwQWQq" v-if="keyword != ''">当前搜索关键字为“{{ keyword }}”，小助手找到了以下内容：</h1>
            <subPage :shortArticles="info" @detail="putInfoDetail"></subPage>
        </div>
        <pcPhonePage :totalData="count" :size="pageCount" :currentPage="pageNumber" :loading="loading" @use="getInfo" @getPage="getPage"></pcPhonePage>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
            loading:false,
            count:0,
            pageNumber:1,
            pageCount: 5,
            info: []
        }
    },
    methods: {
        getInfo(number) {
            // console.log(this.keyword);
            this.pageNumber = number;
            this.fetch('/front/consult/getSearchConsult', {
                keyword: this.keyword,
                pageNumber: this.pageNumber,
                pageCount: this.pageCount
            }).then((response) => {
                if(response.code == 0) {
                    this.count = response.result.count;
                    this.info = response.result.info;
                }
                else this.message(true, response.msg, 'info');
            })
        },
        getPage() {
            this.loading = true;
            this.pageNumber += 1;
            this.fetch('/front/consult/getSearchConsult', {
                keyword: this.keyword,
                pageNumber: this.pageNumber,
                pageCount: this.pageCount
            }).then((response) => {
                if(response.code == 0) {
                    this.info = this.info.concat(response.result.info);
                }
                else this.message(true, response.msg, 'info');
            })
        },
        putInfoDetail(infoId) {
            let routeUrl = this.$router.resolve({
                path:'/front/firstMenuRouter/viewInformation/singleInformation/' + infoId,
            });
            window.open(routeUrl.href, '_blank');
        }
    },
    mounted() {
        if(typeof this.$route.params.keyword != 'undefined') {
            this.keyword = this.$route.params.keyword;
            this.$store.commit('changeSearch', {name:'keyword', val: this.$route.params.keyword});
        }
        this.$store.commit('changeSearch', {name:'nowUrl', val: this.getChangeUrl(this.$route.path)});
        this.getInfo(this.pageNumber);
    }
}
</script>

<style scoped>
@import "../../../assets/css/searchXiangqing.css";
</style>

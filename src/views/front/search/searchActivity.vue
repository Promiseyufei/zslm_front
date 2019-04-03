<template>
    <div id="search_activity">
        <div class="div_rTx1Nf">
            <h1 class="c-heading heading_XwQWQq jieguohuodong" v-if="keyword != ''">当前搜索关键字为“{{ keyword }}”，小助手找到了以下内容：</h1>
            <div class="activitys">
                <activityBox v-for="(item, index) in activitys" :key="index" :activityInfo="item"></activityBox>
            </div>
        </div>
        <pcPhonePage :totalData="count" :size="pageCount" :currentPage="pageNumber" :loading="loading" @use="getActivity" @getPage="getPage"></pcPhonePage>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword:'',
            count: 0,
            loading: false,
            pageCount:9,
            pageNumber:1,
            activitys:[]
        }
    },
    methods: {
        getActivity(number) {
            this.pageNumber = number;
            this.fetch('/front/activity/getSearchActivity', {
                keyword: this.keyword,
                pageCount: this.pageCount,
                pageNumber: this.pageNumber
            }).then((response) => {
                if(response.code == 0) {
                    this.count = response.result.count;
                    this.activitys = response.result.activitys;
                }
                else this.message(true, response.msg, 'info');
            })
        },
        getPage() {
            this.loading = true;
            this.pageNumber += 1;
            this.fetch('/front/activity/getSearchActivity', {
                keyword: this.keyword,
                pageCount: this.pageCount,
                pageNumber: this.pageNumber
            }).then((response) => {
                if(response.code == 0) {
                    this.count = response.result.count;
                    this.activitys = this.activitys.concat(response.result.activitys);
                }
                else this.message(true, response.msg, 'info');
            })
        }
    },
    mounted() {
        if(typeof this.$route.params.keyword != 'undefined') {
            this.keyword = this.$route.params.keyword;
            this.$store.commit('changeSearch', {name:'keyword', val: this.$route.params.keyword});
        }
        this.$store.commit('changeSearch', {name:'nowUrl', val: this.getChangeUrl(this.$route.path)});
        this.getActivity(this.pageNumber);
    }
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
    /*padding-top: 10px;*/
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
#search_activity h1 {
    min-width: 10px;
    min-height: 10px;
}
@media only screen and (min-width: 768px) {
    .activitys .activityBox{
        width: 31.2% !important;
    }
}


</style>

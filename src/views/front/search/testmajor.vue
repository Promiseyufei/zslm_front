<template>
    <div id="search_major">
        <div class="div_v60iAm xiangqingye">
            <h1 class="c-heading heading_XwQWQq">当前搜索关键字为“{{ keyword }}”，小助手找到了以下内容：</h1>
            <searchMajorModular  v-for="(item, index) in majors" :key="index" :majorInfo="item"></searchMajorModular>
        </div>
        <pcPhonePage :totalData="count" :size="pageCount" :currentPage="pageNumber" :loading="loading" @use="getMajor" @getPage="getPage"></pcPhonePage>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword:'',
            pageNumber:1,
            pageCount:5,
            count:0,
            loading:false,
            majors:[]
        }
    },
    methods: {                                                                          
        getMajor(number) {
            this.pageNumber = number;
            this.fetch('/front/colleges/getcollegebyname', {
                name: this.keyword,
                page: this.pageNumber,
                page_size: this.pageCount
            }).then((response) => {
                console.log(response)
                if(response.code == 0) {
                    this.count = response.result.count;
                    this.majors = response.result.majors;
                }
                else this.message(true, response.msg, 'info'); 
            })
        },
        getPage() {
            this.loading = true;
            this.pageNumber += 1;
            this.fetch('/front/colleges/getcollegebyname', {
                name: this.keyword,
                page: this.pageNumber,
                page_size: this.pageCount
            }).then((response) => {
                if(response.code == 0) {
                    this.majors = this.majors.concat(response.result.majors);
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
        this.getMajor(this.pageNumber);

    }
    
}
</script>

<style scoped>
@import "../../../assets/css/searchXiangqing.css";

@media (max-width: 767px) {
    .div_v60iAm.xiangqingye {
        padding-left: 10px;
        padding-right: 10px;
    }
}
@media (max-width: 767px) {
    .div_v60iAm {
        padding-left: 10px;
        padding-right: 10px;
    }
}
@media (max-width: 767px) {
    * {
        background-attachment: initial !important;
    }
}


</style>

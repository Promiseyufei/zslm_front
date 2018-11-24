<template>
    <div id="search_major">
        <div class="div_v60iAm xiangqingye">
            <h1 class="c-heading heading_XwQWQq">当前搜索关键字为“{{ keyword }}”，小助手找到了以下内容：</h1>
            <searchMajorModular  v-for="(item, index) in majors" :key="index" :majorInfo="item"></searchMajorModular>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword:'',
            pageNumber:1,
            pageCount:5,
            majors:[]
        }
    },
    methods: {                                                                          
        getMajor() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            this.fetch('/front/colleges/getcollegebyname', {
                name: this.$store.state.search['keyword'],
                page: this.pageNumber,
                page_size: this.pageCount
            }).then((response) => {
                if(response.code == 0) {
                    this.majors = response.result;
                }
                else this.message(true, response.msg, 'info'); 
            })
        },
        getChangeUrl(url) {
            var arr=url.split("/");
            arr.shift();
            if(arr.length !== 3)
                arr.pop();  
            var str = '/';
            arr.forEach((item => {
                str += (item + '/');
            }));
            return str;
        }
    },
    mounted() {
        if(typeof this.$route.params.keyword != 'undefined') {
            this.keyword = this.$route.params.keyword;
            this.$store.commit('changeSearch', {name:'keyword', val: this.$route.params.keyword});
        }
        this.$store.commit('changeSearch', {name:'nowUrl', val: this.getChangeUrl(this.$route.path)});
        this.getMajor();

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

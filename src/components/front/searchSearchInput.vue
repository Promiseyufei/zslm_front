<template>
    <div class="search_search_input">
        <div class="c-div div_v60iAm biaoqian sousuo">
            <div class="searchbox_PZpLzg">
                <input class="c-search-box-input c-input input_3ty5SK" name="input1" placeholder="输入关键词进行搜索" type="text"  v-model="keyword" @keyup.enter="enter">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword:''
        }
    },
    methods: {
        enter() {
            this.$store.commit('changeSearch', {name:'keyword', val: this.keyword});
            this.$emit('changeKeyword', this.keyword);
        }
    },
    mounted() {
        if(this.$store.state.search['keyword'] != '') this.keyword = this.$store.state.search['keyword'];
    }
}
</script>

<style scoped>
.search_search_input {
    margin-right:10px;
}
.search_search_input input {
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    font: inherit;
}
.search_search_input .div_v60iAm.biaoqian.sousuo {
    padding-top: 0px;
}
.search_search_input .div_v60iAm.biaoqian {
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    min-height: auto;
    padding-top: 22px;
    height: 65px;
}
.search_search_input .div_v60iAm {
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    border-style: none;
    padding-left: 30px;
    padding-right: 30px;
    transform: rotate(0deg) scale(1) translate(0%,0%);
    transition: All 0.3s ease;
    -ms-transform: rotate(0deg) scale(1) translate(0%,0%);
    -o-transform: rotate(0deg) scale(1) translate(0%,0%);
    -moz-transform: rotate(0deg) scale(1) translate(0%,0%);
    -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
    -ms-transition: All 0.3s ease;
    -o-transition: All 0.3s ease;
    -moz-transition: All 0.3s ease;
    -webkit-transition: All 0.3s ease;
}
.sousuo .searchbox_PZpLzg {
    min-height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.searchbox_PZpLzg .c-input {
    display: block;
    width: 100%;
    /* height: 100%; */
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
}
.searchbox_PZpLzg .input_3ty5SK {
    /* height: 65px; */
    margin-bottom: 0px;
    max-width: 800px;
    border-style: none;
    font-size: 16px;
    background-image: url('http://qty83k.creatby.com/materials/2771/origin/060001cc8b7b4418f3207641bcd5a90b_origin.png');
    background-repeat: no-repeat;
    background-position: 0% 50%;
    padding-left: 30px;
    padding-right: 0px;
}
.div_v60iAm:hover {
    box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
    transform: rotate(0deg) scale(1) translate(0%,0%);
    transition: All 0.3s ease;
    -ms-transform: rotate(0deg) scale(1) translate(0%,0%);
    -o-transform: rotate(0deg) scale(1) translate(0%,0%);
    -moz-transform: rotate(0deg) scale(1) translate(0%,0%);
    -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
    -ms-transition: All 0.3s ease;
    -o-transition: All 0.3s ease;
    -moz-transition: All 0.3s ease;
    -webkit-transition: All 0.3s ease;
}
@media (max-width: 767px) {
    .search_search_input {
        margin-right: 0;
    }
    .search_search_input .div_v60iAm.biaoqian {
        padding-left: 10px;
        padding-right: 10px;
        overflow: scroll;
        overflow-y: hidden;
    }
}


</style>

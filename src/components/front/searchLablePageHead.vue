<template>
    <div class="search_label_page_head">
        <div class="c-div div_v60iAm biaoqian">
            <a class="c-textlink textlink_jH6Kkn" :class="{'xuanzhong': i == index}" v-for="(item, index) in Names" :ref="index" @click="testClick(item, index)" :key="index" href="javaScript:void(0)">{{ item.name }}</a>

        </div>
    </div>
</template>

<script>
export default {
    props:['names'],
    data() {
        return {
            Names: this.names,
            i: 0
        }
    },
    methods: {
        forCancelStyle() {
            let _this = this;
            for(let i = 0; i < this.Names.length; i++) {
                _this.Names[i].selected_prop_value = -1;
            }
            return true;
        },
        testClick(item, index) {
            this.i = index
            // $(".c-textlink").css("color","rgb(49, 49, 49)");
            // $(".c-textlink").css("border-bottom-width","0");
//            $($(".c-textlink")[0]).css("color","rgb(0, 159, 160)");
//            $($(".c-textlink")[0]).css("border-bottom","3px  rgb(0, 159, 160) solid");
//            $($(".c-textlink")[0]).css("font-weight","bold");
            // $($(".c-textlink")[index]).css("color","rgb(0, 159, 160)");
            // $($(".c-textlink")[index]).css("border-bottom","2px  rgb(0, 159, 160) solid");
            // if(this.forCancelStyle()) {
            //     this.Names[index].selected_prop_value = index;
            // }

            // if(this.forCancelStyle()) {

            // }
            this.$emit('labelHeadClick', item);
            sessionStorage.setItem('isSelect', this.i)



        }
    },
    mounted() {
        this.i = sessionStorage.getItem('isSelect')
    }
}
</script>

<style scoped>
.search_label_page_head * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.search_label_page_head a {
    font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
    text-decoration: none;
}

.search_label_page_head .div_v60iAm.biaoqian {
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    min-height: auto;
    padding-top: 22px;
    height: 65px;
}
.search_label_page_head .div_v60iAm {
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
.search_label_page_head .textlink_jH6Kkn.xuanzhong {
    color: rgb(0, 159, 160);
    border-style: none none solid;
    border-color: rgb(0, 159, 160);
    border-width: 3px;
    font-weight: bold;
}
.search_label_page_head .textlink_jH6Kkn.xuanzhong:first-child {
    color: rgb(0, 159, 160);
    border-style: none none solid;
    border-color: rgb(0, 159, 160);
    border-width: 3px;
    font-weight: bold;
}
.search_label_page_head .textlink_jH6Kkn {
    font-size: 16px;
    color: rgb(49, 49, 49);
    height: 100%;
    padding-bottom: 0px;
    display: inline-block;
    margin-right: 46px;
}
.search_label_page_head .div_v60iAm:hover {
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
.search_label_page_head .textlink_jH6Kkn:hover {
    border-style: none none solid;
    border-bottom-color: rgb(0, 159, 160);
    border-bottom-width: 2px;
    color: #009fa0;
}
@media (max-width: 767px) {
    .search_label_page_head .div_v60iAm.biaoqian {
        padding-left: 10px;
        padding-right: 10px;
        overflow: scroll;
        overflow-y: hidden;
    }
}
@media (max-width: 767px) {
    .search_label_page_head .textlink_jH6Kkn.xuanzhong {
        font-size: 12px;
        margin-right: 13px;
    }
}
@media (max-width: 767px) {
    .search_label_page_head .textlink_jH6Kkn {
        margin-right: 15px;
        font-size: 12px;
    }
}


/* .search_label_page_head .textlink_jH6Kkn:first-child{
    font-weight: bold;
    border-style: none none solid;
    border-bottom-color: rgb(0, 159, 160);
    border-bottom-width: 3px;
    color: #009fa0;
} */

</style>

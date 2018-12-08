<template>
    <div> 
        <template v-for="(item, index) in systemList">
            <system :key="index" :news="item"></system>
            <h1 class="hostisy" v-if="index == 4" :key="index">--以下为历史消息--</h1>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsType: 2,
            pageCount: 6,
            pageNumber: 0,
            systemList:[]
        }
    },
    methods: {
        getSystem() {
            let _this = this;
            let phone = '15837587256';
            this.fetch('/front/usercore/getUserNews', {
                userPhone: phone,
                userNewsType: this.newsType,
                pageCount: this.pageCount,
                pageNumber: this.pageNumber
            }).then((response) => {
                if(response.code == 0) {
                    _this.systemList = response.result;
                }
                else this.message(true, response.msg, 'info');
            })
        }
    },
    mounted() {
        this.getSystem();
    }
}
</script>

<style scoped>
@media (max-width: 767px) {
    .hostisy {
        font: 500;
        font-size: 14px;
        width: 100%;
        height: auto;
    }
}
.hostisy {
    font-size: 16px;
    color: 	#808080;
    text-align:center;
    margin-top:25px;
    margin-bottom:25px;
}
</style>

<template>
    <div>
        <template v-for="dynamic in dynamicList">
            <template v-if="dynamic.content_id != null" v-for="(item, key) in dynamic.content_id">
                <majorDynamic v-if="dynamic.content_type == 2" :key="key" :dynamic="item" :newsTime="dynamic.dynamic_create_time"></majorDynamic>
                <majorInfoDynamic v-else-if="dynamic.content_type == 1" :key="key" :dynamic="item" :newsTime="dynamic.dynamic_create_time"></majorInfoDynamic>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: 3,
            pageCount: 6,
            pageNumber: 0,
            dynamicList:[]
        }
    },
    methods: {
        getDynamic() {
            let _this = this;
            let phone = '15837587256';
            // let phone = this.getUserState('user');
            // if(!phone) {
            //     this.message(true, '您的会话已过期，请重新登录');
            //     // console.log(phone);
            //     this.$router.push('/front/Login/loginRoute/shortMessage');
            // }
            // else {
            this.fetch('/front/usercore/getUserNews', {
                userPhone:      phone,
                userNewsType:   _this.type,
                pageCount:      _this.pageCount,
                pageNumber:     _this.pageNumber

            }).then((response) => {
                console.log(response.result);
                if(response.code == 0) {
                    _this.dynamicList = response.result;
                }
                else this.message()
            })
            // }
        }
    },
    mounted() {
        this.getDynamic();
    }
}
</script>

<style scoped>

</style>

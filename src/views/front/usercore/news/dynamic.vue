<template>
    <div>
        <template v-for="dynamic in dynamicList">
            <template v-if="dynamic.content_id != null" v-for="item in dynamic.content_id">
                <majorDynamic v-if="dynamic.content_type == 2"  :dynamic="item" :newsTime="dynamic.dynamic_create_time"></majorDynamic>
                <majorInfoDynamic v-else-if="dynamic.content_type == 1"  :dynamic="item" :newsTime="dynamic.dynamic_create_time"></majorInfoDynamic>
            </template>
        </template>
        <el-button style="float: right" type="text" @click="getPage" :loading="loading" :disabled="disabled">{{ loadingBtnText }}</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            disabled: false,
            type: 3,
            pageCount: 6,
            pageNumber: 0,
            loadingBtnText: '加载更多',
            dynamicList:[]
        }
    },
    methods: {
        getDynamic() {
            let _this = this;
            let phone = this.getUserState('user');
            if(!phone) {
                this.message(true, '您的会话已过期，请重新登录');
                // console.log(phone);
                this.$router.push('/front/Login/loginRoute/shortMessage');
				return;
            }
            // else {
            this.fetch('/front/usercore/getUserNews', {
                userPhone:      phone,
                userNewsType:   _this.type,
                pageCount:      _this.pageCount,
                pageNumber:     _this.pageNumber

            }).then((response) => {
                console.log(response.result);
                if(response.code == 0) {
                    _this.dynamicList = _this.dynamicList.concat(response.result);
                    if(response.result.length == 0) {
                        _this.loadingBtnText = '已经到底了';
                        this.disabled = true;
                    }
                }
                else this.message(true, response.msg, 'info');
            })
            // }
        },
        getPage() {
            this.loading = true;
            this.pageNumber += 1;
            this.getDynamic();
            this.loading = false;
        }
    },
    mounted() {
        this.getDynamic();
    }
}
</script>

<style scoped>

</style>

<template>
    <div id="myNews">
        <searchLablePageHead :names="names" @labelHeadClick="(item) => {$router.push(item.url)}"></searchLablePageHead>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: [
                {name:'院校动态', selected_prop_value:null, url:'/front/firstMenuRouter/usercore/myNews/dynamic'},
                {name:'小助手消息', selected_prop_value:null, url:'/front/firstMenuRouter/usercore/myNews/assistant'},
                {name:'小助手消息', selected_prop_value:null, url:'/front/firstMenuRouter/usercore/myNews/system'},
            ]
        }
    },
    methods: {

    },
    mounted() {
        // let phone = this.getUserState('user');
        // if(!phone) {
        //     this.message(true, '您的会话已过期，请重新登录');
        //     this.$router.push('/front/Login/loginRoute/shortMessage');
        // }
    }
}
</script>

<style scoped>

</style>

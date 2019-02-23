<template>
    <div >
        <div v-for="(item,index) in this.majors" :key="index">
            <user-college :data="item" :id="id"></user-college>
        </div>
        <el-button  style="float: right" type="text" @click="getPage" :loading="loading" :disabled="disabled">{{ loadingBtnText }}</el-button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            majors:[],
            loading:false,
            disabled:false,
            loadingBtnText:'加载更多',
            id:1,
            page:1,
            page_size:3,

        }
    },
    methods: {
        getMajor(){
            let self = this;
            this.fetch('/front/usercore/getusermajor',{id:self.id,page:self.page,page_size:self.page_size})
                .then(res=>{
                    if(res.code == 0){
                        let data = res.result;
                        for(let i in data){
                            self.majors.push(data[i])
                        }
                    }else{
                        self.disabled = true;
                        self.loadingBtnText = "已经到底了"
                    }
                })
        },
        getPage(){
            this.loading = true;
            this.page++;
            this.getMajor();
            this.loading = false;
        }
    },
    mounted() {
        if(!this.getUserState('user')) {
            this.$router.push('/front/Login/loginRoute/accountNumber')
        }
        this.id = this.getUserState("userId")
        this.getMajor();


    }
}
</script>

<style scoped>

</style>

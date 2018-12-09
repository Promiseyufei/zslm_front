<template>
    <div>

        <div v-for="(item,index) in this.active">
            <userActivity :data="item" :id="id"></userActivity>
        </div>
        <el-button style="float: right" type="text" @click="getPage" :loading="loading" :disabled="disabled">{{
            loadingBtnText }}
        </el-button>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                // isCollapse: true,
                id: 1,
                userName: '',
                userProvice: '',
                userCity: '',
                userCollege: 0,
                userActive: 0,
                userNews: 0,
                userCoupon: 0,
                page: 1,
                page_size: 1,
                active: [],
                loading: false,
                disabled: false,
                loadingBtnText: '加载更多'
            };
        },
        methods: {

            info() {
                let self = this;
                this.fetch('/front/usercore/getuserinfo?id=' + self.id)
                    .then(res => {
                        if (res.code == 0) {
                            let result = res.result[0];
                            self.userName = result.user_name;
                            self.userProvice = result.provice
                            self.userCity = result.city
                            self.userCollege = result.majorCount;
                            self.userActive = result.activeCount;
                            self.userNews = result.newCount;
                            self.userCoupon = result.couponCount;
                        }
                    })
            },
            getActive() {
                let self = this;
                this.fetch('/front/activity/getuseractivity', {
                    id: self.id,
                    page: self.page,
                    page_size: self.page_size
                })
                    .then(res => {
                        if (res.code == 0) {
                            let data = res.result['info'];
                            for (let i in data) {
                                self.active.push(data[i])
                            }
                        } else {
                            self.disabled = true;
                            self.loadingBtnText = "已经到底了"
                        }
                    })
            },
            getPage() {
                this.loading = true;
                this.page++;
                this.getActive();
                this.loading = false;
            }
        },

        mounted() {
            let divs = document.getElementsByTagName("div")
            divs[1].style.height = 0;
            divs[2].style.height = 0;
            this.info();
            this.getActive()
        }
    }
</script>
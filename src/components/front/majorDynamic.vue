<template>

    <div class="c-div div_v60iAm guanzhu huodong">
        <div class="row c-row row_E5qvBw">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_KR9WLK">
                <!-- <img class="c-image image_NXxCPj" src="http://qty83k.creatby.com/materials/2771/origin/1f7fb8acff94af6f93a34de300842574_origin.png"> -->
                <img class="c-image image_NXxCPj" :src="dynamic.magor_logo_name">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_S6tf0c">
                <h1 class="c-heading textlink_e6pE3X daliebiao xiaoxi">{{ dynamic.z_name }}</h1>
                <div class="c-div div_VSj9pT">
                    <h1 class="c-heading heading_uRIjB0 xiaoxi">发布了一个新的活动</h1>
                    <h1 class="c-heading heading_uRIjB0 xiaoxi">{{ newsTime }}</h1>
                </div>
            </div>
        </div>
        <div class="row c-row row_F2BBBz">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-column column_QvALNG">
                <div :style="'background-image: url('+ dynamic.active_img +')'" class="c-div div_39Oixh wode xiaoxi"></div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-column column_AfewZV">
                <a class="c-ellipse c-textlink textlink_e6pE3X daliebiao xiaoxi111" href="#">{{ dynamic.active_name }}</a>
                <div class="c-div div_0oZzVH xiangqingye">
                    <div class="c-div div_eQPG16">
                        <img class="c-image image_3wYLxF" src="http://qty83k.creatby.com/materials/2771/origin/9d39297b7527a3125b6f2a8e3eaaec35_origin.png">
                        <h1 class="c-heading heading_58QPWV">活动地址</h1>
                    </div> 
                    <p class="c-paragraph heading_58QPWV bold">{{ dynamic.address }}</p>
                </div>
                <div class="c-div div_0oZzVH xiangqingye">
                    <div class="c-div div_eQPG16">
                        <img class="c-image image_3wYLxF" src="http://qty83k.creatby.com/materials/2771/origin/d93413ec08a849f8633c67e0557be548_origin.png">
                        <h1 class="c-heading heading_58QPWV">活动时间</h1>
                    </div>
                    <p class="c-paragraph heading_58QPWV bold">{{ dynamic.begin_time }}至{{ dynamic.end_time }}</p>
                </div>
                <div class="c-div div_0oZzVH xiangqingye last">
                    <div class="c-div div_eQPG16">
                        <img class="c-image image_3wYLxF" src="http://qty83k.creatby.com/materials/2771/origin/bac6ee1b91168a53f1244429b5c238f4_origin.png">
                        <h1 class="c-heading heading_58QPWV">活动类型</h1>
                    </div>
                    <h1 class="c-heading heading_V5QM03">{{ dynamic.active_type }}</h1>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-column column_MgrNOl">
                <a class="btn c-button button_LsM2yn123 quguan" type="button" @click="signUp">快速报名</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["dynamic", "newsTime"],
    data() {
        return {

        }
    },
    methods: {
        signUp() {
            let userId = this.getUserState('userId');
            if(userId && userId > 0) {
                this.fetch('/front/activity/activitySign', {
                    userId: userId,
                    acId: this.dynamic.id
                }).then((response) => {
                    if(response.code == 0) {
                        this.message(true, '报名成功', 'success');
                    }
                    else this.message(true, '报名失败', 'info');
                })
            }
            else {
                this.message(true, '该用户会话状态已超时，请重新登录');
                this.$router.push('/front/Login/loginRoute/accountNumber');
            }

        }
    },
    mounted() {

    }
}
</script>

<style scoped>
@import '../../assets/css/majorDynamic.css';

</style>


<template>

    <div class="c-div div_v60iAm guanzhu huodong">
        <div class="row c-row row_E5qvBw">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_KR9WLK">
                <img class="c-image image_NXxCPj" :src="dynamic.magor_logo_name">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_S6tf0c">
                <h1 class="c-heading textlink_e6pE3X daliebiao xiaoxi">{{ dynamic.z_name }}</h1>
                <div class="c-div div_VSj9pT">
                    <h1 class="c-heading heading_uRIjB0 xiaoxi">有一条新的相关资讯</h1>
                    <h1 class="c-heading heading_uRIjB0 xiaoxi">{{ newsTime }}</h1>
                </div>
            </div>
        </div>
        <div class="row c-row row_F2BBBz">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-column column_QvALNG">
                <div :style="'background-image: url('+ dynamic.z_image +')'" class="c-div div_39Oixh wode xiaoxi"></div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-column column_AfewZV">
                <a class="c-ellipse c-textlink textlink_e6pE3X daliebiao xiaoxi111" href="#">{{ dynamic.zx_name }}</a>
                <p class="c-ellipse c-paragraph paragraph_XjkcYS">
                    {{ dynamic.brief_introduction }}
                </p>
                <div class="c-div div_QcKVUN kanzixun">
                    <div class="c-div div_IIlwIU kanzixun">
                        <img class="c-image image_tCkiDX" src="http://qty83k.creatby.com/materials/2771/origin/9db5aa337c69de693b44eec51ca7f1e8_origin.png">
                        <h1 class="c-heading heading_3hU4sb grey">{{ dynamic.create_time }}</h1>
                    </div>
                    <div class="c-div div_IIlwIU">
                        <img class="c-image image_tCkiDX" src="http://qty83k.creatby.com/materials/2771/origin/ff1ad5a743abe73d8316a6bc2d680168_origin.png">
                        <h1 class="c-heading heading_3hU4sb grey">{{ dynamic.publisher }}</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-column column_MgrNOl">
                <a class="btn c-button button_LsM2yn123 quguan" type="button" @click="viewDetails">查看详情</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["newsTime", "dynamic"],
    data() {
        return {

        }
    },
    methods: {
        viewDetails() {
            this.$router.push('/front/firstMenuRouter/singleInformation/' + this.dynamic.id);
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
@import '../../assets/css/majorDynamic.css';


.paragraph_XjkcYS {
    width: auto;
    height: auto;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 26px;
    letter-spacing: 0px;
    color: rgb(111, 111, 111);
    -webkit-line-clamp: 2;
}
.div_QcKVUN.kanzixun {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.div_QcKVUN {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 19px;
}
.div_IIlwIU.kanzixun {
    margin-right: 27px;
}
.div_IIlwIU {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 0px;
}
.image_tCkiDX {
    margin-right: 6px;
    display: inline-block;
}
.heading_3hU4sb.grey {
    color: #383b3d;
}
.heading_3hU4sb {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    opacity: 0.7;
}
@media (max-width: 991px) {
    .heading_3hU4sb {
        font-size: 12px;
    }
}

</style>


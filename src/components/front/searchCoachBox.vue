<template>
    <div class="column_iVg8a1" style="z-index:1;">
        <div class="c-div div_u9SQpS white" @click="putCoachDetail(coachInfo.id)">
            <img class="c-image image_LP7GSV fudao" :src="coachInfo.cover_name">
            <div class="c-div div_90yeFT">
                <h1 class="c-heading heading_qcvvsp">{{ coachInfo.coach_name }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['coachInfo'],
    data() {
        return {

        }
    },
    methods: {
        putCoachDetail(coachId) {
            let routeUrl = this.$router.resolve({
                path:'/front/firstMenuRouter/searchCoach/singleCoachs/' + coachId,
            });
            window.open(routeUrl.href, '_blank');
        }
    }
}
</script>

<style scoped>

.column_iVg8a1 {
    width: 31.2%;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    position: static;
}
.c-column {
    word-spacing: normal;
    min-height: 80px;
}
@media (min-width: 1200px) {
    .c-column {
        width: 33.33333333%;
    }
}
.div_u9SQpS.white {
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    position: relative;
    z-index: -1;
}
.div_u9SQpS {
    position: relative;
    border: 1px none rgb(217, 217, 217);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    height: 305px;
    border-radius: 5px;
    background-color: rgb(245, 245, 245);
    z-index: 0;
    opacity: 1;
    -webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
    -ms-transform: rotate(0deg) scale(1) translate(0%, 0%);
    transform: rotate(0deg) scale(1) translate(0%, 0%);
    transition: all 0.3s ease 0s;
}
.div_u9SQpS:hover {
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 15px 0px;
    -webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
    -ms-transform: rotate(0deg) scale(1) translate(0%, 0%);
    transform: rotate(0deg) scale(1) translate(0%, 0%);
    transition: all 0.3s ease 0s;
}
.div_u9SQpS img {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    vertical-align: middle;
    border: 0;
}
.image_LP7GSV.fudao {
    height: auto;
}
.c-image {
    height: auto;
    width: auto;
    max-width: 100%;
    display: inline-block;
}

.image_LP7GSV {
    margin: auto;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    position: absolute;
    display: inline-block;
    width: 120px;
    height: 120px;
}
.div_90yeFT {
    margin-top: auto;
    margin-bottom: 0px;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    position: absolute;
    display: inline-block;
    min-height: auto;
    height: 50px;
    background-color: rgba(56, 59, 61, 0.8);
    padding-top: 14px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-radius-type: border-bottom-right-radius;
}
.heading_qcvvsp {
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: rgb(255, 255, 255);
    text-align: center;
    min-width: 10px;
    min-height: 10px;
    font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
}
@media (max-width: 767px) {
    .column_iVg8a1 {
        width: 100%;
        padding-left: 0px;
        padding-right: 10px;
    }
}
@media (max-width: 767px) {
    .div_u9SQpS.white {
        height: 270px;
    }
}
@media (max-width: 991px) {
    .image_LP7GSV {
        width: 60%;
    }
}
@media (max-width: 767px) {
    .image_LP7GSV {
        height: auto;
    }
}
@media (max-width: 767px) {
    .div_90yeFT {
        padding-top: 11px;
    }
}
@media (max-width: 767px) {
    .heading_qcvvsp {
        font-size: 16px;
    }

    .image_LP7GSV.fudao {
      height: 100%;
      width: auto;
    }
}




</style>

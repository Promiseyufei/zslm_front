<template>
    <div class="search_major_modular">
        <div class="c-div div_fFxH2L">
            <div class="div_BMsaOd">
                <div class="div_ARD2As">
                    <div class="c-inlineblock c-imageblock imageblock_VRWtPr" 
                        mode="scaleToFill" :src="majorInfo.magor_logo_name" 
                        :style="'background-size:  100% 100%; background-position:  0% 0%; background-repeat:  no-repeat; background-image: url('+ majorInfo.magor_logo_name +');'">
                    </div>
                    <div class="div_mnG0wo">
                        <div class="div_oLhlRV">
                            <h1 class="c-heading heading_IH2VnY">{{ majorInfo.z_name }}</h1>
                            <label class="c-label label_OVUgJH">{{ majorInfo.province.province }}</label>
                            <!-- <label class="c-label label_OVUgJH">{{ majorInfo.province.city }}</label> -->
                        </div>
                        <div class="div_sfz9WV">
                            <template v-for="(item, index) in majorInfo.major_confirm_id">
                                <img class="c-image image_2pnGPP" :key="index+'equis'" v-if="item == 'EQUIS'" src="../../assets/img/equsSmall.png">
                                <img class="c-image image_2pnGPP" :key="index+'aacsb'" v-if="item == 'AACSB'" src="../../assets/img/aacsbSmall.png">
                            </template>
                            <template v-for="(item, index) in majorInfo.major_follow_id">
                                <img class="c-image image_2pnGPP" :key="index + '211'" v-if="item == '原211'" src="../../assets/img/211.png">
                                <img class="c-image image_2pnGPP" :key="index + '985'" v-if="item == '原985'" src="../../assets/img/985.png">
                                <img class="c-image image_2pnGPP" :key="index + '111'" v-if="item == '双一流'" src="../../assets/img/shuangyiliu.png">

                            </template>
                        </div>
                    </div>
                </div>
                <a class="btn c-button button_LsM2yn123 duibi" @click="addContrast" type="button">+  加入对比</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['majorInfo'],
    data() {
        return {
            // majorInfo: this.majorInfo
        }
    },
    methods: {
        addContrast() {
            
        }
    },
    mounted() {
        if(this.majorInfo.major_confirm_id != '') this.majorInfo.major_confirm_id = this.majorInfo.major_confirm_id.split(',');
        if(this.majorInfo.major_follow_id != '') this.majorInfo.major_follow_id = this.majorInfo.major_follow_id.split(',');
    }
}
</script>

<style scoped>
.search_major_modular .div_fFxH2L {
    padding-bottom: 20px;
    padding-top: 50px;
    border-bottom: 1px solid rgb(239, 239, 239);
    border-bottom-color: rgba(239,239,239,1);
}
.search_major_modular .div_BMsaOd {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin-bottom: 30px;
    padding-right: 5px;
    padding-left: 5px;
}
.div_BMsaOd .div_ARD2As {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.div_BMsaOd .imageblock_VRWtPr {
    width: 106px;
    height: 106px;
}
.div_BMsaOd .div_mnG0wo {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.div_mnG0wo .div_oLhlRV {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.div_oLhlRV .heading_IH2VnY {
    font-size: 26px;
    color: rgb(72, 72, 72);
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 9px;
    line-height: 1em;
    min-width: 10px;
    min-height: 10px;
    font-weight: 500;
    font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
}
.div_oLhlRV label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
.div_oLhlRV .label_OVUgJH {
    color: rgb(0, 159, 160);
    font-weight: normal;
    /* padding-left: 6px; */
    /* padding-right: 6px; */
    padding: 4px 8px;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    border-color: rgb(0, 159, 160);
    margin-left: 3px;
    margin-right: 3px;
    margin-bottom: 0px;
    cursor: default;
}

.div_mnG0wo .div_sfz9WV {
    min-height: auto;
    margin-top: 26px;
}
.div_sfz9WV img {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    vertical-align: middle;
    border: 0;
}
.div_sfz9WV .image_2pnGPP {
    margin-right: 6px;
}
.div_sfz9WV .c-image {
    height: auto;
    width: auto;
    max-width: 100%;
    display: inline-block;
}
.div_BMsaOd a {
    font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
    text-decoration: none;
    background: 0 0;
}
.div_BMsaOd .button_LsM2yn123.duibi {
    /* height: 48px; */
    padding-top: 12px;
    padding-left: 25px;
    padding-right: 25px;
    border-width: 2px;
    background-color: transparent;
    border-color: rgb(0, 159, 160);
    color: rgb(0, 159, 160);
    font-weight: bold;
    margin-bottom: 10px;
}
.div_BMsaOd .btn {
    display: inline-block;
    padding: 9px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}


@media (max-width: 767px) {
    .search_major_modular .div_BMsaOd {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
}
@media (max-width: 767px) {
    .div_BMsaOd .div_ARD2As {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
}
@media (max-width: 767px) {
    .div_BMsaOd .imageblock_VRWtPr {
        width: 108px;
        height: 108px;
    }
}
@media (max-width: 767px) {
    .div_mnG0wo .div_oLhlRV {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
}
@media (max-width: 767px) {
    .div_oLhlRV .heading_IH2VnY {
        font-size: 18px;
        margin-bottom: 14px;
        width: 100%;
        text-align: center;
        margin-top: 17px;
    }
}
@media (max-width: 767px) {
    .div_mnG0wo .div_sfz9WV {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
}
@media (max-width: 767px) {
    .div_BMsaOd .button_LsM2yn123.duibi {
        margin-top: 26px;
        width: 100%;
    }
}




</style>

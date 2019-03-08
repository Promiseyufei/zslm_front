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
                            <h1 class="c-heading heading_IH2VnY" style="cursor:pointer;" @click="putMajor(majorInfo.id)">{{ majorInfo.z_name }}</h1>
                            <template v-if="majorInfo.province">
                                <label class="c-label label_OVUgJH">{{ majorInfo.province.province }}</label>
                            </template>
                            <!-- <label class="c-label label_OVUgJH">{{ majorInfo.province.city }}</label> -->
                        </div>
                        <div class="div_sfz9WV">
                            <template v-for="(item, index) in majorInfo.major_confirm_id">
                                <img class="c-image image_2pnGPP" :key="index + 'EQUIS'" v-if="item=='EQUIS'" src="../../assets/img/EQUIS.png">
                                <img class="c-image image_2pnGPP" :key="index + 'AASCB'" v-if="item=='AASCB'" src="../../assets/img/AACSB.png">
                                <img class="c-image image_2pnGPP" :key="index + 'AMBA'" v-if="item == 'AMBA'" src="../../assets/img/amba.png">
                                <img class="c-image image_2pnGPP" :key="index + 'CAMEA'" v-if="item == 'CAMEA'" src="../../assets/img/camea.png">
                                <img class="c-image image_2pnGPP" :key="index + 'AAPEQ'" v-if="item == 'AAPEQ'" src="../../assets/img/AAPEQ.png">
                                <img class="c-image image_2pnGPP" :key="index + 'NASPAA'" v-if="item == 'NASPAA'" src="../../assets/img/NASPAA.png">
                                <img class="c-image image_2pnGPP" :key="index + 'CEEMAN IQA'" v-if="item == 'CEEMAN IQA'" src="../../assets/img/CEEMANIQA.png">

                                <!-- <img class="c-image image_2pnGPP" :key="index+'equis'" v-if="item == 'EQUIS'" src="../../assets/img/equsSmall.png">
                                <img class="c-image image_2pnGPP" :key="index+'aacsb'" v-if="item == 'AACSB'" src="../../assets/img/aacsbSmall.png"> -->
                            </template>
                            <template v-for="(item, index) in majorInfo.major_follow_id">
                                <img class="c-image image_2pnGPP" :key="index + '原211'" v-if="item=='原211'" src="../../assets/img/原211.png">
                                <img class="c-image image_2pnGPP" :key="index + '原985'" v-if="item=='原985'" src="../../assets/img/原985.png">
                                <img class="c-image image_2pnGPP" :key="index + '双一流'" v-if="item=='双一流'" src="../../assets/img/双一流.png">
                                <img class="c-image image_2pnGPP" :key="index + '中科院直属'" v-if="item=='中科院直属'" src="../../assets/img/中科院直属.png">
                                <img class="c-image image_2pnGPP" :key="index + '社科院直属'" v-if="item=='社科院直属'" src="../../assets/img/社科院直属.png">
                                <img class="c-image image_2pnGPP" :key="index + '部委直属'" v-if="item=='部委直属'" src="../../assets/img/部委直属.png">
                                <img class="c-image image_2pnGPP" :key="index + '省部共建'" v-if="item=='省部共建'" src="../../assets/img/省部共建.png">
                                <img class="c-image image_2pnGPP" :key="index + '省市属重点'" v-if="item=='省市属重点'" src="../../assets/img/省市属重点.png">
                                <img class="c-image image_2pnGPP" :key="index + '普通高等院校'" v-if="item=='普通高等院校'" src="../../assets/img/普通高等院校.png">
                                <img class="c-image image_2pnGPP" :key="index + '中国与欧盟合办'" v-if="item=='中国与欧盟合办'" src="../../assets/img/中国与欧盟合办.png">
                                <img class="c-image image_2pnGPP" :key="index + '中西部重点建设'" v-if="item=='中西部重点建设'" src="../../assets/img/中西部重点建设.png">
                                <img class="c-image image_2pnGPP" :key="index + '宁波市与MIT共建'" v-if="item=='宁波市与MIT共建'" src="../../assets/img/宁波市与MIT共建.png">
                                <img class="c-image image_2pnGPP" :key="index + '省/市直属'" v-if="item=='省/市直属'" src="../../assets/img/省市直属.png">
                                <img class="c-image image_2pnGPP" :key="index + 'A线'" v-if="item=='A线'" src="../../assets/img/A线.png">
                                <img class="c-image image_2pnGPP" :key="index + 'B线'" v-if="item=='B线'" src="../../assets/img/B线.png">

                                <!-- <img class="c-image image_2pnGPP" :key="index + '211'" v-if="item == '原211'" src="../../assets/img/211.png">
                                <img class="c-image image_2pnGPP" :key="index + '985'" v-if="item == '原985'" src="../../assets/img/985.png">
                                <img class="c-image image_2pnGPP" :key="index + '111'" v-if="item == '双一流'" src="../../assets/img/shuangyiliu.png"> -->

                            </template>
                        </div>
                    </div>
                </div>
                <!-- <div class="joinContrast"> -->
                    <el-popover
                    placement="right"
                    width="160"
                    v-model="visible2"
                    slot="reference">
                        <div style="text-align: right; margin: 0">
                            <div style="text-align: center;font-size: 18px;padding-bottom:10px;border-bottom: solid 2px #ccc;color: rgb(42, 173, 115)" >
                                院校对比
                                <i @click="removeAll()" style="cursor: pointer;float: right;font-size: 13px;line-height: 27.4px;color: #c6c5c5">清空</i>
                            </div>
                            <div v-for="(item,index) in colleges" :key="index" style="text-align: left;padding: 10px;border-bottom: solid 1px #c6c5c5">
                                {{item.college}}
                                <i  class="el-icon-close" @click="remove(index)" style="cursor: pointer;float: right"></i>
                            </div>
                            <el-button slot="reference"
                                    style="padding: 12px;width: 100%;margin: 10px auto;background-color:rgb(42, 173, 115) !important;
                                    color: white !important;"
                            @click="vs">
                                开始对比
                            </el-button>
                        </div>
                        <a class="btn c-button button_LsM2yn123 duibi" id="btn_a" slot="reference" @click="compareMajor" type="button">+  加入对比</a>
                    </el-popover>
                    <!-- <el-button class="btn c-button button_LsM2yn123 duibi" slot="reference" @click="compareMajor">+ 加入对比</el-button> -->
                <!-- </div> -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['majorInfo'],
    data() {
        return {
            cookieName:'vsMajor',
             visible2:false ,
             colleges:[],
            // majorInfo: this.majorInfo
        }
    },
    methods: {
            info(){
                let obj = this.getMajors();
                this.colleges = ((obj == '') ? [] : JSON.parse(obj))
            },
            getMajors(){
                let cookie = document.cookie.split(";")
                let index = 0;
                let i = 0
                for( i in cookie){
                    if(cookie[i].indexOf(this.cookieName) != -1)
                        index = i;
                }
                if(index == 0)
                    return null
                let obj = cookie[index]
                obj = obj.split('=')
                let obj_arr = unescape(obj[1]);
                return obj_arr
            },
            setCookie(obj_arr){
                var obj_json = JSON.stringify(obj_arr)
                document.cookie = this.cookieName + "="+ escape (obj_json)+ ";"
            },
            addMajor(){
                var obj = {college:this.majorInfo.z_name,id:this.majorInfo.id}
                var objs = this.getMajors()
                var obj_arr = objs == ""?[]: JSON.parse(this.getMajors())

                if(obj_arr != null && obj_arr.length == 4){
                    this.message(true,"对比列表已满", 'info');
                    this.setCookie(obj_arr)
                    this.colleges = obj_arr
                    return
                }else{
                    if(obj_arr == null) {
                        obj_arr = []
                    }
                    else {
                        for(var i = 0; i < obj_arr.length;i++){
                            if(obj_arr[i].id == this.majorInfo.id){
                                this.message(true,"已经在对比列表里", 'info');
                                this.colleges = obj_arr;
                                return true;
                            }
                        }
                    }

                    obj_arr.push(obj)
                    this.setCookie(obj_arr)
                    this.colleges = obj_arr
                }
            },
            compareMajor:function(){
                this.addMajor();
            },
        vs(){
            let id = '';
            for(let i in this.colleges){
                id+=this.colleges[i].  id+','
            }
            id = id.substr(0,id.length-1)
            this.$router.push("/front/firstMenuRouter/majorsCompare/"+id)
        },
        remove(index){
            this.colleges.splice(index,1)
            this.setCookie(this.colleges)
        },
        removeAll(){
            this.colleges = [];
            this.setCookie(this.colleges)
        },
        addContrast() {

        },
        putMajor(majorId) {
            let routeUrl = this.$router.resolve({
                path:'/front/firstMenuRouter/selectCollege/singleCollage/' + majorId,
            });
            window.open(routeUrl.href, '_blank');
        }

    },
    mounted() {
        this.info();
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
        margin: 0 auto;
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
        margin-left: 60%;
    }
}
#btn_a:hover{
    color: #fff;
    background-color: #0fa5a6;
}


</style>

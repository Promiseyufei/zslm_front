<template>
    <div>
        <div :id="back(this.backData)" class="singleItemName" @click="showInform" :style="{'backgroundColor':i == 0?'#009fa0':'#fff'}">
            <div>
                <h1 style="color:rgb(111, 111, 111);" :id="title(this.titleData)" :style="{'color':i == 0?'#fff':'#6f6f6f'}">{{deta.project_name}}</h1>
                <p :id="p(this.pData)" :style="{'color':i == 0?'#fff':'#6f6f6f'}">{{deta.recruitment_pattern}}</p>
            </div>
            <div><i class="el-icon-arrow-down" :id="icon(this.upData)" :style="{'color':i == 0?'#fff':'#a2a2a2'}"></i></div>
        </div>
        <div class="singleItemDetail" v-show="singleItemDetail">
            <div class="left">
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/smoney.png"></div>
                    <div class="informationTwo">项目费用</div>
                    <p class="informationThree" v-html="deta.cost"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/friends.png"></div>
                    <div class="informationTwo">招生名额</div>
                    <p class="informationThree" v-html="deta.student_count"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/class.png"></div>
                    <div class="informationTwo">授课语言</div>
                    <p class="informationThree" v-html="deta.language"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/class2.png"></div>
                    <div class="informationTwo">班级情况</div>
                    <p class="informationThree" v-html="deta.class_situation"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/system.png"></div>
                    <div class="informationTwo">学制</div>
                    <p class="informationThree" v-html="deta.eductional_systme"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/exam.png"></div>
                    <div class="informationTwo">报考条件</div>
                    <p class="informationThree" v-html="deta.can_conditions"></p>
                </div>
            </div>
            <div class="right">
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/describe.png"></div>
                    <div class="informationTwo">分数线描述</div>
                    <p class="informationThree" v-html="deta.score_describe"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/type.png"></div>
                    <div class="informationTwo">分数线类型</div>
                    <p class="informationThree" v-html="deta.score_type"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/model.png"></div>
                    <div class="informationTwo">统招模式</div>
                    <p class="informationThree" v-html="deta.recruitment_pattern"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/model2.png"></div>
                    <div class="informationTwo">招生模式</div>
                    <p class="informationThree" v-html="deta.enrollment_mode"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/biye.png"></div>
                    <div class="informationTwo">毕业证书</div>
                    <p class="informationThree" v-html="deta.graduation_certificate"></p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/other.png"></div>
                    <div class="informationTwo">其他说明</div>
                    <p class="informationThree" v-html="deta.other_explain"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
    	return{
            upData:this.i,
            backData:this.i,
            pData:this.i,
            titleData:this.i,
            deta:this.detail,
            singleItemDetail:false,
            showContent:'block',
            hideContent:'none',
            // itemInformLeft:[
            //     {itemName:'项目费用',src:require("../../assets/img/smoney.png")},
            //     {itemName:'招生名额',src:require("../../assets/img/friends.png")},
            //     {itemName:'授课语言',src:require("../../assets/img/class.png")},
            //     {itemName:'班级情况',src:require("../../assets/img/class2.png")},
            //     {itemName:'学制',src:require("../../assets/img/system.png")},
            //     {itemName:'报考条件',src:require("../../assets/img/exam.png")},
            // ],
            // itemInformRight:[
            //     {itemName:'项目费用',src:require("../../assets/img/describe.png")},
            //     {itemName:'招生名额',src:require("../../assets/img/type.png")},
            //     {itemName:'授课语言',src:require("../../assets/img/model.png")},
            //     {itemName:'班级情况',src:require("../../assets/img/model2.png")},
            //     {itemName:'学制',src:require("../../assets/img/biye.png")},
            //     {itemName:'报考条件',src:require("../../assets/img/other.png")},
            // ],
    	}
    },
    props:["detail","i"],
    methods:{
        back:function(index){
                return "back_" +this.backData
        },
        title:function(index){
                return "title_" +this.titleData
        },
        p:function(index){
                return "p_" +this.pData
        },
        icon:function(index){
                return "icon_" +this.upData
        },

        //点击单个项目标题
        showInform:function() {
            let h = $("#title_"+this.titleData);
            let p = $("#p_"+this.pData);
            let back = $("#back_"+this.backData);
            let icon = $("#icon_"+this.upData);

            if (!this.singleItemDetail) {
                this.singleItemDetail = true;
                //动态id——标题样式改变
                for (var i = 0; i <= this.i; i++) {
                    h[i].style.color = "#ffffff";
                    back[i].style.background = "#009fa0";
                    p[i].style.color = "#ffffff";
                    icon[i].style.color = "#ffffff";
                    $(icon[i]).attr("class","el-icon-arrow-up");
                }
            } else {
                this.singleItemDetail = false;
                //动态id——标题样式改变
                for (var j = 0; j <= this.titleData; j++) {
                    h[j].style.color = "rgb(111, 111, 111)";
                    back[j].style.background = "#ffffff";
                    p[j].style.color = "rgb(111, 111, 111)";
                    icon[j].style.color = "#a2a2a2";
                    $(icon[j]).attr("class","el-icon-arrow-down");
                };
            }
        }

    },
    mounted(){
      if(this.i == 0){
        this.singleItemDetail =true;
        let icon = $("#icon_"+this.upData);
        $(icon[this.i]).attr("class","el-icon-arrow-up");
      }

    },
}
</script>

<style>
    .singleItemName i {
        font-size: 24px;
        font-weight: bold;
        color: #a2a2a2;
    }

    .showContent{
      display: block;
    }

    .hideContent{
      display: none;
    }

    .itemInform .el-card__body {
      padding: 25px;
    }

</style>

<style scoped>
    .singleItemDetail {
        display: flex;
        flex-wrap:wrap;
        width: 870px;
        /*height: 506px;*/
        padding: 30px 0 0 35px;
    }
    .informationThree {
        line-height: 22px;
        width: 268px;
        font-weight: bold;
        color: rgb(110, 110, 110);
        font-size: 14px;
    }
    .informationTwo {
        width: 100px;
        line-height: 22px;
        margin: 0 10px 0;
        color: rgb(110, 110, 110);
        font-size: 14px;
    }
    .informationOne {
        width: 19px;
    }
    .informationRight {
        margin-left: 61px;
    }
    .informationLeft,.informationRight {
        width: 387px;
        display: flex;
        margin-bottom: 15px;
    }
    .right {
        padding-bottom: 30px;
    }
    .singleItemName p {
        margin-top: 10px;
        font-size: 12px;
        color: rgb(111, 111, 111);
    }
    .singleItemName h1 {
        font-size: 20px;
        color: rgb(111, 111, 111);
        font-weight: bold;
    }
    .singleItemName:hover {
        background-color: #009fa0 !important;
    }
    .singleItemName {
        display: flex;
        justify-content:space-between;
        align-items:center;
        border-top: 1px solid #efefef;
        width: 865px;
        height: 71px;
        padding: 0 20px 0;
        cursor: pointer;
        border-radius: 5px;
    }
    * {
        margin: 0;
        padding: 0;
    }

     /** PC **/
    @media only screen and (min-width: 1024px) and (max-width:1300px) {


    }
    /** iPad **/
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .informationLeft {
            width: 100%;
        }
        .left {
            width: 100%;
        }
        .informationThree {
            width: 90%;
        }
        .informationRight {
            margin-left: 0;
        }
        .singleItemDetail {
            width: 95%;
        }
        .singleItemName {
            width: 95%;
        }
    }
    /** iPhone **/
    @media only screen and (min-width: 320px) and (max-width: 767px) {
        .itemInform .el-card__body {
            padding: 25px 5px;
        }
        .informationLeft {
            width: 100%;
        }
        .left {
            width: 100%;
        }
        .singleItemDetail {
        }
        .informationThree {
            width: 90%;
        }
        .informationRight {
            margin-left: 0;
        }
        .singleItemDetail {
            width: 100%;
            padding-left: 0;
        }
        .singleItemName {
            width: 90%;
            padding: 0 5%;
          border-radius: 5px;
        }

    }
</style>

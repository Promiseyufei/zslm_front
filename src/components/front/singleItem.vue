<template>
    <div>
        <div class="singleItemName" @click="showInform" id="back">
            <div>
                <h1 id="h1" style="color: rgb(111, 111, 111);">{{deta.project_name}}</h1>
                <p id="p">非全日制</p>
            </div>
            <div><i class="el-icon-arrow-down" id="up" style="color: #a2a2a2;"></i></div>
        </div>
        <div class="singleItemDetail" v-show="singleItemDetail">
            <div class="left">
                <!-- <div class="informationLeft" v-for="(l,index) in itemInformLeft" :key="index">
                    <div class="informationOne"><img :src="l.src"></div>
                    <div class="informationTwo">{{l.itemName}}</div>
                    <p class="informationThree">{{deta.cost}}</p>
                </div> -->
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/smoney.png"></div>
                    <div class="informationTwo">项目费用</div>
                    <p class="informationThree">{{deta.cost}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/friends.png"></div>
                    <div class="informationTwo">招生名额</div>
                    <p class="informationThree">{{deta.student_count}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/class.png"></div>
                    <div class="informationTwo">授课语言</div>
                    <p class="informationThree">{{deta.language}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/class2.png"></div>
                    <div class="informationTwo">班级情况</div>
                    <p class="informationThree">{{deta.class_situation}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/system.png"></div>
                    <div class="informationTwo">学制</div>
                    <p class="informationThree">{{deta.eductional_systme}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/exam.png"></div>
                    <div class="informationTwo">报考条件</div>
                    <p class="informationThree">{{deta.can_conditions}}</p>
                </div>
            </div>
            <div class="right">
                <!-- <div class="informationRight"  v-for="(r,index) in itemInformRight" :key="index">
                    <div class="informationOne"><img :src="r.src"></div>
                    <div class="informationTwo">{{r.itemName}}</div>
                    <p class="informationThree">29.8万</p>
                </div> -->
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/smoney.png"></div>
                    <div class="informationTwo">分数线描述</div>
                    <p class="informationThree">{{deta.score_describe}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/friends.png"></div>
                    <div class="informationTwo">分数线类型</div>
                    <p class="informationThree">{{deta.score_type}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/class.png"></div>
                    <div class="informationTwo">统招模式</div>
                    <p class="informationThree">{{deta.recruitment_pattern}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/class2.png"></div>
                    <div class="informationTwo">招生模式</div>
                    <p class="informationThree">{{deta.enrollment_mode}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/system.png"></div>
                    <div class="informationTwo">毕业证书</div>
                    <p class="informationThree">{{deta.graduation_certificate}}</p>
                </div>
                <div class="informationLeft">
                    <div class="informationOne"><img src="../../assets/img/exam.png"></div>
                    <div class="informationTwo">其他说明</div>
                    <p class="informationThree">{{deta.other_explain}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
    	return{
            deta:this.detail,
            singleItemDetail:false,
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
    props:["detail"],
    methods:{
        //点击单个项目标题
        showInform:function() {
            let h1 = document.getElementById('h1');
            let p = document.getElementById('p');
            let back = document.getElementById('back');
            if (!this.singleItemDetail) {
                this.singleItemDetail = true;
                //标题样式改变
                h1.style.color = "#ffffff";
                p.style.color = "#ffffff";
                back.style.background = "#009fa0";
                $("#up").attr("class","el-icon-arrow-up");
                document.getElementById('up').style.color = "#ffffff";
            } else {
                this.singleItemDetail = false;
                //标题样式改变
                h1.style.color = "rgb(111, 111, 111)";
                p.style.color = "rgb(111, 111, 111)";
                back.style.background = "#ffffff";
                $("#up").attr("class","el-icon-arrow-down");
                document.getElementById('up').style.color = "#a2a2a2";
            }
        }

    },
    mounted(){
        // console.log(this.detail)
    },
}
</script>

<style>
    .singleItemName i {
        font-size: 24px;
        font-weight: bold;
        color: #a2a2a2;
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
        width: 70px;
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
            width: 100%;
            padding: 0;
        }
        
    }
</style>

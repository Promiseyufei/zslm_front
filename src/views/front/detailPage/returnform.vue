<template>
    <div>
        <div class="bigBox">
            <!-- 面包屑 -->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <img src="../../../assets/img/homeIcon.png">
                    <el-breadcrumb separator-class="el-icon-arrow-right" class="collagebreadcrumb">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>退款服务</el-breadcrumb-item>
                        <el-breadcrumb-item class="activelist">退款申请</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>

            <!-- 整个表单 -->
            <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="returnform">
                        <div class="returnformbutton">
                            <el-button type="primary" @click="dialogVisible = true" v-if="fifnish==null">选择辅导机构</el-button>
                            <div class="collagelogobox" v-if="fifnish!=null">
                                <div class="collagelogo">
                                    <img src="../../../assets/img/xindongfang.png" alt="">
                                    <span>河南科技学院</span>
                                </div>
                                <span @click="dialogVisible = true">重新选择</span>
                            </div>
                        </div>

                        <!-- 弹出层 -->
                        <el-dialog
                            :visible.sync="dialogVisible"
                            width="1280px"
                            center
                            :before-close="handleClose">
                            <div class="boxdialog">
                                <div class="singlecoach" v-for="(item,index) in 13" :key="index" @click="selectsingle(index)">
                                    <div class="singlecoachtop">
                                        <img src="../../../assets/img/xindongfang.png" alt="">
                                    </div>
                                    <span>河南科技学院</span>
                                </div>
                            </div>

                            <span slot="footer" class="dialog-footer">
                                <el-button type="primary" @click="successselect">确 定</el-button>
                            </span>
                        </el-dialog>

                        <!-- 表单 -->
                        <div class="formbox">
                            <span>退款信息填写</span>
                            <el-form :label-position="location" label-width="180px" :model="formLabelAlign">
                                <el-form-item label="课程全称：">
                                    <el-input v-model="formLabelAlign.name" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="退款金额：">
                                    <el-input v-model="formLabelAlign.money" style="width:200px"></el-input>
                                </el-form-item>
                                <el-form-item label="是否使用优惠卷：">
                                    <el-radio-group v-model="formLabelAlign.coach">
                                        <el-radio label="是"></el-radio>
                                        <el-radio label="否"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="优惠卷序列号：">
                                    <el-input v-model="formLabelAlign.order" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="报名日期：">
                                    <el-date-picker
                                        v-model="formLabelAlign.date"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="联系电话：">
                                    <el-input v-model="formLabelAlign.tel" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="退款选择途径：">
                                    <el-radio-group v-model="formLabelAlign.coach">
                                        <el-radio label="支付宝"></el-radio>
                                        <el-radio label="银行卡转账"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="支付宝账号：">
                                    <el-input v-model="formLabelAlign.name" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="姓名：">
                                    <el-input v-model="formLabelAlign.name" style="width:200px"></el-input>
                                </el-form-item>
                                <el-form-item label="银行卡号：">
                                    <el-input v-model="formLabelAlign.name" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="开户行：">
                                    <el-input v-model="formLabelAlign.name" style="width:200px"></el-input>
                                </el-form-item>
                                <el-form-item label="姓名：">
                                    <el-input v-model="formLabelAlign.name" style="width:200px"></el-input>
                                </el-form-item>
                                <el-form-item label="申诉说明：">
                                    <el-input v-model="formLabelAlign.name" style="width:510px"></el-input>
                                </el-form-item>
                                <el-form-item label="相关说明：">
                                    <el-upload
                                    style="width:305px"
                                    class="upload-demo"
                                    ref="upload"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :file-list="formLabelAlign.fileList"
                                    :auto-upload="false">
                                    <el-button slot="trigger" size="small" type="primary">上传图片</el-button>
                                    </el-upload>
                                </el-form-item>
                                <el-form-item label="">
                                    <el-button type="primary" class="sumitbutton">提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            location:"right",
            dialogVisible: false,
            select:null,
            fifnish:null,
            formLabelAlign: {
                name: '',
                money: '',
                coach: '',
                fileList: [
                    {
                        name: 'food.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }, 
                    {
                        name: 'food2.jpeg', 
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }
                ]
            }
        }
    },
    methods: {
        //选择辅导机构，点击确认之后，关闭弹出层
        successselect:function() {
            this.fifnish = this.select;
            this.dialogVisible = false;
        },
        //选中某个辅导机构时，高亮显示
        selectsingle:function(index) {
            var box = document.getElementsByClassName("singlecoach");
            if(this.select!=null) {
                box[this.select].classList.remove("active");
            }
            box[index].classList.add("active");
            this.select = index;
            // console.log(box);
        },
        //点击关闭弹框时触发事件
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    },
    mounted(){
        //当屏幕宽度小于992像素时，即为手机端时，表单提示居左显示
        var withnow = document.body.clientWidth;
        if(withnow<=1280) {
            this.location = "left";
        }
    },
};
</script>
<style>
   .activelist span{
        color: #009FA1 !important;
        font-weight: bold !important;
    }
    /* Large devices (laptops/desktops, 1280px and up) */
@media only screen and (max-width: 1280px) {
    .returnform .el-form-item__label {
        width: 100% !important;
        display: inline !important;
        color: #666 !important;
        font-size: 12px;
        float: left !important;
    }
    .returnform .el-form-item__content {
        margin-left: 2px !important;
        width: 300px !important;
    }
    .returnform .el-form-item__content input {
        width: 300px !important;
    }
    .returnform .el-form-item {
        margin-bottom: 0px;
    }
    .returnform .el-dialog {
        width: 98% !important;
    }
    .el-message-box {
        max-width: 305px;
    }
}
    
</style>
<style scoped>
/* Large devices (laptops/desktops, 1280px and up) */
@media only screen and (max-width: 1280px) {
    .returnformbutton {
        padding: 20px 0 !important;
    }
    .formbox>span {
        margin: 0 !important;
        padding: 20px 10px !important;
        width: 93%;
    }
    .boxdialog {
        height: 305px !important;
    }
    .sumitbutton {
        width: 100%;
    }
}
.bigBox {
    background-color: rgb(245, 245, 245);
    padding-bottom: 10px;
}
.sumitbutton {
    margin: 10px 0;
    
}
.collagelogo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.collagelogobox>span {
    color: #009FA1;
    cursor: pointer;
}
.collagelogo>img {
    max-height: 40px;
    margin-right: 30px;
}
.collagelogo>span {
    padding: 5px 30px;
    padding-right: 0;
    border-left: 1px solid #ccc;
}
.boxdialog {
    display: flex;
    flex-wrap: wrap;
    height: 646px;
    overflow-x: hidden;
    overflow-y: scroll;
    justify-content: center;
    background-color: rgb(245, 245, 245);
}
.singlecoach {
    width: 281px;
    background-color: #fff;
    margin: 10px;
    position: relative;
    border-radius: 5px;
    border: 1px solid rgb(245, 245, 245);
}

.singlecoach>span {
    display: inline-block;
    width: 100%;
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: rgba(56, 59, 61, 0.8);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
}
.active {
    border: 1px solid #ffb957;
}
.active>span {
    background-color: #ffb957;
}
.singlecoachtop{
    width: 100%;
    height: 253px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.singlecoachtop>img {
    width: 40%;
}
.formbox {
    margin-bottom: 120px;
}
.formbox>span {
    display: inline-block;
    margin-left: 10%;
    padding: 40px 0 30px;
}
.returnform {
    background-color: #fff;
    width: 100%;
    padding: 0 2.5%;
    margin-bottom:87px;
}
.returnformbutton {
    text-align: center;
    padding: 58px 0;
    border-bottom: 1px solid rgb(222, 222, 222);
}
.singlecoachBig {
    display: flex;
    justify-content: center;
}
.singlecoachbox {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: center;
}
.collagebreadcrumb {
    margin:35px 8px 30px;
}
</style>
    
    
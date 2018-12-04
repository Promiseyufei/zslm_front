<template>
    <div>
        <!-- <div class="bigBox"> -->
            <!-- 面包屑 -->
            <!-- <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <img src="../../../assets/img/homeIcon.png">
                    <el-breadcrumb separator-class="el-icon-arrow-right" class="collagebreadcrumb">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>退款服务</el-breadcrumb-item>
                        <el-breadcrumb-item class="activelist">退款申请</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div> -->

            <!-- <div class="singlecoachBig">
                <div class="singlecoachbox">
                    <div class="returnform"> -->
                        <!-- <div class="returnformbutton">
                            <el-button type="primary" @click="dialogVisible = true">选择辅导机构</el-button>
                        </div> -->

                        <!-- <el-dialog
                            :visible.sync="dialogVisible"
                            width="1280px"
                            :before-close="handleClose">
                            <span>这是一段信息</span>
                            <div>

                            </div>


                            <span slot="footer" class="dialog-footer">
                                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            </span>
                        </el-dialog> -->

                        <!-- <div class="formbox"> -->
                            <!-- <span>退款信息填写</span> -->
                            <!-- <el-form label-position="right" label-width="180px" :model="formLabelAlign">
                                <el-form-item label="课程全称">
                                    <el-input v-model="formLabelAlign.name" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="退款金额">
                                    <el-input v-model="formLabelAlign.money" style="width:200px"></el-input>
                                </el-form-item>
                                <el-form-item label="是否使用优惠卷">
                                    <el-radio-group v-model="formLabelAlign.coach">
                                        <el-radio label="是"></el-radio>
                                        <el-radio label="否"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="优惠卷序列号">
                                    <el-input v-model="formLabelAlign.order" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="报名日期">
                                    <el-date-picker
                                        v-model="formLabelAlign.date"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="联系电话">
                                    <el-input v-model="formLabelAlign.tel" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="退款选择途径">
                                    <el-radio-group v-model="formLabelAlign.coach">
                                        <el-radio label="支付宝"></el-radio>
                                        <el-radio label="银行卡转账"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="支付宝账号">
                                    <el-input v-model="formLabelAlign.name" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="姓名">
                                    <el-input v-model="formLabelAlign.name" style="width:200px"></el-input>
                                </el-form-item>
                                <el-form-item label="银行卡号">
                                    <el-input v-model="formLabelAlign.name" style="width:340px"></el-input>
                                </el-form-item>
                                <el-form-item label="开户行">
                                    <el-input v-model="formLabelAlign.name" style="width:200px"></el-input>
                                </el-form-item>
                                <el-form-item label="姓名">
                                    <el-input v-model="formLabelAlign.name" style="width:200px"></el-input>
                                </el-form-item>
                                <el-form-item label="申诉说明">
                                    <el-input v-model="formLabelAlign.name" style="width:510px"></el-input>
                                </el-form-item>
                                <el-form-item label="相关说明">
                                    <el-upload
                                    class="upload-demo"
                                    ref="upload"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :file-list="formLabelAlign.fileList"
                                    :auto-upload="false">
                                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                    </el-upload>
                                </el-form-item>
                                <el-form-item label="">
                                    <el-button type="primary">提交</el-button>
                                </el-form-item>
                            </el-form> -->
                        <!-- </div> -->
                    <!-- </div> -->
                    
                <!-- </div> -->
            <!-- </div> -->


        <!-- </div> -->
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            dialogVisible: false,
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

    },
};
</script>
<style>
    .activelist span{
        color: #009FA1 !important;
        font-weight: bold !important;
    }
</style>
<style scoped>
.bigBox {
    background-color: rgb(245, 245, 245);
    padding-bottom: 10px;
}
.formbox {
    margin: 40px 0 120px;
}
.formbox>span {
    display: inline-block;
    margin-left: 10%;
    margin-bottom: 30px;
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
    
    
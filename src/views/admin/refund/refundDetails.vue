<template>
    <div>
        <div class="operateBox">
            <!-- 中间内容 -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>退款管理</el-breadcrumb-item>
                    <el-breadcrumb-item class="selectedNavPublic">退款申请</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 返回按钮 -->
                <div class="refundBtn">
                    <el-button @click="goBake">返回</el-button>
                </div>
                
                <div>
                    <!-- 退款申请 -->
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-envelope-open-o fa-fw FA-3X"></i>&nbsp;退款申请</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <p style="width: 100%;text-align: center">退款申请单</p>
                            <div class="refundMark">
                                <p>编号：111111</p>
                                <p>2018-10-10</p>
                            </div>
                            <el-form ref="form">
                                <div class="content"  v-for="(item, index) in tableTop">


                                        <strong class="title">{{item.label}}：</strong>
                                        <label>{{ data[item.prop] }}</label>

                                </div>
                                <div class="content">
                                    <strong class="title">申请凭证：</strong>
                                    <div label="申请凭证">
                                        <img class="img" v-for="(item, index) in data.imgs"
                                             :src="item" preview="1" preview-text="描述文字">

                                    </div>
                                </div>
                            </el-form>
                        </div>
                    </div>

                    <!-- 操作管理 -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-wrench fa-fw FA-3X"></i>&nbsp;操作管理</div>
                        </div>
                        <div class="operateUpfilesRight2">
                            <div class="operateUpfilesRight2Nav">
                                <el-button type="primary" style="float: right" @click.native="changeForm()" :disabled="edit">编辑</el-button>
                            </div>
                            <el-form class="refundDetialForm" :rules="rules" :disabled="formdis">
                                <el-form-item label="审批结果："  prop="type">
                                    <el-radio-group v-model="type">
                                        <el-radio :label="1">通过</el-radio>
                                        <el-radio :label="2">驳回</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                                <el-form-item label="审批意见：" prop="desc">
                                    <el-input style="width: 500px"
                                            type="textarea"
                                            v-model="content" resize="none"
                                            :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                                </el-form-item>
   
                                <el-form-item label="流程状态："  prop="status">
                                    <el-radio-group v-model="status">
                                        <el-radio :label="0">进行中</el-radio>
                                        <el-radio :label="1">已结束</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <div style="display: flex;flex-direction: row-reverse;padding-left: 170px">
                                    <el-button type="primary" style="float: right" @click="sublimit" >提交</el-button>
                                </div>
                            </el-form>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<link rel="stylesheet" type="text/css" href="vue-photo-preview/dist/skin.css"/>

<script>

    export default {
        name: "refundDetails",
        data(){
            return{

                edit:false,
                id:0,
                formdis:true,
                type:0,
                content:'',
                rules:{
                    type :[ { required: true, message: '请选择审核结果', trigger: 'blur' }],
                },
                status:0,
                model: [],
                data:{},
                tableTop:[
                    {type:'',prop:'id',label:'退款申请ID',width:112},
                    {type:'',prop:'account_id',label:'提交帐号ID',width:112},
                    {type:'',prop:'user_account',label:'提交帐号',width:112},
                    {type:'',prop:'coach_name',label:'辅导机构名称',width:120},
                    {type:'',prop:'classname',label:'课程名称',width:100},
                    {type:'',prop:'apply_refund_money',label:'申请金额',width:100},
                    {type:'',prop:'coupon_id',label:'优惠券ID',width:100},
                    {type:'',prop:'create_time',label:'报名日期',width:100},
                    {type:'',prop:'update_time',label:'提交申请时间',width:150},
                    {type:'',prop:'phone',label:'联系电话',width:100},
                    {type:'',prop:'payment',label:'收款方式',width:100},
                    {type:'',prop:'process_status',label:'流程状态',width:100},
                    {type:'',prop:'approve_status',label:'审批结果',width:100},
                ],
				imgSrc:"http://www.lishanlei.cn/admin/"
            }
        },
        methods:{
            goBake: function() {
                this.$router.push('/admin/refund/refundlist');
            },
            changeForm(){
                this.formdis = false
            },
            query(){
                let that = this;
                console.log(this.id)
                this.fetch('/admin/refund/getOne',{
                    id:that.id
                }).then(res=>{
                    if(res.code == 0){
                        for(let i in res.result){

                            res.result[i].create_time = that.timestampToTime( res.result[i].create_time)
                            res.result[i].update_time = that.timestampToTime( res.result[i].update_time)
                            that.status =  res.result[i].process_status
                            res.result[i].process_status =  res.result[i].process_status == 0 ? '进行中' : '已结束'
                            that.type = res.result[i].approve_status
                            if( res.result[i].approve_status == 0)
                                res.result[i].approve_status = '未审批'
                            else if( res.result[i].approve_status == 1)
                                res.result[i].approve_status = '通过'
                            else
                                res.result[i].approve_status = '驳回'

                            res.result[i].payment = '支付宝'
                            res.result[i].imgs = res.result[i].imgs.split(',')
                            that.content = res.result[i].approve_context
                        }
                        that.data = res.result[0];
                        if(that.data.approve_status == '通过' && that.data.process_status == '已结束'){
                            that.edit = true;
                            console.log(that.edit)
                        }
                        console.log(that.data)
                    }else{
                        that.message(true,'出错了','error')
                    }
                })
            },
            sublimit:function(){
                var that = this;

                this.post('/admin/refund/setApproveStatus',{
                    refundId: that.id,
                    approveStatus: that.type,
                    stat: that.status,
                    approveContext: that.content,

                }).then(res=>{
                    if(res.code == 0){
                        that.message(true,'修改成功','success')
                        that.query();
                        that.formdis = true
                    }else{
                        that.message(true,'修改失败','error')
                    }
                })
            },
        },
        mounted(){
            // this.getPage();
            this.id = this.$route.params.id
            this.query();

        }

    }
</script>

<style scoped>
    p {
        margin: 0;
        padding: 0;
    }
    .operateBox {
        width: 1500px;
        margin: 0 auto;
    }
    /*
    * 选项卡样式
    */
    .operateNav {
        margin: 20px 0;
    }
    .operateNav .el-radio-button {
        margin-right: 10px;
    }

    /*
    * 返回按钮样式
    */
    .refundBtn {
        margin: 20px 0;
    }

    /*
    * 右边上传banner内容样式
    */
    .operateUpfilesRight .upload-demo {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .operateUpfilesRight .el-upload__tip {
        margin-left: 20px;
        margin-bottom: 8px;
        display: none;
    }
    .operateUpfiles {
        border: 1px solid #e4e4e4;
        background-color: #fff;
        display: flex;
        flex-direction: row;
    }
    .operateHeader {
        border-bottom: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e4e4e4;
        color: #666;
    }
    .operateHeader .el-button {
        width: 80px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 10px;
    }
    .operateHeader>p {
        margin-left: 20px;
        font-weight: bold;
    }
    .operateUp {
        border-bottom: none;
    }
    .operateDown {
        border-top: none;
    }
    .operateUpfilesLeft {
        background-color: #fcfcfc;
        border-right: 1px solid #e4e4e4;
        width: 159px;
    }
    .operateUpfilesLeft>div {
        background: url(../../../assets/img/point.png) no-repeat;
        position: relative;
        top: 50px;
        left: 0;
        width: 180px;
        height: 50px;
        color: #fff;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    .operateUpfilesRight {
        padding: 50px 80px;
        width: 1170px;
        border-bottom: 1px solid #e4e4e4;
    }
    .operateUpfilesRight button {
        float: right;
    }

    /*
    * 右边当前banner内容样式
    */

    .operateUpfilesRight2 {
        padding: 40px 90px 40px 80px;
        width: 1170px;
    }
    .operateUpfilesRight2Nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: bold;
        color: #666;
        font-size: 14px;
    }
    .operateTable {
        margin-top: 25px;
    }
    .operateFinalUp {
        text-align: center;
        margin: 150px 0 20px;
    }
    .refundDetialForm {
        margin-left: 100px;
        margin-top: 20px;
    }

    /*
    * 右边文本内容样式
    */
    .refundMark {
        margin-top: 30px;
    }
    .refundMark p{
        font-size: 14px;
        text-align: right;
        height: 35px;
        line-height: 35px;
    }
    .title{
        width: 100px;
        text-align: right;
        display: inline-block;
        font-size: 14px;
    }
    .content{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 20px;
        font-size: 14px;
    }
    .operateUpfilesRight .el-form {
        margin-left: 100px;
    }
    .img{
        display: inline-block;
        width: 150px;
        height: 150px;
        margin-right: 10px;
    }
</style>
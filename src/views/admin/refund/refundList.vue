<template>
    <div>
        <el-breadcrumb separator="/" style="width: 1500px;margin: 0 auto 20px">
            <el-breadcrumb-item>账户管理</el-breadcrumb-item>
            <el-breadcrumb-item><div class="now-page">退款管理</div></el-breadcrumb-item>
        </el-breadcrumb>
        <div style="width: 1500px;margin: 0 auto 20px">
            <el-button class="query-button" type="primary" icon="el-icon-upload2"  @click.native = "query" style="float: none">导出</el-button>
        </div>
        <div class="filesquery">
            <i class="el-icon-search"></i>
            <p class="screen">筛选查询</p>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native = "query">刷新</el-button>
        </div>

        <div class="filesForm">

            <el-form class="input" v-model="userFrom" label-width="80px" style="width: 100%">
                <el-form-item label="手机号">
                    <el-input size="medium" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input size="medium" placeholder="请输入用户姓名"></el-input>
                </el-form-item>
                <el-form-item style="width: 200px">
                    <el-select size="mini" v-model="Sorting" placeholder="处理结果" style="width: 100px">
                        <el-option v-for="(item,index) in sorting" :key="index" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="width: 200px">
                    <el-select size="mini" v-model="Sorting" placeholder="流程状态" style="width: 100px;">
                        <el-option v-for="(item,index) in sorting" :key="index" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item style="float: right">
                    <el-button class="query-button" type="primary" icon="el-icon-search"  @click.native = "query">查询</el-button>
                </el-form-item>

                <!--<el-form-item>-->

                <!--</el-form-item>-->
            </el-form>

        </div>

        <div class="files-datalist">
            <i class="el-icon-tickets"></i>
            <p class="screen">数据列表</p>
        </div>
        <div class="file-table">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="jumpPage"
                                   type="text"
                                   icon="el-icon-search">

                        </el-button>
                        <el-button @click="handleClick(scope.row)"
                                   type="text"
                                   icon="el-icon-edit-outline">

                        </el-button>
                    </template>
                </el-table-column>
                <div v-for="(val, index) in tableTop" :key="index">
                    <el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
                    </el-table-column>
                </div>
            </el-table>
        </div>

        <!-- 分页 -->
        <div class="footer">
            <Page :total="total" @pageChange="pageChange" @click.native = "query"></Page>
        </div>

        <el-dialog :visible.sync="dialogFormVisible">
            <el-form style="margin-top: 20px" :rules="rules" :disabled="formdis">
                <el-form-item label="审批结果"  prop="type" style="width: 100%">
                    <el-radio-group v-model="type">
                        <el-radio :label="3">通过</el-radio>
                        <el-radio :label="6">驳回</el-radio>
                    </el-radio-group>
                </el-form-item>

                    <el-form-item   label="审批意见" prop="desc" style="width: 100%">
                        <el-input style="width: 100%"
                                  type="textarea"
                                  v-model="content" resize="none"
                                  :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                    </el-form-item>
                <el-form-item  label="流程状态"  prop="status" style="width: 100%;">
                    <el-radio-group v-model="status">
                        <el-radio :label="3">进行中</el-radio>
                        <el-radio :label="6">已结束</el-radio>
                    </el-radio-group>
                </el-form-item>
                <div style="display: flex;flex-direction: row-reverse">
                    <el-button type="success" style="float: right" >提交</el-button>
                </div>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "userFocusMajor",
        data(){
            return {
                userFrom: '',
                sorting:[
                    { value:'0',label:'id升序' },
                    { value:'1',label:'id降序' }
                ],
                sort:[
                    {value: '选项一',label: '10条'},
                    {value: '选项二',label: '50条'},
                    {value: '选项三',label: '100条'},
                ],
                tableTop:[
                    {type:'',prop:'refundid',label:'退款申请ID',width:112},
                    {type:'',prop:'userid',label:'提交帐号ID',width:112},
                    {type:'',prop:'useraccount',label:'提交帐号',width:112},
                    {type:'',prop:'organization',label:'辅导机构名称',width:150},
                    {type:'',prop:'classname',label:'课程名称',width:100},
                    {type:'',prop:'money',label:'申请金额',width:100},
                    {type:'',prop:'couponsid',label:'优惠券ID',width:100},
                    {type:'',prop:'createtime',label:'报名日期',width:100},
                    {type:'',prop:'updatetime',label:'提交申请时间',width:150},
                    {type:'',prop:'photo ',label:'联系电话',width:100},
                    {type:'',prop:'payment',label:'收款方式',width:100},
                    {type:'',prop:'state ',label:'流程状态',width:100},
                    {type:'',prop:'result ',label:'审批结果',width:100},
                ],
                tableData:[{
                    createtime:'2018-9-9',
                    userid: '111',
                    name: 'test',
                    realName:'test',
                }],

                /**分页**/
                total:0,
                searchContent:{
                    page:'',
                    limit:'',
                },
                dialogFormVisible :false,
                rules:{
                    type :[ { required: true, message: '请选择审核结果', trigger: 'blur' }],
                    desc:[{ required: true, message: '请输入审核意见', trigger: 'blur' }],
                    status :[ { required: true, message: '请选择流程状态', trigger: 'blur' }]
                },
            }
        },
        methods:{
            handleClick(val){
                this.dialogFormVisible = true
            },
            jumpPage:function() {
                this.$router.push('/refund/refunddetails');
            }
        }
    }
</script>

<style scoped>
    /**当前面包屑**/
    .now-page{
        padding-bottom: 3px;
        border-bottom: solid 1px #68c368;
    }

    .el-form-item{
        display: inline-block;
        width: 20%;
    }
    .filesquery {
        width: 1500px;
        height: 50px;
        margin: 0 auto;
        background-color: #F3F3F3;
        position: relative;
        display: flex;
        align-items:center;
    }
    .screen {
        font-weight: bold;
        font-size: 16px;
        color: #666;
        font-family:'Tahoma';
    }
    .dataquery-refresh {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666;
        background-color: #fff;
        border:1px solid #CCC;
        border-radius:0;
    }

    .query-button{
        float: right;
        color: #666;
        background-color: #fff;
        border:1px solid #CCC;
        border-radius:0;
    }

    .datalist-selecttwo {
        display: inline-block;
        position: absolute;
        right: 10px;
    }

    .files-datalist {
        display: flex;
        align-items:center;
        position: relative;
        width: 1500px;
        height: 50px;
        background: #f3f3f3;
        margin: 0 auto;
    }
    .file-table {
        width: 1500px;
        margin: 0 auto;
        text-align: center;
    }

    .filesForm {
        width: 1500px;
        display: flex;
        /*position: relative;*/
        margin: 0 auto;
    }

    .footer {
        border: 1px solid #E4E4E4;
        text-align: right;
        width: 1500px;
        height: 50px;
        background-color: #fdfdfe;
        margin: 20px auto;
        display: flex;
        align-items:center;
        justify-content:flex-end;
    }
    .el-pagination {
        color: #999;
        font-weight: 500;
    }
</style>
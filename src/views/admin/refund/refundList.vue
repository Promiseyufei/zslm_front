<template>
    <div>
        <el-breadcrumb separator="/" style="width: 1500px;margin: 0 auto 20px">
            <el-breadcrumb-item>账户管理</el-breadcrumb-item>
            <el-breadcrumb-item><div class="now-page">退款管理</div></el-breadcrumb-item>
        </el-breadcrumb>
        <div style="width: 1500px;margin: 0 auto 20px">
			<!-- refund -->
           <!-- <el-button size="small" type="info" icon="el-icon-upload2" style="float: none" plain>导出</el-button> -->
		    <a style="display: block;
		           float: none;
		           width: 80px;
		           height: 30px;
		           text-align: center;
		           line-height: 30px;
		           text-decoration: none;"
		      class="export-button"
		      href="http://www.zslm.com/admin/refund/export">
		       <!--需要配置域名-->
		       导出
		   </a>
        </div>
        <div class="filesquery">
            <p class="screen"><i class="el-icon-search"></i> 筛选查询</p>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native = "query">刷新</el-button>
        </div>

        <div class="filesForm">
            <el-form v-model="userFrom" label-width="80px">
                <el-form-item label="手机号">
                    <el-input v-model="phone_v"  size="medium" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="name_v" size="medium" placeholder="请输入用户姓名"></el-input>
                </el-form-item>
                <el-form-item label="处理结果">
                    <el-select v-model="type_v" placeholder="请选择">
                        <el-option v-for="(item,index) in sorting" :key="index" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="流程状态">
                    <el-select v-model="type1_v" placeholder="请选择">
                        <el-option v-for="(item,index) in sorting1" :key="index" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                
            </el-form>
            <el-button size="small" class="query-button" type="primary" icon="el-icon-search"  @click.native = "selectQuery">查询</el-button>

        </div>

        <div class="files-datalist">
            <p class="screen"><i class="el-icon-tickets"></i> 数据列表</p>
        </div>
        <div class="file-table">
            <el-table :data="tableData" border style="width: 100%" :header-cell-style="getRowClass">
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="jumpPage(scope.row.id)"
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
            <Page :total="total" @pageChange="pageChange" ></Page>
        </div>

        <el-dialog :visible.sync="dialogFormVisible">
            <el-form :rules="rules" :disabled="formdis">
                <el-form-item label="审批结果:"  prop="type" style="width: 100%">
                    <el-radio-group v-model="type">
                        <el-radio :label="1">通过</el-radio>
                        <el-radio :label="2">驳回</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="审批意见:" prop="desc" style="width: 100%">
                    <el-input type="textarea" v-model="content" resize="none" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
                <!-- <el-form-item label="审批意见:" >
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item> -->
                <el-form-item  label="流程状态:"  prop="status" style="width: 100%;">
                    <el-radio-group v-model="status">
                        <el-radio :label="0">进行中</el-radio>
                        <el-radio :label="1">已结束</el-radio>
                    </el-radio-group>
                </el-form-item>
                <div style="display: flex;flex-direction: row-reverse">
                    <el-button type="primary" style="float: right" @click="sublimit" >提交</el-button>
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
				  phone_v:'',
				name_v:'',
				type_v:3,
				type1_v:2,
                phone:'',
                name:'',
                type:3,
                type1:2,
                userFrom: '',
                formdis:true,
                content:'',
                status:0,
                sorting:[
                    { value:0,label:'未审批' },
                    { value:1,label:'通过' },
                    { value:2,label:'驳回' },
                    { value:3,label:'全部' }
                ],
                sorting1:[
                    { value:0,label:'进行中' },
                    { value:1,label:'已结束' },
                    { value:2,label:'全部' }
                ],
                sort:[
                    {value: '选项一',label: '10条'},
                    {value: '选项二',label: '50条'},
                    {value: '选项三',label: '100条'},
                ],
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
                tableData:[{
                    createtime:'2018-9-9',
                    userid: '111',
                    name: 'test',
                    realName:'test',
                }],

                /**分页**/
                total:0,
                searchContent:{
                    page:1,
                    limit:5,
                },
                dialogFormVisible :false,
                rules:{
                    type :[ { required: true, message: '请选择审核结果', trigger: 'blur' }],
                },
                selectId:0
            }
        },
        methods:{

            pageChange(msg){

                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
                //分页改变时，更新表格数据
                if (this.searchContent.page) {
                    this.query();
                };

            },
            sublimit:function(){
                var that = this;

                this.post('/admin/refund/setApproveStatus',{
                    refundId: that.selectId,
                    approveStatus: that.type,
                    stat: that.status,
                    approveContext: that.content,

                }).then(res=>{
                    if(res.code == 0){
                        that.message(true,'修改成功','success')
                        that.query();
                    }else{
                        that.message(true,'修改失败','error')
                    }
                })
            },
			
			selectQuery:function(){
				this.name = this.name_v
				this.type = this.type_v
				this.type1 = this.type1_v
				this.phone = this.phone_v
				 this.searchContent.page = 1
				 this.query()
			},
            query:function () {
                var that = this;
                this.post('/admin/refund/getrefund',{
                    //后台参数，前台参数(传向后台)
                    // phone:'',
                    // name:'',
                    // type:3,
                    // type1:2,
                    pageNumber: that.searchContent.page,
                    pageCount: that.searchContent.limit,
                    keyWord: that.name,
                    screenState: that.type,
                    type2: that.type1,
                    phone: that.phone,

                })
                    .then(function (response) {
                        var res = response;
                        if (res.code == 0) {
                            for(let i in res.result[0]){

                                res.result[0][i].create_time = that.timestampToTime(res.result[0][i].create_time)
                                res.result[0][i].update_time = that.timestampToTime(res.result[0][i].update_time)

                                res.result[0][i].process_status = res.result[0][i].process_status == 0 ? '进行中' : '已结束'

                                if(res.result[0][i].approve_status == 0)
                                    res.result[0][i].approve_status = '未审批'
                                else if(res.result[0][i].approve_status == 1)
                                    res.result[0][i].approve_status = '通过'
                                else
                                    res.result[0][i].approve_status = '驳回'

                                res.result[0][i].payment = '支付宝'
                            }
                            that.tableData =res.result[0];
                            that.total = res.result[1];
                        };
                    })
                    .catch(function (error) {
                    });
            },

            timestampToTime: function (timestamp) {
                var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                var D = date.getDate() + ' ';
                return Y + M + D;
            },

            handleClick(val){

                if(val.process_status == '进行中' && val.approve_status == '未审批'){

                    this.formdis = false
                    this.selectId = val.id
                }else{
                    this.content = val.approve_context
                    this.type = 1
                    this.status = 1
                }
                this.dialogFormVisible = true
            },
            jumpPage:function(val) {
                this.$router.push('/admin/refund/refunddetails/'+val);
            }
        },
        mounted(){
            // this.getPage();
            this.query();
        }
    }
</script>
<style>
.file-table .cell {
    font-size: 12px;
    text-align: center;
}
.el-dialog__header {
    height: 50px !important;
    padding: 0;
    background: #f2f2f2;
}
.el-dialog__body {
    padding: 20px 80px;
}
.el-textarea {
    width: 80%;
}
</style>
<style scoped>
    /**当前面包屑**/
    .now-page{
        padding-bottom: 3px;
        border-bottom: solid 1px #68c368;
    }
    .el-form-item{
        display: inline-block;
        /* width: 20%; */
    }
    .filesquery {
        width: 1500px;
        margin: 0 auto;
        background-color: #F3F3F3;
        /* position: relative; */
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
    .screen {
        font-weight: bold;
        font-size: 16px;
        color: #666;
        margin: 10px 20px;
        font-family:'Tahoma';
    }
    .dataquery-refresh {
        margin-right: 10px;
        color: #666;
        background-color: #fff;
        border:1px solid #CCC;
        border-radius:0;
    }
    

    .query-button{
        color: #666;
        background-color: #fff;
        border:1px solid #CCC;
        border-radius:0;
        margin-right: 10px;
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
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }

    .footer {
        border: 1px solid #E4E4E4;
        width: 1480px;
        background-color: #fdfdfe;
        margin: 20px auto;
        padding: 10px;
        display: flex;
        align-items:center;
        justify-content:flex-end;
    }
    .el-pagination {
        color: #999;
        font-weight: 500;
    }
	 .export-button{
	    float: right;
	    color: #666;
	    background-color: #fff;
	    border:1px solid #CCC;
	    border-radius:0;
	}
</style>
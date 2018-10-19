<template>
    <div class="majorlist">
        <div class="majorlist-top">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">信息发布</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">辅导机构</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="majorlist-button">
            <el-button type="primary" @click = "jumpPage">新建</el-button>
        </div>
        <div class="majorlist-query">
            <i class="el-icon-search"></i>
            <p>筛选查询</p>
            <div></div>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="majorlist-queryrefresh" @click.native = "gettableInfo">刷新</el-button>
        </div> 
        <div class="majorlist-form">
            <el-form class="majorlist-input" label-width="80px">
                <el-form-item label="机构名称">
                    <el-input size="medium" v-model="name" placeholder="输入文件名称"></el-input>
                </el-form-item>
                <el-form-item label="展示状态">
                    <el-select size="medium" v-model="type1" placeholder="全部">
                      <el-option label="展示" value="0"></el-option>
                      <el-option label="不展示" value="1"></el-option>
                        <el-option label="全部" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="推荐状态">
                    <el-select size="medium" v-model="type2" placeholder="全部">
                      <el-option label="推荐" value="0"></el-option>
                      <el-option label="不推荐" value="1"></el-option>
                        <el-option label="全部" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="优惠券" class="majorlist-formmini">
                    <el-select size="medium" v-model="type3" placeholder="全部">
                      <el-option label="支持" value="0"></el-option>
                      <el-option label="不支持" value="1"></el-option>
                        <el-option label="全部" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="退款保障" class="majorlist-formmini">
                    <el-select size="medium" v-model="type4" placeholder="全部">
                      <el-option label="支持退款" value="0"></el-option>
                      <el-option label="不支持退款" value="1"></el-option>
                        <el-option label="全部" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button size="mini" type="primary" icon="el-icon-search" class="majorlist-queryrefresh" @click.native = "gettableInfo">查询</el-button>
        </div>
        <div class="majorlist-list">
            <i class="el-icon-tickets"></i>
            <p>辅导机构</p>
            <div></div>
            <el-select size="mini" class="majorlist-selectone" v-model="value" placeholder="显示条数">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native = "gettableInfo">
                </el-option>
            </el-select>
        </div>
        <div class="majorlist-table">
            <el-table :data="majorlisttable" @current-change="handleCurrentChange" border style="width: 100%">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="编号" prop="id" width="100"></el-table-column>
                <el-table-column label="展示权重" width="100">
                    <template slot-scope="scope">
                        <el-input v-model="majorlisttable[scope.$index].weight"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="展示状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].is_show" active-color="#999" inactive-color="#409eff"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="推荐状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].is_recommend" active-color="#409eff" inactive-color="#999">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="优惠券" width="80">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].if_coupons" active-color="#409eff" inactive-color="#999">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="退款保障" width="80">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].if_back_money" active-color="#409eff" inactive-color="#999">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <div class="majorlist-icon">
                            <i v-for="(val, index) in iconname" :key="index" :class="val.name" @click="clickEvent(val.event, majorlisttable[scope.$index])"></i>
                            <el-popover placement="top-start" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                                <i class="el-icon-tickets" @click = "alertViewCoupons" slot="reference"></i>
                            </el-popover>
                        </div>
                    </template>
                </el-table-column>
                <div v-for="(val, index) in tableTop" :key="index">
                    <el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
                  </el-table-column>
                </div>
            </el-table>
        </div>
        <div class="footer"> 
            <el-button type="primary" size="mini" icon="el-icon-delete">批量删除</el-button>
            <Page :total="total" @pageChange="pageChange" @click.native = "gettableInfo"></Page>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                /*分页*/
                total:0,
                searchContent:{
                    page:'',
                    limit:'',
                },
                tableTop:[
                  {prop:'coach_name',label:'辅导机构名称',width:300},
                  {prop:'father_id',label:'机构类型',width:80},
                  {prop:'province',label:'活动区域',width:80},
                  {prop:'coach_type',label:'辅导形式',width:80},
                  {prop:'update_time',label:'发布时间',width:160},
                ],
                majorlisttable:[{
                  weight:'',
                  id:'',
                    coach_name:'',
                    province:'',
                    update_time:'',
                    coach_type:'',
                    father_id:'',
                  discount:'',
                  refund:'',
                    if_coupons:'',
                    is_recommend:'',
                    is_show:'',
                    if_back_money:''
                }],
                tableSwitch:[
                    {label:'展示状态',width:'100'},
                    {label:'推荐状态',width:'100'},
                    {label:'优惠券',width:'80'},
                    {label:'退款保障',width:'80'},
                ],
                iconname:[
                    {name:'el-icon-search', event:'jumpCoachHomePage'},
                    {name:'el-icon-edit-outline', event:'jumpMajorMsgPage'},
                    {name:'el-icon-delete', event:'singleDelete'},
                    {name:'el-icon-refresh', event:'timeUpdate'},
                    // {name:'el-icon-tickets', event:'alertViewCoupons'},
                ],
                value:'',
                name:'',
                type1:'',
                type2:'',
                type3:'',
                type4:'',
                options: [
                    {
                      value: '选项1',
                      label: '10条'
                    }, 
                    {
                      value: '选项2',
                      label: '50条'
                    }, 
                    {
                      value: '选项3',
                      label: '100条'
                    }
                ],
                // visible:[{false}]
            }
        },
        methods:{
            jumpPage:function(){
                this.$router.push('/message/changeMessage');
            },
            pageChange(msg) {
                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            //表格操作点击事件
            clickEvent(eventName, row) {
                if(this[eventName+""]) {
                    this[eventName+""](row);
                }
                else {
                    this.message(true, "浏览器版本不兼容", "error");
                }
            },
             //调到相应的辅导机构主页
            jumpCoachHomePage() {
                this.$router.push('');
            },
            //跳转到辅导机构信息页面
            jumpMajorMsgPage(val) {
                this.$router.push('/message/changeMessage');
            },
            //表格单行删除，
            singleDelete() {
                var that = this;
                that.confirm(true,'删除成功','确定删除');
            },
            //弹出框——查看优惠券
            alertViewCoupons() {
                console.log(123)
            },
            //发布时间更新
            timeUpdate() {
                this.$message('发布时间更已新');
            },

            // changeCount: function(val,index) {
            //   var re = /^[0-9]+.?[0-9]*$/;
            //   if (!re.test(val)) {
            //     this.message(true,'请输入数值','warning');
            //     this.tableData3[index].show_weight = this.inputval;
            //     // console.log(this.show_weight[index]);
            //   } else if (val<0||val>1000) {
            //     this.message(true,'权值范围为0~100','warning');
            //     this.tableData3[index].show_weight = this.inputval;
            //   } else {
            //     this.$confirm('此操作将修改该图片的权值, 是否继续?', '提示', {
            //       confirmButtonText: '确定',
            //       cancelButtonText: '取消',
            //       type: 'warning'
            //     }).then(() => {
            //       this.$message({
            //         type: 'success',
            //         message: '修改成功!'
            //       });
            //     }).catch(() => {
            //       this.tableData3[index].show_weight = this.inputval;
            //       this.$message({
            //         type: 'info',
            //         message: '已取消修改'
            //       });          
            //     });
            //   }
            // },
            focusCount:function(){
                this.input = val;
                console.log(this.TableValue);
            },
            gettableInfo:function(){
                var that = this;
                this.post('admin/information/getPageCoachOrganize',{
                    soachNameKeyword:'',
                    showType:that.type1 != '' ? that.type1 : 2,
                    recommendType:that.type2 != '' ? that.type2 : 2,
                    couponsType:that.type3 != '' ? that.type3 : 2,
                    moneyType:that.type4 != '' ? that.type4 : 2,
                    sortType:0,
                    pageCount:5,
                    pageNumber:1
                })
                .then(function (response) {
                    // that.page++;
                    var res = response;

                    if (res.code == 0) {
                        for(let i in res.result[0]){
                            if(res.result[0][i].father_id == 0){
                                res.result[0][i].father_id = '总部'
                            }else{
                                res.result[0][i].father_id = '分部'
                            }

                            if(res.result[0][i].coach_type == 0)
                                res.result[0][i].coach_type = '线上'
                            else if(res.result[0][i].coach_type == 1)
                                res.result[0][i].coach_type = '线下'
                            else
                                res.result[0][i].coach_type = '线上线下'
                        }
                        that.majorlisttable = res.result[0];
                        that.total = res.result[1];
                    };
                })
                .catch(function (error) {
                    // console.log(error);
                });
            }
        },
        mounted(){
            this.gettableInfo();
        },
    }

</script>

<!-- 全局样式 -->
<style>
    /*表格滚动条*/
    .majorlist-table .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    /*表头文本居中*/
    .majorlist-table .el-table th.is-leaf {
        text-align: center;
    }
    .footer .el-button--primary {
      margin: 0 0 0 20px;
    }
    .majorlist-table .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
        padding-left: 0;
    }
    .majorlist-table .el-button {
        border: 1px solid #ffffff;
        padding: 0 0 0 10px;
        /*display: flex;*/
        /*position: absolute;*/
    }
    .majorlist-table .el-button:focus, .el-button:hover {

    }
    
</style>

<!-- 局部样式 scoped -->
<style scoped>
    .majorlist-formmini {
        width: 180px;
    }
    .el-table {
        color: #333;
    }
    .el-button--text {
        color: #333;
    }
    .el-button--text:hover {
        color: #1ABC9C;
    }
    .el-table th>.cell {
        text-align: center;
    }
    .el-pagination {
        color: #999;
        font-weight: 500;
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
        justify-content:space-between;
    }
    .el-table thead {
        background: #f9fafc;
    }
    .el-table th>.cell {
        font-size: 12px;
        font-weight: bold;
        color: #666; 
        text-align: center;
    }
    .majorlist-icon i {
        margin: 0 5px;
        cursor: pointer;
    }
    .majorlist-icon {
        display: flex;
        justify-content:center;
        font-size: 18px;
        color: #999;
    }
    .majorlist-table .el-input {
        width: 40px;
    }
    .majorlist-table {
        width: 1500px;
        margin: 0 auto;
        text-align: center;
    }
    .majorlist-selectone {
        position: absolute;
        right: 10px;
        width: 100px;
    }
    .majorlist-input {
        display: flex;
    }
    .majorlist-form {
        display: flex;
        position: relative;
        width: 1500px;
        margin: 20px auto 0;
    }
    .majorlist-queryrefresh {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666; 
        background-color: #fff; 
        border:1px solid #CCC;
        border-radius:0;
    }
    .majorlist-query p,.majorlist-list p {
        font-size: 16px;
        color: #666;
        font-weight: bold;
    }
    .majorlist-query i,.majorlist-list i {
        padding: 0 5px 0 10px;
    }
    .majorlist-query,.majorlist-list {
        position: relative;
        display: flex;
        align-items:center;
        width: 1500px;
        height: 50px;
        background:#f3f3f3;
        margin: 0 auto;
    }
    .majorlist-button {
        margin: 20px auto;
        width: 1500px;
    }
    .span {
        margin: 10px 6.5px;
    }
    .majorlist-top p {
        font-size: 10px;
        color: #999;
    }
    .majorlist-top {
        display: flex;
        margin: 0 auto;
        width: 1500px;
    }
</style>

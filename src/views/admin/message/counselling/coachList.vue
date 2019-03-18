<template>
    <div class="majorlist">
        <div class="majorlist-top">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>信息发布</el-breadcrumb-item>
              <el-breadcrumb-item>辅导机构</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="majorlist-button">
            <el-button type="primary" @click="jumpPage(0)">新建</el-button>
        </div>
        <div class="majorlist-query">
            <i class="el-icon-search"></i>
            <p>筛选查询</p>
            <div></div>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="majorlist-queryrefresh" @click.native="refreshCoachPage">刷新</el-button>
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
            <el-select size="mini" class="majorlist-selectone" v-model="value" placeholder="默认排序">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native="gettableInfo">
                </el-option>
            </el-select>
        </div>
        <div class="majorlist-table">
            <el-table :header-cell-style="{background:'#f9fafc'}" :data="majorlisttable"
                      @selection-change="handleSelectionChange" @current-change="handleCurrentChange" border style="width: 100%">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="编号" prop="id" width="100"></el-table-column>
                <el-table-column label="展示权重" width="100">
                    <template slot-scope="scope">
                        <el-input @focus="getFocus(majorlisttable[scope.$index].weight)"
                                  v-on:blur="loseFocus(majorlisttable[scope.$index].weight,scope.$index)"
                                  v-model="majorlisttable[scope.$index].weight"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="展示状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].is_show"
                                   @change="changeStatusOne(scope.$index,majorlisttable[scope.$index].is_show)"
                                   active-color="#409eff" inactive-color="#999"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="推荐状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].is_recommend"
                                   @change="changeStatusTwo(scope.$index,majorlisttable[scope.$index].is_recommend)"
                                   active-color="#409eff" inactive-color="#999"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="优惠券" width="80">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].if_coupons"
                                   @change="changeStatusThree(scope.$index,majorlisttable[scope.$index].if_coupons)"
                                   active-color="#409eff" inactive-color="#999"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="退款保障" width="80">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].if_back_money"
                                   @change="changeStatusFour(scope.$index,majorlisttable[scope.$index].if_back_money)"
                                   active-color="#409eff" inactive-color="#999"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <div class="majorlist-icon">

                            <i v-for="(val, index) in iconname" :key="index" :class="val.name" @click="clickEvent(val.event, majorlisttable[scope.$index])"></i>
                            <i class="el-icon-edit-outline"   @click="jumpPage(majorlisttable[scope.$index].id)" slot="reference"></i>
                            <i class="el-icon-delete"   @click="deleteRow(scope.$index, majorlisttable)" slot="reference"></i>
                            <i class="el-icon-tickets" @click="checkAllCoupon(majorlisttable[scope.$index].id)" slot="reference"></i>
                            <el-dialog title="查看优惠券" :visible.sync="dialogTableVisible" class="dialog">
                              <el-table :data="gridData"  border>
                                <el-table-column property="id" label="编号" width="120"></el-table-column>
                                <el-table-column property="name" label="优惠券名称" width="140"></el-table-column>
                                <el-table-column property="name" label="优惠券名称" width="140"></el-table-column>
                                <el-table-column property="type" label="优惠券名称" width="140"></el-table-column>
                                <el-table-column property="is_enable" label="启用状态" width="140">
                                    <template slot-scope="scope">
                                        <el-switch v-model="gridData[scope.$index].is_enable" @change="setCouponEnable(gridData[scope.$index].id, gridData[scope.$index].is_enable)">
                                        </el-switch>
                                    </template>
                                </el-table-column>
                                <el-table-column property="address" label="操作" width="140">
                                    <template slot-scope="scope">
                                        <i class="el-icon-search"  @click="jumpItemInfo"></i>
                                    </template>
                                </el-table-column>
                              </el-table>
                            </el-dialog>
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
            <el-button size="mini" icon="el-icon-delete" @click="BatchDelete">删除</el-button>
            <Page :total="total" @pageChange="pageChange" @click.native = "gettableInfo"></Page>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                /*模态框*/
                dialogTableVisible: false,
                 gridData: [    //表格
                    // {
                    //   id: 0,
                    //   showInput: 0,
                    //   showState: true,
                    //   item:'',
                    // },
                ],
                /*分页*/
                multipleSelection:[],
                total:0,
                searchContent:{
                    page:1,
                    limit:10,
                },
                tableTop:[
                  {prop:'coach_name',label:'辅导机构名称',width:300},
                  {prop:'father_id',label:'机构类型',width:80},
                  {prop:'province',label:'活动区域',width:80},
                  {prop:'coach_type',label:'辅导形式',width:80},
                  {prop:'update_time',label:'发布时间',width:160},
                ],
                // majorlisttable:[{
                //     weight:'',
                //     id:'',
                //     coach_name:'',
                //     province:'',
                //     update_time:'',
                //     coach_type:'',
                //     father_id:'',
                //     discount:'',
                //     refund:'',
                //     if_coupons:'',
                //     is_recommend:'',
                //     is_show:'',
                //     if_back_money:''
                // }],
                majorlisttable:[],
                tableSwitch:[
                    {label:'展示状态',width:'100'},
                    {label:'推荐状态',width:'100'},
                    {label:'优惠券',width:'80'},
                    {label:'退款保障',width:'80'},
                ],
                iconname:[
                    {name:'el-icon-search', event:'jumpCoachHomePage'},
                    {name:'el-icon-refresh', event:'timeUpdate'},
                ],
                value:'',
                name:'',
                type1:'',
                type2:'',
                type3:'',
                type4:'',
                options: [
                    {
                      value: 0,
                      label: '按权重升序'
                    },
                    {
                      value: 1,
                      label: '按权重降序'
                    },
                    {
                      value: 2,
                      label: '按更新时间'
                    }
                ],
                // visible:[{false}]
            }
        },
        methods:{
            jumpItemInfo() {

            },


            //刷新页面
            refreshCoachPage() {
                this.name = '';
                this.type1 = '';
                this.type2 = '';
                this.type3 = '';
                this.type4 = '';
                this.value = '';
                this.total = 0;
                this.searchContent.page = 1;
                this.searchContent.limit = 10;
                this.majorlisttable = [];
                this.multipleSelection = [];
                this.gridData = [];
                this.gettableInfo();

            },

            setCouponEnable(couponId, state) {
                state = state == true ? 0 : 1;
                this.post('/admin/information/setAppointCouponEnable', {
                    couponId: couponId,
                    state: state
                }).then((response) => {
                    if(response.code == 0) {
                        state == 0 ? this.message(true, '启用成功', 'success') : this.message(true, '禁用成功', 'success');
                    }
                    else state == 0 ? this.message(true, '启用失败', 'info') :  this.message(true, '禁用失败', 'info');
                })
            },
            loseFocus:function(val,index) {
                var re = /^[0-9]+.?[0-9]*$/;
                if (!re.test(val)) {
                    this.message(true,'请输入数值','warning');
                    this.majorlisttable[index].weight = this.showweight;
                } else if (val<0||val>1000) {
                    this.message(true,'权值范围为0~100','warning');
                    this.majorlisttable[index].weight = this.showweight;
                } else {
                    //权重正确，将该行表格id传给后台
                    var that = this;
                    if(val != that.showweight){
                        this.confirm(() => {
                            this.post('/admin/information/updateCoachWeight',{
                                //后台参数，前台参数(传向后台)
                                id: that.majorlisttable[index].id,
                                weight: that.majorlisttable[index].weight
                            }).then(res=>{
                                if (res.code == 0){
                                    that.message(true,'删除成功','success');
                                }else{
                                    that.message(true,'删除失败','error');
                                    that.majorlisttable[index].weight = that.showweight;
                                }

                            })
                        }, () => {

                            that.majorlisttable[index].show_weight = that.showweight;
                        },'确定修改么', '需要注意的操作');
                    }else{
                        this.majorlisttable[index].showweight = this.showweight;
                    }


                }
            },

            checkAllCoupon(coachId) {
                this.fetch('/admin/information/getAppointCoachCoupon', {
                    coachId: coachId
                }).then((response) => {
                    if(response.code == 0) {
                        this.gridData = response.result;
                        this.dialogTableVisible = true;
                    }
                    else this.message(true, response.msg, 'info');
                })
            },

            changeStatusOne(index,val){
                let that = this;
                let id = that.majorlisttable[index].id
                this.confirm(() => {
                    this.post('/admin/information/updateCoachShow',{
                        //后台参数，前台参数(传向后台)
                        id:id,
                        state:val ? 0 : 1
                    }).then(res=>{
                        if (res.code == 0){
                            that.message(true,'修改成功','success');
                        }else{
                            that.message(true,'修改失败','error');
                            that.majorlisttable[index].is_show = !val;
                        }

                    })
                }, () => {
                    that.majorlisttable[index].is_show = !val;
                },'确定修改么', '需要注意的操作');
            },

            changeStatusTwo(index,val){
                let that = this;
                let id = that.majorlisttable[index].id
                this.confirm(() => {
                    this.post('/admin/information/updateCoachRec',{
                        //后台参数，前台参数(传向后台)
                        id:id,
                        state:val ? 0 : 1
                    }).then(res=>{
                        if (res.code == 0){
                            that.message(true,'修改成功','success');
                        }else{
                            that.message(true,'修改失败','error');
                            that.majorlisttable[index].is_recommend = !val;
                        }

                    })
                }, () => {
                    that.majorlisttable[index].is_recommend = !val;
                },'确定修改么', '需要注意的操作');
            },

            changeStatusThree(index,val){
                let that = this;
                let id = that.majorlisttable[index].id
                this.confirm(() => {
                    this.post('/admin/information/updateCoachRec',{
                        //后台参数，前台参数(传向后台)
                        id:id,
                        state:val ? 0 : 1
                    }).then(res=>{
                        if (res.code == 0){
                            that.message(true,'修改成功','success');
                        }else{
                            that.message(true,'修改失败','error');
                            that.majorlisttable[index].if_coupons = !val;
                        }

                    })
                }, () => {
                    that.majorlisttable[index].if_coupons = !val;
                },'确定修改么', '需要注意的操作');
            },

            changeStatusThree(index,val){
                let that = this;
                let id = that.majorlisttable[index].id
                this.confirm(() => {
                    this.post('/admin/information/updateCoachCon',{
                        //后台参数，前台参数(传向后台)
                        id:id,
                        state:val ? 0 : 1
                    }).then(res=>{
                        if (res.code == 0){
                            that.message(true,'修改成功','success');
                        }else{
                            that.message(true,'修改失败','error');
                            that.majorlisttable[index].if_coupons = !val;
                        }

                    })
                }, () => {
                    that.majorlisttable[index].if_coupons = !val;
                },'确定修改么', '需要注意的操作');
            },

            changeStatusFour(index,val){
                let that = this;
                let id = that.majorlisttable[index].id
                this.confirm(() => {
                    this.post('/admin/information/updateCoachTui',{
                        //后台参数，前台参数(传向后台)
                        id:id,
                        state:val ? 0 : 1
                    }).then(res=>{
                        if (res.code == 0){
                            that.message(true,'修改成功','success');
                        }else{
                            that.message(true,'修改失败','error');
                            that.majorlisttable[index].if_back_money = !val;
                        }

                    })
                }, () => {
                    that.majorlisttable[index].if_back_money = !val;
                },'确定修改么', '需要注意的操作');
            },

            jumpPage:function(id){
                this.$router.push('/admin/message/changeMessage/'+id);

            },
            pageChange(msg) {
                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
                this.gettableInfo();
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
            jumpCoachHomePage(row) {
                this.$router.push('/front/firstMenuRouter/searchCoach/singleCoachs/' + row.id);
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
            timeUpdate(row) {

                this.post('admin/information/updateCoachTime', {
                    coachId: row.id
                }).then((response) => {
                    if(response.code == 0) {
                        this.majorlisttable[this.majorlisttable.indexOf(row)].update_time = response.result;
                        this.message(true, '时间以更新', 'success');
                    }
                    else this.message(true, response.msg, 'info');
                })
            },
            focusCount:function(){
                this.input = val;
                console.log(this.TableValue);
            },
            gettableInfo:function(){
                var that = this;
                this.post('admin/information/getPageCoachOrganize',{
                    soachNameKeyword:that.name,
                    showType:that.type1 != '' ? that.type1 : 2,
                    recommendType:that.type2 != '' ? that.type2 : 2,
                    couponsType:that.type3 != '' ? that.type3 : 2,
                    moneyType:that.type4 != '' ? that.type4 : 2,
                    sortType:that.value == '' ? this.options[2].value : that.value,
                    pageCount:this.searchContent.limit,
                    pageNumber:this.searchContent.page
                })
                .then(function (response) {
                    // that.page++;
                    var res = response;

                    if (res.code == 0) {
                        for(let i in res.result[0]){

                            res.result[0][i].is_show =   res.result[0][i].is_show == 0 ? true :false;
                            res.result[0][i].if_coupons =   res.result[0][i].if_coupons == 0 ? true :false;
                            res.result[0][i].is_recommend =   res.result[0][i].is_recommend == 0 ? true :false;
                            res.result[0][i].if_back_money =   res.result[0][i].if_back_money == 0 ? true :false;

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
            },

            BatchDelete: function(){
                if(this.multipleSelection.length < 1) {
                    this.message(true, '请选择让要删除的选项', 'info');
                    return false;
                }
                var that = this;
                let selectId = [];//存放删除的数据
                for (var i = 0; i < that.multipleSelection.length; i++) {
                    selectId.push(that.multipleSelection[i].id);
                };
                this.deleteRequest(selectId);
            },

            deleteRow(index, rows) {
                // 删除前判断
                let that = this;

                that.deleteRequest([rows[index].id]);
                // 删除某一行

            },
            deleteRequest(filesId){
                let that = this;
                this.confirm(() => {
                    this.post('/admin/information/deleteAppointCoach',{
                        //后台参数，前台参数(传向后台)
                        coachId: filesId,
                    }).then(function (response) {
                        var res = response;
                        if (res.code == 0) {
                            that.gettableInfo();
                            that.message(true,'删除成功','success');
                        }else{
                            that.message(true,'删除失败','error');
                        }
                    }).catch(function (error) {
                        that.message(true,'删除失败','error');
                    });
                }, () => {
                },'确定删除吗', '危险操作');
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },

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
        /* overflow-x: hidden; */
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
    }
    /*分页右间距*/
    .footer .el-pagination[data-v-4e9eef01] {
        padding-right: 20px;
    }



</style>

<!-- 局部样式 scoped -->
<style scoped>
  .el-button--primary{
    background-color: #009fa0 !important;
    border-color: #009fa0 !important;
    width: auto !important;
    border-radius: 5px !important;
  }

    .dialog i {
        font-size: 20px;
    }
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
        margin: 2px 5px;
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
        /*color: #666;*/
        color: #fff;
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
        margin: 0 10px 0 20px;
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

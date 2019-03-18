<template>
    <div class="majorlist">
        <div class="majorlist-top">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">信息发布</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动信息</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="majorlist-button">
            <el-button type="primary" @click.native="jumpPage">新建</el-button>
        </div>
        <div class="majorlist-query">
            <i class="el-icon-search"></i>
            <p>筛选查询</p>
            <div></div>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="majorlist-queryrefresh" @click.native="refreshActivityPage">刷新</el-button>
        </div>
        <div class="majorlist-form">
            <el-form class="majorlist-input" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input size="medium" v-model="name" placeholder="请输入..."></el-input>
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
                <el-form-item label="活动状态">
                    <el-select size="medium" v-model="type3" placeholder="全部">
                      <el-option label="不可报名" value="0"></el-option>
                      <el-option label="可报名" value="1"></el-option>
                        <el-option label="全部" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button size="mini" type="primary" icon="el-icon-search" class="majorlist-queryrefresh" @click.native = "gettableInfo">查询</el-button>
        </div>
        <div class="majorlist-list">
            <i class="el-icon-tickets"></i>
            <p>内容列表</p>
            <div></div>
            <el-select size="mini" class="majorlist-selectone" v-model="value" placeholder="默认序列">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native="gettableInfo">
                </el-option>
            </el-select>
        </div>
        <div class="majorlist-table">
            <el-table :data="majorlisttable" @selection-change="handleSelectionChange" @current-change="handleCurrentChange" border style="width: 100%" :header-cell-style="{background:'#f9fafc'}">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="编号" prop="id" width="100"></el-table-column>
                <el-table-column label="展示权重" width="100">
                    <template slot-scope="scope">
                        <el-input @focus="getFocus(majorlisttable[scope.$index].show_weight)"
                                  v-on:blur="loseFocus(majorlisttable[scope.$index].show_weight,scope.$index)"
                                v-model="majorlisttable[scope.$index].show_weight"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="展示状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].show_state"
                                   @change="changeStatusOne(scope.$index,majorlisttable[scope.$index].show_state)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="推荐状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].recommended_state"
                            @change="changeStatusTwo(scope.$index,majorlisttable[scope.$index].recommended_state)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <div class="majorlist-icon">
                            <i class="el-icon-search" @click="jumpActivityDet(majorlisttable[scope.$index].id)"></i>
                            <i class="el-icon-edit-outline" @click="jumpActivityInfo(majorlisttable[scope.$index].id)"></i>
                            <i class="el-icon-delete" @click="deleteRow(scope.$index, majorlisttable)"></i>
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
            <Page :total="total" :limit="searchContent.limit" @pageChange="pageChange" ></Page>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                /*分页*/
                multipleSelection:[],
                total:0,
                searchContent:{
                    page:1,
                    limit:10,
                },
                tableTop:[
                  {prop:'active_name',label:'活动名称',width:380},
                  {prop:'name',label:'活动类型',width:80},
                  {prop:'province',label:'活动省市',width:80},
                  {prop:'z_name',label:'主办院校',width:160},
                  {prop:'sign_up_state',label:'报名状态',width:80},
                  {prop:'create_time',label:'发布时间',width:160},
                ],
                majorlisttable:[],
                value:'',
                // input:'',
                name:'',
                type1:'',
                type2:'',
                type3:'',
                showweight:0,
                options: [
					{value: 0,　label: '按权重升序'},
					{value: 1,label: '按权重降序'},
					{value: 2,label: '按信息更新时间'}
                ],
            }
        },
        methods:{
            //新建跳转页面——跳转到活动信息
            jumpPage:function(){
                this.$router.push('/admin/message/activity/0');
            },
            //表格搜索——跳转到相应的活动详情页
            jumpActivityDet:function(activityId){
				let routeUrl = this.$router.resolve({
					path:'/front/firstMenuRouter/lookActivity/singleActivity/'+activityId,
					// query:{id: activityId}
				});
				window.open(routeUrl.href, '_blank');
            },
            //表格编辑——跳转到活动信息页面
            jumpActivityInfo:function(id){
                this.$router.push('/admin/message/activity/'+id);
            },
            //表格删除——
            singleDele:function(){
            },
            //分页
            pageChange(msg) {
                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
                this.gettableInfo();
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },

            handleSelectionChange(val) {
                this.multipleSelection = val;
            },

            changeStatusOne(index,val){
                let that = this;
                let id = that.majorlisttable[index].id
                this.confirm(() => {
                    this.post('/admin/information/updateActivityShow',{
                        //后台参数，前台参数(传向后台)
                        id:id,
                        showState:val ? 0 : 1
                    }).then(res=>{
                        if (res.code == 0){
                            that.message(true,'修改成功','success');
                        }else{
                            that.message(true,'修改失败','error');
                            that.majorlisttable[index].show_state = !val;
                        }

                    })
                }, () => {
                    that.majorlisttable[index].show_state = !val;
                },'确定修改么', '需要注意的操作');
            },

            changeStatusTwo(index,val){
                let that = this;
                let id = that.majorlisttable[index].id
                this.confirm(() => {
                    this.post('/admin/information/updateActivityRec',{
                        //后台参数，前台参数(传向后台)
                        id:id,
                        rec:val ? 0 : 1
                    }).then(res=>{
                        if (res.code == 0){
                            that.message(true,'修改成功','success');
                        }else{
                            that.message(true,'修改失败','error');
                            that.majorlisttable[index].recommended_state = !val;
                        }

                    })
                }, () => {
                    that.majorlisttable[index].recommended_state = !val;
                },'确定修改么', '需要注意的操作');
            },

            BatchDelete: function(){
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
                console.log(rows)
                that.deleteRequest([rows[index].id]);
                // 删除某一行

            },
            deleteRequest(filesId){
                let that = this;
                this.confirm(() => {
                    this.post('/admin/information/deleteActivity',{
                        //后台参数，前台参数(传向后台)
                        activityId: filesId,
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


            getFocus: function(val) {
                this.showweight = val;
            },

            loseFocus:function(val,index) {
                var re = /^[0-9]+.?[0-9]*$/;
                if (!re.test(val)) {
                    this.message(true,'请输入数值','warning');
                    this.majorlisttable[index].show_weight = this.showweight;
                } else if (val<0||val>1000) {
                    this.message(true,'权值范围为0~100','warning');
                    this.majorlisttable[index].show_weight = this.showweight;
                } else {
                    //权重正确，将该行表格id传给后台
                    var that = this;
                    if(val != that.showweight){
                        this.confirm(() => {
                            this.post('/admin/information/updateActivityWeight',{
                                //后台参数，前台参数(传向后台)
                                id: that.majorlisttable[index].id,
                                showWeight: that.majorlisttable[index].show_weight
                            }).then(res=>{
                                if (res.code == 0){
                                    that.message(true,'修改成功','success');
                                }else{
                                    that.message(true,'修改失败','error');
                                    that.majorlisttable[index].show_weight = that.showweight;
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

            focusCount:function(){
                this.input = val;
                console.log(this.TableValue);
            },

            //刷新页面
			refreshActivityPage() {
				this.name = '';
				this.type1 = '';
                this.type2 = '';
                this.type3 = '';
                this.total = 0;
                this.searchContent.page = 1;
                this.searchContent.limit = 10;
                this.majorlisttable = [];
				this.value = '';
				this.gettableInfo();
			},

            gettableInfo:function(){
                var that = this;
                this.post('/admin/information/getActivityPageMessage',{
                    soachNameKeyword:'',
                    showType:that.type1 != '' ? parseInt(that.type1) : 2,
                    recommendedState:that.type2 != '' ? parseInt(that.type2): 2,
                    activityState:that.type3 != '' ? parseInt(that.type3) : 2,
                    sortType:that.value == '' ? that.options[2].value : that.value,
                    pageCount:that.searchContent.limit,
                    pageNumber:that.searchContent.page
                })
                .then(function (response) {
                    // that.page++;
                    var res = response;
                    if (res.code == 0) {
                        for(let i in res.result[0]){
                            res.result[0][i].show_state = res.result[0][i].show_state == 0 ? true : false;
                            res.result[0][i].recommended_state = res.result[0][i].recommended_state == 0 ? true : false;
                        }
                        console.log(res.result[0])
                        that.majorlisttable = res.result[0];
                        that.total = res.result[1];
                    }else{
                        that.majorlisttable = [];
                        that.total = 0;
                    }
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
        /* overflow-x: hidden; */
    }
    /*表头文本居中*/
    .majorlist-table .el-table th.is-leaf {
        text-align: center;
    }
    .footer .el-button--mini {
      margin: 0 0 0 20px;
    }
    .majorlist-table .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
        padding-left: 0;
    }
    /*分页右间距*/
    .footer .el-pagination[data-v-714de402] {
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
        /*color: #666; */
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

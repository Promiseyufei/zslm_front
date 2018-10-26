<template>
    <div class="informationList">
        <!-- 面包屑 -->
        <div class="informationList-crumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">信息发布</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">资讯发布</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 新建按钮 -->
        <div class="informationList-newbuild">
            <el-button type="primary" size="medium" @click.native = "jumpPage">新建</el-button>
        </div>

        <!-- 筛选查询   刷新按钮需要获得表格数据-->
        <div class="informationList-query">
            <i class="el-icon-search"></i>
            <p>筛选查询</p>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="informationList-refresh" @click.native = "refreshInfoMsg">刷新</el-button>
        </div> 

        <!-- 查询输入框   输入框向后台传参，查询按钮需要获得表格数据-->
        <div class="informationList-form">
            <el-form class="informationList-input" label-width="80px">
                <el-form-item label="资讯标题" >
                    <el-input size="medium" v-model="informationTitle" placeholder="输入文件名称"></el-input>
                </el-form-item>


                <el-form-item label="展示状态">
                    <el-select size="medium" v-model="type1" placeholder="全部">
                        <el-option v-for="(item, index) in showArr" :key="index" :label="item.label" :value="item.value" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="推荐状态">
                    <el-select size="medium" v-model="type2" placeholder="全部">
                        <el-option v-for="(item, index) in recommendArr" :key="index" :label="item.label" :value="item.value" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="咨询类型">
                    <el-select size="medium" v-model="type3" placeholder="全部">
                        <el-option v-for="(item, index) in infoType"  :label="item.name" :value="item.id" :key="index"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button size="mini" type="primary" icon="el-icon-search" class="informform-search" @click.native = "gettableInfo">查询</el-button>
        </div>

        <!-- 内容列表   默认顺序需向后台传参-->
        <div class="informationList-contentlist">
            <i class="el-icon-tickets"></i>
            <p>内容列表</p>
            <!-- <div></div> -->
            <el-select size="mini" class="information-sort" v-model="Sort" placeholder="默认顺序">
                <el-option v-for="(item, index) in sort" :key="index" :label="item.label" :value="item.value" @click.native="gettableInfo">
                </el-option>
            </el-select>
        </div>

        <!-- 表格    需获得表格数据-->
        <div class="information-table">
            <el-table :header-cell-style="{background:'#f9fafc'}" :data="informationListtTable" @current-change="handleCurrentChange" border style="width: 100%">
                <el-table-column type="selection" width="60"></el-table-column>
                <el-table-column label="编号" prop="id" width="100"></el-table-column>
                <el-table-column label="展示权重" width="80">
                    <template slot-scope="scope">
                        <el-input v-model="informationListtTable[scope.$index].weight" @focus="focusMajorWeigthCount(informationListtTable[scope.$index].weight)" v-on:blur="changeMajorWeight(informationListtTable[scope.$index].id, informationListtTable[scope.$index].weight, scope.$index)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="展示状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="informationListtTable[scope.$index].is_show" @change="setInfoState(informationListtTable[scope.$index].id, informationListtTable[scope.$index].is_show, 1, scope.$index)"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="推荐状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="informationListtTable[scope.$index].is_recommend" @change="setInfoState(informationListtTable[scope.$index].id, informationListtTable[scope.$index].is_recommend, 2, scope.$index)" active-color="#999" inactive-color="#409eff"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <div class="majorlist-icon">
                            <i class="el-icon-search" @click = "jumpInformDeta"></i>
                            <i class="el-icon-edit-outline" @click = "jumpPage"></i>
                            <i class="el-icon-delete" @click="deleteRow(informationListtTable[scope.$index])"></i>
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
            <el-button size="mini" icon="el-icon-delete">删除</el-button>
            <Page :total="total" @pageChange="pageChange" @click.native = "gettableInfo"></Page>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                type1: 2,
                type2: 2,
                type3: 0,
                cacheMajorWeight:'', 
                /*查询输入框*/
                informationTitle:'',
                //咨询类型
                infoType:[{id:0, name:'全部'}],
                showArr:[
                    {label:'展示', value:0},
                    {label:'不展示', value:1},
                    {label:'全部', value:2}
                ],
                recommendArr:[
                    {label:'推荐', value:0},
                    {label:'不推荐', value:1},
                    {label:'全部', value:2}
                ],
                /*默认顺序*/
                Sort:'',
                sort: [
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
                /*表格*/
                tableTop:[
                  {prop:'zx_name',label:'资讯标题',width:520},
                  {prop:'z_type',label:'资讯类型',width:100},
                  {prop:'z_from',label:'资讯来源',width:160},
                  {prop:'create_time',label:'发布时间',width:160},
                ],
                informationListtTable:[],
                /*分页*/
                total:0,
                searchContent:{
                    page:1,
                    limit:5,
                },  
            }
        },
        methods:{
            refreshInfoMsg() {
                this.informationTitle = "";
                this.type1 = 2;
                this.type2 = 2;
                this.type3 = 0;
                this.searchContent.page = 1;
                this.searchContent.limit = 5;
                this.informationListtTable = [];
                this.gettableInfo();
            },
            focusMajorWeigthCount(weight) {
                this.cacheMajorWeight = weight;
            },
            changeMajorWeight(id, weight, row) {
                var re = /^[0-9]+.?[0-9]*$/;
                if (!re.test(weight)) {
                    this.message(true,'请输入数值','warning');
                    this.majorlisttable[row].weight = this.cacheMajorWeight;
                } else if (weight<0||weight>1000) {
                    this.message(true,'权值范围为0~100','warning');
                    this.majorlisttable[row].weight = this.cacheMajorWeight;
                } else {
                    this.setInfoState(id, weight, 0);
                }
            },
            //设置专业状态(权重，展示状态，推荐状态)
            setInfoState(id, state, type, row) {
                
                let _this = this;
                this.confirm(() => {
                    if(type == 0) state = state;
                    else if(type == 1) state = state ? 0 : 1;
                    else if(type == 2) state = state ? 1 : 0;
                    _this.post('/admin/information/setAppointInfoState', {
                        infoId: id,
                        type: type,
                        state: state
                    }).then((response) => {
                        (response.code == 0) ? this.message(true, response.msg, 'success'): this.message(true, response,msg, 'error');
                    });
                }, ()=> {
                    switch(type)
                    {
                        case 1:
                            _this.informationListtTable[row].is_show = !_this.informationListtTable[row].is_show;
                            break;
                        case 2: 
                            _this.informationListtTable[row].is_recommend = !_this.informationListtTable[row].is_recommend;
                            break;
                    }
                    this.message(true, '已取消修改', 'info');    
                })
            },
    
            //新建+表格编辑——页面跳转到资讯内容
            jumpPage:function(){
                this.$router.push('/message/changeInformation');
            },
            //跳到相应的资讯详情页
            jumpInformDeta(){
              //此页面未给  
            },
            deleteRow(val) {
                let _this = this;
                this.confirm(() => {
                    _this.post('/admin/information/deleteAppointInfo', {
                        infoId: val.id
                    }).then((response) => {
                        if(response.code == 0){
                            _this.informationListtTable.splice(this.informationListtTable.indexOf(val), 1);
                            this.message(true,response.msg, 'success');
                        }
                        else
                            this.message(true, response.msg, 'error');
                    })
                }, ()=> {
                    this.message(true, "已取消操作", "info");
                })
            },
            
            /*分页  获得当前页码和总页数*/
           pageChange(msg) {
                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
                this.gettableInfo();
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            focusCount:function(){
                this.input = val;
            },
            gettableInfo:function() {
                var that = this;
                this.post('/admin/information/getInfoPageMsg',{
                    infoNameKeyword: this.informationTitle,
                    screenType: this.type1 == '' ? 2 : this.type1,
                    screenState: this.type2 == '' ? 2 : this.type2,
                    infoType: this.type3 == '' ? 0 : this.type3,
                    sortType: this.Sort == '' ? 2 : this.Sort,
                    pageCount: this.searchContent.limit,
                    pageNumber: this.searchContent.page
                })
                .then((response) => {
                    if (response.code == 0) {
                        console.log(response);
                        that.informationListtTable = response.result.data;
                        that.total = response.result.total;
                    };
                })
                .catch(function (error) {
                    // console.log(error);
                });
            }
        },
        mounted(){
            let _this = this;
            this.getMajorPageOptions('post', '/admin/information/getInfoType', {}, (response) => {
                response.code == 0 ? _this.infoType.concat(response.result) : this.message(true, response.msg, 'error'); 
            }, (response) => {
                this.message(true, '未查询到咨询类型的信息', 'error');
            });

            this.gettableInfo();
        },
    }

</script>

<!-- 全局样式 -->
<style>
    /*表格滚动条*/
    .information-table .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    /*表头文本居中*/
    .information-table .el-table th.is-leaf {
        text-align: center;
    }
    .footer .el-button--mini {
      margin: 0 0 0 20px;
    }
    .footer .el-pagination[data-v-6c35a61f] {
        padding-right: 20px;
    }
    .information-table .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
        padding-left: 0;
    }
</style>

<!-- 局部样式 scoped -->
<style scoped>
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
    }
    .majorlist-icon {
        display: flex;
        justify-content:center;
        font-size: 18px;
        color: #999;
    }
    .information-table .el-input {
        width: 40px;
    }
    .information-table {
        width: 1500px;
        margin: 0 auto;
        text-align: center;
    }
    .information-sort {
        position: absolute;
        right: 10px;
        width: 100px;
    }
    .informationList-input {
        display: flex;
    }
    .informationList-form {
        display: flex;
        position: relative;
        width: 1500px;
        margin: 20px auto 0;
        padding: 0 0 0 30px;
    }
    .informationList-refresh,.informform-search {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666; 
        background-color: #fff; 
        border:1px solid #CCC;
        border-radius:0;
    }
    .informform-search {
        right: 25px;
    }
    .informationList-query p,.informationList-contentlist p {
        font-size: 16px;
        color: #666;
        font-weight: bold;
    }
    .informationList-query i,.informationList-contentlist i {
        margin: 0 10px 0 20px;
    }
    .informationList-query,.informationList-contentlist {
        position: relative;
        display: flex;
        align-items:center;
        width: 1500px;
        height: 50px;
        background:#f3f3f3;
        margin: 0 auto;
    }
    /*新建按钮*/
    .informationList-newbuild {
        margin: 20px auto;
        width: 1500px;
    }
    /*面包屑*/
    .informationList-crumb p {
        font-size: 10px;
        color: #999;
    }
    .informationList-crumb {
        display: flex;
        margin: 0 auto;
        width: 1500px;
    }
</style>

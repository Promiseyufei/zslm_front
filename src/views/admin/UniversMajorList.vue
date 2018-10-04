<template>
    <div class="majorlist">
        <div class="majorlist-top">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>信息发布</el-breadcrumb-item>
              <el-breadcrumb-item>院校专业</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="majorlist-button">
<<<<<<< HEAD
            <el-button @click.native ="jumpPage">新建</el-button>
=======
            <el-button @click="$router.push('/message/messageHome')">新建</el-button>
>>>>>>> f76be56e418b9075b78e712be5bd5b37ccd85aa3
        </div>
        <div class="majorlist-query">
            <i class="el-icon-search"></i>
            <p>筛选查询</p>
            <div></div>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="majorlist-queryrefresh" @click.native ="refreshMajorPage">刷新</el-button>
        </div> 
        <div class="majorlist-form">
            <el-form class="majorlist-input" label-width="80px">
                <el-form-item label="院校专业">
                    <el-input size="medium" v-model="name" placeholder="输入文件名称"></el-input>
                </el-form-item>
                <el-form-item label="展示状态">
                    <el-select size="medium" v-model="type1" placeholder="全部">
                      <el-option v-for="(item, index) in screenType" :label="item.label" :value="item.value" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="推荐状态">
                    <el-select size="medium" v-model="type2" placeholder="全部">
                        <el-option v-for="(item, index) in screenState" :label="item.label" :value="item.value" :key="index"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button size="mini" type="primary" icon="el-icon-search" class="majorlist-queryrefresh" @click.native="gettableInfo">查询</el-button>
        </div>
        <div class="majorlist-list">
            <i class="el-icon-tickets"></i>
            <p>内容列表</p>
            <div></div>
            <el-select size="mini" class="majorlist-selectone" v-model="value" placeholder="默认顺序">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native="gettableInfo">
                </el-option>
            </el-select>
        </div>
        <div class="majorlist-table">
            <el-table :data="majorlisttable" @current-change="handleCurrentChange" border style="width: 100%">
                <el-table-column type="selection" width="55"></el-table-column>1
                <el-table-column label="编号" prop="id" width="100"></el-table-column>
                <el-table-column label="展示权重" width="100">
                    <template slot-scope="scope">
                        <el-input v-model="majorlisttable[scope.$index].weight" @focus="focusMajorWeigthCount(majorlisttable[scope.$index].weight)" v-on:blur="changeMajorWeight(majorlisttable[scope.$index].id, majorlisttable[scope.$index].weight, scope.$index)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="展示状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].is_show" @change="setMajorState(majorlisttable[scope.$index].id, majorlisttable[scope.$index].is_show, 1, scope.$index)"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="推荐状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="majorlisttable[scope.$index].if_recommended" @change="setMajorState(majorlisttable[scope.$index].id, majorlisttable[scope.$index].if_recommended, 2, scope.$index)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="210">
                    <template slot-scope="scope">
                        <div class="majorlist-icon">
                            <i class="el-icon-search"></i>
                            <i class="el-icon-edit-outline"></i>
                            <i class="el-icon-delete"></i>
                            <i class="el-icon-refresh"></i>
                            <i class="el-icon-tickets"></i>
                            <i v-for="(val, index) in iconname" :key="index" :class="val.name" @click="clickEvent(val.event, majorlisttable[scope.$index])"></i>
                        </div>
                    </template>
                </el-table-column>
                <!-- <div> -->
                  <!-- <el-table-column v-for="(val,index) in tableTop" :key="index" :type="val.type" :prop="val.prop" :label="val.label" :width="val.width"> -->
                <div v-for="(val, index) in tableTop" :key="index">
                    <el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width" >
                </el-table-column>
                </div>
            </el-table>
        </div>
        <div class="footer"> 
            <Page :total="total" @pageChange="pageChange" ></Page>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                total:0,
                value:'',
                name:'',
                type1:2,
                type2:2,
                cacheMajorWeight:'',
                majorlisttable:[],
                searchContent:{
                    page:1,
                    limit:10,
                },
                // iconname:[
                //     {name:'el-icon-search'},
                //     {name:'el-icon-edit-outline'},
                //     {name:'el-icon-delete'},
                //     {name:'el-icon-refresh'},
                //     {name:'el-icon-tickets'},
                // ],
                // iconname:[
                //     {name:'el-icon-search'},
                //     {name:'el-icon-edit-outline', event:'jumpMajorMsgPage'},
                //     {name:'el-icon-delete', event:"delAppointMajor"},
                //     {name:'el-icon-refresh', event:"updateMajorTime"},
                //     {name:'el-icon-tickets'},
                // ],
                options: [
                    {value: 0,　label: '选项一'}, 
                    {value: 1,label: '选项二'}, 
                    {value: 2,label: '选项三'}
                ],
                screenType: [
                    {label: '选项一', value: 0},
                    {label: '选项二', value: 1},
                    {label: '选项三', value: 2}
                ],
                screenState: [
                    {label: '选项一', value: 0},
                    {label: '选项二', value: 1},
                    {label: '选项三', value: 2}
                ],
                tableTop:[
                  {prop:'z_name',label:'院校专业名称',width:580},
                  {prop:'student_project_count',label:'招生项目',width:100},
                  {prop:'update_time',label:'发布时间',width:160},
                ],                
            }
        },
        methods:{
            //跳转页面
            jumpPage:function() {
                this.$router.push('/SelectUnivers');
            },
            //操作方法回调
            clickEvent(eventName, row) {
                if(this[eventName+""]) {
                    this[eventName+""](row);
                }
                else {
                    this.message(true, "浏览器版本不兼容", "error");
                }
            },

            //删除指定的院校专业
            delAppointMajor(val) {
                let _this = this;
                this.confirm(() => {
                    _this.post('/admin/information/deleteMajor', {
                        majorId: val.id
                    }).then((response) => {
                        if(response.code == 0){
                            _this.majorlisttable.splice(this.majorlisttable.indexOf(val), 1);
                            this.message(true,response.msg, 'success');
                        }
                        else
                            this.message(true, response.msg, 'error');
                    })
                }, ()=> {
                    this.message(true, "已取消操作", "info");
                })
            },

            //更新指定院校专业的更新时间
            updateMajorTime(val) {
                let _this = this;
                this.confirm(() => {
                    this.post('/admin/information/updateMajorInformationTime', {
                        majorId: val.id
                    }).then((response) => {
                        if(response.code == 0) {
                            _this.majorlisttable[_this.majorlisttable.indexOf(val)].update_time = response.result;
                            this.message(true, response.msg, 'success');
                        }
                        else 
                            this.message(true, response.msg, 'error');
                    })
                }, () => {
                    this.message(false, "已取消修改", 'info');
                });
            },

            //跳转到指定的院校专业编辑页面
            jumpMajorMsgPage(val) {
                this.$router.push('/message/messageHome/' + val.id);
            },

            //刷新页面
            refreshMajorPage() {
                this.name = '';
                this.type1 = 2;
                this.type2 = 2;
                this.majorlisttable = [];
                this.searchContent.page = 1;
                this.searchContent.limit = 10;
                this.value = this.options[2].value;
                this.gettableInfo();
            },

            //设置专业状态(权重，展示状态，推荐状态)
            setMajorState(id, state, type, row) {
                let _this = this;
                this.confirm(() => {
                    _this.post('/admin/information/setMajorState', {
                        majorId: id,
                        type: type,
                        state: state ? 0 : 1
                    }).then((response) => {
                        (response.code == 0) ? this.message(true, response.msg, 'success'): this.message(true, response,msg, 'error');
                    });
                }, ()=> {
                    switch(type)
                    {
                        case 1:
                            _this.majorlisttable[row].is_show = !_this.majorlisttable[row].is_show;
                            break;
                        case 2: 
                            _this.majorlisttable[row].if_recommended = !_this.majorlisttable[row].if_recommended;
                            break;
                    }
                    this.message(true, '已取消修改', 'info');    
                })
            },

            //缓存权重值
            focusMajorWeigthCount(weight) {
                this.cacheMajorWeight = weight;
            },

            //改变权重值时进行判断
            changeMajorWeight(id, weight, row) {
                var re = /^[0-9]+.?[0-9]*$/;
                if (!re.test(weight)) {
                    this.message(true,'请输入数值','warning');
                    this.majorlisttable[row].weight = this.cacheMajorWeight;
                } else if (weight<0||weight>1000) {
                    this.message(true,'权值范围为0~100','warning');
                    this.majorlisttable[row].weight = this.cacheMajorWeight;
                } else {
                    this.setMajorState(id, weight, 0);
                }
            },

            //分页发生变化时调用
            pageChange(msg) {
                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
                this.gettableInfo();
            },

            handleCurrentChange(val) {
                this.currentRow = val;
            },

            //请求列表数据
            gettableInfo:function(){
                var that = this;
                this.post('/admin/information/getMajorPageMessage',{
                    majorNameKeyword:that.name,
                    screenType:that.type1,
                    screenState:that.type2,
                    sortType:that.value == '' ? that.options[2].value : that.value,
                    pageCount:that.searchContent.limit,
                    pageNumber:that.searchContent.page - 1
                })
                .then(function (response) {
                    if (response.code == 0) {
                        that.majorlisttable = response.result.get_page_msg;
                        that.total = response.result.count;
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
    .footer .el-pagination[data-v-67d9ff78] {
        margin: 10px 10px 10px 0;
    }
</style>

<!-- 局部样式 scoped -->
<style scoped>
    .page {
        padding: 5px 10px;
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
        background-color: #fdfdfe;
        margin: 20px auto;
        /*padding: 10px;*/
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
        margin: 0 3px;
    }
    .majorlist-icon {
        font-size: 20px;
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
        margin: 20px auto;
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
    .majorlist-query i,.majorlist-list i {
        padding: 0 0 0 10px;
    }
    .majorlist-query p,.majorlist-list p {
        font-size: 16px;
        color: #666;
        font-weight: bold;
        padding: 0 10px;
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

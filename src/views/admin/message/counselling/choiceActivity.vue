<template >
    <div class="operateBox">
        <!-- 中间内容 -->
        <div>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>信息发布</el-breadcrumb-item>
            <el-breadcrumb-item>辅导机构</el-breadcrumb-item>
            <el-breadcrumb-item>相关活动设置</el-breadcrumb-item>
            <el-breadcrumb-item class="selectedNavPublic">选择活动</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 返回按钮 -->
        <div class="addadviseBtn">
            <el-row>
                <el-button @click.native="$router.push('/admin/message/aboutActivity/' + coachid)">返回</el-button>
            </el-row>
        </div>
        
        <div class="operateUpfiles operateHeader">
            <p><i class="fa fa-filter"></i> 筛选查询</p>
        </div> 

        <!-- 筛选框 -->
        <div class="addadviseSelect">
            <div class="addadviseInput">
                <!-- <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="推荐状态">
                        <el-select v-model="form.region" clearable placeholder="全部">
                        <el-option :label="list.name" :value="list.id" v-for="(list,i) in banner" :key = "i"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动名称">
                        <el-input v-model="form.message" placeholder="输入关键字"></el-input>
                    </el-form-item>
                </el-form> -->
                    <el-form class="inputone" label-width="120px" style="margin-bottom:1%"> 
                        <el-form-item label="活动名称">
                            <el-input v-model="ruleForm.name" placeholder="输入关键字"></el-input>
                        </el-form-item>
                        <el-form-item label="展示状态">
                            <el-select size="medium" v-model="ruleForm.showstate" placeholder="全部">
                                <el-option :label="list.name" :value="list.id" v-for="(list,ishow) in showArr" :key="ishow"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="推荐状态">
                            <el-select v-model="ruleForm.recommendedState" clearable placeholder="全部">
                                <el-option :label="list.name" :value="list.id" v-for="(list, irecom) in recommendedArr" :key="irecom"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <el-form class="inputtwo" label-width="120px">
                        <el-form-item label="报名状态">
                            <el-select v-model="ruleForm.signState" placeholder="请选择状态" >
                                <el-option :label="list.name" :value="list.id" v-for="(list, isign) in signArr" :key="isign"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="活动类型">
                            <el-select v-model="ruleForm.actType" placeholder="请选择活动类型" >
                                <el-option :label="item.name" :value="item.id" v-for="(item, index) in actType"
                                        :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="活动所在市">
                            <el-select v-model="ruleForm.city" placeholder="请选择活动区域">
                                <el-option :label="item.name" :value="item.id" v-for="(item, indexs) in actCity"
                                        :key="indexs"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
            </div>
            <el-button type="info" plain @click="getAllActivity" size="small"><i class="fa fa-search fa-fw"></i>查询</el-button>
        </div>

        <!-- 筛选头部 -->
        <div class="operateUpfiles operateHeader list-header">
            <p><i class="fa fa-bars"></i> 活动列表</p>
            <div style="height: 2%"></div>
            <el-select size="mini" class="majorlist-selectone" v-model="ruleForm.sortType" placeholder="默认序列">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click.native="getAllActivity">
                </el-option>
            </el-select>
        </div>
            <!-- 表格 -->
            <div class="operateTable">
                <template>
                <el-table :data="tableData3"  border style="width: 100%" ref="order"  @selection-change="handleSelectionChange" :header-cell-style="getRowClass">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    v-for="(list,index) in listTable" 
                    :prop="list.prop"
                    :label="list.lable"
                    :width="list.width" :key = "index">
                    </el-table-column>
                    <el-table-column
                    label="操作"
                    width="140">
                    <template slot-scope="scope">
                        <i class="el-icon-search" @click="handleClick(scope.row)"></i>
                        <i class="el-icon-edit-outline" @click="dialogTableVisible = true"></i>

							<el-dialog title="编辑活动信息" :visible.sync="dialogTableVisible" class="dialog" width="30%">
                                <div>活动名称: <span>{{ tableData3[scope.$index].active_name }}</span></div>
                                <div>
                                    <span>展示状态　　　</span>
                                    <el-switch v-model="tableData3[scope.$index].show_state" :active-value="value1" :inactive-value="value2" @change="test(tableData3[scope.$index])"></el-switch>
                                </div>
                                <div>
                                    <span>推荐状态　　　</span>
                                    <el-switch v-model="tableData3[scope.$index].recommended_state" active-value="推荐" inactive-value="不推荐" @change="test(tableData3[scope.$index].recommended_state)"></el-switch>
                                </div>
                                <span style="cursor:pointer" @click="$router.push('/admin/message/activity/' + tableData3[scope.$index].id)">更多修改</span>
							</el-dialog>


                        <i class="fa fa-check" @click="addadviseSelect(scope.row)" aria-hidden="true"></i>
                        <!-- <el-button @click="$router.push('/admin/message/activity/' + scope.row.id)" type="text" size="small">查看</el-button> -->
                        <!-- <el-button type="text" size="small" @click="addadviseSelect(scope.row)">选中</el-button> -->
                    </template>
                    </el-table-column>
                </el-table>
                </template>
            </div>

            <div class="addadviseblock">
                <el-pagination
                    background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="20"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
                </el-pagination>
            </div>

            <!-- 已选资讯 -->
            <div class="operateUpfiles operateHeader">
                <p><i class="fa fa-window-restore"></i> 已选活动</p>
            </div>

            <!-- 选中状态 -->
            <div class="operateTable">
                <template>
                <el-table :data="tableData"  border style="width: 100%" :header-cell-style="getRowClass">
                    <el-table-column
                    v-for="(list,index) in listTable"
                    :prop="list.prop"
                    :label="list.lable"
                    :width="list.width" :key = "index">
                    </el-table-column>
                    <el-table-column
                    label="操作"
                    width="180">
                    <template slot-scope="scope">
                        
                        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                        <i class="el-icon-search" @click="handleClick(scope.row)"></i>
                        <i class="fa fa-times" @click="delectSelect(scope.row)" aria-hidden="true"></i>
                        <!-- <el-button type="text" size="small" @click="delectSelect(scope.row)">取消选中</el-button> -->
                    </template>
                    </el-table-column>
                </el-table>
                </template>
            </div>

            <!-- 加入推荐按钮 -->
            <div style="text-align:center;" class="addadviseFinish">
                <el-button type="primary" @click="setInfoRecommend">加入推荐</el-button>
            </div>
        
        </div>
        
    </div>
</template>

<script>
export default {
    
    data() {
    return {
        value1:'展示',
        value2:'不展示',
        value:'',
        dialogTableVisible:false,
        coachid:0,
        ruleForm: {
            name: "",
            showstate:"",
            recommendedState:'',
            signState:'',
            actType:'',
            city:'',
            sortType:''
        },
        id: this.$route.params.id,
        form: {
            region: '',
            message: ''
        },
        options: [
            {value: 0,　label: '按权重升序'}, 
            {value: 1,label: '按权重降序'}, 
            {value: 2,label: '按信息更新时间'}
        ],
        banner: [
            {'id':0,'name':'推荐'},
            {'id':1,'name':'不推荐'},
            {'id': 2, 'name':'全部'}
        ],
        showArr: [
            {id: 0, name: '展示'},
            {id: 1, name: '隐藏'},
            {id: 2, name: '全部'},
        ],
        recommendedArr: [
            {id: 0, name: '推荐'},
            {id: 1, name: '不推荐'},
            {id: 2, name: '全部'},
        ],
        signArr:[
            {id: 0, name: '可报名'},
            {id: 0, name: '可提醒'},
            {id: 0, name: '全部'},
        ],
        total: 0,
        count: 20,
        page: 1,
        sort: 0,
        actType:[],
        actCity:[],
        count2: [
                {
                    number: 10
                },
                {
                    number: 100
                },
                {
                    number: 200
                }
        ],
        listTable: [
            {
                prop: "id",
                lable: "活动编号",
                width: "163px"
            },
            {
                prop: "active_name",
                lable: "活动名称",
                width: "163px"
            },
            {
                prop: 'active_type',
                lable: '活动类型',
                width: "163px"
            },
            {
                prop: "province",
                lable: "活动所在市",
                width: "163px"
            },
            {
                prop: "recommended_state",
                lable: "推荐状态",
                width: "163px"
            },
            {
                prop: "show_state",
                lable: "展示状态",
                width: "163px"
            },
            {
                prop: "sign_up_state",
                lable: "报名状态",
                width: "163px"
            },
            {
                prop: "z_name",
                lable: "主办院校",
                width: "163px"
            }
        ],
        // 表格默认数据
        tableData3: [],
        tableData: [],
        currentPage3: this.page,
        infoIdArr:[]
        }
    },
    methods:{
        test(a) {
            console.log(a)
        },
        gettableInfo() {

        },
        //从选中表格中删除指定的资讯
        delectSelect: function(row) {
            this.$refs.order.toggleRowSelection(row,false);
        },

        //显示将要添加咨询表格
        addadviseSelect: function(row) {
        this.$refs.order.toggleRowSelection(row,true);
        },

        handleClick(val){
            let routeUrl = this.$router.resolve({
                path:'/front/firstMenuRouter/lookActivity/singleActivity/'+val.id,
                // query:{id: activityId}
            });
            window.open(routeUrl.href, '_blank');
        // this.$router.push('/front/firstMenuRouter/lookActivity/singleActivity/' + val.id);
        },
        //获得需要添加的资讯的id数组
        handleSelectionChange(val) {
            this.tableData = val;
            this.infoIdArr = [];
            var self = this;
            if(val.length > 0) {
            val.forEach((item) => {
                self.infoIdArr.push(item.id);
            });
            }
            self = undefined;
        },
        
        
        setInfoRecommend: function() {
            if(this.infoIdArr.length == 0) {
                this.message(true, '没有选择要设置的活动', 'warning');
                return false;
            }
            this.confirm(() => {
                this.post('/admin/information/setCoachActivity', {
                    coachId: parseInt(this.coachid),
                    acIdArr: this.infoIdArr
                }).then((response) => {
                    if(response.code == 0) {
                        console.log(response.result)
                        this.infoIdArr = [];
                        this.tableData = [];
                        this.message(true, '添加成功', 'success');
                        this.$router.push('/admin/message/aboutActivity/'+ this.coachid);
                    }
                    else 
                        this.message(true, response.msg, 'info');
                })
            }, () => {
                this.message(true, '已取消修改', 'info');
            }, '确认将所选活动设为推荐活动?');
        },

        // 每页显示条数改变时触发事件
        handleSizeChange: function(val) {
            this.count = val;
            this.getAllActivity()
        },

        // 点击小分页触发事件
        handleCurrentChange: function(val) {
            this.page = val;
            this.getAllActivity()
        },

        getAllActivity: function() {
        var self = this;
        this.fetch('/admin/information/getCoachRecommendAc', {
            name: this.ruleForm.name,
            showstate: this.ruleForm.showstate == '' ? 2 : this.ruleForm.showstate,
            recommendedState:this.ruleForm.recommendedState == '' ? 2 : this.ruleForm.recommendedState,
            signState:this.ruleForm.signState == '' ? 2 : this.ruleForm.signState,
            actType:this.ruleForm.actType == '' ? 0 : this.ruleForm.actType,
            city:this.ruleForm.city == '' ? 0 : this.ruleForm.city,
            pageNumber:this.page,
            pagecount:this.count,
            sortType:this.ruleForm.sortType == '' ? 2 : this.ruleForm.sortType
        })
            .then(function (response) {
                if (response.code == 0) {
                    // console.log(response.result)
                    self.tableData3 = response.result[0];
                    self.total = response.result[1];
                }else {
                    self.message(true, response.msg, 'error');
                }
                load.close();
            })
            .catch(function (error) {
                load.close();
            });
        },

        // 获取咨询列表添加分页数据
    },
    mounted(){
        if(this.$route.params.coachid != undefined) this.coachid = this.$route.params.coachid;
        this.fetch('/admin/information/getAcTypeAndCity').then((res) => {
            if(res.code == 0) {
                res.result.acType.unshift({id:0, name: '全部'});
                // console.log(res.result.acType)
                res.result.city.unshift({id:0, name: '全部'});
                this.actType = res.result.acType;
                this.actCity = res.result.city
            }
        }) 
        this.getAllActivity();
    }
}
</script>
<style>
    .operateTable .has-gutter th {
        background-color: #ebeef5 !important;
    }
    .operateTable .cell {
    text-align: center;
    font-size: 12px;
    }  
</style>

<style scoped>
    .list-header {
         height: 50px;
    }
    .majorlist-selectone {
        /* position: absolute; */
        right: 10px;
        width: 100px;
    }
    /* .rightTop {
        position: relative;
    } */
    /* .inputone {
        margin: 0px 0 0;
    }
    .inputone,.inputtwo {
        display: flex;
        margin: 0 0 0 0px;
    } */


    .operateBox {
    width: 1500px;
    margin: 0 auto;
    }

    /*返回按钮*/
    .addadviseBtn {
        margin: 20px 0;
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
    .operateHeader>p {
    margin-left: 20px;
    font-weight: bold;
    }

    /*筛选框*/
    .addadviseSelect {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 10px 20px 0;
    }
    .addadviseInput .el-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .addadviseInput .el-form-item {
        margin-bottom: 0;
    }

    /*分页*/
    .addadviseblock {
        background-color: #fff;
        border-color: 1px solid #e4e4e4;
        padding: 10px 20px;
        margin: 20px 0;
        text-align: right;
    }

    /*加入推荐按钮*/
    .addadviseFinish {
        background-color: #e4e4e4;
        padding: 20px 0;
    }
</style>
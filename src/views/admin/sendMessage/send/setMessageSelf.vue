<template>
    <div>
    	<div class="operateBox">
    		<div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>消息管理</el-breadcrumb-item>
                    <el-breadcrumb-item>发消息</el-breadcrumb-item>
                    <el-breadcrumb-item>设置消息对象</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active=".1" align-center>
                        <el-step title="设置消息对象"></el-step>
                        <el-step title="编辑消息内容"></el-step>
                    </el-steps>
                </div>

                <!-- 用户列表 -->
                <div class="operateUpfiles operateHeader">
                    <p><i class="fa fa-list"></i> 用户列表</p>
                </div>

                <!-- 表格 -->
                <div class="selfTable">
                    <template>
                        <el-table 
                            :data="tableData"  
                            border 
                            style="width: 100%" 
                            :header-cell-style="getRowClass"
                            @selection-change="handleSelectionChange">
                            <el-table-column
                                type="selection"
                                width="55">
                            </el-table-column>
                            <el-table-column
                                :prop="list.prop"
                                :label="list.lable"
                                :width="list.width"
                                v-for="(list,index) in listTable"
                                :key = "index">
                            </el-table-column>
                        </el-table>
                    </template>
                </div>

                <div class="bottomPage">
                    <el-button icon="el-icon-delete"> 删除</el-button>
                    <div>
                        <singlePage :currentPage = "currentPage" @use="getUser" ref="useChild"></singlePage>
                    </div>
                </div>
                <div class="selectFin">
                    <p>当前已选择：<span>{{multipleSelection.length}}</span>个对象</p>
                </div>

                <!-- 完成按钮 -->
                <div class="operateFinalUp">
                    <el-button type="primary" @click="finial">完成！</el-button>
                </div>

            </div>

		    
    	</div>
    	
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
      return {
        listTable: [
            {
                prop: 'id',
                lable: '账户ID',
                width: "80px"
            },
            {
                prop: "photo",
                lable: "手机号",
                width: "100px"
            },
            {
                prop: "account",
                lable: "账户创建时间",
                width: "140px"
            },
            {
                prop: "account",
                lable: "信息更新时间",
                width: "140px"
            },
            {
                prop: "account",
                lable: "微信",
                width: "60px"
            },
            {
                prop: "account",
                lable: "新浪微博",
                width: "60px"
            },
            {
                prop: "account",
                lable: "头像",
                width: "60px"
            },
            {
                prop: "user_name",
                lable: "昵称",
                width: "140px"
            },
            {
                prop: "real_name",
                lable: "真实姓名",
                width: "80px"
            },
            {
                prop: "sex",
                lable: "性别",
                width: "60px"
            },
            {
                prop: "address",
                lable: "常住地",
                width: "60px"
            },
            {
                prop: "schooling_id",
                lable: "最高学历",
                width: "60px"
            },
            {
                prop: "graduate_school",
                lable: "毕业院校",
                width: "160px"
            },
            {
                prop: "industry",
                lable: "所属行业",
                width: "140px"
            },
            {
                prop: "worked_year",
                lable: "工作年限",
                width: "104px"
            }
        ],
        // 表格默认数据
        tableData: [],
        //默认展示页数
        currentPage: 4,
        // 分页总数,默认值
        totalData: 1234,
        multipleSelection:[]
      }
    },
    methods: {
        //添加键值对
        set: function (key, value) {
            if (this.multipleSelection[key] == null) {
                //如键不存在则身【键】数组添加键名
                this.multipleSelection.push(value);
            }
            this.multipleSelection[key] = value;
            //给键赋值
        },

        //点击完成按钮时，触发事件
        finial: function() {
            this.multipleSelection.push("3");
            console.log(this.multipleSelection);
            let setStr = encodeURIComponent(JSON.stringify(this.multipleSelection));
            this.$router.push('/send/sendHome?setStr=' + setStr);
        },
        //当表格选择项发生变化时会触发该事件
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection);
        },
        //获取全部用户
        getUser: function(res) {
            let self = this;
            if(res==null) {
                res = 4;
            }
            // console.log(res);
            axios.post('/admin/news/getAllAccounts', {
                pageCount: 100,
                pageNumber: res
            }).then((response) => {
                var res = response.data;
                if(res.code == 0) {
                    self.totalData = res.data.count;
                    self.tableData = res.data.data;
                    self.$refs.useChild.childMethod(res.data.count);
                    // self.message(true,"修改成功","success");
                }
            })
        },
    },
    mounted(){
        this.getUser();
    
    },
};
</script>
<style>
    .selfTable .cell {
        font-weight: 700;
        font-style: normal;
        font-size: 12px;
        color: #666;
        text-align: center;
        padding: 0;
    }
</style>
<style scoped>
    .operateBox {
        width: 1500px;
        margin: 0 auto;
    }

    /*
    * 带删除的分页
    */
    .bottomPage {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #d7d7d7;
        border-top: none;
        background: #fff;
        padding-left: 20px;
    }

    /*
    * 当前已选择对象个数
    */
    .selectFin p{
        /* margin-left: 20px; */
        font-size: 14px;
        color: #666;
        margin-top: 20px;
    }
    .selectFin span {
        color: red;
        margin: 0 3px;
    }

    /*
    * 步骤条样式
    */
    .fileSteps {
        /*margin: 20px 0;*/
        width: 400px;
        margin: 0 auto;
    }
    .fileSteps .el-steps--horizontal {
        margin: 20px 0;
    }

    /*
    * 大标题样式
    */
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


    /*
    * 底部跳转按钮样式
    */
    .operateFinalUp {
      text-align: center;
      margin: 95px 0 70px;
    }

</style>
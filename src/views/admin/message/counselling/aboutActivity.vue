<template>
    <div>
        <div class="operateBox">
            <!-- 中间内容  -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>辅导机构</el-breadcrumb-item>
                    <el-breadcrumb-item  class="selectedNavPublic">优惠卷设置</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active="2.3" align-center>
                        <el-step title="辅导机构信息"></el-step>
                        <el-step title="优惠卷设置"></el-step>
                        <el-step title="相关活动设置"></el-step>
                    </el-steps>
                </div>

                <!-- 设置推荐院校专业 -->
                <div class="operateUpfiles operateDown">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-wrench fa-fw FA-3X"></i>&nbsp;设置相关活动</div>
                    </div>
                    <div class="operateUpfilesRight2">
                        <div class="operateUpfilesRight2Nav">
                            <el-button type="info" plain @click="couponAdd"><i class="fa fa-plus fa-fw fa-lg"></i>添加</el-button>
                            <el-button type="info" plain @click="test"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
                        </div>
                        <!-- 表格 -->
                        <messageTable :tableData3 = "tableData3" :listTable="listTable" @del="test"></messageTable>
                        <!-- 完成按钮 -->
                        <div class="operateFinalUp">
                            <el-button type="primary" @click="couponFinish">完成</el-button>
                        </div>
                    </div> 
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
                lable: '编号',
                width: "210px"
            },
            {
                prop: "weight",
                lable: "展示顺序",
                width: "80px"
            },
            {
                prop: "z_type",
                lable: "活动类型",
                width: "210px"
            },
            {
                prop: "name",
                lable: "活动名称",
                width: "319px"
            },
            {
                prop: "create_time",
                lable: "发布时间",
                width: "210px"
            }
            ],
            // 表格默认数据
            tableData3: [],
        }
    },
    methods: {
        // 跳转页面，跳到添加活动页面
        couponAdd: function() {
            this.$router.push('/message/choiceactivity/');
        },
        //获得相关活动页面
        getActivity: function() {
            let self = this;

            axios.post('/admin/message/getActivity', {
                
            }).then((response) => {
                var res = response.data;
                if(res.code == 0) {
                    this.tableData3 = res.data;
                    // this.message(true, response.msg, 'success');
                }
                // else this.message(true, response.msg, 'error');
            })
        },
        //点击完成跳转页面
        couponFinish: function() {
            this.$router.push('/message/coachList');
        }

    },
    mounted(){
        this.getActivity();
    },
};
</script>
<style>
</style>
<style scoped>
.operateBox {
  width: 1500px;
  margin: 0 auto;
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
* 大块样式
*/
.operateUpfiles {
  border: 1px solid #e4e4e4;
  background-color: #fff;
  display: flex;
  flex-direction: row;
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
  background: url(../../../../assets/img/point.png) no-repeat;
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
* 右边样式
*/
.operateUpfilesRight2 {
  padding: 50px 90px 50px 80px;
  width: 1170px;
}
.operateUpfilesRight2Nav {
  display: flex;
  justify-content: space-between;
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
</style>
    
    
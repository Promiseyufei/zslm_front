<template>
    <div>
        <div class="operateBox">
            <!-- 中间内容  -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>辅导机构</el-breadcrumb-item>
                    <el-breadcrumb-item  class="selectedNavPublic">相关活动设置</el-breadcrumb-item>
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
                            <el-button type="info" plain @click="cancelAllActivity"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
                        </div>
                        <!-- 表格 -->
                        <messageTable :isSelect="1" @setInfoRelation="changeWeight" @handleClick="handleClick" :tableData3 = "tableData3" :listTable="listTable" @del="cancelActivity"></messageTable>
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
            coachId:0,
            listTable: [
            {
                prop: 'id',
                lable: '编号',
                width: "210px"
            },
            {
                prop: "show_weight",
                lable: "展示顺序",
                width: "80px"
            },
            {
                prop: "active_type",
                lable: "活动类型",
                width: "210px"
            },
            {
                prop: "active_name",
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
        //取消相关活动推荐
        cancelActivity(activityId, activity) {
            // this.confirm(() => {
                this.post('/admin/information/cancelRelevanActivity', {
                    coachId: this.coachId,
                    activityId:activityId
                }).then((response) => {
                    if(response.code == 0) {
                        this.getActivity();
                        this.message(true, '取消该相关活动关联成功', 'success');
                    }
                })
            // }, () => {
            //     this.message(true, '取消修改', 'info');
            // }, '确认要修改该关联活动权重吗？');

        },
        cancelAllActivity() {
            this.confirm(() => {
                this.post('/admin/information/cancelAllReActivity', {
                    coachId: this.coachId
                }).then((response) => {
                    if(response.code == 0) {
                        this.getActivity();
                        this.message(true, '取消所有推荐活动关联成功', 'success');
                    }
                    else this.message(true, '修改操作失败', 'info');
                })
            }, () => {
                this.message(true, '操作取消', 'info');
            }, '确认清空所有推荐活动关联');
        },
        changeWeight(activityId, weight) {
            this.confirm(() => {
                this.post('/admin/information/updateActivityWeight', {
                    id: activityId,
                    showWeight:weight
                }).then((response) => {
                    if(response.code == 0) {
                        this.message(true, '修改成功', 'success')
                    }
                    else this.message(true, response.msg, 'info');
                })
            }, () => {
                this.message(true, '取消修改', 'info');
            }, '确认要修改该关联活动权重吗？');
        },
        handleClick(activity) {
				let routeUrl = this.$router.resolve({
					path:'/front/firstMenuRouter/lookActivity/singleActivity/'+activity.id,
				});
				window.open(routeUrl.href, '_blank');
        },
        // 跳转页面，跳到添加活动页面
        couponAdd: function() {
            this.$router.push('/admin/message/choiceactivity/' + this.coachId);
        },
        //获得相关活动页面
        getActivity: function() {
            let self = this;

            this.fetch('/admin/information/getAppoinCoachRelevantActivity', {
                coachId: this.coachId
            }).then((response) => {
                if(response.code == 0) {
                    this.tableData3 = response.result;
                    // this.message(true, response.msg, 'success');
                }
                // else this.message(true, response.msg, 'error');
            })
        },
        //点击完成跳转页面
        couponFinish: function() {
            this.$router.push('/admin/message/coachList');
        }

    },
    mounted(){
        if(this.$route.params.id != undefined) {
            this.coachId = this.$route.params.id;
            if(this.coachId > 0) this.getActivity();
        }
    },
};
</script>
<style>
    /*
    * 步骤条
    */
    .fileSteps .is-text {
        width: 50px;
        height: 50px;
    }
    .fileSteps .is-finish .is-text {
        background: #1ABC9C;
        color: #fff;
    }
    .fileSteps .el-step__icon-inner {
        font-size: 20px;
    }
    .fileSteps .el-step__line {
        top: 23px !important;
    }
</style>
<style scoped>
  .el-button--primary{
    background-color: #009fa0 !important;
    border-color: #009fa0 !important;
    width: auto !important;
    border-radius: 5px !important;
  }

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


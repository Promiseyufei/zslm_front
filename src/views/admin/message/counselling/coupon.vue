<template>
    <div>
        <div class="operateBox">
            <!-- 中间内容  -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>辅导机构</el-breadcrumb-item>
                    <el-breadcrumb-item class="selectedNavPublic">优惠卷设置</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active="1.2" align-center>
                        <el-step title="辅导机构信息"></el-step>
                        <el-step title="优惠卷设置"></el-step>
                        <el-step title="相关活动设置"></el-step>
                    </el-steps>
                </div>

                <!-- 优惠卷信息 -->
                <div class="operateUpfiles operateUp">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;优惠卷信息</div>
                    </div>
                    <div class="operateUpfilesRight">
                        <el-form ref="couponForm" :model="couponForm" label-width="100px">
                            <el-form-item>
                                <el-button type="primary" @click="startChange">开始编辑</el-button>
                            </el-form-item>

                            

                            <el-form-item label="优惠卷名称">
                                <el-input v-model="couponForm.name" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="优惠卷类型">
                                <el-radio-group v-model="couponForm.region" :disabled = "disabled">
                                    <el-radio label="折扣型">折扣型</el-radio>
                                    <el-radio label="满减型">满减型</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="优惠卷内容">
                                <el-input v-model="couponForm.message" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="使用说明">
                                <div id="editor">
                                    <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
                                </div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="" :disabled = "disabled">提交</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                <!-- 所有优惠卷 -->
                <div class="operateUpfiles operateDown">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;所有优惠卷</div>
                    </div>

                    <div class="operateUpfilesRight2">
                        <div class="messageBtn">
                            <el-form ref="form" label-width="100px">
                                <el-form-item>
                                    <el-button icon="el-icon-delete" @click="couponDelete">清空</el-button>
                                </el-form-item>

                                <el-table
                                ref="singleTable"
                                :data="tableData"
                                highlight-current-row
                                border 
                                style="width: 100%"
                                :header-cell-style="getRowClass"
                                class="couponTable">
                                    <el-table-column
                                        property="id"
                                        label="编号"
                                        width="150">
                                    </el-table-column>
                                    <el-table-column
                                        prop="weight"
                                        label="展示顺序"
                                        width="100">
                                        <template slot-scope="scope" >
                                            <el-input v-model="tableData[scope.$index].weight" @focus="focusCount(tableData[scope.$index].weight)" v-on:blur="changeCount(tableData[scope.$index].weight, scope.$index)"></el-input>
                                        </template>
                                        </el-table-column>
                                    <el-table-column
                                        property="state"
                                        label="展示状态"
                                        width="120">
                                        <template slot-scope="scope" >
                                            <el-switch
                                                v-model="tableData[scope.$index].state" @click.native="changeState(tableData[scope.$index].state, scope.$index)">
                                            </el-switch>
                                        </template>
                                    </el-table-column>
                                        <el-table-column
                                        property="pj_name"
                                        label="辅导机构名称">
                                    </el-table-column>
                                        <el-table-column
                                        property="project_type"
                                        label="优惠卷名称"
                                        width="100">
                                    </el-table-column>
                                    <el-table-column
                                        property="name"
                                        label="操作"
                                        width="200">
                                        <template slot-scope="scope">
                                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                        </template>
                                    </el-table-column>									     
                                </el-table>
                            </el-form>
                        </div>

                        <!-- 完成按钮 -->
                        <div class="operateFinalUp">
                            <el-button type="primary" @click="toBack" plain>返回</el-button>
                            <el-button type="primary" @click="toAdvise">下一步，相关活动设置</el-button>
                            <el-button type="primary" @click="toBack">完成</el-button>
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
            disabled: true,
            form: {
                Title: "123",
                Keywords: "",
                Description: ""
            },
            couponForm: {
                name: "河南科技学院",
                region: "折扣型",
                message: "优惠卷要满1000才可以使用",
            },
            tableData: [],
            TableValue: 0,
            // 富文本编辑器
            editorContent:'',
            editor: new WangEditor('#editor'),
        }
    },
    methods: {
        startChange: function() {
            this.disabled = false;
            this.editor.$textElem.attr('contenteditable', true);
        },
        //改变展示状的时候触发事件
        changeState: function(state,row) {
            let self = this;
            axios.post('/admin/information/setProjectState', {
                projectId: row,
                type: 1,
                state: state
            }).then((response) => {
                var res = response.data;
                if(res.code == 0) {
                    self.message(true,"修改成功","success");
                }
            })
        },
        //得到所有的项目
        getCoupon: function() {
            let self = this;
            axios.post('/getProject', {
            })
            .then(function (response) {
                var res = response.data;
                if(res.code == 0) {
                    self.tableData = res.data;
                    console.log(self.tableData);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        // 表单获得焦点触发事件
        focusCount: function(val) {
            this.TableValue = val;
            console.log(this.TableValue);
        },
        //查看详细内容
        handleClick: function (row) { 
            
        },
        // 鼠标失去焦点时触发事件，val=>当前input里面的值，index=>当前行的下标
        changeCount: function(val,index) {
            var re = /^[0-9]+.?[0-9]*$/;
            if (!re.test(val)) {
                this.message(true,'请输入数值','warning');
                this.tableData[index].weight = this.TableValue;
            } else if (val<0||val>1000) {
                this.message(true,'权值范围为0~1000','warning');
                this.tableData[index].weight = this.TableValue;
            } else {
                this.$emit('setInfoRelation',this.tableData[index].id, this.tableData[index].weight);
            }
        },
        // 清空所有优惠卷
        couponDelete: function() {
            var table = this.tableData;
            var arrayTableId = [];
            for (var i = 0; i < table.length; i++) {
                arrayTableId.push(table[i].id);
            };
            console.log(arrayTableId);
            if(arrayTableId.length < 1) {
                this.message(true, '没有要清空的数据', 'error');
                return;
            }
            axios.post('/deletecouponDelete', {
                
            }).then((response) => {
                if(response.code == 0) {
                    this.tableData = [];
                }
            })
        },
        //返回上一页
        toBack: function() {
            this.$router.push('/message/coachList');
        },
        // 跳转到优惠卷设置页面
        toAdvise: function() {
            this.$router.push('/message/aboutActivity/' + this.id);
        },
        collegeFinish: function() {
            this.$router.push('/message/universMajorList');
        },
    },
    mounted(){
        this.getCoupon();

        // 创建富文本编辑器
        this.editor.customConfig.onchange = (html) => {
            this.editorContent = html;
        }
        this.editor.create();
        this.editor.$textElem.attr('contenteditable', false);
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


.operateUpfilesRight2 {
    padding: 40px 90px 40px 80px;
    width: 1170px;
}
.operateUpfilesRight2 {
    text-align: right;
}
.operateFinalUp {
    text-align: center;
    margin: 95px 0 70px;
}
.couponTable {
    text-align: center;
}


#editor {
    margin: 20px 0;
    text-align: left;
}


</style>
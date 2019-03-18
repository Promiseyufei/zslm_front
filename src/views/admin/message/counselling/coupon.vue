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
                                <el-radio-group v-model="couponForm.type" :disabled = "disabled">
                                    <el-radio :label="0" :value="0">满减型</el-radio>
                                    <el-radio :label="1" :value="1">折扣型</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="优惠卷内容">
                                <el-input v-model="couponForm.context" :disabled = "disabled"></el-input>
                            </el-form-item>

                            <el-form-item label="使用说明">
                                <div id="editor">
                                    <!-- <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p> -->
                                    <div v-html="couponForm.zslm_couponcol"></div>
                                </div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="postContent" :disabled = "disabled">提交</el-button>
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
                                <!-- <el-form-item>
                                    <el-button icon="el-icon-delete" @click="couponDelete">全部禁用</el-button>
                                </el-form-item> -->

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
                                    <!-- <el-table-column
                                        prop="weight"
                                        label="展示顺序"
                                        width="100">
                                        <template slot-scope="scope" >
                                            <el-input @focus="getFocus(tableData[scope.$index].weight)"
                                                      v-on:blur="loseFocus(tableData[scope.$index].weight,scope.$index)"
                                                      v-model="tableData[scope.$index].weight"></el-input>
                                        </template>
                                    </el-table-column> -->
                                    <el-table-column
                                        property="is_enable"
                                        label="启用状态"
                                        width="120">
                                        <template slot-scope="scope" >
                                            <el-switch
                                                active-color="#409eff" inactive-color="#999"
                                                v-model="tableData[scope.$index].state"
                                                @click.native="changeState(tableData[scope.$index].state, tableData[scope.$index].id)">
                                            </el-switch>
                                        </template>
                                    </el-table-column>
                                        <el-table-column
                                        property="coach_name"
                                        label="辅导机构名称">
                                    </el-table-column>
                                        <el-table-column
                                        property="name"
                                        label="优惠卷名称"
                                        width="300">
                                    </el-table-column>
                                    <el-table-column
                                        property="test"
                                        label="操作"
                                        width="200">
                                        <template slot-scope="scope">
                                            <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
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
            id:0,
            couponId: 0,
            disabled: true,
            form: {
                Title: "123",
                Keywords: "",
                Description: ""
            },
            couponForm: {
                // name: "",
                // region: "",
                // message: "",
            },
            tableData: [],
            TableValue: 0,
            // 富文本编辑器
            editorContent:'',
            showweight:0,
            editor: new WangEditor('#editor'),
        }
    },
    methods: {


        //获得该项目所有的优惠劵
        info:function(){
            let that = this;
            this.fetch('/admin/information/getcoubycoach',{
                id:that.id
            }).then(res=>{
                if(res.code == 0){
                    that.tableData = res.result;
                }
            })
        },
        startChange: function() {
            this.disabled = false;
            this.editor.$textElem.attr('contenteditable', true);
        },
        //改变展示状的时候触发事件
        changeState: function(state,couponId) {
            state = (state == true) ? 0 : 1;
            this.post('/admin/information/setAppointCouponEnable', {
                couponId: couponId,
                state: state
            }).then((response) => {
                if(response.code == 0) {
                    state == 0 ? this.message(true,"启用成功","success") : this.message(true,"禁用成功","success");
                }
                else this.message(true, response.msg, 'info');
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
        handleClick: function (couponId) {
            this.$router.push('/admin/message/coupon/' + this.id + '/' + couponId);
            this.couponId = couponId;
            this.getAppointCoupon();
        },
        // 鼠标失去焦点时触发事件，val=>当前input里面的值，index=>当前行的下标
        // changeCount: function(val,index) {
        //     var re = /^[0-9]+.?[0-9]*$/;
        //     if (!re.test(val)) {
        //         this.message(true,'请输入数值','warning');
        //         this.tableData[index].weight = this.TableValue;
        //     } else if (val<0||val>1000) {
        //         this.message(true,'权值范围为0~1000','warning');
        //         this.tableData[index].weight = this.TableValue;
        //     } else {
        //         this.$emit('setInfoRelation',this.tableData[index].id, this.tableData[index].weight);
        //         let that = this
        //         this.post('/admin/information/updateweight',{
        //             id:that.id,
        //             weight : that.tableData[index].weight
        //         }).then(res=>{

        //         })
        //     }
        // },
        // // 清空所有优惠卷
        // couponDelete: function() {
        //     var table = this.tableData;
        //     var arrayTableId = [];
        //     for (var i = 0; i < table.length; i++) {
        //         arrayTableId.push(table[i].id);
        //     };
        //     if(arrayTableId.length < 1) {
        //         this.message(true, '没有要修改的数据', 'error');
        //         return;
        //     }
        //     this.post('/deletecouponDelete', {

        //     }).then((response) => {
        //         if(response.code == 0) {
        //             this.tableData = [];
        //         }
        //     })
        // },
        postContent(){
            let that = this;
            // console.log(this.couponId);
            // return false;
            this.confirm(() => {
                if(this.couponId == 0 || this.couponId == undefined) {
                    this.post('/admin/information/createCoupon',{
                        coachId:parseInt(this.id),
                        couponName:that.couponForm.name,
                        couponType:this.couponForm.type,
                        context:that.couponForm.context,
                        couponcol:that.editor.txt.html()
                    }).then(res=>{
                        if(res.code == 0){
                            that.info();
                            this.$router.push('/admin/message/coupon/' + parseInt(this.id) + '/' + res.result);
                            that.message(true,'提交成功','success')
                        }else{
                            that.message(true,'提交失败','error')
                        }
                    })
                }
                else {
                    this.post('/admin/information/updateAppointCoupon', {
                        couponId: this.couponId,
                        couponName: this.couponForm.name,
                        couponType: this.couponForm.type,
                        context: this.couponForm.context,
                        couponcol: this.editor.txt.html()
                    }).then((res) => {
                        if(res.code == 0) {
                            this.message(true, '修改优惠券信息成功', 'success');
                        }
                        else this.message(true, res.msg, 'info');
                    })
                }
            }, () => {
                this.message(true, '取消提交', 'info');
            }, '确认提交修改的记录吗？');
        },
        //返回上一页
        toBack: function() {
            this.$router.push('/admin/message/changeMessage/' + this.id);
        },
        // 跳转到优惠卷设置页面
        toAdvise: function() {
            this.$router.push('/admin/message/aboutActivity/' + this.id);
        },
        collegeFinish: function() {
            this.$router.push('/message/universMajorList');
        },
        loseFocus:function(val,index) {
            var re = /^[0-9]+.?[0-9]*$/;
            if (!re.test(val)) {
                this.message(true,'请输入数值','warning');
                this.tableData[index].weight = this.showweight;
            } else if (val<0||val>1000) {
                this.message(true,'权值范围为0~100','warning');
                this.tableData[index].weight = this.showweight;
            } else {
                //权重正确，将该行表格id传给后台
                var that = this;
                if(val != that.showweight){
                    this.confirm(() => {
                        this.post('/admin/information/updateCoachWeight',{
                            //后台参数，前台参数(传向后台)
                            id: that.tableData[index].id,
                            weight: that.tableData[index].weight
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
        getAppointCoupon() {
            this.fetch('/admin/information/getAppoCoupon', {
                coachId: this.id,
                couponId: this.couponId
            }).then((res) => {
                if(res.code == 0) {
                    this.couponForm = res.result;
                }
                else this.message(true, res.msg, 'info');
            })
        }
    },
    mounted(){
        if(this.$route.params.id != undefined && this.$route.params.id != 'undefined'){
            this.id = this.$route.params.id;
            this.info();
        }
        this.couponId = this.$route.params.couponId;
        if(this.$route.params.couponId != undefined && this.$route.params.couponId != 'undefined') {
            this.couponId = this.$route.params.couponId;
            this.getAppointCoupon();
        }



        // 创建富文本编辑器
        this.editor.customConfig.onchange = (html) => {
            this.couponForm.zslm_couponcol = html;
        }
        this.editor.create();
        this.editor.$textElem.attr('contenteditable', false);
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

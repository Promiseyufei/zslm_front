<template>
	<div>
		<div class="operateBox">
			<div>
				<el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>院校专业</el-breadcrumb-item>
                    <el-breadcrumb-item>院校专业信息编辑</el-breadcrumb-item>
                    <el-breadcrumb-item>招生项目信息编辑</el-breadcrumb-item>
                </el-breadcrumb>

				<!-- 步骤条 -->
                <div class="fileSteps">
                    <el-steps :active="1.2" align-center>
                            <el-step title="院校专业信息"></el-step>
                            <el-step title="招生项目信息"></el-step>
                    </el-steps>
                </div>

                <div>
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;招生项目信息</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <el-form ref="universityForm" :model="universityForm" label-width="110px" class="demo-ruleForm">
                                <div class="collegeBox">
                                    <div class="college">
                                        <div>
                                            院校专业名称
                                        </div>
                                        <div>
                                            {{ majorName }}
                                        </div>
                                    </div>
                                    <el-form-item>
                                        <el-button type="primary" @click="startChange">开始编辑</el-button>
                                    </el-form-item>
                                </div>
                                
                                <el-form-item label="招生项目名称">
                                    <el-input v-model="universityForm.project_name" :disabled = "disabled"></el-input>
                                </el-form-item>
                                <el-form-item label="项目费用">
                                    <el-input v-model="universityForm.cost" :disabled = "disabled"></el-input>
                                </el-form-item>

                                <el-form-item label="费用筛选区间" prop="project">
                                    <el-col :span="6">
                                        <el-form-item>
                                            <el-input v-model="universityForm.min_cost" style="width: 100%;" :disabled = "disabled"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col class="line" :span="2" text-align: center>至</el-col>
                                    <el-col :span="6">
                                        <el-form-item>
                                            <el-input v-model="universityForm.max_cost" style="width: 100%;" :disabled = "disabled"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <el-form-item label="招生名额" prop="project" size="medium">
                                    <el-col :span="5">
                                        <el-form-item>
                                            <el-input v-model="universityForm.student_count" :disabled = "disabled"></el-input>
                                        </el-form-item>				                	
                                    </el-col>				                    
                                </el-form-item>
                                <el-form-item label="授课语言">
                                        <el-col :span="5">
                                        <el-form-item>
                                            <el-input v-model="universityForm.language" placeholder="请输入..." :disabled = "disabled"></el-input>
                                        </el-form-item>				                	
                                    </el-col>		
                                </el-form-item>

                                <el-form-item label="学制">
                                        <el-input v-model="universityForm.eductional_systme" :disabled = "disabled"></el-input>
                                </el-form-item>

                                <el-form-item label="报考条件">
                                        <el-input v-model="universityForm.can_conditions" :disabled = "disabled"></el-input>
                                </el-form-item>

                                <el-form-item label="分数线描述">
                                        <el-input v-model="universityForm.score_describe" :disabled = "disabled"></el-input>
                                </el-form-item>

                                <el-form-item label="分数线类型">
                                    <el-radio-group v-model="universityForm.score_type" :disabled = "disabled">
                                        <el-radio v-for="(item, index) in fractionLineType" :key="index" :label="item.id">{{ item.name }}</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                                <el-form-item label="统招模式">
                                    <el-radio-group v-model="universityForm.recruitment_pattern" :disabled = "disabled">
                                        <el-radio v-for="(item, index) in unifiedRecruitPattern" :key="index" :label="item.id">{{ item.name }}</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                                <el-form-item label="招生模式">
                                    <el-input v-model="universityForm.enrollment_mode" :disabled = "disabled"></el-input>
                                </el-form-item>

                                <el-form-item label="毕业证书">
                                    <el-input v-model="universityForm.graduation_certificate" :disabled = "disabled"></el-input>
                                </el-form-item>

                                <el-form-item label="专业方向" class="collegeAddMajor" :disabled = "disabled">
                                    <el-tag
                                        :key="tag.id"
                                        v-for="tag in dynamicTags"
                                        closable
                                        :disable-transitions="false"
                                        @close="handleClose(tag,disabled)">{{tag.name}}
                                    </el-tag>

                                    <el-autocomplete 
                                        value-key="name" 
                                        class="input-new-tag" 
                                        v-if="inputVisible" 
                                        ref="saveTagInput" 
                                        size="small" 
                                        @blur="handleInputConfirm" 
                                        v-model="professionalDirection" 
                                        :fetch-suggestions="querySearchAsync" 
                                        @select="handleSelect" no-data-text="暂无专业方向信息"></el-autocomplete>
                                    <el-button v-else class="button-new-tag" size="small" @click="showInput" :disabled = "disabled">+ 添加</el-button>
                                    
                                </el-form-item>


                                <el-form-item>
                                    <el-button type="primary" @click="putProjectMsg">提交</el-button>
                                </el-form-item>		            
                            </el-form>
                        </div>
                    </div>

                    <!-- 当前banner -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;所有招生项目</div>
                        </div>

                        <div class="operateUpfilesRight2">
                            <div class="messageBtn">
                                <el-form ref="form" label-width="100px">
                                    <el-form-item>
                                        <el-button icon="el-icon-delete" @click="projectDelete">清空</el-button>
                                    </el-form-item>

                                    <el-table
                                    ref="singleTable"
                                    :data="tableData"
                                    highlight-current-row
                                    border 
                                    style="width: 100%"
                                    :header-cell-style="getRowClass"
                                    class="collegeTable">
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
                                            property="is_show"
                                            label="展示状态"
                                            width="120">
                                            <template slot-scope="scope" >
                                                <el-switch v-model="tableData[scope.$index].is_show" @click.native="changeState(tableData[scope.$index].is_show, tableData[scope.$index].id)"></el-switch>
                                            </template>
                                        </el-table-column>
                                            <el-table-column
                                            property="z_name"
                                            label="院校专业">
                                        </el-table-column>
                                            <el-table-column
                                            property="project_name"
                                            label="招生项目"
                                            width="100">
                                        </el-table-column>
                                        <el-table-column
                                            property="name"
                                            label="操作"
                                            width="200">
                                            <template slot-scope="scope">
                                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                                <el-button type="text" size="small" @click="deleteSingle(scope.row.id, scope.row)">删除</el-button>
                                            </template>
                                        </el-table-column>									     
                                    </el-table>
                                </el-form>
                                
                                <!-- 小型分页 -->
                                <div class="block" style="">
                                    <el-pagination background layout="prev, pager, next" @current-change="changeCurrent" :total="total"></el-pagination>
                                </div>
                            </div>

                            <!-- 完成按钮 -->
                            <div class="operateFinalUp">
                                <el-button type="primary" @click="collegeFinish">完成</el-button>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		components: {
	    },
	    data(){
	    	return{
                universityForm: {},

                //分数线描述
                fractionLineType: [],
                professionalDirection:'',
                //统招模式
                unifiedRecruitPattern:[],
                //专业方向
                restaurants:[],
				collegeInformation:"XX大学XX学院MBA专业",
                disabled:true,
                dynamicTags: [],
                inputVisible: false,
                inputValue: '',
                tableData: [],
                TableValue: 0,
                id: 0,
                majorId:0,
                pageNum:1,
                majorName:'',
                total: 0,
                test: "0",
                proId: 0
	    	}
	    },
	    methods:{
            putProjectMsg() {
                let professional = [];
                this.dynamicTags.forEach((item, index) => {
                    professional[index] = item.id;
                });
                this.post('/admin/information/createProject', {
                    majorId: this.majorId,
                    projectName: this.universityForm.project_name,
                    minCost: this.universityForm.min_cost,
                    maxCost: this.universityForm.max_cost,
                    cost: this.universityForm.cost,
                    studentCount:this.universityForm.student_count,
                    language:this.universityForm.language,
                    classSituation:this.universityForm.class_situation,
                    eductionalSystme: this.universityForm.eductional_systme,
                    canConditions:this.universityForm.can_conditions,
                    scoreDescribe:this.universityForm.score_describe,
                    graduationCertificate:this.universityForm.graduation_certificate,
                    recruitmentPattern:this.universityForm.recruitment_pattern,
                    enrollmentMode:this.universityForm.enrollment_mode,
                    professionalDirection:professional,
                    scoreType:this.universityForm.score_type
                }).then((response) => {
                    if(response.code == 0) {
                        this.proId = response.result;
                        this.message(true, response.msg, 'success');
                        // this.getAppointProject();
                        this.$router.push('/message/universityMessage/' + this.majorId + '/' + this.majorName + '/' + this.proId);
                    }
                    else 
                        this.message(true, response.msg, 'error');
                })
                // console.log(this.universityForm);
            },

            //远程搜索
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                cb(results);
                }, 3000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
                let isPush = false;
                this.dynamicTags.forEach((val) => {
                    if(val.id == item.id) {
                        isPush = true;
                    }
                })
                if(!isPush) this.dynamicTags.push(item);
                this.inputVisible = false;
                this.inputValue = '';
            },




            changeCurrent(raw) {
                this.pageNum = raw;
                this.getProject();

            },
            deleteSingle(proId, row) {
                this.confirm(() => {
                   this.post('/admin/information/deleteAppointProject', {
                       projectId: proId
                   }).then((response) => {
                        if(response.code == 0) {
                            this.tableData.splice(this.tableData.indexOf(row), 1);
                            this.message(true, response.msg, 'success');
                        }
                        else
                            this.message(true, response.msg, 'error');
                   })
                }, () => {
                    this.message(true, '已取消操作', 'info');
                });
            },
            collegeFinish: function() {
                this.$router.push('/message/universMajorList');
            },
	    	startChange: function() {
	    		this.disabled = false;
            },
            //改变展示状的时候触发事件
            changeState: function(state,proId) {
                let stateNum = state == true ? 0 : 1;
                this.changeProjectState(proId, 1, stateNum);
            },
            // 删除专业方向标签
            handleClose(tag,disabled) {
                if(disabled==true) {
                    this.message(true,"您现在不能编辑","warn");
                }else {
                    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
                }
            },
            // 表单获得焦点触发事件
            focusCount: function(val) {
                this.TableValue = val;
                console.log(this.TableValue);
            },

            // 清空所有推荐活动
            projectDelete: function() {
                var table = this.tableData;
                var arrayTableId = [];
                table.forEach((item) => {
                    arrayTableId.push(item.id);
                });
                if(arrayTableId.length < 1) {
                        this.message(true, '没有要清空的数据');
                        return;
                }
                this.confirm(() => {
                    this.post('/admin/information/deleteAppointProject', {
                            projectId: arrayTableId
                    }).then((response) => {
                        if(response.code == 0) {
                                this.getProject();
                                // this.tableData = [];
                                this.message(true, response.msg, 'success');
                        }
                        else {
                                this.message(true, response.msg, 'error');
                        }
                    })
                }, () => {
                        this.message(true, '已取消修改', 'info');
                })
            },

            changeBlurTest(val, index) {
                var re = /^[0-9]+.?[0-9]*$/;
                if (!re.test(val)) {
                    this.message(true,'请输入数值','warning');
                    this.tableData[index].weight = this.TableValue;
                    return false;
                } else if (val<0||val>1000) {
                    this.message(true,'权值范围为0~100','warning');
                    this.tableData[index].weight = this.TableValue;
                    return false;
                }
                return true;
            },
            // 鼠标失去焦点时触发事件，val=>当前input里面的值，index=>当前行的下标
            changeCount: function(val,index) {
                this.confirm(() => {
                    if(this.changeBlurTest(val, index)) {
                        if(!this.changeProjectState(this.tableData[index].id, 0, val)) {
                            this.tableData[index].weight = this.TableValue;
                        }
                    }
                }, () => {
                    this.tableData[index].weight = this.TableValue;
                    this.message(true, '已取消操作', 'info');
                })
            },

            changeProjectState(proId, type, state) {
                let status = true;
                this.post('/admin/information/setProjectState' , {
                    projectId: proId,
                    type:type,
                    state: state
                }).then((response) => {
                    if(response.code == 0) {
                        this.message(true, response.msg, 'success');
                    }
                    else {
                        status = false;
                        this.message(true, response.msg, 'error');
                    }
                })
                return status;

            },
            
            handleClick: function (row) { 
                
            },
            // 添加专业方向标签输入框
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            // 添加成功，加入标签数组里
            handleInputConfirm() {
                let _this = this;
                let isPush = false;
                let inputValue = this.professionalDirection;
                if (inputValue) {

                    this.restaurants.forEach((item, key) => {
                        if(item.name == inputValue) {
                            let isRepeat = false;
                            this.dynamicTags.forEach((val) => {
                                if(item.id == val.id) isRepeat = true;
                            });
                            if(!isRepeat) _this.dynamicTags.push(item);
                            else this.message(true, '该专业方向已被选中!', 'info');
                            isPush = true;
                        }
                        else if((key == (_this.restaurants.length - 1)) && (isPush == false)) {
                            this.message(true, '专业方向值只接受输入框提示的选项', 'info');
                        }
                    })
                }
                this.inputVisible = false;
                this.inputValue = '';
            },

            //得到所有的项目
            getProject: function() {
                let self = this;

                this.post('/admin/information/getAllProject', {
                    majorId: this.majorId,
                    pageNum: this.pageNum
                }).then((response) => {
                    if(response.code == 0) {
                        self.total = response.result.total;
                        self.tableData = response.result.data;
                    }
                    else 
                        this.message(true, response.msg, 'error');
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            getAppointProject() {
                this.post('/admin/information/getAppointIdProject', {
                    proId: this.proId
                }).then((response) => {
                    if(response.code == 0) {
                        this.universityForm = response.result;
                        this.dynamicTags = response.result.professional_direction;
                    }
                })
            }

        },
        mounted() {
            let _this = this;
            if(this.$route.params.majorId !== null && this.$route.params.majorId != 0) {
                this.majorId = this.$route.params.majorId;
            }
            else {
                this.message(true, '请指changeProjectState所创建的招生项目的院校专业', 'error');
                return;
            }

            if(this.$route.params.majorName !== null && this.$route.params.majorName !== '') {
                this.majorName = this.$route.params.majorName;
            }
            else {
                this.message(true, '无法获得所创建的招生项目的院校专业名称', 'info');
                // return;
            }

            if(this.$route.params.proId !== null && this.$route.params.proId !== '') {
                this.proId = this.$route.params.proId;
                this.getAppointProject();
            }

            this.getProject();

            this.getMajorPageOptions('post', '/admin/information/getFractionLineType', {}, (response) => {
                response.code == 0 ? _this.fractionLineType = response.result : this.message(true, response.msg, 'error');
            }, (response) => {
                this.message(true, '未查询到分数线类型信息', 'error');
            });

            this.getMajorPageOptions('post', '/admin/information/getUnifiedRecruitPattern', {}, (response) => {
                response.code == 0 ? _this.unifiedRecruitPattern = response.result : this.message(true, response.msg, 'error');
            }, (response) => {
                this.message(true, '未查询到统招模式信息', 'error');
            });

            this.getMajorPageOptions('post', '/admin/information/getMajorDirection', {}, (response) => {
                response.code == 0 ? _this.restaurants = response.result : this.message(true, response.msg, 'error');
            }, (response) => {
                this.message(true, '未查询到专业方向信息', 'error');
            })
        }
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
.operateBox {
  width: 1500px;
  margin: 0 auto;
}

/*
* tag标签样式
*/
.el-tag + .el-tag {
    margin-left: 10px;
}
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
.collegeAddMajor button,.collegeTable button {
    float:none !important;
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
* 
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


.collegeBox {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.college{
	height: 40px;
	margin-left: 15px;
}
.college > div{
	margin-right: 10px;
	float: left;
	font-size: 14px;
    line-height: 1;
    color: #606266;
}

.el-col-2{
	text-align: center;
}


/*
* 右边当前banner内容样式
*/

.operateUpfilesRight2 {
  padding: 40px 90px 40px 80px;
  width: 1170px;
}
.operateFinalUp {
  text-align: center;
  margin: 150px 0 20px;
}
.messageBtn button{
  float: right;
}
</style>
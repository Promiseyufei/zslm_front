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
	            	<el-steps :active="2" align-center>
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
				          					{{ collegeInformation }}
				          				</div>
				          			</div>
		          					<el-form-item>
				                    	<el-button type="primary" @click="startChange">开始编辑</el-button>
				                    </el-form-item>
		          				</div>
		          				
			                    
			          			<el-form-item label="院校专业名称" :rules="required">
				                    <el-input v-model="universityForm.project" :disabled = "disabled"></el-input>
				                </el-form-item>
				                <el-form-item label="项目费用">
				                    <el-input v-model="universityForm.free" :disabled = "disabled"></el-input>
				                </el-form-item>
				                <el-form-item label="费用筛选区间" prop="project" :rules="required">
				                    <el-col :span="6">
								      <el-form-item>
								        <el-input v-model="universityForm.choice.low" style="width: 100%;" :disabled = "disabled"></el-input>
								      </el-form-item>
								    </el-col>
								    <el-col class="line" :span="2" text-align: center>至</el-col>
								    <el-col :span="6">
								      <el-form-item>
								        <el-input v-model="universityForm.choice.height" style="width: 100%;" :disabled = "disabled"></el-input>
								      </el-form-item>
								    </el-col>
				                </el-form-item>		       
				                <el-form-item label="招生名额" prop="project" size="medium">
				                	<el-col :span="5">
					                	<el-form-item>
					                		<el-input v-model="universityForm.number" :disabled = "disabled"></el-input>
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
				                    <el-input v-model="universityForm.term" :disabled = "disabled"></el-input>
				                </el-form-item>
				                <el-form-item label="报考条件">
				                    <el-input v-model="universityForm.item" :disabled = "disabled"></el-input>
				                </el-form-item>
				                <el-form-item label="分数线描述">
				                    <el-input v-model="universityForm.fraction" :disabled = "disabled"></el-input>
				                </el-form-item>
				                <el-form-item label="分数线类型" :rules="required">
				                    <el-radio-group v-model="universityForm.fractionKind">
								      <el-radio label="A线"></el-radio>
								      <el-radio label="B线"></el-radio>
								      <el-radio label="自主划线"></el-radio>
								    </el-radio-group>
				                </el-form-item>
				                <el-form-item label="统招模式" :rules="required">
				                    <el-radio-group v-model="universityForm.fractionDay">
								      <el-radio label="全日制"></el-radio>
								      <el-radio label="非全日制"></el-radio>
								      <el-radio label="中外合作"></el-radio>
								    </el-radio-group>
				                </el-form-item>
				                <el-form-item label="招生模式">
				                    <el-input v-model="universityForm.recruitStudents" :disabled = "disabled"></el-input>
				                </el-form-item>
				                <el-form-item label="毕业证书">
				                    <el-input v-model="universityForm.graduation" :disabled = "disabled"></el-input>
				                </el-form-item>		

				                <el-form-item>
			                    	<el-button type="primary" @click="">提交</el-button>
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
				                    	<el-button icon="el-icon-delete" @click="">清空</el-button>
				                    </el-form-item>

				                    <el-table
								    ref="singleTable"
								    :data="tableData"
								    highlight-current-row
								    border 
								    style="width: 100%"
								    :header-cell-style="getRowClass">
									    <el-table-column
									      type="index"
									      label="编号"
									      width="50">
									    </el-table-column>
									    <el-table-column
									      property="date"
									      label="展示顺序"
									      width="120">
									    </el-table-column>
									    <el-table-column
									      property="name"
									      label="展示状态"
									      width="120">
									    </el-table-column>
									      <el-table-column
									      property="name"
									      label="院校专业">
									    </el-table-column>
									      <el-table-column
									      property="name"
									      label="招生项目">
									    </el-table-column>
									     <el-table-column
									      property="name"
									      label="操作"
									      width="200">
									    </el-table-column>									     
								    </el-table>
		              			</el-form>
		              		</div>

		              		<!-- 完成按钮 -->
			                <div class="operateFinalUp">
			                  <el-button type="primary">完成</el-button>
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
				universityForm: {
					project:"xxx",
					free:2.000,
					choice:{
						low:0,
						height:10
					},
					number:20,
					language:"chinese",
					classStudent:"xxx",
					term:"xxx",
					item:"xxx",
					fraction:1233,
					fractionKind:1,
					fractionDay:1,
					recruitStudents:"xxx",
					graduation:"xxx",
					required: true
				},
				collegeInformation:"XX大学XX学院MBA专业",
				disabled:true,
				tableData: [
					{
						major:"XX大学XX学院MBA专业",
						progectStudent:"招生项目1"
					},
				]
	    	}
	    },
	    methods:{
	    	startChange: function() {
	    		this.disabled = false;
	    	},
	    	getRowClass: function({ row, column, rowIndex, columnIndex }){
	    		console.log(rowIndex);
	    		if (rowIndex == 0) {
					return 'background:#EFEFEF;text-align:center'
				} else {
					return ''
				}
	    	}
	    }
	};
</script>

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
  background: url(../../../assets/img/point.png) no-repeat;
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
.operateUpfilesRight form {
  margin-top: 50px;
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
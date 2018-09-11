<template >
    <div>
        <div class="operateBox">
        <!-- 中间内容 -->
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>运行管理</el-breadcrumb-item>
            <el-breadcrumb-item>广告位管理</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 步骤条 -->
          <div class="fileSteps">
            <el-steps :active="2" align-center>
              <el-step title="选择院校专业"></el-step>
              <el-step title="上传文件"></el-step>
            </el-steps>
          </div>
          
          <div>
            <!-- 上传banner -->
            <div class="operateUpfiles operateUp">
              
              <div class="operateUpfilesLeft">
                <div><i class="fa fa-cloud-upload fa-fw FA-3X"></i>&nbsp;上传广告图</div>
              </div>
              <div class="operateUpfilesRight">
                <el-form ref="ruleForm" :model="ruleForm" label-width="100px">
                  <el-form-item label="院校专业名称">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="专业认证">
                    <el-checkbox-group v-model="ruleForm.authentication">
                      <el-checkbox label="AMBA" name="type"></el-checkbox>
                      <el-checkbox label="EQUIS" name="type"></el-checkbox>
                      <el-checkbox label="AACSB" name="type"></el-checkbox>
                      <el-checkbox label="CAMEA" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="院校认证">
                    <el-checkbox-group v-model="ruleForm.type">
                      <el-checkbox label="原985" name="type"></el-checkbox>
                      <el-checkbox label="原211" name="type"></el-checkbox>
                      <el-checkbox label="双一流" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="审批年限">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="所在省市">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="院校地址">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="资讯电话">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="院校官网">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="招生专题">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="院校专业名称">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="所属院校名称">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="专业类型">
                    <el-select v-model="ruleForm.region" placeholder="全部">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="所属院校名称">
                    <el-input v-model="ruleForm.name"></el-input>
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
                <div><i class="fa fa-list-alt fa-fw FA-3X"></i>&nbsp;当前广告图</div>
              </div>
              <div class="operateUpfilesRight2"> 
                <el-form ref="form" label-width="100px">
                  <el-form-item label="Title">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Keywords">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Description">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="">提交</el-button>
                  </el-form-item>

                  <!-- 完成按钮 -->
                  <div class="operateFinalUp">
                    <el-button type="primary">完成</el-button>
                  </div>
                </el-form>
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
        ruleForm: {

        },
        ruleForm: {
          name: '',
          message: '',
          url: '',
          resource: '',
          delivery: ''
        },
        i: 0,
        TableValue: 0,
        listTable: [
          {
            prop: 'img',
            lable: '图片名称',
            width: "210px"
          },
          {
            prop: "show_weight",
            lable: "展示权重",
            width: "80px"
          },
          {
            prop: "re_alt",
            lable: "图片描述",
            width: "210px"
          },
          {
            prop: "re_url",
            lable: "图片地址",
            width: "319px"
          },
          {
            prop: "create_time",
            lable: "上传时间",
            width: "210px"
          }
        ],
        // 表格默认数据
        tableData3: []
        }
    },
    watch: {
      i: function(val,oldval) {
        this.getIndexBanner();
      },
    },
    methods:{
        // 清空所有banner
        operateDelete: function() {
          var table = this.tableData3;
          var arrayTableId = [];
          for (var i = 0; i < table.length; i++) {
            arrayTableId.push(table[i].id);
          };
          this.deleteBanner(arrayTableId);
        },
        // 动态更新资讯类型id
        toshow: function (i) {
          this.i = i;
          console.log(this.i);
        },
        handleClick: function (row) { 
          console.log(row);
        },
        //  获得所有页面的名称
        getInformationType: function() {
          var self = this;
          axios.post('/admin/operate/getAllPageListName', {
          })
          .then(function (response) {
            var date = response.data;
            if (date.code == 0) {
              self.banner = date.data;
              self.i = date.data[0].id;
            };
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        // 获得页面的banner信息
        getIndexBanner: function() {
          var self = this;
          axios.post('/admin/operate/getIndexBanner', {
            indexId: self.i,
            btType: 1
          })
          .then(function (response) {
            var date = response.data;
            if (date.code == 0) {
              var res = date.data;
              self.tableData3 = res;
            };
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    },
    mounted(){
      this.getInformationType();
      this.getIndexBanner();
    }
}
</script>
<style>
  /*
  * 
  */
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
* 右边上传banner内容样式
*/
.operateUpfilesRight .upload-demo {
  width: 250px;
}
.operateUpfilesRight .el-upload__tip {
  display: none;
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
.operateHeader .el-button {
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 10px;
}
.operateHeader>p {
  margin-left: 20px;
  font-weight: bold;
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


/*
* 右边当前banner内容样式
*/

.operateUpfilesRight2 {
  padding: 40px 90px 40px 80px;
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


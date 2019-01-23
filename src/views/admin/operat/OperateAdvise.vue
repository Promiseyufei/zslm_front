<template >
    <div>
    	<div class="operateBox">
        <!-- 中间内容 -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>运营管理</el-breadcrumb-item>
                    <el-breadcrumb-item  class="selectedNavPublic">资讯频道首页推荐</el-breadcrumb-item>
                </el-breadcrumb>
                <!-- 选项卡 -->
                <operateNav :Banner="banner" :radio2 = "radio2" @showbox="toshow" :i="i"></operateNav>
                <div class="operateUpfiles operateHeader">
                    <p>当前操作页面：<span>{{this.radio2}}</span></p>
                    <el-button type="info" plain @click.native="operateUpdate"><i class="fa fa-refresh fa-fw"></i>&nbsp;刷新</el-button>
                </div>
            
                <div v-loading="loading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading">
                    <!-- 上传banner -->
                    <div class="operateUpfiles operateUp">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-pencil fa-fw FA-3X"></i>&nbsp;推荐区名称</div>
                        </div>
                        <div class="operateUpfilesRight">
                            <!-- 提交表单 -->
                            <div>
                                <el-form label-width="100px">
                                    <el-form-item label="推荐区名称" width="80px">
                                        <el-input v-model="adviseName" placeholder="输入推荐区名称" v-bind:disabled="dis"></el-input>
                                        <span class="adviseNameChange" @click="adviseClickChange" v-bind:style="{ display: disp }">更改</span>
                                    </el-form-item>

                                    <el-form-item>
                                        <el-button type="primary" @click="adviseNameSubmit">确定</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                    <!-- 当前banner -->
                    <div class="operateUpfiles operateDown">
                        <div class="operateUpfilesLeft">
                            <div><i class="fa fa-wrench fa-fw FA-3X"></i>&nbsp;设置推荐资讯</div>
                        </div>
                        <div class="operateUpfilesRight2">
                            <div class="operateUpfilesRight2Nav">
                                <el-button type="info" plain @click="adviseAdd" size="small"><i class="fa fa-plus fa-fw fa-lg"></i>添加</el-button>
                                <el-button type="info" plain @click="operateDelete" size="small"><i class="fa fa-trash-o fa-fw fa-lg"></i>清空</el-button>
                            </div>
                            <!-- 表格 -->
                            <AdviseTable :tableData3 = "tableData3" :listTable="listTable" @setInfoRelation="setOpAd" @del="delAdvise"></AdviseTable>
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
export default {
    components: {
    },
    data() {
      return {
        dis: true,
        disp: "inline-block",
        adviseName: "",
        adviseName2: "",
        loading: false,
        banner: [
            {
                id: 1,
                name: "区域一"
            },
            {
                id: 2,
                name: "区域二"
            }
        ],
        radio2: "",
        src: "",
        fileList: [{name: '', url: 'http://img.hb.aicdn.com/cf629e62573f99793bf9c5621ecb5545534642ac1215-3wa44w_fw658',file: ''}],
        ruleForm: {
          name: '',
          message: '',
          url: ''
        },
        i: 1,
        TableValue: 0,
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
            prop: "information_type",
            lable: "资讯类型",
            width: "210px"
          },
          {
            prop: "zx_name",
            lable: "资讯标题",
            width: "319px"
          },
          {
            prop: "create_time",
            lable: "发布时间",
            width: "210px"
          }
        ],
        // 表格默认数据
        tableData3: []
        }
    },
    methods:{
        adviseAdd: function() {
          this.$router.push('/operate/addAdvise/' + this.i);
        },

        // 点击修改标题时，控制输入框和“更改”按钮的显示
        adviseClickChange: function() {
          this.dis = false;
          this.disp = "none";
        },

        // 修改名称
        adviseNameSubmit: function() {
          var self = this;
          this.post('/admin/operate/setAppointRegionName', {
            regionId: self.i,
            regionName: self.adviseName
          })
          .then(function (response) {
              console.log(typeof response);
              if (response.code == 0) {
                self.message(true,response.msg,'success');
                self.dis = true;
                self.disp = "inline-block";
                self.adviseName2 = self.adviseName;
              }else {
                self.adviseName = self.adviseName2;
                self.message(true,response.msg,'warning');
              }
          })
          .catch(function (error) {
            console.log(error);
          });
        },

        // 得到所有的咨询推荐
        getAdviseName: function() {
          var self = this;
          // var load = this.openFullScreen2();
          this.post('/admin/operate/getAppointRegionData', {
            regionId: self.i
          })
          .then(function (response) {
            if (response.code == 0) {
              self.adviseName = response.result.region_name;
              self.adviseName2 = response.result.region_name;
              self.tableData3 = response.result.zx_id;
              if(self.tableData3 !== null)
                for (var i = 0; i < self.tableData3.length; i++) {
                  self.$set(self.tableData3[i],'show_weight',self.tableData3[i].weight);
                };
            };
            // load.close();
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        
        // 清空所有banner
        operateDelete: function() {
          var table = this.tableData3;
          var arrayTableId = [];
          for (var i = 0; i < table.length; i++) {
            arrayTableId.push(table[i].id);
          };
          if(arrayTableId.length < 1) {
            this.message(true, '没有要清空的数据', 'error');
            return;
          }
          this.post('/admin/operate/deleteAppoinInformation', {
              RegionId: this.i,
              InformationId : arrayTableId
          }).then((response) => {
            if(response.code == 0) {
                this.tableData3 = [];
                this.message(true, response.msg, 'success');
            }
            else this.message(true, response.msg, 'error');
          })
        },
        // 点击上传图片按钮
        submitForm: function (formName) {
          var self = this;
          this.$refs[formName].validate((valid) => {
            // 判断表单是否符合填写要求
            if (valid) {
              // 判断是否上传图片
              if (self.fileList[0].file == '') {
                this.$message('您还没有上传为图片呢');
                return;
              };
              // 上传图片
              // var formData = new FormData();
              // formData.append("userfile", self.fileList[0].file);
              // var imgFile = formData.get("userfile");

              var fd = new FormData()
              fd.append('file', self.fileList[0].file)
              let imgFile = {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
              }
              this.post('/admin/operate/createPageBillboard', {
                imgName: self.ruleForm.name,
                imgAlt: self.ruleForm.message,
                reUrl: self.ruleForm.url,
                img: imgFile,
                urlId: self.i
              })
              .then(function (response) {
                // var date = response.data;
                if (date.code == 0) {
                  self.$message({
                    message: '上传成功',
                    type: 'success'
                  });
                }else {
                  console.log(date.msg,123);
                }
              })
              .catch(function (error) {
                console.log(error);
              });

            } else {
              return false;
            }
          });
        },
        // 刷新页面，重新加载页面数据
        operateUpdate: function() {
          this.ruleForm.name = "";
          this.ruleForm.message = "";
          this.ruleForm.url = "";
          this.i = 1;
          this.getAdviseName();
        },
        // 动态更新资讯类型id
        toshow: function (i) {
          this.i = i;
          for(var i=0;i<this.banner.length;i++) {
						if(this.banner[i].id == this.i) {
							this.radio2 = this.banner[i].name;
							break;
						}
					}
          this.getAdviseName();
        },
        setOpAd: function(id, weight) {
            this.confirm(() => {
                this.post('/admin/operate/setAppoinInformationWeight', {
                    informationId: id,
                    weight:weight
                }).then((response) => {
                    (response.code == 0) ? this.message(true, response.msg, 'success') : this.message(true, response.msg, 'error');
                })
            }, () => {
                this.tableData3[index].show_weight = this.TableValue;
                this.message(true, '已取消修改', 'info');
            })
        },
        delAdvise: function(res, row) {
            this.confirm(() => {
                this.post('/admin/operate/deleteAppoinInformation', {
                    RegionId: this.i,
                    InformationId: res
                }).then((response) => {
                    if(response.code == 0) {
                        this.tableData3.splice(this.tableData3.indexOf(row), 1);
                        this.message(true, response.msg, 'success');
                    }
                    else {
                        this.message(true, response.msg, 'error');
                    }
                })
            }, () => {
                this.message(true, '已取消修改', 'info')
            })
        },
        handleClick: function (row) { 
          console.log(row);
        },
        // 图片移除时触发该事件
        handleRemove: function (file, fileList) {
          var span = document.getElementsByClassName("el-upload__tip")[0];
          span.style.display = "none";
          this.fileList[0].url = 'http://img.hb.aicdn.com/cf629e62573f99793bf9c5621ecb5545534642ac1215-3wa44w_fw658';
          this.fileList[0].file = '';
        },
        handlePreview: function (file) {
          console.log(file);
        },
        handleAvatarSuccess: function (res, file) {
          this.fileList[0].url = URL.createObjectURL(file.raw);
          this.fileList[0].file = file;
        },
        // 每次上传图片列表改变时，触发
        handleChange: function (file, fileList) {
          var li = document.getElementsByClassName("el-upload-list")[0];
          var span = document.getElementsByClassName("el-upload__tip")[0];
          span.style.display = "block";
          li.style.display = "block";
          
          this.fileList = fileList.slice(-1);
        },
        beforeRemove: function (file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
    },
    mounted(){
      this.radio2 = this.banner[0].name;
      this.getAdviseName();
    }
}
</script>
<style>

</style>

<style scoped>
.operateBox {
  width: 1500px;
  margin: 0 auto;
}
/*
* 选项卡样式
*/
.operateNav {
  margin: 20px 0;
}
.operateNav .el-radio-button {
  margin-right: 10px;
}

.operateUpfilesRight .el-button--primary {
  float: left;
}
.adviseNameChange {
  margin-left: 10px;
  color: #1ABC9C;
  cursor: pointer;
}

/*
* 右边上传banner内容样式
*/
.operateUpfilesRight .upload-demo {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.operateUpfilesRight .el-upload__tip {
  margin-left: 20px;
  margin-bottom: 8px;
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
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
}
.operateUpfilesRight .el-input {
  width: 360px;
}
.operateUpfilesRight button {
  float: right;
}
.operateUpfilesRightImg {
  width: 640px;
  height: 170px;
  overflow: hidden;
  margin-top: 20px;
}
.operateUpfilesRightImg>img {
  max-width: 100%;
  max-height: 100%;
}


/*
* 右边当前banner内容样式
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


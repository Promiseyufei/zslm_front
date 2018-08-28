<template>
    <div>
    	<div class="operateBox">
        <!-- 中间内容 -->
        <div>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item v-for="(list, i) in banner" :key="i" :index = "i + '' ">{{list.name}}</el-menu-item>
          </el-menu>
          <div class="line"></div>

          <!-- 上传banner -->
          <div class="operateUpfiles">
            <div class="operateUpfilesLeft">
              <img src="" alt="">
              <div><i class="fa fa-cloud-upload"></i>上传banner</div>
            </div>
            <div class="operateUpfilesRight">
              <div >
                <div>
                  <el-upload
                    class="upload-demo"
                    action="/putPictrue"
                    :on-preview="handlePreview"
                    :on-change="handleChange"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :before-upload="beforeAvatarUpload"
                    :on-success="handleAvatarSuccess"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div> -->
                    <span class="el-upload__tip">当前以选择：</span>
                  </el-upload>
                </div>
                <div class="operateUpfilesRightImg">
                  <img :src="this.fileList[0].url" alt="">
                </div>
              </div>
                
                <div>
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="图片名称">
                      <el-input v-model="form.name" placeholder="输入图片名称"></el-input>
                    </el-form-item>
                    <el-form-item label="图片描述">
                      <el-input v-model="form.message" placeholder="输入图片描述"></el-input>
                    </el-form-item>
                    <el-form-item label="图片URL">
                      <el-input v-model="form.url" placeholder="输入图片URL"></el-input>
                    </el-form-item>


                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">上传</el-button>
                    </el-form-item>
                  </el-form>
                </div>
            </div>
          </div>

        </div>
        
    	</div>
    	
    </div>
</template>

<script>
import NavMenu from './accounts.vue'
export default {
    components: {
        NavMenu: NavMenu
    },
    data() {
      return {
        menuData: [
                  {    //一级
                      "entity": {
                          "id": 1,
                          "name": "systemManage",
                          "icon": "el-icon-message\r\n",
                          "alias": "两级菜单",
                      },
                      //二级
                      "childs": [
                          {
                              "entity": {
                                  "id": 3,
                                  "name": "authManage",
                                  "icon": "el-icon-loading",
                                  "alias": "权限管理",
                                  "value": {path: '/hello'},
                              },

                          },
                          {
                              "entity": {
                                  "id": 4,
                                  "name": "roleManage",
                                  "icon": "el-icon-bell",
                                  "alias": "角色管理",
                                  "value": "/system/role",
                              },

                          },
                          {
                              "entity": {
                                  "id": 2,
                                  "name": "menuManage",
                                  "icon": "el-icon-edit",
                                  "alias": "菜单管理",
                                  "value": "/system/menu",
                              },

                          },
                          {
                              "entity": {
                                  "id": 5,
                                  "name": "groupManage",
                                  "icon": "el-icon-mobile-phone\r\n",
                                  "alias": "分组管理",
                                  "value": "/system/group",
                              },

                          }
                      ]
                  },
                  {
                    //一级
                      "entity": {
                          "id": 6,
                          "name": "userManage",
                          "icon": "el-icon-news",
                          "alias": "三级菜单",
                      },
                      //二级
                      "childs": [
                          {
                              "entity": {
                                  "id": 7,
                                  "name": "accountManage",
                                  "icon": "el-icon-phone-outline\r\n",
                                  "alias": "帐号管理",
                                  "value": "",
                              },
                              //三级
                              "childs": [
                                  {
                                      "entity": {
                                          "id": 14,
                                          "name": "emailManage",
                                          "icon": "el-icon-sold-out\r\n",
                                          "alias": "邮箱管理",
                                          "value": "/content/email",
                                      },
                                  },
                                  {
                                      "entity": {
                                          "id": 13,
                                          "name": "passManage",
                                          "icon": "el-icon-service\r\n",
                                          "alias": "密码管理",
                                          "value": "/content/pass",

                                      }

                                  }
                              ]
                          },
                          {
                              "entity": {
                                  "id": 8,
                                  "name": "integralManage",
                                  "icon": "el-icon-picture",
                                  "alias": "积分管理",

                                  "value": "/user/integral",


                              },

                          }
                      ]
                  },
                  {//一级
                      "entity": {
                          "id": 40,

                          "name": "contentManage",
                          "icon": "el-icon-rank",
                          "alias":"四级菜单",

                      },
                      //er级
                      "childs": [
                          {
                              "entity": {
                                  "id": 41,
                                  "name": "classifyManage2",
                                  "icon": "el-icon-printer",
                                  "alias": "分类管理",
                              },
                              //三级
                              "childs": [
                                {
                                    "entity": {
                                        "id": 42,
                                        "name": "classifyManage3",
                                        "icon": "el-icon-printer",
                                        "alias": "分类管理",
                                    },
                                    //四级
                                    "childs": [
                                        {
                                            "entity": {
                                                "id": 43,
                                                "name": "classifyManage4",
                                                "icon": "el-icon-printer",
                                                "alias": "分类管理",
                                                "value": "/content/classify",
                                            },

                                        }
                                      ]

                                }
                              ]

                          }
                      ]
                  }
        ],
        width: 0,
        activeIndex: '1',
        activeIndex2: '1',
        banner: [],
        index: "1",
        src: "",
        fileList: [{name: '', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        form: {
          name: '',
          message: '',
          url: ''
        }
      }
    },
    methods:{
        onSubmit() {
          console.log('submit!');
        },
        handleRemove(file, fileList) {
          var span = document.getElementsByClassName("el-upload__tip")[0];
          span.style.display = "none";
          this.fileList[0].url = 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100';
        },
        handlePreview(file) {
          console.log(file);
        },
        handleAvatarSuccess(res, file) {
          this.fileList[0].url = URL.createObjectURL(file.raw);
        },
        handleChange(file, fileList) {
          var li = document.getElementsByClassName("el-upload-list")[0];
          var span = document.getElementsByClassName("el-upload__tip")[0];
          span.style.display = "block";
          li.style.display = "block";
          
          this.fileList = fileList.slice(-1);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        beforeAvatarUpload(file) {
          const isjpeg = file.type === 'image/jpeg';
          const isPNG = file.type === 'image/png';
          const isLt2M = file.size / 1024 / 1024 < 200;

          if (!isjpeg&&!isPNG) {
            this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 200MB!');
          }
          return isjpeg || isPNG && isLt2M;
        },
        handleSelect: function(key, keyPath) {
          // console.log(key, keyPath);
        },
        getInformationType: function() {
          var self = this;
          axios.post('/admin/operate/getInformationType', {
          })
          .then(function (response) {
            var date = response.data;
            // console.log(date);
            if (date.code == 0) {
              self.banner = date.data;
              // console.log(self.banner);
            };
            // console.log();
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    },
    mounted(){
      let w = document.body.clientWidth;
      this.width = w - 120;
      this.getInformationType();
    }
}
</script>
<style>
  /*
  * 上传图片列表初始时不显示
  */

  .operateUpfilesRight .el-upload-list {
    display: none;
    margin-top: -10px;
  }
  
</style>

<style scoped>
/*
* 右边内容样式
*/
.operateUpfilesRight .upload-demo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.operateUpfilesRight .el-upload__tip {
  margin-left: 20px;
  display: none;
  float: right;
}
.operateUpfiles {
  border: 1px solid #e4e4e4;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
.operateUpfilesLeft {
  background-color: #fcfcfc;
  border-right: 1px solid #e4e4e4;
  width: 159px;
}
.operateUpfilesLeft>div {
  background: url(../../assets/img/point.png) no-repeat;
  position: relative;
  top: 10px;
  left: 0;
  width: 180px;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.operateUpfilesRight {
  padding: 35px 90px 35px 80px;
  width: 1170px;
  display: flex;
  justify-content: space-between;
}
.operateUpfilesRight .el-input {
  width: 360px;
}
.operateUpfilesRight form {
  margin-top: 50px;
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

</style>


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
              <span>上传banner</span>
            </div>
            <div class="operateUpfilesRight">
                <div>
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </div>
                <div>
                  <img :src="this.fileList[0].url" alt="">
                </div>
                <div>
                  Panner
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
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],

      }
    },
    methods:{
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
          // if () {};
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
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

      console.log(this.fileList[0].url);
    }
}
</script>

<style scoped>
/*
* 右边内容样式
*/
.operateUpfiles {
  border: 1px solid #e4e4e4;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
.operateUpfilesLeft {
  background-color: #fcfcfc;
  border-right: 1px solid #e4e4e4;
  width: 160px;
}
.operateUpfilesLeft>span {
  /*background: url();*/
}
.operateUpfilesRight {
  padding: 35px 90px 35px 80px;
}
</style>


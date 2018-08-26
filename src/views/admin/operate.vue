<template>
    <div>
    	<div class="operateBox">
        <!-- 导航 -->
    		<el-menu
		          background-color="#F0F6F6"
		          text-color="#3C3F41"
		          active-text-color="black" router 
		          >
		          <NavMenu :navMenus="menuData"></NavMenu>
		    </el-menu>
        <!-- 中间内容 -->
        <div class="operateFloatRight operateBig" v-bind:style="{ width: width + 'px' }">
          <div class="operateHeader">
            <span>频道banner</span>
          </div>
        </div>

        <div class="operateFloatRight">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item v-for="(list, i) in banner" :key="i" :index = "i + '' ">{{list.name}}</el-menu-item>
          </el-menu>
          <div class="line"></div>
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
      }
    },
    methods:{
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

<style scoped>
/*
* 左侧导航样式
*/
.operateBox>.el-menu {
    width: 120px;
    position: absolute;
    top: 0;
    left: 0;
}

/*
* 右边内容样式
*/
.operateFloatRight {
  margin-left: 120px;
}
.operateBig {
  height: 50px;
  background-color: #F3F3F3;
  display: flex;
  align-items: center;
}

.operateHeader {
  width: 1500px;
  margin: 0 auto;
}
.operateHeader>span {
  border-left: 5px solid #1ABC9C;
  padding-left: 5px;
}
</style>


<template>
  <div>
    <div class="bigBox">
      <!-- header -->
      <hearderBanner ref="header" enName="INSTITUTIONS" name="搜辅导"></hearderBanner>


      <div v-loading="all_loading">
        <!-- 搜索框 -->
        <div class="singlecoachBig">
          <div class="singlecoachbox">
            <div class="coachInput">
              <input type="text" placeholder="输入关键字搜索" v-model="inputvalue" @blur.prevent="getCoach(1)">
              <i class="fa fa-search"></i>
            </div>
          </div>
        </div>

        <!-- 筛选框 -->
        <selectCoach  ref="select" :list="list" :checkboxGroup1="checkboxGroup1" @change="change"></selectCoach>

        <!-- 选项卡 -->
        <div class="singlecoachBig">
          <div class="singlecoachbox">
            <div class="coachNav">
              <div class="coachNavleft">
                <span>搜辅导 &gt;</span>

                <tags :tags="tags" @handleClose="handleClose"></tags>
              </div>
              <div class="coachNavright">
                <span>共有{{count}}所学校</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 辅导机构小块块 -->
        <div class="singlecoachBig" >
          <div class="singlecoachbox">
            <div class="singlecoach" v-for="(item,index) in coachlist" :key="index">
              <div class="singlecoachtop" :style="{backgroundImage:'url('+item.cover_name+')'}" @click="jump(item.id)">
                <img :src="item.logo_name" alt="">
              </div>
              <span @click="jump(item.id)">{{item.coach_name}}</span>
              <div class="singlecoachHoverbig">
                <div class="singlecoachHoverbox" :class="[index%4==2||index%4==3 ? 'activeClass' : '',item.son_coachs.length > 0?'maxWidth':'minWidth']">
                  <div class="singlecoachHover" v-if="index%4==0||index%4==1" @click="jump(item.id)">
                    <div class="singlecoachtop2">
                      <img :src="item.logo_white" alt="">
                    </div>
                    <div class="singlecoachspan">
                      <span>{{item.coach_name}}</span>
                      <span>
												<img src="../../../assets/img/money2.png" alt="" v-if="item.if_coupons==0">
												<img src="../../../assets/img/return3.png" alt="" v-if="item.if_back_money==0">
											</span>
                    </div>
                  </div>
                  <div class="littleCollage2" v-if="index%4==2||index%4==3" v-show="item.son_coachs.length > 0">
                    <p class="coachHeader">{{item.son_coachs.length}}个分校</p>
                    <div class="coachLittle">
                      <div class="coachLittleshort" v-for="(list,dd) in item.son_coachs" :key="dd">
                        <strong>{{dd+1}}</strong>
                        <span @click="jump(list.id)">{{list.coach_name}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="singlecoachHover" v-if="index%4==2||index%4==3" @click="jump(item.id)">
                    <div class="singlecoachtop2">
                      <img :src="item.logo_white" alt="">
                    </div>
                    <div class="singlecoachspan">
                      <span>{{item.coach_name}}</span>
                      <span>
												<img src="../../../assets/img/money2.png" alt="" v-if="item.if_coupons==0">
												<img src="../../../assets/img/return3.png" alt="" v-if="item.if_back_money==0">
											</span>
                    </div>
                  </div>
                  <div class="littleCollage" v-if="index%4==0||index%4==1" v-show="item.son_coachs.length > 0">
                    <p class="coachHeader">{{item.son_coachs.length}}个分校</p>
                    <div class="coachLittle">
                      <div class="coachLittleshort" v-for="(list,dd) in item.son_coachs" :key="dd">
                        <strong>{{dd+1}}</strong>
                        <span @click="jump(list.id)">{{list.coach_name}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 分页或者加载更多 -->
        <pcPhonePage class="pcPage" :loading="loading" :currentPage="pageNumber" :totalData="count" :size="pageCount" @use="changePageNum"
                     @getPage="getPage" ></pcPhonePage>
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
        all_loading: false, //该页面全局loading
        loading: false, //加载小圈圈
        pageNumber: 1,
        count: 0,
        pageCount: 20,
        load: 0,
        tags: [
          [],
          [],
          []
        ],
        list: [{
          type: "热门地区",
          cities: [],
          fif: "更多地区"
        },
          {
            type: "辅导形式",
            cities: [{
              name: "在线学习"
            },
              {
                name: "面对面授课"
              }
            ],
            fif: "更多辅导"
          },
          {
            type: "会员特权",
            cities: [{
              name: "专属优惠卷"
            },
              {
                name: "10天退款无忧"
              }
            ],
            fif: "更多特权"
          }
        ],
        checkboxGroup1: [
          [],
          [],
          []
        ],
        coachlist: [],
        inputvalue: ""
      }
    },
    methods: {
      //分页改变时触发事件
      changePageNum: function(currentPage2) {
        this.pageNumber = currentPage2;
        this.getCoach();
      },

      getPage: function() {
        this.loading = true;
        this.pageNumber++;
        this.load = 1;
        this.getCoach();
      },

      //标签栏，点击标签，删除标签
      handleClose(tag) {
        for (let index = 0; index < this.tags.length; index++) {
          var temp = this.tags[index].indexOf(tag);

          if (temp == -1) {
            continue;
          } else {
            this.tags[index].splice(this.tags[index].indexOf(tag), 1);

            this.change(this.tags)
          }
        }


      },


      //每次子组件改变时，父组件就会改变
      change: function(checkboxGroup) {
        this.pageNumber = 1; // 重制分页下标
        // console.log(checkboxGroup);
        //当选中全部时，清空当前行数组，通过*号匹配
        // let t = checkboxGroup

        this.tags = checkboxGroup.concat();

        // console.log(this.tags);
        /*let city = this.tags[0];
        console.log(city.name)
        this.tags[0] = new Array();

        if (city.name != undefined)
          this.tags[0][0] = city;
        else {

          this.$refs.select.checkboxGroup[0] = []
          // this.$refs.select.checkAll[0] = true;
          console.log(this.$refs.select.checkAll)
        }
        for (let index = 1; index < this.tags.length; index++) {
          if (this.tags[index].length == 0) {
            this.tags[index].splice(this.tags[index].indexOf("*"), 1);
          }
        }*/

        this.getCoach();
      },
      //跳转辅导机构详情页
      jump: function(id) {
        console.log(90);
        this.$router.push('/front/firstMenuRouter/searchCoach/singleCoachs/' + id);
      },
      //得到所有筛选过的辅导机构列表
      getCoach: function(key = 0) {
        if(key){
          this.pageNumber = 1; // 重制分页下标
        }

        var that = this;
        var str = '';
        let len = that.tags[0].length;
        for (let i = 0; i < len; i++) {
          // str = str + that.tags[0][i].name;
          str += that.tags[0][i].id+',';
        }

        let type = "";
        if (that.tags[1].length == 2) {
          type = 2;
        } else if (that.tags[1].length == 1) {
          if (that.tags[1][0].name == "在线学习") {
            type = 0;
          } else {
            type = 1;
          }
        }
        let back = 2;
        let coach = 2;
        if (that.tags[2].length == 2) {
          back = 2;
          coach = 2;
        } else if (that.tags[2].length == 1) {
          if (that.tags[2][0].name == "10天退款无忧") {
            back = 0; //0:支持
            coach = 1; //1:不支持
          } else {
            back = 1;
            coach = 0;
          }
        }

        this.all_loading = true;

        this.fetch('/front/coach/getcoach', {
          provice: str.substring(0,str.length-1),
          coach_type: type,
          coach_name: this.inputvalue,
          if_back: back,
          if_coupon: coach,
          page: that.pageNumber,
          page_size: that.pageCount
        }).then(function(res) {
          that.loading = false;
          // console.log(res);
          if (res.code == 0) {
            that.count = res.result[1];
            console.log(that.count);

            if (that.load == 1) {
              that.coachlist = that.coachlist.concat(res.result[0]);
            } else {
              that.coachlist = res.result[0];
            }
          } else {
            that.coachlist = [];
            that.count = 0;
            that.message(true, res.msg, "error");
          }
          that.all_loading = false;
        }).catch(function(error) {
          that.message(true, error, "error");
          that.all_loading = false;
        });
      },

      /**
       * 获取banner图
       */
      getBanner: function() {
        var that = this;
        this.fetch('/front/banner/getbanner', {
          b_name: '搜辅导页面',
          limit: 1,
          type: 0
        }).then(res => {

          if (res.code == 0) {

            that.$refs.header.setImg(res.result[0].img);
            that.$refs.header.setJudgeUlr(res.result[0].re_url);
          } else {
            that.message(true, res.msg, 'error')
          }
        })
      },

      /**
       * 获取省份
       */
      getRegion: function() {
        var that = this;
        this.fetch('/front/dict/getRegion', {
          type: 2,
        }).then((res) => {
          if (res.code == 0) {
            this.list[0].cities = res.result;
          } else {
            that.message(true, res.msg, 'error')
          }
        })
      }
    },
    mounted() {
      this.getCoach();

      this.getBanner();
      this.getRegion();
      this.$refs.header.setImg();
      this.$refs.header.setJudgeUlr();
    },
  };
</script>
<style>
  .el-checkbox-button__inner{
    font-weight: normal;
  }

  .publicRowRight .el-checkbox__label{
    line-height: normal !important;
  }
</style>
<style scoped>
  .coachInput {
    background: #fff;
    border: 1px solid #ccc;
    margin: 49px 10px 45px;
    padding: 7px 15px;
    border-radius: 20px;
  }

  .coachNav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 20px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.06);
    margin-bottom: 45px;
  }

  .coachNavleft {
    display: flex;
    justify-items: center;
    flex-wrap: wrap;
    justify-content: start;

  }

  .coachNavleft>span,
  .coachNavright>span {
    line-height: 32px;
    font-size: 16px;
    color: rgb(110, 110, 110);
    margin-right: 7px;
    margin-left: 7px;
  }

  .coachInput>input {
    border: none;
    outline: none;
    width: 245px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;

  }

  .coachInput>i {
    color: #c0c4cc;
  }

  .coachLittleshort {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .coachLittleshort>strong {
    background-color: #ffb957;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 11px;
  }

  .coachLittle {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 604px;
    overflow-y: scroll;
    height: 160px;
    margin-left: 47px;
    margin-top: 45px;
    font-size: 14px;
    font-weight: normal;
    color: rgb(255, 255, 254);
  }

  .coachLittle::-webkit-scrollbar {
    display: none;
  }

  .littleCollage {
    margin: 15px 0;
    border-left: 1px solid #ffb957;
  }

  .littleCollage2 {
    margin: 15px 0;
    border-right: 1px solid #ffb957;
  }

  .coachHeader {
    color: #ffb957;
    margin-left: 47px;
    margin-top: 25px;
  }

  .singlecoachHoverbox {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    background-color: rgba(56, 59, 61, 0.95);
    /*width: 955px;*/
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 5px;
  }

  .activeClass {
    top: 0;
    left: -650px;
  }

  .singlecoachHover {
    width: 305px;
    cursor: pointer;
  }

  .bigBox {
    background-color: rgb(245, 245, 245);
    padding-bottom: 10px;
  }

  .singlecoachBig {
    display: flex;
    justify-content: center;
  }

  .singlecoachbox {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .singlecoach {
    width: 305px;
    background-color: #fff;
    margin: 10px;
    position: relative;
    border-radius: 5px;
  }

  .singlecoachHoverbig {
    display: none;
  }

  .singlecoach:hover .singlecoachHoverbig {
    display: block;
  }

  .singlecoachtop2 {
    width: 100%;
    z-index: 2;
  }

  .singlecoachtop,
  .singlecoachtop2 {
    width: 100%;
    height: 253px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
  }

  .singlecoachtop>img {
    width: 180px;
  }

  .singlecoachtop2>img {
    width: 180px;
  }

  .singlecoach>span {
    display: inline-block;
    width: 100%;
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: rgba(56, 59, 61, 0.8);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }

  .singlecoachspan {
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
  }

  .singlecoachspan>span {
    margin: 0 20px;
    color: #ffb957;
    display: flex;
    align-items: center;
  }

  .singlecoachspan>span>img {
    margin-left: 10px;
  }

  .maxWidth{
    width: 955px;
  }

  .minWidth{
    width: auto;
    left: 0px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (max-width: 992px) {
    .activitypage {
      display: none;
    }
  }

  /** iPhone **/
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .singlecoach{
      width: 90%;
      margin: 10px auto;
    }

    .coachNav{
      padding-bottom: 13px;
      margin-bottom: 20px;
    }

    .coachInput{
      width: 100%;
      padding: 4px 12px;
      margin: 49px 10px 44px;
    }

    .coachInput>input{
      width: 93%;
    }

    .singlecoachBig{
      padding: 0 10px;
    }

    .coachNavleft>span, .coachNavright>span{
      font-size: 14px;
      font-weight: normal;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .singlecoachbox{
      width: 100%;
    }

    .singlecoach{
      width: 100%;
      overflow: hidden;
      margin-top: 0px;
      margin-bottom: 20px;
    }

    .singlecoachtop>img{
      width: 60%;
    }
    .singlecoachtop2>img{
      width: 60%;
    }
  }
</style>

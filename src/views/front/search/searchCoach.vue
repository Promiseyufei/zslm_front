<template>
    <div id="search_coach">
        <div class="div_rTx1Nf">
            <h1 class="c-heading heading_XwQWQq jieguohuodong">当前搜索关键字为“{{ keyword }}”，小助手找到了以下内容：</h1>
            <div class="coachs">
                <!--<searchCoachBox v-for="(item, index) in coachs" :key="index" :coachInfo="item"></searchCoachBox>-->
                  <div class="university" @click="putCoachDetail(item.id)" v-for="(item , index) in coachs" :key="index">
                    <div class="university-icon" @mouseover="overStyle(item,index)" @mouseout="outStyle(item,index)">
                      <img :src="item.logo_name" alt="">
                    </div>
                    <div class="university-footer">
                      <div class="footer-font">
                        {{ item.coach_name }}
                      </div>
                      <div class="tips">
                        点击进入辅导机构&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        <pcPhonePage :totalData="count" :size="pageCount" :currentPage="pageNumber" :loading="loading" @use="getCoach" @getPage="getPage"></pcPhonePage>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword:'',
            count: 0,
            loading: false,
            pageNumber: 1,
            pageCount:15,
            coachs: []
        }
    },
    methods: {
        getCoach(number) {
            this.pageNumber = number;
            this.fetch('/front/coach/getcoachbyname', {
                name: this.keyword,
                page: this.pageNumber,
                page_size: this.pageCount
            }).then((response) => {
                console.log(response)
                if(response.code == 0) {
                    this.count = response.result.count;
                    this.coachs = response.result.coachs;
                }
                else this.message(true, response.msg, 'info');
            })
        },
        getPage() {
            this.loading = true;
            this.pageNumber += 1;
            this.fetch('/front/coach/getcoachbyname', {
                name: this.keyword,
                page: this.pageNumber,
                page_size: this.pageCount
            }).then((response) => {
                if(response.code == 0) {
                    this.coachs = this.coachs.concat(response.result.coachs);
                }
                else this.message(true, response.msg, 'info');
            })
        },
        overStyle: function (item,index) {
          $($(".university-icon")[index]).css("background-image","url("+item.cover_name+")");
        },
        outStyle: function (item,index) {
          $($(".university-icon")[index]).css("background-image","");
        },
        putCoachDetail(coachId) {
          let routeUrl = this.$router.resolve({
            path:'/front/firstMenuRouter/searchCoach/singleCoachs/' + coachId,
          });
          window.open(routeUrl.href, '_blank');
        }
    },
    mounted() {
        if(typeof this.$route.params.keyword != 'undefined') {
            this.keyword = this.$route.params.keyword;
            this.$store.commit('changeSearch', {name:'keyword', val: this.$route.params.keyword});
        }
        this.$store.commit('changeSearch', {name:'nowUrl', val: this.getChangeUrl(this.$route.path)});
        this.getCoach(this.pageNumber);
    }
}
</script>

<style>
  .c-container{
    min-height: auto !important;
  }
  .university{
    width: 300px;
    height: 300px;
    margin-right: 15px;
    border-radius: 10px;
    cursor: pointer;
    float: left;
    margin-top: 33px;
    overflow: hidden;
  }
  .university:nth-child(3n){
    margin-right: 0px;
  }
  .university-icon{
    width: 100%;
    height: 255px;
    background-color: #FFFFFF;
    text-align:center
  }
  .university-icon > img{
    width: 90%;
    height: auto;
    margin-top: 60px;
  }
  .university-footer{
    width: 100%;
    height: 50px;
    background-color: #383b3d;
    border-radius: 0px 0px 5px 5px;
    opacity: 0.8;
  }
  .footer-font{
    width: 82%;
    font-family: MicrosoftYaHei-Bold;
    font-size: 19px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    line-height: 50px;
    margin: auto;
    white-space: nowrap;
  }
  .tips{
    width: 82%;
    font-family: MicrosoftYaHei-Bold;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 12px;
    letter-spacing: 0px;
    color: #fffffe;
    margin: auto;
    display: none;
  }
  .university:hover{
    box-shadow: 0px 0px 10px rgba(0,0,0,0.14);
  }
  .university:hover .university-icon{
    background-size: cover;
    height: 204px;
    transition: all 1s;
  }
  .university:hover img{
    margin-top: 45px;
    transition: all 1s;
  }
  .university:hover .tips{
    display: block;
    transition: all .5s;
  }
  .university:hover .university-footer{
    height: 101px;
    background-color: #ffb957;
    transition: all .5s;
  }

  @media (max-width: 760px) {
    .university{
      width: 100%;
      margin-right: 0px;
      margin-top: 20px;
    }

    .university-icon > img{
      margin-top: 35px;
    }

    .phoneLeadBtn{
      width: 100% !important;
      margin-top: 20px;
      margin-bottom: 20px !important;
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
  }
</style>
<style scoped>
.coachs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
#search_coach .div_rTx1Nf {
    padding-top: 10px;
    min-height: 80px;
}
#search_coach .div_rTx1Nf .heading_XwQWQq.jieguohuodong {
    margin-left: 10px;
    margin-bottom: 20px;
}
#search_coach .div_rTx1Nf .heading_XwQWQq {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: rgb(49, 49, 49);
    margin-top: 0px;
    margin-bottom: 10px;
}
#search_coach h1 {
    min-width: 10px;
    min-height: 10px;
}
</style>

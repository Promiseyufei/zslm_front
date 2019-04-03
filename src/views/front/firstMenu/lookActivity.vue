<template>
	<div>
		<hearderBanner ref="header" enName="COLLEGES" name="找活动"></hearderBanner>
		<!-- 活动列表模块 -->
		<div class="activityList">
			<!-- 搜索框 -->
			<div class="searchs">
				<el-input placeholder=" 请输入活动名称" suffix-icon="el-icon-search" v-model="keyword" @blur.prevent="getActivityList(2)"
				 class="pcSeach">
				</el-input>
				<el-input placeholder=" 请输入活动名称" suffix-icon="el-icon-search" v-model="keyword" @blur.prevent="getActivityList(1)"
				 class="phoneSeach">
				</el-input>
			</div>
			<!-- 筛选块 -->
			<div class="activitySelt">
				<selectAll :list='activitySelect' :checkboxGroup1='checkboxGroup' @change="change"></selectAll>
				<div class="selectedTag">
					<div class="selected" style="position: relative">
						<div class="slectedLeft">
							<span>找活动 &gt;</span>
							<tags :tags="seltData" @handleClose="handleClose"></tags>
						</div>
						<div style="position: absolute;right: 0;font-size: 14px;color: rgb(110, 110, 110);">
							<span>共{{count}}场活动</span>
						</div>
					</div>
				</div>
			</div>
			<div class="activityListBox">
				<div>
					<activityBox v-for="(item,index) in info" :key="index" :activityInfo="item"></activityBox>
				</div>
				<!-- 单个活动块 -->
			</div>
			<!-- 分页 -->
			<div v-if="info.length">
				<pcPhonePage class="pcPage" :loading="loading" :currentPage="pageNumber" :totalData="count" :size="pageCount" @use="changePageNum"
				 @getPage="getPage"></pcPhonePage>
			</div>
			<!-- <div class="pcPageDiv">
                <activityPage class="pcPage" :currentPage="pageNumber" :totalData="count" :size="pageCount" @use="changePageNum"></activityPage>
            </div>
            <div class="phoneLeadBtn">
                <el-button class="leadBtn" type="text" @click="getPage" :loading="loading" :disabled="disabled">{{ loadingBtnText }}</el-button>
            </div> -->
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				// 下垃加载按钮
				// phoneparam:{
				// loadingBtnText:'加载更多',
				// disabled:false,
				loading: false,
				// },

				allActivity: [], //存放所有活动数据数组

				keyword: '', //搜索关键字

				//已选择的列表数据---未处理
				seltData: [],
				//已选择的列表数据---已处理过
				activitySelected: [
					// {
					//     province:["北京","上海"],//选择的省份数组
					// },
					// {
					//     majorType:[0,1],//专业类型的id数组
					// },
					// {
					//     activityType:[0,1],//活动类型的id数组
					// },
					// {
					//     activityState:[0,1],//活动开始状态数组:0未开始 1进行中 2已结束
					// },
					// {
					//     activityDate:1,//月份 1~12
					// },
				],
				pageCount: 20, //分页显示的行数
				pageNumber: 1, //分页显示的下标

				count: 0, //筛选后活动总数

				info: [], //活动信息

				// 筛选块列表数据
				activitySelect: [{
						type: '专业类型',
						cities: [], //所有专业类型的id数组
						"fif": "查看更多"
					},
					{
						type: '活动省市',
						cities: [], //所有省份数组
						"fif": "查看更多"
					},
					{
						type: '活动类型',
						cities: [], //所有活动类型的id数组
					},
					{
						type: '活动状态',
						cities: [{
								id: 0,
								name: "未开始"
							},
							{
								id: 1,
								name: "进行中"
							},
							{
								id: 2,
								name: "已结束"
							},
						], //活动状态
						"fif": "查看更多"
					},
					{
						type: '活动时间',
						cities: [{
								id: 1,
								name: "本周"
							},
							{
								id: 2,
								name: "本月"
							},
						], //时间1-12月
						"fif": "查看更多"
					},
				],
				checkboxGroup: [
					[],
					[],
					[],
					[],
					[]
				],
			}
		},
		methods: {
			// 滑动加载按钮 pageNumber当前页
			getPage() {
				this.loading = true;
				this.pageNumber++;
				this.getActivityList(0);
			},

			// 活动列表页手机端---通过筛选条件获得的活动列表数据
			/**
			 * 获取活动列表内容
			 * @param  {[int]} val [0 手机端加载更多 1 手机端查询 2 电脑端查询]
			 */
			getActivityList: function(val , key = 0) {
			  /*if(val == 1 || val == 2){
          this.pageNumber = 1; // 重制分页下标
        }*/
			  if(key){
          this.pageNumber = key;
        }else{
          this.pageNumber = 1;
        }

				// console.log(this.activitySelected);
				var self = this;
				let state = val;
				if (state == 1) {
					self.allActivity = [];
				}
				this.fetch('/front/activity/getActivity', {
					keyword: self.keyword,
					majorType: self.activitySelected[0],
					province: self.activitySelected[1],
					activityType: self.activitySelected[2],
					activityState: self.activitySelected[3],
					activityDate: self.activitySelected[4],
					pageCount: self.pageCount,
					pageNumber: self.pageNumber
				}).then(function(res) {
					self.loading = false;
					if (res.code == 0) {
						self.count = res.result.count;
						let data = res.result.info;
						// console.log(state);
						//0 手机端加载更多 1 手机端查询 2 电脑端查询
						switch (state) {
							case 0:
							case 1:
								for (let i in data) {
									self.allActivity.push(data[i]);
								}
								self.info = self.allActivity;
								break;
							case 2:
								self.info = res.result.info;
								break;
							default:
								self.message(true, "加载失败，请重试", 'info');
								break;
						};
						// console.log(self.info);
					} else {
						self.message(true, "加载失败，请重试", 'info');
					}
				}).catch(function(error) {
					console.log("error");
				});
			},

			// 在活动列表页————筛选部分————获得活动的专业字典
			getCollegesType: function() {
				var self = this;
				this.fetch('/front/colleges/getCollegesType', {

				}).then(function(res) {
					// console.log(res);
					if (res.code == 0) {
						self.activitySelect[0].cities = res.result;
						// console.log(self.activitySelect[0].cities);
					} else {
						self.message(true, "加载失败，请重试", 'info');
					}
				}).catch(function(error) {
					console.log("error");
				});
			},

			// 筛选块-从组件中获取选中结果
			change(data) {
        this.pageNumber = 1; // 重制分页下标
				this.seltData = data;

				for (let index = 0; index < this.seltData.length; index++) {
					if (this.seltData[index].length == 0) {
						this.seltData[index].splice(this.seltData[index].indexOf("*"), 1);
					}
				}
				// console.log(data);
				this.getselt();
			},

			// 筛选选中删除，点击标签，删除标签
			handleClose(tag) {
				// console.log("---");
				// console.log(this.seltData.length);
				for (let index = 0; index < this.seltData.length; index++) {
					var temp = this.seltData[index].indexOf(tag);
					if (temp == -1) {
						continue;
					} else {
						this.seltData[index].splice(this.seltData[index].indexOf(tag), 1);
					}
				};
				this.getselt();
			},

			//转换选中参数的格式——数组，以便传参
			getselt: function() {
				let list = [];
				for (var i = 0; i < this.seltData.length; i++) {
					var little = [];
					for (var j = 0; j < this.seltData[i].length; j++) {
						if (i == 1)
							little.push(this.seltData[i][j].name);
						else
							little.push(this.seltData[i][j].id);
					}
					list.push(little);
				}

				this.activitySelected = list;
				// console.log(this.activitySelected)
				// for (var i = 0; i < this.activitySelected.length; i++) {
				//     console.log(this.activitySelected[i]);
				// }
				this.getActivityList(2);
			},

			// 电脑点击改变分页值
			changePageNum(pageNum) {
				// this.getPcActivityList();
				this.getActivityList(2 , pageNum);
			},

			/**
			 * 获取banner图
			 */
			getBanner: function() {
				var that = this;
				this.fetch('/front/colleges/getMajorBanner', {
					path: that.$route.path
				}).then(res => {
					if (res.code == 0) {
						that.$refs.header.setImg(res.result.img);
						that.$refs.header.setJudgeUlr(res.result.re_url);
					} else {
						that.message(true, res.msg, 'error')
					}
				})
			},

      /**
       * 获取城市
       */
      getRegion:function(){
        this.fetch('/front/dict/getRegion', {
          type:3
        }).then((res) => {
          if (res.code == 0) {
            this.activitySelect[1].cities = res.result;
          } else {
            this.message(true, res.msg, 'error')
          }
        })
      },

      /**
       * 获取专业类型
       */
      getMajorType:function(){
        this.fetch('/front/dict/getMajorType', {
          type:3
        }).then((res) => {
          if (res.code == 0) {
            this.activitySelect[0].cities = res.result;
          } else {
            this.message(true, res.msg, 'error')
          }
        })
      },

      /**
       * 获取活动类型
       */
      getActivityType:function(){
        this.fetch('/front/dict/getActivityType', {}).then((res) => {
          if (res.code == 0) {
            this.activitySelect[2].cities = res.result;
          } else {
            this.message(true, res.msg, 'error')
          }
        })
      },

		},
		mounted() {
			// console.log(this.phoneparam.loading);
			this.getCollegesType();
			// this.getActivityType();

			this.getRegion();
			this.getMajorType();
			this.getActivityType();

			this.getActivityList(1);
			this.getActivityList(2);

			this.getBanner();
			this.$refs.header.setImg();
			this.$refs.header.setJudgeUlr();
			// this.getPcActivityList();
		},
		created () {
			this.changeTile('找活动 | 管理类专硕招生活动：MBA、MPA、MPAcc、MEM、MAud、MTA、MLIS')
			// document.title = '专硕联盟-找活动';
		}
	};
</script>
<style>
	/*搜索框*/
	.searchs .el-input__inner {
		border-radius: 60px;
		height: 32px;
	}

	.searchs .el-input__icon {
		line-height: 0;
	}

  .publicRowRight .el-checkbox__label{
    line-height: normal !important;
  }

	.searchs>div {
		width: 407px;
		/*margin: 20px 0;*/
		margin: 49px 0 44px 0;
		/*margin-top: 49px;*/
		/*margin-bottom: 44px;*/
	}
	/* 设置输入框获取焦点时的颜色 */
	.searchs .el-input.is-active .el-input__inner, .el-input__inner:focus {
		border-color: #1abc9c ;
	}
</style>
<style scoped>



	.searchs,
	.activitySelt .selectedTag,
	.selectedTag .selected,
	.activityListBox,
	.activityListBox>div {
		display: flex;
		/*justify-content: center;*/
		align-items: center;
		flex-wrap: wrap;
    margin: 0 auto;
	}

	/*筛选块*/

	.selectedTag .selected {
		width: 95%;
		min-height: auto;
		border-bottom: 2px solid rgba(0, 0, 0, 0.06);
		color: rgb(110, 110, 110);
		justify-content: space-between;
		padding-bottom: 19px;
		margin-bottom: 48px;
	}

	.selected .slectedLeft {
		display: flex;
		align-items: center;
		min-height: auto;
		width: 90%;
	}

	.slectedLeft span {
		margin-left: 7px;
		margin-right: 7px;
		min-width: 60px;
    font-size: 14px;
	}

	.activityList {
		width: 100%;
		overflow: hidden;
		background-color: rgb(245, 245, 245);
	}

	.activityListBox>div {
		margin-bottom: 20px;
	}

  .searchs .phoneSeach {
    display: none;
  }

	@media only screen and (max-width: 767px) {
		.searchs .pcSeach {
			display: none;
		}

		.searchs>div {
			width: 100%;
			margin: 49px auto 44px;
		}
	}

	/*iPad活动列表样式-覆盖子组件活动块宽度*/
	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		.activityListBox .activityBox {
			width: 47%;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		.searchs {
			margin: 0 auto;
		}

		/*整体布局：搜索块、筛选结果块、活动列表块*/
		.searchs,
		.selectedTag .selected,
		.activityListBox>div {
			width: 1300px;
      margin: 0 auto;
		}

    .activityListBox>div{
      margin: 20px auto;
    }
	}

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 320px) and (max-width: 767px) {

    /*搜索-判断手机还是电脑的请求*/
    .searchs .pcSeach {
      display: none;
    }

    .searchs .phoneSeach {
      display: block;
    }

    /*搜索框样式*/
    .searchs {
      margin-left: 10px;
      margin-right: 10px;
      justify-content: left;
    }

    .selectedTag .selected{
      margin-bottom: 20px;
    }
  }
</style>

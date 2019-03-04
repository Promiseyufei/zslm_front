<template>
	<div>
		<div style="overflow-x:hidden;background-color:#f5f5f5;">
			<hearderBanner ref="header" enName="COLLEGES" name="选院校"></hearderBanner>
			<div class="selectCollege">
				<div class="selectCollegeSearch">
					<el-input placeholder="请输入院校名称" suffix-icon="el-icon-search" v-model="z_name" @blur.prevent="search">
					</el-input>
				</div>
			</div>
			<selectHeadItem ref="select" :checkboxGroup1="checkboxGroup" :list="collegeInform" @change="change"></selectHeadItem>
			<div class="tagSort">
				<div class="tag">
					<span>选院校 &gt;</span>
					<tags :tags="selectData" @handleClose="handleClose"></tags>
				</div>
				<div class="sort">
					<div class="paixu" id="paixu" style="color: #009fa0;" @click="paixu">默认排序</div>
					<div class="hot" @click="changeHot">
						<div>热度</div>
						<div class="topBott">
							<i style="color: #bfbfbf;" class="el-icon-caret-top" id="hotTop"></i>
							<i style="color: #bfbfbf;" class="el-icon-caret-bottom" id="hotBottom"></i>
						</div>
					</div>
					<div class="publicMoney" @click="changeMoney">
						<div class="publicCost">费用</div>
						<div class="topBott">
							<i style="color: #bfbfbf;" class="el-icon-caret-top" id="moneyTop"></i>
							<i style="color: #bfbfbf;" class="el-icon-caret-bottom" id="moneyBottom"></i>
						</div>
					</div>
					<div class="countMajor">共{{ this.count }}所院校</div>
				</div>
			</div>
			<div class="buttonCollege"></div>
			<div class="diffeCollege">
				<el-col :span="8">
					<el-card shadow="hover">
						<!-- 每个院校情况组件 -->
						<selectCollegeItem v-for="(all, index) in majorInform" :key="index" :collegeInfo="all" :followId="major_follow_id"
						 :confirmId="major_confirm_id" @getViewIcon="getView" :missPorduct="missPorduct"></selectCollegeItem>
						<!-- 每个院校情况组件 -->
					</el-card>
				</el-col>
			</div>

		</div>
		<!-- 分页 -->
		<div class="page">
			<pcPhonePage :loading="loading" :currentPage="page" :totalData="count" :size="page_size" @use="changePageNum"
			 @getPage="getPage"></pcPhonePage>
		</div>
		<!-- 分页 -->
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				//加载更多
				loading: false,
				selectData: [], //tags数组
				collegeInform: [{
						type: '专业类型',
						cities: [], //所有专业类型的id数组
						"fif": "查看更多"
					},
					{
						type: '专业方向',
						cities: [], //所有专业类型的id数组
						"fif": "查看更多"
					},
					{
						type: '院校地点',
						cities: [{
								id: 1,
								name: "北京"
							},
							{
								id: 2,
								name: "天津"
							},
							{
								id: 3,
								name: "上海"
							},
							{
								id: 4,
								name: "重庆"
							},
							{
								id: 5,
								name: "河北"
							},
							{
								id: 6,
								name: "山西"
							},
							{
								id: 7,
								name: "台湾"
							},
							{
								id: 8,
								name: "辽宁"
							},
							{
								id: 9,
								name: "吉林"
							},
							{
								id: 10,
								name: "黑龙江"
							},
							{
								id: 11,
								name: "江苏"
							},
							{
								id: 12,
								name: "浙江"
							},
							{
								id: 13,
								name: "安微"
							},
							{
								id: 14,
								name: "福建"
							},
							{
								id: 15,
								name: "江西"
							},
							{
								id: 16,
								name: "山东"
							},
							{
								id: 17,
								name: "河南"
							},
							{
								id: 18,
								name: "湖北"
							},
							{
								id: 19,
								name: "湖南"
							},
							{
								id: 20,
								name: "广东"
							},
							{
								id: 21,
								name: "甘肃"
							},
							{
								id: 22,
								name: "四川"
							},
							{
								id: 23,
								name: "贵州"
							},
							{
								id: 24,
								name: "海南"
							},
							{
								id: 25,
								name: "云南"
							},
							{
								id: 26,
								name: "青海"
							},
							{
								id: 27,
								name: "陕西"
							},
							{
								id: 28,
								name: "广西"
							},
							{
								id: 29,
								name: "西藏"
							},
							{
								id: 30,
								name: "宁夏"
							},
							{
								id: 31,
								name: "新疆"
							},
							{
								id: 32,
								name: "内蒙古"
							},
							{
								id: 33,
								name: "澳门"
							},
							{
								id: 34,
								name: "香港"
							},
						], //所有专业类型的id数组
						"fif": "查看更多"
					},
					{
						type: '统招模式',
						cities: [{
							id: 0,
							name: ''
						}], //所有专业类型的id数组
						"fif": "查看更多"
					},
					{
						type: '学习费用',
						cities: [{
								id: 0,
								name: '5万'
							},
							{
								id: 1,
								name: '10万'
							},
							{
								id: 2,
								name: '15万'
							},
							{
								id: 3,
								name: '20万'
							},
							{
								id: 4,
								name: '25万'
							},
							{
								id: 5,
								name: '30万'
							},
							// {
							// 	id:6,
							// 	name:'30万及以上'
							// }
						], //所有专业类型的id数组
						"fif": "查看更多"
					},
					{
						type: '分数线',
						cities: [], //所有专业类型的id数组
						"fif": "查看更多"
					},
				],
				checkboxGroup_region_index: 2,
				checkboxGroup: [
					[],
					[],
					[],
					[],
					[],
					[]
				],
				major_follow_id: '',
				major_confirm_id: '',
				viewMoreIcon: true,
				missPorduct: 0,
				// showProduct:[],
				/*按钮参数*/
				provice: '',
				z_type: '',
				z_name: '',
				professional_direction: '',
				major_order: 0,
				min: 0,
				max: 0,
				money_order: 0,
				score_type: '',
				enrollment_mode: '',
				project_count: 0,
				page: 1,
				page_size: 3,
				count: 10,
				productShow: false,
				/*按钮参数*/
				viewMoreButt: '查看更多',
				majorInform: [],
				nature: null,
				equis: false,
				aascb: false,
				//211
				two: false,
				//985
				nine: false,
				//双一流
				both29: false,
				moreMajor: false,
				update_time: 1996,
				/*院校信息*/
				u_id: 1,
				id: 1,
				majorBanner: {}
			}
		},
		methods: {
			//手机端加载更多
			getPage: function() {
				this.loading = true;
				this.page++;
				this.getmajorInform(0);
			},
			// 点击筛选块-从组件中获取选中结果
			change(data) {

				this.page = 1;
				this.getAllCollege(data);
			},
			getAllCollege(data) {
				
				this.selectData = data;
				
				
				let city = this.selectData[this.checkboxGroup_region_index];

				if (Array.isArray(city) && city.length == 0) {
			
					this.$refs.select.deleteCheck(this.checkboxGroup_region_index);
					// checkboxGroup_region_index = 2,这里下标是2,在checkboxGroup数组中下标为2的元素存放着地址，如果不是2请修改
					// this.checkboxGroup[this.checkboxGroup_region_index] = []
					
				}

				if (city.name != undefined) {
					this.selectData[this.checkboxGroup_region_index][0] = [];
					this.selectData[this.checkboxGroup_region_index][0].id = city.id;
					this.selectData[this.checkboxGroup_region_index][0].id = city.name;
				}


				// 				if(city.name == undefined){
				// 					
				// 					
				// 					this.$refs.select.checkboxGroup[this.checkboxGroup_region_index] = []
				// 				}

				// 				this.getselt();
				// 				this.getmajorInform();
			},
			handleClose(tag) {

				for (let index = 0; index < this.selectData.length; index++) {
					var temp = this.selectData[index].indexOf(tag);
					if (temp == -1) {
						continue;
					} else {
						this.selectData[index].splice(this.selectData[index].indexOf(tag), 1);
					}
				};
				this.change(this.selectData)

			},
			//转换选中参数的格式——数组，以便传参
			getselt: function() {
				let list = [];
				for (var i = 0; i < this.selectData.length; i++) {
					var little = [];
					for (var j = 0; j < this.selectData[i].length; j++) {
						if (i == 4 || i == 2) {
							little.push(this.selectData[i][j].name);
							// little.push(this.selectData[i][j].name);

						} else {
							little.push(this.selectData[i][j].id);
						}
					}
					list.push(little);
				}
				this.z_type = list[0].join(","); //专业类型——字符串
				this.professional_direction = list[1].join(","); //专业方向——字符串

				this.provice = list[2]; //院校地点——字符串
				this.enrollment_mode = list[3].join(","); //统招模式——字符串
				this.max = list[4]; //学习费用——int
				// console.log(list[4])
				if (list[4].length > 0 && list[4].length == 1) {
					this.min = 0;
					this.max = parseInt(list[4][0]);
				} else if (list[4].length > 0 && list[4].length == 2) {
					this.min = (parseInt(list[4][0]) >= parseInt(list[4][1])) ? parseInt(list[4][1]) : parseInt(list[4][0]);
					this.max = (parseInt(list[4][0]) >= parseInt(list[4][1])) ? parseInt(list[4][0]) : parseInt(list[4][1]);
				} else if (list[4].length > 2) {
					this.min = this.max = parseInt(list[4][0]);
					for (let index = 1; index < list[4].length; index++) {
						if (this.min > parseInt(list[4][index])) this.min = parseInt(list[4][index]);
						if (this.max <= parseInt(list[4][index])) this.max = parseInt(list[4][index]);
					}
				}
				this.score_type = list[5].join(","); //分数线——字符串
			},
			//获取按钮内容
			getmajorType: function() {
				let that = this;
				this.fetch('/front/colleges/info', {}).then(function(response) {
					if (response.code == 0) {
						let res = response.result;
						that.collegeInform[0].cities = res.type;
						that.collegeInform[1].cities = res.direction;
						that.collegeInform[3].cities = res.pattern;
						that.collegeInform[5].cities = res.socre;
					}
					// console.log(res)
				}).catch(function(error) {});
			},
			//查看更多是否显示
			getView: function(iconView) {
				// console.log(iconView)
				this.viewMoreIcon = iconView;
			},
			//分页请求
			changePageNum: function(pageNum) {
				this.page = pageNum;
				this.getmajorInform();
			},
			//搜索框失去焦点——传搜索内容
			search: function() {
				this.getmajorInform();
			},
			//获得院校信息
			getmajorInform: function() {
				let that = this;
				this.fetch('/front/colleges/getmajor', {
					//搜索内容fetc
					z_name: that.z_name,
					provice: that.provice,
					z_type: that.z_type,
					professional_direction: that.professional_direction,
					major_order: that.major_order,
					min: that.min,
					max: that.max,
					money_order: that.money_order,
					score_type: that.score_type,
					enrollment_mode: that.enrollment_mode,
					project_count: that.project_count,
					page: that.page,
					page_size: that.page_size,
				}).then(function(response) {
					if (response.code == 0) {
						// console.log(response)
						let res = response.result.list;
						that.count = response.result.count;
						that.majorInform = res;
						that.majorInform.forEach((item, index) => {
							that.majorInform[index].showProduct = item.product.slice(0, 3);
							that.majorInform[index].missPorduct = item.product.slice(3);
							// if (that.majorInform[index].missPorduct==0) {
							// }
							that.missPorduct = that.majorInform[index].missPorduct;
						});
						that.major_confirm_id = res[0].major_confirm_id;
						that.major_follow_id = res[0].major_follow_id;
					} else {

						that.count = 0;
						that.majorInform = [];
						that.major_confirm_id = '';
						that.major_follow_id = '';
					}

				})
			},
			//默认排序
			paixu: function() {
				let hotTop = document.getElementById('hotTop');
				let hotBottom = document.getElementById('hotBottom');
				let moneyTop = document.getElementById('moneyTop');
				let moneyBottom = document.getElementById('moneyBottom');
				hotTop.style.color = '#bfbfbf';
				hotBottom.style.color = '#bfbfbf';
				moneyBottom.style.color = '#bfbfbf';
				moneyTop.style.color = '#bfbfbf';
				let paixu = document.getElementById('paixu');
				if (paixu.style.color = 'rgb(191, 191, 191)') {
					paixu.style.color = '#009fa0';
				} else {
					paixu.style.color = '#bfbfbf';
				}
				this.getmajorInform();
			},
			//点击热度改变颜色，排序
			changeHot: function() {
				let paixu = document.getElementById('paixu');
				paixu.style.color = '#bfbfbf';
				let hotTop = document.getElementById('hotTop');
				let hotBottom = document.getElementById('hotBottom');
				if (hotTop.style.color == 'rgb(191, 191, 191)' && hotBottom.style.color == 'rgb(191, 191, 191)') {
					// console.log(paixu.style.color)
					//首次点击热度，升序，1为升序
					this.major_order = 1;
					this.getmajorInform();
					hotTop.style.color = '#009fa0'; //绿色rgb(0, 159, 160)
					hotBottom.style.color = '#bfbfbf'; //灰色rgb(191, 191, 191)
				} else if (hotTop.style.color == 'rgb(0, 159, 160)' && hotBottom.style.color == 'rgb(191, 191, 191)') {
					//再次点击，降序，0为降序
					this.major_order = 0;
					this.getmajorInform();
					hotTop.style.color = '#bfbfbf';
					hotBottom.style.color = '#009fa0';
				} else if (hotTop.style.color == 'rgb(191, 191, 191)' || hotBottom.style.color == 'rgb(0, 159, 160)') {
					//循环点击，升序，1为升序
					this.major_order = 1;
					this.getmajorInform();
					hotBottom.style.color = '#bfbfbf';
					hotTop.style.color = '#009fa0';
				}
			},
			//点击费用改变颜色，排序
			changeMoney: function() {
				let paixu = document.getElementById('paixu');
				paixu.style.color = '#bfbfbf';
				let hotTop = document.getElementById('moneyTop');
				let hotBottom = document.getElementById('moneyBottom');
				if (moneyTop.style.color == 'rgb(191, 191, 191)' && moneyBottom.style.color == 'rgb(191, 191, 191)') {
					//首次点击费用，升序，1为升序
					this.money_order = 1;
					this.getmajorInform();
					moneyTop.style.color = '#009fa0'; //绿色rgb(0, 159, 160)
					moneyBottom.style.color = '#bfbfbf'; //灰色rgb(191, 191, 191)
				} else if (moneyTop.style.color == 'rgb(0, 159, 160)' && moneyBottom.style.color == 'rgb(191, 191, 191)') {
					//再次点击费用，降序，0为降序
					this.money_order = 0;
					this.getmajorInform();
					moneyTop.style.color = '#bfbfbf';
					moneyBottom.style.color = '#009fa0';
				} else if (moneyTop.style.color == 'rgb(191, 191, 191)' || moneyBottom.style.color == 'rgb(0, 159, 160)') {
					//循环点击，升序，1为升序
					this.money_order = 1;
					this.getmajorInform();
					// console.log(this.money_order)
					moneyBottom.style.color = '#bfbfbf';
					moneyTop.style.color = '#009fa0';
				}
			}
		},
		mounted() {
			let that = this;
			this.fetch('/front/banner/getbanner', {
				b_name: this.$route.path,
				limit: 1,
				type: 0
			}).then((response) => {
				if (response.code == 0) {
					that.$refs.header.setImg(response.result.img);
					that.$refs.header.setJudgeUlr(response.result.re_url);
				}
			})
			this.getmajorInform();
			this.getmajorType();

		},
		created() {
			this.changeTile('专硕联盟-选院校')
		}
	};

</script>
<style>
	.moreInform i {
		font-size: 13px !important;
	}

	/*不同院校*/
	.selectCollegeSearch .el-input__icon {
		font-size: 16px;
		line-height: 30px;
		/*padding-bottom: 5px;*/
	}

	.moreInform:hover {
		color: #009fa0;
		cursor: pointer;
	}

	.viewMore {
		width: 1230px;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		color: #a4a4a4;
	}

	.diffeCollege .fa {
		font-size: 18px;
		color: #7f7f7f;
		margin-right: 8px;
	}

	.diffeCollege .el-col-8 {
		width: 1280px;
		margin-bottom: 60px;
	}

	.selectCollegeSearch .el-input__inner {
		border-radius: 60px;
		height: 32px;
	}

	.selectCollege .el-input__icon {
		line-height: 30px;
	}
</style>
<style scoped>
	.tag span {
		font-size: 16px;
		color: rgb(110, 110, 110);
		margin: 0 7px;
	}

	/*分页*/
	.page {
		padding: 0 0 56px;
		width: 100%;
		background-color: #f5f5f5;
	}

	.page>>>.apartPage {
		margin: 0;
	}

	/*排序 */
	.topBott .el-icon-caret-top,
	.topBott .el-icon-caret-bottom {
		/*color: #bfbfbf;*/
		font-size: 16px;
	}

	.topBott .el-icon-caret-bottom {
		/*color: #bfbfbf;*/
	}

	.hot {
		margin: 0 30px;
	}

	.hot,
	.publicMoney {
		display: flex;
		align-items: center;
		color: #6e6e6e;
		font-size: 16px;
	}

	.countMajor {
		font-size: 16px;
		color: #6e6e6e;
		font-weight: bold;
	}

	.tagSort {
		display: flex;
		justify-content: space-between;
		width: 1280px;
		margin: 0 auto 20px;
	}

	.tag {
		display: flex;
		align-items: center;
		width: 70%;
	}

	.paixu {
		font-size: 16px;
		font-weight: bold;
	}

	.topBott i {
		height: 7px;
	}

	.topBott {
		margin: 0 0 6px 5px;
		display: flex;
		flex-direction: column;
	}

	.hot,
	.publicMoney,
	.paixu {
		cursor: pointer;
	}

	.sort {
		display: flex;
		width: 400px;
		height: 22px;
		justify-content: space-between;
		align-items: center;
	}

	/*排序*/

	/*不同院校——院校信息*/
	.allInforma {
		margin-bottom: 40px;
		border-bottom: 1px solid #efefef;
		padding-bottom: 40px;
	}

	.moneyType p {
		/*padding: 0 5px 5px 0;*/
		height: 21px;
		line-height: 21px;
	}

	.forThree {
		display: flex;
		flex-wrap: wrap;
	}

	.moneyType p,
	.state,
	.interval {
		font-size: 14px;
		color: #6e6e6e;
	}

	.interval {
		margin: 10px 0 10px 0;
	}

	.money {
		margin: 0 44px 0 11px;
	}

	.bold {
		margin-left: 18px;
	}

	.type {
		margin-left: 14px;
	}

	.money,
	.type,
	.bold {
		font-size: 14px;
		font-weight: bold;
		color: #6e6e6e;
	}

	.international {
		height: 19px;
		margin-bottom: 21px;
		font-size: 18px;
		color: #009fa0;
	}

	.moneyType {
		display: flex;
	}

	.specificInform {
		width: 375px;
		padding: 30px 0 30px 25px;
		margin: 0 10px 10px 0;
		background-color: #f5f5f5;
		border-radius: 5px;
	}

	.forY {
		display: flex;
	}

	.collegeInform {}

	.diffeCollege {
		margin: 0 auto;
		width: 1280px;
	}

	.buttonCollege {
		width: 1280px;
		height: 2px;
		background-color: #009fa0;
		opacity: 0.06;
		margin: 19px auto 48px;
	}

	/*不同院校——院校信息*/


	/*不同院校——图片信息*/
	.joinContrast .el-button {
		width: 120px;
		height: 44px;
		border: 2px solid #0fa5a6;
		color: #0fa5a6;
	}

	h1 {
		display: block;
		font-size: 2em;
		margin-block-start: 0.67em;
		margin-block-end: 0.67em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
	}

	h1 {
		font-size: 36px;
	}

	p,
	h1,
	h2,
	h3,
	h4 {
		min-width: 10px;
		min-height: 10px;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	a {
		font-family: "Microsoft YaHei", "Hiragino Sans GB", SimHei, STHeiti;
	}

	img,
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}

	h1,
	.h1 {
		font-size: 36px;
	}

	h1,
	.h1,
	h2,
	.h2,
	h3,
	.h3 {
		margin-top: 20px;
		margin-bottom: 10px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	.h1,
	.h2,
	.h3,
	.h4,
	.h5,
	.h6 {
		font-family: inherit;
		font-weight: 500;
		line-height: 1.1;
		color: inherit;
	}

	h1 {
		margin: .67em 0;
		font-size: 2em;
	}

	:before,
	:after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	:before,
	:after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.col-xs-1,
	.col-sm-1,
	.col-md-1,
	.col-lg-1,
	.col-xs-2,
	.col-sm-2,
	.col-md-2,
	.col-lg-2,
	.col-xs-3,
	.col-sm-3,
	.col-md-3,
	.col-lg-3,
	.col-xs-4,
	.col-sm-4,
	.col-md-4,
	.col-lg-4,
	.col-xs-5,
	.col-sm-5,
	.col-md-5,
	.col-lg-5,
	.col-xs-6,
	.col-sm-6,
	.col-md-6,
	.col-lg-6,
	.col-xs-7,
	.col-sm-7,
	.col-md-7,
	.col-lg-7,
	.col-xs-8,
	.col-sm-8,
	.col-md-8,
	.col-lg-8,
	.col-xs-9,
	.col-sm-9,
	.col-md-9,
	.col-lg-9,
	.col-xs-10,
	.col-sm-10,
	.col-md-10,
	.col-lg-10,
	.col-xs-11,
	.col-sm-11,
	.col-md-11,
	.col-lg-11,
	.col-xs-12,
	.col-sm-12,
	.col-md-12,
	.col-lg-12 {
		position: relative;
		min-height: 1px;
		padding-right: 15px;
		padding-left: 15px;
	}

	.col-xs-12 {
		width: 100%;
	}

	.col-xs-3 {
		width: 25%;
	}

	.col-xs-1,
	.col-xs-2,
	.col-xs-3,
	.col-xs-4,
	.col-xs-5,
	.col-xs-6,
	.col-xs-7,
	.col-xs-8,
	.col-xs-9,
	.col-xs-10,
	.col-xs-11,
	.col-xs-12 {
		float: left;
	}

	.container {
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	.container-fluid {
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	.c-section,
	.c-container,
	.c-container-1,
	.c-container-2,
	.c-row,
	.c-column,
	.c-div,
	.c-list,
	.c-listitem,
	.c-tabpane {
		min-height: 80px;
	}

	.row {
		margin-right: -15px;
		margin-left: -15px;
	}

	.c-row {
		word-spacing: -4px;
	}

	.c-row {
		margin-left: 0;
		margin-right: 0;
		padding-right: 0;
		padding-left: 0;
	}

	.c-column {
		word-spacing: normal;
	}

	a {
		color: #428bca;
		text-decoration: none;
	}

	a {
		background: 0 0;
	}

	:before,
	:after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	:before,
	:after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.col-xs-1,
	.col-sm-1,
	.col-md-1,
	.col-lg-1,
	.col-xs-2,
	.col-sm-2,
	.col-md-2,
	.col-lg-2,
	.col-xs-3,
	.col-sm-3,
	.col-md-3,
	.col-lg-3,
	.col-xs-4,
	.col-sm-4,
	.col-md-4,
	.col-lg-4,
	.col-xs-5,
	.col-sm-5,
	.col-md-5,
	.col-lg-5,
	.col-xs-6,
	.col-sm-6,
	.col-md-6,
	.col-lg-6,
	.col-xs-7,
	.col-sm-7,
	.col-md-7,
	.col-lg-7,
	.col-xs-8,
	.col-sm-8,
	.col-md-8,
	.col-lg-8,
	.col-xs-9,
	.col-sm-9,
	.col-md-9,
	.col-lg-9,
	.col-xs-10,
	.col-sm-10,
	.col-md-10,
	.col-lg-10,
	.col-xs-11,
	.col-sm-11,
	.col-md-11,
	.col-lg-11,
	.col-xs-12,
	.col-sm-12,
	.col-md-12,
	.col-lg-12 {
		position: relative;
		min-height: 1px;
		padding-right: 15px;
		padding-left: 15px;
	}

	.col-xs-12 {
		width: 100%;
	}

	.col-xs-3 {
		width: 25%;
	}

	.col-xs-1,
	.col-xs-2,
	.col-xs-3,
	.col-xs-4,
	.col-xs-5,
	.col-xs-6,
	.col-xs-7,
	.col-xs-8,
	.col-xs-9,
	.col-xs-10,
	.col-xs-11,
	.col-xs-12 {
		float: left;
	}

	.column_Pmqzmn {
		padding-left: 10px;
		padding-right: 10px;
	}

	.c-column {
		word-spacing: normal;
	}

	.column_aLEhx8 {
		padding-left: 10px;
		padding-right: 10px;
	}


	.div_v60iAm.guanzhu {
		padding-left: 25px;
		padding-right: 25px;
		margin-bottom: 10px;
	}

	.div_v60iAm {
		background-color: rgb(255, 255, 255);
		border-radius: 5px;
		border-style: none;
		padding-left: 30px;
		padding-right: 30px;
		transform: rotate(0deg) scale(1) translate(0%, 0%);
		transition: All 0.3s ease;
		-ms-transform: rotate(0deg) scale(1) translate(0%, 0%);
		-o-transform: rotate(0deg) scale(1) translate(0%, 0%);
		-moz-transform: rotate(0deg) scale(1) translate(0%, 0%);
		-webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
		-ms-transition: All 0.3s ease;
		-o-transition: All 0.3s ease;
		-moz-transition: All 0.3s ease;
		-webkit-transition: All 0.3s ease;
	}

	.div_lPV1oN.guanzhu {
		border-bottom-style: none;
		border-top-style: none;
		border-right-style: none;
		border-left-style: none;
	}

	.div_lPV1oN {
		padding-top: 40px;
		margin-bottom: 0px;
		padding-bottom: 40px;
		border-bottom: 1px solid rgb(239, 239, 239);
		border-bottom-color: rgba(239, 239, 239, 1);
	}

	.div_BMsaOd.guanzhu {
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		margin-bottom: 0px;
	}

	.div_BMsaOd {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: end;
		-ms-flex-align: end;
		align-items: flex-end;
		margin-bottom: 30px;
		padding-right: 5px;
		padding-left: 5px;
	}

	.div_ARD2As {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.imageblock_VRWtPr {
		width: 106px;
		height: 106px;
	}

	.c-imageblock {
		width: 100px;
		height: 100px;
	}

	.c-inlineblock {
		display: inline-block;
	}

	.button_LsM2yn123.quguan {
		margin-top: 5px;
		border-radius: 5px;
		color: rgb(191, 191, 191);
		background-color: transparent;
		border-color: rgb(220, 220, 220);
		font-weight: bold;
	}

	.c-button {
		background-color: #000000;
		color: #FFFFFF;
	}

	.btn {
		display: inline-block;
		padding: 6px 12px;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.42857143;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-image: none;
		border: 1px solid transparent;
		border-radius: 4px;
	}

	.button_LsM2yn123.quguan:hover {
		background-color: rgb(255, 185, 87);
		color: #ffffff;
		text-decoration: none;
	}


	.div_Sd6WRB {
		padding-left: 5px;
		padding-right: 5px;
		margin-left: 110px;
		min-height: auto;
		margin-top: 18px;
	}

	.div_PiRYSQ {
		min-height: auto;
		overflow: hidden;
		text-align: right;
		height: auto !important;
	}




	.c-action-click {
		cursor: pointer;
	}



	a:-webkit-any-link {
		color: -webkit-link;
		cursor: pointer;
		text-decoration: none;
	}

	.textlink_wzNM3e {
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: rgb(160, 160, 160);
		width: auto;
		-webkit-box-flex: 0;
		-ms-flex: 0 1 auto;
		flex: 0 1 auto;
		background-image: url(http://qty83k.creatby.com/materials/2771/origin/2239e95017c6ccff0186655f567ba350_origin.png);
		background-repeat: no-repeat;
		background-position: 100% 50%;
		margin-top: 0px;
		padding-right: 16px;
		margin-left: 5px;
		-ms-flex-positive: 0;
		flex-grow: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		-ms-flex-preferred-size: auto;
		flex-basis: auto;
	}

	.textlink_wzNM3e.dakai:hover {
		background-image: url(http://qty83k.creatby.com/materials/2771/origin/c56a1af0e1b00b60d71d71b4734f9451_origin.png);
	}

	.textlink_wzNM3e:hover {
		color: rgb(0, 159, 160);
		text-decoration: none;
		background-image: url(http://qty83k.creatby.com/materials/2771/origin/2522722074aff0dc287d117eba695003_origin.png);
	}

	.textlink_wzNM3e.dakai {
		background-image: url(http://qty83k.creatby.com/materials/2771/origin/7499076bd780b8c6275b2b3a1c63e607_origin.png);
		margin-left: 5px;
		-webkit-box-flex: 0;
		-ms-flex-positive: 0;
		flex-grow: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		-ms-flex-preferred-size: auto;
		flex-basis: auto;
	}

	a:hover,
	a:focus {
		text-decoration: none;
	}

	a:hover,
	a:focus {
		color: #2a6496;
		text-decoration: underline;
	}

	a:active,
	a:hover {
		outline: 0;
	}

	initHide:not(.c-hideHolder) {
		display: none !important;
	}

	.div_mnG0wo {
		min-height: auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
	}

	.div_oLhlRV {
		min-height: auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.heading_IH2VnY {
		font-size: 26px;
		color: rgb(72, 72, 72);
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 9px;
		line-height: 1em;
	}

	.label_OVUgJH {
		color: rgb(0, 159, 160);
		font-weight: normal;
		padding-left: 6px;
		padding-right: 6px;
		border-style: solid;
		border-radius: 5px;
		border-width: 1px;
		border-color: rgb(0, 159, 160);
		margin-left: 3px;
		margin-right: 3px;
		margin-bottom: 0px;
	}

	label {
		display: inline-block;
		max-width: 100%;
		margin-bottom: 5px;
		font-weight: 700;
	}

	.label_OVUgJH {
		color: rgb(0, 159, 160);
		font-weight: normal;
		padding: 4px 8px;
		font-size: 14px;
		border-style: solid;
		border-radius: 5px;
		border-width: 1px;
		border-color: rgb(0, 159, 160);
		margin: 0 3px;
	}

	.div_sfz9WV {
		min-height: auto;
		margin-top: 26px;
	}

	.div_PiRYSQ.c-state1 {
		height: auto;
	}

	.div_PiRYSQ {
		min-height: auto;
		overflow: hidden;
		text-align: right;
		height: 0px;
	}

	.row_EsvYjt.guanzhu {
		overflow: hidden;
		height: auto;
		min-height: auto;
	}

	.column_WvUK7W {
		padding-left: 5px;
		padding-right: 5px;
		margin-bottom: 10px;
	}

	.div_zpfJlh {
		background-color: rgb(245, 245, 245);
		border-radius: 5px;
		padding-left: 25px;
		padding-right: 25px;
		padding-top: 30px;
		padding-bottom: 30px;
	}

	.heading_gviHAE {
		margin-top: 0px;
		margin-bottom: 21px;
		color: rgb(0, 159, 160);
		font-size: 18px;
		font-weight: bold;
		text-align: left;
	}

	.row_JUft7v {
		min-height: auto;
	}

	.column_mFWPbx {
		padding-left: 0px;
		padding-right: 0px;
		min-height: auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.image_3wYLxF {
		margin-right: 12px;
	}

	.c-image {
		height: auto;
		width: auto;
		max-width: 100%;
		display: inline-block;
	}

	.heading_58QPWV {
		color: rgb(110, 110, 110);
		font-size: 14px;
		margin-top: 0px;
		margin-bottom: 0px;
		line-height: 1.5em;
		font-weight: normal;
		margin-right: 0px;
		width: 70px;
		text-align: left;
	}

	.heading_58QPWV.bold {
		font-weight: bold;
		margin-right: 0px;
		line-height: 1.6em;
		width: auto;
	}

	.column_UYw0gx {
		min-height: auto;
		padding-left: 0px;
		padding-right: 0px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.div_0oZzVH {
		min-height: auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		margin-top: 11px;
	}

	.div_eQPG16 {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		min-height: auto;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		width: auto;
		-webkit-box-flex: 0;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
	}

	.column_k5dtwn {
		padding-left: 5px;
		padding-right: 5px;
		margin-bottom: 10px;
	}

	.clearfix:before,
	.clearfix:after,
	.dl-horizontal dd:before,
	.dl-horizontal dd:after,
	.container:before,
	.container:after,
	.container-fluid:before,
	.container-fluid:after,
	.row:before,
	.row:after,
	.form-horizontal .form-group:before,
	.form-horizontal .form-group:after,
	.btn-toolbar:before,
	.btn-toolbar:after,
	.btn-group-vertical>.btn-group:before,
	.btn-group-vertical>.btn-group:after,
	.nav:before,
	.nav:after,
	.navbar:before,
	.navbar:after,
	.navbar-header:before,
	.navbar-header:after,
	.navbar-collapse:before,
	.navbar-collapse:after,
	.pager:before,
	.pager:after,
	.panel-body:before,
	.panel-body:after,
	.modal-footer:before,
	.modal-footer:after {
		display: table;
		content: " ";
	}

	.clearfix:after,
	.dl-horizontal dd:after,
	.container:after,
	.container-fluid:after,
	.row:after,
	.form-horizontal .form-group:after,
	.btn-toolbar:after,
	.btn-group-vertical>.btn-group:after,
	.nav:after,
	.navbar:after,
	.navbar-header:after,
	.navbar-collapse:after,
	.pager:after,
	.panel-body:after,
	.modal-footer:after {
		clear: both;
	}

	:before,
	:after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}



	@media (max-width: 767px) {

		* {
			background-attachment: initial !important;
		}

		.buttonCollege {
			width: 90%；
		}

		.div_v60iAm {
			padding-left: 10px;
			padding-right: 10px;
		}

		.imageblock_VRWtPr {
			width: 108px;
			height: 108px;
		}

		.heading_IH2VnY {
			font-size: 18px;
			margin-bottom: 14px;
			width: 100%;
			text-align: center;
			margin-top: 17px;
		}

		.div_BMsaOd.guanzhu {
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}

		.div_oLhlRV {
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}

		.div_ARD2As {
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}

		.div_sfz9WV {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}

		.image_2pnGPP {
			margin-right: 5px;
			margin-bottom: 10px;
		}

		.div_Sd6WRB {
			margin-left: auto;
			margin-right: auto;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
		}

		.column_WvUK7W {
			margin-bottom: 10px;
		}
	}


	@media (min-width: 1200px) {

		.col-lg-1,
		.col-lg-2,
		.col-lg-3,
		.col-lg-4,
		.col-lg-5,
		.col-lg-6,
		.col-lg-7,
		.col-lg-8,
		.col-lg-9,
		.col-lg-10,
		.col-lg-11,
		.col-lg-12 {
			float: left;
		}

		.col-lg-6 {
			width: 50%;
		}

	}


	@media (min-width: 992px) {

		.col-md-1,
		.col-md-2,
		.col-md-3,
		.col-md-4,
		.col-md-5,
		.col-md-6,
		.col-md-7,
		.col-md-8,
		.col-md-9,
		.col-md-10,
		.col-md-11,
		.col-md-12 {
			float: left;
		}

		.col-md-6 {
			width: 50%;
		}
	}

	@media (min-width: 768px) {

		.col-sm-1,
		.col-sm-2,
		.col-sm-3,
		.col-sm-4,
		.col-sm-5,
		.col-sm-6,
		.col-sm-7,
		.col-sm-8,
		.col-sm-9,
		.col-sm-10,
		.col-sm-11,
		.col-sm-12 {
			float: left;
		}

		.col-sm-6 {
			width: 50%;
		}

	}

	/*不同院校——图片信息*/



	.selectCollegeSearch {
		width: 407px;
		margin: 49px 0 44px;
	}

	.selectCollege {
		width: 1300px;
		margin: 0 auto;
	}


	/** PC **/
	@media only screen and (min-width: 1024px) and (max-width:1300px) {
		.viewMore {
			width: 755px;
			margin: 0 auto;
		}

		.specificInform {
			width: 720px;
		}

		.forY,
		.forThree {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.tagSort {
			width: 95%;
			flex-direction: column;
			justify-content: center;
		}

		.diffeCollege {
			width: 90%;
			overflow: hidden;
		}

		.diffeCollege .el-col-8 {
			width: 100%;
		}

		.diffeCollege .el-card__body {
			width: 90%;
		}

		.selectCollegeSearch {
			margin: 49px auto 44px;
			width: 50%;
		}

		.selectCollege {
			width: 100%;
		}
	}

	/** iPad **/
	@media only screen and (min-width: 768px) and (max-width: 1023px) {
		.tag {
			width: 95%;
			height: 37px;
		}

		.tagSort {
			width: 95%;
			flex-direction: column;
			justify-content: center;
		}

		.viewMore {
			width: 700px;
		}

		.specificInform,
		.threeSpecificInform {
			width: 658px;
			margin-right: 25px;
		}

		.forY,
		.forThree {
			flex-direction: column;
			justify-content: center;
		}

		.buttonCollege {}

		.diffeCollege {
			width: 100%;
			overflow: hidden;
		}

		.diffeCollege .el-col-8 {
			width: 720px;
			overflow: hidden;
			margin-left: 20px;
		}

		.selectCollegeSearch {}

		.selectCollege {
			width: 700px;
		}
	}

	/** iPhone **/
	@media only screen and (min-width: 320px) and (max-width: 767px) {
		.hot {
			margin: 0 20px;
		}

		.countMajor,
		.paixu,
		.hot,
		.publicCost {
			font-size: 12px;
		}

		.tag span {
			font-size: 14px;
			margin: 0 0 10px;
		}

		.tagSort {
			width: 90%;
			flex-wrap: wrap;
		}

		.buttonCollege {
			margin: 0 0 20px;
		}

		.selectCollegeSearch {
			margin: 20px 0 20px 0;
		}

		.selectCollege .el-input__inner {
			border-radius: 20px;
		}

		.buttonCollege {
			width: 90%；
		}

		.viewMore {
			width: 95%;
		}

		.teach {
			margin-top: 10px;
		}

		.moneyType {
			flex-direction: column;
		}

		.specificInform {
			width: 200px;
			height: 150px;
			padding: 30px 25px;
		}

		.diffeCollege .el-col-8 {
			width: 90%;
			margin-left: 20px;
		}

		.forY,
		.forThree {
			flex-direction: column;
			justify-content: center;

		}

		.diffeCollege {
			width: 100%;
		}

		.selectCollegeSearch {
			width: 94%;
			margin-left: 3%;
		}

		.selectCollege {
			width: 100%;
		}
	}
</style>

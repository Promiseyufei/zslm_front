<template>
	<div class="content-information">
		<!--轮播图-->
		<div class="sowingMap">
			<el-carousel trigger="click" :height="myWidth" class="sowingContent" :interval="5000" arrow="always">
				<el-carousel-item v-for="(item,index) in rotationPicture" :key="index">
					<img :src="item.img" alt="" @click="judgeBanner(item.re_url)" class="picture-header">
				</el-carousel-item>
			</el-carousel>
		</div>
		<!--mba导航栏-->
		<div class="content clearfloat">
			<div class="float-left">
				<div class="navigation">
					<searchLablePageHead @labelHeadClick="choiceHead" v-if="kind.length" :names="kind"></searchLablePageHead>
				</div>

				<div class="article-cont">
					<mbaArticle @jumpContent="jump" @jumpArticle="jump" @addAtricle="addArticle" v-if="judge" :mbatitle="mbatitlesmba"
					 :headArticle="homepage" :shortArticles="shortpage"></mbaArticle>
				</div>
				<!-- <div class="article-cont">
					<mbaArticle @jumpContent="jump" @jumpArticle="jump" @addAtricle="addArticle" v-if="judge" :mbatitle="mbatitlesmba"
					 :headArticle="homepage" :shortArticles="shortpage"></mbaArticle>
				</div> -->
			</div>
			<!--右边的的文章-->
			<div class="float-right">
				<Article @refreshs="refreshBusiness" @jump="jump" v-if="informbusiness.length" title="行业报告" :inforArticle="informbusiness"></Article>
				<div class="advertisement" @click="jumpStudent">
					<img src="../../../assets/img/advertisement.png" alt="">
				</div>
				<div class="advertisement" v-if="ad.length > 0">
					<!-- <img src="../../../assets/img/advertisement.png" alt=""> -->
					<el-carousel trigger="click" height="100%" class="sowingContent test" :interval="5000" arrow="always">
						<el-carousel-item v-for="(item,index) in ad" :key="index" @click.native="jumpreUrl(item.re_url)">
							<!-- <img :src="item.img" alt="" @click="judgeBanner(item.re_url)" class="picture-header"> -->
								<img :src="item.img" alt="" class="picture-header">
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="advertisement" v-for="(item,index) in advertisementB" :key="index">
					<a :href="item.re_url">
						<img :src="item.img" alt="item.img_alt">
					</a>
				</div>
				<Article @refreshs="refresh" @jump="jump" v-if="information.length" title="推荐阅读" :inforArticle="information"></Article>
			</div>
		</div>
		<!-- <div class="footer">
            <div class="foot-content">
                <div class="clearfloat foot-head">
                    <div class="foot-left">
                        <img src="../../../assets/img/foot.png" alt="">
                    </div>
                    <div class="float-middle">
                        <ul>
                            <li><a href="">关于我们</a></li>
                            <li><a href="">用户条款</a></li>
                            <li><a href="">帮助中心</a></li>
                            <li><a href="">问题反馈</a></li>
                            <li><a href="">法律声明</a></li>
                        </ul>
                    </div>
                    <div class="float-right">
                        <i class="fa fa-phone" id="phone-font" aria-hidden="true">&nbsp;&nbsp;&nbsp;010-56980320</i>
                        <i class="font-foot">周一至周五 9:00-18:00</i>
                        <i class="font-foot">北京荣美福地科技有限公司</i>
                    </div>
                </div>
                <div class="clearfloat foot-icon">
                    <p>
                        © MBA Helper 2018
                    </p>
                    <p>
                        京ICP备13040890号-1
                    </p>
                </div>
            </div>
        </div>  -->
	</div>
</template>

<script>
	export default {
		//    import
		components: {},
		data() {
			return {
				myWidth: window.innerWidth > 767 ? 440 + "px" : window.innerWidth * (440 / 1280) + "px",
				picture: [],
				rotationPicture: [],
				ad: [],
				homepage: [],
				shortpage: [],
				/*
				 * 推荐阅读
				 * */
				page: 0,
				information: [],
				industryTatol: 1,
				/*
				 * 行业报告
				 * */
				businessPage: 0,
				informbusiness: [],
				businessTatol: 1,

				kind: [], //导航栏的种类
				kindClick: 0,

				/*
				 *MBA文章
				 *
				 * */
				mbaPage: 1,
				mbaTatol: 1,
				mbaInformation: [],
				pageCount: 9,
				mbaJudge: true,
				judge: true,
				mbatitlesmba: 1,


				advertisementB: ''
			}
		},
		methods: {
			jumpreUrl(jumpUrl) {
				if(typeof jumpUrl !== 'undefined') {
					if(jumpUrl.substr(0,7).toLowerCase() == "http://" || jumpUrl.substr(0,8).toLowerCase() == "https://") {
						window.open(jumpUrl);
					}
					else {
						var url = ('http://' + jumpUrl);
						window.open(url);
					}
				}
			},
			advertisementBS: function() {
				let _this = this;
				this.fetch('/front/consult/getBt', {
						url: "/front/firstMenuRouter/viewInformation"
					})
					.then((response) => {
						if (response.code == 0) {
							_this.advertisementB = response.result;
						}
					})
					.catch(error => function(error) {
						console.log(response)
					});
			},
			/*
			 * 找生简章
			 * */
			jumpStudent: function() {
				this.$router.push({
					path: '/front/firstMenuRouter/recruitStudents'
				});
			},
			/*
			 * 推荐阅读刷新
			 * */
			refresh: function(data) {
				this.page++;
				if (this.page * 4 >= this.industryTatol) {
					this.page = 0;
				}

				this.readtation();
			},
			/*
			 * 行业报告刷新
			 * */
			refreshBusiness: function(data) {
				this.businessPage++;
				if (this.businessPage * 4 >= this.businessTatol) {
					this.businessPage = 0;
				}
				this.presentation();
			},
			/*
			 *
			 * 轮播图
			 * */
			rotationChart: function() {
				let _this = this;
				// 				this.fetch('/front/consult/getConsultListBroadcast')
				// 					.then((response) => {
				// 						if (response.code == 0) {
				// 							// _this.rotationPicture = response.result;
				// 						}
				// 					})
				// 					.catch(error => function(error) {
				// 						console.log(response)
				// 					});
			},
			jump: function(id) {
				this.$router.push('/front/firstMenuRouter/viewInformation/singleInformation/' + id.id);
			},
			/*
			 * 行业报告
			 * */
			presentation: function() {
				let _this = this;
				this.fetch('/front/consult/getRecommendRead', {
						type: 1,
						pageNumber: _this.businessPage
					})
					.then((response) => {
						console.log(response)
						if (response.code == 0) {
							_this.businessTatol = response.result.count;
							_this.informbusiness = response.result.info;
						}
					})
					.catch(error => function(error) {
						console.log(response)
					});
			},
			/*
			 * 推荐阅读
			 * */
			readtation: function() {
				let _this = this;
				this.fetch('/front/consult/getRecommendRead', {
						pageNumber: _this.page
					}).then((response) => {
						if (response.code == 0) {
							_this.information = response.result.info;
							_this.industryTatol = response.result.count;
						}
					})
					.catch(error => function(error) {
						console.log(response)
					});
			},
			/*
			 *
			 * 导航栏的选择
			 * */
			choiceHead: function(item) {
				this.mbaJudge = true;
				this.kindClick = item.id;
				this.mbaPage = 1;
				this.homepage.length = 0;
				this.shortpage.length = 0;
				this.mbatation();
			},

			/*
			 * mba文章
			 * */
			mbatation: function() {
				let _this = this;
				this.fetch('/front/consult/getConsultListInfo', {
						infoTypeId: _this.kindClick,
						pageNumber: _this.mbaPage,
						pageCount: _this.pageCount
					})
					.then((response) => {
						if (response.code == 0) {
							if (_this.mbaJudge) {
								if (response.result.info.length == 0)
									_this.judge = false;
								else
									_this.judge = true;
								for (let i in response.result.info) {
									if (i == 0) {
										_this.homepage.push(response.result.info[i]);
									} else {
										_this.shortpage.push(response.result.info[i]);
									}
								}
							} else {
								for (let i in response.result.info) {
									_this.shortpage.push(response.result.info[i]);
								}
							}

							_this.industryTatol = response.result.count;
						}
					})
					.catch(error => function(error) {
						console.log(response)
					});
			},

			/*
			 *
			 * mba添加文章
			 * */
			addArticle: function() {
				let _this = this;
				_this.mbaJudge = false;
				_this.mbaPage++;
				if (_this.mbaPage * _this.pageCount >= _this.industryTatol) {
					_this.mbatitlesmba = 2;
					console.log(_this.mbatitlesmba)
					return false;
				}
				_this.mbatation();
			},

			/*
			 * 导航类型
			 * */
			navigationKind: function() {
				let _this = this;
				this.fetch('/front/consult/getConsultType').then((response) => {
						if (response.code == 0) {
							_this.kind = response.result;
							_this.kindClick = _this.kind[0].id;
						}
					})
					.catch((error) => {
						console.log(error)
					});
			},

			/**
			 * 获取banner图
			 */
			getBanner: function() {
				var that = this;
				this.fetch('/front/banner/getbanner', {
					b_name: '看资讯页面',
					limit: 4,
					type: 0
				}).then(res => {

					if (res.code == 0) {

						that.rotationPicture = res.result
					} else {
						that.message(true, res.msg, 'error')
					}
				})
			},
			/**
			 * 获取广告图
			 */
			getAd: function() {
				var that = this;
				this.fetch('/front/banner/getbanner', {
					b_name: '看资讯页面',
					limit: 4,
					type: 1
				}).then(res => {

					if (res.code == 0) {
						that.ad = res.result

					} else {
						that.message(true, res.msg, 'error')
					}
				})
			},
			/**
			 * 跳转banner
			 */
			judgeBanner: function(url) {
				window.open(url)
			}

		},
		mounted() {
			this.navigationKind();
			this.rotationChart();
			this.readtation();
			this.presentation();
			this.mbatation();
			this.advertisementBS();
			this.getBanner();
			this.getAd();
		},
	};
</script>

<style scoped>
	.picture-header {
		width: 100%;
		height: 100%;
	}

	.content-information {
		background-color: #f5f5f5;
		padding-top: 30px;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.sowingMap {
		width: 1280px;
		margin: auto;
	}

	.content {
		margin: auto;
		margin-top: 29px;
		padding-bottom: 150px;
		width: 1280px;
	}

	.float-left {
		float: left;
		width: 955px;
	}

	.navigation {
		width: 100%;
		margin-top: 0px;
		height: 64px;
		background-color: #ffffff;
		border-radius: 5px;
	}

	.float-right {
		float: right;
		width: 305px;
		text-align: right;
	}

	.float-right>i {
		display: block;
		width: 100%;
		margin-bottom: 12px;
	}

	#article-cont {
		width: 100%;
		margin-top: 11px;
	}

	/*-----------foot-----------*/
	.footer {
		width: 100%;
		height: 249px;
		background-color: #383b3d;
		/*margin-top: 105px;*/
		display: flex;
		align-items: center;
	}

	.clearfloat::after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0;
	}

	.foot-content {
		width: 1280px;
		margin: auto;
		height: 156px;
	}

	.foot-left {
		float: left;
	}

	.foot-left {
		width: 166px;
		margin-right: 99px;
	}

	.foot-left>img {
		width: 100%;
	}

	.float-right {
		float: right;
	}

	.float-middle {
		width: 280px;
		float: left;
	}

	.float-middle>ul>li {
		list-style: none;
		margin-bottom: 15px;
		width: 140px;
		float: left;
		text-align: center;
	}

	.float-middle>ul>li>a {
		font-family: MicrosoftYaHei;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		color: #ffffff;
		text-decoration: none;
	}

	#phone-font {
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 22px;
		letter-spacing: 0px;
		color: #ffffff;
	}

	.font-foot {
		font-family: MicrosoftYaHei-Bold;
		font-size: 12px;
		font-weight: normal;
		letter-spacing: 0px;
		color: #ffffff;
	}

	.foot-icon {
		width: 100%;
		margin-top: 36px;
	}

	.foot-icon>p {
		font-family: MicrosoftYaHei;
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #ffffff;
		opacity: 0.65;
	}

	.foot-icon>p:first-child {
		float: left;
	}

	.foot-icon>p:last-child {
		float: right;
	}

	.foot-head {
		padding-top: 15px;
	}

	.float-middle>ul>li>a:hover {
		color: #cecece;
	}

	/*-----------foot-----------*/
	.advertisement {
		border-radius: 3px;
		width: 305px;
		height: 188px;
		margin-bottom: 14px;
		margin-top: 14px;
	}

	.advertisement img {
		width: 100%;
		height: 100%;
	}

	.advertisement img:hover {
		box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
		-webkit-transition: All 0.3s ease;
		-webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
		transform: rotate(0deg) scale(1) translate(0%, 0%);
		transition: All 0.3s ease;
	}

	.test {
		height: 219.7px;
	}

	@media (max-width: 991px) {
		.content {
			width: 95%;
		}

		.float-left {
			width: 100%;
		}

		.float-right {
			margin-top: 25px;
			width: 100%;
		}

		.sowingMap {
			width: 100%;
		}

		.foot-left,
		.float-right,
		.foot-icon {
			width: 100%;
			text-align: center;
		}

		.foot-left img {
			width: 40%;
		}

		.foot-content,
		.footer {
			height: auto;
		}

		.foot-content {
			padding-top: 20px;
			padding-bottom: 20px;
		}

		.foot-icon p {
			width: 100%;
			margin-bottom: 9px;
		}

		.float-middle {
			display: none;
		}

		.advertisement {
			width: 100%;
			height: auto;
		}
	}
</style>

<style>
	.sowingMap [class*=" el-icon-"],
	.sowingMap [class^=el-icon-] {
		font-size: 26px;
		font-weight: bolder;
		line-height: 0px;
	}

	.sowingMap .el-carousel__container {
		height: 440px;
	}

	.sowingMap .el-carousel__button {
		width: 1em;
		height: 1em;
		border-radius: .5em;
	}

	.sowingMap .el-carousel__indicator {
		padding: 0 3px 16px;
	}

	.sowingMap .el-carousel__arrow {
		height: 0px;
	}

	.sowingMap .el-carousel__arrow--left {
		left: 20px;
	}

	.sowingMap .el-carousel__arrow--left:hover,
	.sowingMap .el-carousel__arrow--right:hover {
		color: #009fa0;
	}

	.sowingMap .el-carousel__arrow--right {
		right: 20px;
	}

	.sowingMap .sowingContent[data-v-2912dfba] {
		border-radius: 5px;
	}

	@media (max-width: 991px) {
		.sowingMap .el-carousel__container {
			min-height: auto;
		}

		.sowingMap .sowingMap[data-v-2912dfba] {
			width: 100%;
		}

		.sowingMap [class*=" el-icon-"],
		[class^=el-icon-] {
			font-size: 0px;
		}

		.sowingMap .sowingContent[data-v-2912dfba] {
			border-radius: 0px;
		}
	}
</style>

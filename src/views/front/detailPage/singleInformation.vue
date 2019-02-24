<!-- 看资讯》资讯详情 -->
<template>
	<div class="content">
		<div class="single-div-con">
			<div class="content-article-single">
				<div class="single-div-head">
					<i id="home"></i>&nbsp;
					<i>首页</i>
					<label>></label>
					<i>看资讯</i>
					<label>></label>
					<i>{{ articleContent.type_name }}</i>
					<label>></label>
					<i class="text-article">正文</i>
				</div>
				<div class="content-written clearfloat">
					<div class="weitten-left">
						<div id="single-img" v-if="articleContent.z_image != '' && articleContent.z_image != undefined">
							<img :src="articleContent.z_image" :alt="articleContent.z_alt">
						</div>
						<div class="content-title">
							<h1>{{ articleContent.zx_name }}</h1>
							<div class="icon-content">
								<div class="icon-left">
									<i class="fa fa-calendar color" aria-hidden="true"></i>&nbsp;&nbsp;
									<i>{{ articleContent.create_time }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
									<i class="fa fa-paper-plane color" aria-hidden="true"></i>&nbsp;&nbsp;
									<i>{{ articleContent.publisher }}</i>
								</div>
								<div class="icon-right">
									<i>分享到&nbsp;&nbsp;&nbsp;&nbsp;</i>
									<i class="fa fa-weixin weixin" aria-hidden="true" @click="testShare"></i>
									&nbsp;&nbsp;<i class="fa fa-weibo weibo" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<div class="content-article-write" v-html="articleContent.z_text">
							<!--{{ articleContent.z_text }}-->
						</div>
						<div class="footer-icon">
							<i>分享到&nbsp;&nbsp;&nbsp;&nbsp;</i>
							<i class="fa fa-weixin weixin" aria-hidden="true"></i>
							&nbsp;&nbsp;<i class="fa fa-weibo weibo" aria-hidden="true"></i>
						</div>
					</div>
					<div class="weitten-right">
						<div class="advertisement" v-if="advertisement.length != 0" v-for="(item,index) in advertisement" :key="index">
							<a :href="item.re_url"><img :src="item.img" alt="未加载"></a>
						</div>
						<div class="advertisement" v-if="ad.length > 0">


							<div v-for="(oneAd,index) in ad" :key="index" style="margin-bottom: 20px;">

								<el-carousel v-if="oneAd.length > 1" trigger="click" height="100%" class="sowingContent test" :interval="5000"
								 arrow="always">
									<el-carousel-item v-for="(item,oneIndex) in oneAd" :key="oneIndex">
										<img :src="item.img" alt="" @click="judgeBanner(item.re_url)" class="picture-header">

									</el-carousel-item>
								</el-carousel>
								<div v-else class="advertisement" >
									<img :src="oneAd[0].img" alt="" @click="judgeBanner(oneAd[0].re_url)" style="height: 219.7px;">
								</div>
							</div>
						</div>
						<Article @jump="jump" @refreshs="refresh" v-if="information.length" title="推荐阅读" :inforArticle="information"></Article>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				information: [],
				articleContent: [],
				advertisement: [],
				page: 0,
				ad: [],
			}
		},
		methods: {

			testShare() {
				console.log('aaa')
				this.share();
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
			 * 推荐阅读
			 * */
			readtation: function() {
				let _this = this;
				this.fetch('/front/consult/getAppointRead', {
						consultId: _this.$route.params.id,
						pageNumber: _this.page
					}).then((response) => {
						if (response.code == 0) {
							if (response.result.length != 0) {
								_this.information = response.result.info;
								_this.industryTatol = response.result.count;
							}
						}
					})
					.catch(error => function(error) {
						console.log(response)
					});
			},
			/*
			 *
			 * 展示文章
			 * */
			articleShow: function() {
				let _this = this;
				this.fetch('/front/consult/getConsultDeyail', {
						consultId: _this.$route.params.id
					}).then((response) => {
						console.log(response)
						if (response.code == 0) {
							_this.articleContent = response.result;
						}
					})
					.catch(error => function(error) {
						console.log(response)
					});
			},
			/*
			 * 推荐阅读跳转
			 * */
			jump: function(id) {
				this.$router.push('/front/firstMenuRouter/viewInformation/singleInformation/' + id.id);
			},
			/*
			 * 展示广告
			 * */
			showPicture: function() {
				let _this = this;
				this.fetch('/front/consult/getBt', {
						url: '/front/firstMenuRouter/singleInformation'
					}).then((response) => {
						if (response.code == 0) {
							_this.advertisement = response.result;
						}
					})
					.catch(error => function(error) {
						console.log(response)
					});
			},
			getAd: function() {
				var that = this;
				this.fetch('/front/banner/getbanner', {
					b_name: '看资讯页面',
					limit: 12,
					type: 1
				}).then(res => {

					if (res.code == 0) {

						let ad_b = res.result
						// that.ad

						if (ad_b.length > 3) {
							let i = 0;
							console.log(ad_b.length)
							for (let j = 0; j < 3; j++) {
								that.ad[j] = [];
							}
							let j = 0;
							while (true) {
								if (j == ad_b.length)
									break;
								that.ad[i].push(ad_b[j])
								i = i < 2 ? ++i : 0;
								++j;
							}
						} else {
							that.ad = ad
						}
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
			this.readtation();
			this.articleShow();
			this.showPicture();
			this.getAd();
		}
	}
</script>
<style scoped>
	.content-article-single {
		width: 1280px;
		margin: auto;
		padding-top: 23px;
		padding-bottom: 60px;
	}

	.content {
		width: 100%;
		background-color: #f5f5f5;
	}

	#home {
		background-image: url("../../../assets/img/home.png");
		background-repeat: no-repeat;
		background-size: cover;
		display: inline-block;
		width: 15px;
		height: 15px;
	}

	.content-article-single>div>i,
	.content-article-single>div>label {
		font-family: MicrosoftYaHei;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #6e6e6e;
	}

	.single-div-head {
		line-height: 65px;
	}

	.content-written {
		margin: auto;
		width: 1280px;
		;
	}

	.clearfloat::after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0;
	}

	.weitten-left {
		float: left;
		width: 955px;
		background-color: #FFFFFF;
		border-radius: 5px;
	}

	.weitten-right {
		float: right;
		width: 305px;
	}

	.weitten-left:hover {
		box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
		-webkit-transition: All 0.3s ease;
		-webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
		transform: rotate(0deg) scale(1) translate(0%, 0%);
		transition: All 0.3s ease;
	}

	.content-title {
		width: 94%;
		margin: auto;
		border-bottom: 1px solid rgb(239, 239, 239);
	}

	.content-title h1 {
		font-family: MicrosoftYaHei;
		font-size: 26px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 90.5px;
		letter-spacing: 0px;
		color: #484848;
	}

	.icon-content {
		line-height: 30px;
		width: 100%;
		margin: auto;
		height: 56px;
	}

	.icon-left {
		float: left;
	}

	.icon-right {
		float: right;
	}

	.color {
		color: #009fa0;
	}

	.icon-left,
	.icon-right {
		font-family: MicrosoftYaHei-Bold;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #484848;
		opacity: 0.6;
	}

	.weixin,
	.weibo {
		cursor: hand;
		cursor: pointer;
		opacity: 1;
	}

	.weixin:hover {
		color: #1abc1a;
		opacity: 1;
	}

	.weibo:hover {
		color: #d02d28;
		opacity: 1;
	}

	.content-article-write {
		width: 94%;
		margin: auto;
		min-height: 90px;
		border-bottom: 1px solid rgb(239, 239, 239);
	}

	.footer-icon {
		width: 94%;
		margin: auto;
		min-height: 90px;
		font-family: MicrosoftYaHei-Bold;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 90px;
		letter-spacing: 0px;
		color: #484848;
		opacity: 0.6;
	}

	.advertisement {
		border-radius: 3px;
		width: 305px;
		height: auto;
		margin-bottom: 14px;
		margin-top: 14px;
	}

	.advertisement:first-child {
		margin-top: 0px;
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

	.content-article-single>div>i:last-child {
		color: rgb(0, 159, 160);
		font-weight: bolder;
	}

	#single-img {
		width: 94%;
		max-height: 365px;
		margin: auto;
		margin-bottom: 14px;
		margin-top: 21px;
		border-radius: 5px;
	}

	#single-img>img {
		width: 100%;
		height: auto;
	}

	@media (max-width: 991px) {

		.content-article-single,
		.content-written,
		.weitten-left,
		.weitten-right {
			width: 100%;
		}

		.float-right {
			margin-top: 25px;
			width: 100%;
			text-align: center;
		}

		.advertisement {
			width: 100%;
			height: auto;
		}

		.single-div-con {
			width: 95%;
			margin: auto;
		}
	}
</style>

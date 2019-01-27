<template>
	<div>
		<el-container :style="{ height: heighttt + 'px' } ">
			<el-aside width="auto">
				<Navigation :collapse="isCollapse"></Navigation>
			</el-aside>
			<el-container>
				<el-header style="display:flex;align-items:center;justify-content:space-between;">
					<span v-if="isCollapse" @click="isCollapse = !isCollapse"><i class="fa fa-bars"></i></span>
					<span v-else @click="isCollapse = !isCollapse"><i class="fa fa-bars"></i></span>

					<div class="appNav">
						
						<el-tooltip class="item" effect="light" placement="top-start">
							<div slot="content">账户类型:超级管理员
								<br />本次登录:{{nowtime}}
								<br/>登录地区：{{city}}(Ip:{{ip}})
								<br/>上次登录：{{lasttime}}</div>
							<i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
						</el-tooltip>

						<el-tooltip class="item" effect="light" placement="top-start">
							<div slot="content">新的退款申请:<i style="color: red">{{refund}}</i>
								<br />新的意见反馈:<i style="color: red">{{opinion}}</i></div>
							<el-badge :value="count" class="item">
								<i class="fa fa-bell-o fa-lg" aria-hidden="true"></i>
							</el-badge>
						</el-tooltip>
						<i class="fa fa-share fa-lg" aria-hidden="true"></i>
					</div>
				</el-header>
				<el-main>
					<router-view />
				</el-main>
				<el-footer class="footer">
					<p>CopyRight &copy; MBA Helper 2018</p>
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nowtime:'',
				city:'',
				ip:'',
				lasttime:'',
				refund: 0,
				opinion: 0,
				testline: "",
				count: 12,
				heighttt: window.screen.availHeight,
				isCollapse: true
			};
		},
		methods: {
			getding: function() {
				var that = this
				var t1 = window.setInterval(that.getMsg, 5000);
			},

			// 			getMsg: function() {
			// 				this.fetch("/admin/information/getding").then(res => {
			// 						if (res.code == 0) {
			// 							console.log(res)
			// 						}
			// 					}
			// 	
			// 				},
			getAccountMsg:function(){
				var that = this;
				var account = this.getUserStatePro('admin_account')
				this.fetch('/admin/accounts/getaccountloginmsg',{
					account:account
				}).then(res=>{
					if(res.code == 0){
						that.ip = res.result.ip
						that.nowtime = res.result.now_time
						that.lasttime = res.result.last_time
						that.city = res.result.city
					}
				})
			},
			
			getMsg: function() {
				var that = this;
				this.fetch("/admin/information/getding").then(res => {
					if (res.code == 0) {
						that.count = res.result.refund + res.result.opinion;
						that.refund = res.result.refund
						that.opinion = res.result.opinion
					}
				})
			}
		},
		mounted() {
			this.getAccountMsg()
			this.getding()
		},
	}
</script>

<style scoped>
	.el-badge {
		vertical-align: unset !important;
		right: 15px !important;
		width: 24px !important;
	}

	body {
		padding: 0;
		margin: 0;
	}

	.el-main {
		background-color: #fbfbfb;
		color: #333;
	}

	.el-aside {
		background-color: #fff;
		color: #333;
	}

	.appNav i {
		margin-right: 20px;
		color: #fdfdfd;
		font-size: 18px;
	}

	.el-header,
	.el-footer {
		background-color: #1abc9c;
		color: #333;
		padding: 0;
	}

	.el-header span {
		height: 100%;
		width: 50px;
		text-align: center;
		line-height: 60px;
		color: #fff;
		font-size: 25px;
		background: #28d4b2;
		padding: 0 2px;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.footer {
		background-color: #E9EEF3;
	}

	.footer p {
		text-align: center;
		font-size: 12px;
		color: #c3c3c3;
	}
</style>

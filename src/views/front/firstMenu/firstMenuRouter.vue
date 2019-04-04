<!-- 一级导航页面，路由出口 -->
<template>
	<div>
		<!-- 头部导航 -->
		<div class="head">
			<div class="headLeft">
				<div class="logoPicture" @click="goIndex"><img src="../../../assets/img/logoGreen.png"></div>
				<div class="firstMenu" v-show="firstMenu">
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#6e6e6e"
					 active-text-color="#009fa0">
						<el-menu-item index="1" @click="major">选院校</el-menu-item>
						<el-menu-item index="2">找活动</el-menu-item>
						<el-menu-item index="3">看资讯</el-menu-item>
						<el-menu-item index="4" style="border:0;padding-right:0;">搜辅导</el-menu-item>
					</el-menu>
				</div>
				<!-- 手机版 -->
				<div @click="isLogin" v-show="mobileIcon" class="mobileIcon">
					<img @click="dialogVisible = true" src="../../../assets/img/mobileIcon.png">
					<el-dialog :visible.sync="dialogVisible" width="50%">
						<div class="dialog">
							<div class="dialogPicture">
								<div class="userPicture"><img :src="loginOr" alt="加载中"></div>
								<div class="userName">{{userName}}</div>
							</div>
						</div>
						<div style="padding:10px 25px;width:60px;">
							<el-button type="text" @click="myCare">我的关注</el-button>
							<el-button type="text" @click="myActivity">我的活动</el-button>
							<el-button type="text" @click="myCoupon">我的优惠券</el-button>
							<el-button type="text" @click="myMessage">我的消息</el-button>
							<el-button type="text" @click="myAccount">我的账户</el-button>
						</div>
					</el-dialog>
				</div>

			</div>
			<div class="logoInto" v-show="logoInto">
				<div style="cursor: pointer;" @click="goSearch"><i class="el-icon-search"></i></div>
				<div style="cursor: pointer;" @click="goMessage">
					<el-badge :value="200" :max="news" class="item" :hidden="hidden">
						<img src="../../../assets/img/messageLogo.png">
					</el-badge>
				</div>
				<div class="isLoginPicture" style="cursor: pointer;" @click="goFollow"><img :src="loginOr"></div>
			</div>
		</div>
		<!-- 头部导航 -->
		<router-view />
		<!-- 页脚 -->
		<div class="footer">
			<div class="foot-content">
				<div class="clearfloat foot-head">
					<div class="foot-left">
						<img src="../../../assets/img/foot.png" alt="">
					</div>
					<div class="float-middle">
						<ul>
							<li><a href="javascript:0;" @click="toJump(0)">关于我们</a></li>
							<li><a href="javascript:0;" @click="toJump(1)">用户条款</a></li>
							<li><a href="javascript:0;" @click="toJump(2)">帮助中心</a></li>
							<li><a href="javascript:0;" @click="toJump(3)">问题反馈</a></li>
							<li><a href="javascript:0;" @click="toJump(4)">法律声明</a></li>
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
            京公网安备11010602006742号
					</p>
				</div>
			</div>
		</div>
		<!-- 页脚 -->
	</div>
</template>
<script>
	export default {
	    components: {
	    },
	    data() {
	        return {
	        	loginOr:require('../../../assets/img/noLogin.png'),
	        	userName:'未登录',
	        	dialogVisible: false,
	        	activeIndex: '1',
	        	firstMenu:true,
	        	logoInto:true,
	        	mobileIcon:false,
	        	userId:0,
				    news:0,
            hidden:true,
	        }
	    },
	    methods: {
	    	// footer链接:0关于我们 1用户条款 2帮助中心 3问题反馈 4法律声明
	    	toJump(state){
	    		switch(state){
	    			case 0:   this.$router.push('/front/firstMenuRouter/aboutUs'); break;
	                case 1:   this.$router.push('/front/firstMenuRouter/userTerms'); break;
	                case 2:   this.$router.push('/front/firstMenuRouter/helpCenter'); break;
	                case 3:   this.$router.push('/front/firstMenuRouter/ href="javascript:0;"singleOpinion'); break;
	                default:  this.$router.push('/front/firstMenuRouter/legalNotice'); break;
	            };
	    	},
	    	//跳到首页
	    	goIndex:function(){
	    		this.$router.push('/front/index');
	    	},
	    	//跳到我的消息
	    	goMessage:function(){
	    		if (!this.getUserState('user')){
	    			//未登录
	    			this.$router.push('/front/Login/loginRoute/accountNumber');
	    		} else{
	    			this.$router.push('/front/firstMenuRouter/usercore/myNews/dynamic');
	    		}
	    	},
	    	//跳到我的关注
	    	goFollow:function(){
	    		if (!this.getUserState('user')){
	    			//未登录
	    			this.$router.push('/front/Login/loginRoute/accountNumber');
	    		} else{
	    			this.$router.push('/front/firstMenuRouter/usercore/myFollow');
	    		}
	    	},
	    	//跳到搜索
	    	goSearch:function(){
          sessionStorage.setItem('isSelect', 0);
	    		this.$router.push('/front/firstMenuRouter/search/major/' + this.$store.state.search['keyword']);
	    	},
	    	//头部菜单——组件自带——key为选中的当前页面ID
	    	handleSelect(key, keyPath) {
	    		this.activeIndex = key;
	    		if (this.activeIndex==1) {
	    			this.$router.push('/front/firstMenuRouter/selectCollege');
	    		} else if(this.activeIndex==2) {
	    			this.$router.push('/front/firstMenuRouter/lookActivity');
	    		} else if(this.activeIndex==3) {
	    			this.$router.push('/front/firstMenuRouter/viewInformation');
	    		} else if(this.activeIndex==4) {
	    			this.$router.push('/front/firstMenuRouter/searchCoach');
	    		}
		    },
		    major:function(){
		    	// this.$router.push('/front/firstMenuRouter/selectCollege');
		    },
		    //改变路由菜单高亮不变
		    rushRouter:function(){
	    		let path = this.$route.matched[2].path;
	    		//当前输入的路由包括()中路由时，显示当前高亮
	    		if (path.indexOf('/front/firstMenuRouter/selectCollege') != -1) {
	    			this.activeIndex = '1';
	    		} else if(path.indexOf('/front/firstMenuRouter/lookActivity') != -1) {
		    		this.activeIndex = '2';
	    		} else if(path.indexOf('/front/firstMenuRouter/viewInformation') != -1) {
		    		this.activeIndex = '3';
		    	} else if(path.indexOf('/front/firstMenuRouter/searchCoach') != -1) {
		    		this.activeIndex = '4';
		    	}
		    },
		    //判断是否登录
		    isLogin:function(){
            if(this.getUserState('userName')) this.userName = this.getUserState('userName');
            if(this.getUserState('userHead')) this.loginOr = this.getUserState('userHead');
		    		if(this.getUserState('userId')) this.userId = this.getUserState('userId');
		    },
		    //跳到我的关注or登录
		    myCare:function(){
		    	this.getUserState('user');
		    	if (!this.getUserState('user')) {
		    		this.$router.push('/front/Login/loginRoute/shortMessage');
		    	} else{
		    		this.$router.push('/front/usercore/myFollow');
		    	}
		    },
		    //跳到我的活动or登录
		    myActivity:function(){
		    	this.getUserState('user');
		    	if (!this.getUserState) {
		    		this.$router.push('/front/Login/loginRoute/shortMessage');
		    	} else{
		    		this.$router.push('/front/usercore/myFollow');
		    	}
		    },
		    //跳到我的优惠券or登录
		    myCoupon:function(){
		    	this.getUserState('user');
		    	if (!this.getUserState) {
		    		this.$router.push('/front/Login/loginRout/shortMessagee');
		    	} else{
		    		this.$router.push('/front/usercore/myFollow');
		    	}
		    },
		    //跳到我的消息or登录
		    myMessage:function(){
		    	this.getUserState('user');
		    	if (!this.getUserState) {
		    		this.$router.push('/front/Login/loginRoute/shortMessage');
		    	} else{
		    		this.$router.push('/front/usercore/myNews');
		    	}
		    },
		    //跳到我的账户or登录
		    myAccount:function(){
		    	this.getUserState('user');
		    	if (!this.getUserState) {
		    		this.$router.push('/front/Login/loginRoute/shortMessage');
		    	} else{
		    		this.$router.push('/front/usercore/myAccount');
		    	}
		    },
		    //footer——跳到关于我们
		    aboutUs:function() {

		    },
		    //footer——跳到帮助中心
		    helpCenter:function() {

		    },
		    //footer——跳到法律声明
		    lawStatement:function() {

		    },
		    //footer——跳到用户条款
		    userList:function() {

		    },
		    //footer——跳到问题反馈
		    problemBack:function() {

		    },

			getding: function() {
				var that = this
				var t1 = window.setInterval(that.getAccountMsg, 60000);
			},
			getAccountMsg: function() {
				var that = this;
				var account = this.getUserStatePro('userId')
				if (account != null)
					this.fetch('/front/usercore/getding', {
						id: account
					}).then(res => {
						if (res.code == 0) {
						  if(res.result){
                that.news = res.result,
                that.hidden = false
              }
						}
					})
			},
		},

    watch: {
			$router() {
				this.rushRouter();
			}
		},
		mounted() {
			this.rushRouter();
			//手机端改变样式
			let w = document.documentElement.offsetWidth || document.body.offsetWidth;
			if (w < 992) { //手机端不显示一级菜单和右侧图标，右侧显示list图标
				this.firstMenu = false;
				this.logoInto = false;
				this.mobileIcon = true;
			}
			this.getAccountMsg()
			this.getding()
      this.isLogin();
		},
	};
</script>
<style>
	.el-menu.el-menu--horizontal {
		/*border-bottom: 0;*/
	}

	.mobileIcon .el-dialog__wrapper {
		overflow: hidden;
	}

	.mobileIcon .el-dialog__header {
		width: 0;
		padding: 0;
		height: 0;
	}

	.mobileIcon .el-dialog__headerbtn {
		opacity: 0;
		font-size: 0;
	}

	.mobileIcon .el-button--text {
		color: #606266;
		font-weight: bold;
		font-size: 14px;
	}

	.mobileIcon .el-dialog__body {
		padding: 0 0 100%;
	}

	.mobileIcon .el-button+.el-button {
		margin-left: 0;
	}

	.mobileIcon .el-dialog {
		margin-top: 0 !important;
		height: 100%;
		margin-left: 50%;
	}

	.logoInto .el-badge {
    height: 24px;
		margin: 0 21px;
	}

  .logoInto .el-badge img{
    width: auto;
    height: 100% !important;
  }

	.el-dropdown-menu__item--divided:before,
	.el-menu,
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
	.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
		background-color: #fff;
	}

	.firstMenu .el-menu--horizontal>.el-menu-item.is-active {
		border-bottom: 0;
		border-bottom-color: #fff;
		font-weight: bold;
	}

	.firstMenu .el-menu--horizontal>.el-menu-item {
		border-bottom: 0;
		font-size: 16px;
		cursor: pointer;
		padding: 0 20px;
		border-right: 1px solid rgba(0, 0, 0, 0.3);
		height: 11px;
		line-height: 11px;
		color: #009fa0;
    font-weight: normal !important;
	}

	.firstMenu .el-menu--horizontal {
		border-bottom: 0;
		background-color: #fff;
		border-bottom: 0;
	}
</style>

<style scoped>
	.isLoginPicture {
		width: 24px;
		height: 24px;
	}

  .isLoginPicture img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

	/*-----------foot-----------*/
	.footer {
		width: 100%;
		height: 249px;
		background-color: #383b3d;
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
    font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
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

	.logoInto i {
		width: 21px;
		height: 21px;
		font-size: 24px;
		color: #009FA1;
	}

	.firstMenu {
		width: 346px;
	}

	.logoPicture {
		cursor: pointer;
		width: 166px;
		height: auto;
	}

	.logoInto {
		width: 122px;
		display: flex;
		align-items: center;
	}

	.headLeft {
		width: 569px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.head {
		width: 1281px;
		margin: 23.5px auto;
		display: flex;
		overflow: hidden;
		justify-content: space-between;
	}

	.dialog {
		background: url(../../../assets/img/dialog.jpg) no-repeat;
		background-position: 50% 50%;
		background-size: cover;
		width: 100%;
		height: 120px;
	}

	.dialogPicture {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 120px;
		background-color: rgba(56, 59, 61, 0.85);
	}

	.dialogPicture img {
		width: 100%;
	}

	.userPicture img {
		width: 100%;
	}

	.userPicture {
		width: 36px;
		height: 36px;
		background-size: cover;
		border-radius: 50px;
	}

	.userName {
		margin-top: 10px;
		color: #fff;
	}

	/** PC **/
	@media only screen and (min-width: 1024px) and (max-width:1300px) {
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

		.head {
			width: 1000px;
		}

		.logoInto {
			margin-left: 200px;
		}
	}

	/** iPad **/
	@media only screen and (min-width: 768px) and (max-width: 1023px) {
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

		#login,
		#noLogin {
			background-color: #009fa0;
			width: 120px;
			padding: 5px 0;
			border-radius: 3px;
			position: absolute;
			right: 0;
			top: 87px;
			display: block;
			z-index: 9;
		}

		#login li,
		#noLogin li {
			color: #fff;
			font-size: 16px;
			margin: 10px auto;
			padding: 0 0 5px 5px;
			width: 80px;
			display: block;
		}

		.mobileIcon {
			position: relative;
		}

		.mobileIcon img {
			width: 30px;
		}

		.userPicture img {
			width: 36px;
		}

		.headLeft {
			width: 100%;
		}

		.head {
			width: 718px;
		}
	}

	/** iPhone **/
	@media only screen and (min-width: 320px) and (max-width: 767px) {
		.content {
			width: 95%;
			margin-bottom: 30px;
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

		#login,
		#noLogin {
			background-color: #009fa0;
			width: 120px;
			padding: 5px 0;
			border-radius: 3px;
			position: absolute;
			right: 0;
			top: 87px;
			display: block;
			z-index: 9;
		}

		#login li,
		#noLogin li {
			color: #fff;
			font-size: 16px;
			margin: 10px auto;
			padding: 0 0 5px 5px;
			width: 80px;
			display: block;
		}

		.mobileIcon img {
			width: 37px;
		}

		.dialogPicture img {
			width: 100%;
		}

		.userPicture img {
			width: 100%;
		}

		.userPicture {
			width: 44px;
			height: 44px;
			background-size: cover;
			border-radius: 50px;
		}

		.userName {
			margin-top: 10px;
			color: #fff;
		}

		.dialogPicture {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 120px;
			background-color: rgba(56, 59, 61, 0.85);
		}

		.dialog {
			background: url(../../../assets/img/dialog.jpg) no-repeat;
			background-position: 50% 50%;
			background-size: cover;
			width: 100%;
			height: 120px;
		}

		.headLeft {
			width: 100%;
			padding: 0 20px;
		}

		.head {
			width: 100%;
		}

		.logoPicture {
			width: 100%;
		}

		.logoPicture img {
			/*width:166px;*/
		}
	}
</style>

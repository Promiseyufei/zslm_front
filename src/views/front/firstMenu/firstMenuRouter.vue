<!-- 一级导航页面，路由出口 -->
<template>
    <div>
    	<!-- 头部导航 -->
	    	<div class="head">
	    		<div class="headLeft">
	    			<div class="logoPicture"><img src="../../../assets/img/logoGreen.png"></div>
			        <div class="firstMenu" v-show="firstMenu">
			        	<el-menu
						  :default-active="activeIndex"
						  class="el-menu-demo"
						  mode="horizontal"
						  @select="handleSelect"
						  text-color="#6e6e6e"
						  active-text-color="#009fa0">
						  <el-menu-item index="1">选院校</el-menu-item>
						  <el-menu-item index="2">找活动</el-menu-item>
						  <el-menu-item index="3">看资讯</el-menu-item>
						  <el-menu-item index="4" style="border:0;padding-right:0;">搜辅导</el-menu-item>
						</el-menu>
			        </div>
			        <div @click="isLogin" v-show="mobileIcon" class="mobileIcon">
			        	<img @click="dialogVisible = true" style="margin-top: 0;"  src="../../../assets/img/mobileIcon.png">
			        	<el-dialog
						  :visible.sync="dialogVisible"
						  width="70%" >
						  <div style="width:100%;height:130px;background-color:red;"></div>
						  <div style="padding:0 20px;">
						  	  <el-button type="text" @click="">我的关注</el-button>
							  <el-button type="text">我的活动</el-button>
							  <el-button type="text">我的优惠券</el-button>
							  <el-button type="text">我的消息</el-button>
							  <el-button type="text">我的账户</el-button>
						  </div>
						  <!-- <span slot="footer" class="dialog-footer"></span> -->
						</el-dialog>
			        </div>

	    		</div>
		        <div class="logoInto" v-show="logoInto">
		        		<div><i class="el-icon-search"></i></div>
			        	<el-badge :value="200" :max="10" class="item">
						  <img src="../../../assets/img/messageLogo.png">
						</el-badge>
						<div><i class="el-icon-question"></i></div>
		        </div>
	    	</div>
    	<!-- 头部导航 -->
    	<router-view/>
    	<!-- 页脚 -->
	        <div class="footer" v-show="footer">
	        	<div class="footerTop">
	        		<div class="footerLogo"><img src="../../../assets/img/MBA.png"></div>
	        		<div class="footerMenu">
	        			<div>
	        				<ul>
	        					<li @click="aboutUs">关于我们</li>
	        					<li @click="helpCenter">帮助中心</li>
	        					<li @click="lawStatement">法律声明</li>
	        				</ul>
	        			</div>
	        			<div>
	        				<ul>
	        					<li @click="userList">用户条款</li>
	        					<li @click="problemBack">问题反馈</li>
	        				</ul>
	        			</div>
	        		</div>
	        		<div class="footerAddres">
		        		<div class="footerAddresOne">
		        			<p><span><i class="fa fa-phone"></i></span>010-56980320</p>
		        		</div>
	        			<p>周一至周五 9:00-18:00</p>
	        			<p>北京荣美福地科技有限公司</p>
	        		</div>
	        	</div>
	        	<div class="footerBott">
	        		<div><p>© MBA Helper 2018</p></div>
	        		<div><p>京ICP备13040890号-1</p></div>
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
	        	dialogVisible: false,
	        	activeIndex: '1',
	        	firstMenu:true,
	        	logoInto:true,
	        	mobileIcon:false,
	        	footer:true,
	        }
	    },
	    methods: {
	    	// handleClose(done) {
		    //     this.$confirm('确认关闭？')
		    //       .then(_ => {
		    //         done();
		    //       })
		    //       .catch(_ => {});
		    //  },
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
	    		// switch(key) {
	    		// 	case 1:
	    		// 	this.$router.push('/front/firstMenuRouter/selectCollege');
	    		// 	console.log(123)
	    		// 	break;
	    		// 	case 2:
	    		// 	this.$router.push('/front/firstMenuRouter/lookActivity');
	    		// 	break;
	    		// 	case 3:
	    		// 	this.$router.push('/front/firstMenuRouter/viewInformation');
	    		// 	break;
	    		// 	case 4:
	    		// 	this.$router.push('/front/firstMenuRouter/searchCoach');
	    		// 	break;

	    		// }
	    		// this.activeIndex == '1' ? this.$router.push('/front/firstMenuRouter/selectCollege') : this.$router.push('/front/firstMenuRouter/lookActivity');
	    		sessionStorage.setItem("active",key);
	    		// this.activeIndex = sessionStorage.getItem("active");
	    		// console.log(key)
	    		// console.log(23)
		    	
		    },
		    //刷新菜单高亮不变
		    rushPage:function(){
		    	if (sessionStorage.getItem("active")){
		    		this.activeIndex=sessionStorage.getItem("active")
		    		if (this.activeIndex==1) {
		        		this.$router.push({
				    		path:'/front/firstMenuRouter/selectCollege',
				    	});
		        	} else if (this.activeIndex==2) {
		        		this.$router.push({
				    		path:'/front/firstMenuRouter/lookActivity',
				    	});
		        	} else if(this.activeIndex==3) {
		        		this.$router.push({
				    		path:'/front/firstMenuRouter/viewInformation',
				    	});
		        	} else if(this.activeIndex==4) {
		        		this.$router.push({
				    		path:'/front/firstMenuRouter/searchCoach',
				    	});
		        	}
		    	} else{
		    		if (this.activeIndex==1) {
		        		this.$router.push({
				    		path:'/front/firstMenuRouter/selectCollege',
				    	});
		        	} else if (this.activeIndex==2) {
		        		this.$router.push({
				    		path:'/front/firstMenuRouter/lookActivity',
				    	});
		        	} else if(this.activeIndex==3) {
		        		this.$router.push({
				    		path:'/front/firstMenuRouter/viewInformation',
				    	});
		        	} else if(this.activeIndex==4) {
		        		this.$router.push({
				    		path:'/front/firstMenuRouter/searchCoach',
				    	});
		        	}
		    	}
		    },
		    //判断是否登录
		    isLogin:function(){
		    	this.getUserState('user');
		    	// let aa = 2;
		    	// if (aa==1) {
		    	// 	let login = document.getElementById('login');
			    // 	if (login.style.display == "none") 
			    // 		login.style.display = "block";
			    // 	else
			    // 		login.style.display = "none";
		    	// } else{
		    	// 	let noLogin = document.getElementById('noLogin');
			    // 	if (noLogin.style.display == "none") 
			    // 		noLogin.style.display = "block";
			    // 	else
			    // 		noLogin.style.display = "none";
		    	// }
		    	// if (this.getUserState('user')){
		    		
		    	// } else{

		    	// }
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

	    },
	    mounted(){
	    	this.rushPage();
	    	//手机端改变样式
	     	let w = document.documentElement.offsetWidth || document.body.offsetWidth;
			if(w < 992){ //手机端不显示一级菜单和右侧图标，右侧显示list图标
				this.firstMenu = false;
				this.logoInto = false;
				this.mobileIcon = true;
				this.footer = false;
			}

		},
	};
</script>
<style>
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
		/*padding: 20px 10px;*/
	}
	.mobileIcon .el-dialog__body {
		padding: 0 0 100%;
	}
	.mobileIcon .el-button+.el-button {
		margin-left: 0;
	}
	.mobileIcon .el-dialog {
		margin-top: 0;
		margin-left: 50%;
	}
	.logoInto .el-badge {
		margin: 0 33px 0 21px;
	}
	.el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
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
	}
	.firstMenu .el-menu--horizontal {
		border-bottom: 0;
		background-color: #fff;
	}


</style>

<style scoped>
	.footerBott p {
		opacity: 0.65;
		color: rgb(255, 255, 255);
		font-size: 12px;
	}
	.footerBott {
		width: 1280px;
		margin-top: 31px;
		display: flex;
		justify-content:space-between;
	} 
	.footerAddres span {
		margin-right: 12px; 
	}
    .footerAddres p {
    	color: rgb(255, 255, 255);
    	font-size: 23px;
    }
	.footerAddres>p {
		font-size: 12px;
	    font-weight: bold;
	    color: rgb(255, 255, 255);
	    margin-top: 9px;
	}
	.footerAddres {
		width: 198.2px;
		text-align: right;
	}
	.footerMenu div {
		margin-right: 78px;
	}
	.footerMenu li:hover {
		opacity: 0.7;
	}
	.footerMenu li {
		color: rgb(255, 255, 255);
		margin-bottom: 11px;
		font-size: 14px;
		cursor: pointer;
	}
	.footerMenu {
		display: flex;
		justify-content:start;
		width: 761.8px;
	}
	.footerLogo img {
		width: 166px;
	}
	.footerLogo {
		width: 320px;
	}
	.footerTop {
		display: flex;
		justify-content:space-between;
	}
	.footer {
		display: flex;
		flex-direction: column;
		align-items:center;
		justify-content:center;
		width: 100%;
		height: 251px;
		background-color: rgb(56, 59, 61);
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
		width: 166px;
		height: auto;
	}
	.logoInto {
		width: 134px;
		/*margin-left: 300px;*/
		display: flex;
		align-items:center;
	}
	.headLeft {
		width: 569px;
		display: flex;
		justify-content:space-between;
		align-items:center;
	}
	.head {
		width: 1281px;
		margin: 23.5px auto;
		display: flex;
		overflow: hidden;
		justify-content:space-between;
	}
	/** PC **/
	@media only screen and (min-width: 1024px) and (max-width:1300px) {
		.footerBott {
            width: 900px;
        }
		.footerMenu {
			width: 400px;
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
		.footerLogo {
			width: 200px;
		}
		.footerMenu {
			width: 280px;
		}
		#login,#noLogin {
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
		#login li,#noLogin li {
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
		.headLeft {
			width: 100%;
		}
		.head {
			width: 718px;
		}
	}
	/** iPhone **/
	@media only screen and (min-width: 320px) and (max-width: 767px) {
		 
		#login,#noLogin {
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
		#login li,#noLogin li {
			color: #fff;
			font-size: 16px;
			margin: 10px auto;
			padding: 0 0 5px 5px;
			width: 80px;
			display: block;
		}
		.mobileIcon {
			/*width: 150px;*/
			/*height:100px;*/
			/*position: relative;*/
		}
		.mobileIcon img {
			width: 37px;
		}
		.headLeft {
			width: 100%;
			padding: 0 10px;
		}
		.head {
			width: 100%;
		}
		.logoPicture {
			width: 100%;
		}
	}
</style>
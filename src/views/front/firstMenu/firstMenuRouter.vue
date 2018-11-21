<!-- 一级导航页面，路由出口 -->
<template>
    <div>
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
					  <!-- <div class="divLine">|</div> -->
					  <el-menu-item index="2">找活动</el-menu-item>
					   <!-- <div class="divLine">|</div> -->
					  <el-menu-item index="3">看资讯</el-menu-item>
					   <!-- <div class="divLine">|</div> -->
					  <el-menu-item index="4">搜辅导</el-menu-item>
					</el-menu>
		        </div>
		        <div v-show="mobileIcon" class="mobileIcon"><img src="../../../assets/img/messageLogo.png"></div>
    		</div>
	        <div class="logoInto" v-show="logoInto">
	        		<i class="el-icon-search"></i>
		        	<el-badge :value="200" :max="10" class="item">
					  <img src="../../../assets/img/messageLogo.png">
					</el-badge>
					<i class="el-icon-question"></i>
	        </div>
    	</div>
    	<router-view/>
        <div class="footer"></div>
    </div>
</template>

<script>
	export default {
	    components: {
	    },
	    data() {
	        return {
	        	activeIndex: '1',
	        	firstMenu:true,
	        	logoInto:true,
	        	mobileIcon:false,
	        }
	    },
	    methods: {
	    	//组件自带——key为选中的当前页面ID
	    	handleSelect(key, keyPath) {
		    	// console.log(key, keyPath);
		    	if (key==1) {
	        		this.$router.push({
			    			path:'/front/firstMenuRouter/selectCollege',
			    		});
	        	} else if (key==2) {
	        		this.$router.push({
			    			path:'/front/firstMenuRouter/lookActivity',
			    		});
	        	} else if(key==3) {
	        		this.$router.push({
			    			path:'/front/firstMenuRouter/viewInformation',
			    		});
	        	} else if(key==4) {
	        		this.$router.push({
			    			path:'/front/firstMenuRouter/searchCoach',
			    		});
	        	}
		    },
	    },
	    mounted(){
	    	//手机端改变样式
	    	let w = document.documentElement.offsetWidth || document.body.offsetWidth;
			if(w < 992){
				this.firstMenu = false;
				this.logoInto = false;
				this.mobileIcon = true;
			}

		    },
	};
</script>
<style>
	.logoInto .el-badge {
		margin: 0 55px 0 35px;
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
		margin: 0 20px;
		padding: 0;
		color: #009fa0;
	}
	.firstMenu .el-menu--horizontal {
		border-bottom: 0;
	}


</style>


<style scoped>
	.logoInto i {
		width: 21px;
	    height: 21px;
	    font-size: 24px;
	    color: #009FA1;
	}
	.firstMenu {
		width: 355px;
	}
	.logoPicture {
		width: 166px;
		height: auto;
	}
	.logoInto {
		width: 142px;
		margin-left: 300px;
		display: flex;
		align-items:center;
	}
	.headLeft {
		width: 569px;
		display: flex;
		justify-content:space-between;
		align-items:center;
		padding: 0 10px;
	}
	.head {
		width: 1300px;
		margin: 25px auto;
		display: flex;
		overflow-x: hidden;
		justify-content:start;
	}
	/** iPad **/
	@media only screen and (min-width: 1024px) and (max-width:1300px) {
		.head {
			width: 1000px;
		}
		.logoInto {
			margin-left: 200px;
		}
	}
	/** iPad **/
	@media only screen and (min-width: 768px) and (max-width: 1023px) {
		.mobileIcon {
			width: 30px;
			height: 30px;
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
		.mobileIcon {
			width: 30px;
			height: 30px;
		}
		.headLeft {
			width: 340px;
			padding: 0 10px;
		}
		.head {
			width: 340px;
		}
		.logoPicture {
			width: 100%;
		}
	}
</style>
<!-- 一级导航页面，路由出口 -->
<template>
    <div>
    	<div class="head">
    		<div class="headLeft">
    			<div class="logoPicture"><img src="../../../assets/img/logoGreen.png"></div>
		        <div class="firstMenu">
		        	<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						<el-tab-pane label="用户管理" name="1"></el-tab-pane>
					    <el-tab-pane label="配置管理" name="2"></el-tab-pane>
					    <el-tab-pane label="角色管理" name="3"></el-tab-pane>
					    <el-tab-pane label="定时任务补偿" name="4"></el-tab-pane>
					</el-tabs>
		        </div>
    		</div>
	        <div class="logoInto">
	        	<i class="el-icon-search"></i>
	        	<el-badge :value="200" :max="10" class="item">
				  <img src="../../../assets/img/messageLogo.png">
				</el-badge>
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
        	activeName: '1'
        }
    },
    methods: {
    	handleClick(tab, event) {
        	// console.log(this.activeName);
        	if (this.activeName==1) {
        		this.$router.push({
		    			path:'/front/firstMenuRouter/selectCollege',
		    		});
        	} else if (this.activeName==2) {
        		this.$router.push({
		    			path:'/front/firstMenuRouter/lookActivity',
		    		});
        	} else if(this.activeName==3) {
        		this.$router.push({
		    			path:'/front/firstMenuRouter/viewInformation',
		    		});
        	} else if(this.activeName==4) {
        		this.$router.push({
		    			path:'/front/firstMenuRouter/searchCoach',
		    		});
        	} 
      	},
    },
    mounted(){

    },
};
</script>
<style>
</style>


<style scoped>
	.logoInto i {
		width: 21px;
	    height: 21px;
	    font-size: 24px;
	    color: #009FA1;
	}
	
	.firstMenu {
		width: 70%;
	}
	.logoPicture {
		width: 166px;
	}
	.logoInto {
		width: 30%;
	}
	.headLeft {
		width: 70%;
		display: flex;
		justify-content:center;
	}
	.head {
		width: 1300;
		margin: 25px auto;
		display: flex;
		overflow: hidden;
		justify-content:space-between;
	}
	/** iPad **/
	@media only screen and (min-width: 768px) and (max-width: 1024px) {
		
	}
	/** iPhone **/
	@media only screen and (min-width: 320px) and (max-width: 767px) {
		.head {
			width: 340px;
		}
	}
</style>
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
	        <!-- <div class="logoInto">
	        	<i class="el-icon-search"></i>
	        	<el-badge :value="200" :max="10" class="item">
				  <img src="../../../assets/img/messageLogo.png">
				</el-badge>
	        </div> -->
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
        	console.log(this.activeName);
        	if (this.activeName==1) {
        		this.$router.push({
		    			// path:'/front/firstMenu/firstMenuRouter/selectCollege',
		    		});
        		console.log(123)
        	} else if (this.activeName==1) {
        		this.$router.push({
		    			// path:'/front/firstMenu/firstMenuRouter/lookActivity',
		    		});
        	};
      	},
    	// selectCollege:function(){
    	// 	this.$router.push({
		   //  			path:'/front/firstMenu/firstMenuRouter/selectCollege',
		   //  		});
    	// },
    	// lookActivity:function(){
    	// 	this.$router.push({
		   //  			path:'/front/firstMenu/firstMenuRouter/lookActivity',
		   //  		});
    	// },
    	// viewInformation:function(){
    	// 	this.$router.push({
		   //  			path:'/front/firstMenu/firstMenuRouter/viewInformation',
		   //  		});
    	// },
    	// searchCoach:function(){
    	// 	this.$router.push({
		   //  			path:'/front/firstMenu/firstMenuRouter/searchCoach',
		   //  		});
    	// }
    },
    mounted(){

    },
};
</script>
<style>
</style>


<style scoped>
	/*.logoInto i {
		width: 21px;
	    height: 21px;
	    font-size: 24px;
	    color: #009FA1;
	}*/
	.logoInto {
		width: 20%;
		margin-right: 300px;
	}
	.firstMenu {
		width: 70%;
	}
	.logoPicture {
		width: 30%;
	}
	.headLeft {
		width: 80%;
		display: flex;
		justify-content:space-between;
	}
	.head {
		width: 60%;
		margin: 25px auto;
		display: flex;
		overflow: hidden;
		justify-content:space-between;
	}
</style>
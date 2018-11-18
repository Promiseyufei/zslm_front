<!-- 一级导航页面，路由出口 -->
<template>
    <div>
    	<div class="head">
    		<div class="logoPicture"></div>
	        <div class="firstMenu">
	        	<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
					<el-tab-pane label="用户管理" name="first"></el-tab-pane>
				    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
				    <el-tab-pane label="角色管理" name="third"></el-tab-pane>
				    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
				</el-tabs>
	            <!-- <el-breadcrumb separator="|">
				  <el-breadcrumb-item @click="selectCollege">选院校</el-breadcrumb-item>
				  <el-breadcrumb-item @click="lookActivity">找活动</el-breadcrumb-item>
				  <el-breadcrumb-item @click="viewInformation">看资讯</el-breadcrumb-item>
				  <el-breadcrumb-item @click="searchCoach">搜辅导</el-breadcrumb-item>
				</el-breadcrumb> -->
	        </div>
	        <div class="logoInto"></div>
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
        	activeName: 'first'
        }
    },
    methods: {
    	handleClick(tab, event) {
        	console.log(this.activeName);
      	},
    	selectCollege:function(){
    		this.$router.push({
		    			path:'/front/firstMenu/firstMenuRouter/selectCollege',
		    		});
    	},
    	lookActivity:function(){
    		this.$router.push({
		    			path:'/front/firstMenu/firstMenuRouter/lookActivity',
		    		});
    	},
    	viewInformation:function(){
    		this.$router.push({
		    			path:'/front/firstMenu/firstMenuRouter/viewInformation',
		    		});
    	},
    	searchCoach:function(){
    		this.$router.push({
		    			path:'/front/firstMenu/firstMenuRouter/searchCoach',
		    		});
    	}
    },
    mounted(){

    },
};
</script>
<style>
</style>
<style scoped>



</style>
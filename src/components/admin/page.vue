<template>
	<el-pagination samll @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.page" :page-sizes="pageSizes" :page-size="page.limit" layout="total, sizes, prev, pager, next, jumper" :total = "total">
    </el-pagination>
</template>

<script>
export default {
	data() {
		return {
			pageSizes:[10,20,50],
			page:{
				page:1,//默认第一页
				limit:10//默认显示一百条
			},
		};
	},
	props:["total", "limit"],
	watch:{
		limit(limit) {
			this.page.limit = limit;
		}
	},
    methods:{
    	//每页总条数变更
    	handleSizeChange(val) {
    		this.page.limit = val;
			console.log(111)
    		this.$emit('pageChange',this.page);
	    },

	    //当前页码变更
	    handleCurrentChange(val) { 
	    	this.page.page = val;
	    	this.$emit('pageChange',this.page);
	    },
    },
    mounted(){
          
    }
}
</script>

<style scoped>



</style>


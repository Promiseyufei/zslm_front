<template>
	<el-pagination samll @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.page" :page-sizes="pageSizes" :page-size="page.limit" layout="total, sizes, prev, pager, next, jumper" :total = "total">
    </el-pagination>
</template>

<script>
export default {
	data() {
		return {

			pageSizes:[5,20,50],

			page:{
				page:1,//默认第一页
				limit:5//默认显示一百条
			},
		};
	},
	props:["total"],
    methods:{
    	//每页总条数变更
    	handleSizeChange(val) {
    		this.page.limit = val;
    		this.$emit('pageChange',this.page);
	    },

	    //当前页码变更
	    handleCurrentChange(val) { 
	    	this.page.page = val;
	    	this.$emit('pageChange',this.page);
	    	// if (this.page.page) {
	    	// 	this.$emit('query');
	    	// 	console.log(this.page.page);

	    	// };
	    	// this.$emit('gettable_info');
	    	// this.$emit('showbox',val);
	    },
    },
    mounted(){
            // this.handleCurrentChange();
            // console.log(this.total);
    }
}
</script>

<style scoped>



</style>


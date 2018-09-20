<template>
	<!-- <div class="block">
	  <span class="demonstration"></span>
	  <el-pagination
	    layout="prev, pager, next" :page-size="number" :total="count">
	  </el-pagination>
	</div> -->
	<el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="number"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count">
      </el-pagination>
</template>

<script>
export default {
	data() {
		return {
			// currentPage4,
		}
	},
    props:["count","number","currentPage4"],
    methods:{
    	handleSizeChange(val) {
    		this.$emit('query');
    		this.$emit('gettable_info');
	    },
	    handleCurrentChange(val) { 
	    	this.$emit('query');
	    	this.$emit('gettable_info');
	    	this.$emit('showbox',val);
	    },
    }
}
</script>

<style scoped>



</style>


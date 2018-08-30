<template>
		<div>
			<Tab :table-data="tableData" :page="Page"></Tab>
		</div>
</template>
<script>
export default {
	data() {
	    return {
	    	Page:'',
	    	tableData:'',
	      	isCollapse: true
	    };
	},
	methods: {},
	mounted(){}
}

</script>

<style scoped>
	.table {
		/*width: 100px;*/
	}
</style>
<template>
	<div>
		<div>
			<Tab></Tab>
		</div>
	</div>
</template>
<script>
	export default {
	    data() {
	        return {
	          isCollapse: true
	        };
	    },
	    methods: {
	        handleOpen(key, keyPath) {
	          console.log(key, keyPath);
	        },
	        handleClose(key, keyPath) {
	          console.log(key, keyPath);
	        }
	    }
	}

</script>

<style scoped>
	/*.top {
		display: flex;
		justify-content: space-between;
	}*/
	/*.screen {
		font-weight: bold;
		font-size: 14px;
		color: #666;
		font-family:'Tahoma';
		background-color: #F3F3F3;
		height: 30px;
		border: 1px solid #E4E4E4;
		padding: 15px 0 0 35px;
		margin: -10px 0 0 20px;
	}*/
</style>
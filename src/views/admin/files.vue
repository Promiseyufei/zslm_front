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
	
</style>
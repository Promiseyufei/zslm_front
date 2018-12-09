<template>
    <div>
      <!-- <p>this is front.vue</p> -->
      <router-view  :key="$route.path"/>
    </div>
	
</template>

<script>
export default {
	name: 'App',
	// provide() {
	// 	return {
	// 		reload: this.reload
	// 	}
	// },
	data() {
		return {
			isRouterAlive:true
		}
	},
	methods: {
		// reload() {
		// 	this.isRouterAlive = false;
		// 	this.$nextTick(function() {
		// 		this.isRouterAlive = true;
		// 	})
		// }
	}
}
</script>

<style>
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
	.el-message {
		min-width: 95%;
	}
}
</style>

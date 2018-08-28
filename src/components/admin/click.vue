 <template>
	<div>
		<el-button size="small" type="primary" class="click">点击上传</el-button>
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
	.el-button--primary {
		position: absolute;
		right: 0;
		z-index: 1;
	    padding: 9px 15px;
	    width: 80px;
	    height: 35px;
	    background-color: #1ABC9C;
	    border-color: #1ABC9C;
	}
	.el-button--primary:hover {
		background-color: #1ABC9C;
		opacity: 0.8;
		border-color: #1ABC9C;
	}

</style>
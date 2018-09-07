 <template>
	<div class="Select">
		<div class="Select-top">
			<p>运营管理</p>
			<p class="span">/</p>
			<p>分享管理</p>
		</div>
		<div class="Select-steps">
			<el-steps :active="1" align-center>
			  <el-step title="选择院校专业"></el-step>
			  <el-step title="上传文件"></el-step>
			</el-steps>
		</div>
		<div class="SelectUnivers">
			<div class="SelectUnivers-left">
				<div class="leftImg">
					<i class="el-icon-view"></i>
					<p>选择院校专业</p>
				</div>
			</div>
			<div class="SelectUnivers-right">
				<!-- <div class="SelectUnivers-condition">
					<div class="condition-input">
						<el-input placeholder="请输入内容" v-model="input10"clearable></el-input>
						<el-button size="mini" icon="el-icon-search"></el-button>
					</div>
					<div class="condition-button">
						<el-button type="primary">全部</el-button>
					</div>
				</div> -->
				<div class="rightTabs">
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	    data() {
	        return {
	        	// activeName: 'second',
	        	input10:'',
	        };
	    },
	    methods: {
	        handleClick(tab, event) {
		    	console.log(tab, event);
		    }
	    }
	}

</script>

<style scoped>
	.leftImg p {
		position: relative;
		left: 35px;
	}
	.leftImg i {
		position: absolute;
		left: 15px;
		top: 17px;
	}
	.leftImg {
		position: relative;
		top: 50px;
		color: #FFF;
		font-size: 14px;
		width: 200px;
		height: 50px;
		display: flex;
		background: url(../../assets/img/point.png) no-repeat;
		background-size: 100% 100%;
	}
	.condition-button {
		position: absolute;
		right: 80px;
		top: 50px;
	}
	.condition-input {
		position: absolute;
		left: 80px;
		top: 50px;
	}
	.SelectUnivers-condition {
		position: relative;
	}
	.SelectUnivers-condition,.condition-input {
		display: flex;
	}
	.SelectUnivers-right {
		width: 1320px;
		height: 785px;
		border: 1px solid #DDD;
		border-left: 1px solid #fff;
	}
	.SelectUnivers-left {
		width: 180px;
		height: 785px;
		background-color: #fcfcfc;
		/*border: 1px solid #DDD;*/
	}
	.SelectUnivers div {
		margin: 0 auto;
	}
	.SelectUnivers {
		width: 1500px;
		margin: 0 auto;
		display: flex;
	}
	.el-step.is-horizontal .el-step__line {
	    top: 25px;
	}
	.el-step__icon.is-text {
	    width: 50px;
	    height: 50px;
	}
	.Select-steps {
		width: 450px;
		margin: 0 auto;
	}
	.span {
		margin: 10px 6.5px;
	}
	.Select-top p {
		font-size: 10px;
		color: #999;
	}
	.Select-top {
		display: flex;
		margin: 0 0 10px 60px;
	}
</style>
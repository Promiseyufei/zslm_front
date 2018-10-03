 <template>
	<div class="Select">
		<div class="Select-top">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>文件上传</el-breadcrumb-item>
			  <el-breadcrumb-item>选择院校专业</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="Select-steps">
			<el-steps :active=".1" align-center>
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
				<!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
				    <el-radio-button label="top">top</el-radio-button>
				    <el-radio-button label="right">right</el-radio-button>
				    <el-radio-button label="bottom">bottom</el-radio-button>
				    <el-radio-button label="left">left</el-radio-button>
				</el-radio-group> -->
				<!-- <div ></div> -->

				<!-- 城市按钮 -->
				<el-tabs>
				    <div class="SelectUnivers-city">
					    <el-checkbox-group v-model="checkboxGroup1" v-for = "(vals,index) in button" :key="index">
						    <div class="region">{{vals.butregion}}</div>
							<el-checkbox-button v-model="butname" @click.native = "clickgetcity_info" v-for = "(val,indexs) in vals.city" :key="indexs" :label="val.name">{{val.name}}</el-checkbox-button>
						</el-checkbox-group>
				    </div>
				</el-tabs>
				<div class="SelectUnivers-name" v-for = "(reg,regs) in region" :key="regs">
					<div class="cityname">{{reg.name}}</div>
					<el-radio-group v-for = "(vals,val) in Name" :key="val" v-model="majorname">
						<el-radio-button v-for = "(val,vals) in vals.line" :key="vals"  :label="val.majorname">
							<div>{{val.majorname}}</div>
						</el-radio-button>
					</el-radio-group>
				</div>
				<div class="ellipsis">……</div>
				<div class="page"> 
			  		<el-pagination background layout="prev, pager, next" :total="count" @click.native = "getcity_info">
					</el-pagination>
				</div>
			</div>
			
		</div>
		<div class="footer">
			<span class="Selected">当前已选择：<span class="majorname">{{majorname}}</span></span>
		</div>
		
	</div>
</template>
<script>
	const buttons = [
			    	{	
			    		butregion:'华北',
			    		city:[
				    		{name:'北京'},
				    		{name:'天津'},
						    {name:'河北'},
						    {name:'山西'},
						    {name:'内蒙古'}
			    		]
			    	},
		        	{
		        		butregion:'东北',
		        		city:[
				    		{name:'辽宁'},
				    		{name:'吉林'},
						    {name:'黑龙江'},
			    		]
		        	},
		        	{
		        		butregion:'华东',
		        		city:[
				    		{name:'上海'},
				    		{name:'江苏'},
						    {name:'浙江'},
						    {name:'江西'},
						    {name:'安微'},
						    {name:'福建'},
						    {name:'山东'}
			    		]
		        	},
		        	{
		        		butregion:'中南',
		        		city:[
				    		{name:'河南'},
				    		{name:'湖北'},
						    {name:'湖南'},
						    {name:'广东'},
						    {name:'广西'},
						    {name:'海南'}
			    		]
		        	},
		        	{
		        		butregion:'西南',
		        		city:[
				    		{name:'重庆'},
				    		{name:'四川'},
						    {name:'贵州'},
						    {name:'云南'},
						    {name:'西藏'}
			    		]
		        	},
		        	{
		        		butregion:'西北',
		        		city:[
				    		{name:'陕西'},
				    		{name:'甘肃'},
						    {name:'青海'},
						    {name:'宁夏'},
						    {name:'新疆'}
			    		]
		        	},
		        	{
		        		butregion:'港澳台',
		        		city:[
				    		{name:'香港'},
				    		{name:'澳门'},
						    {name:'台湾'},
			    		]
		        	},
	        	];
	export default {
	    data() {
	        return {
	        	majorname:'',
	        	// majorname:'',
	        	butname:'',
	        	count:100,
	        	checkboxGroup1: ['北京','天津'],
	        	button: buttons,
	        	region:[
		        	{name:''},
	        	],
	        	Name:{
	        		// column:{
	        		// 	cityname:'',
	        		// },
	        		line:{
	        			majorname:'',
	        		},
		        },
	        	radio2:'',
    			i: 0,
	        	input10:'',
	        };
	    },
	    methods: {
	    	toshow2(msg) {
		        this.msg = msg;
		        console.log(this.msg);
		    },
	        handleClick(tab, event) {
		    	console.log(tab, event);
		    	// console.log(this.buttons.city);
		    },
		    getcity_info: function(){
		    	var that = this;
		        axios.post('/admin/SelectUnivers/getcity-info',{
		          //后台参数，前台参数(传向后台)
		          butname: that.butname,
		        })
		        .then(function (response) {
		            var res = response.data;
		            if (res.code == 0) {
		                that.region = res.region;
		                that.Name = res.Name;
		                // console.log( that.region);
		                that.count = res.count;
		                // console.log(that.number);
		            };
		        })
		        .catch(function (error) {
		        });
		    },
		    clickgetcity_info: function(){
		    	var that = this;
		        axios.post('/admin/SelectUnivers/clickgetcity-info',{
		          //后台参数，前台参数(传向后台)
		          // type: that.filesForm.type,
		        })
		        .then(function (response) {
		            var res = response.data;
		            if (res.code == 0) {
		                that.region = res.region;
		                that.Name = res.Name;
		                // console.log(that.number);
		            };
		        })
		        .catch(function (error) {
		            // console.log(error);
		        });
		    },
	    },
	    mounted(){
	    	this.getcity_info();
  		}
	}

</script>
<style>
	.SelectUnivers-city .el-checkbox-group {
	    font-size: 12px;
	    display: flex;
	}
	.SelectUnivers-city .el-checkbox-button, .el-checkbox-button__inner {
	    margin: 5px 0 0 5px;
	}
	.SelectUnivers-name .el-radio-button__inner {
		background: #e9eef3;
		border: 1px solid #e9eef3;
		color: #333;
	}
	.SelectUnivers-name .el-radio-button:first-child .el-radio-button__inner {
		/*border-left: 1px solid #e9eef3;*/
	}
	.SelectUnivers-name .el-radio-button__orig-radio:checked+.el-radio-button__inner {
		color: #409EFF;
		background-color: #e9eef3;
		border-left: 1px solid #e9eef3;
	}
	
</style>

<style scoped>
	.footer {
		width: 1500px;
		margin: 0 auto;
	}
	.majorname {
		color: #ff0000;
	}
	.ellipsis {
		margin: 0 0 0 60px;
	}
	.Selected {
		padding: 0 0 0 250px; 
		font-size: 10px;
		color: #999;
	}
	.region {
		height: 60px;
		line-height: 60px;
		font-size: 12px;
		color: #666;
	}
	.cityname  {
		margin: 0 0 0 15px;
		font-size: 14px;
		color: #666;
	}
	.page {
		text-align: right;
		background-color: #e9eef3;
		margin: 20px 0 40px 0;
	}
	.SelectUnivers-name {
		margin: 40px 0 0 45px;
		display: flex;
    	flex-direction: column;
	}
	.SelectUnivers-city {
		margin: 0 0 0 50px;
	}
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
		border: 1px solid #DDD;
		border-left: 1px solid #fff;
	}
	.SelectUnivers-left {
		width: 180px;
		background-color: #fcfcfc;
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
		width: 1500px;
		margin: 0 auto;
	}
</style>
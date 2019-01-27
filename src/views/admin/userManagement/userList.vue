<template>
	<div>
		<el-breadcrumb separator="/" style="width: 1500px;margin: 0 auto 20px">
			<el-breadcrumb-item>账户管理</el-breadcrumb-item>
			<el-breadcrumb-item>
				<div class="now-page">注册用户</div>
			</el-breadcrumb-item>
		</el-breadcrumb>
		<div style="width: 1500px;margin: 0 auto 20px">
			<a style="display: block;
                    float: none;
                    width: 80px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    text-decoration: none;"
			 class="export-button" :href="uploadUrl">
				<!--需要配置域名-->
				导出
			</a>
		</div>
		<div class="filesquery">
			<i class="el-icon-search"></i>
			<p class="screen">筛选查询</p>
			<el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native="f5">刷新</el-button>
		</div>

		<div class="filesForm">

			<el-form class="input" v-model="userFrom" label-width="80px" style="width: 100%">
				<el-form-item label="手机号">
					<el-input size="medium" placeholder="请输入手机号" v-model="phone_v"></el-input>
				</el-form-item>
				<el-form-item label="昵称">
					<el-input size="medium" placeholder="请输入用户昵称" v-model="name_v"></el-input>
				</el-form-item>
				<el-form-item label="真实姓名">
					<el-input size="medium" placeholder="请输入用户姓名" v-model="realname_v"></el-input>
				</el-form-item>
				<el-form-item style="float: right">
					<el-button class="query-button" size="mini" type="primary" icon="el-icon-search" @click.native="queryUserMsg()">查询</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="files-datalist">
			<i class="el-icon-tickets"></i>
			<p class="screen">数据列表</p>
			<div class="datalist-selecttwo">
				<el-select size="mini" v-model="Sorting" placeholder="默认顺序" style="width: 120px" @change="sortingChage">
					<el-option v-for="(item,index) in sorting" :key="index" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
		</div>
		<div v-loading="table_loading" class="file-table">
			<el-table :data="tableData" border :header-cell-style="{background:'#f9fafc'}">
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="handleClick(scope.row)"><i class="el-icon-search"></i></el-button>
					</template>
				</el-table-column>
				<div v-for="(val, index) in tableTop" :key="index">
					<el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
					</el-table-column>
				</div>
			</el-table>
		</div>

		<!-- 分页 -->
		<div class="footer">
			<Page ref="page" :total="total" @pageChange="pageChange">
			</Page>
		</div>
	</div>
</template>

<script>
	export default {
		name: "userFocusMajor",
		data() {
			return {
				
				uploadUrl:this.globals.excelUrl+'/admin/accounts/createUserExcel',
				testUrl: "http://www.zslm.com",
				/**
				 * 和视图绑定的 name，phone，realname字段
				 */
				name_v: '',
				phone_v: '',
				realname_v: '',
				/**
				 * 用于向后台传参的name，phone，realname
				 */
				name: '',
				phone: '',
				realname: '',

				table_loading: true,

				Sorting: '',
				userFrom: '',
				sorting: [{
						value: '0',
						label: '创建时间降序'
					},
					{
						value: '1',
						label: '创建时间升序'
					}
				],
				sort: [{
						value: '选项一',
						label: '10条'
					},
					{
						value: '选项二',
						label: '50条'
					},
					{
						value: '选项三',
						label: '100条'
					},
				],
				tableTop: [{
						type: '',
						prop: 'user_account_id',
						label: '帐户ID',
						width: 80
					},
					{
						type: '',
						prop: 'create_time',
						label: '用户创建时间',
						width: 120
					},
					{
						type: '',
						prop: 'update_time',
						label: '信息更新时间',
						width: 160
					},
					{
						type: '',
						prop: 'weixin',
						label: '微信',
						width: 60
					},
					{
						type: '',
						prop: 'weibo',
						label: '微博',
						width: 60
					},
					{
						type: '',
						prop: 'head_portrait',
						label: '头像',
						width: 60
					},
					{
						type: '',
						prop: 'user_name',
						label: '昵称',
						width: 180
					},
					{
						type: '',
						prop: 'real_name',
						label: '真实姓名',
						width: 80
					},
					{
						type: '',
						prop: 'sex',
						label: '性别',
						width: 60
					},
					{
						type: '',
						prop: 'address',
						label: '常住地',
						width: 80
					},
					{
						type: '',
						prop: 'schooling_id',
						label: '最高学历',
						width: 80
					},
					{
						type: '',
						prop: 'graduate_school',
						label: '毕业院校',
						width: 160
					},
					{
						type: '',
						prop: 'industry',
						label: '所属行业',
						width: 140
					},
					{
						type: '',
						prop: 'worked_year',
						label: '工作年限',
						width: 100
					},
				],
				tableData: [{
					createtime: '2018-9-9',
					userid: '111',
					name: 'test',
					realName: 'test',
				}],

				/**分页**/
				total: 0,
				searchContent: {
					page: 1,
					limit: 10,
				},
				oneUserMsg: null,
				user_img_path: this.globals.USERURL
			}
		},
		methods: {
			timestampToTime: function(timestamp) {
				var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				return Y + M + D;
			},

			/**
			 * 点击查询时查询
			 */
			queryUserMsg: function() {
				this.name = this.name_v
				this.phone = this.phone_v
				this.realname = this.realname_v
				this.searchContent.page = 1
				this.query()
			},

			/**
			 * 下拉框值改变时查询
			 */
			sortingChage: function() {
				this.queryUserMsg()
			},
			/**
			 * 刷新
			 */
			f5: function() {
				var that = this;
				that.searchContent.page = 1;
				that.searchContent.limit = 10;
				that.name = "";
				that.phone = ''
				that.realname = ''
				that.name_v = "";
				that.phone_v = ''
				that.realname_v = ''
				that.Sorting = ''
				that.searchContent.page = 1
				this.$refs.page.handleSizeChange(10);
			},

			/**
			 * 分页浏览数据
			 */
			query: function() {
				this.table_loading = true;
				var that = this;
				this.fetch('/admin/accounts/getuser', {
						//后台参数，前台参数(传向后台)
						page: that.searchContent.page,
						pageSize: that.searchContent.limit,
						name: that.name,
						phone: that.phone,
						realname: that.realname,
						sorting: that.Sorting == '' ? 0 : that.Sorting
					})
					.then(function(response) {
						var res = response;
						that.table_loading = false;
						if (res.code == 0) {
							for (let i in res.result[0]) {
								res.result[0][i].sex = res.result[0][i].sex == 0 ? '男' : '女'
								res.result[0][i].head_portrait = res.result[0][i].head_portrait == '' ? '无' : '有';
								// console.log(that.timestampToTime( res.result[0][i].create_time))
								res.result[0][i].create_time = that.timestampToTime(res.result[0][i].create_time);
								res.result[0][i].update_time = that.timestampToTime(res.result[0][i].update_time);
							}
							that.tableData = res.result[0];
							that.total = res.result[1];
						};
					})
					.catch(function(error) {});
			},
			//用户输入字符进行html解码
			htmlDecode: function(text) {
				//1.首先动态创建一个容器标签元素，如DIV
				var temp = document.createElement("div");
				//2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
				temp.innerHTML = text;
				//3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
				var output = temp.innerText || temp.textContent;
				temp = null;
				return output;
			},
			getOneUser: function(id) {
				let that = this;
				this.fetch('/admin/accounts/getoneuser', {
					id: id

				}).then(res => {
					if (res.code == 0) {
						let majors = res.result[2]
						let major_str = ''
						for (let i in majors) {
							major_str += '<div class="motai-line-content">' + majors[i].z_name + '</div>'
						}
						let actives = res.result[1]
						let actives_str = ''
						for (let i in actives) {
							actives_str += '<div class="motai-line-content">' + actives[i].active_name + '</div>'
						}
						let coupons = res.result[3]
						let coupon_str = ''
						for (let i in coupons) {
							coupon_str += '<div class="motai-line-content">' + coupons[i].name + '</div>'
						}
						let sex = res.result[0].sex == 0 ? '<i class="fa fa-mars"></i>' : '<i class="fa fa-venus"></i>'
						let weixin = res.result[0].weixin == '绑定' ? '<i class="fa fa-weixin"></i>':''
						let weibo = res.result[0].weibo == '绑定' ? '<i class="fa fa-weibo"></i>':''
						this.$alert('<div class="motai-body">' +
							'<div class="selfDetail">' +
							'<img class="motai-img" src="' + that.htmlDecode(res.result[0].head_portrait) + '">' +
							'<div class="selfDetailText"><span>' + that.htmlDecode(res.result[0].real_name) +
							'</span><span style="display:block">' + that.htmlDecode(res.result[0].user_name) + '</span><div>' +
							sex + weixin + weibo+
							'<i>' + res.result[0].address + '</i></div></div></div>' +
							'</div>' +
							'<div><div class="motai-line">' +
							'<div class="motai-line-title">毕业院校:</div>' +
							'<div class="motai-line-content">' + res.result[0].graduate_school +
							'</div></div></div>' +
							'<div><div class="motai-line">' +
							'<div class="motai-line-title">最高学历:</div>' +
							'<div class="motai-line-content">' + res.result[0].schooling_id +
							'</div></div></div>' +
							'<div><div class="motai-line">' +
							'<div class="motai-line-title">所属行业:</div>' +
							'<div class="motai-line-content">' + res.result[0].industry +
							'</div></div></div>' +
							'<div><div class="motai-line">' +
							'<div class="motai-line-title">工作年限:</div>' +
							'<div class="motai-line-content">' + res.result[0].worked_year +
							'</div></div></div>' +
							'<div><div class="motai-line">' +
							'<div class="motai-line-title">关注院校:</div><div>' +
							major_str +
							'</div></div></div>' +
							'<div><div class="motai-line">' +
							'<div class="motai-line-title">参与活动:</div><div>' +
							actives_str +
							'</div></div></div>' +
							'<div><div class="motai-line">' +
							'<div class="motai-line-title">领优惠券:</div><div>' +
							coupon_str +
							'</div></div></div>', {
								dangerouslyUseHTMLString: true
							});
					} else {
						return 1;
					}
				}).catch(function(error) {
					return 1;
				})
			},
			handleClick: function(val) {
				let that = this;
				let requestJudge = this.getOneUser(val.user_account_id)
				if (requestJudge == 1) {
					return;
				}


			},
			pageChange(msg) {

				this.searchContent.page = msg.page;
				this.searchContent.limit = msg.limit;
				//分页改变时，更新表格数据
				if (this.searchContent.page) {
					this.query();
				};

			}
		},
		mounted() {
			// this.getPage();
			this.query();
			console.log(this.globals)
		}
	}
</script>


<style>
	/*表格滚动条*/
	/* 头像 */
	.motai-body {
		width: 80%;
		margin: 0 auto;
	}

	.motai-img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin: 10px 10px;
	}

	.selfDetail {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.selfDetailText {
		display: flex;
		flex-direction: column;
	}

	.motai-line {
		margin: 10px 10px;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
	}

	.motai-line-title {
		width: 100px !important;
	}
</style>


<style scoped>
	/**当前面包屑**/

	.now-page {
		padding-bottom: 3px;
		border-bottom: solid 1px #68c368;
	}

	.el-form-item {
		display: inline-block;
		width: 20%;
	}

	.filesquery i,
	.files-datalist i {
		margin: 0 10px 0 20px;
	}

	.filesquery {
		width: 1500px;
		height: 50px;
		margin: 0 auto;
		background-color: #F3F3F3;
		position: relative;
		display: flex;
		align-items: center;
	}

	.screen {
		font-weight: bold;
		font-size: 16px;
		color: #666;
		font-family: 'Tahoma';
	}

	.dataquery-refresh,
	.query-button {
		position: absolute;
		right: 10px;
		top: 10px;
		color: #666;
		background-color: #fff;
		border: 1px solid #CCC;
		border-radius: 0;
	}

	.export-button {
		float: right;
		color: #666;
		background-color: #fff;
		border: 1px solid #CCC;
		border-radius: 0;
	}

	.datalist-selecttwo {
		display: inline-block;
		position: absolute;
		right: 40px;
		width: 100px;
	}

	.files-datalist {
		display: flex;
		align-items: center;
		position: relative;
		width: 1500px;
		height: 50px;
		background: #f3f3f3;
		margin: 0 auto;
	}

	.file-table i {
		font-size: 20px;
	}

	.file-table {
		width: 1500px;
		margin: 0 auto;
		text-align: center;
	}

	.filesForm {
		width: 1500px;
		display: flex;
		margin: 20px auto 0;
	}

	.footer {
		border: 1px solid #E4E4E4;
		text-align: right;
		width: 1500px;
		height: 50px;
		background-color: #fdfdfe;
		margin: 20px auto;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.el-pagination {
		color: #999;
		font-weight: 500;
	}
</style>

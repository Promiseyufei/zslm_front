<template>
	<div>
		<el-breadcrumb separator="/" style="width: 1500px;margin: 0 auto 20px">
			<el-breadcrumb-item>账户管理</el-breadcrumb-item>
			<el-breadcrumb-item>注册用户</el-breadcrumb-item>
			<el-breadcrumb-item>
				<div class="now-page">领优惠券</div>
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

			<el-form class="input" label-width="80px" style="width: 100%">
				<el-form-item label="优惠券id">
					<el-input size="medium" placeholder="请输入优惠券id" v-model="cid_v"></el-input>
				</el-form-item>
				<el-form-item label="优惠券">
					<el-input size="medium" placeholder="请输入优惠券" v-model="cname_v"></el-input>
				</el-form-item>
				<el-form-item label="昵称">
					<el-input size="medium" placeholder="请输入用户昵称" v-model="name_v"></el-input>
				</el-form-item>
				<el-form-item label="真实姓名">
					<el-input size="medium" placeholder="请输入用户姓名" v-model="realname_v"></el-input>
				</el-form-item>
				<el-form-item style="float: right;width: 200px">
					<el-button size="mini" class="query-button" type="primary" icon="el-icon-search" @click.native="selectQuery()">查询</el-button>
				</el-form-item>
			</el-form>

		</div>

		<div class="files-datalist">
			<i class="el-icon-tickets"></i>
			<p class="screen">数据列表</p>
			<div class="datalist-selecttwo">
				<el-select size="mini" v-model="Sorting" placeholder="默认顺序" style="width: 150px" @change="selectQuery">
					<el-option v-for="(item,index) in sorting" :key="index" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
		</div>
		<div class="file-table" v-loading="table_loading">
			<el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#f9fafc'}">
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small"><i class="el-icon-search"></i></el-button>
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
				uploadUrl: this.globals.excelUrl + '/admin/accounts/createCouponExcel',
				cid_v: '',
				cname_v: '',
				name_v: '',
				realname_v: '',
				cid: '',
				cname: '',
				name: '',
				realname: '',
				Sorting: '',

				sorting: [{
						value: '0',
						label: '按优惠券名称升序'
					},
					{
						value: '1',
						label: '按优惠券名称降序'
					},
					{
						value: '2',
						label: '按用户ID排序'
					}
				],
				tableTop: [{
						type: '',
						prop: 'coupon_id',
						label: '优惠券id',
						width: 150
					},
					{
						type: '',
						prop: 'name',
						label: '优惠券名称',
						width: 310
					},
					{
						type: '',
						prop: 'couponsinstitutions',
						label: '优惠券所属机构',
						width: 310
					},
					{
						type: '',
						prop: 'user_account_id',
						label: '帐户ID',
						width: 150
					},
					{
						type: '',
						prop: 'user_name',
						label: '昵称',
						width: 230
					},
					{
						type: '',
						prop: 'real_name',
						label: '真实姓名',
						width: 230
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
				user_img_path: "http://www.lishanlei.cn/storage/front/user/",
				table_loading: true,
			}
		},
		methods: {

			f5: function() {
				var that = this;
				that.searchContent.page = 1;
				that.searchContent.limit = 10;
				that.cid = "";
				that.cname = ''
				that.realname = ''
				that.name = ''
				that.cid_v = "";
				that.name_v = "";
				that.cname_v = ''
				that.realname_v = ''
				that.Sorting = ''
				that.searchContent.page = 1
				this.$refs.page.handleSizeChange(10);
			},
			selectQuery: function() {

				this.cid = this.cid_v
				this.name = this.name_v
				this.cname = this.cname_v
				this.realname = this.realname_v
				this.searchContent.page = 1
				this.query()
			},

			query: function() {
				var that = this;
				this.table_loading = true,
					this.fetch('/admin/accounts/getcoupon', {
						//后台参数，前台参数(传向后台)

						page: that.searchContent.page,
						pageSize: that.searchContent.limit,
						name: that.name,
						cname: that.cname,
						cid: that.cid,
						realname: that.realname,
						sorting: that.Sorting == '' ? 0 : that.Sorting
					})
					.then(function(response) {
						var res = response;
						that.table_loading = false
						if (res.code == 0) {
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
				this.fetch('/admin/accounts/getcouponone', {

					id: id

				}).then(res => {
					if (res.code == 0) {

						let coupons = res.result[1]
						let coupon_str = ''
						for (let i in coupons) {
							coupon_str += '<div class="motai-line-content">' + coupons[i].name + '</div>'
						}
						let sex = res.result[0].sex == 0 ? '<i class="fa fa-mars"></i>' : '<i class="fa fa-venus"></i>'
						let weixin = res.result[0].weixin == '绑定' ? '<i class="fa fa-weixin"></i>' : ''
						let weibo = res.result[0].weibo == '绑定' ? '<i class="fa fa-weibo"></i>' : ''
						this.$alert('<div class="motai-body">' +
							'<div class="selfDetail">' +
							'<img class="motai-img" src="' + that.htmlDecode(res.result[0].head_portrait) + '">' +
							'<div class="selfDetailText"><span>' + that.htmlDecode(res.result[0].real_name) +
							'</span><span style="display:block">' + that.htmlDecode(res.result[0].user_name) + '</span><div>' +
							sex + weixin + weibo +
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
							'<div class="motai-line-title">领优惠券:</div><div>' +
							coupon_str +
							'</div></div></div>', '信息', {
								dangerouslyUseHTMLString: true
							}).catch(() => {});
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
		}

	}
</script>
<style>
	/*表头文字居中*/
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
	/**模态框**/

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
	.query-button[data-v-3d988435] {
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
		right: 10px;
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
		font-weight: 500;
	}

	.file-table {
		width: 1500px;
		margin: 0 auto;
		text-align: center;
	}

	.filesForm {
		width: 1500px;
		display: flex;
		/*position: relative;*/
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

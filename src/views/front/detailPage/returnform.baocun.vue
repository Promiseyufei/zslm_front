<template>
	<div>
		<div class="bigBox">
			<!-- 面包屑 -->
			<div class="singlecoachBig">
				<div class="singlecoachbox">
					<img src="../../../assets/img/homeIcon.png">
					<el-breadcrumb separator-class="el-icon-arrow-right" class="collagebreadcrumb">
						<el-breadcrumb-item>首页</el-breadcrumb-item>
						<el-breadcrumb-item>退款服务</el-breadcrumb-item>
						<el-breadcrumb-item class="activelist">退款申请</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>

			<!-- 整个表单 -->
			<div class="singlecoachBig" v-loading="all_loading">
				<div class="singlecoachbox">
					<div class="returnform">
						<div class="returnformbutton">
							<el-button type="primary" @click="selectCoach" v-if="fifnish==null">选择辅导机构</el-button>
							<div class="collagelogobox" v-if="fifnish!=null">
								<div class="collagelogo">
									<img :src="selectfif.logo_name" alt="">
									<span>{{selectfif.coach_name}}</span>
								</div>
								<span @click="selectCoach">重新选择</span>
							</div>
						</div>

						<!-- 弹出层 -->
						<el-dialog :visible.sync="dialogVisible" width="1280px" center :before-close="handleClose">
							<div class="boxdialog">
								<div class="singlecoach" v-for="(item,index) in coach" :key="index" @click="selectsingle(index)">
									<div class="singlecoachtop">
										<img :src="item.logo_name" alt="">
									</div>
									<span>{{item.coach_name}}</span>
								</div>
							</div>

							<span slot="footer" class="dialog-footer">
								<el-button type="primary" @click="successselect">确 定</el-button>
							</span>
						</el-dialog>

						<!-- 表单 -->
						<div class="formbox">
							<span>退款信息填写</span>
							<el-form :label-position="location" label-width="180px" :model="formLabelAlign">
								<el-form-item label="课程全称：">
									<el-input v-model="formLabelAlign.c_name" style="width:340px"></el-input>
								</el-form-item>
								<el-form-item label="退款金额：">
									<el-input v-model="formLabelAlign.money" style="width:200px"></el-input>
								</el-form-item>
								<el-form-item label="是否使用优惠卷：">
									<el-radio-group v-model="formLabelAlign.is_coupon">
										<el-radio label="0">是</el-radio>
										<el-radio label="1">否</el-radio>
									</el-radio-group>
								</el-form-item>
								<el-form-item label="优惠卷序列号：">
									<el-input v-model="formLabelAlign.cou_id" style="width:340px"></el-input>
								</el-form-item>
								<el-form-item label="报名日期：">
									<el-date-picker v-model="formLabelAlign.time" type="date" placeholder="选择日期">
									</el-date-picker>
								</el-form-item>
								<el-form-item label="联系电话：">
									<el-input v-model="formLabelAlign.phone" style="width:340px"></el-input>
								</el-form-item>
								<el-form-item label="退款选择途径：">
									<el-radio-group v-model="formLabelAlign.refund_type">
										<el-radio label="0">支付宝</el-radio>
										<el-radio label="1">银行卡转账</el-radio>

									</el-radio-group>
								</el-form-item>
								<el-form-item label="支付宝账号：">
									<el-input v-model="formLabelAlign.alipay_account" style="width:340px"></el-input>
								</el-form-item>
								<el-form-item label="姓名：">
									<el-input v-model="formLabelAlign.name" style="width:200px"></el-input>
								</el-form-item>
								<el-form-item label="银行卡号：">
									<el-input v-model="formLabelAlign.card" style="width:340px"></el-input>
								</el-form-item>
								<el-form-item label="开户行：">
									<el-input v-model="formLabelAlign.blank_addr" style="width:200px"></el-input>
								</el-form-item>

								<el-form-item label="申诉说明：">
									<el-input v-model="formLabelAlign.message" style="width:510px"></el-input>
								</el-form-item>
								<el-form-item label="相关说明：">
									<el-upload style="width:305px" class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
									 :on-preview="handlePreview" :on-remove="handleRemove" :on-progress="test" :file-list="tests" :on-change="testfile"
									 :auto-upload="false">
										<el-button slot="trigger" size="small" type="primary">上传图片</el-button>
									</el-upload>
								</el-form-item>
								<el-form-item label="">
									<el-button type="primary" class="sumitbutton" @click="sublimt">提交</el-button>
								</el-form-item>
							</el-form>
						</div>
					</div>

				</div>
			</div>


		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				all_loading: false,
				location: "right",
				dialogVisible: false,
				select: null,
				fifnish: null,
				coach: [],
				u_id: '1',
				selectfif: {
					coach_name: ""
				},
				formLabelAlign: {
					img: []
				},
				tests: []
			}
		},
		methods: {
			//选择辅导机构，点击确认之后，关闭弹出层
			successselect: function() {
				this.fifnish = this.select;
				this.selectfif = this.coach[this.fifnish];
				console.log(this.selectfif);
				this.formLabelAlign.f_id = this.selectfif.id
				this.dialogVisible = false;
			},

			selectCoach: function() {
				this.dialogVisible = true;
				var that = this;
				this.fetch('/front/coach/getallcoupon').then(function(res) {
					console.log(res);
					if (res.code == 0) {
						that.coach = res.result;
						// console.log(that.collage);
						// that.count = res.count;
					} else {
						that.message(true, res.msg, "error");
					}
				}).catch(function(error) {});
			},
			//选中某个辅导机构时，高亮显示
			selectsingle: function(index) {
				var box = document.getElementsByClassName("singlecoach");
				if (this.select != null) {
					box[this.select].classList.remove("active");
				}
				box[index].classList.add("active");
				this.select = index;
			},
			//点击关闭弹框时触发事件
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			test: function(event, file, fileList) {
				console.log(file, fileList);
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);

			},
			handlePreview(file) {
				console.log(file);
			},
			testfile(file, filelist) {
				this.formLabelAlign.img = filelist
				console.log(this.formLabelAlign.img)
			},
			BASEisNotFloat(theFloat) {

				var len = theFloat.length;
				var dotNum = 0;
				if (len == 0)
					return true;
				for (var i = 0; i < len; i++) {
					var oneNum = theFloat.substring(i, i + 1);
					if (oneNum == ".")
						dotNum++;
					if (((oneNum < "0" || oneNum > "9") && oneNum != ".") || dotNum > 1)
						return true;
				}
				if (len > 1 && theFloat.substring(0, 1) == "0") {
					if (theFloat.substring(1, 2) != ".")
						return true;
				}
				return false;
			},
			judge() {
				var regPos = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
				var phonereg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (this.formLabelAlign.c_name == undefined || this.formLabelAlign.c_name == '') {
					this.message(true, '请输入正确的课程名称', 'error')
					return false;
				} else if (this.formLabelAlign.money == undefined || !regPos.test(this.formLabelAlign.money)) {
					this.message(true, "请输入正确的金额", 'error')
					return false;
				} else if (this.formLabelAlign.is_coupon == undefined || !(this.formLabelAlign.is_coupon == '0' || this.formLabelAlign
						.is_coupon == '1')) {

					this.message(true, "请选择是否使用优惠券", 'error')
					return false;
				} else if (this.formLabelAlign.time == undefined || !this.isDate(this.formLabelAlign.time)) {

					this.message(true, "日期格式错误", 'error')
					return false;
				} else if (this.formLabelAlign.phone == undefined || !phonereg.test(this.formLabelAlign.phone)) {
					this.message(true, "请输入正确的手机号", 'error')
					return false;
				} else if (this.formLabelAlign.refund_type == undefined || !(this.formLabelAlign.refund_type == '0' || this.formLabelAlign
						.refund_type == '1')) {
					this.message(true, "退款方式格式错误", 'error')
					return false;
				} else if (this.formLabelAlign.alipay_account == undefined || this.formLabelAlign.alipay_account == '') {
					this.message(true, "请输入支付宝账号", 'error')
					return false;
				} else if (this.formLabelAlign.name == undefined || this.formLabelAlign.name == '') {
					this.message(true, "请输入姓名", 'error')
					return false;
				} else if (this.formLabelAlign.card == undefined || this.formLabelAlign.card == '' || !this.isBankCard(this.formLabelAlign
						.card)) {
					this.message(true, "请输入银行卡号", 'error')
					return false;
				} else if (this.formLabelAlign.blank_addr == undefined || this.formLabelAlign.blank_addr == '') {
					this.message(true, "请输入开户行信息", 'error')
					return false;
				} else if (this.formLabelAlign.message == undefined || this.formLabelAlign.message == '') {
					this.message(true, "请输入详细信息", "error")
					return false;
				} else if (this.formLabelAlign.cou_id == undefined || !regPos.test(this.formLabelAlign.cou_id)) {
					this.message(true, "优惠券序列号不能为空，且必须为数字", "error")
					return false;
				} else if (this.formLabelAlign.f_id == undefined) {
					this.message(true, "请选择辅导机构", "error")
					return false;
				}

				return true;
			},
			sublimt() {
				this.formLabelAlign.u_id = this.u_id
				let self = this
				let fd = new FormData();
				let f = self.formLabelAlign
				for (let i in f) {

					if (i == 'img') {
						let index_img = 0

						for (let j in f[i]) {
							fd.append(i + (++index_img), f[i][j].raw, f[i][j].name)
						}

					} else if (i == 'time') {
						let time = Date.parse(this.formLabelAlign.time) / 1000;
						fd.append(i, time);
					} else {
						fd.append(i, f[i])
					}
				}

				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};

				if (!this.judge())
					return
				this.all_loading = true;
				this.post("/front/usercore/refund", fd, config)
					.then(res => {
						if (res.code == 0) {
							self.message(true, '提交成功', 'success')
						} else {
							self.message(true, res.msg, 'error')
						}
						self.all_loading = false;
					})
			}
		},
		mounted() {
			//当屏幕宽度小于992像素时，即为手机端时，表单提示居左显示
			var withnow = document.body.clientWidth;
			if (withnow <= 1280) {
				this.location = "left";
			}
		},
	};
</script>
<style>
	.activelist span {
		color: #009FA1 !important;
		font-weight: bold !important;
	}
  .el-button--primary,.el-button--primary:hover{
    background-color: #009fa0;
    border-color: #009fa0;
  }


  /* Large devices (laptops/desktops, 1280px and up) */
	@media only screen and (max-width: 1280px) {
		.returnform .el-form-item__label {
			width: 100% !important;
			display: inline !important;
			color: #666 !important;
			font-size: 12px;
			float: left !important;
		}

		.returnform .el-form-item__content {
			margin-left: 2px !important;
			width: 300px !important;
		}

		.returnform .el-form-item__content input {
			width: 300px !important;
		}

		.returnform .el-form-item {
			margin-bottom: 0px;
		}

		.returnform .el-dialog {
			width: 98% !important;
		}

		.el-message-box {
			max-width: 305px;
		}
	}
</style>
<style scoped>

	/* 按钮颜色 */
	.el-button--primary {
		background-color: #1abc9c ;
		border-color: #1abc9c;
	}


	/* Large devices (laptops/desktops, 1280px and up) */
	@media only screen and (max-width: 1280px) {
		.returnformbutton {
			padding: 20px 0 !important;
		}

		.formbox>span {
			margin: 0 !important;
			padding: 20px 10px !important;
			width: 93%;
		}

		.boxdialog {
			height: 305px !important;
		}

		.sumitbutton {
			width: 100%;
		}
	}

	.bigBox {
		background-color: rgb(245, 245, 245);
		padding-bottom: 10px;
	}

	.sumitbutton {
		margin: 10px 0;

	}

	.collagelogo {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.collagelogobox>span {
		color: #009FA1;
		cursor: pointer;
	}

	.collagelogo>img {
		max-height: 40px;
		margin-right: 30px;
	}

	.collagelogo>span {
		padding: 5px 30px;
		padding-right: 0;
		border-left: 1px solid #ccc;
	}

	.boxdialog {
		display: flex;
		flex-wrap: wrap;
		max-height: 646px;
		overflow-x: hidden;
		overflow-y: scroll;
		justify-content: center;
		background-color: rgb(245, 245, 245);
	}

	.singlecoach {
		width: 281px;
		background-color: #fff;
		margin: 10px;
		position: relative;
		border-radius: 5px;
		border: 1px solid rgb(245, 245, 245);
	}

	.singlecoach>span {
		display: inline-block;
		width: 100%;
		color: #fff;
		text-align: center;
		height: 50px;
		line-height: 50px;
		background-color: rgba(56, 59, 61, 0.8);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		cursor: pointer;
	}

	.active {
		border: 1px solid #ffb957;
	}

	.active>span {
		background-color: #ffb957;
	}

	.singlecoachtop {
		width: 100%;
		height: 253px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.singlecoachtop>img {
		width: 40%;
	}

	.formbox {
		margin-bottom: 120px;
	}

	.formbox>span {
		display: inline-block;
		margin-left: 10%;
		padding: 40px 0 30px;
	}

	.returnform {
		background-color: #fff;
		width: 100%;
		padding: 0 2.5%;
		margin-bottom: 87px;
	}

	.returnformbutton {
		text-align: center;
		padding: 58px 0;
		border-bottom: 1px solid rgb(222, 222, 222);
	}

	.singlecoachBig {
		display: flex;
		justify-content: center;
	}

	.singlecoachbox {
		width: 1280px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		align-items: center;
	}

	.singlecoachbox>img {
		margin-left: 10px;
	}

	.collagebreadcrumb {
		margin: 35px 8px 30px;
	}
</style>

<template >
    <div>
        <div class="operateBox">

        <!-- 中间内容 -->
            <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>信息发布</el-breadcrumb-item>
                    <el-breadcrumb-item>院校专业</el-breadcrumb-item>
                    <el-breadcrumb-item  class="selectedNavPublic">院校专业信息编辑</el-breadcrumb-item>
                </el-breadcrumb>

            <!-- 步骤条 -->
            <div class="fileSteps">
                <el-steps :active=".1" align-center>
                <el-step title="院校专业信息"></el-step>
                <el-step title="招生项目信息"></el-step>
                </el-steps>
            </div>
            
            <div>
                <!-- 上传banner -->
                <div class="operateUpfiles operateUp">
                <div class="operateUpfilesLeft">
                    <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;院校专业信息</div>
                </div>
                <div class="operateUpfilesRight">
                    
                    <el-form ref="ruleForm" :model="ruleForm" label-width="100px">
                    <el-form-item>
                        <el-button type="primary" @click="startChange">开始编辑</el-button>
                    </el-form-item>
                    <el-form-item label="院校专业名称">             
                        <el-input v-model="majorInfo.z_name" :disabled = "disabled"></el-input>
                    </el-form-item>
                    <el-form-item label="专业认证"> 
                        <el-radio-group v-model="majorInfo.major_confirm_id" :disabled = "disabled">
                            <el-radio v-for="(item, index) in majorAuthentication" :key="index" :label="item.id">{{ item.name }}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="院校性质">
                        <el-radio-group v-model="majorInfo.major_follow_id" :disabled = "disabled">
                            <el-radio v-for="(item, index) in majorNature" :key="index" :label="item.id">{{ item.name }}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="审批年限">
                        <el-select v-model="majorInfo.access_year" placeholder="请选择活动区域" :disabled = "disabled">
                        <el-option :label="1990+index" :value="1990+index" v-for="(item, index) in 29" :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动省市">
                        <el-select v-model="majorInfo.province" placeholder="请选择活动区域" :disabled = "disabled">
                            <el-option-group v-for="(pro, index) in province" :key="index" :label="pro.name">
                                <el-option v-for="(city, i) in pro.citys" :key="i" :label="city.name" :value="city.id"></el-option>
                            </el-option-group>
                            <!-- <el-option :label="item.name" :value="item.id" v-for="(item, index) in province" :key="index"></el-option> -->
                        </el-select>
                    </el-form-item>
                    <el-form-item label="院校地址">
                        <el-input v-model="majorInfo.address" :disabled = "disabled"></el-input>
                    </el-form-item>
                    <el-form-item label="资讯电话">
                        <el-input v-model="majorInfo.phone" :disabled = "disabled"></el-input>
                    </el-form-item>
                    <el-form-item label="院校官网">
                        <el-input v-model="majorInfo.index_web" :disabled = "disabled"></el-input>
                    </el-form-item>
                    <el-form-item label="招生专题">
                        <el-input v-model="majorInfo.admissions_web" :disabled = "disabled"></el-input>
                    </el-form-item>
                    <el-form-item label="所属院校名称">
                        <el-input v-model="majorInfo.school_id" :disabled = "disabled"></el-input>
                    </el-form-item>
                    <el-form-item label="专业类型">
                        <el-select v-model="majorInfo.z_type" placeholder="请选择专业类型" :disabled = "disabled">
                            <el-option :label="item.name" :value="item.id" v-for="(item, index) in major" :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="官方微信">
                        <div style="padding: 0 5px 5px 8px">
                        <div class="add" @click.stop="addPic" cuort>
                            <input type="file" id="upload" accept="image" @change="upload" style="display: none">
                            <span style="color:#B2B2B2;">添加图片</span>
                        </div>
                        <li class="show" v-for="(iu, index) in imgUrls" :key="index">
                            <div class="picture" @click="delImage(index)" :style="'backgroundImage:url('+iu+')'"></div>
                        </li>
                        </div>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button type="primary" @click="test" :disabled = "disabled">提交</el-button>
                    </el-form-item>
                    </el-form>
                </div>
                </div>
            
                <div>
                    <!-- 上传banner -->
                    <div class="operateUpfiles operateUp">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-commenting-o fa-fw FA-3X"></i>&nbsp;院校专业信息</div>
                    </div>
                    <div class="operateUpfilesRight">
                        
                        <el-form ref="ruleForm" :model="ruleForm" label-width="100px">
                        <el-form-item>
                            <el-button type="primary" @click="startChange">开始编辑</el-button>
                        </el-form-item>
                        <el-form-item label="Title">
                        <el-input v-model="majorInfo.title" :disabled = "disabled2"></el-input>
                        </el-form-item>
                        <el-form-item label="Keywords">
                        <el-input v-model="majorInfo.keywords" :disabled = "disabled2"></el-input>
                        </el-form-item>
                        <el-form-item label="Description">
                        <el-input v-model="majorInfo.descciption" :disabled = "disabled2"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="test" :disabled = "disabled">提交</el-button>
                        </el-form-item>
                        </el-form>
                    </div>
                    </div>
                    <!-- 当前banner -->
                    <div class="operateUpfiles operateDown">
                    <div class="operateUpfilesLeft">
                        <div><i class="fa fa-glass fa-fw FA-3X"></i>&nbsp;页面优化信息</div>
                    </div>
                    <div class="operateUpfilesRight2">
                        <div class="messageBtn">
                        <el-form ref="form" label-width="100px">
                            <el-form-item>
                            <el-button type="primary" @click="startChange2">开始编辑</el-button>
                            </el-form-item>
                            <el-form-item label="Title">
                            <el-input v-model="form.name" :disabled = "disabled2"></el-input>
                            </el-form-item>
                            <el-form-item label="Keywords">
                            <el-input v-model="form.name" :disabled = "disabled2"></el-input>
                            </el-form-item>
                            <el-form-item label="Description">
                            <el-input v-model="form.name" :disabled = "disabled2"></el-input>
                            </el-form-item>

                            <el-form-item>
                            <el-button type="primary" @click="test" :disabled = "disabled2">提交</el-button>
                            </el-form-item>
                        </el-form>  
                        </div>
                        <!-- 完成按钮 -->
                        <div class="operateFinalUp">
                        <el-button type="primary" @click="jumpPage">下一步，编辑招生信息</el-button>
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    components: {

    },
    data() {
      return {
            form: {
                Title: "",
                Keywords: "",
                Description: ""
            },
            ruleForm: {
                name: "河南科技学院",
                authentication: 0,
                type: 1,
                year: 2018,
                address: "河南省新乡市河南科技学院",
                tell: "18303612352",
                web:"http://qinghua.cn",
                topic: "新生宿舍讨论",
                schoolName: "大数据",
                school: "河南科技学院",
                typeAll: "2"
			},
            imgUrls: [],
            // 省份字典
            province: [],
            // 专业字典
			major: [],
			//专业认证
			majorAuthentication:[],
			//院校性质
			majorNature:[],
			majorInfo:{},
            isShow:true,
            disabled:true,
            disabled2:true,
            fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
    },
    watch: {
        ruleForm: function(val,oldval) {
            console.log(123);
        }
    },
    methods:{
		jumpPage:function(){
			this.$router.push('/message/universityMessage');
		},
        test: function() {
          console.log(this.province);
        },
        startChange: function () {
            this.disabled = false;
        },
        startChange2: function () {
            this.disabled2 = false;
        },
        //点击上传图片，弹出选择文件窗口
        addPic: function(e) {
            $('input[type=file]').trigger('click');
            return false;
        },
        delImage: function(index) {
			let vm = this;
			this.confirm(() => {
				vm.imgUrls.splice(index, 1);
				vm.count--;
				vm.count<3?vm.isShow = true:vm.isShow;
				this.message(true, '图片删除成功', 'success');
			}, () => {
				this.message(true, '取消删除', 'info');
			});
        },
        upload (e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length||this.count>2) {
                return;
            }
            this.imgPreview(files[0],e);
            this.count++;
            this.count>=3?this.isShow = false:this.isShow;
            this.message(true,'图片添加成功','');
        },
        imgPreview (file,e) {
            let self = this;
            let Orientation;
            //去获取拍照时的信息，解决拍出来的照片旋转问题
            Exif.getData(file, function(){
				Orientation = Exif.getTag(this, 'Orientation');
            });
            // 看支持不支持FileReader
            if (!file || !window.FileReader) return;

            if (/^image/.test(file.type)) {
                // 创建一个reader
                let reader = new FileReader();
                // 将图片2将转成 base64 格式
				reader.readAsDataURL(file);
				// console.log(reader);
                // 读取成功后的回调
                reader.onloadend = function () {
                    let result = this.result;
                    let img = new Image();
					img.src = result;
                    //判断图片是否大于100K,是就直接上传，反之压缩图片
                    if (this.result.length <= (100 * 1024)) {
						self.imgUrls.push(this.result);
                    }else {
						img.onload = function () {
                            let data = self.compress(img,Orientation);
							self.imgUrls.push(data);
                        }
                    }
                    e.target.value = null;
                }
            }

        },
        rotateImg (img, direction,canvas) {
            //最小与最大旋转方向，图片旋转4次后回到原方向
            const min_step = 0;
            const max_step = 3;
            if (img == null)return;
            //img的高度和宽度不能在img元素隐藏后获取，否则会出错
            let height = img.height;
            let width = img.width;
            let step = 2;
            if (step == null) {
                step = min_step;
            }
            if (direction == 'right') {
                step++;
                //旋转到原位置，即超过最大值
                step > max_step && (step = min_step);
            } else {
                step--;
                step < min_step && (step = max_step);
            }
            //旋转角度以弧度值为参数
            let degree = step * 90 * Math.PI / 180;
            let ctx = canvas.getContext('2d');
            switch (step) {
                case 0:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0);
                    break;
                case 1:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, 0, -height);
                    break;
                case 2:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, -height);
                    break;
                case 3:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, 0);
                    break;
            }
		},
		
		//压缩图片
        compress(img,Orientation) {
			let canvas = document.createElement("canvas");
			let ctx = canvas.getContext('2d');
			//瓦片canvas
			let tCanvas = document.createElement("canvas");
			let tctx = tCanvas.getContext("2d");
			let initSize = img.src.length;
			let width = img.width;
			let height = img.height;
			//如果图片大于四百万像素，计算压缩比并将大小压至400万以下
			let ratio;
			if ((ratio = width * height / 4000000) > 1) {
				console.log("大于400万像素")
				ratio = Math.sqrt(ratio);
				width /= ratio;
				height /= ratio;
			} else {
				ratio = 1;
			}
			canvas.width = width;
			canvas.height = height;
			//        铺底色
			ctx.fillStyle = "#fff";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			//如果图片像素大于100万则使用瓦片绘制
			let count;
			if ((count = width * height / 1000000) > 1) {
				count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
				//            计算每块瓦片的宽和高
				let nw = ~~(width / count);
				let nh = ~~(height / count);
				tCanvas.width = nw;
				tCanvas.height = nh;
				for (let i = 0; i < count; i++) {
					for (let j = 0; j < count; j++) {
						tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
						ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
					}
				}
			} else {
				ctx.drawImage(img, 0, 0, width, height);
			}
			//修复ios上传图片的时候 被旋转的问题
			if(Orientation != "" && Orientation != 1){
				switch(Orientation){
					case 6://需要顺时针（向左）90度旋转
						this.rotateImg(img,'left',canvas);
						break;
					case 8://需要逆时针（向右）90度旋转
						this.rotateImg(img,'right',canvas);
						break;
					case 3://需要180度旋转
						this.rotateImg(img,'rightprovince',canvas);//转两次
						this.rotateImg(img,'rightprovince',canvas);
						break;
				}
			}
			//进行最小压缩
			let ndata = canvas.toDataURL('image/jpeg', 0.1);
			tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
			return ndata;
	  },

	  dictionaries() {
			let _this = this;
			let dictionariesArr = [
				{re:'post', url:'/admin/information/getMajorAuthentication', pa:{}, calls: (response) => {_this.majorAuthentication = response.result;}, errorMsg: '未查询到专业认证信息'},
				{re:'post', url:'/admin/information/getMajorNature', pa:{}, calls: (response) => {_this.majorNature = response.result;}, errorMsg: '未查询到院校性质信息'},
				{re:'post', url:'/admin/information/getMajorProvincesAndCities', pa:{}, calls: (response) => {_this.province = response.result[0];}, errorMsg: '未查询到省份信息'},
				{re:'post', url:'/admin/information/getMajorType', pa:{}, calls: (response) => {_this.major = response.result;}, errorMsg: '未查询到专业类型'},
			];

			dictionariesArr.forEach((item) => {
				_this.getMajorPageOptions(item.re, item.url, item.pa, (response) => {
					response.code == 0 ? item.calls(response) : this.message(true, response.msg, 'error');
				}, (response) => {
					this.message(true, item.errorMsg, 'error');
				});
			})

	  }

    },
    mounted(){

		this.dictionaries();

		let _this = this;

		if(this.$route.params.majorId != null) {
			this.post('/admin/information/selectReception', {
				majorId: this.$route.params.majorId
			}).then((response) => {
				console.log(response);
				if(response.code == 0) {
					_this.majorInfo = response.result;
					if(response.result.wc_image instanceof Array && response.result.wc_image.length > 0)  
						_this.imgUrls.push.apply(_this.imgUrls, response.result.wc_image);
				}
				else
					this.message(true, response.msg, 'error');
			})
		}
    }
};
</script>
<style>
    /*
    * 
    */
    .fileSteps .is-text {
        width: 50px;
        height: 50px;
    }
    .fileSteps .is-finish .is-text {
        background: #1ABC9C; 
        color: #fff;
    }
    .fileSteps .el-step__icon-inner {
        font-size: 20px;
    }
    .fileSteps .el-step__line {
        top: 23px !important;
    }
</style>

<style scoped>
.operateBox {
  width: 1500px;
  margin: 0 auto;
}

/*
* 步骤条样式
*/
.fileSteps {
  /*margin: 20px 0;*/
  width: 600px;
  margin: 0 auto;
}
.fileSteps .el-steps--horizontal {
  margin: 20px 0;
}



/*
* 
*/
.operateUpfiles {
  border: 1px solid #e4e4e4;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}

.operateHeader .el-button {
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 10px;
}
.operateUp {
  border-bottom: none;
}
.operateDown {
  border-top: none;
}
.operateUpfilesLeft {
  background-color: #fcfcfc;
  border-right: 1px solid #e4e4e4;
  width: 159px;
}
.operateUpfilesLeft>div {
  background: url(../../../../assets/img/point.png) no-repeat;
  position: relative;
  top: 50px;
  left: 0;
  width: 180px;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.operateUpfilesRight {
  padding: 50px 80px;
  width: 1170px;
  border-bottom: 1px solid #e4e4e4;
}
.operateUpfilesRight button {
  float: right;
}


/*
* 右边内容样式
*/

.operateUpfilesRight2 {
  padding: 40px 90px 40px 80px;
  width: 1170px;
}
.operateFinalUp {
  text-align: center;
  margin: 150px 0 20px;
}
.messageBtn button{
  float: right;
}

.submit-picture{
  color: #13ce66;
  margin: 0 10px;
}
.el-upload{
  float: left;
}

.el-upload-list--picture .el-upload-list__item{
  border: 0px solid #c0ccda;
  padding: 0px; 
  margin-right: 10px;
  width: 95px;
  height: 95px;
}
.el-upload-list--picture .el-upload-list__item-thumbnail{
  margin-left: 0px !important; 
}

.el-upload__tip{
  display: none;
}

.el-upload-list--picture{
  float: left;
}

.show, .add{
    display: inline-block;
    width: 60px;
    height: 60px;
    overflow: hidden;
}
.show{
    margin: 0 10px 0;
}
.add{
    /*background-image:url('../../../img/wx/add.png');*/
    background-repeat: no-repeat;
    background-size:100%;
}
.picture {
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>


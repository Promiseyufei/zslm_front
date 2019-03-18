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
                        <el-checkbox-group v-model="majorInfo.major_confirm" :disabled = "disabled">
                            <el-checkbox v-for="(item, index) in majorAuthentication" :key="index" :label="item.id +''">{{ item.name }}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="院校性质">
                        <el-checkbox-group v-model="majorInfo.major_follow" :disabled = "disabled">
                            <el-checkbox v-for="(item, index) in majorNature" :key="index" :label="item.id + ''">{{ item.name }}</el-checkbox>
                        </el-checkbox-group>
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

                    <!-- 所属院校名称 -->
                    <el-form-item label="所属院校名称">
                        <!-- <el-input v-model="majorInfo.school_id" :disabled = "disabled"></el-input> -->
                        <div class="school_name">
                            <el-autocomplete v-model="majorInfo.school_id" :fetch-suggestions="querySearchAsync" @select="handleSelect" :disabled = "disabled" value-key="name"></el-autocomplete>
                        </div>
                    </el-form-item>


                    <el-form-item label="专业类型">
                        <el-select v-model="majorInfo.z_type" placeholder="请选择专业类型" :disabled = "disabled">
                            <el-option :label="item.name" :value="item.id" v-for="(item, index) in major" :key="index"></el-option>
                        </el-select>
                    </el-form-item>

                    <!-- 官方微信 -->
                    <el-form-item label="官方微信">
                        <div style="padding: 0 5px 5px 8px">
                            <div class="add" @click.stop="addPic" cuort>
                                <input type="file" id="upload" accept="image" @change="uploadWX" style="display: none">
                                <span style="color:#B2B2B2;">添加图片</span>
                            </div>
                            <li class="show" v-for="(iu, index) in wximgUrls" :key="index">
                                <div class="picture" @click="delImage(index, 'wx')" :style="'backgroundImage:url('+iu+')'"></div>
                            </li>
                        </div>
                    </el-form-item>

                    <!-- 官方微博 -->
                    <el-form-item label="官方微博">
                        <div style="paddding: 0 5px 5px 8px;">
                            <div class="add" @click="addWBPic" cuort>
                                    <input type="file" id="upload2" accept="image" @change="uploadWB" style="display: none">
                                    <span style="color:#B2B2B2;">添加图片</span>
                            </div>
                            <li class="show" v-for="(iu, index) in wbimgUrls" :key="index">
                                <div class="picture" @click="delImage(index, 'wb')" :style="'backgroundImage:url('+iu+')'"></div>
                            </li>
                        </div>
                    </el-form-item>


                    <!-- 院校logo -->
                    <el-form-item label="院校logo">
                        <div class="major_img">
                            <el-upload class="avatar-uploader" action="" :auto-upload="false" :on-change="changeLogoUpload" :multiple="false" :show-file-list="false">
                                <img v-if="majorLogoUrl" :src="majorLogoUrl" class="avatar" alt="院校logo">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-form-item>


                    <!-- 院校封面图 -->
                    <el-form-item label="院校封面图">
                        <div class="major_img">
                            <div id="major_cover_map">
                                <el-upload class="avatar-uploader" action="" :auto-upload="false" :on-change="changeCoverMapUpload" :multiple="false" :show-file-list="false">
                                    <img v-if="majorCoverMapUrl" :src="majorCoverMapUrl" class="avatar" alt="院校封面图">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </div>
                        </div>
                    </el-form-item>


                    <el-form-item>
                        <el-button type="primary" @click="putMajorMainMsg" :disabled = "disabled">提交</el-button>
                    </el-form-item>
                    </el-form>
                </div>
                </div>

                <div>
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
                            <el-input v-model="majorInfo.title" :disabled = "disabled2"></el-input>
                            </el-form-item>
                            <el-form-item label="Keywords">
                            <el-input v-model="majorInfo.keywords" :disabled = "disabled2"></el-input>
                            </el-form-item>
                            <el-form-item label="Description">
                            <el-input v-model="majorInfo.descciption" :disabled = "disabled2"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="putMajorExtendMsg" :disabled = "disabled2">提交</el-button>
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
            majorId: 0,
            wximgUrls: [],
            wbimgUrls: [],
            wxSendImg:[],
            wbSendImg:[],
            // 省份字典
            province: [],
            // 专业字典
			major: [],
			//专业认证
			majorAuthentication:[],
			//院校性质
            majorNature:[],

            //院校名称
            restaurants:[],
            majorInfo:{
                major_confirm:[],
                major_follow:[]
            },
            majorLogoFile:{},
            majorCoverMapFile:{},
            majorLogoUrl:'',
            majorCoverMapUrl:'',
            iswxShow:true,
            dialogVisible:true,
            iswbShow:true,
            disabled:true,
            disabled2:true,
            timeout: null,
            fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
    },
    watch: {
        ruleForm: function(val,oldval) {
            // console.log(123);
        }
    },
    methods:{

        test(data) {
            console.log(data)
        },

        //获取logo图片file，并图片预览
        changeLogoUpload: function(file,fileList) {
            if(this.beforeAvatarUpload(file)) {
                // console.log(file.url);
                this.majorLogoUrl = file.url;
                this.majorLogoFile = file.raw;
            }
        },
        changeCoverMapUpload: function(file, fileList) {
            if(this.beforeAvatarUpload(file)) {
                // console.log(file.url);
                this.majorCoverMapUrl = file.url;
                this.majorCoverMapFile = file.raw;
            }
        },

        //上传图片判断
        beforeAvatarUpload(file) {
            const isJPG = file.raw.type === 'image/jpeg' || file.raw.type === 'image/png';
            const isLt2M = file.raw.size / 1024 / 1024 < 4;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 4MB!');
            }
            return isJPG && isLt2M;
        },

		putMajorMainMsg() {
            // return false;
            let formdata = new FormData();
            if(this.majorId != null)
                formdata.append('majorId', this.majorId);
            formdata.append('majorName', this.majorInfo.z_name);
            // if(this.majorInfo.major_confirm == null)
            //     this.majorInfo.major_confirm = [];
            // return false;
			formdata.append('majorAuth', this.majorInfo.major_confirm.toString());
            formdata.append('majorNature', this.majorInfo.major_follow.toString());
			formdata.append('approval', this.majorInfo.access_year);
            formdata.append('majorProvince', this.changeMajorProvince(this.majorInfo.province));
			formdata.append('majorAddress', this.majorInfo.address);
			formdata.append('phone', this.majorInfo.phone);
			formdata.append('indexWeb', this.majorInfo.index_web);
			formdata.append('admissionsWeb', this.majorInfo.admissions_web);
			formdata.append('schoolId', this.changeMajorSchoolNameToId(this.majorInfo.school_id));
            formdata.append('majorType', this.changeMajorType(this.majorInfo.z_type));
            // console.log(this.wxSendImg);return false;
			this.wxSendImg.forEach((item, index) => {
				formdata.append('wcImage['+index+']', item);
            });
            this.wbSendImg.forEach((item, index) => {
                formdata.append('wbImage[' + index + ']', item);
            });

            JSON.stringify(this.majorLogoFile) == "{}" ? formdata.append('majorLogo', this.majorInfo.magor_logo_name.split('/').pop()) : formdata.append('majorLogo', this.majorLogoFile);
            JSON.stringify(this.majorCoverMapFile) == "{}" ? formdata.append('majorCover', this.majorInfo.major_cover_name.split('/').pop()) : formdata.append('majorCover', this.majorCoverMapFile);


			let config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
			this.post('/admin/information/createMajor', formdata, config).then((response) => {
				if(response.code == 0) {
                    this.message(true, response.msg, 'success');
                    setTimeout(() => {
                        this.$router.push('/admin/message/messageHome/' + response.result);
                    }, 2000);
                }
                else this.message(true, response.msg, 'error');
			});
        },
        putMajorExtendMsg() {
            this.post('/admin/information/updateMajorExtendMsg', {
                majorId: this.majorId || this.$route.params.majorId,
                title: this.majorInfo.title,
                keywords: this.majorInfo.keywords,
                descciption: this.majorInfo.descciption
            }).then((response) => {
                if(response.code == 0) {
                    this.message(true, response.msg, 'success');
                }
                else
                    this.message(true, response.msg, 'error');
            })
        },

		changeMajorType(typeName) {
			this.major.forEach((item) => {
				if(typeof(typeName) == 'String' && typeName == item.name) return item.id;
			});
			return typeName;
		},
		changeMajorProvince(majorProvinceName) {
            let pro = '';
			this.province.forEach((provincees) => {
                if(provincees.hasOwnProperty('citys') || provincees.city != undefined)
                    provincees.citys.forEach((city) =>{
                        if((typeof(majorProvinceName) == 'String' && city.name == majorProvinceName) || (typeof(majorProvinceName) == 'number' && city.id == majorProvinceName)) {
                            pro = ""+city.father_id + ',' + (""+city.id);
                        }
                    })
            });
            return pro;
        },
        changeMajorSchoolNameToId(name) {
            let id = 0;
            this.restaurants.forEach((item) => {
                if(item.name == name) {
                    id =  item.id;
                }
            });
            if(id == 0) {
                this.message(true, '院校姓名只支持下方出现的模糊匹配中选择院校', 'warnning');
            }
            else
                return id;
        },
		jumpPage:function(){
			this.$router.push('/admin/message/universityMessage/' + this.majorId + '/' + this.majorInfo.z_name);
		},
        test: function() {
        //   console.log(this.province);
        },
        startChange: function () {
            this.disabled = false;
        },
        startChange2: function () {
            this.disabled2 = false;
        },
        //点击上传图片，弹出选择文件窗口
        addPic: function(e) {
            $('#upload').trigger('click');
            return false;
        },
        addWBPic: function(e) {
            $('#upload2').trigger('click');
            return false;
        },
        delImage: function(index, type) {
			let vm = this;
			this.confirm(() => {
                if(type == 'wx') {
                    vm.wximgUrls.splice(index, 1);
                    vm.wxcount--;
                    vm.wxcount<3 ? vm.iswxShow = true : vm.iswxShow;
                    this.wxSendImg.splice(index, 1);
                }
                else if(type == 'wb') {
                    vm.wbimgUrls.splice(index, 1);
                    vm.wbcount--;
                    vm.wbcount<3 ? vm.iswbShow = true : vm.iswbShow;
                    this.wbSendImg.splice(index, 1);
                }
				this.message(true, '图片删除成功', 'success');
			}, () => {
				this.message(true, '取消删除', 'info');
			});
        },
        upload(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length||this.count>2) {
                return false;
            }
            return files;
        },
        uploadWX(e) {
            let files = this.upload(e);
            if(files == false) return;
            this.imgPreview(files[0],e, 'wx');
            this.wxcount++;
			this.wxcount>=3?this.iswxShow = false:this.iswxShow;
			this.wxSendImg.push(files[0]);
            this.message(true,'图片添加成功','');
        },
        uploadWB(e) {
            let files = this.upload(e);
            if(files == false) return;

            this.imgPreview(files[0],e, 'wb');
            this.wbcount++;
			this.wbcount>=3?this.iswbShow = false:this.iswbShow;
			this.wbSendImg.push(files[0]);
            this.message(true,'图片添加成功','');
        },
        imgPreview (file,e, type) {
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
                        if(type == 'wx') {
                            self.wximgUrls.push(this.result);
                            console.log(self.wximgUrls);
                        }
                        if(type == 'wb') {
                            self.wbimgUrls.push(this.result);
                            // console.log(self.wbimgUrls);
                        }
                    }else {
						img.onload = function () {
                            let data = self.compress(img,Orientation);
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
				console.log("大于400万像素");
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

    /**
     * 远程搜索
     */
    querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            cb(results);
        }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
        return (state) => {
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    },
    handleSelect(item) {
        // console.log(item);
    },


    //字典查询
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

		let _this = this;

        this.dictionaries();

        this.post('/admin/information/getAllSchoolName', {}).then((response) => {
            if(response.code == 0) {
                _this.restaurants = response.result;
            }
        })

		if(this.$route.params.majorId != null) {
            this.majorId = this.$route.params.majorId;
			this.fetch('/admin/information/selectReception', {
				majorId: this.$route.params.majorId
			}).then((response) => {
				if(response.code == 0) {
                    console.log(response.result);
                    _this.majorInfo = response.result;
                    if(_this.majorInfo.major_confirm == null) _this.majorInfo.major_confirm = [];
                    if(_this.majorInfo.major_follow == null) _this.majorInfo.major_follow = [];
                    _this.majorLogoUrl = response.result.magor_logo_name;
                     _this.majorCoverMapUrl = response.result.major_cover_name;
					if(response.result.wc_image instanceof Array && response.result.wc_image.length > 0) {
                        _this.wximgUrls.push.apply(_this.wximgUrls, response.result.wc_image);
						_this.wxSendImg.push.apply(_this.wxSendImg, response.result.wc_image);
                    }
                    if(response.result.wb_image instanceof Array && response.result.wb_image.length > 0) {
                        _this.wbimgUrls.push.apply(_this.wbimgUrls, response.result.wb_image);
						_this.wbSendImg.push.apply(_this.wbSendImg, response.result.wb_image);
                    }
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
    * 步骤条
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


    /* logo　+　封面 */
    .major_img .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .major_img .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .major_img .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    #major_cover_map .avatar-uploader-icon {
        width: 250px !important;
    }
    .major_img .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    #major_cover_map .avatar {
        width: 178px !important;
    }

    .school_name .el-input {
        display: block;
    }
</style>

<style scoped>
  .el-button--primary{
    background-color: #009fa0 !important;
    border-color: #009fa0 !important;
    width: auto !important;
    border-radius: 5px !important;
  }

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


/* logo+封面
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
} */
</style>


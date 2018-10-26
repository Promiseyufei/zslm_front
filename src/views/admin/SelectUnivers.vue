<template>
    <div class="Select">
        <div class="Select-top">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>文件上传</el-breadcrumb-item>
                <el-breadcrumb-item>选择院校专业</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="fileSteps Select-steps">
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
                <!-- 查询条件 -->
                <div class="SelectUnivers-condition">
                    <div class="condition-input">
                        <el-input placeholder="请输入内容" v-model="UniversMajorName"></el-input>
                        <el-button size="mini" icon="el-icon-search" @click.native="search"></el-button>
                    </div>
                    <div class="condition-button">
                        <el-button type="primary" @click.native="allCity">全部</el-button>
                    </div>
                </div>
                <!-- 城市按钮 -->
                <el-tabs>
                    <div class="SelectUnivers-city">
                        <el-checkbox-group v-model="checkboxGroup1" v-for="(vals,index) in button" :key="index">
                            <div class="region">{{vals.butregion}}</div>
                            <el-checkbox-button v-model="butname" @click.native="clickCity"
                                                v-for="(val,indexs) in vals.city" :key="indexs" :label="val.name">
                                {{val.name}}
                            </el-checkbox-button>
                        </el-checkbox-group>
                    </div>
                </el-tabs>
                <el-button type="primary" icon="el-icon-search" @click.native="searchMajor">搜索</el-button>
                <!-- 院校专业名称 -->
                <div class="SelectUnivers-majorname">
                    <div class="cityname">{{onecityName}}</div>
                    <!--<el-radio-group v-for="(vals,val) in oneCity" :key="val" v-model="majorname">-->
                        <!--<el-radio-button v-for="(val,vals) in vals.line" :key="vals"-->
                                         <!--:label="val.z_name"></el-radio-button>-->
                    <!--</el-radio-group>-->
                    <el-radio-group v-for="cityline in oneCity" v-model="one">
                        <el-radio-button v-for="city in cityline"
                                         :label="city.z_name" @click.native="selectCity(city.id)"></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="SelectUnivers-majorname">
                    <div class="cityname">{{twocityName}}</div>
                    <el-radio-group v-for="cityline in twoCity" v-model="one">
                        <el-radio-button v-for="city in cityline"
                                         :label="city.z_name" @click.native="selectCity(city.id)"></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="ellipsis">……</div>
                <div class="page">
                    <el-pagination background layout="prev, pager, next"
                                   :current-page="page"
                                   :page-size="1"
                                   :total="count"
                                   @current-change="handleCurrentChange"
                                  >
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="footer">
            <span class="Selected" v-if="this.majorname">当前已选择：<span class="majorname">{{majorname}}</span></span>
        </div>
        <div class="jumpPage">
            <el-button type="primary" @click.native="jumpPage">下一步，上传文件</el-button>
        </div>

    </div>
</template>
<script>
    const buttons = [
        {
            butregion: '华北',
            city: [
                {name: '北京市'},
                {name: '天津市'},
                {name: '河北省'},
                {name: '山西省'},
                {name: '内蒙古'}
            ]
        },
        {
            butregion: '东北省',
            city: [
                {name: '辽宁省'},
                {name: '吉林省'},
                {name: '黑龙江省'},
            ]
        },
        {
            butregion: '华东',
            city: [
                {name: '上海市'},
                {name: '江苏省'},
                {name: '浙江省'},
                {name: '江西省'},
                {name: '安微省'},
                {name: '福建省'},
                {name: '山东省'}
            ]
        },
        {
            butregion: '中南',
            city: [
                {name: '河南省'},
                {name: '湖北省'},
                {name: '湖南省'},
                {name: '广东省'},
                {name: '广西省'},
                {name: '海南省'}
            ]
        },
        {
            butregion: '西南',
            city: [
                {name: '重庆市'},
                {name: '四川省'},
                {name: '贵州省'},
                {name: '云南省'},
                {name: '西藏'}
            ]
        },
        {
            butregion: '西北',
            city: [
                {name: '陕西省'},
                {name: '甘肃省'},
                {name: '青海省'},
                {name: '宁夏省'},
                {name: '新疆省'}
            ]
        },
        {
            butregion: '港澳台',
            city: [
                {name: '香港市'},
                {name: '澳门市'},
                {name: '台湾省'},
            ]
        },
    ];
    export default {
        data() {
            return {
                //查询条件
                one:'',
                page:1,
                UniversMajorName: '',
                butname: '',

                //默认选择所有城市
                checkboxGroup1: ['北京市', '天津市', '河北省', '山西省', '内蒙古', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省',
                    '浙江省', '江西省', '安微省', '福建省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西省', '海南省',
                    '重庆市', '四川省', '贵州省', '云南省', '西藏', '陕西省', '甘肃省', '青海省', '宁夏省', '新疆省', '香港市', '澳门市', '台湾省'],
                test: ['河南省'],
                button: buttons,//从const buttons 引入

                //院校专业
                onecityName: '',
                twocityName: '',
                region: [
                    {name: ''},
                ],
                oneCity: {
                    line: {
                        majorname: '',
                    },
                },
                twoCity: {
                    line: {
                        majorname: '',
                    },
                },
                majorname: ' ',

                //分页
                count: 17,//分页总数
            };
        },
        methods: {
            //初次进入页面，获取的院校专业
            getcity_info: function () {
                var that = this;
                axios.post('/admin/SelectUnivers/getcity-info', {
                    //后台参数，前台参数(传向后台)
                    butname: that.butname,
                })
                    .then(function (response) {
                        var res = response.data;
                        if (res.code == 0) {
                            that.onecityName = res.onecityName;
                            that.twocityName = res.twocityName;
                            that.oneCity = res.oneCity;
                            that.twoCity = res.twoCity;
                        }
                        ;
                    })
                    .catch(function (error) {
                    });
            },
            //点击城市按钮
            clickCity: function () {
                var that = this;
            },

            selectCity:function(val){
                this.majorname = val;
            },
            //点击搜索按钮
            search: function () {
                var that = this;
            },
            //点击全部按钮
            allCity: function () {
                var that = this;
                axios.post('/admin/SelectUnivers/clickgetcity-info', {
                    //后台参数，前台参数(传向后台)
                    butname: that.butname,
                })
                that.checkboxGroup1 = ['北京市', '天津市', '河北省', '山西省', '内蒙古', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省',
                    '浙江省', '江西省', '安微省', '福建省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西省', '海南省',
                    '重庆市', '四川省', '贵州省', '云南省', '西藏', '陕西省', '甘肃省', '青海省', '宁夏省', '新疆省', '香港市', '澳门市', '台湾省']
            },

            searchMajor(){
                this.count = Math.ceil(this.checkboxGroup1.length/2);
                console.log(this.checkboxGroup1.length)
                this.getMajor();
            },
            handleCurrentChange(val){
                this.page = val;
                this.getMajor();
            },
            getMajor: function () {

                let searchs = [];

                    this.onecityName = searchs[0] = this.checkboxGroup1[ (this.page-1)*2]
                    this.twocityName = searchs[1] = this.checkboxGroup1[2*this.page-1]

                let that = this
                this.fetch('/admin/files/getmajorbypro', {
                    provice:searchs,
                    majorname:that.UniversMajorName
                }).then(res => {

                    let first_index = 0;
                    let majors = new Array();
                    majors[first_index] = new Array();
                    for(let i in res.result[0]){
                        if(i % 5 == 0 && i!=0){
                            ++first_index;
                            majors[first_index] = new Array();
                        }

                        majors[first_index].push(res.result[0][i])

                    }
                    that.oneCity = majors;
                    console.log(that.oneCity)
                    first_index = 0;
                    majors = new Array();
                    majors[first_index] = new Array();
                    for(let i in res.result[1]){
                        if(i % 5 == 0 && i!=0){
                            ++first_index;
                            majors[first_index] = new Array();
                        }

                        majors[first_index].push(res.result[1][i])

                    }
                    that.twoCity = majors;
                })
            },
            //跳转页面按钮
            jumpPage: function () {
                // if (this.majorname) {

                this.$router.push('/filesManage/fileup/' + this.majorname);
                // }
            },
        },
        mounted() {
            // this.getMajor();
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

    .SelectUnivers-majorname .el-radio-button__inner {
        background: #e9eef3;
        border: 1px solid #e9eef3;
        color: #333;
    }

    .SelectUnivers-majorname .el-radio-button:first-child .el-radio-button__inner {
        /*border-left: 1px solid #e9eef3;*/
    }

    .SelectUnivers-majorname .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        color: #409EFF;
        background-color: #e9eef3;
        border-left: 1px solid #e9eef3;
    }

    .SelectUnivers-majorname .el-radio-group {
        /*font-size: 12px;*/
    }

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

</style>

<style scoped>
    .jumpPage {
        width: 200px;
        margin: 95px auto 0;
    }

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
        width: 50px;
        line-height: 60px;
        font-size: 12px;
        color: #666;
        text-align: right;
    }

    .cityname {
        margin: 0 0 0 15px;
        font-size: 14px;
        color: #666;
    }

    .page {
        text-align: right;
        background-color: #e9eef3;
        margin: 20px 0 40px 0;
    }

    .SelectUnivers-majorname {
        /*height: 500px;*/
        margin: 40px 0 0 45px;
        display: flex;
        flex-direction: column;
    }

    .SelectUnivers-city {
        margin: 50px 0 0 50px;
    }

    .leftImg i {
        margin: 0 10px 0;
    }

    .leftImg {
        margin: 50px 0 0;
        color: #FFF;
        font-size: 14px;
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
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
        margin: 0 0 50px 0;
    }

    .SelectUnivers-condition, .condition-input {
        display: flex;
    }

    .SelectUnivers-right {
        width: 1320px;
        border: 1px solid #DDD;
        border-left: 1px solid #fff;
    }

    .SelectUnivers-left {
        z-index: 1;
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
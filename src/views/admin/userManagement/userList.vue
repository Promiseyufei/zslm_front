<template>
    <div>
        <el-breadcrumb separator="/" style="width: 1500px;margin: 0 auto 20px">
            <el-breadcrumb-item>账户管理</el-breadcrumb-item>
            <el-breadcrumb-item><div class="now-page">注册用户</div></el-breadcrumb-item>
        </el-breadcrumb>
        <div style="width: 1500px;margin: 0 auto 20px">
            <el-button class="query-button" type="primary" icon="el-icon-upload2"  @click.native = "query" style="float: none">导出</el-button>
        </div>
        <div class="filesquery">
            <i class="el-icon-search"></i>
            <p class="screen">筛选查询</p>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="dataquery-refresh" @click.native = "query">刷新</el-button>
        </div>

        <div class="filesForm">

            <el-form class="input" v-model="userFrom" label-width="80px" style="width: 100%">
                <el-form-item label="手机号">
                    <el-input size="medium" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input size="medium" placeholder="请输入用户昵称"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input size="medium" placeholder="请输入用户姓名"></el-input>
                </el-form-item>
                <el-form-item style="float: right">
                    <el-button class="query-button" type="primary" icon="el-icon-search"  @click.native = "query">查询</el-button>
                </el-form-item>
            </el-form>

        </div>

        <div class="files-datalist">
            <i class="el-icon-tickets"></i>
            <p class="screen">数据列表</p>
            <div class="datalist-selecttwo">
                <el-select size="mini" v-model="Sorting" placeholder="默认顺序" style="width: 100px">
                    <el-option v-for="(item,index) in sorting" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="file-table">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
            <Page :total="total" @pageChange="pageChange" @click.native = "query"></Page>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userFocusMajor",
        data(){
            return {
                name:'',
                major:'',
                realname:'',
                Sorting:0,
                userFrom: '',
                sorting:[
                    { value:'0',label:'id升序' },
                    { value:'1',label:'id降序' }
                ],
                sort:[
                    {value: '选项一',label: '10条'},
                    {value: '选项二',label: '50条'},
                    {value: '选项三',label: '100条'},
                ],
                tableTop:[
                    {type:'',prop:'user_account_id',label:'帐户ID',width:112},
                    {type:'',prop:'create_time',label:'用户创建时间',width:202},
                    {type:'',prop:'updatetime',label:'信息更新时间',width:202},
                    {type:'',prop:'wechat',label:'微信',width:70},
                    {type:'',prop:'wb',label:'微博',width:70},
                    {type:'',prop:'head_portrait',label:'用户头像',width:100},
                    {type:'',prop:'user_name',label:'昵称',width:100},
                    {type:'',prop:'real_name',label:'真实姓名',width:100},
                    {type:'',prop:'sex',label:'性别',width:70},
                    {type:'',prop:'address',label:'常住地',width:100},
                    {type:'',prop:'schooling_id',label:'最高学历',width:100},
                    {type:'',prop:'graduate_school ',label:'毕业院校',width:100},
                    {type:'',prop:'industry ',label:'所属行业',width:100},
                    {type:'',prop:'worked_year ',label:'工作年限',width:100},
                ],
                tableData:[{
                    createtime:'2018-9-9',
                    userid: '111',
                    name: 'test',
                    realName:'test',
                }],

                /**分页**/
                total:0,
                searchContent:{
                    page:1,
                    limit:5,
                },
            }
        },
        methods:{
            query:function () {

                var that = this;
                this.fetch('/admin/accounts/getuser',{
                    //后台参数，前台参数(传向后台)
                        page: that.searchContent.page,
                        pageSize: that.searchContent.limit,
                        name: that.name,
                        major: that.major,
                        realname: that.realname,
                })
                    .then(function (response) {
                        var res = response;
                        if (res.code == 0) {
                            that.tableData =res.result[0];
                            that.total = 10;
                        };
                    })
                    .catch(function (error) {
                    });
            },
            //用户输入字符进行html解码
            htmlDecode:function (text){
                //1.首先动态创建一个容器标签元素，如DIV
                var temp = document.createElement("div");
                //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
                temp.innerHTML = text;
                //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
                var output = temp.innerText || temp.textContent;
                temp = null;
                return output;
            },
            getOneUser:function(id){
                let that = this;
                this.fetch('/admin/accounts/getoneuser',{
                        id:id

                }).then(res=>{
                    if(res.code == 0){
                        that.oneUserMsg = res.result;
                        return 0;
                    }
                    else{
                        return 1;
                    }
                }).catch(function (error) {
                    return 1;
                })
            },
            handleClick:function(val){
                let that = this;
                if(this.oneUserMsg == null){
                    let requestJudge = this.getOneUser(val.user_account_id)
                    if(requestJudge == 0){
                        console.log(111)
                    }
                }
                val.head_portrait='http://img5.imgtn.bdimg.com/it/u=415293130,2419074865&fm=27&gp=0.jpg'
                val.user_name='test'
                this.$alert('<div class="motai-body">' +
                    '<div>' +
                    '<img class="motai-img" src="'+that.htmlDecode(val.head_portrait)+'">' +
                    '<p class="motai-name"><b>'+that.htmlDecode(val.real_name)+'</b></p></div>' +
                    '</div>' +
                    '<div>' +
                    '<div class="motai-line">' +
                    '<div class="motai-line-title">test</div>' +
                    '<div class="motai-line-content">testtesttesttesttesttesttesttesttesttesttesttesttesttestte</br>sttesttesttesttesttest</div>' +
                    '</div>' +
                    '</div>',
                    {
                        dangerouslyUseHTMLString: true
                    });
            },
            pageChange(msg){

                this.searchContent.page = msg.page;
                this.searchContent.limit = msg.limit;
                //分页改变时，更新表格数据
                if (this.searchContent.page) {
                    this.query();
                };

            }
        },
        mounted(){
            // this.getPage();
            this.query();
        }
    }
</script>

<style scoped>
    /**当前面包屑**/
    .now-page{
        padding-bottom: 3px;
        border-bottom: solid 1px #68c368;
    }

    .el-form-item{
        display: inline-block;
        width: 20%;
    }
    .filesquery {
        width: 1500px;
        height: 50px;
        margin: 0 auto;
        background-color: #F3F3F3;
        position: relative;
        display: flex;
        align-items:center;
    }
    .screen {
        font-weight: bold;
        font-size: 16px;
        color: #666;
        font-family:'Tahoma';
    }
    .dataquery-refresh {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666;
        background-color: #fff;
        border:1px solid #CCC;
        border-radius:0;
    }

    .query-button{
        float: right;
        color: #666;
        background-color: #fff;
        border:1px solid #CCC;
        border-radius:0;
    }

    .datalist-selecttwo {
        display: inline-block;
        position: absolute;
        right: 10px;
    }

    .files-datalist {
        display: flex;
        align-items:center;
        position: relative;
        width: 1500px;
        height: 50px;
        background: #f3f3f3;
        margin: 0 auto;
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
        margin: 0 auto;
    }

    .footer {
        border: 1px solid #E4E4E4;
        text-align: right;
        width: 1500px;
        height: 50px;
        background-color: #fdfdfe;
        margin: 20px auto;
        display: flex;
        align-items:center;
        justify-content:flex-end;
    }
    .el-pagination {
        color: #999;
        font-weight: 500;
    }
</style>
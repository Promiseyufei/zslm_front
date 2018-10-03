<template>
    <div>
        <el-breadcrumb separator="/" style="width: 1500px;margin: 0 auto 20px">
            <el-breadcrumb-item>账户管理</el-breadcrumb-item>
            <el-breadcrumb-item>注册用户</el-breadcrumb-item>
            <el-breadcrumb-item><div class="now-page">领优惠券</div></el-breadcrumb-item>
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
                <el-form-item label="优惠券id">
                    <el-input size="medium" placeholder="请输入优惠券id"></el-input>
                </el-form-item>
                <el-form-item label="优惠券">
                    <el-input size="medium" placeholder="请输入优惠券"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input size="medium" placeholder="请输入用户昵称"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input size="medium" placeholder="请输入用户姓名"></el-input>
                </el-form-item>
                <el-form-item style="float: right;width: 200px">
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
                    {type:'',prop:'couponsid',label:'优惠券id',width:150},
                    {type:'',prop:'couponsname',label:'优惠券名称',width:150},
                    {type:'',prop:'couponsinstitutions',label:'优惠券所属机构',width:300},
                    {type:'',prop:'userid',label:'帐户ID',width:150},
                    {type:'',prop:'username',label:'昵称',width:150},
                    {type:'',prop:'userrealname',label:'真实姓名',width:150},
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
                    page:'',
                    limit:'',
                },
            }
        },
        methods:{
            handleClick(val){
                this.$alert('<div class="motai-body">' +
                                '<div>' +
                                        '<img class="motai-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538373522206&di=1f7c96f5122a88d5ec27217820edee17&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F267f9e2f07082838338d0915b599a9014c08f12b.jpg">' +
                                        '<p class="motai-name"><b>star</b></p></div>' +
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
            }
        }
    }
</script>
<style>
    .motai-body{
        width: 80%;
        margin: 0 auto;
    }
    .motai-img{
        width: 100px;
        height: 100px;
        border: solid 1px #c7c7c7;
        border-radius: 50%;
        background-size: cover;
    }
    .motai-name{
        font-size: 20px;
        width: 100px;
        display: inline-block;
        position: relative;
        bottom: 44px;
        padding-left: 20px;
    }
    .motai-line{
        width: 100%;
        margin-top: 20px;
    }
    .motai-line-title{
        width: 25%;
        display: inline-block;
        text-align: end;
        font-size: 18px;
    }
    .motai-line-content{
        padding-left: 20px;
        width: 64%;
        display: inline-block;
        font-size: 18px;
    }
</style>

<style scoped>
    /**模态框**/

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
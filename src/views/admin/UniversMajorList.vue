<template>
    <div class="majorlist">
        <div class="majorlist-top">
            <p>运营管理</p>
            <p class="span">/</p>
            <p>分享管理</p>
        </div>
        <div class="majorlist-button">
            <el-button type="primary">新建</el-button>
        </div>
        <div class="majorlist-query">
            <i class=""></i>
            <p>筛选查询</p>
            <div></div>
            <el-button size="mini" type="primary" icon="el-icon-refresh" class="majorlist-queryrefresh" @click.native = "gettable_info">刷新</el-button>
        </div> 
        <div class="majorlist-form">
            <el-form class="majorlist-input" ref="filesForm" :model="filesForm" label-width="80px">
                <el-form-item label="院校专业">
                    <el-input size="mini" v-model="filesForm.name1" placeholder="输入文件名称"></el-input>
                </el-form-item>
                <el-form-item label="展示状态">
                    <el-select size="mini" v-model="filesForm.type" placeholder="全部">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="推荐状态">
                    <el-select size="mini" v-model="filesForm.type" placeholder="全部">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button size="mini" type="primary" icon="el-icon-search" class="majorlist-queryrefresh">查询</el-button>
        </div>
        <div class="majorlist-list">
            <i class=""></i>
            <p>内容列表</p>
            <div></div>
            <el-select size="mini" class="majorlist-selectone" v-model="value" placeholder="默认顺序">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="majorlist-table">
            <el-table :data="majorlisttable" @current-change="handleCurrentChange" border style="width: 100%">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="编号" prop="id" width="100"></el-table-column>
                <el-table-column label="展示权重" width="100">
                    <template slot-scope="scope">
                        <el-input v-model="input"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="展示状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="value2"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="推荐状态" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="value3" active-color="#999" inactive-color="#409eff">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="210">
                    <template slot-scope="scope">
                        <div class="majorlist-icon">
                            <i class="el-icon-search"></i>
                            <i class="el-icon-edit-outline"></i>
                            <i class="el-icon-delete"></i>
                            <i class="el-icon-refresh"></i>
                            <i class="el-icon-tickets"></i>
                        </div>
                    </template>
                </el-table-column>
                <div v-for="(val, index) in tableTop" :key="index">
                  <el-table-column :type="val.type" :prop="val.prop" :label="val.label" :width="val.width">
                  </el-table-column>
                </div>
            </el-table>
        </div>
        <!-- <div class="footer"> 
            <Page ref = "page" :count="count" :number="number" :currentPage4="currentPage4" @gettable_info="gettable_info" @showbox="toshow2" :msg="msg"></Page>
        </div> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableTop:[
                  {type:'',prop:'name',label:'院校专业名称',width:580},
                  {type:'',prop:'project',label:'招生项目',width:100},
                  {type:'',prop:'time',label:'发布时间',width:160},
                ],
                majorlisttable:[{
                  id:'',
                  name:'',
                  project:'',
                  time:'',
                }],
                value:'',
                value2:'',
                value3:true,
                input:0,
                filesForm: {
                    name1:'',
                    type:'',
                },
                options: [
                    {
                      value: '选项1',
                      label: '时间'
                    }, 
                    {
                      value: '选项2',
                      label: '浏览量'
                    }, 
                    {
                      value: '选项3',
                      label: '招生项目'
                    }
                ],
            }
        },
        methods:{
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            gettable_info:function(){
                var that = this;
                axios.post('/admin/UniversMajorList/gettable-info',{
                    // type: that.filesForm.type,
                    // name1: that.filesForm.name1,
                })
                .then(function (response) {
                    // that.page++;
                    var res = response.data;
                    if (res.code == 0) {
                        that.majorlisttable = res.data;
                        that.id = res.id;
                        console.log(that.id);
                    };
                })
                .catch(function (error) {
                    // console.log(error);
                });
            }
        },
        mounted(){
            this.gettable_info();
        },
    }

</script>

<!-- 全局样式 -->
<style>

    /*表头文本居中*/
    .majorlist-table .el-table th.is-leaf {
        text-align: center;
    }
</style>

<!-- 局部样式 scoped -->
<style scoped>
    .el-table {
        color: #333;
    }
    .el-button--text {
        color: #333;
    }
    .el-button--text:hover {
        color: #1ABC9C;
    }
    .el-table th>.cell {
        text-align: center;
    }
    .el-pagination {
        color: #999;
        font-weight: 500;
    }
    .footer {
        border: 1px solid #E4E4E4;
        text-align: right;
        width: 1500px;
        background-color: #fdfdfe;
        margin: 20px auto;
    }
    .el-table thead {
        background: #f9fafc;
    }
    .el-table th>.cell {
        font-size: 12px;
        font-weight: bold;
        color: #666; 
        text-align: center;
    }
    .majorlist-icon i {
        margin: 0 3px;
    }
    .majorlist-icon {
        font-size: 20px;
        color: #999;
    }
    .majorlist-table .el-input {
        width: 40px;
    }
    .majorlist-table {
        width: 1500px;
        margin: 0 auto;
        text-align: center;
    }
    .majorlist-selectone {
        position: absolute;
        right: 10px;
        width: 100px;
        margin: 10px 0;
    }
    .majorlist-input {
        display: flex;
    }
    .majorlist-form {
        display: flex;
        position: relative;
        width: 1500px;
        margin: 20px auto;
    }
    .majorlist-queryrefresh {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666; 
        background-color: #fff; 
        border:1px solid #CCC;
        border-radius:0;
    }
    .majorlist-query p,.majorlist-list p {
        font-size: 16px;
        color: #666;
        font-weight: bold;
        padding: 0 20px;
    }
    .majorlist-query,.majorlist-list {
        position: relative;
        display: flex;
        width: 1500px;
        height: 50px;
        background:#f3f3f3;
        margin: 0 auto;
    }
    .majorlist-button {
        margin: 0 0 20px 60px;
    }
    .span {
        margin: 10px 6.5px;
    }
    .majorlist-top p {
        font-size: 10px;
        color: #999;
    }
    .majorlist-top {
        display: flex;
        margin: 0 0 10px 60px;
    }


</style>

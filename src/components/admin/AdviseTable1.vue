<template >
    <div>
        <!-- 表格 -->
        <div class="operateTable">
        <template>
            <el-table :data="tableData3"  border style="width: 100%" :header-cell-style="getRowClass">
            <el-table-column
                v-for="(list,index) in listTable"
                :prop="list.prop"
                :label="list.lable"
                :width="list.width" :key = "index" v-if="index == 1">
                <template slot-scope="scope" >
                    <el-input v-model="tableData3[scope.$index].show_weight" @focus="focusCount(tableData3[scope.$index].show_weight)" v-on:blur="changeCount(tableData3[scope.$index].show_weight, scope.$index)"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                :prop="list.prop"
                :label="list.lable"
                :width="list.width" v-else>
            </el-table-column>
            <el-table-column
                label="操作"
                width="140">
                <template slot-scope="scope">
					 <el-button type="text" size="small" @click="show(scope.row.id, scope.row)">查看</el-button>
                <el-button type="text" size="small" @click="deleteSingle(scope.row.id, scope.row)">删除</el-button>
                </template>
            </el-table-column>
            </el-table>
        </template>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            TableValue: 0,
        }
    },
    props:["tableData3","listTable"],
    methods:{
		show:function(id,val){
			this.$emit('showPage', id)
		},
        // 表单获得焦点触发事件
        focusCount: function(val) {
            this.TableValue = val;
            console.log(this.TableValue);
        },

        // 鼠标失去焦点时触发事件，val=>当前input里面的值，index=>当前行的下标
        changeCount: function(val,index) {
            var re = /^[0-9]+.?[0-9]*$/;
            if (!re.test(val)) {
                this.message(true,'请输入数值','warning');
                this.tableData3[index].show_weight = this.TableValue;
            } else if (val<0||val>1000) {
                this.message(true,'权值范围为0~100','warning');
                this.tableData3[index].show_weight = this.TableValue;
            } else {
                this.$emit('setInfoRelation',this.tableData3[index].id, this.tableData3[index].show_weight,this.TableValue,index);
            }
        },
    },
    mounted(){
    //   console.log(this.tableData3);
    }
};
</script>

<style>
.operateTable .cell {
    text-align: center;
    font-size: 12px;
}  
</style>
<style scoped>
.operateTable {
    margin-top: 25px;
}
</style>
    
    
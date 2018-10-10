<template >
    <div>
        <!-- 表格 -->
        <div class="operateTable">
            <template>
                <el-table :data="tableData"  border style="width: 100%" :header-cell-style="getRowClass">
                    <el-table-column
                        :prop="list.prop"
                        :label="list.lable"
                        :width="list.width"
                        v-for="(list,index) in listTable"
                        :key = "index">
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

        }
    },
    props:["tableData","listTable"],
    methods:{
        
    },
    mounted(){

    }
};
</script>
<style>
    
</style>
<style scoped>
    .operateTable {
        margin-top: 50px;
    }
</style>
    
    
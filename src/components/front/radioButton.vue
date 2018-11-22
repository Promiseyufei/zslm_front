<template>
    <div>
        <div class="radioButton">
            <el-col :span="8">
                <el-card shadow="hover">
                    <div class="overHidden">
                        <div class="allButton">
                        专业类型
                            <el-radio-group v-model="z_type">
                                <el-radio-button label="上海"></el-radio-button>
                                <el-radio-button label="北京"></el-radio-button>
                                <el-radio-button label="广州"></el-radio-button>
                                <el-radio-button label="深圳"></el-radio-button>
                            </el-radio-group>
                        </div>
                        <div>更多专业<span><i class="el-icon-caret-bottom"></i></span></div>
                    </div>
                </el-card>
            </el-col>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                z_type:'上海'
            }
        },
        methods: {

        },
        mounted(){

        },
    };
</script>
<style>

    .radioButton .el-card__body {
        padding: 0 30px;
        height: 371px;
    }
    .radioButton .el-col-8 {
        width: 1220px;
        height: 371px;
    }
    
</style>
<style scoped>

    .allButton {
        height: 61px;
        padding-top: 15px; 
    }
    .overHidden {
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .radioButton {
        width:1280px;
        margin: 0 auto;
    }
</style>
<template>
    <div id="app">
        <el-container >
            <el-aside width="auto">
                <Navigation :collapse="isCollapse"></Navigation> 
            </el-aside>
            <el-container>
                <el-header style="display:flex;align-items:center">
                    <el-button type="primary" v-if="isCollapse" @click="isCollapse = !isCollapse">展开导航</el-button>
                    <el-button type="primary" v-else @click="isCollapse = !isCollapse">关闭导航</el-button>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {

        }
    }

</script>

<style scoped>

    body {
      padding: 0;
      margin: 0;
    }
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      /* text-align: center; */
      /* line-height: 160px; */
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      /* text-align: center; */
      /* line-height: 200px; */
    }

    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      /* text-align: center; */
      /* line-height: 60px; */
    }

</style>

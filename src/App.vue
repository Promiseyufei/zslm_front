<template>
    <div id="app">
        <el-container >
            <el-aside width="auto">
                <Navigation :collapse="isCollapse"></Navigation> 
            </el-aside>
            <el-container>
                <el-header style="display:flex;align-items:center;justify-content:space-between;">
                    <el-button type="primary" v-if="isCollapse" @click="isCollapse = !isCollapse">展开导航</el-button>
                    <el-button type="primary" v-else @click="isCollapse = !isCollapse">关闭导航</el-button>
                    
                    <div>
                        <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
                        <i class="fa fa-bell-o fa-lg" aria-hidden="true"></i>
                        <i class="fa fa-share fa-lg" aria-hidden="true"></i>
                    </div>
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

  /* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>

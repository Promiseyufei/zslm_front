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
                <el-footer class="footer">
                  <p>CopyRight &copy; MBA Helper 2018</p>
                </el-footer>
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
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
    }

    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
    }
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
    .footer {
      background-color: #E9EEF3;
    }
    .footer p {
      text-align: center;
      font-size: 12px;
      color: #c3c3c3;
    }
</style>

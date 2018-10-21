<template>
    <div id="app">
        <el-container :style="{ height: heighttt + 'px' } ">
            <el-aside width="auto">
                <Navigation :collapse="isCollapse"></Navigation> 
            </el-aside>
            <el-container>
                <el-header style="display:flex;align-items:center;justify-content:space-between;">
                    <span v-if="isCollapse" @click="isCollapse = !isCollapse">展</span>
                    <span v-else @click="isCollapse = !isCollapse">收</span>
                    
                    <div class="appNav">
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
                heighttt: window.screen.availHeight,
                isCollapse: true
            };
        },
        methods: {

        },
        mounted() {
            console.log(window.screen.availHeight);
        },
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
      background-color: #fff;
      color: #333;
    }
    .appNav i{
        margin-right: 10px;
    }

    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      padding: 0;
    }
    .el-header span {
        height: 100%;
        width: 20px;
        line-height: 60px;
        color: #e6e6e6;
        background: #009fa0;
        border-top-right-radius: 20px; 
        border-bottom-right-radius: 20px; 
        padding: 0 2px;
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

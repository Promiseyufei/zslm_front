<template>
  <div id="app">
    <el-container >
<<<<<<< HEAD
        <el-aside width="201px">
        <!-- 在components/admin下定义的组件，相当于封装了一个方法Navigation -->
=======
        <el-aside width="auto">
>>>>>>> 786c23532cfba51ad4c0c1211745b6d3bca71d36
          <Navigation></Navigation> 
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
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
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
    }
}

</script>

<style>

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

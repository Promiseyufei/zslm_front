<template>
  
  <!-- <el-container>
      <el-aside >
          <Navigation></Navigation> 
      </el-aside>

      <el-main>
          <router-view/>
      </el-main>
</el-container> -->

  <div id="app">
    <el-container >
        <el-aside width="auto">
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

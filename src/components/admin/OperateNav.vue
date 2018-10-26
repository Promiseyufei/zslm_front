<template>
    <div>
      <!-- 选项卡 -->
      <div class="operateNav">
        <el-radio-group v-model="radio">
          <el-radio-button :label="list.name" v-for="(list, index) in Banner" :key="index" @click.native="open(list.id)"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
            radio:"",
            catchI: 0
        }
    },
    props:["Banner","radio2"],
    watch:{
        radio2: function (val) {
          this.radio = val;
        }
    },
    methods:{
        open(i) {
            if(this.catchI == i) return;
            this.catchI = i;
            this.$emit('showbox',i);
        }
    }
};
</script>

<style>
.el-radio-button__inner {
  font-size: 12px !important;
}
.el-radio-button:first-child .el-radio-button__inner {
    /*color: red;*/
}
</style>
<style scoped>
/*
* 选项卡样式
*/
.operateNav {
  margin: 20px 0;
  
}
.operateNav .el-radio-button {
  margin-right: 10px;
}

</style>

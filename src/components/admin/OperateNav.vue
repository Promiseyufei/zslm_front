<template>
    <div>
      <!-- 选项卡 -->
      <div class="operateNav">
        <el-radio-group v-model="radio">
          <el-radio-button :label="list.name" v-for="(list,i) in Banner" :key = "i" @click.native="open(list.id)"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
            radio:""
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
            this.$emit('showbox',i);
        }
    }
};
</script>


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

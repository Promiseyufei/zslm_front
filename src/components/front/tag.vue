<template>
  <div>
    <el-tag
    :key="tag"
    v-for="tag in tags"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)">
    {{tag}}
    </el-tag>

    <el-input
    class="input-new-tag"
    v-if="inputVisible"
    v-model="inputValue"
    ref="saveTagInput"
    size="small"
    @keyup.enter.native="handleInputConfirm"
    @blur="handleInputConfirm"
    >
    </el-input>
  </div>
</template>

<script>
export default {
    data(){
    	return{
    		tags:this.tag,
            inputVisible: false,
            inputValue: ''
    	}
    },
    methods:{
        //删除当前选中
        handleClose(tag) {
        this.tags.splice(this.tag.indexOf(tag), 1);
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    },
    props:["tag"],//需要传一个数组
    watch:{

    },
    mounted(){
        // console.log(this.tag)
    }
}
</script>

<style>

</style>

<style scoped>
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }



</style>

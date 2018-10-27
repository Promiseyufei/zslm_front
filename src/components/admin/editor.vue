<template>
    <div>
        <el-button type="primary" @click="startChange3">编辑</el-button>
        <div class="messageBtn">
            <div id="editor">
                <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
            </div>
            <div class="messageEditor">
                <el-button type="primary" plain :disabled = "disabled" @click="messageEmpty">清空</el-button>
                <el-button type="primary" :disabled = "disabled"  @click="messageSubmit">提交</el-button>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            disabled: false,
            // 富文本编辑器
            editorContent:'',
            editor: new WangEditor('#editor'),
        }
    },
    props:["disabled3"],
    watch:{
        disabled3: function (val) {
          this.disabled = val;
        }
    },
    methods: {
        //改变富文本编辑器是否可编辑
        startChange3: function () {
            this.disabled3 = false;
            this.editor.$textElem.attr('contenteditable', true);
        },
        // 提交修改数据
        messageSubmit: function() {
            console.log(this.editor.txt.html());
            this.disabled3 = true;
            this.editor.$textElem.attr('contenteditable', false);
        },
        // 清空富文本编辑器内容
        messageEmpty: function() {
            this.editor.txt.clear();
        },
    },
    mounted(){
        this.editor.customConfig.onchange = (html) => {
            this.editorContent = html;
        }
        this.editor.create();
        this.editor.$textElem.attr('contenteditable', false);
    },
};
</script>
<style>
</style>
<style scoped>
    /*
    * 富文本编辑器
    */
    #editor {
      text-align: left;
    }
    .messageEditor {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;

    }

    .messageBtn button{
      float: right;
    }
    .operateUpfilesRight2 button {
        margin-bottom: 20px;
    }
</style>


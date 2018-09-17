<template>

    <div>

        <div id="editor">
            <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
            <p>小声逼逼：看到这句话的都是傻叉</p>
        </div>

    </div>
</template>


<style scoped>
    #editor {
        background-color: #ffffff;
    }
</style>


<script>
export default {
    data() {
        return {
            editorContent:''
        }
    },
    created() {
        console.log('aaaa');
        this.fetch('/admin/news/test', {}).then((response) => {
            console.log(response);
        })

    },
    mounted() {
        let editor = new WangEditor('#editor');
        editor.customConfig.onchange = (html) => {
            this.editorContent = html;
        }
        editor.create();
    }

}
</script>

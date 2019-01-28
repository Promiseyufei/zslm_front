<template>

    <div>

        <div id="editor">
          
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
        // this.fetch('/admin/news/test', {}).then((response) => {
        //     console.log(response);
        // });


        this.post('/admin/operate/getIndexListName', {}).then((response) => {
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

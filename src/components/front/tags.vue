<template>
    <!-- 模版 -->
    <!-- <tags :tags = "tags" @handleClose="handleClose"></tags> -->
    <div class="fourtagsbox">
        <div class="fourtags" ref="reference">
            <div v-for="(item,index) in tags">
                <el-tag
                    v-for="tag in tags[index]"
                    :key="tag.name"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)"
                    :type="tag.type">
                    {{tag.name}}
                </el-tag>
            </div>
        </div>
        <!-- <span class="tagsspan" ref="span">...</span> -->
    </div>
    
</template>

<script>
export default {
    data(){
    	return{
            list:[],
    	}
    },
    // watch: {
    //     tags: function() {
    //         var dots = this.$refs.reference;
    //         if(dots.offsetWidth>=900)
    //             this.$refs.span.style.display = "block";
    //         else
    //             this.$refs.span.style.display = "none";
    //     }
    // },
    methods:{
        //标签栏，点击标签，删除标签
        handleClose: function(tag) {
            this.$emit('handleClose',tag);
        }
    },
    props:["tags"],//需要传一个数组
    mounted(){
        
    }
}
</script>

<style scoped>
    .fourtags {
        display: flex;
        flex-wrap: wrap;
        /* max-width: 900px; */
    }
    .fourtagsbox {
        display: flex;
        justify-content: flex-start;
        /* max-width: 940px; */
        /* height: 32px; */
        /* overflow: hidden; */
    }
    /* .tagsspan {
        margin-left: 10px;
        color: #1ABC9C;
        display: none;
    } */
</style>

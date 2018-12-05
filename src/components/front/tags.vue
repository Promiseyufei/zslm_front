<template>
    <!-- 模版 -->
    <!-- <tags :tags = "tags" @handleClose="handleClose"></tags> -->
    <div class="fourtags">
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
</template>

<script>
export default {
    data(){
    	return{
    		
    	}
    },
    methods:{
        //标签栏，点击标签，删除标签
        handleClose: function(tag) {
            this.$emit('handleClose',tag);
        }
    },
    props:["tags"],//需要传一个数组
    mounted(){
        // @change="change"
    }
}
</script>

<style scoped>
    .fourtags {
        display: flex;
        flex-wrap: wrap;
    }
</style>

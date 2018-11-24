<template>
  <div>
    <el-tag v-for="tag in tags" :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
    data(){
    	return{
    		tags:this.tag,
    	}
    },
    methods:{
        props:["tag"],
    },
    watch:{

    },
    mounted(){
        console.log(123)
    }
}
</script>

<style>

</style>

<style scoped>

</style>

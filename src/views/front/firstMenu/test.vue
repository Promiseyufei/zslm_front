<template>
  <div>
  	<activityPage :currentPage="page" :totalData="count" :size="page_size" @use="changePageNum"></activityPage>
	<tag :tag='tags'></tag>
  </div>
</template>

<script>
export default {
    data(){
    	return{
            tags:['标签一', '标签二', '标签三', '标签四','标签五'],
    		// dynamicTags: ['标签一', '标签二', '标签三'],
            page:0,
            count:5,
            page_size:10
    	}
    },
    methods:{
    	changePageNum:function(a){

    	}
    }
}
</script>

<style>

</style>

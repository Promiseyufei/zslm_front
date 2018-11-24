<template>
  <div>
  	<activityPage :currentPage="page" :totalData="count" :size="page_size" @use="changePageNum"></activityPage>
	<tag :tag='tag'></tag>
  </div>
</template>

<script>
export default {
    data(){
    	return{
    		tag: [
                { name: '标签一', type: ''},
                { name: '标签二', type: 'success' },
                { name: '标签三', type: 'info' },
                { name: '标签四', type: 'warning' },
                { name: '标签五', type: 'danger' }
            ],
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

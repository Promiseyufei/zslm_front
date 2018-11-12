<template>
    <!-- <div> -->
        <span class="homeBtn">{{text}}</span>
    <!-- </div> -->
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    methods:{
        
    },
    props:["text"],
    mounted(){
        
    }
}
</script>

<style scoped>
    .homeBtn {
        padding: 15px 30px;
        border: 2px solid #009fa0;
        border-radius: 5px;
        color: #009fa0;
    }
    .homeBtn:hover {
        background-color: #009fa0;
        color: #fff;
    }


</style>
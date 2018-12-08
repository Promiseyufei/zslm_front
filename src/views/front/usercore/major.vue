<template>
    <div v-for="(item,index) in this.coupons">
        <user-college :data="item"></user-college>
    </div>

    <el-button  style="float: right" type="text" @click="getPage" :loading="loading" :disabled="disabled">{{ loadingBtnText }}</el-button>
</template>
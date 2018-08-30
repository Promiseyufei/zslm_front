<template>
    <div>
        <el-radio-group style="display:flex;justify-content:center;">
            <img src="../../assets/logo.png" alt="" style="height:60px;width:auto;">
        </el-radio-group>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapse" :unique-opened="unOpend">
            <el-submenu v-for="(item, index) in navigation" :key="index" :index="item.index + ''">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{ item.title }}</span>
                </template>
                <template v-if="typeof item.groups != 'undefined'">
                    <el-menu-item-group v-for="(group, i) in item.groups" :key="i">
                        <span slot="title">{{ group.title }}</span>
                        <el-menu-item v-for="(option, j) in group.options" :key="j" :index="item.index+option.index+''">{{ option.name }}</el-menu-item>
                    </el-menu-item-group>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</template>    


<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
    import navigation from '../../config/navigation.js'
    export default {
        data() {
            return {
                unOpend:false,
                navigation: navigation
            }
        },
        methods: {
            test(index) {
                console.log(index);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        props:['collapse']
    }
</script>

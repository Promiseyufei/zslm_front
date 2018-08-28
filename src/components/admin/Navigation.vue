
<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="!isCollapse">展开</el-radio-button>
        </el-radio-group>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :unique-opened="unOpend">
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
                isCollapse: true,
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
        }
    }
</script>
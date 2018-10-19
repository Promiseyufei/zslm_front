<template>
    <div>
        <el-radio-group class="totalnav">
            <img :src="src" alt="logo">
        </el-radio-group>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapse" :unique-opened="unOpend">
            <el-submenu v-for="(item, index) in navigation" :key="index" :index="item.index + ''">
                <template slot="title">
                    <i :class="item.icon" aria-hidden="true"></i>
                    <span slot="title">{{ item.title }}</span>
                </template>
                <template v-if="typeof item.groups != 'undefined'">
                    <el-menu-item-group v-for="(group, i) in item.groups" :key="i" >
                        <span slot="title">{{ group.title }}</span>
                        <el-menu-item v-for="(option, j) in group.options" :key="j" :index="item.index+option.index+''" @click="reUrl(option.url)">{{ option.name }}</el-menu-item>
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
  .totalnav {
    display:flex;
    justify-content:center;
    align-items: center;
    height: 60px;
    width:100%;
  }
  .totalnav img {
      height: 30px;
  }
</style>

<script>
    import navigation from '../../config/navigation.js'
    export default {
        data() {
            return {
                src: require('../../assets/img/shortlogo.png'),
                test:'1',
                unOpend:false,
                navigation: navigation
            }
        },
        // filters: {
        //     collapse: function (val) {
        //         console.log(val);
        //         return val == true ? '../../assets/logo.png' : '../../assets/img/wateUp.png'
        //     }
        // },
        watch: {
            collapse: function(val) {
                console.log(val);
                this.src = (val == true ? require('../../assets/img/shortlogo.png') : require('../../assets/img/longlogo.png'));
            }
        },
        methods: {
            reUrl(url) {
                (typeof url != undefined) ? this.$router.push(url) :this.$router.go(0);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);

            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {
            console.log(this.collapse);
        },
        props:['collapse']
    }
</script>

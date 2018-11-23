<template>
    <!-- 筛选框 -->
    <div class="publicRowboxbig">
        <div class="publicRowbox">
            <!-- 循环出来列 -->
            <div class="publicRow" v-for="(item,index) in list">
                <span>{{item.type}}</span>
                <nav class="publicRowRight">
                    <div ref="publiccheckbox">
                        <b @click="style(index)" :class="checkboxGroup[index]=='全部'?'ff':'' ">全部</b>
                        <el-checkbox-group v-model="checkboxGroup[index]" @change="handleChange">
                            <!-- 循环出来行 -->
                            <el-checkbox-button v-for="(city,ind) in item.cities" :label="city" :key="ind">{{city.name}}</el-checkbox-button>
                        </el-checkbox-group>
                    </div>
                    <p @click="getMore(index)">
                        <span>查看更多</span>
                        <i class="el-icon-caret-bottom"></i>
                    </p>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkbox: [['全部'],["全部"],["全部"],["全部"],["全部"],["全部"],["全部"],["全部"],["全部"],["全部"]],
            checkboxGroup: this.checkboxGroup1,
            array:document.getElementsByTagName("nav"),
            arrayh:[],
        };
    },
    methods:{
        handleChange: function() {
            this.$emit('change',this.checkboxGroup);
        },
        //点击全部时，清空数组
        style: function(index) {
            console.log(this.checkboxGroup);
            this.checkboxGroup[index] = this.checkbox[0]; 
            console.log(this.checkboxGroup);
        },
        //展开或者合并每行
        getMore:function(index) {
            var a = document.getElementsByTagName("nav")[index];
            if(a.offsetHeight==this.arrayh[index]) {
                a.style.height = "30px";
            }else {
                a.style.height = this.arrayh[index]+"px";
            }
        },
    },
    props:["list","checkboxGroup1"],
    mounted(){
        // this.listarray = this.list;
        //定时器，为了动态的得到正在渲染的dom节点
        var self = this;
        this.$nextTick(()=>{
            setTimeout(() => {
                let divs= self.$refs.publiccheckbox;
                for(let i =0 ;i<divs.length;i++){
                    self.arrayh[i] = divs[i].offsetHeight;
                    divs[i].style.height = "30px";
                }
            }, 1000);
        })
    }
}
</script>
<style>
    .publicRowRight .el-checkbox-button:first-child {
        border: none;
    }
    .publicRowRight .el-checkbox-button__inner {
        border: none;
    }
    .publicRowRight .el-checkbox-button__inner {
        border-left: none !important;
    }
</style>
<style scoped>
.publicRowboxbig {
    display: flex;
    justify-content: center;
}
.ff {
    background-color: #ffb957;
    color: #fff;
}
.publicRowbox {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 0 10px;
    background-color: #fff;
}
.publicRowRight b {
    width: 50px;
    flex-shrink:0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.publicRow {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 15px 30px 0;
    padding-bottom: 15px;
    border-bottom: 1px solid #e6e6e6;
}
.publicRow>span {
    width: 90px;
    flex-shrink:0;
    margin-top: 10px;
}
.publicRowRight {
    display: flex;
    flex-grow:1;
    flex-shrink:1;
    justify-content: space-between;
    align-items: flex-start;
}
.publicRowRight>div {
    display: flex;
    justify-content: space-between;
}
.publicRowRight>p {
    display: flex;
    width: 100px;
    flex-shrink:0;
    justify-content: flex-start;
}
.publicRowRight span {
    flex-shrink:0;
}


/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1200px) {
    .publicRowRight span {
        display: none;
    }
    .publicRow>span {
        width: auto;
    }
    .publicRowRight>p {
        width: auto;
    }
}
</style>
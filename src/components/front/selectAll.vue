<template>
    <!-- 筛选框 -->
    <div class="publicRowboxbig">
        <div class="publicRowbox">
            <!-- 循环出来列 -->
            <div class="publicRow" v-for="(item,index) in list" :key="index">
                <span>{{item.type}}</span>
                <nav class="publicRowRight">
                    <div ref="publiccheckbox">
                        <el-checkbox :indeterminate="isIndeterminate[index]" v-model="checkAll[index]" @change="handleCheckAllChange(index)" :class="checkboxGroup[index]==''?'ff':'' ">全部</el-checkbox>
                        <el-checkbox-group max="1" v-model="checkboxGroup[index]" @change="handleChange">
                            <!-- 循环出来行 -->
                            <el-checkbox-button v-for="(city,ind) in item.cities" :label="city" :key="ind">{{city.name}}</el-checkbox-button>
                        </el-checkbox-group>
                    </div>
                    <p @click="getMore(index,$event)" v-show="list[index].cities.length>=14" class="pcspan">
                        <span>查看更多</span>
                        <i class="el-icon-caret-bottom"></i>
                    </p>
                    <p @click="getMore(index,$event)" class="photospan">
                        <span>查看更多</span>
                        <i class="el-icon-caret-bottom" style="font-size: 12px"></i>
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
            checkbox: [[],[],[],[],[],[],[],[],[],[]],
            checkboxGroup: this.checkboxGroup1,
            array:document.getElementsByTagName("nav"),
            arrayh:[],
            checkAll: [false,false,false],
            isIndeterminate: [true,true,true],
            span2:"",
            span:"",
        };
    },
	
    methods:{
        handleCheckAllChange(index,val) {
            this.checkboxGroup[index] = val ? checkboxGroup[index] : [];
            this.isIndeterminate[index] = false;
            this.$emit('change',this.checkboxGroup);
        },
        handleChange: function() {
            this.$emit('change',this.checkboxGroup);
        },
        //展开或者合并每行
        getMore:function(index,e) {
            var a = document.getElementsByTagName("nav")[index];
            if(a.offsetHeight==this.arrayh[index]) {
                a.style.height = "46px";
            }else {
                a.style.height = this.arrayh[index]+"px";
            }
            e.currentTarget.children[0].innerHTML = e.currentTarget.children[0].innerHTML=="查看更多"?"收起":"查看更多";
            e.currentTarget.children[1].className = e.currentTarget.children[1].className=="el-icon-caret-bottom"?"el-icon-caret-top":"el-icon-caret-bottom";
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
                    divs[i].style.height = "46px";
                }
            }, 1000);
        });
    }
	
	
	
}
</script>
<style>
  .el-checkbox-button__inner{
    font-weight: normal;
    font-size: 16px;
  }

    /*筛选块*/
    .fourtags .el-tag{
        color: #009fa0;
        background-color: unset;
        border-color: rgb(210, 210, 210);
    }

    .publicRowRight .el-checkbox-button.is-checked .el-checkbox-button__inner {
        background-color: #ffb957;
        border-color: #ffb957;
        border-radius: 5px !important;
        box-shadow:-1px 0 0 0 rgb(225, 225, 225);
    }
    .publicRowRight .el-checkbox-button.is-checked .el-checkbox-button__inner:hover {
        color: #fff;
    }
    .publicRowRight .el-checkbox-button__inner:hover {
        color: #ffb957;
    }
    .publicRowRight .el-checkbox__input.is-checked .el-checkbox__label {
        color: #fff;
    }
    .publicRowRight .ff span{
        background-color: #ffb957;
        color: #fff !important;
    }
    .publicRowRight .fff span{
        color: #333 !important;
    }
    .publicRowRight .el-checkbox__label {
        /* width: 50px; */
        flex-shrink:0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 2px;
        font-size: 13px;
        padding: 5px 13px 5px 12px !important;
        font-size: 12px;
        /*line-height: 1;*/
    }
    .publicRowRight .el-checkbox__input {
        display: none;
    }
    .publicRowRight .el-checkbox-button:first-child {
        border: none;
    }
    .publicRowRight .el-checkbox-button__inner {
        border: none;
    }
    .publicRowRight .el-checkbox-button__inner {
        border-left: none !important;
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1200px) {
    .publicRowRight .ff span{
        /*width: 10px !important;*/
        margin: 0 5px;
    }
    .publicRowRight .fff span{
        width: 10px !important;
        margin: 0 5px;
    }
    .publicRowRight .el-checkbox-button__inner {
        padding: 10px 13px;
    }
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .el-checkbox-button__inner {
    font-size: 12px;
  }
}
</style>
<style scoped>

.el-checkbox-button {
    margin-bottom: 8px;
    border-radius: 2px !important;
}
.publicRowboxbig {
    display: flex;
    justify-content: center;
}

.publicRowbox {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 0 10px 60px;
    background-color: #fff;
    border-radius: 5px;
    color: #333;
}
.publicRowbox:hover {
    box-shadow:rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
}

.publicRowRight p {
    font-size: 12px;
    font-weight: normal;
    color: rgb(160, 160, 160);
    cursor: pointer;
    margin-top: 14px;
}

.publicRow {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 15px 30px 0;
    border-bottom: 1px solid #e6e6e6;
  /*height: 61px;*/
}

  .publicRow:last-child{
    border-bottom: none;
  }

.publicRow>span {
    width: 90px;
    flex-shrink:0;
    margin-top: 10px;
    color: #1ABC9C;
    font-size: 16px;
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
    width: 80px;
    flex-shrink:0;
    justify-content: flex-start;
}
.publicRowRight span {
    flex-shrink:0;
}
.photospan {
    display: none !important;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1200px) {
    .publicRowRight span {
        /*display: none;*/
    }
    .publicRow>span {
        width: auto;
        font-size: 12px;
        margin-right: 14px;
    }
    .publicRowRight>p {
        width: 65px;
      margin-top: 10px;
    }
    .ff span{
        width: 10px !important;
    }
    .fff span{
        width: 10px !important;
    }
    .photospan {
        display: block !important;
    }
    .pcspan {
        display: none !important;
    }

  .publicRowbox{
    margin-bottom: 30px;
  }
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .publicRow{
    margin: 15px 10px 0;
  }

  .el-checkbox-button__inner{
    font-size: 12px;
  }
}
</style>

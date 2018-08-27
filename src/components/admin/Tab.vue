<template>
  <div>
    <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;" >
      <el-radio-button :label="item" v-for="item in items" ></el-radio-button>
    </el-radio-group> -->
      <div style="margin: 0 auto; width: 1500px; position:relative;">
        <el-button size="small" type="primary">点击上传</el-button>
        <el-tabs type="border-card">
        <!-- <el-tab-pane :label="item" v-for="(item,index) of items" :index="index + ''">{{item.list}}</el-tab-pane> -->
        <el-tab-pane label="全部文件">
          <div>
            <i></i>
            <p class="screen">筛选查询</p>
          </div>
          <el-form class="input" ref="form" :model="form" label-width="80px">
            <el-form-item label="文件名称">
              <el-input placeholder="请输入文件名称"></el-input>
            </el-form-item>
            <el-form-item label="院校名称">
              <el-input placeholder="请输入院校名称"></el-input>
            </el-form-item>
            <el-form-item label="文件年份">
              <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            </el-form-item>
            <el-form-item label="文件类型">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div style="height:1000px;">
            <i></i>
            <p class="screen">数据列表</p>
          </div>
          <click></click>
          <!-- <table></table> -->
        </el-tab-pane>
        <el-tab-pane label="招生简介">2</el-tab-pane>
        <el-tab-pane label="其他文件">3</el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, 
        {
          value: '选项2',
          label: '双皮奶'
        }, 
        {
          value: '选项3',
          label: '蚵仔煎'
        }, 
        {
          value: '选项4',
          label: '龙须面'
        }, 
        {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, 
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, 
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        tabPosition: 'top',
        // isCollapse: true, 
        // activeIndex: '1',
        index: '1',
        items: {
          top: '全部文件',
          right: '招生简介',
          left: '其他文件'
        },
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .table {
    /*width: 100px;*/
    /*height: 100px;*/
  }
  .input {
    display: flex;
    margin: 20px 0 0 0;
  }
  .input div {
    margin-left: 10px;
  }
  .input div>div {
    margin-left: 5px;
  } 
  .el-button--small {
      position: absolute;
      right: 0;
      z-index: 99;
      padding: 9px 15px;
      width: 80px;
      height: 35px;
      background-color: #1ABC9C;
      border-color: #1ABC9C;
  }
  .el-button--small:hover {
    background-color: #1ABC9C;
    opacity: 0.8;
    border-color: #1ABC9C;
  }
  .el-tabs__item {
    line-height: 36px;
    font-size: 12px;
  }
  .el-tabs__nav-scroll {
    background-color: #fff;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item {
     border: 0; 
     margin: 0; 
  }
  .el-main {
    background-color: #fff;
    text-align: center;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active,.el-tabs--border-card>.el-tabs__header .el-tabs__item {
    color: #666;
    border: 1px solid #CCC;
    width: 120px;
    height: 35px;
    margin-left: 10px;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active:hover {
    color: #1ABC9C;
    border: 1px solid #1ABC9C;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    color: #1ABC9C;
    border: 1px solid #1ABC9C;
  }
  .el-tabs--border-card {
    background: #fff;
    border: 0; 
    box-shadow: 0; 
    -webkit-box-shadow: 0 0 0 0 rgba(0,0,0,.12), 0 0 0 0 rgba(0,0,0,.04);
  }
  .screen {
    font-weight: bold;
    font-size: 14px;
    color: #666;
    font-family:'Tahoma';
    background-color: #F3F3F3;
    height: 30px;
    width: 100%;
    border: 1px solid #E4E4E4;
    padding: 15px 0 0 35px;
    text-align: left;
    margin: 5px 0 0 -5px;
  }
</style>
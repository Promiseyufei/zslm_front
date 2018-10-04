import { Loading } from 'element-ui';
export default {
    callDialog:function() {
        alert('公共方法成功啦～');
    },
    // 消息提示框
    message: function(judge, msg, type) {
        return this.$message({
            showClose: judge,
            message: msg,
            type: type
        });
    },

    confirm: function(callBack, catchBack, msg, type, data) {
        msg = typeof msg !== 'undefined' ? msg : '是否取消操作？';
        type = typeof type !== 'undefined' ? type : '提示';
        data = typeof data !== 'undefined' ? data : {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        };
        typeof callBack !== 'function' 
        ? this.$confirm(msg, type, data) 
        : (typeof catchBack !== 'function' 
            ? this.$confirm(msg, type, data).then(callBack) 
            : this.$confirm(msg, type, data).then(callBack).catch(catchBack));
        
    },

    /**
     * 
     * @param {String} request 请求方式：post/get 
     * @param {String} url 请求路由 
     * @param {Object} parameter 请求参数
     * @param {callback} callback 请求返回成功时的回调函数 
     * @param {callback} failCallback 请求返回失败时的回调函数 
     */
    getMajorPageOptions(request, url, parameter, callback, failCallback) {
        if(request == 'post' || request == 'POST') {
            this.post(url, parameter).then((response) => {
                if(response.code == 0) {
                    callback(response);
                }
                else {
                    failCallback(response);
                }
            })
        }
        else if(request == 'get' || request == 'GET') {
            this.fetch(url, parameter).then((response) => {
                response.code == 0 ? callback() : failCallback();
            })
        }
    },

    // 得到省份字典
    getProvince: function() {
        let self = this;
        this.post('/admin/information/getMajorProvincesAndCities',{
        })
        .then(function(response) {
            // console.log(response);
            if (response.code == 0) {
                return response.result;
            }
            else 
                return [];
        })
        .catch(function (error) {
        });
    },

    // 改变表格第一行的背景颜色
    getRowClass: function({ row, column, rowIndex, columnIndex }){
        if (rowIndex == 0) {
            return 'background:#EFEFEF;text-align:center'
        } else {
            return ''
        }
    },

    // 删除单个banner
    deleteSingle: function(res, row) {
        this.$emit('del',res, row);
    },

    // 得到专业字典
    getMajor: function() {
        let self = this;
        this.post('/admin/information/getMajorType',{
        })
        .then(function(response) {
            if (response.code == 0) {
                this.major = response.result;
            };
        })
        .catch(function (error) {
        });
    },

    //加载是否显示
    openFullScreen2() {
        return Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    },

    // 删除所给id序列的banner
    deleteBanner: function(arrayTableId) {
        var self = this;
        console.log(arrayTableId);
        this.confirm(() => {
            this.post('/admin/operate/deleteBannerAd', {
                btId: arrayTableId
            }).then((response) => {
                if(response.code == 0) {
                    this.tableData3.splice(this.tableData3.indexOf(row), 1);
                    this.message(true, response.msg, 'success');
                }
                else {
                    this.message(true, response.msg, 'error');
                }
            })
        }, () => {
            this.message(true, '已取消修改', 'info');
        })
    },
    // 判断是否为链接
    validateImage: function(url) {    
        var xmlHttp ;
        if (window.ActiveXObject)
         {
          xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
         }
         else if (window.XMLHttpRequest)
         {
          xmlHttp = new XMLHttpRequest();
         } 
        xmlHttp.open("Get",url,false);
        xmlHttp.send();
        if(xmlHttp.status==404)
        return false;
        else
        return true;
    },
    // 判断是否是图片
    beforeAvatarUpload:function (file) {
      const isjpeg = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 200;

      if (!isjpeg&&!isPNG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 200MB!');
      }
      return isjpeg || isPNG && isLt2M;
    },
    date: function(date, pattern) {
        if (date == undefined) {
            date = new Date();
        } else {
            date = new Date(date*1000)
        }
        if (pattern == undefined) {
            // pattern = "yyyy-MM-dd hh:mm:ss";
            pattern = "yyyy-MM-dd hh:mm";
        }
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        }
        if (/(y+)/.test(pattern)) {
            pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(pattern)) {
                pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return pattern;
    },
    // 将时间戳 转换为 X天X小时X分钟
    formatDuring: function(mss){
        var days = parseInt(mss / ( 60 * 60 * 24));
        var hours = parseInt((mss % ( 60 * 60 * 24)) / ( 60 * 60));
        var minutes = parseInt((mss % ( 60 * 60)) /  60 );
        var seconds = mss %  60  ;
        return days + " 天 " + hours + " 小时 " + minutes + " 分钟 ";
    },
    //js计算时间为刚刚、几分钟前、几小时前、几天前
    timeago:function(dateTimeStamp){ //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
        var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
        var hour = minute * 60;
        var day = hour * 24;
        var week = day * 7;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();   //获取当前时间毫秒
        var result ;
        // console.log(now)
        var diffValue = now - dateTimeStamp;//时间差
     
        if(diffValue < 0){
            diffValue = Math.floor(Math.abs(diffValue)/1000);
            // console.log(diffValue);
            var tempDay = Math.floor(diffValue/24/60/60);
            var tempHour = Math.floor((diffValue%(24*60*60))/60/60);
            var tempMin = Math.floor((((diffValue%(24*60*60))%(60*60))/60));
            var tempStr = "";
            if(tempDay>0){
                tempStr += tempDay + "天";
            }
            if(tempHour>0){
                tempStr += tempHour + "小时";
            }
            if(tempMin>0){
                tempStr += tempMin +"分钟后";
            }
            // console.log(tempDay,tempHour,tempMin)
            return tempStr;
        }
        var minC = diffValue/minute;  //计算时间差的分，时，天，周，月
        var hourC = diffValue/hour;
        var dayC = diffValue/day;
        var weekC = diffValue/week;
        var monthC = diffValue/month;
        if(monthC >= 1 && monthC <= 3){
            result = " " + parseInt(monthC) + "月前"
        }else if(weekC >= 1 && weekC <= 3){
            result = " " + parseInt(weekC) + "周前"
        }else if(dayC >= 1 && dayC <= 6){
            result = " " + parseInt(dayC) + "天前"
        }else if(hourC >= 1 && hourC <= 23){
            result = " " + parseInt(hourC) + "小时前"
        }else if(minC >= 1 && minC <= 59){
            result =" " + parseInt(minC) + "分钟前"
        }else if(diffValue >= 0 && diffValue <= minute){
            result = "刚刚"
        }else {
            var datetime = new Date();
            datetime.setTime(dateTimeStamp);
            var Nyear = datetime.getFullYear();
            var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
            var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
            var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
            var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
            var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
            result = Nyear + "-" + Nmonth + "-" + Ndate
        }
        return result;
    },
}